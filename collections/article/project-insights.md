---
title: "Project insights"
date: 2013-02-06 10:35
published: true
---

Over the last couple of weeks I&#8217;ve been working on the new [Future Insights](http://futureinsightslive.com) site with [Mike Kus](http://mikekus.com).

I&#8217;ve decided to detail some of our decisions as they may be useful.

I&#8217;ve worked on a few responsive sites and taken various approaches, some good and some bad, as always the decisions you make on a project are weighted with pros and cons, but should be based upon the factors surrounding your project.

![image](http://media.tumblr.com/0a7c17641437b61e9b2b2386ad0145d7/tumblr_inline_mhujprxoMX1qz4rgp.png)

The site features a healthy amount of imagery and icons and as the requirement was to support retina devices, we were concerned that using multiple PNGs could add significant load time.

A benefit of using SVG is that they are retina ready and scalable by default and in this case offered a significantly smaller file size.

These benefits also come with some potential downsides&#8230;

Spriting with SVGs is not straight forward and referencing individually will result in many more HTTP requests. It&#8217;s worth noting that some of this may be resolved in the future with SVG [fragments](http://www.broken-links.com/2012/08/14/better-svg-sprites-with-fragment-identifiers/).

Not every browser [supports SVG](http://caniuse.com/#search=svg) and some that do may not handle them as expected. The project had a requirement for some icons to scale with the browser window, but maintain ratio - IE9 had an issue with this.

Here&#8217;s the approach we took&#8230;

###SVG compression

We created our SVGs with illustrator and then compressed them with [svgo](https://github.com/svg/svgo).

###HTTP requests and spriting

To resolve the issue of additional HTTP requests and lack of spriting, we Base64 encoded and embedded many of the SVGs into our stylesheet (it&#8217;s advisable to use gzip also).

Creating Base64 data urls can be a slow and painful task. You can automate this task, but if thats not possible for you to setup and implement I created a small online [Base64 tool](http://neil.mixture.io/non) to make this process quicker and easier. You simply drag and drop your images or even a directory of images, and it will spit out a style sheet with the necessary embedded images - it&#8217;s pretty quick and I found it super useful.

###Fallback / Browser support

We used the javascript from [grunticon](https://github.com/filamentgroup/grunticon) to serve our SVG styles to supporting browsers with a fallback to PNG for non supporting browsers. 

For non-SVG browsers we only created standard PNGs (sprites where possible) no need to create retina versions.

###Scaling &amp; Maintaing ratio

To solve the issue we had with some browsers failing to scale and maintain ratio on SVGs, we created small transparent GIFs sized correctly and then applied the SVG image to the background of this image - this solved our issue.

###Tooling / Workflow

Of course, I used [Mixture](http://mixture.io) to build and develop the project, this allowed me to test live on [multiple devices / browsers](http://www.youtube.com/watch?v=ER-la4wunyo) and keep Mike in the loop.

The ability to publish quickly online offers many benefits, in this case it allowed us to discuss and make changes to the design and build efficiently.

I chose [Sass](http://sass-lang.com/) as the preprocessor and took a mobile-first approach. Here&#8217;s a quick summary of my setup&#8230;

1. A base stylesheet which all browsers will load
2. A layout stylesheet which contains all of the media query breakpoints (all breakpoint styles are separated into partials). This is only loaded by browsers that support media queries.
3. IE8 (and down) stylesheet which is conditionally loaded, this stylesheet loads all necessary breakpoint partials (with out the media query logic) and has a sprinkle of IE specific styles. This gives just a desktop view for these browsers and I specifically set a minimum width.
4. As mentioned the loading of SVG or PNG stylesheets is handled by javascript with [Grunticon](https://github.com/filamentgroup/grunticon).
5. Mixture took care of the preprocessing, minifcation and combination for all stylesheets and javascript files. We are serving with gzip compression.

Using Mixtures [templating](http://docs.mixture.io/templates) and [models](http://docs.mixture.io/models) I was able to structure my site using layouts and includes and use real data to build against. Here&#8217;s a few reasons why I think this is really powerful

* Using real data I could kept my templates even more lightweight and [DRY](http://en.wikipedia.org/wiki/Don), no need to add lots of dummy markup. Create once and populate with real data.
* Real data allowed me to test and better understand how our styles and markup reacted to real data, so often this is not considered and can cause problems during content population.
* As I had data I was also able to write ajax functions to use this data and create all necessary features for the site.
* The backend developer used my models as a reference for the data needed (meaning they didn&#8217;t have to touch the markup). Of course I could have also been supplied the real data as JSON files upfront and built against them.
* Modelling the data as you build the front-end allows you to think more about what you are implementing and potential issues can be resolved during the front-end build.

###Summary of tools

* [Base64 tool](http://neil.mixture.io/non)
* SVG compression with [svgo](https://github.com/svg/svgo) *
* [Grunticon](https://github.com/filamentgroup/grunticon)
* [Mixture](http://mixture.io)

###Useful resources

* Harry Roberts (csswizardry) blogged [Front-end performance](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/).
* David Bushell has a nice [write up about SVG](http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/).
* [http://caniuse.com/#search=svg](http://caniuse.com/#search=svg)

###Finally

I mentioned in a previous post that I was making some screencasts for [Mixture](http://mixture.io) - Apologies for the delay, I decided to use the Future Insights build to create the screencasts. As soon as I can I will be publishing.

**Thanks** @[greg_a](http://twitter.com/greg_a) and @[olilish](http://twitter.com/olilish) for all their help and work on the project.