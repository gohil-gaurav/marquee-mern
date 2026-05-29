# CSS Flexbox

## What is Flexbox?

Flexbox is a one-dimensional layout system used to align and distribute items efficiently.

It makes creating layouts much easier.

---

# Enable Flexbox

```css
display:flex;
```

Example:

```css
.container{
    display:flex;
}
```

---

# Main Axis and Cross Axis

```txt
flex-direction: row

Main Axis  →
Cross Axis ↓
```

---

# justify-content

Aligns items on the main axis.

```css
justify-content:center;
```

Common Values:

```css
flex-start
center
flex-end
space-between
space-around
space-evenly
```

Example:

```css
.container{
    display:flex;
    justify-content:center;
}
```

---

# align-items

Aligns items on the cross axis.

```css
align-items:center;
```

Common Values:

```css
flex-start
center
flex-end
stretch
```

---

# flex-direction

Controls item direction.

```css
flex-direction:row;
```

Values:

```css
row
column
row-reverse
column-reverse
```

Example:

```css
.container{
    flex-direction:column;
}
```

---

# gap

Adds spacing between flex items.

```css
gap:20px;
```

---

# Complete Example

```css
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
}
```

---

# Interview Questions

## What is Flexbox?

Flexbox is a CSS layout model used to arrange items efficiently in rows or columns.

---

## Difference Between justify-content and align-items?

| justify-content | align-items |
|-----------------|------------|
| Main Axis | Cross Axis |
| Horizontal in row layout | Vertical in row layout |

---

## How do you make a flex container?

```css
display:flex;
```

---

# Real Life Example

Think of a shelf:

```txt
[Book] [Book] [Book]
```

Flexbox controls:

- Position of books
- Spacing between books
- Direction of books

---

# Summary

✅ display:flex

✅ justify-content

✅ align-items

✅ flex-direction

✅ gap

✅ Main Axis

✅ Cross Axis

✅ Flex Layout