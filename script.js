function calculate() {
    const salary = parseFloat(document.getElementById('salary').value);
    const minSalary1994 = 70;
    const prices1994 = {
        arroz: 0.82,
        file: 6.80,
        whisky: 33.50,
        dolar: 1.00,
        cerveja: 1.16,
        vinho: 3.99,
        leite: 0.69,
        pao: 0.10
    };
    const prices2024 = {
        arroz: 4.39,
        file: 69.99,
        whisky: 139.90,
        dolar: 5.30,
        cerveja: 9.90,
        vinho: 18.99,
        leite: 5.21,
        pao: 1.04
    };

    document.getElementById('currentSalary').innerText = salary.toFixed(0);

    document.getElementById('arroz1994').innerText = (salary / prices1994.arroz).toFixed(0);
    document.getElementById('arrozHoje').innerText = (salary / prices2024.arroz).toFixed(0);

    document.getElementById('file1994').innerText = (salary / prices1994.file).toFixed(0);
    document.getElementById('fileHoje').innerText = (salary / prices2024.file).toFixed(0);

    document.getElementById('whisky1994').innerText = (salary / prices1994.whisky).toFixed(0);
    document.getElementById('whiskyHoje').innerText = (salary / prices2024.whisky).toFixed(0);

    document.getElementById('dolar1994').innerText = (salary / prices1994.dolar).toFixed(0);
    document.getElementById('dolarHoje').innerText = (salary / prices2024.dolar).toFixed(0);

    document.getElementById('cerveja1994').innerText = (salary / prices1994.cerveja).toFixed(0);
    document.getElementById('cervejaHoje').innerText = (salary / prices2024.cerveja).toFixed(0);

    document.getElementById('vinho1994').innerText = (salary / prices1994.vinho).toFixed(0);
    document.getElementById('vinhoHoje').innerText = (salary / prices2024.vinho).toFixed(0);

    document.getElementById('leite1994').innerText = (salary / prices1994.leite).toFixed(0);
    document.getElementById('leiteHoje').innerText = (salary / prices2024.leite).toFixed(0);

    document.getElementById('pao1994').innerText = (salary / prices1994.pao).toFixed(0);
    document.getElementById('paoHoje').innerText = (salary / prices2024.pao).toFixed(0);

    document.getElementById('results').style.display = 'block';
}
