# a11y Code Exercises

## Description

A collection of accessibility code exercises, each focusing on a specific aspect of web accessibility. These exercises provide hands-on opportunities to practice identifying anti-patterns and implementing accessible solutions.

## Getting Started

To get started with the exercises, follow these steps:

1. Clone this repository: `git clone https://github.com/ScytheLocke/a11ycode.git`
2. Navigate to the project directory: `cd a11y-exercises`
3. Open your project in Visual Studio Code.
4. Install the "Live Server" extension from the Visual Studio Code marketplace.
5. Right-click on the `index.html` file and select "Open with Live Server." This will start a local web server and open the `index.html` file in your default browser.

### Alternative Methods

You can also view the `index.html` file by:
- Clicking directly on `index.html` to open it in your default browser.
- Visiting the [a11y exercises on GitHub Pages](https://scythelocke.github.io/a11ycode/) to access the exercises.

## Exercises

### Document Structure

**Objective**: Enhance the accessibility and usability of a web page by reviewing its structure and implementing improvements.

**Instructions**:

1. **Review the Page Structure**:
   - Open the provided HTML file and explore how the page is organized.
   - Consider how different users, including those using assistive technologies, might navigate through the content.

2. **Identify Areas for Improvement**:
   - Look for elements that could be adjusted to create a better experience for all users.
   - Focus on aspects like how headings, navigation, lists, and links are presented.

3. **Make Adjustments for Accessibility**:
   - Use best practices to adjust the page structure, ensuring a logical flow of content.
   - Make any necessary changes to improve keyboard navigation and screen reader support.

4. **Enhance User Experience**:
   - Consider how to make the content easier to understand and interact with.
   - Update or add descriptive elements to ensure all users can access the information.

**Deliverable**:
- Submit the updated HTML file with the improvements you’ve made.
- Include a brief summary of the changes and how they enhance accessibility.

### Error in Line

**Objective**: Enhance the user experience of a form by implementing accessible inline validation.

**Instructions**:

1. **Review the Form Structure**: 
   - Examine the provided form and identify how errors are displayed and announced to users.

2. **Implement Accessible Inline Validation**:
   - Use techniques like `aria-describedby` and `aria-live` to ensure that error messages are associated with their respective form fields and are announced to users using screen readers.

3. **Test the Form**:
   - Ensure that all error messages are communicated clearly to users as they interact with the form fields, especially when a field is left blank or contains invalid data.

**Deliverable**:
- Submit the updated HTML and JavaScript files with the implemented inline validation.
- Include a brief summary of your changes and how they improve accessibility.


### Errors on Submit

**Objective**: Improve form validation to ensure that users receive clear feedback when submitting a form with errors.

**Instructions**:

1. **Review the Form**: 
   - Examine the provided form and understand how validation messages are currently handled upon form submission.

2. **Implement Accessible Validation**:
   - Ensure that error messages are properly linked to their corresponding form fields using attributes like `aria-describedby`.
   - Make sure validation messages are clear and easily accessible for screen reader users.

3. **Test Form Submission**:
   - Verify that error messages appear only when necessary and that they guide the user to correct any mistakes.
   - Ensure that the error messages are read out by screen readers when a user submits the form with incomplete or incorrect information.

**Deliverable**:
- Submit the updated HTML and JavaScript files with the improved validation.
- Include a brief explanation of the changes made and how they enhance accessibility.


### Form Labeling

**Objective**: Ensure that form controls are properly labeled to provide a clear and accessible experience for all users.

**Instructions**:

1. **Review the Form**: 
   - Examine the provided form and identify how each input, select, and textarea element is labeled.

2. **Implement Proper Labeling**:
   - Use techniques like `for` attributes on `<label>` elements and `aria-labelledby` to ensure that all form controls are clearly associated with their labels.
   - Ensure that legends are used correctly within fieldsets to describe grouped controls.

3. **Test Form Accessibility**:
   - Verify that all form controls are properly announced by screen readers.
   - Ensure that users can easily understand the purpose of each input when navigating the form.

**Deliverable**:
- Submit the updated HTML file with improved labeling for form controls.
- Include a brief explanation of the changes made and how they enhance accessibility.


### Images

**Objective**: Improve the accessibility of images on a web page by providing meaningful descriptions and ensuring all visual elements are appropriately labeled.

**Instructions**:

1. **Review the Images**: 
   - Examine each image and background image on the page. Consider what information they convey and how they contribute to the content.

2. **Add Descriptive Alt Text**:
   - Provide clear and concise `alt` text for each image that describes the content or purpose of the image.
   - For decorative images or background images that don't provide critical information, ensure they are hidden from screen readers using appropriate techniques.

3. **Ensure Accessibility for All Visual Elements**:
   - Use attributes like `aria-label` or `role="img"` for CSS background images when necessary to convey their meaning.
   - Test the page with a screen reader to ensure that all images are announced correctly and that no unnecessary visual content is read aloud.

**Deliverable**:
- Submit the updated HTML file with improved image descriptions.
- Include a brief summary of the changes and how they enhance the accessibility of the page.


### Keyboard

**Objective**: Ensure that a web page is fully navigable using only the keyboard, providing a seamless experience for users who rely on keyboard navigation.

**Instructions**:

1. **Review the Page**: 
   - Explore the web page and identify elements that may hinder keyboard navigation or require improvements to support users who navigate using a keyboard.

2. **Remove Unnecessary Tabindex Values**:
   - Remove any unnecessary values that disrupt the natural tab order.
   - Ensure that interactive elements such as links, buttons, and form controls are focusable and operable via keyboard.

3. **Test Keyboard Navigation**:
   - Navigate through the page using the `Tab` key to ensure that all interactive elements can be accessed in a logical order.
   - Verify that the focus is clearly visible on each element as you navigate.

**Deliverable**:
- Submit the updated HTML file with adjustments for improved keyboard accessibility.
- Include a brief explanation of the changes made and how they enhance the user experience.


### Navigation Menu

**Objective**: Improve the accessibility of a navigation menu, ensuring it is user-friendly for all users, including those using assistive technologies.

**Instructions**:

1. **Review the Navigation Menu**: 
   - Examine the structure and behavior of both the desktop and mobile navigation menus.
   - Identify how interactive elements like dropdowns are controlled and whether they are accessible to screen readers.

2. **Implement ARIA Attributes**:
   - Use `aria-expanded` and `aria-controls` to ensure that the state of expandable sections is communicated clearly to assistive technologies.
   - Update the CSS and JavaScript to hide or show elements properly for both visual users and screen reader users.

3. **Test Accessibility**:
   - Navigate through the menu using only the keyboard to ensure all interactive elements are reachable and usable.
   - Test with a screen reader to verify that the expanded and collapsed states of menus are announced correctly.

**Deliverable**:
- Submit the updated HTML, CSS, and JavaScript files with improvements for accessible navigation.
- Include a brief explanation of the changes made and how they enhance accessibility.


### Skip Links

**Objective**: Improve the accessibility of a webpage by adding a skip link, allowing users to bypass repetitive navigation and go directly to the main content.

**Instructions**:

1. **Add a Skip Link**:
   - Include a skip link at the beginning of the page that allows users to jump directly to the main content.
   - Ensure that the skip link targets an appropriate section using an `id` attribute (e.g., `#main`).

2. **Style the Skip Link**:
   - Make sure the skip link is visible when it receives focus, so keyboard users can easily find and use it.
   - Refer to the CSS file to adjust the visibility of the skip link for better user experience.

3. **Test the Skip Link**:
   - Navigate through the page using the `Tab` key to ensure the skip link appears and functions correctly.
   - Verify that the skip link helps users bypass the navigation and land directly on the main content area.

**Deliverable**:
- Submit the updated HTML file with the implemented skip link.
- Include a brief explanation of the changes and how they enhance accessibility.


### Tables 

**Objective**: Improve the accessibility of tables to ensure that they are properly structured and understandable for all users, including those using screen readers.

**Instructions**:

1. **Review the Table Structure**: 
   - Examine the tables provided and their structure, including captions, headers, and data cells.
   - Identify how the tables organize information and ensure that all content is understandable.

2. **Use Semantic Table Markup**:
   - Add proper table elements such as `<caption>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` to clearly define the structure.
   - Use attributes like `scope` to specify relationships between headers and data cells for better accessibility.

3. **Test the Tables**:
   - Use a screen reader to navigate through the tables and ensure that all headers and data relationships are correctly announced.
   - Verify that the tables provide a logical reading order and that users can easily understand the information.

**Deliverable**:
- Submit the updated HTML file with the improved table structures.
- Include a brief explanation of the changes made and how they enhance accessibility.

### Tabs

**Objective**: Ensure that a tabbed interface is accessible and usable for all users, including those using screen readers or navigating with a keyboard.

**Instructions**:

1. **Review the Tab Structure**:
   - Examine the tabbed interface and identify how each tab and panel is connected.
   - Ensure that the appropriate roles and attributes are applied to enhance accessibility.

2. **Implement ARIA Roles and Attributes**:
   - Use roles such as `tablist`, `tab`, and `tabpanel` to define the tabbed structure.
   - Add `aria-controls`, `aria-labelledby`, and `aria-selected` attributes to ensure proper relationships between tabs and their content panels.

3. **Test the Tabs**:
   - Navigate through the tabs using the `Tab` and arrow keys to ensure all tabs are reachable and that the selected state is announced correctly.
   - Verify that content is updated as expected when switching between tabs, and that only the active panel is visible.

**Deliverable**:
- Submit the updated HTML and JavaScript files with improvements for accessible tabs.
- Include a brief explanation of the changes made and how they enhance accessibility.


