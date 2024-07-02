function cadastrar(evento) {
    const form = evento.target.parentElement;
    const mensagemSucesso = form.querySelector('.sucesso');

    const nome = form.elements['nome'].value;

    mensagemSucesso.textContent = `Pessoa ${nome} foi cadastrada com sucesso!`;

    form.reset();
}
