document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-exercise');
    const campoA = document.getElementById('valor-x');
    const campoB = document.getElementById('valor-y');
    const mensagem = document.createElement('p');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const valorA = Number(campoA.value);
        const valorB = Number(campoB.value);

        if (valorB > valorA) {
            mensagem.textContent = 'Formulário válido! B é maior que A.';
            mensagem.style.border = '2px solid green';
        } else {
            mensagem.textContent = 'inválido, B precisa ser maior que A.';
            mensagem.style.border = '2px solid red';
        }

        form.appendChild(mensagem);
    });
});
