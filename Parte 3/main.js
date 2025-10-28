// SPA e manipulação de DOM para ONG Viver Mais

// Templates das páginas
const templates = {
  home: `
    <section class="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">Nossa missão: transformar oportunidades em futuro</h1>
      <p>Atuamos em educação, saúde e inclusão social. Conheça nossos projetos, participe como voluntário ou apoie com doações.</p>
      <div class="cta">
        <a class="btn" href="#projetos" data-link>Ver projetos</a>
        <a class="btn outline" href="#cadastro" data-link>Quero ajudar</a>
      </div>
      <figure>
        <img src="Assets/voluntariado.jpg" alt="Voluntários em ação em projeto comunitário" loading="lazy">
        <figcaption>Voluntários realizando atividades em comunidade.</figcaption>
      </figure>
    </section>
    <section class="about" aria-labelledby="about-title">
      <h2 id="about-title">Quem somos</h2>
      <div class="about-grid">
        <div class="about-card">
          <span class="about-icon">🌟</span>
          <h3>Visão</h3>
          <p>Um futuro com oportunidades para todos.</p>
        </div>
        <div class="about-card">
          <span class="about-icon">🤝</span>
          <h3>Valores</h3>
          <ul class="about-values">
            <li>Transparência</li>
            <li>Respeito</li>
            <li>Impacto mensurável</li>
          </ul>
        </div>
        <div class="about-card">
          <span class="about-icon">👥</span>
          <h3>Equipe</h3>
          <p>Profissionais e voluntários qualificados.</p>
        </div>
      </div>
    </section>
    <section class="highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title">Projetos em destaque</h2>
      <ul class="projects-list" aria-live="polite">
        <li>
          <article>
            <h3>Projeto Alfabetizar</h3>
            <p>Alfabetização de jovens e adultos em comunidades rurais.</p>
            <a href="#projetos" data-link>Saiba mais</a>
          </article>
        </li>
        <li>
          <article>
            <h3>Saúde Comunitária</h3>
            <p>Clínicas móveis e campanhas de prevenção.</p>
            <a href="#projetos" data-link>Saiba mais</a>
          </article>
        </li>
        <li>
          <article>
            <h3>Capacita Jovem</h3>
            <p>Oficinas profissionalizantes e orientação de carreira.</p>
            <a href="#projetos" data-link>Saiba mais</a>
          </article>
        </li>
      </ul>
    </section>
    <section id="contato" class="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contato</h2>
      <address>
        Rua Exemplo, 123 — Centro, Cidade — Estado<br>
        Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a><br>
        E-mail: <a href="mailto:contato@ongvivermais.org">contato@ongvivermais.org</a>
      </address>
    </section>
  `,
  projetos: `
    <h1>Projetos Sociais</h1>
    <section id="alfabetizar">
      <h2>Projeto Alfabetizar</h2>
      <p>Objetivo: reduzir o analfabetismo e aumentar a inclusão escolar.</p>
      <figure>
        <img src="Assets/Alfabetização.jpg" alt="Aula de alfabetização" loading="lazy">
        <figcaption>Voluntários ensinando leitura e escrita.</figcaption>
      </figure>
      <p><strong>Indicadores:</strong> 300 pessoas atendidas / 85% conclusão.</p>
      <a class="btn" href="#cadastro" data-link>Quero ser voluntário</a>
    </section>
    <section id="saude">
      <h2>Saúde Comunitária</h2>
      <p>Clínicas móveis com atendimento preventivo e orientações de saúde.</p>
      <figure>
        <img src="Assets/Clínica móvel.jpg" alt="Atendimento em clínica móvel" loading="lazy">
        <figcaption>Clínica Móvel.</figcaption>
      </figure>
      <p><strong>Impacto:</strong> 4.000 atendimentos por ano.</p>
      <a class="btn outline" href="#doar" data-link>Doar para saúde</a>
    </section>
  `,
  cadastro: `
    <h1>Cadastro de Voluntário / Doador</h1>
    <form id="cadastroForm" class="form" novalidate>
      <fieldset>
        <legend>Informações pessoais</legend>
        <label for="nome">Nome completo *</label>
        <input id="nome" name="nome" type="text" required minlength="3">
        <label for="email">E‑mail *</label>
        <input id="email" name="email" type="email" required>
        <label for="cpf">CPF *</label>
        <input id="cpf" name="cpf" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="000.000.000-00" required>
        <small id="cpfHelp">Formato: 000.000.000-00</small>
        <label for="telefone">Telefone *</label>
        <input id="telefone" name="telefone" type="tel" pattern="\(\d{2}\) \d{4,5}-\d{4}" placeholder="(11) 99999-9999" required>
        <label for="nasc">Data de nascimento</label>
        <input id="nasc" name="nasc" type="date">
      </fieldset>
      <fieldset>
        <legend>Endereço</legend>
        <label for="cep">CEP *</label>
        <input id="cep" name="cep" type="text" pattern="\d{5}-\d{3}" placeholder="00000-000" required>
        <label for="rua">Endereço</label>
        <input id="rua" name="rua" type="text">
        <label for="cidade">Cidade *</label>
        <input id="cidade" name="cidade" type="text" required>
        <label for="estado">Estado *</label>
        <select id="estado" name="estado" required>
          <option value="">Selecione</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
          <option value="ES">ES</option>
          <option value="outro">Outro</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Preferências</legend>
        <label for="perfil">Perfil *</label>
        <select id="perfil" name="perfil" required>
          <option value="">Selecione</option>
          <option value="voluntario">Voluntário</option>
          <option value="doador">Doador / Apoiador</option>
        </select>
        <label>
          <input type="checkbox" id="newsletter" name="newsletter" checked>
          Quero receber newsletter
        </label>
      </fieldset>
      <div class="actions">
        <button class="btn" type="submit">Enviar cadastro</button>
        <button class="btn outline" type="reset">Limpar</button>
      </div>
      <div id="form-messages"></div>
    </form>
  `
};

