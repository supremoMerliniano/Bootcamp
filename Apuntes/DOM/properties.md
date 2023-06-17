# Objects and Properties

## InnerHTML

Gets or sets the HTML contained whitin the element.

```js
const h1Elem = document.querySelector("h1");

h1Elem.innerHTML = "<em>Good Bye</em>";
```

## Style Object

The Style object represents an individual style statement. For more properties of the _Style Object_ refer to: [Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

### Style properties

You can change the style from an object by using the `style` object and a _Style Object Property_.

```js
const btn = document.querySelector(".btn");

btn.style.backgroundColor = "yellow";
```

## TextContent

Change the textual content of a text element

```js
const h1Elem = document.querySelector("h1");

h1Elem.textContent = "Good Bye";
```

## Attribute

To get an attributes list we can use `atrributes`.

```js
const link = document.querySelector("a");

link.attributes;
```

### getAttribute

Returns the value of a specified attribute on the element.

```js
const link = document.querySelector("a");

link.getAttribute("href");
```

### setAttribute

Sets the value of an attribute on the specified element

```js
const link = document.querySelector("a");

link.setAttribute("href", "https://www.bing.com/");
```
