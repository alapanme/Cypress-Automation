import { paths } from "**/components/App";
import { noArticles } from "**/components/ArticleList";
import { strings } from "**/components/Register";

context("Signup flow", () => {
  it("The happy path should work", () => {
    const user = {
      username: "Tester",
      email: "user@realworld.io",
      password: "mysupersecretpassword"
    };

    // set up AJAX call interception
    cy.intercept("POST", "**/api/users", {
      user: {
        username: "Tester",
        email: "user@realworld.io",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2ZhZjc4YTkzNGFiMDRhZjRhMzE0MCIsInVzZXJuYW1lIjoidGVzdGVyNzk1MzYiLCJleHAiOjE1NzM4MzY2ODAsImlhdCI6MTU2ODY0OTA4MH0.zcHxMz2Vx5h-EoiUZlRyUw0z_A_6AIZ0LzQgROvsPqw"
      }
    }).as("signup-request");

    cy.route("GET", "**/api/tags", { tags: [] }).as("tags");
    cy.route("GET", "**/api/articles/feed**", { articles: [], articlesCount: 0 }).as("feed");

    cy.visit(paths.register);

    // form filling
    cy.findByPlaceholderText(strings.username).type(user.username);
    cy.findByPlaceholderText(strings.email).type(user.email);
    cy.findByPlaceholderText(strings.password).type(user.password);

    // form submit...
    cy.get("form")
      .within(() => cy.findByText(strings.signUp).click());

    // ... and AJAX call waiting
    cy.wait("@signup-request")
      .should(xhr =>
        expect(xhr.request.body).deep.equal({
          user: {
            username: user.username,
            email: user.email,
            password: user.password
          }
        })
      )
      .wait(["@tags", "@feed"]);

    // end of the flow
    cy.findByText(noArticles).should("be.visible");
  });
});