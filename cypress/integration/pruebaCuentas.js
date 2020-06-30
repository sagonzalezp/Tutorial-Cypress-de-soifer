/// <reference types="cypress" />

describe('Cuentas', ()=>{
    let a = 1 + 1;
    let b = 2;
    it('verificar que se sume bien', ()=>{
        expect(a==b).equal(true);
    })
    it('verificar que se reste bien', ()=>{
        expect(a-b).to.equal(0);
    })
})