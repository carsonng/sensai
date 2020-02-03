<?php
/**
 * @package     FOF
 * @copyright   Copyright (c)2010-2019 Nicholas K. Dionysopoulos / Akeeba Ltd
 * @license     GNU GPL version 2 or later
 */

namespace FOF30\Template;

use FOF30\Container\Container;
use FOF30\Less\Less;
use JDocument;

defined('_JEXEC') or die;

/**
 * A utility class to load view templates, media files and modules.
 *
 * @since    1.0
 */
class Template
{
	/**
	 * The component container
	 *
	 * @var  Container
	 */
	protected $container = null;

	/**
	 * Public constructor
	 *
	 * @param   Container  $container  The component container
	 */
	function __construct(Container $container)
	{
		$this->container = $container;
	}

	/**
	 * Add a CSS file to the page generated by the CMS
	 *
	 * @param   string  $uri      A path definition understood by parsePath, e.g. media://com_example/css/foo.css
	 * @param   string  $version  (optional) Version string to be added to the URL
	 * @param   string  $type     MIME type of the stylesheeet
	 * @param   string  $media    Media target definition of the style sheet, e.g. "screen"
	 * @param   array   $attribs  Array of attributes
	 *
	 * @see self::parsePath
	 *
	 * @return  void
	 */
	public function addCSS($uri, $version = null, $type = 'text/css', $media = null, $attribs = array())
	{
		if ($this->container->platform->isCli())
		{
			return;
		}

		// Make sure we have attributes
		if (empty($attribs) || !is_array($attribs))
		{
			$attribs = [];
		}

		$url      = $this->parsePath($uri);
		$document = $this->container->platform->getDocument();

		// Joomla! 3.7+ uses a single method for everything
		if (version_compare(JVERSION, '3.6.999', 'ge'))
		{
			$options = [
				'version' => $version,
			];

			$attribs['type'] = $type;

			if (!empty($media))
			{
				$attribs['media'] = $media;
			}

			$document->addStyleSheet($url, $options, $attribs);

			return;
		}

		// Joomla! 3.6 and lower have separate methods for versioned and non-versioned files
		$method = 'addStyleSheet' . (!empty($version) ? 'Version' : '');

		if (!method_exists($document, $method))
		{
			return;
		}


		if (empty($version))
		{
			$document->addStyleSheet($url, $type, $media, $attribs);

			return;
		}

		$document->addStyleSheetVersion($url, $version, $type, $media, $attribs);
	}

	/**
	 * Add a JS script file to the page generated by the CMS.
	 *
	 * There are three combinations of defer and async (see http://www.w3schools.com/tags/att_script_defer.asp):
	 * * $defer false, $async true: The script is executed asynchronously with the rest of the page
	 *   (the script will be executed while the page continues the parsing)
	 * * $defer true, $async false: The script is executed when the page has finished parsing.
	 * * $defer false, $async false. (default) The script is loaded and executed immediately. When it finishes
	 *   loading the browser continues parsing the rest of the page.
	 *
	 * When you are using $defer = true there is no guarantee about the load order of the scripts. Whichever
	 * script loads first will be executed first. The order they appear on the page is completely irrelevant.
	 *
	 * @param   string   $uri      A path definition understood by parsePath, e.g. media://com_example/js/foo.js
	 * @param   boolean  $defer    Adds the defer attribute, see above
	 * @param   boolean  $async    Adds the async attribute, see above
	 * @param   string   $version  (optional) Version string to be added to the URL
	 * @param   string   $type     MIME type of the script
	 *
	 * @see self::parsePath
	 *
	 * @return  void
	 */
	public function addJS($uri, $defer = false, $async = false, $version = null, $type = 'text/javascript')
	{
		if ($this->container->platform->isCli())
		{
			return;
		}

		$url      = $this->container->template->parsePath($uri);
		$document = $this->container->platform->getDocument();

		// Joomla! 3.7+ uses a single method for everything
		if (version_compare(JVERSION, '3.6.999', 'ge'))
		{
			$options = [
				'version' => $version,
			];

			$attribs['defer'] = $defer;
			$attribs['async'] = $async;

			if (!empty($media))
			{
				$attribs['mime'] = $type;
			}

			$document->addScript($url, $options, $attribs);

			return;
		}

		// Joomla! 3.6 and lower have separate methods for versioned and non-versioned files
		$method = 'addScript' . (!empty($version) ? 'Version' : '');

		if (!method_exists($document, $method))
		{
			return;
		}


		if (empty($version))
		{
			$document->addScript($url, $type, $defer, $async);

			return;
		}

		$document->addScriptVersion($url, $version, $type, $defer, $async);
	}

