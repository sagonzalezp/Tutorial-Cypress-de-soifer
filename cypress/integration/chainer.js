/// <reference types="cypress" />

describe('Escribir en búsqueda varios strings', ()=>{
    it('escribir y limpiar el campo de búsqueda', ()=>{
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('hola');
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('que tal');
    })
})