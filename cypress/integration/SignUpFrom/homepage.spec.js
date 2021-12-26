/// <reference types="cypress" />

describe("signupform", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("fill the ✔️ form data", () => {
    cy.get(":nth-child(1) > .form-control").type("admin");
    cy.get(":nth-child(2) > .form-control").type("user");
    cy.get(":nth-child(3) > .form-control").type("admin@gmail.com");
    cy.get(":nth-child(4) > .form-control").type("123456");
    cy.get(":nth-child(5) > .form-control").type("123456");
    cy.get(".btn-primary").click();
    cy.get("#swal2-title").should("have.text", "Good job!");
    context("rest the form", () => {
      cy.get(".swal2-confirm").click();
      cy.get(".btn-secondary").click();
    });
  });
  it("fill the ❌ form data", () => {
    cy.get(":nth-child(1) > .form-control").click();
    cy.get(":nth-child(2) > .form-control").click();
    cy.get(":nth-child(3) > .form-control").click();
    cy.get(":nth-child(4) > .form-control").click();
    cy.get(":nth-child(5) > .form-control").click();
    cy.get(".btn-primary").click();
    cy.get(":nth-child(1) > .error").should("have.text", "Required");
    cy.get(":nth-child(2) > .error").should("have.text", "Required");
    cy.get(":nth-child(3) > .error").should("have.text", "Email is required");
    cy.get(":nth-child(4) > .error").should(
      "have.text",
      "Password is required"
    );
    cy.get(":nth-child(5) > .error").should(
      "have.text",
      "Confirm password is required"
    );
    context("rest the form", () => {
      cy.get(".btn-secondary").click();
    });
  });
});