	/**
	 * Compile a LESS file into CSS and add it to the page generated by the CMS.
	 * This method has integrated cache support. The compiled LESS files will be
	 * written to the media/lib_fof/compiled directory of your site. If the file
	 * cannot be written we will use the $altPath, if specified
	 *
	 * @param   string $path          A path definition understood by parsePath pointing to the source LESS file,
	 *                                e.g. media://com_example/less/foo.less
	 * @param   string   $altPath     A path definition understood by parsePath pointing to a precompiled CSS file,
	 *                                used when we can't write the generated file to the output directory,
	 *                                e.g. media://com_example/css/foo.css
	 * @param   boolean  $returnPath  Return the URL of the generated CSS file but do not include it. If it can't be
	 *                                generated, false is returned and the alt files are not included
	 * @param   string   $version     (optional) Version string to be added to the URL
	 * @param   string   $type        MIME type of the stylesheeet
	 * @param   string   $media       Media target definition of the style sheet, e.g. "screen"
	 * @param   array    $attribs     Array of attributes
	 *
	 * @see self::parsePath
	 *
	 * @since 2.0
	 *
	 * @return  mixed  True = successfully included generated CSS, False = the alternate CSS file was used, null = the source file does not exist
	 */
	public function addLESS($path, $altPath = null, $returnPath = false, $version = null, $type = 'text/css', $media = null, $attribs = array())
	{
		// Does the cache directory exists and is writeable
		static $sanityCheck = null;

		// Get the local LESS file
		$localFile = $this->parsePath($path, true);

		$filesystem   = $this->container->filesystem;
		$platformDirs = $this->container->platform->getPlatformBaseDirs();

		if (is_null($sanityCheck))
		{
			// Make sure the cache directory exists
			if (!is_dir($platformDirs['media'] . '/lib_fof/compiled/'))
			{
				$sanityCheck = $filesystem->folderCreate($platformDirs['media'] . '/lib_fof/compiled/');
			}
			else
			{
				$sanityCheck = true;
			}
		}

		// No point continuing if the source file is not there or we can't write to the cache

		if (!$sanityCheck || !is_file($localFile))
		{
			if (!$returnPath)
			{
				if (is_string($altPath))
				{
					$this->addCSS($altPath, $version, $type, $media, $attribs);
				}
				elseif (is_array($altPath))
				{
					foreach ($altPath as $anAltPath)
					{
						$this->addCSS($anAltPath, $version, $type, $media, $attribs);
					}
				}
			}

			return false;
		}

		// Get the source file's unique ID
		$id = md5(filemtime($localFile) . filectime($localFile) . $localFile);

		// Get the cached file path
		$cachedPath = $platformDirs['media'] . '/lib_fof/compiled/' . $id . '.css';

		// Get the LESS compiler
		$lessCompiler = new Less;
		$lessCompiler->formatterName = 'compressed';

		// Should I add an alternative import path?
		$altFiles = $this->getAltPaths($path);

		if (isset($altFiles['alternate']))
		{
			$currentLocation = realpath(dirname($localFile));
			$normalLocation = realpath(dirname($altFiles['normal']));
			$alternateLocation = realpath(dirname($altFiles['alternate']));

			if ($currentLocation == $normalLocation)
			{
				$lessCompiler->importDir = array($alternateLocation, $currentLocation);
			}
			else
			{
				$lessCompiler->importDir = array($currentLocation, $normalLocation);
			}
		}

		// Compile the LESS file
		$lessCompiler->checkedCompile($localFile, $cachedPath);

		// Add the compiled CSS to the page
		$base_url = rtrim($this->container->platform->URIbase(), '/');

		if (substr($base_url, -14) == '/administrator')
		{
			$base_url = substr($base_url, 0, -14);
		}

		$url = $base_url . '/media/lib_fof/compiled/' . $id . '.css';

		if ($returnPath)
		{
			return $url;
		}
		else
		{
			$this->addCSS($url, $version, $type, $media, $attribs);

			return true;
		}
	}

	/**
	 * Adds an inline JavaScript script to the page header
	 *
	 * @param   string  $script  The script content to add
	 * @param   string  $type    The MIME type of the script
	 */
	public function addJSInline($script, $type = 'text/javascript')
	{
		if ($this->container->platform->isCli())
		{
			return;
		}

		$document = $this->container->platform->getDocument();

		if (!method_exists($document, 'addScriptDeclaration'))
		{
			return;
		}

		$document->addScriptDeclaration($script, $type);
	}

