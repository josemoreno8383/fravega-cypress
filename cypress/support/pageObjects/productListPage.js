class productListPage {
    getListOfProducts() {
      return cy.get('[data-test-id="results-list"] [data-test-id="result-item"]');
    }
 
 
  }
  export default productListPage;
  