// SPA: troca de conteúdo principal
function navigate(page) {
  const main = document.querySelector('main');
  if (!main) return;
  main.innerHTML = templates[page] || templates.home;
  window.location.hash = page;
  if (page === 'cadastro') {
    setupFormValidation();
  }
}

// Links SPA
function setupLinks() {
  document.body.addEventListener('click', function(e) {
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href').replace('#', '');
      navigate(href);
    }
  });
}

// Validação de formulário
function setupFormValidation() {
  const form = document.getElementById('cadastroForm');
  const messages = document.getElementById('form-messages');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    messages.innerHTML = '';
    let valid = true;
    let errors = [];
    // Nome
    const nome = form.nome.value.trim();
    if (nome.length < 3) {
      valid = false;
      errors.push('Nome deve ter pelo menos 3 caracteres.');
    }
    // Email
    const email = form.email.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      valid = false;
      errors.push('E-mail inválido.');
    }
    // CPF
    const cpf = form.cpf.value.trim();
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      valid = false;
      errors.push('CPF deve estar no formato 000.000.000-00.');
    }
    // Telefone
    const telefone = form.telefone.value.trim();
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) {
      valid = false;
      errors.push('Telefone deve estar no formato (11) 99999-9999.');
    }
    // CEP
    const cep = form.cep.value.trim();
    if (!/^\d{5}-\d{3}$/.test(cep)) {
      valid = false;
      errors.push('CEP deve estar no formato 00000-000.');
    }
    // Cidade
    if (!form.cidade.value.trim()) {
      valid = false;
      errors.push('Cidade é obrigatória.');
    }
    // Estado
    if (!form.estado.value) {
      valid = false;
      errors.push('Selecione o estado.');
    }
    // Perfil
    if (!form.perfil.value) {
      valid = false;
      errors.push('Selecione o perfil.');
    }
    if (!valid) {
      messages.innerHTML = `<div class="alert alert--error">${errors.join('<br>')}</div>`;
      return;
    }
    messages.innerHTML = `<div class="alert alert--success">Cadastro enviado com sucesso!</div>`;
    form.reset();
  });
}

// Inicialização
function initSPA() {
  setupLinks();
  const hash = window.location.hash.replace('#', '') || 'home';
  navigate(hash);
}

document.addEventListener('DOMContentLoaded', initSPA);