	/**
	 * Adds an inline stylesheet (inline CSS) to the page header
	 *
	 * @param   string  $css   The stylesheet content to add
	 * @param   string  $type  The MIME type of the script
	 */
	public function addCSSInline($css, $type = 'text/css')
	{
		if ($this->container->platform->isCli())
		{
			return;
		}

		$document = $this->container->platform->getDocument();

		if (!method_exists($document, 'addStyleDeclaration'))
		{
			return;
		}

		$document->addStyleDeclaration($css, $type);
	}

	/**
	 * Creates a SEF compatible sort header. Standard Joomla function will add a href="#" tag, so with SEF
	 * enabled, the browser will follow the fake link instead of processing the onSubmit event; so we
	 * need a fix.
	 *
	 * @param   string     $text   Header text
	 * @param   string     $field  Field used for sorting
	 * @param   \stdClass  $list   Object holding the direction and the ordering field
	 *
	 * @return  string  HTML code for sorting
	 */
	public function sefSort($text, $field, $list)
	{
		$sort = \JHTML::_('grid.sort', \JText::_(strtoupper($text)) . '&nbsp;', $field, $list->order_Dir, $list->order);

		return str_replace('href="#"', 'href="javascript:void(0);"', $sort);
	}

	/**
	 * Parse a fancy path definition into a path relative to the site's root,
	 * respecting template overrides, suitable for inclusion of media files.
	 * For example, media://com_foobar/css/test.css is parsed into
	 * media/com_foobar/css/test.css if no override is found, or
	 * templates/mytemplate/media/com_foobar/css/test.css if the current
	 * template is called mytemplate and there's a media override for it.
	 *
	 * Regarding plugins, templates are searched inside the plugin's tmpl directory and the template's html directory.
	 * For instance considering plugin://system/example/something the files will be looked for in:
	 * plugins/system/example/tmpl/something.php
	 * templates/yourTemplate/html/plg_system_example/something.php
	 * Template paths for plugins are uncommon and not standard Joomla! practice. They make sense when you are
	 * implementing features of your component as plugins and they need to provide HTML output, e.g. some of the
	 * integration plugins we use in Akeeba Subscriptions.
	 *
	 * The valid protocols are ( @see self::getAltPaths ):
	 * media://		The media directory or a media override
	 * plugin://	Given as plugin://pluginType/pluginName/template, e.g. plugin://system/example/something
	 * admin://		Path relative to administrator directory (no overrides)
	 * site://		Path relative to site's root (no overrides)
	 * auto://      Automatically guess if it should be site:// or admin://
	 * module://	The module directory or a template override (must be module://moduleName/templateName)
	 *
	 * @param   string   $path       Fancy path
	 * @param   boolean  $localFile  When true, it returns the local path, not the URL
	 *
	 * @return  string  Parsed path
	 */
	public function parsePath($path, $localFile = false)
	{
		// Make sure the path has a protocol we can parse. Otherwise just return the raw path.
		$protocol          = '';
		$separatorPosition = strpos($path, '://');

		if ($separatorPosition === false)
		{
			return $path;
		}

		$protocol = substr($path, 0, $separatorPosition);

		switch ($protocol)
		{
			case 'media':
			case 'plugin':
			case 'module':
			case 'auto':
			case 'admin':
			case 'site':
				break;

			default:
				return $path;
		}

		// Get the platform directories through the container
		$platformDirs = $this->container->platform->getPlatformBaseDirs();

		if ($localFile)
		{
			$url = rtrim($platformDirs['root'], DIRECTORY_SEPARATOR) . '/';
		}
		else
		{
			$url = $this->container->platform->URIroot();
		}

		$altPaths = $this->getAltPaths($path);
		$filePath = $altPaths['normal'];

		// If JDEBUG is enabled, prefer the debug path, else prefer an alternate path if present
		if (defined('JDEBUG') && JDEBUG && isset($altPaths['debug']))
		{
			if (file_exists($platformDirs['public'] . '/' . $altPaths['debug']))
			{
				$filePath = $altPaths['debug'];
			}
		}
		elseif (isset($altPaths['alternate']))
		{
			if (file_exists($platformDirs['public'] . '/' . $altPaths['alternate']))
			{
				$filePath = $altPaths['alternate'];
			}
		}

		$url .= $filePath;

		return $url;
	}

