# CSS Display and Position

## Display Property

The display property controls how an element appears on the page.

---

# Block

Takes full width available.

```css
display:block;
```

Examples:

- div
- h1
- p

Characteristics:

- Starts on a new line
- Takes full width

---

# Inline

Takes only required width.

```css
display:inline;
```

Examples:

- span
- a
- strong

Characteristics:

- No new line
- Width and height don't work properly

---

# Inline-Block

Combination of inline and block.

```css
display:inline-block;
```

Characteristics:

- Stays in same line
- Width and height work

---

# Position Property

Used to control element placement.

---

# Relative

Moves relative to original position.

```css
position:relative;
left:50px;
```

---

# Absolute

Moves relative to nearest positioned parent.

```css
position:absolute;
top:20px;
right:20px;
```

---

# Fixed

Stays fixed on screen.

```css
position:fixed;
```

Uses:
- Chat buttons
- Back to top buttons

---

# Sticky

Acts like relative until scroll position is reached.

```css
position:sticky;
top:0;
```

Uses:
- Navigation bars
- Table headers

---

# Difference Between Relative and Absolute

| Relative | Absolute |
|-----------|-----------|
| Keeps original space | Removed from normal flow |
| Moves from own position | Moves from parent |

---

# Interview Questions

## What is display:block?

Element takes full width and starts on a new line.

---

## Difference Between Inline and Inline-Block?

| Inline | Inline-Block |
|----------|----------|
| Width not applied | Width works |
| Height not applied | Height works |
| Stays in line | Stays in line |

---

# Summary

✅ display:block

✅ display:inline

✅ display:inline-block

✅ position:relative

✅ position:absolute

✅ position:fixed

✅ position:sticky