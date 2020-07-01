/// <reference types="cypress" />

describe('Cuentas', ()=>{
    let a = 1;
    it('probar una igualdad', ()=>{
        expect(1==2, 'ambos términos tienen que ser iguales y no lo son').to.equal(true); //expect(prueba a evaluar, 'comentario en caso de error')
    })
    it('probar que no sea una igualdad', ()=>{
        expect(1==2).to.equal(false);
    })
    it('probar una resta', ()=>{
        expect(1-1, 'Aquí se espera un cero').to.equal(0);
    })
    it('probar que una resta no sea correcta', ()=>{
        expect(1-1).to.not.equal(1);
    })

    //otra forma
    it('probar una condición verdadera', ()=>{
        expect(2==2).to.be.true;
    })
    it('probar una condición falsa', ()=>{
        expect(1==2).to.be.false;
    })
    it('probar que una variable dada, existe', ()=>{
        expect(a).to.exist;
    })
    it('Es menor a 10', ()=>{
        expect(a).to.be.lessThan(10);
    })
    it('Es mayo a 10', ()=>{
        expect(25).to.be.greaterThan(10);
    })
})