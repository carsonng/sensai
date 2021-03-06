<?php
/**
 * @package   admintools
 * @copyright Copyright (c)2010-2020 Nicholas K. Dionysopoulos / Akeeba Ltd
 * @license   GNU General Public License version 3, or later
 */

namespace Akeeba\AdminTools\Admin\View\ChangeDBCollation;

defined('_JEXEC') || die;

use FOF30\View\DataView\Html as BaseView;

class Html extends BaseView
{
	protected function onBeforeMain()
	{
		$this->addJavascriptFile('admin://components/com_admintools/media/js/ChangeDBCollation.min.js');
	}
}
