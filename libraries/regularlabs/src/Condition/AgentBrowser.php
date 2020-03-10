<?php
/**
 * @package         Regular Labs Library
 * @version         20.2.15050
 * 
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            http://www.regularlabs.com
 * @copyright       Copyright © 2020 Regular Labs All Rights Reserved
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

namespace RegularLabs\Library\Condition;

defined('_JEXEC') or die;

/**
 * Class AgentBrowser
 * @package RegularLabs\Library\Condition
 */
class AgentBrowser
	extends Agent
{
	public function pass()
	{
		if (empty($this->selection))
		{
			return $this->_(false);
		}

		foreach ($this->selection as $browser)
		{
			if ( ! $this->passBrowser($browser))
			{
				continue;
			}

			return $this->_(true);
		}

		return $this->_(false);
	}
}
