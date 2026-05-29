# CSS Grid

## What is CSS Grid?

CSS Grid is a two-dimensional layout system.

It can control:

- Rows
- Columns

Unlike Flexbox, Grid works in both directions.

---

# Enable Grid

```css
display:grid;
```

Example:

```css
.container{
    display:grid;
}
```

---

# grid-template-columns

Creates columns.

```css
grid-template-columns: 1fr 1fr 1fr;
```

Example:

```css
grid-template-columns: repeat(3, 1fr);
```

Result:

```txt
| 1 | 2 | 3 |
```

---

# grid-template-rows

Creates rows.

```css
grid-template-rows: 100px 100px;
```

---

# gap

Adds spacing between grid items.

```css
gap:20px;
```

---

# Fraction Unit (fr)

Grid commonly uses fr.

```css
1fr
2fr
3fr
```

Example:

```css
grid-template-columns:1fr 2fr;
```

Meaning:

```txt
| Small | Large Large |
```

---

# grid-column

Makes item span multiple columns.

```css
grid-column:1 / 3;
```

Example:

```txt
+-----------+
|     1     |
+-----------+
```

---

# grid-row

Makes item span multiple rows.

```css
grid-row:1 / 3;
```

---

# Complete Example

```css
.container{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}
```

---

# Grid vs Flexbox

| Grid | Flexbox |
|--------|---------|
| Two-dimensional | One-dimensional |
| Rows + Columns | Row OR Column |
| Complex layouts | Simple layouts |

---

# Interview Questions

## What is CSS Grid?

CSS Grid is a layout system that organizes content into rows and columns.

---

## Difference Between Grid and Flexbox?

Grid works in two dimensions.

Flexbox works in one dimension.

---

## How do you create a grid?

```css
display:grid;
```

---

# Real Life Example

Think of a chessboard:

```txt
□ □ □ □
□ □ □ □
□ □ □ □
□ □ □ □
```

Grid helps place items in rows and columns just like a chessboard.

---

# Summary

✅ display:grid

✅ grid-template-columns

✅ grid-template-rows

✅ gap

✅ grid-column

✅ grid-row

✅ fr Unit

✅ Grid Layout