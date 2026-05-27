# CSS Introduction

CSS stands for Cascading Style Sheets.

CSS is used to style HTML elements.

---

# Types of CSS

1. Inline CSS
2. Internal CSS
3. External CSS

---

# Inline CSS

CSS written inside HTML tag.

```html
<h1 style="color: blue;">
    Hello
</h1>
```

## Advantages
- Quick styling

## Disadvantages
- Not reusable
- Messy code

---

# Internal CSS

CSS written inside `<style>` tag.

```html
<style>

h1 {
    color: red;
}

</style>
```

---

# External CSS

CSS written in separate `.css` file.

```html
<link rel="stylesheet" href="style.css">
```

Example:

```css
h1 {
    color: green;
}
```

---

# Advantages of External CSS

- Reusable
- Clean code
- Easy maintenance
- Professional approach

---

# Basic Syntax

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: blue;
}
```

---

# Summary

Today I learned:
- What is CSS
- Types of CSS
- Inline CSS
- Internal CSS
- External CSS
- CSS syntax