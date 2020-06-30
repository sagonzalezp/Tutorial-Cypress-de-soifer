/// <reference types="cypress" />

describe('Pruebas en el sitio Women', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })
    
    it('Large Tops search', ()=>{
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        /*
        Acá se chequean más cosas.
        Y otras más.
        */
       cy.get('#layered_id_attribute_group_3').uncheck();
       cy.get('#layered_category_4').uncheck();
    })
})