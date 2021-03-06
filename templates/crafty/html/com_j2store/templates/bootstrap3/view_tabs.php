<?php
/**
 * @package J2Store
 * @copyright Copyright (c)2014-17 Ramesh Elamathi / J2Store.org
 * @license GNU GPL v3 or later
 *
 * Bootstrap 2 layout of product detail
 */
// No direct access
defined('_JEXEC') or die;
?>

<?php if($this->params->get('item_show_product_cross_sells', 0) && count($this->cross_sells)): ?>
	<div itemprop="crossell" class="tab-pane fade in" id="crossell">
		<?php echo $this->loadTemplate('crosssells'); ?>
	</div>
<?php endif; ?>

	<div class="row">
		<div class="col-sm-12">
			<ul class="nav nav-tabs" id="j2store-product-detail-tab">
				<?php
					$set_specification_active =true;
					if($this->params->get('item_show_sdesc') ||  $this->params->get('item_show_ldesc')){
						$set_specification_active = false;
				}
				if($this->params->get('item_show_sdesc') || $this->params->get('item_show_ldesc')):?>
					<li class="active"><a href="#description" data-toggle="tab"><?php echo JText::_('J2STORE_PRODUCT_DESCRIPTION')?></a>
				<?php endif;?>

				<?php if($this->params->get('item_show_product_specification')):?>
					<li class="<?php echo isset($set_specification_active) && $set_specification_active ? 'active' : '';?>" >
						<a href="#specs" data-toggle="tab"><?php echo JText::_('J2STORE_PRODUCT_SPECIFICATIONS')?></a>
					</li>
				<?php endif;?>

				<?php /*  if($this->params->get('item_show_product_upsells')):?>
					<li class="<?php echo isset($set_specification_active) && $set_specification_active ? 'active' : '';?>" >
						<a href="#upsell" data-toggle="tab"><?php echo JText::_('J2STORE_RELATED_PRODUCTS')?></a>
					</li>
				<?php endif; */?>
				
				<?php /* if($this->params->get('item_show_product_upsells')):?>
					<li class="<?php echo isset($set_specification_active) && $set_specification_active ? 'active' : '';?>" >
						<a href="#upsell" data-toggle="tab"><?php echo JText::_('J2STORE_RELATED_PRODUCTS_UPSELLS')?></a>
					</li>
				<?php endif;?>
				
				<?php if($this->params->get('item_show_product_cross_sells')):?>
					<li class="<?php echo isset($set_specification_active) && $set_specification_active ? 'active' : '';?>" >
						<a href="#crossell" data-toggle="tab"><?php echo JText::_('J2STORE_RELATED_PRODUCTS_CSELLS')?></a>
					</li>
				<?php endif;*/ ?>
				
			</ul>

			<div class="tab-content">
				<?php if($this->params->get('item_show_sdesc') || $this->params->get('item_show_ldesc') ):?>
				<div itemprop="description" class="tab-pane fade in active" id="description">
					<?php echo $this->loadTemplate('sdesc'); ?>
					<?php echo $this->loadTemplate('ldesc'); ?>
				</div>
				<?php endif;?>

				<?php if($this->params->get('item_show_product_specification')):?>
					<div class="tab-pane fade in <?php echo isset($set_specification_active) && $set_specification_active ? 'active' : '';?>" id="specs">
						<?php echo $this->loadTemplate('specs'); ?>
					</div>
				<?php endif;?>
				
			<?php /*  if($this->params->get('item_show_product_upsells', 0) && count($this->up_sells)): ?>
				<div itemprop="upsell" class="tab-pane fade in" id="upsell">
					<?php echo $this->loadTemplate('upsells'); ?>
				</div>
			<?php endif;?>
			
			<?php if($this->params->get('item_show_product_cross_sells', 0) && count($this->cross_sells)): ?>
				<div itemprop="crossell" class="tab-pane fade in" id="crossell">
					<?php echo $this->loadTemplate('crosssells'); ?>
				</div>
			<?php endif; */?>
			</div>

		</div>
	</div>