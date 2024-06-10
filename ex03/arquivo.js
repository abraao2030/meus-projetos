// Seletor para todas as linhas, exceto a primeira (cabeçalho)
const rows = document.querySelectorAll('tr:not(:first-child)');

// Função para atualizar os totais mensais
function updateTotals() {
    rows.forEach(row => {
        const luzInput = row.querySelector('.luz');
        const aguaInput = row.querySelector('.agua');
        const internetInput = row.querySelector('.internet');
        const somaMesesCell = row.querySelector('.soma-meses');

        const luzValue = parseFloat(luzInput.value) || 0;
        const aguaValue = parseFloat(aguaInput.value) || 0;
        const internetValue = parseFloat(internetInput.value) || 0;
        const somaMeses = luzValue + aguaValue + internetValue;

       // Converter para formato monetário brasileiro (BRL)
       const formattedSomaMeses = somaMeses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

       somaMesesCell.textContent = formattedSomaMeses;
   });
    // Atualize os totais anuais
    updateAnnualTotals();
}

// Função para atualizar os totais anuais
function updateAnnualTotals() {
    const luzValues = Array.from(document.querySelectorAll('.luz')).map(input => parseFloat(input.value) || 0);
    const aguaValues = Array.from(document.querySelectorAll('.agua')).map(input => parseFloat(input.value) || 0);
    const internetValues = Array.from(document.querySelectorAll('.internet')).map(input => parseFloat(input.value) || 0);

    const somaLuz = luzValues.reduce((acc, val) => acc + val, 0);
    const somaAgua = aguaValues.reduce((acc, val) => acc + val, 0);
    const somaInternet = internetValues.reduce((acc, val) => acc + val, 0);
    const somaTotal = somaLuz + somaAgua + somaInternet;

    // Atualize as células correspondentes na última linha
    const lastRow = rows[rows.length - 1];
    const somaLuzCell = lastRow.querySelector('.soma-luz');
    const somaAguaCell = lastRow.querySelector('.soma-agua');
    const somaInternetCell = lastRow.querySelector('.soma-internet');
    const somaTotalCell = lastRow.querySelector('.soma-total');

    somaLuzCell.textContent = somaLuz.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    somaAguaCell.textContent = somaAgua.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    somaInternetCell.textContent = somaInternet.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    somaTotalCell.textContent = somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Chame a função inicialmente
updateAnnualTotals();

// Adicione ouvintes de eventos de entrada para atualizar os totais sempre que houver alterações
rows.forEach(row => {
    const luzInput = row.querySelector('.luz');
    const aguaInput = row.querySelector('.agua');
    const internetInput = row.querySelector('.internet');

    luzInput.addEventListener('input', updateTotals);
    aguaInput.addEventListener('input', updateTotals);
    internetInput.addEventListener('input', updateTotals);
});

