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
<div itemscope itemtype="http://schema.org/Product" class="product-<?php echo $this->product->j2store_product_id; ?> <?php echo $this->product->product_type; ?>-product">
	<div class="row">
		<div class="col-sm-6">
			<?php echo $this->loadTemplate('images'); ?>
		</div>

		<div class="col-sm-6">
			<div class="price-sku-brand-container row">
				<div class="col-sm-12 product-sku">
				<?php echo $this->loadTemplate('title'); ?>
					
				<?php if(isset($this->product->source->event->beforeDisplayContent)) : ?>
					<?php echo $this->product->source->event->beforeDisplayContent; ?>
				<?php endif;?>
					<?php echo $this->loadTemplate('sku'); ?>
					<?php echo $this->loadTemplate('brand'); ?>
					<?php if($this->params->get('item_show_product_stock', 1) && J2Store::product()->managing_stock($this->product->variant)) : ?>
						<?php echo $this->loadTemplate('stock'); ?>
					<?php endif; ?>
					<?php echo $this->loadTemplate('price'); ?>
				</div>
			</div>
			<?php if($this->params->get('catalog_mode', 0) == 0): ?>
			<form action="<?php echo $this->product->cart_form_action; ?>"
					method="post" class="j2store-addtocart-form"
					id="j2store-addtocart-form-<?php echo $this->product->j2store_product_id; ?>"
					name="j2store-addtocart-form-<?php echo $this->product->j2store_product_id; ?>"
					data-product_id="<?php echo $this->product->j2store_product_id; ?>"
					data-product_type="<?php echo $this->product->product_type; ?>"
					enctype="multipart/form-data">

				<?php echo $this->loadTemplate('configurableoptions'); ?>
				<?php echo $this->loadTemplate('cart'); ?>
			</form>
			<?php endif; ?>
			<div class="j2-plugin">
			<?php echo J2Store::plugin()->eventWithHtml('AfterAddToCartButton', array($this->product, J2Store::utilities()->getContext('view_cart'))); ?>
			</div>
			<div class="j2_share">
			<span class="j2-plugin-name">Share: </span>
			<?php if(isset($this->product->source->event->afterDisplayTitle)) : ?>
				<?php echo $this->product->source->event->afterDisplayTitle; ?>
			<?php endif;?>
			</div>
		</div>
	</div>

	<?php if($this->params->get('item_use_tabs', 1)): ?>
		<?php echo $this->loadTemplate('tabs'); ?>
	<?php else: ?>
		<?php echo $this->loadTemplate('notabs'); ?>
	<?php endif; ?>
	
	<?php if(isset($this->product->source->event->afterDisplayContent)) : ?>
		<?php echo $this->product->source->event->afterDisplayContent; ?>
	<?php endif;?>
</div>
