<?php
/**
 * @package J2Store
 * @copyright Copyright (c)2014-17 Ramesh Elamathi / J2Store.org
 * @license GNU GPL v3 or later
 */
/** ensure this file is being included by a parent file */
defined('_JEXEC') or die('Restricted access');

class J2StoreTableJ2Content extends F0FTable
{

	/**
	 * Class Constructor.
	 *
	 * @param   string           $table   Name of the database table to model.
	 * @param   string           $key     Name of the primary key field in the table.
	 * @param   JDatabaseDriver  &$db     Database driver
	 * @param   array            $config  The configuration parameters array
	 */
	public function __construct($table, $key, &$db, $config = array())
	{
		parent::__construct('#__content', 'id', $db);
	}

	/* public function check()
	{
		$status = parent::check();
		if(!$this->taxrate_zip){

			echo 'test';
		}
		exit;

		return $status;
	} */

}
