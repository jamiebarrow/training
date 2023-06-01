# Patterns - Revealing Module Pattern

The Revealing Module Pattern is often used in order to limit the scope of defined variables, and more importantly to
only reveal or expose certain items into a parent scope, or global scope.

In the past, there was not really much way to control the scope and lifetime of variables. Scripts would be executed in
the window that the webpage is loaded in, and if two different scripts defined the same variable name, the second script
would override the definition of that variable.

It may be that you can just rename the variable, but this could cause a lot of knock-on changes. This may also not be
under your control, especially if there are third-party libraries you are included on the webpage.

Below is an example of the Revealing Module Pattern:

```javascript
var module = (function() {

    var counter = 0;

    function increment() {
        counter = counter + 1;
    }

    function getCounter() {
        return counter;
    }

    return {
        increment: increment,
        getCounter: getCounter
    };

})();
```

In the above sample, we can see that an [Immediately-Invoked-Function-Expression (IIFE)][1] is used to create a closure
within which we can define the `counter` variable, the `increment` and `getCounter` functions, and it returns an object
as the result. The returned object only contains properties of members we wish to expose/reveal, and can be considered
a "module" object.

Consumers of this module can then access `module.increment()` and `module.getCounter()` but they can not directly access
the `counter` variable. This allows for information hiding, and only exposing things that consumers need to know about.

But it also means that the `increment` function, for example, will not be defined in the global scope. If another module
defined its own version of `increment` it could do so without affecting this module.

In terms of the global scope, perhaps the module does need to access a reference from the global scope. This can be
defined more explicitly by providing them as parameters to the IIFE for a more contract based way of working:

```javascript
var module = (function($) {

    var className = 'btn-primary';

    function addButtonClass(selector) {
        $(selector).addClass(className);
    }

    return {
        addButtonClass
    };

})(window.jQuery);
```

If other libraries also make use of the `$` declaration, which could then conflict with the `jQuery` declaration of `$`,
then this would allow interopability of these libraries.

## Modern JavaScript

In modern ES6 JavaScript this pattern is still useful, but ES6 has its own module system which serves the same purposes.

Typically, you will define modules in their own files, and export members from the module.

```javascript
// add-button.js
const className = 'btn-primary';

export function addButtonClass(selector) {
    $(selector).addClass(className);
}
```

Then a consumer would import these members from the module:

```javascript
// application.js
import * as btnModule from './add-button';

btnModule.addButtonClass('button');
```

If only specific members are needed, then the destructuring looking format of this is preferred:

```javascript
// application.js
import { addButtonClass } from './add-button';

addButtonClass('button');
```

If you need to avoid naming conflicts, then you can still do this using an alias:

```javascript
// application.js
import { addButtonClass as btnModuleAddButtonClass } from './add-button';

btnModuleAddButtonClass('button');
```

[1]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#modules_and_classes