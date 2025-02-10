class landingPage {
    getSearcher() {
      return cy.get('input[placeholder="Buscar productos"]');
    }
  
    getSuggestion () {
      return cy.get('[data-test-id="autosuggest"] .anchor-items');
    }  
 
  }
  export default landingPage;
  