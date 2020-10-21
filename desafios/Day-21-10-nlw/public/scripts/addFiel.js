// 1. Procurar o botão.
document.querySelector('#add-time')
// 2. Ao clicar o botão,
.addEventListener('click', duplicateField);

//    executar uma ação de:
function duplicateField() {
    // Copiar a estrutura (qual estrutura?)
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);
    // selecionar os campos da estrutura copiada (quais campos?)
    const fields = newFieldsContainer.querySelectorAll('input');

    //console.log(fields[0]);

    // limpar os campos selecionados!
    fields.forEach(function(field) {
        field.value = '';
    });

    // mostrá-los na página (em qual parte da página devo colocar e o que eu devo colocar?).
    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}

