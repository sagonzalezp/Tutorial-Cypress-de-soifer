/// <reference types="cypress" />

describe('Search test cases', ()=>{
    before(()=>{
        cy.log("Ejecutando precondiciones de las pruebas");
    })

    after(()=>{
        cy.log("Ejecutando todas las poscondiciones");
    })

    beforeEach(()=>{
        cy.visit("http://automationpractice.com/");
    })

    afterEach(()=>{
        cy.log("poniendo datos en su estado original")
    })

    it('Search dresses', ()=>{
        
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
    it('Search hats', ()=>{
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })
})