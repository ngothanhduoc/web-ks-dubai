<script type="text/javascript">
    setActiveMenu('product');
    setActiveSubMenu('backend-product-add');
</script>
<script type="text/javascript" src="/public/admin/editor/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="/public/admin/assets/js/backend/backend.product.input_group.js"></script>
<style>
.fileinput .thumbnail > img {
    display: block;
}
.thumbnail > img {
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
}
div.uploader {
    cursor: default;
    left: 260px;
    overflow: hidden;
    position: absolute;
    top: -50px;
}
</style>
<div class="pageheader notab">
	<h1 class="pagetitle">Thêm/Chỉnh Sửa Danh Sách Nhóm SP</h1>
	<span class="pagedesc"></span>
	
</div><!--pageheader-->
<div id="contentwrapper" class="contentwrapper lineheight21">
	<form class="stdform stdform2" id="frm-add-article" role="form" action="" method="POST" enctype="multipart/form-data">
				
		<p>
			<label for="title">Title <span style="color:#ff0000">(*)</span></label>
			<span class="field">
                            <input type="text" placeholder="" id="title" required="" name="name" class="mediuminput" value="<?php echo @$data['name']?>">
			</span>
		</p>
		<p>
			<label for="title">Images <span style="color:#ff0000">(*)</span></label>
			<span class="field">
                            <input type="text" required="required" placeholder="Click vào để chọn hình" id="image_small" name="images" class="mediuminput" value="<?php echo @$data['images'] ?>" onclick="openKCFinderByPath('#image_small', 'images')" readonly>
			</span>
		</p>
				
		
                
                
				
		<p class="stdformbutton">
			<input id="txt_id" type="hidden" value="<?php echo @$data['id_group_product']?>" name="id">
			<button class="submit radius2" type="submit">Add</button>&nbsp;&nbsp;<span id="loading" style="position: absolute; display: none"><img src="/public/admin/assets/images/loaders/loader10.gif"/></span>
		</p>
		
	</form>				
</div><!--contentwrapper-->

