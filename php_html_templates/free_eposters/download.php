<?php
// TODO cookies warning

// No direct access
defined('_JEXEC') or die;

require_once(JPATH_SITE . '/php_html_templates/functions.php');
//dump($_GET['c']);


$is_redownload = false;
if (isset($_GET['c'])) {
    $file_info = getFilePath($_GET['c']);
    $status = getUserFileDownloadStatus($file_info->id)['status'];
    if ($status === false) die();
    $file_params = json_decode($file_info->params);
} else {
    die();
}


if (isset($_GET["d"]) && $_GET["d"] == 1) {
    if ($status == -5) {
        echo JText::sprintf('PROMPT_USER_24H_DL_REACHES');
        die();
    }

    if ($status != 1 && $status != 0) die(); // if status is not right, just die

    $filepath = JPATH_ROOT . DS . $file_info->path;

    // Proceed download
    if (file_exists($filepath)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($filepath) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filepath));
        header('Set-Cookie: fileLoading=true');
        flush(); // Flush system output buffer
        readfile($filepath);
        insertFilesDownloaded(JFactory::getUser()->id, $file_info->id, filesize($filepath));
        die();
    } else {
        http_response_code(404);
        die();
    }
}

$document = JFactory::getDocument();
$document->addScript('https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js');

//make redirect url for login page to redirect back to this page
$redirectUrl = urlencode(base64_encode(JUri::base() . 'download-promo?c=' . $_GET['c']));

// encode file name to download
$fileName = urlencode(JPATH_ROOT . DS . $file_info->path);
//dump($fileName);

$redirectAfterDownloadUrl = '';
if (isset($file_params->to_bundle_j2store_id_after_download) && ($file_params->to_bundle_j2store_id_after_download != null)) {
    $redirectAfterDownloadUrl = JRoute::_('index.php?option=com_j2store&view=products&task=view&id=' . $file_params->to_bundle_j2store_id_after_download);
}

if (isset($_SESSION['msg']) && $_SESSION['msg'] != null) {
    JFactory::getApplication()->enqueueMessage($_SESSION['msg']);
    unset($_SESSION['msg']);
}

?>
<style>
    .view-article .t3-wrapper .t3-mainbody .t3-content .item-page .articlebody {
        padding: 0;
    }

    .page-header,
    .alert-warning {
        display: none;
    }

    .item-page {
        max-width: 700px;
        margin: 0 auto;
    }

    .main_content img {
        opacity: 0.3;
    }

    .main_content img:hover {
        opacity: 0.5;
    }
    .lang_chooser {
        float: right;
        margin-bottom: 10px;
    }
</style>
<?php if (isLogin()) { ?>
    <script>
        Cookies.remove('fileLoading')
        jQuery(function($) {
            setInterval(function() {
                if (Cookies.get('fileLoading')) {
                    Cookies.remove('fileLoading')
                    location.href = $("input[name='b_id']").val();
                }
            }, 1000);
        })
    </script>
<?php } ?>
<div class="download_promo col-sm-12 col-md-12 col-lg-12">
    <div class="download_promo_wrapper">
        <div class="download_promo">
            <div class="col-xs-12 col-md-12 main_content_col">
                <div class="main_content">
                    <h1 itemprop="name" class="product-title">Download Your <?php echo $file_params->title; ?></h1>
                    <p>Choose the language and click on the image below to download your free poster in the selected language.</p>
                    <select class="lang_chooser" name="lang">
                        <option value="en">English</option>
                        <option value="jp">Japanese</option>
                        <option value="de">German</option>
                    </select>
                    <a href="<?php echo isLogin() ? JUri::base() . 'download-promo?c=' . $file_info->code . '&d=1' : JUri::base() . 'login?return=' . $redirectUrl; ?>"><img src="<?php echo JUri::base() . $file_params->thumb ?>" /></a>
                    <?php if ($redirectAfterDownloadUrl != '') { ?>
                        <input type="hidden" name="b_id" value="<?php echo $redirectAfterDownloadUrl; ?>" />
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>