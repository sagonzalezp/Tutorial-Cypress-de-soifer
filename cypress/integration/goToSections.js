/// <reference types="cypress" />

describe('Go to diferent section', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php');
    })
    it('go to Woman section', ()=>{
        cy.get('[class=sf-with-ul]').first().click();
    })
    it('Go to Dresses section', ()=>{
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
})