JavaScript:

* 2 spaces indentation. Tabs must be 2 spaces long and expanded.
* Function names should be verbs or verb phrases.
* Variable names should be nouns.
* Variables used as constants should have a name with all caps and separated by underscores.
* Class names should be nouns and should be in capitalized camel case.
* Other variable names and function names must start with a lowercase letter and be followed by camel case letters.
* Use single quotes where possible.
* Use literals to initialise objects where possible. e.g. array literals, object literals, regular expression literals, etc. But use function expressions to initialise a function where possible.
* Commenting for functions is a must. Follow the spec of JSDoc.
* Put function declarations on the bottom rather than on the top of a JavaScript file.
* The only global variable is “UISpark”. Everything should be under this namespace.
* Single var statement within a function or one var at a line but put them all together at the top.
* Use strict mode and the ‘use strict’ statement at the top of a JavaScript file.
* Try to do only one thing in one function.
* Never catch an error and do nothing about it. If you don’t know what to do simply throw it.

CSS:

* UTF-8 encoding. Include “@charset 'UTF-8'" in the beginning of your CSS file.
* CSS class names should be prefixed with “uispark-".
* CSS classes for JavaScript manipulation should be told apart from those for styling. For example, use “uispark-js-root” for a JavaScript manipulating class and use “uispark-root” for a styling class.
* Follow B.E.M. methodology.
* One property per line.
* Prefer shorthand properties. For example, prefer “margin: 1px 2px 3px 0” over “margin-bottom: 3px; margin-left: 0; margin-right: 2px; margin-top: 1px”.
* Units must be provided appropriately.

HTML:

* Words in element’s ids must be separated by underscores.
* Tags MUST be closed.
* Add appropriate comments. For example, at the beginning and end of a big element.
* Try to write semantic HTML.
* Try NOT to put any inline JavaScript or CSS code in an HTML file where possible.
