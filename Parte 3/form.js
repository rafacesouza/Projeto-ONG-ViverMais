// Função para validar CPF
function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto >= 10 ? 0 : resto;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto >= 10 ? 0 : resto;
    
    return digitoVerificador1 === parseInt(cpf.charAt(9)) &&
           digitoVerificador2 === parseInt(cpf.charAt(10));
}

// Função para formatar campos
function formataCampo(campo, mascara) {
    let valor = campo.value.replace(/\D/g, '');
    let valorFormatado = '';
    let i = 0;
    
    for (let m of mascara) {
        if (m === '#') {
            if (valor[i]) {
                valorFormatado += valor[i++];
            } else {
                break;
            }
        } else {
            valorFormatado += m;
        }
    }
    
    campo.value = valorFormatado;
}

// Inicialização do formulário
function initForm() {
    const form = document.getElementById('cadastroForm');
    const messages = document.createElement('div');
    messages.id = 'form-messages';
    messages.className = 'form-messages';
    form.appendChild(messages);

    // Formatação automática dos campos
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    cpfInput?.addEventListener('input', () => formataCampo(cpfInput, '###.###.###-##'));
    telefoneInput?.addEventListener('input', () => formataCampo(telefoneInput, '(##) #####-####'));
    cepInput?.addEventListener('input', () => formataCampo(cepInput, '#####-###'));

    // Validação e envio do formulário
    form?.addEventListener('submit', function(e) {
        e.preventDefault();
        messages.innerHTML = '';
        let valid = true;
        let errors = [];

        // Validação do nome
        const nome = form.nome.value.trim();
        if (nome.length < 3) {
            valid = false;
            errors.push('Nome deve ter pelo menos 3 caracteres');
        }

        // Validação do email
        const email = form.email.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            valid = false;
            errors.push('E-mail inválido');
        }

        // Validação do CPF
        const cpf = form.cpf.value.trim();
        if (!validaCPF(cpf)) {
            valid = false;
            errors.push('CPF inválido');
        }

        // Validação do telefone
        const telefone = form.telefone.value.trim();
        if (!/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(telefone)) {
            valid = false;
            errors.push('Telefone inválido');
        }

        // Validação do CEP
        const cep = form.cep.value.trim();
        if (!/^[0-9]{5}-[0-9]{3}$/.test(cep)) {
            valid = false;
            errors.push('CEP inválido');
        }

        // Validação da cidade
        if (!form.cidade.value.trim()) {
            valid = false;
            errors.push('Cidade é obrigatória');
        }

        // Validação do estado
        if (!form.estado.value) {
            valid = false;
            errors.push('Selecione um estado');
        }

        // Validação do perfil
        if (!form.perfil.value) {
            valid = false;
            errors.push('Selecione um perfil');
        }

        if (!valid) {
            messages.innerHTML = `
                <div class="alert alert--error">
                    <p><strong>Por favor, corrija os seguintes erros:</strong></p>
                    <ul>
                        ${errors.map(error => `<li>${error}</li>`).join('')}
                    </ul>
                </div>
            `;
            messages.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return false;
        }

        // Simulação de envio bem-sucedido
        messages.innerHTML = `
            <div class="alert alert--success">
                <p><strong>Cadastro realizado com sucesso!</strong></p>
                <p>Entraremos em contato em breve.</p>
            </div>
        `;
        messages.scrollIntoView({ behavior: 'smooth', block: 'start' });
        form.reset();
        return false;
    });
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initForm);