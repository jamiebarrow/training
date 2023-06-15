# KnockoutJS

KnockoutJS is a library that was created by [Steve Sanderson][4] in 2010 which allows for a Model-View-View-Model (MVVM)
pattern to be used in development of web applications that make use of JavaScript.

Around the time it was introduced, jQuery was a very popular library for building more dynamic web applications, but a
lot of the code was very imperative and required many steps in order to achieve certain functionality, despite the
simpler paradigm that jQuery provided compared to traditional plain JavaScript.

The MVVM pattern allowed for a more declarative programming paradigm, which could then simplify the HTML markup, and
with its two-way binding between the view and the JavaScript model, would allow for developers to focus more on the
logic of the application, without having to do many modifications to the view itself.

This is a similar development experience to developers who would have been working in other Microsoft related
technologies at the time such as Silverlight and Windows Presentation Foundation (WPF), which made use of a declarative
[XAML][5] (Extensible Application Markup Language) based paradigm and MVVM pattern.

Many developers at the time were more familiar with backend technologies or desktop based technologies and so KnockoutJS
brought a more familiar experience, as well as a more testable experience to the frontend development world, with a
clearer separation of concerns between application logic and view logic.

This also led to frameworks such as [Caliburn.Micro][6] to be ported to the JavaScript world in the form of
[DurandalJS][7], the author of which also then joined the AngularJS/Angular team before leaving again to work
on [Aurelia][8].

KnockoutJS may be an older technology, but it is quite a powerful and easy to understand framework on top of which
applications can be built. In fact, it was initially designed for just enhancing single pages, but other frameworks
such as DurandalJS build on top of it to offer a full Single Page Application (SPA) experience with features we expect
of typical web applications today, more than a decade since it was introduced.

It is also much simpler in my personal opinion to understand than similar libraries that offer this kind of Observable,
or "reactive" programming paradigm, such as RxJS. The recent move of the Angular team towards [Angular Signals][9] as a
preview feature of Angular v16, where it uses a `signal()` to store on observable piece of data, and a `computed()` to
have a dependant observable, reminded me very much of the KnockoutJS experience.

## References

- [KnockoutJS][1]
- [KnockoutJS Documentation][2]
- [KnockoutJS Github][3]
- [DurandalJS][4]
- [Aurelia][5]

[1]: https://knockoutjs.com/
[2]: https://knockoutjs.com/documentation/introduction.html
[3]: https://github.com/knockout/knockout
[4]: https://blog.stevensanderson.com/2010/07/05/introducing-knockout-a-ui-library-for-javascript/
[5]: https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-7.0
[6]: https://caliburnmicro.com/
[7]: https://github.com/BlueSpire/Durandal
[8]: https://aurelia.io/
[9]: https://angular.io/guide/signals