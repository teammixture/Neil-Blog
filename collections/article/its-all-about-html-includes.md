---
title: "It's all about HTML & Includes"
date: 2013-03-30 16:36
published: true
---

Over the last few months I&#8217;ve read various conversations on Twitter and listened to podcast discussions regarding HTML and specifically template engines, the main gist of this conversation&#8230;

> &#8220;I just want to use HTML but with includes&#8221;

&#8230;and&#8230;

> &#8220;I don&#8217;t want to learn a new template language&#8221;

And of course we&#8217;ve had similar comments directed at us and our choice of template language for [Mixture](http://mixture.io) - Liquid.

In these cases it feels like there is an assumption that the Liquid template language is going to be complex or a learning curve that they just don&#8217;t have time for.

At first glance any new language can seem like hassle, and Liquid has a **lot more** features than just &#8220;includes&#8221;. To be honest it&#8217;s up to you how much of that power you want to use, if you just want HTML with the ability to use includes, then I think Liquid + Mixture are perfect. But, the best bit is - if you do need more, it has what you need.

We looked at a range of template languages before we chose Liquid, but the three main reasons that we did&#8230;

1. It&#8217;s simple &amp; familiar - it&#8217;s basically just HTML (+ some).
2. You can use the basics and move on at your own pace.
3. It&#8217;s extendible, so we can add features to aid development in Mixture.

So if you want to use HTML and includes, here&#8217;s an example of how you can do just that&#8230;

<pre>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Page Headline&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Here&#8217;s the same markup with an include&#8230;

<pre>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;body&gt;
    {% raw %}{% include "navigation" %}{% endraw %}
    &lt;h1&gt;Page Headline&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Which could load in something like this&#8230;

<pre>&lt;nav&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;a href="/about"&gt;About&lt;/a&gt;
&lt;/nav&gt;</pre>

Of course I would definitely recommend you look deeper and take advantage of features like &#8220;layouts&#8221; as it will totally improve your structure and workflow.

If you&#8217;re interested to learn more, please check out the [docs](http://docs.mixture.io/templates).

I&#8217;ve also started a series of screencasts showcasing mixture and it&#8217;s features a big part of this will be templates and Liquid.

[http://docs.mixture.io/screencast-event-project](http://docs.mixture.io/screencast-event-project)

You can download the project from GitHub and follow along.