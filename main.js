const form = document.getElementById("formulario");
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

    console.log(nome)
    console.log(numero)
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputTelContato = document.getElementById("tel-contato");

    if(numero.includes(inputTelContato.value)) {
        alert(`O número: ${inputTelContato.value} ja existe na sua lista.`);
    } else {
        nome.push(inputNomeContato.value);
        numero.push((inputTelContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
} 

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}