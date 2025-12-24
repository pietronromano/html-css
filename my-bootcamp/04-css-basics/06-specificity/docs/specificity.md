# CSS specificity
[Taken from "Practical HTML and CSS - Second Edition", Packt Publishing, 2024]

If we have two CSS declarations that affect the same style property of an element, how do we know which of those declarations will take precedence?


Several factors decide the ranking of a CSS declaration and whether it is the style the browser will apply. The term for these factors is specificity.


A style attribute that adds inline styles to an element has the highest specificity value. An ID selector has a greater specificity value than a class selector and a class selector or attribute selector has a greater specificity value than an element type. We can calculate the specificity value by giving points to each of these specificity values.


The most common way of representing this is as a comma-separated list of integers, where the leftmost integer represents the highest specificity. In other words, 
- the leftmost value is the inline style attribute; 
- next is an ID selector; 
- next is a class selector, pseudo-class, or attribute selector; 
- and the rightmost value is an element.
An inline style would have the `1, 0, 0, 0` value. An ID selector would have the `0, 1, 0, 0` value. A class selector would have the `0, 0, 1, 0` value, and an h1 selector would have the `0, 0, 0, 1` value.
