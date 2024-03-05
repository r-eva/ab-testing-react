<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is one solution to create A/B Testing in Microfrontend using Vite and Module. The project separated into 2 application, one is called host (main application) and the other called remote (test services).

The goal of this project are to simulate the following:

- Visitor sees only one variation (assigned randomly) when they land on the application page.
- The assigned variation doesn’t change after the application page reloads.
- Track a pageview via the `analytics-api.js` method when a visitor lands on the page via test service.
- Track an event via the `analytics-api.js` method when a visitor clicks on the “Sign up” button via sharing function from test service.
- Every single page view and click shall be tracked.
- Using this app, we want to determine a winning variation by comparing the CTR (click-through rate) of clicks on the “Sign up” button. The CTR of a page is "number of clicks" divided by "number of page views". As a user can only effectively convert aka signup once, the counts for the CTR computation need to be unique per user. So a single user clicking ten times and reloading the page 5 times should still be only counted as one converted user.
- This application will sent 3 kind of data which includes: IP Address, current variant showed to the user with its IP, and Signup status of user with its IP
- Further analytics for this service, what to do with the data sent from the application shall be determined by another services.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Module Federation][Module-federation.com]][Laravel-url]
- [![Vite][Vite.js]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

The following

- npm
  ```sh
  npm install npm@latest -g
  ```
- pnpm
  ```sh
  npm install -g pnpm
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/r-eva/ab-testing-react.git
   ```
2. Install NPM packages in both host and remote directories
   ```sh
   pnpm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To run this project in production environment do the following:

1. Run Build and Serve in remote directory (test services)
   ```sh
   pnpm build && pnpm serve
   ```
2. Run Build and Preview in host directory (main app)
   ```sh
   pnpm build && pnpm preview
   ```

To run this project in development environment of the application, do the following:

1. Run Build and Serve in remote directory (test services)
   ```sh
   pnpm build && pnpm serve
   ```
2. Run Development in host directory (main app)
   ```sh
   pnpm dev
   ```

To see the variant, editing json data of variation in the test Service with Hot Reloading, do the following:

Run Development in remote directory (test services)

```sh
pnpm dev
```

You may observe on how the application track the user data by going into the application console.
In general, the test service is running on port: http://localhost:5001/; while the application run in port: http://localhost:4173/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Regina Eva - hello@reginaeva.de / career@reginaeva.de

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Module-federation]: https://webpack.js.org/site-logo.c0e60df418e04f58.svg
[Webpack-url]: https://webpack.js.org/concepts/module-federation/
[Vitejs.dev]: https://vitejs.dev/
[Vite-url]: https://vitejs.dev/
