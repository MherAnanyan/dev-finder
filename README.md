### Objective

Using JavaScript and React, your task is to build a Github User Search Tool.

### Brief

In this challenge, your assignment is to build a Github User Search Tool using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user). We are looking for a solution that is functionally complete, not pixel-perfect. The design system in the designs folder will give you more information about the various colors, fonts, and styles used in this project.

### Tasks

Your users should be able to:

    - Search for GitHub users by their username
    - See relevant user information based on their search

Implement assignment using:

    - Language: **JavaScript**
    - Framework: **React**

### Expected Behaviour

-   On the first load, show the profile information for Octocat (or your own Github username 😎).
-   Display an error message if no user is found when a new search is made.
-   If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
-   If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added. The lorem ipsum text in the designs shows how the bio should look when it is present.
-   If any of the location, website, Twitter, or company properties are empty, show the text "Not Available" with transparency added
-   Website, Twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### Evaluation Criteria

-   **JavaScript** best practices
-   Show us your work through your commit history
-   We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
-   Completeness: Did you complete the features?
-   Correctness: Does the functionality act in sensible, thought-out ways?
-   Maintainability: Is it written in a clean, maintainable way?
-   Testing: Is the system adequately tested?

### CodeSubmit

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Score Digital Team
