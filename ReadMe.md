# Base SCSS
Base SCSS is exactly that&mdash;a base Sass file that I use often to build my projects. I found that with libraries like [Bourbon][bourbon] and [Compass][compass], there were a lot of things I didn't use that often. Base SCSS contains mixins and helpers that are super useful and can be coupled with additional Sass libraries if desired.

This simple reference file contains some mixins that are modeled after those available in the aforementioned libraries, as well as some that I've written myself.

## Mixins &amp; Tools
These are the current tools and mixins I've implemented:

* reset *(simple or Eric Meyer's)*
* base font families
* clearfix
* legibility
* border-radius
* gradient *(includes [CSS3PIE][css3pie] support if desired)*
* angled stripes *(based on [Lea Verou's examples][patterns])*
* box-shadow *(supports up to 9 shadows)*
* text-shadow
* opacity *(includes ms-filter fallback)*
* transition
* hide-text *(based on [Kellum Method][kellum])*
* font-face

### License
Base SCSS is released under a [Creative Commons Attribution-Share Alike 3.0 Unported License][ccl]. This means you can copy, distribute, transmit and adapt the work to your own personal and commercial projects.

[bourbon]: https://github.com/thoughtbot/bourbon "Bourbon by @thoughtbot"
[compass]: https://github.com/chriseppstein/compass "Compass by @scottdavis"
[ccl]: http://creativecommons.org/licenses/by-sa/3.0/ "Creative Commons Attribution-Share Alike 3.0 Unported License"
[kellum]: http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/ "Replacing the -9999px Hack (New Image Replacement)"
[css3pie]: http://css3pie.com "CSS3PIE"
[patterns]: http://lea.verou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/ "Checkerboard, striped & other background patterns with CSS3 gradients"