describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/")
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao("Pintura",900)
        cy.get("tbody tr td.description").should("have.text", "Pintura")
    }); 

    it('Cadastrar uma saída', () => {
        criarTransacao("Combustivel", -200)
        cy.get("tbody tr td.description").should("have.text", "Combustivel")
    });

    it('Excluir transação', () => {
        criarTransacao("Pintura",100)
        cy.contains(".description","Pintura")
            .parent()
            .find('img')
            .click()
    });
});

function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-11-16")

        cy.contains('button', 'Salvar').click()

}