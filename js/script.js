const usuarios = [{
    nome: "Bruno",
    idade: 20,
    cpf: "123.456.789-00"
},
{
    nome: "Devyd",
    idade: 20,
    cpf: "987.654.321-00"
}, {
    nome: "Mariana",
    idade: 21,
    cpf: "456.789.123-00"
}];

const listausuariosElement = document.createElement('ul');
document.body.appendChild(listausuariosElement);

for (let user of usuarios) {
    inserirUsuarioNaLista(user);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const usuario = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    }
    inserirUsuarioNaLista(usuario);
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = usuario.nome + ' | ' + usuario.idade + ' | ' + usuario.cpf + ' ' ;

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = usuario.nome + ' | ' + usuario.idade + ' | ' + usuario.cpf + ' ' ;
        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listausuariosElement.appendChild(liElement);
}




