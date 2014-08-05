<link href="<?php echo $this->_tpl_vars['rootpath'] ?>style/sass.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php echo $this->_tpl_vars['rootpath'] ?>js/jquery/jquery/1.8.3/jquery.js"></script>
<script type="text/javascript" src="<?php echo $this->_tpl_vars['rootpath'] ?>js/sea.js"></script>
<script type="text/javascript" src="<?php echo $this->_tpl_vars['rootpath'] ?>js/config.js"></script>
<script type="text/javascript">
if(language){
	var path = "<?php echo $this->_tpl_vars['rootpath'] ?><?php echo $this->_tpl_vars['lng'] ?>/",js= document.createElement("script"),css=document.createElement("link"),src=path+'js.js',href=path+'css.css';
	js.type = "text/javascript",js.src=src;
	css.rel = "stylesheet",css.href=href;
	var head= document.getElementsByTagName("head")[0];
	head.appendChild(css);
	head.appendChild(js);
};
</script>
