# Developer Course Resources

A curated list of resources mentioned during the course to support your development of accessible web applications.

## Automated Testing

- [Axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) - Available on the Visual Studio Marketplace.
- [Axe Dev Tools Extension Links](https://www.deque.com/axe/browser-extensions/) - Download the Axe Dev Tools extension for Chrome, Edge, and Firefox.
- [Axe-core Integrations for Various Testing Frameworks](https://www.deque.com/axe/core-documentation/integrations/) - Documentation on integrating Axe-core with popular testing frameworks.
- [Setting Up Axe-core with Cypress](https://timdeschryver.dev/blog/setting-up-cypress-with-axe-for-accessibility#set-up) - A guide for setting up Axe-core for accessibility testing in Cypress.

## Framework-Specific Accessibility Resources

### React
- [React Accessibility Docs](https://reactjs.org/docs/accessibility.html) - Official React documentation on building accessible React applications.
- [Axe DevTools for React](https://www.deque.com/axe/devtools/axe-devtools-react/) - Tools and guides for integrating Axe with React projects.
- [React ARIA](https://react-spectrum.adobe.com/react-aria/) - A library of React hooks for building accessible design systems.
- [Cauldron](https://cauldron.dequelabs.com/) - A robust, accessible component library for React applications.
- [Testing Library for React](https://testing-library.com/docs/react-testing-library/intro) - Guidance on testing accessibility with React using the Testing Library.

### Vue
- [Vue Accessibility Guide](https://v3.vuejs.org/guide/a11y-basics.html) - Official guide for building accessible applications in Vue.
- [Axe DevTools for Vue](https://www.deque.com/axe/devtools/axe-devtools-vue/) - Tools and guides for integrating Axe with Vue projects.
- [Vue A11y](https://github.com/vue-a11y) - A collection of plugins and tools for improving accessibility in Vue applications.
- [Vue Accessibility Testing with Testing Library](https://testing-library.com/docs/vue-testing-library/intro) - Guidance on testing Vue components for accessibility.

### Angular
- [Angular Accessibility Guide](https://angular.io/guide/accessibility) - Official Angular documentation on accessibility best practices.
- [Axe DevTools for Angular](https://www.deque.com/axe/devtools/axe-devtools-angular/) - Tools and guides for integrating Axe with Angular projects.
- [Angular CDK A11y](https://material.angular.io/cdk/a11y/overview) - Accessibility features from Angular’s Component Dev Kit (CDK) for creating accessible components.
- [Testing Library for Angular](https://testing-library.com/docs/angular-testing-library/intro) - Guidance on testing accessibility with Angular using the Testing Library.
- [Angular Accessibility Webinar](https://accessibility.deque.com/angular-accessibility-webinar) - A detailed webinar focused on accessibility in Angular applications.
- [Angular Component Libraries and Accessibility](https://www.deque.com/blog/angular-component-libraries-and-accessibility/) - A blog post discussing the accessibility of Angular component libraries.
- [Building Accessible Angular Applications](https://youtu.be/Gm_bD1abFXI?si=htoDPW2Ikd7THDMR) - A YouTube video guide on making Angular applications accessible.
- [Common Angular Accessibility Pitfalls](https://youtu.be/d6FJg2MW-lI?si=qzWLe-Sy6PoiPfd7) - A YouTube video on common accessibility challenges in Angular and how to address them.

### General Resources for JavaScript Frameworks
- [Accessible Routing in JavaScript Frameworks](https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/) - A guide to implementing accessible routing in various JavaScript frameworks.

## General Accessibility Reference

- [Smashing Magazine - Accessibility](https://www.smashingmagazine.com/category/accessibility/) - A comprehensive collection of articles, tutorials, and best practices on web accessibility.

## Keyboard

Using native HTML interactive elements ensures built-in keyboard interactions. Your code should respond to the events triggered by these interactions.

For example, pressing Enter or Spacebar on a button (as well as clicking with a mouse or tapping on a touch device) will trigger a click event. Ensure your code reacts appropriately to these events.

- [Design Patterns - ARIA Authoring Practice Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/) - Guidelines for creating accessible patterns using ARIA.
