$("a").mouseenter(function (e) { //event fired when mouse cursor enters "a" element 
    var $class_name = $(this).attr("class").slice(13); //get class attribute of "a" element after leaving 13 characters which is equal to "tooltip_link " 
    var $x = e.pageX - this.offsetLeft; //get mouse X coordinate relative to "a" element 
    var $tooltip_text = $(this).attr("title"); //get title attribute of "a" element 
    if ($tooltip_text.length > 0) { //display tooltip only if it has more than zero characters 
        $(this).append('<div class="tooltip ' + $class_name + '">' + $tooltip_text + '</div>'); //append tooltip markup, insert class name and tooltip title from the values above 
        $("a > div.tooltip.center").css("left", "" + $x - 103 + "px"); //set tooltip position from left 
        $("a > div.tooltip.left").css("left", "" + $x + "px"); //set tooltip position from left 
        $("a > div.tooltip.right").css("left", "" + $x - 208 + "px"); //set tooltip position from left 
        $("a > div.tooltip." + $class_name).fadeIn(300); //display, animate and fade in the tooltip 
    }
});

$("a").mouseleave(function () { //event fired when mouse cursor leaves "a" element 
    var $class_name = $(this).attr("class").slice(13); //get class attribute of "a" element after leaving 13 characters which is equal to "tooltip_link " 
    //fade out the tooltip, delay for 300ms and then remove the tooltip and end the custom queue 
    $("a > div.tooltip." + $class_name).fadeOut(300).delay(300).queue(function () {
        $(this).remove();
        $(this).dequeue();
    });
});