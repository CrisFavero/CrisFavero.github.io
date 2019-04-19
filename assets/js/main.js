//JS 

function checkScrollPosition() {
    //
    var pixels = 6 * getEmPixels() + $('#nav').outerHeight(); //6em* 16px per em   + 30 font size
    //Switches the style of the scroll Bar as we scroll down
    if ($(window).scrollTop() > pixels) {
        //change back to expanded cause i am dumb
        $('#nav').addClass('navbar-bgolor');
        $('#nav').removeClass('navbar-transparent');
    } else {
        $('#nav').addClass('navbar-transparent');
        $('#nav').removeClass('navbar-bgolor');
    }

}

$(window).trigger('scroll');
$(window).on('scroll', checkScrollPosition );
$(document).ready(checkScrollPosition);//checks if page was scrolled before reload



$("#nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();
 
    // store hash
    var hash = this.hash;
 
    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 
 });



$("#downArrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#recent_photos").offset().top},
        'slow');
});



/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (document, documentElement) {
    // Enable strict mode
    "use strict";

    // Form the style on the fly to result in smaller minified file
    var important = "!important;";
    var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;

    window.getEmPixels = function (element) {

        var extraBody;

        if (!element) {
            // Emulate the documentElement to get rem value (documentElement does not work in IE6-7)
            element = extraBody = document.createElement("body");
            extraBody.style.cssText = "font-size:1em" + important;
            documentElement.insertBefore(extraBody, document.body);
        }

        // Create and style a test element
        var testElement = document.createElement("i");
        testElement.style.cssText = style;
        element.appendChild(testElement);

        // Get the client width of the test element
        var value = testElement.clientWidth;

        if (extraBody) {
            // Remove the extra body element
            documentElement.removeChild(extraBody);
        }
        else {
            // Remove the test element
            element.removeChild(testElement);
        }

        // Return the em value in pixels
        return value;
    };
}(document, document.documentElement));

