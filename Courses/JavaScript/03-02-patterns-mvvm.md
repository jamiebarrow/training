# Patterns - Model-View-View-Model

The Model-View-View-Model pattern, known by its abbreviation of MVVM, is a pattern that allows for a more declarative
programming paradigm, compared to an imperative/procedural programming paradigm.

What this means is, you declare the behavior you would like certain elements of your page to have. This is similar to
existing HTML markup, where you don't really care how an image is implemented, you just declare that you would like an
image on a page that is loaded from a certain URL by defining it as `<img src="https://...">` and you let the browser
do the rest.

The below example makes use of KnockoutJS, a simple library that provides an MVVM implementation, to illustrate the
pattern.

```javascript
<section id="applicationRoot">
    <div data-bind="text: fullName"></div>
</section>
```

In the above sample, we can see that a `div` element is declared on the page with a `data-bind` attribute.
This attribute is what KnockoutJS will use to determine what "bindings" to apply to that element. In this case, the
KnockoutJS built in "text binding" will be applied, which will in this example be used to display the text that is
contained in the `fullName` property. The binding will implement the logic to update the `innerText` property of the
`div` in the Document Object Model.

If we look below, we can see how this is actually initialized from JavaScript:

```javascript
var viewModel = {
    firstName: ko.observable('John'),
    lastName: ko.observable('Smith'),
};
viewModel.fullName = ko.computed(function () {
    return viewModel.firstName() + ' ' + viewModel.lastName();
});
ko.applyBindings(viewModel, document.getElementById('applicationRoot'));
```

The `viewModel` object created is the instance of the "view-model" part of MVVM. The view-model contains two properties
for the `firstName` and `lastName`, and these are both KnockoutJS observables. These are KnockoutJS specific
implementations of the classic "Gang of Four" Observable and Observer design patterns. The example does not fully show
this, but these observables can be subscribed to, so that subscribers can be notified of when the `firstName` is changed
as an example.

Following this, another property is then defined on the view-model, the `fullName` property, which is also an observable
but this time is a KnockoutJS "computed observable". A computed observable is also known as a dependant observable, in
that its value will be re-computed whenever the underlying observables it consumes change. In effect, KnockoutJS will
realize that the `fullName` property makes use of the `firstName` and `lastName` observables and so will setup the
subscriptions to them so that whenever either the `firstName` or `lastName` changes, the `fullName` property is then
re-computed and its value is then updated as well.

This saves a lot of work from a developer to ensure this constraint stays true.

Finally, the call to `ko.applyBindings` is what actually "binds" the view-model to the view itself. The DOM element on
which the view-model should be applied to is passed as a parameter, as KnockoutJS will traverse the DOM and inspect the
various `data-bind` attributes on the elements in order to apply the various bindings (such as the "text binding" above)
so that the expected behavior is applied.

In this example, this means that the `div` will be updated with the text value of `John Smith`.

If you were to compare how to do a similar setup in traditional JavaScript, or even using a helper library such as
jQuery, there would be a lot more steps to perform. This smaller piece of code shows the power of the more declarative
approach, as it is much simpler to read and understand.
