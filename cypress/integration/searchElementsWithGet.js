/// <reference types="cypress" />

describe('formas de encontrar un elemento', ()=>{
    it('buscar en el buscador', ()=>{
        cy.visit('http://automationpractice.com/');
        cy.get('.search_query.form-control.ac_input').type('Hola'); //Buscamos por clase
        cy.get('#search_query_top').type('Como te va'); //Buscamos por id
        cy.get('[name=search_query]').type('Me va muy bien'); //Buscamos por la propiedad 'name'
        cy.get('[placeholder="Search"]').clear(); // clear() borra lo que está en el elemento
    })
})