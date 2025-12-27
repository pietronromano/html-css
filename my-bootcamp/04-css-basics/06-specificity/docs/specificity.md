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

---

## The special case of !important
The !important keyword can be appended to the value of any CSS declaration. It sets the specificity of that rule to have a special value of 1, 0, 0, 0, 0, which will give it precedence over any style including inline styles.
As an example of where it can be useful, we might want to create a style rule that is reusable and lets us hide content on a web page. If we apply this class to an element, we want that element to be hidden and not be rendered on the web page. However, consider the following example:
```html
<style>
div.media {
  display: block;
  width: 100%;
  float: left;
}
.hide {
  display: none;
}
</style>
<div class="media hide">
  ...Some content
</div>
```

We might expect our div element to be hidden because the .hide class appears second in the style sheet. However, if we apply the specificity calculations we’ve learned about, we can see that div.media scores 0, 0, 1, 1, and .hide only scores 0, 0, 1, 0. The div.media rule for the display property with a block value will override the none value of the .hide class. We can’t really use this instance of the .hide class as we don’t know whether it will have any effect.
Now, consider the same .hide class but using the !important keyword:
```css
.hide {
  display: none !important;
}
```

Adding the !important keyword will make this .hide class much more reusable and useful as we can pretty much guarantee that it will hide content as we desire.
Note
Using !important should always be a last resort as it takes the rule out of the usual CSS specificity and makes overriding styles more difficult.
