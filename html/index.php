<?php
if (
    isset($_SERVER['HTTP_X_REQUESTED_WITH'])
    && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
) {
    switch ($_POST['type']) {
        case 'edupack':
        case 'handbook':
            switch ($_POST['sku']) {
                case 'P12001':
                case 'P12002':
                    define('_JEXEC', 1);
                    require_once(__DIR__ . '/../php_html_templates/functions.php'); // for language translation and maybe other functions to use
                    include  __DIR__ . '/' .$_POST['type'].'/cats.php';
                    break;
                case 'P12003':
                case 'P12004':
                case 'P12005':
                    define('_JEXEC', 1);
                    require_once(__DIR__ . '/../php_html_templates/functions.php'); // for language translation and maybe other functions to use
                    include __DIR__ . '/' .$_POST['type'].'/dogs.php';
                    break;
                default:
                    die();
            }
            break;
        default:
            die();
    }
}
