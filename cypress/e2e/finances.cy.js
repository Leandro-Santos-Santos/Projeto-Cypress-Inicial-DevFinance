describe('Transações', ()=> {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/")

        criarTransacao("Serviços Gerais",100)
        criarTransacao("Pintura",900)
        
    }); 

    it('Cadastrar uma saída', () => {
        cy.visit("https://dev-finance.netlify.app/")

        criarTransacao("Combustivel", -200)
    })

});

function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-11-16")

        cy.contains('button', 'Salvar').click()

}