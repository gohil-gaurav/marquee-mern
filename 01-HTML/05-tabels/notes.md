# HTML Tables

Tables are used to display data in rows and columns.

---

# Table Structure

```html
<table>
    <tr>
        <th>Heading</th>
    </tr>

    <tr>
        <td>Data</td>
    </tr>
</table>
```

---

# Important Tags

## `<table>`

Used to create table.

```html
<table></table>
```

---

## `<tr>`

Table row.

```html
<tr></tr>
```

---

## `<th>`

Table heading.

```html
<th>Name</th>
```

Text inside `<th>` is bold by default.

---

## `<td>`

Table data.

```html
<td>Gaurav</td>
```

---

# Border Attribute

```html
<table border="1">
```

Used to add border to table.

---

# Colspan

Used to merge columns.

```html
<th colspan="2">
```

---

# Rowspan

Used to merge rows.

```html
<td rowspan="2">
```

---

# Example

```html
<table border="1">

    <tr>
        <th>Name</th>
        <th>Course</th>
    </tr>

    <tr>
        <td>Gaurav</td>
        <td>MERN</td>
    </tr>

</table>
```

---

# Summary

Today I learned:
- Table tag
- Table rows
- Table headings
- Table data
- Border attribute
- Colspan
- Rowspan