# Premiere Night App

A simple React Native app that helps curators surface the right films for private screening events.

## ⚡ Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Install Pods

   ```bash
   cd ios
   bundle exec pod install
   ```

3. Start the app

   ```bash
   npm run <ios/android>
   ```

## 🧪 Testing

All tests live inside the \_\_tests\_\_ directory at the project root. You can run the test suite with:

```bash
npm run test
```

## 🧪 Linting

The project contains an **ESLint** config which extends the following configurations:

- _eslint:recommended_
- _plugin:react/recommended_
- _@react-native_

Additionally, it uses the following plugins:

- _@typescript-eslint_
- _react_
- _@tanstack/eslint-plugin-query_

You can run the built-in script with:

```bash
npm run lint
```

Furthermore, it's possible to run the **TypeScript compiler**, **ESLint**, and **Jest** tests with a single convenient script:

```bash
npm run build
```

## 🚀 Tech Stack

- **TypeScript** — Provides static typing for safer, more maintainable code.
- **React Navigation** — Manages screen routing and navigation.
- **Zustand** - Handles state management with a simple API with great Typescript support. It also supports persistence through the _persist_ middleware.
- **React Query** — Handles network and data fetching with a React-friendly Hooks-based API.
- **Reanimated / Gesture Handler** — Enables performant animations and gesture-based interactions on the native thread.
- **AsyncStorage** - A simple, asynchronous, unencrypted, persistent, key-value storage system. For the purpose of this project, it works hand in hand with _Zustand_ through the _persist_ middleware.
- **React Native Reanimated Carousel** - A performant carousel for React Native powered by Reanimated.
- **React Native Testing Library** — Facilitates writing UI / components tests that focus on user interactions rather than implementation details.
- **builder-pattern** - Simplifies creating mocks and stubs with the builder pattern. For the purpose of this project, it is meant to be used mainly for simplifying writing tests.
- **Jest** - As the preferred testing framework.

---

## 🧱 Project Structure

The project follows the principles of **Hexagonal Architecture** with a feature-oriented or domain-driven structure for clarity and scalability:

- **app/** - Application or, sometimes also known as, infrastructure layer. This is where dependency injection happens, instantiating and injecting repositories, stores, etc into the _domain/_ functions. App navigation is also defined here. It can also contain _orchestrating use cases_ which call and depend on use cases defined in the _domain/_.
- **components/** — Reusable UI components.
- **screens/** - Screen components. Note that they have been separated from regular, reusable, composable components.
- **core/** - Foundational layer with reusable patterns, factories, helpers and utilities, types and interfaces, all of which are domain or feature-agnostic.
- **domain/** - Contains entities and core business objects, business logic and rules, use cases and stores for domain-specific state, as well as interfaces for the repositories (ports) that the _data/_ layer will implement.
- **data/** — Implements the repository interfaces defined in the _domain/_ layer. It also contains _DTO's_ and the adapters / mappers that transform those into _domain/_ entities.
- **shared/** — Small helpers and pure utility functions used across domains which are not foundational to the app.
- **\_\_tests\_\_** — Unit and integration tests using _Jest_ and _React Native Testing Library_.
- **\_\_mocks\_\_** — Mocks for testing.

## 📱 Features

The app is structured around **features**, each representing a specific domain or user goal. Features are self-contained and depend on **core** and **domain**, but are decoupled from each other for scalability and maintainability.

### 1. Spotlight / Home

- Displays a list of films divided into 3 sections (_Now Playing_, _Popular_, _Top Rated_) in a dedicated tab. Each section contains a carousel that can be swiped horizontally.
- Each carousel item contains:
  - A small thumbnail of the film poster.
  - The film title.
- Tapping on an item redirects users to the _Movie Details_ screen.

### 2. Movie Details

- Shows detailed information about the movie:
  - Header with the film poster
  - Title
  - Overview
  - Release date
  - Genres
- Includes a sticky button that allows users to add to or remove the film from the watchlist.
- The header and content below have a parallax effect when scrolling.

### 3. Watchlist

- Allows users to add to or remove a film from the watchlist.
- There is dedicated tab for the watchlist that renders a list of films that have been added to the watchlist by the user.
- Renders an empty placeholder if no films have been added to the watchlist by the user yet.
- The watchlist is persisted in the _Async Storage_ thanks to _Zustand's persist middleware_.
- Each item displays a _heart_ icon (filled). Tapping on it will remove the movie from the watchlist.
- Additionally, users can also remove a film from the _Movie Details_ screen.
- Finally, for convenience, users can also add to or remove films from the watchlist by tapping on the small _heart_ icon at the top left of each carousel item.

### 4. Core-Driven Features

- Reusable **fetching hook (_useFetchMovies_)** that encapsulates fetching of a list of movies and mapping to a _domain/_ entity in order to follow _DRY_. It's used in **_useNowPlayingMovies_**, **_usePopularMovies_**, and **_useTopRatedMovies_** since the logic behind and response are the same for the 3. The only thing that changes between them is the query / URL from which the lists are fetched.
- Successful **Dependency Injection** (DI) is achieved through the combination of **context providers** (_Context API_), **higher-order functions**, and **pure functions.**
  - _domain/_ use cases are defined as **higher-order functions**. They receive a _repository interface_ or _Zustand store interface_ as argument, and return a **pure function**.
  - A **context provider** rendered at the app root injects the required dependencies into the functions defined in _domain/_. In this way, the functions remain **pure** and easily **testable**. This mechanism allows for a very smooth testing experience, where there is not even the need to mock dependencies via _jest.mock()_. You only need to provide fake / dummy implementations of the repositories and inject them through the context provider in the test files.

## ⚠️ Known Issues or Limitations

### "Undo" capability

---

- I would allow users to "undo" certain actions such as adding to or removing a film from the watchlist. The way I would do this is by displaying a Toast / Snackbar (through a 3rd party library), which a CTA to undo.

### Offline Mode

---

- There is no support for offline mode.

### Error handling

---

- Even though the app renders an error placeholder when _all_ requests in the _Spotlight_ screen fail, the user is not notified when some are successful and some fail, allowing them to know that not all the content will be loaded.
- On app start, a request is triggered to fetch the available genres for films. They are then saved and persisted in its own store. Nonetheless, if such request fails at app start, the user is not notified about this. What will happen is that the genres section in _Movie Details_ will not be displayed. However, the user will not know that something couldn't be loaded.

### Design System

---

- I would explore a more robust and scalable solution. It would be a good opportunity to try out the new library **Unistyles**, developed by _Callstack_ and built in C++ for blazing-fast performance, or something like **Restyle**. The app **does not consider** _dark theme_.

### Localization

---

- I would move hard-coded strings to a _JSON_ and possibly support localization with a couple of different languages. I would also leverage a battle-tested, 3rd party library, such as **react-i18next**.

### Hard-coded strings and colors

---

### Hard-coded API keys

---

- _API key_ for _The Movie Database_ (TMDB) is currently hard-coded in the project. In an ideal setting, this would be injected.

### CI / CD

---

- No pipeline has been built. I would haved like to have a very basic pipeline powered with _GitHub Actions_ that runs basic checks such as the TSC compiler, linting, and tests (with `npm run build`).

### Testing

- E2E tests are missing. The project is only covered by unit and integration tests. Most of the business logic has been tested (_domain/_ and _data/_). However, tests for components / screens are missing. These would be implemented with _React Native Testing Library_.

### Heart Icon

---

- When displaying the small _heart_ icon at the top left of each carousel item, ideally the poster should have a small gradient at the top so that the heart is clearly visible. This would have been done with _react-native-linear-gradient_.
