/// <reference types="cypress" />

describe('Go to diferent section', ()=>{
    it('go to Woman section', ()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('[class=sf-with-ul]').first().click();
    })
})