FrontendCore.define("center-box",[],function(){return{onStart:function(){var a=FrontendTools.getDataModules("center-box"),b=this;FrontendTools.trackModule("JS_Libraries","call","center-box"),b.setPosition(a),$(window).resize(function(){b.setPosition(a)})},setPosition:function(a){var b,c,d,e,f,g,h=$(window).height(),i=$(window).width();$(a).each(function(){b=this,e=b.getAttribute("data-fc-position")?b.getAttribute("data-fc-position"):"absolute","absolute"==e&&(h=$(b).parent().height(),i=$(b).parent().width(),$(b).parent().css("position","relative")),$(b).css({position:e,"z-index":100}),c=b.getAttribute("data-fc-height")?b.getAttribute("data-fc-height"):$(b).height(),d=b.getAttribute("data-fc-width")?b.getAttribute("data-fc-width"):$(b).width(),"string"==typeof c&&-1!==c.indexOf("px")&&(c=c.replace("px","")),"string"==typeof d&&-1!==d.indexOf("px")&&(d=d.replace("px","")),f=i/2-d/2,g=h/2-c/2,b.getAttribute("data-fc-height")&&$(b).css("height",c),b.getAttribute("data-fc-width")&&$(b).css("width",d),$(b).css({left:f,top:g})})},onStop:function(){this.mediator=null,this.bMessageCreated=null,this.oTimer=null},onDestroy:function(){delete this.mediator,delete this.bMessageCreated,delete this.oTimer}}});