describe('Example to Demonstrate Cypress Recorder by Deploy Sentinel', () => {

    it('Written with DeploySentinel Recorder', () => {
        // Load "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard');

        // Resize window to 1000 x 660
        cy.viewport(1000, 660);

        // Click on <input> #txtUsername
        cy.get('#txtUsername').click();

        // Fill "Admin" on <input> #txtUsername
        cy.get('#txtUsername').type("Admin");

        // Click on <input> #txtPassword
        cy.get('#txtPassword').click();

        // Fill "admin123" on <input> #txtPassword
        cy.get('#txtPassword').type("admin123");

        // Click on <input> #btnLogin
        cy.get('#btnLogin').click();

        // Click on <a> "Welcome Paul"
        cy.get('#welcome').click();

        // Click on <a> "Logout"
        cy.get('[href="/index.php/auth/logout"]').click();
    });
})