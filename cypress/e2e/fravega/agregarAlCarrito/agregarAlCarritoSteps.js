import { Before, When, Then , Given } from "@badeball/cypress-cucumber-preprocessor";
import landingPage from "../../../support/pageObjects/landingPage"
import productListPage from "../../../support/pageObjects/productListPage"
import productDetailPage from "../../../support/pageObjects/productDetailPage"
import shoppingCartPage from "../../../support/pageObjects/shoppingCartPage"

  const LandingPage = new landingPage();
  const ProductListPage = new productListPage();
  const ProductDetailPage = new productDetailPage();
  const ShoppingCartPage = new shoppingCartPage();

  When('ingresa "Heladera Samsung" en el buscador', () => {     
    LandingPage.getSearcher().type("Heladera Samsung", { delay: 200 });
  });

  When('selecciona el segundo resultado de la sugerencia', () => {         
    LandingPage.getSuggestion().eq(1).click();
  });

  When('ejecuta la busqueda presionado la tecla "Enter"', () => {         
    LandingPage.getSearcher().type("{enter}");   
  });

  When('selecciona el segundo producto listado', () => {     
    ProductListPage.getListOfProducts().eq(1).click();
  });

  When('verifica si hay stock disponible', () => { 
    cy.intercept('GET', '**/api/v1/rest/suggested-items/**').as('suggestedItems'); 
    cy.wait('@suggestedItems', { timeout: 20000 }).its('response.statusCode').should('eq', 200); 
 
    ProductDetailPage.getBuyButton().should('exist').should('include.text', 'Comprar').should('have.css', 'background-color', 'rgb(68, 0, 153)');
    ProductDetailPage.getDeliverySection().should('exist');    
    ProductDetailPage.getProductName().eq(0).then((text)=>{
      const productName = text.text();
      cy.log('Nombre del producto:', productName);
      Cypress.env('selectedProduct', productName);
      })

    ProductDetailPage.getPriceSection()
    .find('span')
    .eq(0)    
    .then((text) => {
      const firstPrice = text.text().replace('$','').trim();
      cy.log('Primer precio encontrado:', firstPrice);
      Cypress.env('firstPrice', firstPrice);      
    })
    
    ProductDetailPage.getPriceSection()
    .find('span')
    .eq(1)    
    .then((text) => {
      const secondPrice = text.text().replace('$','').trim();
      cy.log('Segundo precio encontrado:', secondPrice);
      Cypress.env('secondPrice', secondPrice);      
    })

  });

  When('agrega el producto al carrito', () => {    
   ProductDetailPage.getBuyButton().eq(0).click({ force: true });
   //cy.wait(5000) //revisar
  });
  
  Then('el producto debería aparecer en el carrito de compras', () => {     
    ShoppingCartPage.getSectionName().should('be.visible');
    cy.then(() => {
      ShoppingCartPage.getCompletePurchaseButton().should('be.visible');
      cy.contains(Cypress.env('selectedProduct'), { timeout: 10000 }).should('be.visible');
      cy.contains(Cypress.env('firstPrice'), { timeout: 10000 }).should('be.visible');
      cy.contains(Cypress.env('secondPrice'), { timeout: 10000 }).should('be.visible');
    })
  });



