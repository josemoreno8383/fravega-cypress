import { Before, When, Then , Given } from "@badeball/cypress-cucumber-preprocessor";

    When('ingresa a la categoria: "TV y Audio>TV por marca>Samsung"', () => {

        cy.get('[data-test-id="nav-bar"]').click(); 
        cy.get('[data-test-id="n1-category"]')
        .filter('[href="/e/categorias/tv-audio-video/"]')
        .should('contain.text', 'TV y Audio')
        .trigger('mouseover');
        
        
        cy.get('[data-test-id="n3-category"]')
        .filter('[href="/l/tv-y-video/tv/?marcas=samsung"]')
        .should('contain.text', 'Samsung')
        .invoke('attr', 'href')
        .then((href) => {
            Cypress.env('selectedHref', href);
        });        

        cy.get('[data-test-id="n3-category"]')
        .filter('[href="/l/tv-y-video/tv/?marcas=samsung"]')
        .click();

    })
  


      Then('se muestra el listado de la categoria', () => { 
        //Valido que se liste filtrado por Samsung ya que fue la categoria que seleccione
        const expectedPath = Cypress.env('selectedHref');
        cy.url().should('include', expectedPath);

        cy.get('[data-test-id="result-title"]')
          .should('be.visible')
          .invoke('text')
          .then((text) => {
            expect(text.trim()).to.eq('Samsung');
            cy.get('[data-testid="tag-pill"]')
            .should('be.visible')
            .should('contain.text', 'Samsung');
          });
        });

          
        Then('se muestran filtros comunes a todas las categorias', () => {
          //Valida que por defecto este ordenado por 'Más relevantes'
          cy.get('[data-test-id="order-by-select"]')
          .should('be.visible') 
          .should('contain.text', 'Más relevantes');
          
          cy.contains('Formas de pago').should('exist');
          cy.contains('Precio').should('exist');
          cy.contains('Marca').should('exist');  
          cy.contains('Tipo de entrega').should('exist');
          cy.contains('Descuentos').should('exist');
         })

         Then('se muestran filtros específicos de la categoria "TV"', () => {           
          cy.contains('Tamaño de Pantalla').should('exist');
          cy.contains('Tipo de resolución').should('exist');            
          cy.contains('Sistema Operativo').should('exist');           
          cy.contains('Tecnología').should('exist');
          cy.contains('Inteligencia Artificial').should('exist');
         })