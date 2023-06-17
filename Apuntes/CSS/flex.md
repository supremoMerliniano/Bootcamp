# Flex

You have to wrap your elements in an container and set `flex` int the `display` property. By default the container uses a `block` alignment, but you can set `inline-flex` to use a `inline` alingment.

## Gap

Is a shorthand for row-gap and column-gap, specifying the size of space between elements.

## Flex-direction

Sets how flex items are placed in the flex container defining the main axis, cross axis and the direction (normal or reversed).

```css
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

## Flex-basis

Sets the initial main size of a flex item. Given the main axis.

## Order

Sets the order to lay out an item in a flex container. Items in a container are sorted by ascending order value and then by their source code order. The default order is 0.

## Flex-wrap

Sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

## Justify-content

Defines how the browser distributes space between and around content items along the main-axis of a flex container.

## Align-items

Controls the alignment of items on the Cross Axis. To work properly has to be defined the container height explicitly.

To set a different alignment of the element on the cross axis you can use the property `align-self` in the element selector.

## Align-content

Behaves similarly to `align-items` property, but to work has to be set the `flex-wrap` property to `wrap`.

## Felxbox sizing Algorithm

The algorithm that uses flexbox to determine the size of the elements can be seen in the next inequality.

$$Content~Width < Width < Width < flex-basis < min-width/max-width$$
