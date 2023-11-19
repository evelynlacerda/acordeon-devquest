// Obtém todos os elementos com a classe "arrow-drop"
const arrowDropInputs = document.querySelectorAll('.arrow-drop');

// Adiciona um ouvinte de evento de clique a cada input
arrowDropInputs.forEach((input) => {
    input.addEventListener('change', function() {
        // Desmarca todos os outros inputs
        arrowDropInputs.forEach((otherInput) => {
            if (otherInput !== input) {
                otherInput.checked = false;
            }
        });

        // Obtém o parágrafo associado com o atributo 'for' do input
        const paraId = input.getAttribute('id');
        const para = document.querySelector(`[for="${paraId}"]`);
        
        // Remove a classe "show" de todos os parágrafos
        document.querySelectorAll('.info').forEach((info) => {
            info.classList.remove('show');
        });
        
        // Adiciona a classe "show" ao parágrafo associado ao input clicado
        if (input.checked) {
            para.classList.add('show');
        }
    });
});

