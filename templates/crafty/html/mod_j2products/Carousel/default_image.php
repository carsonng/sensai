<?php
/**
* @package J2Store
* @copyright Copyright (c)2016-19 Sasi varna kumar / J2Store.org
* @license GNU GPL v3 or later
*/
defined('_JEXEC') or die;
$image_root_path = JUri::root();
$image_path = '' ;
if ($product->image_type == 'thumbimage' && isset($product->thumb_image) ) {
	$image_path = $product->thumb_image ; 
} else if ($product->image_type == 'mainimage' && isset($product->main_image) ) {
	$image_path = $product->main_image ; 
}
if($product->image_position == 'top'){
	$img_class = 'col-md-12 span12';
}else {
	$img_class = 'col-md-6 span6';
}
?>
<div class="mod_pic">
		<a href="<?php echo $image_root_path.$image_path;?>" class="modal" style="display:inline; position:relative;">
			<i class="fa fa-file-image-o"></i>
		</a>
		
</div>
<?php if($product->show_image): ?>
<div class="j2store-product-image  <?php echo $img_class; ?> ">
	<?php if(JFile::exists(JPATH_SITE.'/'.JPath::clean($image_path))):?>
		<?php if($product->link_image): ?>
			<a href="<?php echo $product->product_link; ?>" title="<?php echo $product->product_name; ?>">
		<?php endif;?>
		<img itemprop="image" alt="<?php echo $product->product_name ;?>" 
		class="j2store-img-responsive j2store-product-image-<?php echo $product->j2store_product_id; ?>"  
		src="<?php echo $image_root_path.$image_path;?>" 
		width="<?php echo $product->image_size_width ;?>" 
		height="<?php echo $product->image_size_height ;?>"  />

		<?php if($product->link_image): ?>
			</a>
		<?php endif;?>
	<?php endif; ?>
</div>
<?php endif; ?>
