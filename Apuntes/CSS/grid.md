# Grid

You have to set `display` property to `grid` in a container to make it work.

## Rows, Columns and Sizing

The `grid-template-rows` defines the number and size of the rows (height). It applies almost the same for the `grid-template-columns`, but in this case we define the values for the columns (width). The `grid-template` shorthand includes both properties.

```css
grid-template: 60px 60px / 60px 60px;
grid-template-columns: 60px 60px;
grid-template-rows: 60px 60px;
```

The values that can be used are follow:

- `px`
- `auto`: When used on a row it adjust to the height size, and when used in columns it shrinks or expands to fit content.
- `fr`: defines the ratios from the total size. Grows and shrink depending on the width available for the horizontal and also the content size for the vertical.
- `min/max size`: define the minimun and maximum width/height that an grid element can be. It depends on the available space.
- `repeat`: Repeat the size given times.

```css
grid-template-rows: repeat(2, 200px); 
```

__Note:__ If we haven't definied a correct number of _rows_ and _columns_ the remaining column/row will collapse to the bottom of the container and set the width to the width of the column, to define an specific height value of the collapsed element we can use the `grid-auto-rows` property.

## Grid Column/row

Is a CSS shorthand property (`grid-row/column-start` and `grid-row/column-end`) specifies a grid item's size and location within a grid column/row by contributing a line, a span, or nothing (automatic) to its grid placement

```css
grid-column: span 2; # Shorthand
grid-column-start: 1;
grid-column-end: 2;
```

## Order

We can use the `order` property that sort from the smaller to greater value. The grid cell with greater `order` value is positioned in the last cell.

## Grid Area

Is a CSS shorthand property specifies a grid item's size and location within a grid. The values given are `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`.

```css
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end;
```
