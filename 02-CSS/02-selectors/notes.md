# CSS Selectors

Selectors are used to target HTML elements.

---

# Element Selector

Targets HTML tags directly.

```css
h1 {
    color: blue;
}
```

---

# Class Selector

Targets elements using class name.

```css
.heading {
    color: red;
}
```

HTML Example:

```html
<h1 class="heading">
    Hello
</h1>
```

---

# ID Selector

Targets element using id.

```css
#main-heading {
    background-color: yellow;
}
```

HTML Example:

```html
<h1 id="main-heading">
    Hello
</h1>
```

---

# Universal Selector

Targets all elements.

```css
* {
    font-family: Arial;
}
```

---

# Difference Between Class and ID

| Class | ID |
|---|---|
| Uses `.` | Uses `#` |
| Reusable | Unique |
| Multiple elements | Single element |

---

# Summary

Today I learned:
- Element selector
- Class selector
- ID selector
- Universal selector
- Difference between class and id