# jQuery

It's a JavaScript multipltaform library. It can be included in our code via _CDN_.

## Selecting elements

In pure JS we use the `document.querySelector()` to select an element. In jQuery there's a reduce syntax that is just simply a dollar sign followed that the element that we are looking for.

```js
$("element");
```

## Manipulating Style

In pure JS we use the `element.style` object to modify the style of a certain element in our webpage. In jQuery we use the

```js
$("h1").css("cssProperty", "value");
```

Also this method let us log into console the value from an specific property.

```js
console.log($("h1").css("cssProperty"));
```

## Classes

jQuey allow CSS Class manipulation.

### Add/Remove Classes

In pure JS we use `element.classList.add()/remove()` method to add/remove a new class. In jQuery we use:

```js
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
```

In the case that we want to add/remove multiple classes we just separate them with a blank space in the argument from the method.

### hasClass

To determine if a given class exist in the element we use the method

```js
$("element").hassClass("class");
```

## Text anf HTML

To change the text from a _HTML text element_ we use:

```js
$("element").text("text");
```

To change the text or embed _HTML_ code we use:

```js
$("element").html("html");
```

## Attributes

To get the value of the attribute from an _HTML element_ we use:

```js
$("element").attr("attribute");
```

To set the value of the attribute from an _HTML element_ we use:

```js
$("element").attr("attribute", "value");
```

## Event Listeners

To add an event listener for click, use:

```js
$("element").click(anonymousFunction);
```

To add an event listener for keys, use:

```js
$("element").key(anonymousFunction(event));
```

To add an event listener for the entire _document_, pass as an argument to the selector the `document` _object_ or the `body` _string_.

There is a more flexible way to add _event listeners_ to our elements and that is with the jQuery method `on`.

```js
$("element").on("event", anonymousFunction);
```

## Add/Remove HTML Elements

To **add** elements _before_ or _after_ an specific HTML Element.

```js
$("element").before("element");
$("element").after("element");
```

To **add** elements inside an specific HTML Element. We can add them _before_ or _after_ the content of the selected HTML Element.

```js
$("element").prepend("element"); // after the content
$("element").append("element"); // before the content
```

To **remove** the added HTML Elements we can use the `remove` method.

## Animations

To **hide** and **show** an _HTML Element_ we use the methods `hide` and `show`. If we want to alternate between _hidding_ and _showing_ the _HTML element_ we use toggle.

```js
$("element").hide()
$("element").show()
$("element").toggle()
```

To **hide** and **show** an _HTML Element_ with _fade_  effect we use the methods `fadeIn` and `fadeOut`. If we want to alternate between _hidding_ and _showing_ the _HTML element_ we use `fadeToggle`.

```js
$("element").fadeIn()
$("element").fadeOut()
$("element").fadeToggle()
```

To **hide** and **show** an _HTML Element_ with _slide_ effect we use the methods `slideIn` and `slideOut`. If we want to alternate between _hidding_ and _showing_ the _HTML element_ we use `slideToggle`.

```js
$("element").slideIn()
$("element").slideOut()
$("element").slideToggle()
```

To make **custom animations** we can use the method `animate`. This method only accepts _numerical_ or _string composite by numerical_ (for the porcentage or pixels) values between the curly braces.

```js
$("element").animate({property: value});
```

To **chain** multiple animation methods we can call them one followed by another.

```js
$("h1").slideUp().slideDown().animate({opacity: 0.5});
```
