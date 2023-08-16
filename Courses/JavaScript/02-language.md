# JavaScript Programming Language

## Variables

Applications typically deal with input, perform some work on this, and then
return some output.

Below is a very simple example which does that - it asks for the name of the
user, performs the task of building up a message using this name, and then
displays this message to the user.

```js
var name = prompt('What is your name?');
var message = 'Hello ' + name + '! Have a great day :)';
alert(message);
```

When you run this code in a web browser, the `prompt` function should cause you
to be given a popup window asking you for your name. The popup should have a
textbox in which you can then provide this as input, and two buttons such as
"OK" and "Cancel". If you press the "OK" button, then the value is returned and
stored in the `name` variable. This is then joined onto the other parts of a
greeting and stored into the `message` variable (this joining is known also as
"string concatenation"). Finally, the `alert` function shows the message as
another popup to the user.

> Hello James! Have a great day :)

Why, thank you :)

However, what happens if we don't press "OK" and rather press the Escape key on
the keyboard or press the "Cancel" button? We get a strange message appearing:

> Hello null! Have a great day :)

This is because a `null` value is returned when we do not provide an input value
and this `null` represents the absense of an actual value.

```js
var name = null;
var message = 'Hello ' + name + '! Have a great day :)';
alert(message);
```

This is quite common in most languages, however variables in JavaScript can also
take on a different value that is quite special to JavaScript. In the below
example, what message do you believe will be displayed?

```js
var name;
var message = 'Hello ' + name + '! Have a great day :)';
alert(message);
```

If you thought that the message would be `Hello null! Have a great day :)`, then
you don't get any points. The message that will actually be displayed is:

> Hello undefined! Have a great day :)

Variables which are not assigned a value in JavaScript automatically get
assigned a special value of `undefined`. This can highlight that in fact
there has not even been anything assigned to the variable, in comparison
to `null` which means that we did specifically set it to be `null` (the absense of a value).

Now, I know what you are thinking: this can be confusing.

And you are completely right!

I would recommend reading up as well as to why even `null` is maybe [a billion dollar mistake][1], as explained by Tony Hoare, the inventor of its concept in the ALGOL programming language.

But for now, at least keep in mind that there are two ways to represent
the absense of a value in JavaScript - `undefined` and `null`.

The reason they are also called variables, is because their values can change
over time.

```js
var greeting = 'Good morning!';
greeting = 'Good afternoon!';
alert(greeting);
```

In the above example, we can re-assign the value of `greeting`. The popup will
show a greeting of `Good afternoon!`.

In most languages, variables must be of a certain type, but this is not the case
in JavaScript.

```js
var greeting = 56;
alert(greeting);
```

Although the `alert` function typically expects text to be provided as a
parameter, it still works when we pass a number into the function. The function
either knows how to make use of numbers or the number is somehow converted into
a text form.

```js
var weatherReport = 'The temperature this afternoon is ' + 23 + ' degrees';
alert(weatherReport);
```

We see the same in the above example, where a number is concatenated with
strings, and the expected text message is correctly displayed.

### Variables (ES6)

ES6 introduced two improvements to variables, in terms of the scope that variables
apply to as well as introducing constants whose value cannot be re-assigned to
once initialized.

```js
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
```

```js
for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
}
console.log(counter); // ReferenceError: counter is not defined
```

```js
(function () {
    'use strict';
    const x = 1;
    x = 2; // TypeError: Assignment to constant variable
})()
```

```js
(function () {
    'use strict';
    const x = 1;
    const x = 3; // SyntaxError: Identifier 'x' has already been declared
})()
```

[1]: https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/