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

    it('Order by Lowest first', ()=>{
        cy.get('#selectProductSort').select('Price: Lowest first');
    })
    it('Order by Higest Price', ()=>{
        cy.get('#selectProductSort').select('Price: Highest first');
    })
    it('Order by Name: A to Z', ()=>{
        cy.get('#selectProductSort').select('Product Name: A to Z');
    })
    it('Order by Name: Z to A', ()=>{
        cy.get('#selectProductSort').select('Product Name: Z to A');
    })
    it('Order by In stock', ()=>{
        cy.get('#selectProductSort').select('In stock');
    })
    it('Order by Reference: Lowest first', ()=>{
        cy.get('#selectProductSort').select('Reference: Lowest first');
    })
    it('Order by Reference: Lowest first', ()=>{
        cy.get('#selectProductSort').select('Reference: Highest first');
    })
})