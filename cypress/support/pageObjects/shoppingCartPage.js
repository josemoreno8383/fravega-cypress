class shoppingCartPage {
    getSectionName() {
      return cy.contains('Mi carrito', { timeout: 10000 });
    }

    getCompletePurchaseButton() {
        return cy.contains('finalizar compra');
      }   
 
  }
  export default shoppingCartPage;
  