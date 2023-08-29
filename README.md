<h1 align="center">react-lazy-loading</h1>
<div align="center">
  The world of frontend development is constantly vodkin and people create progressively more complex and powerful apps and software every day. Naturally, this has led to massive bundles of code, which can drastically increase the time an app takes to load and negatively impact the user experience. That’s where lazy loading comes in.

  And in this repository you can see one of its implementations using the library <a href="https://www.npmjs.com/package/react-intersection-observer">react-intersection-observer</a>
</div>

Bofore
![](https://i.imgur.com/9iY8ibR.png)

After
![](https://i.imgur.com/PiFNA3E.png)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project architecture](#project-architecture-directory-structure)
- [Install project](#install-project)

## Technologies Used

- Vite
- React
- Typescript
- React-intersection-observer

## Project architecture / Directory Structure

The architecture of the project was carried out according to the [Future Slice Design methodology](https://feature-sliced.design/)

- `src/shared` — reusable functionality, detached from the specifics of the project/business.
- `src/entities` — business entities.
- `src/features` - user interactions, actions that bring business value to the user.
- `src/widgets` - compositional layer to combine entities and features into meaningful blocks.
- `src/pages` - compositional layer to construct full pages from entities, features and widgets.
- `src/app` - app-wide settings, styles and providers.

## Prerequisites

- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Install project

1. Clone repository `git clone https://github.com/ka11den/react-lazy-loading.git`
2. Run `npm i` install project dependencies.
3. Run `npm run dev` to run dev server.