	/**
	 * Parse a fancy path definition into a path relative to the site's root.
	 * It returns both the normal and alternative (template media override) path.
	 * For example, media://com_foobar/css/test.css is parsed into
	 * array(
	 *   'normal' => 'media/com_foobar/css/test.css',
	 *   'alternate' => 'templates/mytemplate/media/com_foobar/css//test.css'
	 * );
	 *
	 * The valid protocols are:
	 * media://		The media directory or a media override
	 * admin://		Path relative to administrator directory (no alternate)
	 * site://		Path relative to site's root (no alternate)
	 * auto://      Automatically guess if it should be site:// or admin://
	 * plugin://	The plugin directory or a template override (must be plugin://pluginType/pluginName/templateName)
	 * module://	The module directory or a template override (must be module://moduleName/templateName)
	 *
	 * @param   string  $path  Fancy path
	 *
	 * @return  array  Array of normal and alternate parsed path
	 */
	public function getAltPaths($path)
	{
		$protoAndPath = explode('://', $path, 2);

		if (count($protoAndPath) < 2)
		{
			$protocol = 'media';
		}
		else
		{
			$protocol = $protoAndPath[0];
			$path     = $protoAndPath[1];
		}

		if ($protocol == 'auto')
		{
			$protocol = $this->container->platform->isBackend() ? 'admin' : 'site';
		}

		$path = ltrim($path, '/' . DIRECTORY_SEPARATOR);

		switch ($protocol)
		{
			case 'media':
				// Do we have a media override in the template?
				$pathAndParams = explode('?', $path, 2);

				$ret = [
					'normal'    => 'media/' . $pathAndParams[0],
					'alternate' => $this->container->platform->getTemplateOverridePath('media:/' . $pathAndParams[0], false),
				];
				break;

			case 'plugin':
				// The path is pluginType/pluginName/viewTemplate
				$pathInfo     = explode('/', $path);
				$pluginType   = isset($pathInfo[0]) ? $pathInfo[0] : 'system';
				$pluginName   = isset($pathInfo[1]) ? $pathInfo[1] : 'foobar';
				$viewTemplate = isset($pathInfo[2]) ? $pathInfo[2] : 'default';

				$pluginSystemName = 'plg_' . $pluginType . '_' . $pluginName;

				$ret = [
					'normal'    => 'plugins/' . $pluginType . '/' . $pluginName . '/tmpl/' . $viewTemplate,
					'alternate' => $this->container->platform->getTemplateOverridePath('auto:/' . $pluginSystemName . '/' . $viewTemplate, false),
				];

				break;

			case 'module':
				// The path is moduleName/viewTemplate
				$pathInfo     = explode('/', $path, 2);
				$moduleName   = isset($pathInfo[0]) ? $pathInfo[0] : 'foobar';
				$viewTemplate = isset($pathInfo[1]) ? $pathInfo[1] : 'default';

				$moduleSystemName = 'mod_' . $moduleName;
				$basePath         = $this->container->platform->isBackend() ? 'administrator/' : '';

				$ret = [
					'normal'    => $basePath . 'modules/' . $moduleSystemName . '/tmpl/' . $viewTemplate,
					'alternate' => $this->container->platform->getTemplateOverridePath('auto:/' . $moduleSystemName . '/' . $viewTemplate, false),
				];

				break;

			case 'admin':
				$ret = [
					'normal' => 'administrator/' . $path,
				];
				break;

			default:
			case 'site':
				$ret = [
					'normal' => $path,
				];
				break;
		}

		// For CSS and JS files, add a debug path if the supplied file is compressed
		$filesystem = $this->container->filesystem;
		$ext        = $filesystem->getExt($ret['normal']);

		if (in_array($ext, ['css', 'js']))
		{
			$file = basename($filesystem->stripExt($ret['normal']));

			/*
			 * Detect if we received a file in the format name.min.ext
			 * If so, strip the .min part out, otherwise append -uncompressed
			 */

			if (strlen($file) > 4 && strrpos($file, '.min', '-4'))
			{
				$position = strrpos($file, '.min', '-4');
				$filename = str_replace('.min', '.', $file, $position) . $ext;
			}
			else
			{
				$filename = $file . '-uncompressed.' . $ext;
			}

			// Clone the $ret array so we can manipulate the 'normal' path a bit
			$t1   = (object) $ret;
			$temp = clone $t1;
			unset($t1);
			$temp       = (array) $temp;
			$normalPath = explode('/', $temp['normal']);
			array_pop($normalPath);
			$normalPath[] = $filename;
			$ret['debug'] = implode('/', $normalPath);
		}

		return $ret;
	}

