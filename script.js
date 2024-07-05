function calculate() {
    const salary = document.getElementById('salary').value;
    if (salary === '') {
        alert('Por favor, insira o seu salário');
        return;
    }

    document.getElementById('currentSalary').textContent = salary;

    const arroz1994 = (salary / 0.82).toFixed(2);
    const arrozHoje = (salary / 4.39).toFixed(2);
    document.getElementById('arroz1994').textContent = arroz1994;
    document.getElementById('arrozHoje').textContent = arrozHoje;

    const file1994 = (salary / 6.80).toFixed(2);
    const fileHoje = (salary / 69.99).toFixed(2);
    document.getElementById('file1994').textContent = file1994;
    document.getElementById('fileHoje').textContent = fileHoje;

    const whisky1994 = (salary / 33.50).toFixed(2);
    const whiskyHoje = (salary / 139.90).toFixed(2);
    document.getElementById('whisky1994').textContent = whisky1994;
    document.getElementById('whiskyHoje').textContent = whiskyHoje;

    const dolar1994 = (salary / 1.00).toFixed(2);
    const dolarHoje = (salary / 5.30).toFixed(2);
    document.getElementById('dolar1994').textContent = dolar1994;
    document.getElementById('dolarHoje').textContent = dolarHoje;

    const cerveja1994 = (salary / 1.16).toFixed(2);
    const cervejaHoje = (salary / 9.90).toFixed(2);
    document.getElementById('cerveja1994').textContent = cerveja1994;
    document.getElementById('cervejaHoje').textContent = cervejaHoje;

    const vinho1994 = (salary / 3.99).toFixed(2);
    const vinhoHoje = (salary / 18.99).toFixed(2);
    document.getElementById('vinho1994').textContent = vinho1994;
    document.getElementById('vinhoHoje').textContent = vinhoHoje;

    const leite1994 = (salary / 0.69).toFixed(2);
    const leiteHoje = (salary / 5.21).toFixed(2);
    document.getElementById('leite1994').textContent = leite1994;
    document.getElementById('leiteHoje').textContent = leiteHoje;

    const pao1994 = (salary / 0.10).toFixed(2);
    const paoHoje = (salary / 1.04).toFixed(2);
    document.getElementById('pao1994').textContent = pao1994;
    document.getElementById('paoHoje').textContent = paoHoje;

    document.getElementById('results').style.display = 'block';
}
