define(function(require){
    var util = require("Public/util.js");
	//require("modernizr");
	require("myFocus");
	require("roundabout");
	require("jCarousel");
	require("tab");
    $(function(){
    	$("#demo").myFocus({
			pattern:'mF_sohusports',
			width:548,
			height:227,
			wrap: false
    	});
        $('#myroundabout').roundabout({
            autoplay: true,//自动播放
            autoplayDuration: 3000,//时间
            autoplayPauseOnHover: true,//自动鼠标移上停滞
            shape: 'tearDrop',
            enableDrag: true,
            minOpacity: 1,
            btnNext: ".round-next",
            btnPrev: ".round-prev"
        });
    	$('ul.topnav li').mouseenter(function() {
        if($(this).find('div.subnav ul li').length>0) {
            $(this).find('div.subnav').parent().children('a').first().removeClass('top');
            $(this).find('div.subnav').parent().children('a').first().addClass('tophover');
            if(!$(this).find('div.subnav').is(":animated")) {
                if ($(this).index() < 7) {
                    $(this).find('div.subnav ul')
                        .attr("style",'padding-left:' + ($(this).index()*100+12) + 'px');
                } else {
                	$(this).find('div.subnav ul')
                        .attr("style",'padding-left:' + (1400-$(this).index()*100+12) + 'px');
                }
                $(this).find('div.subnav')
                    .slideDown('fast')
                    .show();
            }
            $(this).hover(function() {
                    if($(this).find('div.subnav ul li').length>0) {
                        $(this).find('div.subnav').parent().children('a').first().removeClass('top');
                        $(this).find('div.subnav').parent().children('a').first().addClass('tophover');
                        if(!$(this).find('div.subnav').is(":animated")) {
                            $(this).find('div.subnav')
                                .slideDown('fast')
                                .show();
                        }
                    }
                },
                function(){
                    $(this).find('div.subnav').parent().children('a').first().removeClass('tophover');
                    $(this).find('div.subnav').parent().children('a').first().addClass('top');
                    $(this).find('div.subnav')
                        .slideUp('fast');
                }).hover(function() {
                    $(this).addClass('subhover');
                }, function(){
                    $(this).removeClass('subhover');
                }
            );
        }
    });
    $(".mycarousel").JC();
		/**
		 * Note:
		 **********************
		 **********************
			$(".JC1").JC();
			util.nav({
				Lv1:"#header .nav li",
				Lv2:".level-2"
			})
			util.widget.addFav(element);
			util.widget.setHome(element);
			util.widget.setTime(element);
			util.widget.input(element);
			util.tabs({
				tab_nav:".main .row-1 .col-2 .hd span",
				tab_panel:".main .row-1 .col-2 .tabs",
				active : "on"
			});
			$(".demo").lightBox({
				imageLoading:'/templates/default/images/lightbox-ico-loading.gif',
				imageBtnPrev:'/templates/default/images/lightbox-btn-prev.gif',
				imageBtnNext:'/templates/default/images/lightbox-btn-next.gif',
				imageBtnClose:'/templates/default/images/lightbox-btn-close.gif',
				imageBlank:'/templates/default/images/lightbox-blank.gif'
			})
		*/
    })
})