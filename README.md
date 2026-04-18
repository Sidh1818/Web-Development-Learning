# Web Development Learning Project

A comprehensive collection of HTML, CSS, and JavaScript programs developed as part of the FSWD (Full Stack Web Development) Lab. This project covers fundamental to intermediate web development concepts through hands-on practice.

---

## 🌐 HTML — HyperText Markup Language

HTML is the standard markup language used to create the structure of web pages. It uses tags to define elements like headings, paragraphs, links, images, tables, and forms.

### Advantages of HTML
- Simple and easy to learn
- Supported by all browsers
- Free to use, no special software needed
- Works as the backbone of every web page
- Integrates easily with CSS and JavaScript

### Topics Covered

**Text Formatting**
All major formatting tags were demonstrated — `<b>`, `<strong>`, `<em>`, `<i>`, `<u>`, `<mark>`, `<del>`, `<ins>`, `<sub>`, `<sup>`, `<blockquote>`, `<pre>`. These tags help present text in a meaningful and readable way.

**Tables**
Complex tables were built using `rowspan` and `colspan` to merge cells across rows and columns. Used to display course-wise subject data (MBA, MCM) with internal/external marks and categories.

**Image Maps**
An interactive map of India was created using `<map>` and `<area>` tags with coordinate-based clickable regions for Rajasthan, Uttar Pradesh, and Madhya Pradesh — each linking to Wikipedia.

**Image Hyperlinks**
A 3×4 grid of brand logos (Puma, Reebok, MRF, Sparx, Pogo, Nickelodeon, Airtel, Tata-Indicom, Vodafone, Uninor) was created as clickable image links using `<a>` and `<img>` tags.

**Forms**
Two types of forms were built:
- A basic form with fieldsets covering name, birthdate, gender, address, phone, interests, and favorite color
- A hotel customer profile form with name, address, age, gender (radio), room type (dropdown: A/C, Non-A/C, Deluxe), and payment method (Cash, Card, Coupons) with check-in/check-out date pickers and JavaScript validation

**HTML5 Semantic & Multimedia Tags**
The following HTML5 tags were demonstrated in a "Digital Media Studio" themed page:
- `<header>`, `<footer>`, `<nav>`, `<article>` — semantic structure tags
- `<video>`, `<audio>` — multimedia with multiple format support and fallback
- `<embed>` — embedding external content
- `<datalist>` — autocomplete suggestions for input fields
- `<output>` — displaying dynamic calculation results
- `<bdi>` — bidirectional text isolation for multilingual content

**Nested Lists**
Demonstrated multi-level ordered and unordered lists covering Programming Languages (Python, Java with frameworks/libraries) and Web Development (Frontend/Backend technologies).

---

## 🎨 CSS — Cascading Style Sheets

CSS is used to control the visual presentation of HTML elements — including layout, colors, fonts, spacing, and animations. It separates content from design, making web pages easier to maintain.

### Advantages of CSS
- Saves time — one stylesheet can control multiple pages
- Pages load faster as CSS reduces HTML code
- Easy to maintain and update styles globally
- Provides better control over layout and design
- Supports responsive design for different screen sizes

### Topics Covered

**External Stylesheet**
A separate `.css` file was linked to an HTML page using `<link>`, demonstrating the best practice of separating style from structure.

**Hyperlink Pseudo-classes**
Styled anchor tags using `a:link`, `a:visited`, `a:hover`, and `a:active` to control link appearance at different states.

**Box Shadow & Text Shadow**
Used `box-shadow` to add depth to elements and `text-shadow` to add visual effects to text.

**Border Radius**
Used `border-radius` to create rounded corners on boxes and containers.

**Multi-column Layout**
Created a newspaper-style layout using `column-count` and `column-gap` to split content into multiple columns.

**CSS Transitions**
Implemented smooth hover effects using the `transition` property — a box expands in width on hover over 2 seconds.

**Background Properties**
- `background-attachment: fixed` — creates a parallax-style fixed background
- `background-repeat: repeat-x` — repeats background image horizontally
- `background-position` — controls where the background image starts
- `background-size: cover` — scales image to cover the full page

