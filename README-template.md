# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Tech Stack

This exercise uses `react`, `tailwindcss` and `styled-components` delivered by CDN.
This setup is **not** recommended for production, but seems very suitable for small practice projects.
See [styled-components#installation](https://styled-components.com/docs/basics#installation) and expand `Click here to see alternative CDN installation instructions`.

Note: with the upcoming React 19 no further UMD packages will be provided.
Instead it will be possible to load React 19+ as ESM Modules.
[Peter Kellner](https://peterkellner.net/2024/05/10/running-react-19-from-a-cdn-and-using-esm.sh/) wrote an article on how to do that.

### React, ReactDOM, Babel

Include these in the `body` section:

```html
<body>
  <!-- Import React, ReactDOM and Babel -->
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/@babel/standalone/babel.min.js"
  ></script>
</body>
```

The package `@babel/standalone` will automatically compile and execute all script tags with type `text/babel` or `text/jsx`.
So it is important to load the `react` app as `type="text/babel"`:

```html
<body>
  <!-- ... ALL other imports and scripts -->

  <!-- Import your react app component -->
  <script
    type="text/babel"
    src="./App.js"
  ></script>
</body>
```

### Styled Components

Include these in the `body` section below the React, ReactDOM and Babel imports:

```html
<body>
  <!-- ... React, ReactDOM, Babel imports ... -->

  <!-- React-is: necessary for styled components v5 from CDN -->
  <script
    crossorigin
    src="https://unpkg.com/react-is@18.3.1/umd/react-is.production.min.js"
  ></script>

  <!-- Import Styled Components v5: needs react-is -->
  <script
    crossorigin
    src="https://unpkg.com/styled-components/dist/styled-components.min.js"
  ></script>

  <!-- ... react app import ... -->
</body>
```

### Tailwind CSS

Include this snippet in the `head` section:

```html
<head>
  <!-- Import Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

To make IntelliSense work in VS Code, it is important to create an empty `tailwind.config.js` file in the root of the project folder.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**