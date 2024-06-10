const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

// Função para calcular a soma das colunas
function calcularSomaColunas() {
    for (let col = 1; col <= 3; col++) {
        let soma = 0;
        for (let row = 0; row < rows.length - 1; row++) {
            const input = rows[row].querySelectorAll('input')[col - 1];
            soma += parseFloat(input.value) || 0;
        }
        rows[rows.length - 1].querySelectorAll('td')[col].textContent = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

// Função para calcular a soma das linhas
function calcularSomaLinhas() {
    for (let row = 0; row < rows.length - 1; row++) {
        let soma = 0;
        for (let col = 1; col <= 3; col++) {
            const input = rows[row].querySelectorAll('input')[col - 1];
            soma += parseFloat(input.value) || 0;
        }
        rows[row].querySelectorAll('td')[4].textContent = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}

// Função para calcular a soma total das colunas 2, 3 e 4
function somaTotalColunas234() {
    let somaTotal = 0;
    for (let row = 0; row < rows.length - 1; row++) {
        const input2 = rows[row].querySelectorAll('input')[0]; // Coluna 2 (índice 1)
        const input3 = rows[row].querySelectorAll('input')[1]; // Coluna 3 (índice 2)
        const input4 = rows[row].querySelectorAll('input')[2]; // Coluna 4 (índice 3)
        somaTotal += (parseFloat(input2.value) || 0) + (parseFloat(input3.value) || 0) + (parseFloat(input4.value) || 0);
    }
    rows[rows.length - 1].querySelectorAll('td')[4].textContent = somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Chame as funções inicialmente
calcularSomaColunas();
calcularSomaLinhas();
somaTotalColunas234();

// Event listeners para atualizar as somas
rows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            calcularSomaColunas();
            calcularSomaLinhas();
            somaTotalColunas234();
        });
    });
});
