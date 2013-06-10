---
title: "Small but important updates"
date: 2013-04-04 23:26
published: true
---

If you&#8217;re using [Mixture](http://mixture.io) you may have noticed we are pushing updates continuously, improvements, fixes and new features.

We&#8217;ve just made another small but powerful update.

Mixture currently has two project types (or modes) &#8220;Mixture&#8221; and &#8220;Simple&#8221;.

A Mixture project benefits from all of the features and functionality that the tool and online services offer, builtin server, friendly urls, liquid templates, HTML, preprocessing, minifcation, live refresh, multi-device testing, quick publish and so on.

The idea behind simple mode was to allow non-mixture projects to benefit from some of the same features detailed above, so we built a feature into simple mode that allows Mixture to partner with any server (mamp, wamp, etc) and automatically enable live refresh, style injection and multi-device testing.

We think this is pretty powerful and very flexible.

But we&#8217;ve had feedback from users, who didn&#8217;t necessarily want to jump into a Mixture project, but also didn&#8217;t have a server running for their project. Usually thats because the project they are building is simply static HTML files.

Although it&#8217;s pretty straight forward to convert a project into a Mixture project, we thought we could make it easier to run these types of projects in Mixture.

So as of today and the latest update&#8230;

If you use Mixture in simple mode and **don&#8217;t** set a partner server, Mixture will boot a lightweight version of its own server. This server will parse HTML files and assets, it will even add live refresh, style injection and multi-device ability automatically!

As an example, if in the root of your project directory you had a file called &#8220;about.html&#8221; you could simply &#8220;view locally&#8221; on Mixture and then go to the url &#8220;/about&#8221; to view that page. Any changes to styles or the page will be automatically visible.

We really hope you like this small addition.