/// <reference types="cypress" />
// Si en a mismo elemento hay que darle distintos comportamientos, combiene encadenarlos en una misma línea de código. 

describe('Escribir en búsqueda varios strings', ()=>{
    it('escribir y limpiar el campo de búsqueda', ()=>{
        cy.visit('http://automationpractice.com/');
        /* cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('hola');
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('que tal'); */
        cy.get('#search_query_top').clear().type('hola').clear().type("Que tal!");
    })
})
 