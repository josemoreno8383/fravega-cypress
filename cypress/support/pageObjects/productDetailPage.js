class productDetailPage {
    getBuyButton() {
      return cy.get('[data-test-id="product-buy-button"]');
    }

    getDeliverySection() {
        return cy.get('[data-test-id="product-delivery"]')
      }

    getProductName() {
        return cy.get('[data-test-id="product-title"]')
      }

    getPriceSection() {
        return cy.get('[data-test-id="price-wrapper"]')
      }
  
      

      

    
 
 
  }
  export default productDetailPage;
  