	/**
	 * Returns the contents of a module position
	 *
	 * @param   string  $position  The position name, e.g. "position-1"
	 * @param   int     $style     Rendering style, see JDocumentRendererModule::render
	 *
	 * @return  string  The contents of the module position
	 */
	public function loadPosition($position, $style = -2)
	{
		$document = $this->container->platform->getDocument();

		if (!($document instanceof JDocument))
		{
			return '';
		}

		if (!method_exists($document, 'loadRenderer'))
		{
			return '';
		}

		try
		{
			$renderer = $document->loadRenderer('module');
		}
		catch (\Exception $exc)
		{
			return '';
		}

		$params = array('style' => $style);

		$contents = '';

		foreach (\JModuleHelper::getModules($position) as $mod)
		{
			$contents .= $renderer->render($mod, $params);
		}

		return $contents;
	}

	/**
	 * Render a module by name
	 *
	 * @param   string  $moduleName  The name of the module (real, eg 'Breadcrumbs' or folder, eg 'mod_breadcrumbs')
	 * @param   int     $style       The rendering style, see JDocumentRendererModule::render
	 *
	 * @return string  The rendered module
	 */
	public function loadModule($moduleName, $style = -2)
	{
		$document = $this->container->platform->getDocument();

		if (!($document instanceof JDocument))
		{
			return '';
		}

		if (!method_exists($document, 'loadRenderer'))
		{
			return '';
		}

		try
		{
			$renderer = $document->loadRenderer('module');
		}
		catch (\Exception $exc)
		{
			return '';
		}

		$params = array('style' => $style);

		$mod = \JModuleHelper::getModule($moduleName);

		if (empty($mod))
		{
			return '';
		}

		return $renderer->render($mod, $params);
	}

	/**
	 * Performs SEF routing on a non-SEF URL, returning the SEF URL.
	 *
	 * When the $merge option is set to true the option, view, layout and format parameters of the current URL and the
	 * requested route will be merged. For example, assuming that current url is
	 * http://example.com/index.php?option=com_foo&view=cpanel
	 * then
	 * $template->route('view=categories&layout=tree');
	 * will result to
	 * http://example.com/index.php?option=com_foo&view=categories&layout=tree
	 *
	 * If $merge is unspecified (null) we will auto-detect the intended behavior. If you haven't specified option and
	 * one of view or task we will merge. Otherwise no merging takes place. This covers most use cases of FOF 3.0.
	 *
	 * @param   string  $route  The parameters string
	 * @param   bool    $merge  Should I perform parameter merging?
	 *
	 * @return  string  The human readable, complete url
	 */
	public function route($route = '', $merge = null)
	{
		$route = trim($route);

		/**
		 * Backwards compatibility with FOF 3.0: if the merge option is unspecified we will auto-detect the behaviour.
		 * If option and either one of view or task are present we won't merge.
		 */
		if (is_null($merge))
		{
			$hasOption = (strpos($route, 'option=') !== false);
			$hasView  = (strpos($route, 'view=') !== false);
			$hasTask  = (strpos($route, 'task=') !== false);

			$merge = !($hasOption && ($hasView || $hasTask));
		}

		if ($merge)
		{
			// Handle special cases before trying to merge
			if ($route == 'index.php' || $route == 'index.php?')
			{
				$result = 'index.php';
			}
			elseif (substr($route, 0, 1) == '&')
			{
				$url = \JURI::getInstance();
				$vars = array();
				parse_str($route, $vars);

				$url->setQuery(array_merge($url->getQuery(true), $vars));

				$result = 'index.php?' . $url->getQuery();
			}
			else
			{
				$url = \JURI::getInstance();
				$props = $url->getQuery(true);

				// Strip 'index.php?'
				if (substr($route, 0, 10) == 'index.php?')
				{
					$route = substr($route, 10);
				}

				// Parse route
				$parts = array();
				parse_str($route, $parts);
				$result = array();

				// Check to see if there is component information in the route if not add it

				if (!isset($parts['option']) && isset($props['option']))
				{
					$result[] = 'option=' . $props['option'];
				}

				// Add the layout information to the route only if it's not 'default'

				if (!isset($parts['view']) && isset($props['view']))
				{
					$result[] = 'view=' . $props['view'];

					if (!isset($parts['layout']) && isset($props['layout']))
					{
						$result[] = 'layout=' . $props['layout'];
					}
				}

				// Add the format information to the URL only if it's not 'html'

				if (!isset($parts['format']) && isset($props['format']) && $props['format'] != 'html')
				{
					$result[] = 'format=' . $props['format'];
				}

				// Reconstruct the route

				if (!empty($route))
				{
					$result[] = $route;
				}

				$result = 'index.php?' . implode('&', $result);
			}
		}
		else
		{
			$result = $route;
		}

		return \JRoute::_($result);
	}
}
