<?php

/**
 * @package     Joomla.Site
 * @subpackage  com_contact
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::_('behavior.keepalive');
JHtml::_('behavior.formvalidation');

$regex = '@class="([^"]*)"@';
$lbreg = '@" class="([^"]*)"@';
$label = 'class="$1 col-sm-12 control-label"';
$input = 'class="$1 form-control"';

if (isset($this->error)) : ?>
	<div class="contact-error">
		<?php echo $this->error; ?>
	</div>
<?php endif; ?>

<div class="contact-form">
	<div class="page-header">
		<?php echo '<h2>' . JText::_('COM_CONTACT_EMAIL_FORM') . '</h2>';
		?>
	</div>
	<form id="contact-form" action="<?php echo JRoute::_('index.php'); ?>" method="post" class="form-validate form-horizontal">
		<fieldset>
			<legend><?php echo JText::_('COM_CONTACT_FORM_LABEL'); ?></legend>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group ">
						<?php echo preg_replace($regex, $label, $this->form->getLabel('contact_name'), 1); ?>
						<div class="col-sm-12">
							<?php echo preg_replace($regex, $input, $this->form->getInput('contact_name')); ?>
						</div>
					</div>
				</div>

				<div class="col-md-12">
					<div class="form-group ">
						<?php echo preg_replace($regex, $label, $this->form->getLabel('contact_email'), 1); ?>
						<div class="col-sm-12">
							<?php echo preg_replace($regex, $input, $this->form->getInput('contact_email')); ?>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<?php echo preg_replace($regex, $label, $this->form->getLabel('contact_subject'), 1); ?>
						<div class="col-sm-12">
							<?php echo preg_replace($regex, $input, $this->form->getInput('contact_subject')); ?>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<?php echo preg_replace($regex, $label, $this->form->getLabel('contact_message'), 1); ?>
						<div class="col-sm-12">
							<?php echo preg_replace($regex, $input, $this->form->getInput('contact_message')); ?>
						</div>

					</div>
				</div>

				<?php if ($this->params->get('show_email_copy')) { ?>
					<div class="check">
						<div class="col-xs-12 col-sm-7 control-checkbox">
							<div class="checkbox">
								<?php echo $this->form->getInput('contact_email_copy'); ?>
								<?php echo $this->form->getLabel('contact_email_copy'); ?>
							</div>
						</div>

					<?php } ?>

					<div class="col-xs-12 col-sm-5 control-btn">
						<button class="btn btn-primary validate" type="submit"><?php echo JText::_('COM_CONTACT_CONTACT_SEND'); ?></button>
					</div>

					</div>
			</div>
			<?php //Dynamically load any additional fields from plugins. 
			?>
			<?php foreach ($this->form->getFieldsets() as $fieldset) : ?>
				<?php if ($fieldset->name != 'contact') : ?>
					<?php $fields = $this->form->getFieldset($fieldset->name); ?>
					<?php foreach ($fields as $field) : ?>
						<div class="form-group">
							<?php if ($field->hidden) : ?>
								<?php echo $field->input; ?>
							<?php else : ?>
								<?php echo preg_replace($lbreg, '" ' . $label, $field->label); ?>
								<div class="col-sm-10 form-plugins">
									<?php if (!$field->required && $field->type != "Spacer") : ?>
										<span class="optional"><?php echo JText::_('COM_CONTACT_OPTIONAL'); ?></span>
									<?php endif; ?>
									<?php echo $field->input; ?>
								</div>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				<?php endif ?>
			<?php endforeach; ?>



			<input type="hidden" name="option" value="com_contact" />
			<input type="hidden" name="task" value="contact.submit" />
			<input type="hidden" name="return" value="<?php echo $this->return_page; ?>" />
			<input type="hidden" name="id" value="<?php echo $this->contact->slug; ?>" />
			<?php echo JHtml::_('form.token'); ?>

		</fieldset>
	</form>
</div>