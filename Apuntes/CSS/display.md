# Display

There are multiple values for the `display` property:

- `inline`: The width and height are the same as the inner content. You can't change the values of width and height.
- `block`: occupies all the available space in the viewport. Inserts other elements below to it.
- `inline-block`: combines the two types of display, but allows to modify the width and height from the element.
- `none`: makes any element on the screen dissapear

## Float

Places an element on the left or right side of its container, allowing text and inline elements to wrap around it. If `clear` property is set, the element where is set ignores the float placement from the last elements

## Media Queries

There are two main _breakpoints_:

- `min-width`: from this width upwards apply the styles specified in the block code
- `max-width`: from this width backwards apply the styles specified in the block code

You can combine the breakpoints in _media queries_ with the word `and` between them.

```css
@media (max-width: 600px) and (min-width: 600px) {
    /* Styles */
}
```
