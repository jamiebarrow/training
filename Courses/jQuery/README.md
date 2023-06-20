# jQuery

Welcome to my jQuery course.

The use of jQuery may have declined over time, as functionality it provides has been implemented natively by modern
browsers, however it is still a useful library and so this course content is here still as it is a useful library which
may even be used still in legacy projects.

## What is jQuery? Why jQuery?

jQuery is a library that was used to provide a common, standardized way of interacting with webpages in JavaScript.
Historically, browsers implemented certain features differently, with minor quirks causing bugs depending on the version
of the browser. I remember myself experiencing issues around what specific event to use when wanting to listen for
keyboard shortcuts, and which property in the event to consume depending on the browser being used.

Historically, JavaScript applications would try detect which specific browser they were running in, and then have
various different techniques to handle scenarios such as this consistently. This then allowed for adjusting their code
depending on if it was Internet Explorer or Firefox, for example, so that the application would work across all
supported browsers. If a new browser came along, e.g. Chrome which worked slightly differently, this would then be
extended.

jQuery provided a lot of this logic for you, so you didn't have to know about the various browser quirks, and so it
provides for a more consistent cross-browser implementation experience.

Similarly, the browser document object model (DOM) is often quite tedious to perform many actions. To create multiple
nested elements, set attributes or properties on them accordingly, or find elements in the DOM, a lot of manual and
repetitive steps would need to be executed.

jQuery provided also an easier experience around this, by allowing you to easily query the DOM for elements that match
certain CSS selectors, and provided utilities that allowed for a smoother experience when wanting to traverse or iterate
through these collections. The Sizzle CSS selector engine that was made for jQuery enabled this.

Finally, making Asynchronous JavaScript and XML (AJAX) requests used to also be quite a tedious and repetitive process
but jQuery also provided a much simpler way of performing AJAX requests with `$.ajax(...)`, `$.get(...)`, `$.post(...)`
and so on.

Features that we see today in modern browsers - Promises, `document.querySelector`, fetch API - were all features that
felt quite inspired by the features introduced by jQuery.

Along with its useful jQuery library, the jQuery community also provided a component library implementation which
provided much more rich user experiences which were typically quite hard to develop, as before CSS3 many CSS quirks as
well as JavaScript quirks may have needed to be tackled to build a truly rich user interface. This component library is
jQuery UI, which also provided the ability to theme the user interface.

These were really main influences in web development, and more well known projects such as Twitter Bootstrap would have
been heavily inspired I believe by the learnings of the times of jQuery and jQuery UI development.

Today a lot of features are provided by native browser features, so [You May Not Need jQuery][5], but it is still a
valuable tool for simple applications.

## References

- [jQuery][1]
- [jQuery UI][2]
- [jQuery Github][3]
- [You Might Not Need jQuery][4]
- [You Might Not Need jQuery, Github][5]

[1]: https://jquery.com/
[2]: https://jqueryui.com/
[3]: https://github.com/jquery/jquery
[4]: https://github.com/HubSpot/youmightnotneedjquery
[5]: https://youmightnotneedjquery.com/