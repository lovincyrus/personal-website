/**

... and you want click on the thumbnail to open PhotoSwipe with large image (like it's done on a demo page). All you need to do is:

1. Bind click event to links/thumbnails.
2. After user clicked on on thumbnail, find its index.
3. Create an array of slide objects from DOM elements – loop through all links and retrieve href attribute (large image url), data-size attribute (its size), src of thumbnail, and contents of caption.

**/

// then build Responsive Images by adding mediumImage & originalImage

var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'assets/img/photos/1.png',
        w: 1200,
        h: 900
    },
    {
        src: 'assets/img/photos/2.png',
        w: 1200,
        h: 900
    },
    {
        src: 'assets/img/photos/3.png',
        w: 1200,
        h: 900
    },
    {
        src: 'assets/img/photos/4.jpg',
        w: 520,
        h: 720
    }

];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    // showAnimationDuration: 0,
    // hideAnimationDuration: 0
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
// gallery.init();