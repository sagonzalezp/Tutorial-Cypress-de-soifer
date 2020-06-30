/// <reference types="cypress" />

describe('Search test cases', ()=>{
    it('Search results', ()=>{
        cy.visit("http://automationpractice.com/");
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})