/// <reference types="cypress" />

describe('Search test cases', ()=>{
    before(()=>{
        cy.log("Ejecutando precondiciones de las pruebas");
    })

    after(()=>{
        cy.log("Ejecutando todas las poscondiciones");
    })

    it('Search dresses', ()=>{
        cy.visit("http://automationpractice.com/");
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
    it('Search hats', ()=>{
        cy.visit("http://automationpractice.com/");
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })
})