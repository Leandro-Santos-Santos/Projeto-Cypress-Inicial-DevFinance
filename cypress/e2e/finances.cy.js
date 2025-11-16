describe('Transações', ()=> {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/")

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Serviços Gerais")
        cy.get('#amount').type(100)
        cy.get('#date').type("2025-11-16")

        cy.contains('button', 'Salvar').click()

    }); 
});