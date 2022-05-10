//automate the login process using this test spec

import { paths } from "**/components/App";
import { noArticles } from "**/components/ArticleList";
import { strings } from "**/components/Register";

context("Signup flow", () => {
  it("The happy path should work", () => {
    const random = Math.floor(Math.random() * 100000);
    const user = {
      username: `Tester${random}`,
      email: `user+${random}@realworld.io`,
      password: "mysupersecretpassword"
    };
    // set up AJAX call interception
    cy.intercept("POST", "**/api/users").as("signup-request");

    cy.visit(paths.register);

    // form filling
    cy.findByPlaceholderText(strings.username).type(user.username);
    cy.findByPlaceholderText(strings.email).type(user.email);
    cy.findByPlaceholderText(strings.password).type(user.password);

    // form submit...
    cy.get("form")
      .within(() => cy.findByText(strings.signUp).click());

    // ... and AJAX call waiting
    cy.wait("@signup-request").should(xhr => {
      let payload;

      // request check
      expect(xhr.request.body)
        .to.have.property("user")
        .and.to.be.a("object");
      payload = xhr.request.body.user;
      expect(payload).to.have.property("username", user.username);
      expect(payload).to.have.property("email", user.email);
      expect(payload).to.have.property("password", user.password);

      // status check
      expect(xhr.status).to.equal(200);

      // response check
      expect(xhr.response.body)
        .to.have.property("user")
        .and.to.be.a("object");
      payload = xhr.response.body.user;
      expect(payload).to.have.property("username", user.username.toLowerCase());
      expect(payload).to.have.property("email", user.email);
      expect(payload)
        .to.have.property("token")
        .and.to.be.a("string").and.not.to.be.empty;
    });

    // end of the flow
    cy.findByText(noArticles).should("be.visible");
  });
});