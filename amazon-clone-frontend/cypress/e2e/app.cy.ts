describe("App", () => {
  it("checks", () => {
    cy.visit("/");
    cy.findByText("OI");
  });
});
