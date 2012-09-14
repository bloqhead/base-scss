# Base SCSS
Base SCSS is exactly that&mdash;a base Sass file that I use often to build my projects. I found that with libraries like [Bourbon][bourbon] and [Compass][compass], there were a lot of things I didn't use that often. Base SCSS contains mixins and helpers that are super useful and can be coupled with additional Sass libraries if desired.

This simple reference file contains some mixins that are modeled after those available in the aforementioned libraries, as well as some that I've written myself.

## Mixins &amp; Tools
These are the current tools and mixins I've implemented:

* reset *(simple or [Eric Meyer's][reset])*
* font families
* form fields
* form buttons
* clearfix
* legibility
* ~~border-radius~~ radius
* gradient *(includes [CSS3PIE][css3pie] support if desired)*
* stripes *(based on [Lea Verou's examples][patterns])*
* box-shadow *(supports up to 9 shadows)*
* text-shadow
* opacity *(includes ms-filter fallback)*
* transition
* ~~img-rep~~ imgrep *(image replacement based on [Kellum Method][kellum]. an alternative to the negative indent method)*
* ~~font-face~~ font (based on [Font Squirrel's][fontsquirrel] method)

## How to use it
If you're already familiar with compilers like [LiveReload][livereload] and [Compass][compassapp], then you're on the right track. If not, check them out. If you're not a GUI guy and would rather do things in command line, [there's that also][sassdoc]. You'll want to grab one of those and read their documentation (always RTFM) to get an idea of how it works. Base SCSS is made to be included into a primary Sass file that houses all of the styles for your project, or repurposed as your starting base file itself. If you aren't familiar with Sass or preprocessors in general, I recommend giving the [base tutorial][sasstut] a try and reading the [documentation][sass].

* [LiveReload documentation][lrdoc]
* [Compass.app documentation][cadoc]

### License
Base SCSS is released under a [Creative Commons Attribution-Share Alike 3.0 Unported License][ccl]. This means you can copy, distribute, transmit and adapt the work to your own personal and commercial projects.

[bourbon]: https://github.com/thoughtbot/bourbon "Bourbon by @thoughtbot"
[ccl]: http://creativecommons.org/licenses/by-sa/3.0/ "Creative Commons Attribution-Share Alike 3.0 Unported License"
[kellum]: http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/ "Replacing the -9999px Hack (New Image Replacement)"
[css3pie]: http://css3pie.com "CSS3PIE"
[patterns]: http://lea.verou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/ "Checkerboard, striped & other background patterns with CSS3 gradients"
[reset]: http://meyerweb.com/eric/tools/css/reset/ "Eric Meyer's CSS Reset"
[fontsquirrel]: http://fontsquirrel.com "Free fonts for graphic designers"
[livereload]: http://livereload.com/ "The Web Developer Wonderland"
[lrdoc]: http://livereload.com/#getting-started "Getting started with LiveReload"
[compass]: https://github.com/chriseppstein/compass "Compass by @scottdavis"
[compassapp]: http://compass.handlino.com/ "Compass.app by Handlino"
[cadoc]: https://github.com/handlino/CompassApp/wiki "Compass.app documentation wiki"
[sass]: http://sass-lang.com/ "Sass. Style with attitude"
[sasstut]: http://sass-lang.com/tutorial.html "Getting started with Sass"
[sassdoc]: http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html "Sass Reference"