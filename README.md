Background Color Changer - dom

Overview
This JavaScript project creates a simple background color changer that assigns a random color to the webpage each time a button is clicked. Additionally, the generated color code is displayed and is automatically copied to the clipboard.

How It Works
1. Generating a Random Color
When the button is clicked, a random hexadecimal color is generated.

The Math.random() function creates a random number between 0 and 16777215 (equivalent to 0xFFFFFF in hex).

The number is converted to a hexadecimal string using .toString(16).

The resulting string is prefixed with # to form a valid hex color code.

The background color of the webpage changes accordingly, and the color code is updated on the page.

2. Copying the Color Code
The generated color code is displayed inside the #color element.

The color code is automatically copied to the clipboard using navigator.clipboard.writeText() when the button is clicked.

