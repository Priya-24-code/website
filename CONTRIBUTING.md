# Contributing to (website repo)

Thank you for considering contributing to (website repo)!
We welcome contributions from everyone and are excited to have you as part of our community. This document outlines how to contribute effectively.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Code of Conduct](#code-of-conduct)
3. [Language Change Limitations](#language-change-limitations)
4. [Theme Rules](#theme-rules)
5. [Page Definition Rules](#page-definition-rules)
6. [Creating a Pull Request](#creating-a-pull-request)
7. [Testing](#testing)
8. [Additional Resources](#additional-resources)

## Getting Started

-   1. **Fork the repository**: Click the "Fork" button on the top right of the repository page.
-   2. **Clone your fork**: Clone the repository to your local machine using:
       ```
        git clone [https://github.com/your-username/your-fork-project-name].git
        cd [your-fork-project-name]
        ```
-   3. **Install dependencies**: Run the following command to install necessary dependencies:
       `npm install`

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our expectations for participants.

## Language Change Limitations

-   **Supported Languages**: This project currently supports only English. Any new contributions should be in English.
-   **Internationalization**: If you have suggestions for supporting additional languages in the future, please raise an issue in the repository.
-   **Text and Comments**: All text, comments, and documentation must be written in English.

## Theme Rules

-   **Color Palette**: Follow the established color palette defined in the `tailwind.config.js` file. Use colors from this palette to maintain consistency throughout the application.
-   **Typography**: Use the designated fonts as specified in the `tailwind.config.js`. Avoid adding new font families unless necessary, and ensure they are properly imported.
-   **Component Styles**: All components should use TailwindCSS only as defined in the project. Avoid using inline styles to ensure styles are manageable and maintainable.

## Page Definition Rules

-   **Page Structure**: Each page should follow the standard structure outlined in `src/pages/`. This includes having a primary layout and using shared components where applicable.
-   **Routing**: Ensure all new pages are added to the routing configuration in `src/App.js`. Use `React Router` to define routes.
-   **Naming Conventions**: Use PascalCase for component names and kebab-case for file names. For example, `UserProfile.js` should be in the `user-profile` folder.

## Creating a Pull Request

1. **Format your code using Prettier before raising PR**: Always as a neccessary part of your development do remember to format using prettier to avoid any format issue or PR's of any such.
   Run `npm run format`
2. **Create a new branch**: Always create a new branch for your feature or fix:
   `git checkout -b my-feature`
3. **Make your changes**: Implement your feature or fix in this branch.
4. **Commit your changes**: Write clear and concise commit messages:
   `git commit -m "Add my feature"`
5. **Push to your fork**: Push your changes to your forked repository:
   `git push origin my-feature`
6. **Open a Pull Request**: Go to the original repository and open a pull request. Provide a clear description of your changes.

## Testing

-   **Running Tests**: To run tests, use the following command:
    `npm test`
-   **Writing Tests**: Ensure that you write tests for any new features or fixes. Follow the testing conventions established in the project.

## Additional Resources

-   [React Documentation](https://react.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
-   [Contributing to Open Source](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

**Thank you for your contributions to (website repo)! if any you did! :), Together, we can make this project even better.**
