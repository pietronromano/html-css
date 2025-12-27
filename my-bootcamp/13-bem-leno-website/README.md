# Leno Website using BEM

SOURCE: Udemy, Modern HTML & CSS, Brad Traversy
- https://www.udemy.com/course/modern-html-css-from-the-beginning/learn/lecture/13285676#overview

## About BEM
SOURCE: Packt, Practical HTML and CSS, Chapter 12: Strategies for Maintaining CSS Code

BEM is a naming convention for classes in HTML and CSS that aims to enhance code readability and maintainability by clearly defining the relationships between components. It breaks down UI components into three main parts:


### Block: 
The standalone entity that is meaningful on its own. It represents a high-level component. For example, a navigation menu (nav), a button (btn), or a form (form) can be a block:
```html
<div class="menu">...</div>
```


### Element 
The  b that performs a specific function. It is semantically tied to its block. It is denoted with a double underscore (__):
```html
<div class="menu">
  <div class="menu__item">...</div>
</div>
```

### Modifier
The flag on a block or element that changes its appearance or behavior. It is denoted with a double hyphen (--):
```html
<div class="menu menu--large">...</div>
<div class="menu">
  <div class="menu__item menu__item--active">...</div>
</div>
```