**CSS Positioning**
All 5 position types were demonstrated:
- `static` — default flow
- `relative` — offset from its normal position
- `absolute` — positioned relative to nearest positioned ancestor
- `fixed` — stays fixed on screen while scrolling
- `sticky` — sticks to top when scrolling past it

**CSS Layers (z-index)**
Used `z-index` with `position: absolute` to stack elements on top of each other in layers.

---

## ⚡ JavaScript

JavaScript is a scripting language that makes web pages interactive and dynamic. It runs directly in the browser and can manipulate HTML and CSS in real time.

### Advantages of JavaScript
- Runs on the client side — no server needed for basic logic
- Makes pages interactive and dynamic
- Supported by all modern browsers
- Can validate forms before data is sent to server
- Works with HTML and CSS seamlessly

### Topics Covered

**DOM Manipulation**
Used `document.getElementById()` and `innerHTML` to dynamically update page content on button click — both inline and via functions.

**Form Validation**
Built a Student Registration Form with `pattern` and `required` attributes for:
- Student ID — exactly 8 digits
- Full Name — letters only, minimum 3 characters
- Email — valid email format
- Mobile — exactly 10 digits

**Feet ↔ Inches Converter**
A real-time converter with two parallel input boxes — entering a value in one automatically updates the other using `oninput` events.

**Country & Capital Quiz**
A quiz that matches user-selected country with capital using a JavaScript object as a key-value data store.

**Simple Calculator**
Performs addition, subtraction, multiplication, and division based on user-selected operation.

**Credit Card Validator**
Validates card type (Visa, MasterCard, American Express) based on starting digits and card length.

**Form Validation with Regex**
Validates name, email, and password using regular expressions (`/pattern/`) before form submission.

**Self-Modifying Page**
A page that automatically changes its message and background color every minute using `setInterval()`.

**Running Clock**
A live digital clock that updates every second using `setInterval()`, `new Date()`, and `getHours()`, `getMinutes()`, `getSeconds()`.

**Birthday Day Finder**
Accepts a birthdate as input and displays the day of the week using `new Date()` and `getDay()` with an alert box.

**Telephone Number Parser**
Parses a phone number in `(555)555-5555` format using the `split()` method to extract the area code and 7-digit number into separate fields.

**String & Number Functions**
- Finds the position of the left-most vowel in a string by looping and checking against `"aeiouAEIOU"`
- Reverses a number's digits using `split("").reverse().join("")`

**Case Toggle**
Converts uppercase letters to lowercase and lowercase to uppercase by comparing each character using `toUpperCase()`.

**Maruti Car Survey**
A survey tool that tracks the count of 4 Maruti car models (Maruti-K10, Zen-Astelo, Wagnor, Maruti-SX4) across 4 metro cities (Delhi, Mumbai, Chennai, Kolkata). Displays a live tabulated report with row-wise, column-wise, and grand totals.

---

## 📚 Key Concepts Summary

| Topic | Key Concepts |
|-------|-------------|
| HTML Structure | DOCTYPE, head, body, semantic tags |
| Text Formatting | b, strong, em, i, u, mark, del, ins, sub, sup |
| Tables | rowspan, colspan, th, td, cellpadding |
| Forms | input types, radio, select, textarea, fieldset |
| Images & Maps | img, alt, usemap, area, coords, shape |
| HTML5 Tags | video, audio, header, footer, nav, article, embed, datalist, bdi, output |
| CSS Selectors | class, id, element, pseudo-class selectors |
| CSS Box Model | border, padding, margin, border-radius |
| CSS Effects | box-shadow, text-shadow, transitions |
| CSS Layout | columns, positioning, z-index, background |
| JS Basics | variables, loops, functions, conditionals |
| JS DOM | getElementById, innerHTML, onclick, oninput |
| JS Date & Time | new Date(), getDay(), getHours(), setInterval() |
| JS Strings | split(), reverse(), join(), indexOf(), toUpperCase() |
| JS Validation | pattern matching, regex, required fields |

---

## 🚀 Getting Started

1. Clone or download the project
2. Open any `.html` file in a browser
3. For CSS files, ensure the linked `.css` file is in the same folder
4. For JS files, ensure `display.js` is in the JS folder

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 📞 References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)

---

*This project is developed as part of FSWD Lab work covering HTML, CSS, and JavaScript fundamentals.*
