---
title: "Mixture updates"
date: 2013-05-15 10:56
published: true
---

We&#8217;ve just pushed some updates to Mixture, this is quite a big release featuring a number of new additions and improvements I&#8217;ve decided to log the main points here&#8230;

###Collections

This is the biggest feature addition and essentially brings the power of blogging and much more to Mixture.

Inspired by tools like Jekyll, but designed to be more flexible.

Here&#8217;s a quick video demonstrating this feature:

[http://www.youtube.com/watch?v=zexkJ8wTOXg&amp;hd=1](http://www.youtube.com/watch?v=zexkJ8wTOXg&amp;hd=1)

You can get hold of the project used in this video and have a play yourself:

[https://github.com/teammixture/mixture-collections](https://github.com/teammixture/mixture-collections)

###Remote Debugging (Multi-device)

From day one Mixture enabled multi-device testing (including style injection &amp; live refresh) and this is enabled for Mixture projects and non-Mixture projects ([see this video](http://www.youtube.com/watch?v=ER-la4wunyo&amp;list=LLzjZ5b8kZQGmAjX2dzlzY_Q&amp;feature=mh_lolz)).

We&#8217;ve gone a step further and added remote debugging and integrated [weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/), this makes it super easy to debug the markup, styles and even gives you access to the console log of the devices viewing your project.

###Routing

Routing and friendly URL&#8217;s in Mixture are currently handled by the structure and filename, we have now just added a new feature allowing custom routes.

Custom routes allow you to define variables in your routing and when matched those variables are exposed to the page and mixture model and available for you to use - this is particularly handy for the new collections.

We&#8217;ve also added a redirect route allowing you to redirect anywhere based on a matching route on your site. This will report as a 301 Moved Permanently.

###Custom Ruby

You can now point Mixture at your own install of Ruby and Gems, this is useful if you want an easy way to use plugins with Compass or if you with to use an alpha version of Compass not supported by Mixture.

There has of course also been many more small updates and improvements, you can view the change logs [Mac](http://docs.mixture.io/mac/changelog) &amp; [Windows](http://docs.mixture.io/windows/changelog)

If you&#8217;re interested, I&#8217;m tweeting small bite-size Mixture tips on a regular basis, focused on individual features of Mixture and the tech involved. You can see these here [http://tips.neil.mixture.io](http://tips.neil.mixture.io)