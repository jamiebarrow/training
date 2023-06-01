# JavaScript

Welcome to my JavaScript course, where I hope to share knowledge and also references to sources that will help you to
become more proficient with JavaScript.

Below is a brief outline, which may be updated over time. It begins with an Introduction to JavaScript and the history
of the Internet, which may be valuable for beginners but can be skipped if you are already familiar with this.

The following section starts to explain the JavaScript Programming Language, covering the basics of the language.
Those familiar with other programming languages may choose to skip this section, but I recommend still going through it
since even though a `for` loop is quite common in most programming languages, details around specific JavaScript quirks
are likely discussed that even for experienced developers can be a good refresher.

Please bear in mind that this is a work in progress, so if there are any errors, or if there is anything that is not
yet covered or planned that you believe should be, please let me know.

## Course Outline:

Again, note that below is a work in progress and will be updated over time.

- [Introduction to JavaScript](01-introduction.md)
    - What is JavaScript?
    - What is the internet?
        - Networking
            - NETBIOS ?
            - Internet Protocol (IP) addresses vs. Domain Name System (DNS)

    - What is a webpage?
        - web page vs. site vs. application vs. server?
            - Webpages
                - HTML, CSS
                    - HTML4, quirks mode
                - HTML5, CSS3
                - Document Object Model (DOM)
            - Dynamic HTML (DHTML), XmlHttpRequest (XHR), AJAX, XDomainRequest, CORS, etc.

    - History of JavaScript
        - Early internet, to modern browsers
            - Browsers
                - Mosaic, Netscape, Internet Explorer, browser wars
                - Internet Explorer, Firefox, Chrome, Safari
                - Modern browsers
        - Java vs. JavaScript vs. JScript vs. Visual J#
        - .NET
        - ECMAScript

- [JavaScript Programming Language](02-language.md)
    - Language Basics (ES5)
    - Data types
        - number, string, boolean, object, function, etc.
    - Functions as first class citizens
        - constructor functions
        - this
        - closures, IIFE's
    - Flow control, conditionals
        - if, for, do, while, switch, etc.

- [Patterns](03-00-patterns.md)
    - [Revealing module pattern](03-01-patterns-revealing-module.md)
    - Mixins
    - Object Orientation with functions, prototypical inheritance etc.
    - MV* Patterns
        - Passive view vs. active view, dumb vs. smart, etc.
        - Model-View-Controller (MVC)
        - Model-View-Presenter (MVVM)
        - Model-View-View-Model (MVVM)

- ES6
    - Classes
    - Modules

- Libraries (other courses ?)
    - jQuery
        - jQuery UI
    - mootools
    - YUI
    - underscore
    - EmberJS
    - KnockoutJS
        - Spagetti code vs. Ravioli code, see [John Papa's content here][2], and [here][3], and [here][4]
    - RequireJS
    - SystemJS
    - BoilerplateJS
    - DurandalJS
    - Aurelia
    - AngularJS
    - Angular
    - ReactJS
    - Vue

- Tools
    - Babel
    - Grunt
    - Gulp
    - Webpack
    - Rollup
    - esbuild, rspack, etc.
    - eslint
    - TypeScript

- Platforms / Hosting
    - IIS
    - Apache
    - nginx

## References

- [JavaScript | MDN][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[2]: https://www.johnpapa.net/typescriptpost4/
[3]: https://www.johnpapa.net/angularjs-patterns-clean-code-released/
[4]: https://www.johnpapa.net/building-single-page-apps-with-knockout-jquery-and-web-api-ndash-the-story-begins/
