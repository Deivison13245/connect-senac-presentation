import os

# 1. GENERATE INDEX.HTML
index_html = '''<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connect Senac — Da Necessidade à Solução | Apresentação Oficial</title>
  <link rel="icon" type="image/png" href="assets/logo.png">
  
  <!-- Fonts: Plus Jakarta Sans, Outfit & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
  
  <!-- FontAwesome 6 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- Canvas Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <link rel="stylesheet" href="styles.css?v=20260911_solid">
</head>
<body>
  <!-- Executive Solid Static Background -->
  <div id="bg-solid-layer" class="bg-solid-layer"></div>

  <!-- Sound Status Toast -->
  <div id="audio-toast" class="audio-toast hidden">
    <i class="fa-solid fa-volume-high"></i>
    <span>Áudio Ativado</span>
  </div>

  <!-- Top Institutional Executive Bar -->
  <header class="top-nav-bar">
    <div class="brand-container" onclick="goToSlide(1)" title="Ir para a Capa (Slide 1)" style="cursor: pointer;">
      <div class="senac-logo-mark">
        <img src="assets/logo.png" alt="Connect Senac Logo" class="brand-img-logo">
      </div>
      <div class="brand-text">
        <span class="brand-title">CONNECT SENAC</span>
        <span class="brand-subtitle">DA NECESSIDADE À SOLUÇÃO • 2ª TURMA ADS</span>
      </div>
    </div>

    <!-- Active Slide Title & Indicator -->
    <div class="current-slide-header-label">
      <span class="slide-badge" id="slide-badge-category">Abertura</span>
      <span class="slide-current-name" id="slide-header-title">Slide 01 — Da Necessidade à Solução</span>
    </div>

    <!-- Top Action Controls -->
    <div class="top-actions">
      <button class="top-btn" id="btn-theme-toggle" title="Alternar Tema Claro / Escuro (T)">
        <i class="fa-solid fa-moon"></i>
      </button>
      <button class="top-btn" id="btn-audio-toggle" title="Efeitos Sonoros (M)">
        <i class="fa-solid fa-volume-high"></i>
      </button>
      <button class="top-btn btn-qr-highlight" id="btn-qr-modal" title="Teste Prático da Plateia (QR Code) (Q)">
        <i class="fa-solid fa-qrcode"></i>
        <span class="btn-label-desktop">QR Code Gigante</span>
      </button>
      <button class="top-btn btn-presenter-highlight" id="btn-presenter-mode" title="Modo Apresentador & Roteiro de Fala (P)">
        <i class="fa-solid fa-chalkboard-user"></i>
        <span class="btn-label-desktop">Modo Apresentador</span>
      </button>
      <button class="top-btn" id="btn-grid-overview" title="Visão Geral dos 8 Slides (G)">
        <i class="fa-solid fa-table-cells"></i>
      </button>
      <button class="top-btn" id="btn-shortcuts" title="Atalhos do Teclado (?)">
        <i class="fa-solid fa-keyboard"></i>
      </button>
      <button class="top-btn" id="btn-fullscreen" title="Tela Cheia (F)">
        <i class="fa-solid fa-expand"></i>
      </button>
    </div>
  </header>

  <!-- Main Presentation Viewport -->
  <main id="presentation-viewport" class="presentation-viewport">
    <div id="slides-deck" class="slides-deck">

      <!-- ==========================================
           SLIDE 01 — ABERTURA INSTITUCIONAL: DA NECESSIDADE À SOLUÇÃO
           ========================================== -->
      <section class="slide slide-dark-hero active" id="slide-1" data-title="Da Necessidade à Solução" data-category="Abertura" data-speaker="Equipe ADS" data-time="2:00">
        <div class="slide-inner hero-inner">
          <div class="hero-brand-top">
            <div class="hero-logo-box">
              <div class="hero-logo-container">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="hero-logo-img">
              </div>
              <div class="hero-brand-texts">
                <span class="hero-brand-title">CONNECT SENAC</span>
                <span class="hero-brand-tag">PROJETO INTEGRADOR • 2ª TURMA DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</span>
              </div>
            </div>
            <div class="hero-version-tag">
              <i class="fa-solid fa-building-columns text-orange"></i> SENAC SANTO ANTÔNIO DE JESUS - BA
            </div>
          </div>

          <div class="hero-center-content">
            <h1 class="hero-main-title">CONNECT SENAC</h1>
            <p class="hero-sub-title">
              Da Necessidade à Solução Tecnológica
            </p>
            <p class="hero-complement-text">
              Transformando uma necessidade real do Senac em uma plataforma eficiente de gestão e experiência para os cursos de beleza.
            </p>
          </div>

          <!-- Solid Presentation Pillars Grid -->
          <div class="hero-pillars-grid">
            <div class="hero-pillar-card">
              <div class="pillar-icon"><i class="fa-solid fa-seedling"></i></div>
              <div class="pillar-info">
                <strong>Origem Prática</strong>
                <span>Nascido na formação técnica e profissional, indo muito além de um exercício acadêmico.</span>
              </div>
            </div>
            <div class="hero-pillar-card">
              <div class="pillar-icon orange"><i class="fa-solid fa-bullseye"></i></div>
              <div class="pillar-info">
                <strong>Desafio Real</strong>
                <span>Melhorar a gestão, o acompanhamento e a disponibilidade de modelos nas aulas práticas.</span>
              </div>
            </div>
            <div class="hero-pillar-card">
              <div class="pillar-icon blue"><i class="fa-solid fa-laptop-code"></i></div>
              <div class="pillar-info">
                <strong>Engenharia & Valor</strong>
                <span>Aplicação web responsiva, acessível e construída sob metodologias de mercado.</span>
              </div>
            </div>
          </div>

          <div class="hero-action-bar">
            <button class="btn-primary-hero" id="btn-start-presentation" onclick="goToSlide(2)">
              <span>Iniciar Apresentação</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <div class="hero-helper-hint">
              <i class="fa-regular fa-keyboard"></i> Use as teclas <strong>[←] [→]</strong> ou pressione <strong>[P]</strong> para o Roteiro do Apresentador
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 02 — O PROBLEMA & O BRIEFING COM A COORDENAÇÃO
           ========================================== -->
      <section class="slide" id="slide-2" data-title="O Problema & O Briefing" data-category="Diagnóstico" data-speaker="Equipe ADS" data-time="3:30">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Diagnóstico Institucional • Briefing com a Coordenação</span>
              </div>
              <h2 class="slide-heading">O Problema: Diagnóstico & Briefing com a Gestão</h2>
              <p class="slide-subheading">"Como podemos tornar mais eficiente a gestão dos cursos de beleza do Senac?"</p>
            </div>
            <div class="slide-indicator-tag alert-theme">
              <i class="fa-solid fa-triangle-exclamation"></i> Dores Identificadas
            </div>
          </div>

          <div class="slide-body">
            <!-- Briefing Context Banner -->
            <div class="briefing-context-card">
              <div class="b-icon-box"><i class="fa-solid fa-handshake text-orange"></i></div>
              <div class="b-text">
                <strong>Encontro Estratégico com a Coordenadora Profa. Zenaide:</strong>
                <span>Recebemos a coordenação para um briefing aprofundado, onde foram compartilhadas as dificuldades enfrentadas diariamente por gestores, professores e alunos.</span>
              </div>
            </div>

            <!-- 4 Solid Crisis Cards Grid -->
            <div class="grid-four-columns">
              
              <!-- Card 1: Modelos & Agendamento -->
              <div class="card-solid-block border-orange">
                <div class="solid-card-header">
                  <div class="solid-icon-badge orange"><i class="fa-solid fa-users-slash"></i></div>
                  <span class="solid-badge-tag">GARGALO CRÍTICO</span>
                </div>
                <h3 class="solid-card-title">Disponibilidade de Modelos</h3>
                <p class="solid-card-desc">Dificuldade em captar e confirmar modelos para as aulas práticas. A falta de modelos impede que os alunos realizem seus procedimentos.</p>
                <div class="solid-footer-chip red"><i class="fa-solid fa-xmark"></i> Frustração e aulas ociosas</div>
              </div>

              <!-- Card 2: Organização de Aulas -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge blue"><i class="fa-solid fa-calendar-xmark"></i></div>
                  <span class="solid-badge-tag">OPERAÇÃO PRÁTICA</span>
                </div>
                <h3 class="solid-card-title">Organização das Aulas</h3>
                <p class="solid-card-desc">Desafios na logística de bancadas, horários de atendimento e pautas diárias das turmas nos laboratórios de estética e beleza.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-triangle-exclamation"></i> Desalinhamento de horários</div>
              </div>

              <!-- Card 3: Acompanhamento & Avaliação -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge purple"><i class="fa-solid fa-chart-line"></i></div>
                  <span class="solid-badge-tag">PEDAGOGIA</span>
                </div>
                <h3 class="solid-card-title">Acompanhamento & Avaliação</h3>
                <p class="solid-card-desc">Dificuldade para registrar a evolução técnica de cada aluno e consolidar notas e critérios formativos com agilidade.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-triangle-exclamation"></i> Dados desincronizados</div>
              </div>

              <!-- Card 4: Informações Dispersas -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge dark"><i class="fa-solid fa-folder-open"></i></div>
                  <span class="solid-badge-tag">GOVERNANÇA</span>
                </div>
                <h3 class="solid-card-title">Informações Dispersas</h3>
                <p class="solid-card-desc">A ausência de uma plataforma centralizada fazia com que processos simples se tornassem excessivamente trabalhosos.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-clock"></i> Retrabalho manual constante</div>
              </div>

            </div>

            <!-- Deep Punchline Banner -->
            <div class="solid-summary-banner">
              <i class="fa-solid fa-quote-left text-orange"></i>
              <span><strong>A Validação com a Gestão:</strong> Realizamos dois momentos fundamentais com a <strong>Profa. Zenaide</strong>: primeiro para entender a dor real; depois para validar o protótipo e garantir a direção certa.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 03 — DA IDEIA PARA O PRODUTO: METODOLOGIAS & ENGENHARIA
           ========================================== -->
      <section class="slide" id="slide-3" data-title="Da Ideia para o Produto" data-category="Construção" data-speaker="Equipe ADS" data-time="3:30">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Metodologias Ágeis • Design Centrado no Usuário • Engenharia</span>
              </div>
              <h2 class="slide-heading">Da Ideia para o Produto: Engenharia & Metodologias</h2>
              <p class="slide-subheading">Aplicação de ferramentas do mercado de tecnologia, divisão de equipes e foco em acessibilidade</p>
            </div>
            <div class="slide-indicator-tag blue-theme">
              <i class="fa-solid fa-gears"></i> Processo de Desenvolvimento
            </div>
          </div>

          <div class="slide-body">
            <div class="grid-three-columns">
              
              <!-- Coluna 1: Estudo de Usuários & Personas -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge orange"><i class="fa-solid fa-users-viewfinder"></i></div>
                  <span class="solid-badge-tag">UX / UI DESIGN</span>
                </div>
                <h3 class="solid-card-title">Estudo de Usuários & Personas</h3>
                <p class="solid-card-desc">Uma frente da equipe mergulhou no perfil de quem utiliza a aplicação para desenhar jornadas intuitivas e fluidas:</p>
                <ul class="solid-bullets-list">
                  <li><strong>Modelos</strong>: Facilidade no agendamento pelo celular.</li>
                  <li><strong>Alunos</strong>: Visualização clara da pauta do dia.</li>
                  <li><strong>Professores & Gestão</strong>: Controle e validação rápida.</li>
                </ul>
              </div>

              <!-- Coluna 2: Estrutura & Responsividade -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge blue"><i class="fa-solid fa-mobile-screen-button"></i></div>
                  <span class="solid-badge-tag">ENGENHARIA WEB</span>
                </div>
                <h3 class="solid-card-title">Acessibilidade & Responsividade</h3>
                <p class="solid-card-desc">A solução precisava ser acessível para qualquer pessoa sem barreiras técnicas:</p>
                <ul class="solid-bullets-list">
                  <li><strong>Web Responsiva</strong>: Funciona em smartphones, tablets e computadores.</li>
                  <li><strong>Sem Instalação</strong>: Acesso instantâneo via navegador web.</li>
                  <li><strong>Integração Completa</strong>: Banco seguro e APIs estruturadas.</li>
                </ul>
              </div>

              <!-- Coluna 3: Marcas Formativas & Mentoria -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge green"><i class="fa-solid fa-chalkboard-user"></i></div>
                  <span class="solid-badge-tag">MARCAS FORMATIVAS</span>
                </div>
                <h3 class="solid-card-title">Aprendizado & Mentoria Docente</h3>
                <p class="solid-card-desc">Meses de trabalho, testes, ajustes e diversas versões construídas em equipe:</p>
                <ul class="solid-bullets-list">
                  <li>Desenvolvimento de competências técnicas e de colaboração.</li>
                  <li>Comunicação, organização e resolução de problemas reais.</li>
                  <li>Acompanhamento próximo do <strong>Prof. Deyson Santana</strong>.</li>
                </ul>
              </div>

            </div>

            <!-- Solid Footer Banner -->
            <div class="solid-summary-banner">
              <i class="fa-solid fa-check-double text-green"></i>
              <span><strong>Marcas Formativas do Senac na Prática:</strong> Não apenas escrevemos código; exercitamos a autonomia, a ética, a visão crítica e a colaboração profissional.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 04 — O RESULTADO: A PLATAFORMA CONNECT SENAC
           ========================================== -->
      <section class="slide" id="slide-4" data-title="O Resultado: Connect Senac" data-category="A Solução" data-speaker="Equipe ADS" data-time="3:30">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">A Plataforma Final • Validação com a Cliente</span>
              </div>
              <h2 class="slide-heading">O Resultado: A Plataforma Connect Senac</h2>
              <p class="slide-subheading">Centralizando, organizando e facilitando a gestão dos cursos de beleza</p>
            </div>
            <div class="slide-indicator-tag green-theme">
              <i class="fa-solid fa-circle-check"></i> Solução Validada
            </div>
          </div>

          <div class="slide-body">
            <div class="grid-three-columns">
              
              <!-- Bloco 1: Ouvindo Quem Vive o Problema -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge blue"><i class="fa-solid fa-ear-listen"></i></div>
                  <span class="solid-badge-tag">ESCUTA ATIVA</span>
                </div>
                <h3 class="solid-card-title">Construído com Quem Vive o Problema</h3>
                <p class="solid-card-desc">Não criamos com base em suposições teóricas. Ouvimos gestores, docentes e alunos, validamos ideias e fizemos ajustes contínuos até atingir a aderência total.</p>
                <div class="solid-footer-chip green"><i class="fa-solid fa-check"></i> Foco na necessidade real</div>
              </div>

              <!-- Bloco 2: Feedback da Coordenação -->
              <div class="card-solid-block border-orange">
                <div class="solid-card-header">
                  <div class="solid-icon-badge orange"><i class="fa-solid fa-thumbs-up"></i></div>
                  <span class="solid-badge-tag">APROVAÇÃO DA CLIENTE</span>
                </div>
                <h3 class="solid-card-title">Recepção Extremamente Positiva</h3>
                <p class="solid-card-desc">Ao apresentar o resultado à nossa cliente (Coordenação), os destaques foram o visual intuitivo e fluido e o poder de organização e controle das informações.</p>
                <div class="solid-footer-chip orange"><i class="fa-solid fa-star"></i> Alto impacto na gestão</div>
              </div>

              <!-- Bloco 3: Integração dos 4 Públicos -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge purple"><i class="fa-solid fa-network-wired"></i></div>
                  <span class="solid-badge-tag">INTEGRAÇÃO TOTAL</span>
                </div>
                <h3 class="solid-card-title">Conexão entre Todos os Envolvidos</h3>
                <p class="solid-card-desc">O modelo agenda no autoatendimento, o aluno prepara a bancada com previsibilidade, o professor valida a pauta e a coordenação governa a unidade.</p>
                <div class="solid-footer-chip blue"><i class="fa-solid fa-bolt"></i> Zero atrito operacional</div>
              </div>

            </div>

            <!-- Transition to Roleplay Banner -->
            <div class="solid-summary-banner transition-encenacao">
              <i class="fa-solid fa-masks-theater text-orange"></i>
              <span><strong>Transição para a Demonstração:</strong> "Mas, antes de mostrar a solução técnica em detalhes, queremos mostrar o problema de uma forma diferente: através de uma breve encenação."</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 05 — [MOMENTO DA ENCENAÇÃO] ANTES E DEPOIS
           ========================================== -->
      <section class="slide" id="slide-5" data-title="Antes e Depois: Encenação" data-category="Transformação" data-speaker="Equipe ADS" data-time="3:30">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Dramatização Prática • Impacto Real na Rotina</span>
              </div>
              <h2 class="slide-heading">[MOMENTO DA ENCENAÇÃO] Antes e Depois</h2>
              <p class="slide-subheading">O contraste direto entre o modelo tradicional e a transformação com o Connect Senac</p>
            </div>
            <div class="slide-indicator-tag orange-theme">
              <i class="fa-solid fa-masks-theater"></i> Encenação ao Vivo
            </div>
          </div>

          <div class="slide-body">
            <!-- Solid Split Comparison -->
            <div class="solid-comparison-grid">
              
              <!-- Card ANTES (Modelo Tradicional) -->
              <div class="solid-comparison-card before-solid">
                <div class="solid-comp-header danger">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <span>NO MODELO TRADICIONAL (ANTES)</span>
                </div>
                <div class="solid-comp-body">
                  <ul class="solid-danger-list">
                    <li><i class="fa-solid fa-xmark"></i> <strong>Baixa disponibilidade de modelos</strong> para as aulas práticas.</li>
                    <li><i class="fa-solid fa-xmark"></i> <strong>Frustração dos alunos</strong> e perda direta de oportunidades de exercitar a profissão.</li>
                    <li><i class="fa-solid fa-xmark"></i> <strong>Bancadas vazias</strong> e materiais preparados sem utilização.</li>
                    <li><i class="fa-solid fa-xmark"></i> <strong>Dificuldade para professores e coordenadores</strong> organizarem e acompanharem dados.</li>
                    <li><i class="fa-solid fa-xmark"></i> <strong>Comunicação fragmentada</strong> por mensagens e anotações dispersas.</li>
                  </ul>
                  <div class="comp-status-chip danger">
                    <i class="fa-solid fa-ban"></i> Incerteza e atrito diário na unidade
                  </div>
                </div>
              </div>

              <!-- Card DEPOIS (Com Connect Senac) -->
              <div class="solid-comparison-card after-solid">
                <div class="solid-comp-header success">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>COM O CONNECT SENAC (DEPOIS)</span>
                </div>
                <div class="solid-comp-body">
                  <ul class="solid-success-list">
                    <li><i class="fa-solid fa-check"></i> <strong>Informação centralizada</strong> e acessível em qualquer dispositivo.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Processos mais organizados</strong> e agendamento digital garantido.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Comunicação facilitada</strong> entre a comunidade externa e a instituição.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Visão clara em tempo real</strong> para acompanhamento pedagógico.</li>
                    <li><i class="fa-solid fa-check"></i> <strong>Tomada de decisões fundamentada</strong> em dados e pautas organizadas.</li>
                  </ul>
                  <div class="comp-status-chip success">
                    <i class="fa-solid fa-bolt"></i> Previsibilidade, organização e excelência
                  </div>
                </div>
              </div>

            </div>

            <!-- Synthesis Callout -->
            <div class="solid-summary-banner">
              <i class="fa-solid fa-lightbulb text-orange"></i>
              <span><strong>A Proposta do Connect Senac:</strong> Transformar a frustração em aprendizado pleno e a burocracia em controle transparente.</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 06 — MAIS DO QUE UMA PLATAFORMA: ESCALABILIDADE & FUTURO
           ========================================== -->
      <section class="slide" id="slide-6" data-title="Mais do que uma Plataforma" data-category="Escalabilidade" data-speaker="Equipe ADS" data-time="3:00">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Visão de Futuro • Expansão Institucional</span>
              </div>
              <h2 class="slide-heading">Mais do que uma Plataforma: Pensada para Crescer</h2>
              <p class="slide-subheading">Uma solução com arquitetura e proposta preparadas para expandir por todo o ecossistema Senac</p>
            </div>
            <div class="slide-indicator-tag blue-theme">
              <i class="fa-solid fa-rocket"></i> Potencial de Escala
            </div>
          </div>

          <div class="slide-body">
            <div class="grid-three-columns">
              
              <!-- Card 1: Nascido na Beleza, Pronto para Outros Cursos -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge orange"><i class="fa-solid fa-layer-group"></i></div>
                  <span class="solid-badge-tag">MULTICURSO</span>
                </div>
                <h3 class="solid-card-title">Expansão Multicurso</h3>
                <p class="solid-card-desc">Embora tenha nascido nos cursos de beleza, a proposta pode ser facilmente adaptada para Gastronomia, Saúde, TI, Moda e qualquer curso prático com atendimento à comunidade.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-check text-green"></i> Alta adaptabilidade pedagógica</div>
              </div>

              <!-- Card 2: Arquitetura Modular & Reutilizável -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge blue"><i class="fa-solid fa-cubes"></i></div>
                  <span class="solid-badge-tag">ARQUITETURA MODULAR</span>
                </div>
                <h3 class="solid-card-title">Estrutura Pronta para Crescer</h3>
                <p class="solid-card-desc">A arquitetura da solução desacopla as regras de negócio e a modelagem do banco relacional, permitindo criar novas categorias de cursos com rapidez e robustez técnica.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-check text-green"></i> Escalabilidade de software</div>
              </div>

              <!-- Card 3: Solução Corporativa Senac -->
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge green"><i class="fa-solid fa-diagram-project"></i></div>
                  <span class="solid-badge-tag">REDE SENAC</span>
                </div>
                <h3 class="solid-card-title">Expansão em Rede</h3>
                <p class="solid-card-desc">Começamos resolvendo um problema específico na nossa unidade, mas construímos um ativo tecnológico com potencial real para ser implantado em outras unidades do Senac.</p>
                <div class="solid-footer-chip"><i class="fa-solid fa-check text-green"></i> Impacto institucional amplo</div>
              </div>

            </div>

            <!-- Scale Punchline -->
            <div class="solid-summary-banner">
              <i class="fa-solid fa-chart-line text-blue"></i>
              <span><strong>Da Especificidade à Escalabilidade:</strong> "Começamos resolvendo um problema específico, mas construímos algo com potencial para resolver muitos outros."</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 07 — 📱 DEMONSTRAÇÃO PRÁTICA & TESTE AO VIVO DA PLATEIA (QR CODE GIGANTE)
           ========================================== -->
      <section class="slide" id="slide-7" data-title="📱 Teste ao Vivo da Plateia" data-category="Demonstração Prática" data-speaker="Equipe ADS" data-time="4:00">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Demonstração ao Vivo • Aplicação Online em Produção</span>
              </div>
              <h2 class="slide-heading">📱 Demonstração Prática: Experimente Agora</h2>
              <p class="slide-subheading">Aponte a câmera do seu smartphone para o QR Code abaixo e acesse a aplicação em tempo real</p>
            </div>
            <div class="slide-indicator-tag orange-theme">
              <i class="fa-solid fa-mobile-screen"></i> Teste Prático
            </div>
          </div>

          <div class="slide-body">
            <div class="giant-audience-container">
              
              <!-- Left: MASSIVE QR CODE CARD -->
              <div class="giant-qr-card" onclick="openModal('modal-qr-zoom')" title="Clique para Tela Cheia do QR Code (Tecla Q)">
                <div class="giant-qr-badge">
                  <span class="live-dot-pulse"></span>
                  <strong>APLICAÇÃO ONLINE • ESCANEIE AGORA</strong>
                </div>

                <div class="giant-qr-wrapper">
                  <img src="assets/qrcode_app.png" alt="QR Code Connect Senac" class="giant-qr-image" id="giant-qr-img">
                </div>

                <button class="btn-giant-qr-zoom" onclick="openModal('modal-qr-zoom')">
                  <i class="fa-solid fa-magnifying-glass-plus"></i> Ampliar QR Code no Telão (Tecla Q)
                </button>
              </div>

              <!-- Right: INSTRUCTIONS & TEST CREDENTIALS -->
              <div class="giant-instructions-card">
                <div class="giant-header-call">
                  <i class="fa-solid fa-bullhorn text-orange"></i>
                  <span>CONVITE PRÁTICO PARA A BANCA E PLATEIA</span>
                </div>
                <h3 class="giant-main-title">"Vivenciem a experiência que criamos diretamente nos seus celulares!"</h3>
                
                <!-- 3 Steps for Audience -->
                <div class="giant-steps-grid">
                  <div class="g-step-box">
                    <div class="g-step-num">1</div>
                    <div class="g-step-content">
                      <strong>Abra a Câmera do Celular</strong>
                      <span>Aponte para o QR Code gigante na tela (iOS ou Android).</span>
                    </div>
                  </div>
                  <div class="g-step-box">
                    <div class="g-step-num">2</div>
                    <div class="g-step-content">
                      <strong>Entre com os Dados de Teste</strong>
                      <span>Use a conta de teste oficial exibida abaixo.</span>
                    </div>
                  </div>
                  <div class="g-step-box">
                    <div class="g-step-num">3</div>
                    <div class="g-step-content">
                      <strong>Navegue e Experimente</strong>
                      <span>Veja os cursos, realize um agendamento ou consulte a pauta.</span>
                    </div>
                  </div>
                </div>

                <!-- HUGE CREDENTIALS BOX -->
                <div class="giant-credentials-box">
                  <div class="g-cred-title">
                    <i class="fa-solid fa-key text-orange"></i>
                    <span>DADOS DE ACESSO PARA O TESTE DA BANCA:</span>
                  </div>
                  <div class="g-cred-items">
                    <div class="g-cred-chip">
                      <span class="g-label"><i class="fa-regular fa-envelope"></i> Login:</span>
                      <span class="g-value">teste@gmail.com</span>
                    </div>
                    <div class="g-cred-chip">
                      <span class="g-label"><i class="fa-solid fa-lock"></i> Senha:</span>
                      <span class="g-value">123456</span>
                    </div>
                  </div>
                </div>

                <div class="g-footer-note">
                  <i class="fa-solid fa-shield-check text-green"></i>
                  <span>Aplicação 100% responsiva (mobile-first), rápida e sem necessidade de baixar app.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- ==========================================
           SLIDE 08 — FECHAMENTO, GRATIDÃO & ABERTURA PARA PERGUNTAS
           ========================================== -->
      <section class="slide" id="slide-8" data-title="Fechamento & Perguntas" data-category="Conclusão" data-speaker="Equipe ADS" data-time="2:30">
        <div class="slide-inner">
          <div class="slide-header">
            <div class="slide-title-group">
              <div class="slide-brand-tag-row">
                <img src="assets/logo.png" alt="Connect Senac Logo" class="slide-brand-logo-img">
                <span class="slide-brand-tag-text">Considerações Finais • Defesa do Projeto Integrador</span>
              </div>
              <h2 class="slide-heading">Connect Senac: Da Necessidade à Solução</h2>
              <p class="slide-subheading">Uma solução criada a partir de um problema real, pensada para transformar a aprendizagem</p>
            </div>
            <div class="slide-indicator-tag green-theme">
              <i class="fa-solid fa-trophy"></i> Conclusão & Defesa
            </div>
          </div>

          <div class="slide-body">
            <!-- 3 Solid Synthesis Cards -->
            <div class="grid-three-columns">
              
              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge blue"><i class="fa-solid fa-user-check"></i></div>
                  <span class="solid-badge-tag">COMUNIDADE</span>
                </div>
                <h3 class="solid-card-title">Acesso & Dignidade</h3>
                <p class="solid-card-desc">A comunidade participa com transparência, agendamento facilitado e respeito ao seu tempo.</p>
              </div>

              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge orange"><i class="fa-solid fa-user-graduate"></i></div>
                  <span class="solid-badge-tag">ALUNOS</span>
                </div>
                <h3 class="solid-card-title">Aprendizado Pleno</h3>
                <p class="solid-card-desc">Bancadas ocupadas, garantia de prática técnica e consolidação das competências profissionais.</p>
              </div>

              <div class="card-solid-block">
                <div class="solid-card-header">
                  <div class="solid-icon-badge green"><i class="fa-solid fa-building-columns"></i></div>
                  <span class="solid-badge-tag">GESTÃO</span>
                </div>
                <h3 class="solid-card-title">Governança & Controle</h3>
                <p class="solid-card-desc">Processos organizados, pautas em tempo real e decisões estratégicas orientadas a dados.</p>
              </div>

            </div>

            <!-- Special Gratitude Tribute Card -->
            <div class="solid-tribute-card">
              <div class="tribute-badge-solid">
                <i class="fa-solid fa-award text-orange"></i> AGRADECIMENTO ESPECIAL AO CORPO DOCENTE & COORDENAÇÃO
              </div>
              <p class="tribute-text-solid">
                Nossos mais sinceros agradecimentos à coordenadora <strong>Profa. Zenaide</strong>, ao professor e mentor <strong>Deyson Santana</strong> e a todos os instrutores do <strong>SENAC Santo Antônio de Jesus</strong>, cujo apoio técnico e incentivo foram fundamentais para a concepção e sucesso do <strong>Connect Senac</strong>.
              </p>
            </div>

            <!-- Grand Finale Solid Action Banner -->
            <div class="grand-finale-solid-banner">
              <div class="finale-texts-solid">
                <strong>Muito obrigado a todos os professores, banca examinadora e presentes!</strong>
                <span>Passamos agora para a demonstração detalhada e ficamos à disposição para as perguntas.</span>
              </div>
              <div class="finale-actions-solid">
                <button class="btn-confetti-final" onclick="triggerGrandFinaleConfetti()">
                  <i class="fa-solid fa-champagne-glasses"></i> Celebrar Defesa!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>

  <!-- Bottom Floating Navigation Dock (8 Slides) -->
  <footer class="bottom-dock">
    <div class="dock-container">
      
      <!-- Slide Counter and Progress -->
      <div class="dock-slide-info">
        <span class="dock-counter-text" id="dock-counter">01 / 08</span>
        <div class="dock-progress-track">
          <div class="dock-progress-fill" id="dock-progress-fill" style="width: 12.5%;"></div>
        </div>
      </div>

      <!-- Main Navigation Buttons -->
      <div class="dock-nav-controls">
        <button class="dock-btn" id="btn-prev-slide" title="Slide Anterior (Seta Esquerda / A)">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- Slide Dots Navigation (8 Slides) -->
        <div class="dock-dots-list" id="dock-dots-list">
          <button class="dot-btn active" data-slide="1" title="Slide 01: Da Necessidade à Solução"></button>
          <button class="dot-btn" data-slide="2" title="Slide 02: O Problema & O Briefing"></button>
          <button class="dot-btn" data-slide="3" title="Slide 03: Da Ideia para o Produto"></button>
          <button class="dot-btn" data-slide="4" title="Slide 04: O Resultado"></button>
          <button class="dot-btn" data-slide="5" title="Slide 05: Antes e Depois (Encenação)"></button>
          <button class="dot-btn" data-slide="6" title="Slide 06: Mais do que uma Plataforma"></button>
          <button class="dot-btn" data-slide="7" title="Slide 07: Demonstração & QR Code"></button>
          <button class="dot-btn" data-slide="8" title="Slide 08: Fechamento & Perguntas"></button>
        </div>

        <button class="dock-btn" id="btn-next-slide" title="Próximo Slide (Seta Direita / Espaço / D)">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <!-- Quick Action Toggles -->
      <div class="dock-right-actions">
        <button class="dock-pill-btn" id="btn-autoplay-toggle" title="Autoplay / Apresentar (A)">
          <i class="fa-solid fa-play"></i> <span>Apresentar</span>
        </button>
      </div>

    </div>
  </footer>

  <!-- ==========================================
       MODAL: MODO APRESENTADOR & POWER SCRIPT (TECLA 'P')
       ========================================== -->
  <div class="modal-backdrop hidden" id="modal-presenter">
    <div class="modal-window presenter-window">
      <div class="modal-header">
        <div class="modal-title-box">
          <i class="fa-solid fa-chalkboard-user text-orange"></i>
          <h3>Modo Apresentador • Roteiro de Fala Oficial</h3>
        </div>
        <div class="presenter-header-timer">
          <i class="fa-solid fa-stopwatch"></i>
          <span id="presenter-timer">00:00:00</span>
          <span class="timer-target-tag">Alvo: 25–27 min</span>
          <button id="btn-timer-toggle" class="btn-timer-action" title="Pausar / Retomar Timer"><i class="fa-solid fa-play"></i></button>
          <button id="btn-timer-reset" class="btn-timer-action" title="Zerar Timer"><i class="fa-solid fa-rotate-left"></i></button>
        </div>
        <button class="modal-close-btn" id="btn-close-presenter-modal" onclick="closeAllModals()"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <!-- Presenter Modal Body -->
      <div class="presenter-body">
        
        <!-- Left Column: Meta, Timing & Info -->
        <div class="presenter-col-meta">
          <div class="p-col-title">Slide Atual</div>
          <div class="presenter-speaker-box">
            <div class="p-speaker-badge" id="presenter-speaker-badge">Equipe ADS</div>
            <div class="p-slide-title-large" id="presenter-slide-title-large">Slide 01 — Da Necessidade à Solução</div>
            <div class="p-time-target-badge"><i class="fa-solid fa-clock"></i> Tempo Estimado: <span id="presenter-slide-time">2:00 min</span></div>
          </div>

          <div class="presenter-quick-nav">
            <button class="btn-presenter-nav" onclick="prevSlide()"><i class="fa-solid fa-arrow-left"></i> Anterior</button>
            <button class="btn-presenter-nav btn-accent" onclick="nextSlide()">Próximo <i class="fa-solid fa-arrow-right"></i></button>
          </div>

          <div class="presenter-rules-card">
            <h5><i class="fa-solid fa-bullseye text-orange"></i> Dica de Apresentação:</h5>
            <div class="objection-tip">
              <strong>Postura & Clareza:</strong>
              <p>Mantenha contato visual com a banca, fale com segurança sobre o briefing da Profa. Zenaide e enfatize como a solução resolve o problema real da falta de modelos.</p>
            </div>
          </div>
        </div>

        <!-- Center Column: Power Script Fala Verbatim -->
        <div class="presenter-col-script">
          <div class="p-col-title">
            <span>Roteiro de Fala Completo (Verbatim)</span>
            <span class="badge-verbatim">Fala Oficial</span>
          </div>
          <div class="presenter-script-content" id="presenter-script-text">
            <!-- Loaded dynamically from SlideData in app.js -->
          </div>
        </div>

        <!-- Right Column: Key Quotes & Next Slide -->
        <div class="presenter-col-preview">
          <div class="p-col-title">Frase de Destaque</div>
          <div class="presenter-quote-box" id="presenter-quote-box">
            "Connect Senac: Da necessidade à solução."
          </div>

          <div class="p-col-title" style="margin-top: 14px;">Próximo Slide:</div>
          <div class="presenter-next-box" id="presenter-next-box">
            <strong>Slide 02 — O Problema & O Briefing</strong>
            <span>Tempo: 3:30 min</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ==========================================
       MODAL: QR CODE ZOOM GIGANTE (TECLA 'Q')
       ========================================== -->
  <div class="modal-backdrop hidden" id="modal-qr-zoom">
    <div class="modal-window qr-zoom-window">
      <div class="modal-header">
        <div class="modal-title-box">
          <i class="fa-solid fa-qrcode text-orange"></i>
          <h3>QR Code em Alta Resolução • Teste da Banca</h3>
        </div>
        <button class="modal-close-btn" id="btn-close-qr-modal" onclick="closeAllModals()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="qr-zoom-body">
        <div class="qr-zoom-card-giant">
          <img src="assets/qrcode_app.png" alt="QR Code Ampliado" class="qr-zoom-image-giant">
          <div class="qr-zoom-hint-solid">
            <i class="fa-solid fa-camera text-orange"></i> Aponte a câmera do seu smartphone para testar em tempo real
          </div>
          <div class="modal-test-credentials-giant">
            <span class="m-cred-badge-giant"><i class="fa-solid fa-key"></i> Credenciais Oficiais para o Teste da Banca:</span>
            <div class="m-cred-row">
              <span class="m-cred-pill"><i class="fa-regular fa-envelope"></i> Login: <strong>teste@gmail.com</strong></span>
              <span class="m-cred-pill"><i class="fa-solid fa-lock"></i> Senha: <strong>123456</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ==========================================
       MODAL: GRID OVERVIEW (TECLA 'G')
       ========================================== -->
  <div class="modal-backdrop hidden" id="modal-grid-overview">
    <div class="modal-window grid-overview-window">
      <div class="modal-header">
        <div class="modal-title-box">
          <i class="fa-solid fa-table-cells text-orange"></i>
          <h3>Visão Geral dos 8 Slides</h3>
        </div>
        <button class="modal-close-btn" id="btn-close-grid-modal" onclick="closeAllModals()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="slides-thumbnail-grid" id="slides-thumbnail-grid">
        <!-- Rendered dynamically by JS -->
      </div>
    </div>
  </div>

  <!-- ==========================================
       MODAL: ATALHOS DE TECLADO (TECLA '?')
       ========================================== -->
  <div class="modal-backdrop hidden" id="modal-shortcuts">
    <div class="modal-window shortcuts-window">
      <div class="modal-header">
        <div class="modal-title-box">
          <i class="fa-solid fa-keyboard text-orange"></i>
          <h3>Atalhos do Teclado</h3>
        </div>
        <button class="modal-close-btn" id="btn-close-shortcuts-modal" onclick="closeAllModals()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="shortcuts-grid">
        <div class="shortcut-item"><kbd>→</kbd> ou <kbd>Espaço</kbd> <span>Avançar para o próximo slide</span></div>
        <div class="shortcut-item"><kbd>←</kbd> <span>Voltar ao slide anterior</span></div>
        <div class="shortcut-item"><kbd>Q</kbd> <span>Abrir / Ampliar QR Code Gigante de Teste</span></div>
        <div class="shortcut-item"><kbd>P</kbd> <span>Modo Apresentador com Roteiro de Fala Completo</span></div>
        <div class="shortcut-item"><kbd>G</kbd> <span>Visão Geral dos 8 Slides em Grade</span></div>
        <div class="shortcut-item"><kbd>F</kbd> <span>Alternar Tela Cheia (Telão 3m x 2m)</span></div>
        <div class="shortcut-item"><kbd>T</kbd> <span>Alternar Tema Claro / Escuro</span></div>
        <div class="shortcut-item"><kbd>M</kbd> <span>Mutar / Ativar Efeitos Sonoros</span></div>
        <div class="shortcut-item"><kbd>A</kbd> <span>Apresentação Automática (Autoplay)</span></div>
        <div class="shortcut-item"><kbd>1-8</kbd> <span>Ir diretamente para o slide numérico</span></div>
        <div class="shortcut-item"><kbd>Esc</kbd> <span>Fechar qualquer janela/modal</span></div>
      </div>
    </div>
  </div>

  <script src="app.js?v=20260911_solid"></script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)
print('index.html written!')

# 2. GENERATE APP.JS
app_js = '''/* =========================================================
   CONNECT SENAC — INTERACTIVE PRESENTATION ENGINE (8 SLIDES)
   Executive Solid Mode, Sound FX, Presenter Mode & Verbatim Script
   ========================================================= */

const PresentationState = {
  currentSlide: 1,
  totalSlides: 8,
  isAutoplay: false,
  autoplayInterval: null,
  autoplayDelay: 10000,
  isMuted: false,
  currentTheme: 'light',
  timerSeconds: 0,
  timerInterval: null,
  timerIsRunning: false
};

/* =========================================================
   POWER SCRIPT & SLIDES METADATA (8 SLIDES)
   Roteiro Oficial: Connect Senac — Da Necessidade à Solução
   2ª Turma de ADS • Senac Santo Antônio de Jesus
   ========================================================= */
const SlideData = [
  {
    id: 1,
    title: "Slide 01 — Da Necessidade à Solução",
    heading: "Connect Senac — Da necessidade à solução.",
    category: "Abertura",
    speaker: "Equipe ADS",
    targetTime: "2:00 min",
    keyQuote: "Nós fomos desafiados a transformar uma necessidade real do Senac em uma solução tecnológica capaz de melhorar a gestão e a experiência dos cursos de beleza.",
    script: `
      <div class=\"script-section-tag\">FALA DE ABERTURA — EQUIPE ADS</div>
      <p>\"Bom dia a todos!</p>
      <p>Hoje, a <strong>segunda turma de ADS</strong> terá a oportunidade de apresentar um projeto que nasceu dentro da nossa formação técnica e profissional, mas que foi muito além de um exercício acadêmico.</p>
      <p>Nós fomos desafiados a transformar uma necessidade real do Senac em uma solução tecnológica capaz de melhorar a gestão e a experiência dos cursos de beleza.</p>
      <p>E foi assim que nasceu o <strong>Connect Senac</strong>.\"</p>
    `
  },
  {
    id: 2,
    title: "Slide 02 — O Problema & O Briefing",
    heading: "O Problema — Briefing com a Coordenadora Profa. Zenaide e Diagnóstico Real.",
    category: "Diagnóstico",
    speaker: "Equipe ADS",
    targetTime: "3:30 min",
    keyQuote: "Havia desafios no agendamento dos serviços, na organização das aulas práticas, no acompanhamento da evolução dos alunos, nas avaliações e, principalmente, na disponibilidade de modelos.",
    script: `
      <div class=\"script-section-tag\">O PROBLEMA & O BRIEFING</div>
      <p>\"Tudo começou com uma pergunta simples:</p>
      <div class=\"script-highlight-quote\">
        'Como podemos tornar mais eficiente a gestão dos cursos de beleza do Senac?'
      </div>
      <p>Para entender isso de verdade, recebemos a coordenadora, <strong>professora Zenaide</strong>, para um briefing. Nesse encontro, ela compartilhou as dificuldades enfrentadas diariamente por gestores, professores e alunos.</p>
      <p>Havia desafios no agendamento dos serviços, na organização das aulas práticas, no acompanhamento da evolução dos alunos, nas avaliações e, principalmente, <strong>na disponibilidade de modelos</strong> para que os alunos pudessem realizar suas atividades práticas.</p>
      <p>Na prática, a ausência de uma plataforma centralizada fazia com que informações importantes ficassem dispersas e processos que poderiam ser simples se tornassem trabalhosos.</p>
      <p>Tivemos <strong>dois momentos fundamentais com a coordenadora Zenaide</strong>: primeiro, para entender o problema e as necessidades reais dos usuários; depois, para apresentar um protótipo e validar se estávamos caminhando na direção certa. E essa validação foi essencial.\"</p>
    `
  },
  {
    id: 3,
    title: "Slide 03 — Da Ideia para o Produto",
    heading: "Da Ideia para o Produto — Metodologias, Personas, Engenharia Web & Mentoria.",
    category: "Construção",
    speaker: "Equipe ADS",
    targetTime: "3:30 min",
    keyQuote: "Dividimos as responsabilidades entre as equipes e aplicamos ferramentas e metodologias utilizadas atualmente no mercado de tecnologia.",
    script: `
      <div class=\"script-section-tag\">DA IDEIA PARA O PRODUTO</div>
      <p>\"Depois de compreender o problema, começamos a construir a solução.</p>
      <p>Dividimos as responsabilidades entre as equipes e aplicamos, durante todo o projeto, ferramentas e metodologias utilizadas atualmente no mercado de tecnologia.</p>
      <p>Enquanto uma equipe estudava os usuários e construía as <strong>personas</strong> para criar uma experiência mais intuitiva, outra trabalhava na estrutura da aplicação, suas funcionalidades e integrações.</p>
      <p>Também pensamos em algo fundamental: <strong>A solução precisava ser acessível.</strong></p>
      <p>Por isso, desenvolvemos uma <strong>aplicação responsiva</strong>, capaz de funcionar em diferentes dispositivos e disponibilizada pela web para os diferentes públicos envolvidos: modelos, alunos, professores e coordenação.</p>
      <p>Foram meses de trabalho, colaboração, testes, ajustes e muitas versões. E isso também fez parte do nosso aprendizado.</p>
      <p>Durante essa jornada, contamos com diversos instrutores e desenvolvemos não apenas conhecimentos técnicos, mas também competências de trabalho em equipe, organização, comunicação e resolução de problemas, sempre alinhados às <strong>marcas formativas do Senac</strong>.</p>
      <p>Um dos professores que esteve mais presente nesse processo foi o <strong>professor Deyson Santana</strong>, que acompanhou de perto nossa evolução.\"</p>
    `
  },
  {
    id: 4,
    title: "Slide 04 — O Resultado: Connect Senac",
    heading: "O Resultado — Plataforma Validada e Feedback Positivo da Cliente.",
    category: "A Solução",
    speaker: "Equipe ADS",
    targetTime: "3:30 min",
    keyQuote: "Não criamos a solução apenas com base no que imaginávamos que seria necessário. Nós ouvimos quem vive o problema.",
    script: `
      <div class=\"script-section-tag\">O RESULTADO</div>
      <p>\"Depois de todo esse processo, chegamos ao <strong>Connect Senac</strong>.</p>
      <p>Uma plataforma criada para centralizar, organizar e facilitar a gestão dos cursos de beleza, conectando as pessoas que fazem essa experiência acontecer.</p>
      <p>E o mais importante: <strong>não criamos a solução apenas com base no que imaginávamos que seria necessário. Nós ouvimos quem vive o problema.</strong></p>
      <p>Validamos nossas ideias, recebemos feedback, fizemos ajustes e evoluímos o produto até chegar a uma solução que atendesse às necessidades apresentadas.</p>
      <p>Quando apresentamos o resultado à nossa cliente, a recepção foi extremamente positiva. O destaque não ficou apenas para o visual intuitivo e fluido da plataforma, mas também para as funcionalidades de acompanhamento, organização e controle das informações.</p>
      <div class=\"script-section-tag\">TRANSIÇÃO PARA A ENCENAÇÃO</div>
      <p><em>'Mas, antes de mostrar a solução, queremos mostrar o problema de uma forma diferente.'</em></p>
    `
  },
  {
    id: 5,
    title: "Slide 05 — Antes e Depois (Encenação)",
    heading: "Antes e Depois — [MOMENTO DA ENCENAÇÃO] O Contraste na Gestão e no Ensino.",
    category: "Transformação",
    speaker: "Equipe ADS",
    targetTime: "3:30 min",
    keyQuote: "Imagine ter informação centralizada, processos mais organizados, comunicação facilitada e uma visão mais clara de tudo o que está acontecendo.",
    script: `
      <div class=\"script-section-tag\">ANTES E DEPOIS & ENCENAÇÃO</div>
      <p>\"Vamos fazer uma breve encenação para mostrar como era a experiência antes do Connect Senac e como ela pode ser depois da implantação da plataforma.</p>
      <div class=\"script-highlight-quote\">
        <strong>[MOMENTO DA ENCENAÇÃO AO VIVO]</strong>
      </div>
      <p>Como podemos perceber, no modelo tradicional, existem dificuldades que impactam diretamente todos os envolvidos.</p>
      <p>A falta de uma plataforma que conecte o Senac aos modelos pode resultar em <strong>baixa disponibilidade de modelos para as aulas</strong>.</p>
      <p>Para os alunos, isso pode significar frustração e perda de oportunidades de colocar em prática aquilo que estão aprendendo.</p>
      <p>Para professores e coordenadores, significa mais dificuldade para organizar, acompanhar e tomar decisões com base nos dados.</p>
      <p>Agora imagine transformar todo esse processo. Imagine ter informação centralizada, processos mais organizados, comunicação facilitada e uma visão mais clara de tudo o que está acontecendo. É isso que o Connect Senac propõe.\"</p>
    `
  },
  {
    id: 6,
    title: "Slide 06 — Mais do que uma Plataforma",
    heading: "Mais do que uma Plataforma — Escalabilidade e Expansão no Ecossistema Senac.",
    category: "Escalabilidade",
    speaker: "Equipe ADS",
    targetTime: "3:00 min",
    keyQuote: "Começamos resolvendo um problema específico, mas construímos algo com potencial para resolver muitos outros.",
    script: `
      <div class=\"script-section-tag\">MAIS DO QUE UMA PLATAFORMA</div>
      <p>\"O Connect Senac torna o processo mais simples, acessível e organizado.</p>
      <p>Mas existe algo ainda mais importante: <strong>Ele foi pensado para crescer.</strong></p>
      <p>Embora tenha nascido a partir de uma necessidade dos cursos de beleza, a arquitetura e a proposta da solução permitem enxergar possibilidades muito maiores.</p>
      <p>O Connect Senac pode ser <strong>adaptado e expandido para outros cursos e outros processos educacionais</strong> que tenham necessidades semelhantes, tornando-se uma solução escalável dentro do Senac.</p>
      <div class=\"script-highlight-quote\">
        'Ou seja, começamos resolvendo um problema específico, mas construímos algo com potencial para resolver muitos outros.'
      </div>
    `
  },
  {
    id: 7,
    title: "Slide 07 — Demonstração & QR Code",
    heading: "📱 Demonstração Prática — QR Code Gigante e Teste ao Vivo da Plateia.",
    category: "Demonstração Prática",
    speaker: "Equipe ADS",
    targetTime: "4:00 min",
    keyQuote: "Basta apontar a câmera do celular para o QR Code que está na tela e acessar a aplicação. Vocês poderão vivenciar a experiência que criamos.",
    script: `
      <div class=\"script-section-tag\">AGORA, VAMOS MOSTRAR NA PRÁTICA</div>
      <p>\"Tudo isso pode parecer interessante na teoria. Mas queremos que vocês vejam funcionando.</p>
      <p>Agora, nossa equipe fará uma breve demonstração do Connect Senac, com a aplicação rodando online e mostrando algumas das principais funcionalidades desenvolvidas.</p>
      <p><strong>E vocês também poderão experimentar.</strong></p>
      <p>Basta apontar a câmera do celular para o <strong>QR Code que está na tela</strong> e acessar a aplicação.</p>
      <p>Assim, vocês não apenas vão ouvir sobre a solução. Vocês poderão vivenciar a experiência que criamos.</p>
      <p><strong>Dados de Acesso para o Teste da Banca:</strong><br>
      • <strong>Login:</strong> <code>teste@gmail.com</code><br>
      • <strong>Senha:</strong> <code>123456</code></p>
    `
  },
  {
    id: 8,
    title: "Slide 08 — Fechamento & Perguntas",
    heading: "Connect Senac: Da Necessidade à Solução — Fechamento, Gratidão e Abertura para Perguntas.",
    category: "Conclusão",
    speaker: "Equipe ADS",
    targetTime: "2:30 min",
    keyQuote: "Esse é o Connect Senac: uma solução criada a partir de um problema real, construída por nós e pensada para transformar a experiência de gestão e aprendizagem.",
    script: `
      <div class=\"script-section-tag\">FECHAMENTO & GRATIDÃO</div>
      <p>\"Esse é o Connect Senac:</p>
      <div class=\"script-highlight-quote\">
        'Uma solução criada a partir de um problema real, construída por nós e pensada para transformar a experiência de gestão e aprendizagem.'
      </div>
      <p>Nossos mais profundos agradecimentos à coordenadora <strong>Profa. Zenaide</strong>, ao <strong>Prof. Deyson Santana</strong>, aos instrutores e mentores da unidade que nos apoiaram nessa trajetória formativa.</p>
      <p>Muito obrigado a todos!</p>
      <p>Agora, vamos à demonstração. E, ao final, ficamos à disposição para as perguntas.\"</p>
    `
  }
];

/* =========================================================
   AUDIO FX SYNTHESIZER (WEB AUDIO API)
   ========================================================= */
const Sound = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playWhoosh() {
    if (PresentationState.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {}
  },
  playClick() {
    if (PresentationState.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(550, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  },
  playCelebration() {
    if (PresentationState.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.07, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.25);
      });
    } catch (e) {}
  }
};

/* =========================================================
   NAVIGATION & SLIDES ENGINE (8 SLIDES)
   ========================================================= */

function goToSlide(targetSlide) {
  if (targetSlide < 1 || targetSlide > PresentationState.totalSlides) return;
  if (targetSlide === PresentationState.currentSlide) return;

  Sound.playWhoosh();

  const prevSlideEl = document.getElementById(`slide-${PresentationState.currentSlide}`);
  const nextSlideEl = document.getElementById(`slide-${targetSlide}`);

  if (prevSlideEl) {
    prevSlideEl.classList.remove('active');
    prevSlideEl.classList.add('prev');
    setTimeout(() => prevSlideEl.classList.remove('prev'), 400);
  }

  if (nextSlideEl) {
    nextSlideEl.scrollTop = 0;
    nextSlideEl.classList.add('active');
  }

  PresentationState.currentSlide = targetSlide;
  updateUIState();
}

function nextSlide() {
  if (PresentationState.currentSlide < PresentationState.totalSlides) {
    goToSlide(PresentationState.currentSlide + 1);
  } else {
    goToSlide(1);
  }
}

function prevSlide() {
  if (PresentationState.currentSlide > 1) {
    goToSlide(PresentationState.currentSlide - 1);
  } else {
    goToSlide(PresentationState.totalSlides);
  }
}

function updateUIState() {
  const current = PresentationState.currentSlide;
  const total = PresentationState.totalSlides;
  const slideInfo = SlideData[current - 1] || SlideData[0];

  // Top header labels
  const headerTitle = document.getElementById('slide-header-title');
  const badgeCategory = document.getElementById('slide-badge-category');

  if (headerTitle) headerTitle.textContent = slideInfo.title;
  if (badgeCategory) badgeCategory.textContent = slideInfo.category;

  // Bottom dock counter & progress
  const counterEl = document.getElementById('dock-counter');
  const progressFill = document.getElementById('dock-progress-fill');

  if (counterEl) {
    const padCurrent = current < 10 ? `0${current}` : current;
    const padTotal = total < 10 ? `0${total}` : total;
    counterEl.textContent = `${padCurrent} / ${padTotal}`;
  }

  if (progressFill) {
    const percentage = (current / total) * 100;
    progressFill.style.width = `${percentage}%`;
  }

  // Dots navigation
  const dots = document.querySelectorAll('.dot-btn');
  dots.forEach((dot, index) => {
    if (index + 1 === current) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Modals sync
  updatePresenterModal();
  updateGridOverviewHighlight();
}

function triggerGrandFinaleConfetti() {
  Sound.playCelebration();
  if (typeof confetti === 'function') {
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

/* =========================================================
   PRESENTER MODE & STOPWATCH TIMER
   ========================================================= */

function updatePresenterModal() {
  const current = PresentationState.currentSlide;
  const total = PresentationState.totalSlides;
  const slideInfo = SlideData[current - 1] || SlideData[0];
  const nextSlideInfo = current < total ? SlideData[current] : SlideData[0];

  const speakerBadge = document.getElementById('presenter-speaker-badge');
  const slideTitleLarge = document.getElementById('presenter-slide-title-large');
  const slideTime = document.getElementById('presenter-slide-time');
  const scriptText = document.getElementById('presenter-script-text');
  const quoteBox = document.getElementById('presenter-quote-box');
  const nextBox = document.getElementById('presenter-next-box');

  if (speakerBadge) speakerBadge.textContent = slideInfo.speaker;
  if (slideTitleLarge) slideTitleLarge.textContent = slideInfo.title;
  if (slideTime) slideTime.textContent = slideInfo.targetTime;
  if (scriptText) scriptText.innerHTML = slideInfo.script;
  if (quoteBox) quoteBox.innerHTML = `"${slideInfo.keyQuote}"`;

  if (nextBox) {
    nextBox.innerHTML = `
      <strong>${nextSlideInfo.title}</strong>
      <span>Tempo Estimado: ${nextSlideInfo.targetTime}</span>
    `;
  }
}

function startPresenterTimer() {
  if (PresentationState.timerIsRunning) return;
  PresentationState.timerIsRunning = true;
  PresentationState.timerInterval = setInterval(() => {
    PresentationState.timerSeconds++;
    renderPresenterTimer();
  }, 1000);
  updateTimerButton();
}

function pausePresenterTimer() {
  PresentationState.timerIsRunning = false;
  clearInterval(PresentationState.timerInterval);
  updateTimerButton();
}

function resetPresenterTimer() {
  pausePresenterTimer();
  PresentationState.timerSeconds = 0;
  renderPresenterTimer();
}

function renderPresenterTimer() {
  const totalSec = PresentationState.timerSeconds;
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  const pad = (n) => (n < 10 ? `0${n}` : n);
  const formatted = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;

  const timerEl = document.getElementById('presenter-timer');
  if (timerEl) timerEl.textContent = formatted;
}

function updateTimerButton() {
  const btn = document.getElementById('btn-timer-toggle');
  if (btn) {
    if (PresentationState.timerIsRunning) {
      btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      btn.title = 'Pausar Cronômetro';
    } else {
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      btn.title = 'Iniciar / Retomar Cronômetro';
    }
  }
}

/* =========================================================
   GRID OVERVIEW THUMBNAILS (8 SLIDES)
   ========================================================= */

function renderGridThumbnails() {
  const grid = document.getElementById('slides-thumbnail-grid');
  if (!grid) return;

  grid.innerHTML = '';
  SlideData.forEach((slide) => {
    const thumb = document.createElement('div');
    thumb.className = `slide-thumb-card ${slide.id === PresentationState.currentSlide ? 'active' : ''}`;
    thumb.onclick = () => {
      goToSlide(slide.id);
      closeAllModals();
    };

    thumb.innerHTML = `
      <span class="thumb-num">Slide 0${slide.id}</span>
      <h4 class="thumb-title">${slide.heading}</h4>
      <span class="thumb-speaker"><i class="fa-solid fa-clock"></i> ${slide.targetTime}</span>
    `;

    grid.appendChild(thumb);
  });
}

function updateGridOverviewHighlight() {
  const cards = document.querySelectorAll('.slide-thumb-card');
  cards.forEach((card, index) => {
    if (index + 1 === PresentationState.currentSlide) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

/* =========================================================
   MODALS MANAGER
   ========================================================= */

function openModal(modalId) {
  Sound.playClick();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    if (modalId === 'modal-presenter' && !PresentationState.timerIsRunning && PresentationState.timerSeconds === 0) {
      startPresenterTimer();
    }
    if (modalId === 'modal-grid-overview') {
      renderGridThumbnails();
    }
  }
}

function closeAllModals() {
  Sound.playClick();
  document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
}

/* =========================================================
   AUTOPLAY & THEME TOGGLES
   ========================================================= */

function toggleAutoplay() {
  const btn = document.getElementById('btn-autoplay-toggle');
  if (!PresentationState.isAutoplay) {
    PresentationState.isAutoplay = true;
    if (btn) {
      btn.classList.add('playing');
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Pausar</span>';
    }
    PresentationState.autoplayInterval = setInterval(() => {
      nextSlide();
    }, PresentationState.autoplayDelay);
  } else {
    PresentationState.isAutoplay = false;
    if (btn) {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Apresentar</span>';
    }
    clearInterval(PresentationState.autoplayInterval);
  }
}

function toggleTheme() {
  Sound.playClick();
  const html = document.documentElement;
  const btn = document.getElementById('btn-theme-toggle');
  if (PresentationState.currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    PresentationState.currentTheme = 'dark';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    html.setAttribute('data-theme', 'light');
    PresentationState.currentTheme = 'light';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleAudio() {
  PresentationState.isMuted = !PresentationState.isMuted;
  const btn = document.getElementById('btn-audio-toggle');
  const toast = document.getElementById('audio-toast');

  if (btn) {
    btn.innerHTML = PresentationState.isMuted
      ? '<i class="fa-solid fa-volume-xmark"></i>'
      : '<i class="fa-solid fa-volume-high"></i>';
  }

  if (toast) {
    toast.innerHTML = PresentationState.isMuted
      ? '<i class="fa-solid fa-volume-xmark"></i> <span>Áudio Desativado</span>'
      : '<i class="fa-solid fa-volume-high"></i> <span>Áudio Ativado</span>';
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 1800);
  }
}

function toggleFullscreen() {
  Sound.playClick();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

/* =========================================================
   EVENT LISTENERS & TOUCH NAVIGATION
   ========================================================= */

function setupEventListeners() {
  // Navigation Buttons
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  // Top Bar Actions
  const btnTheme = document.getElementById('btn-theme-toggle');
  const btnAudio = document.getElementById('btn-audio-toggle');
  const btnQrModal = document.getElementById('btn-qr-modal');
  const btnGrid = document.getElementById('btn-grid-overview');
  const btnPresenter = document.getElementById('btn-presenter-mode');
  const btnShortcuts = document.getElementById('btn-shortcuts');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnAutoplay = document.getElementById('btn-autoplay-toggle');

  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
  if (btnAudio) btnAudio.addEventListener('click', toggleAudio);
  if (btnQrModal) btnQrModal.addEventListener('click', () => openModal('modal-qr-zoom'));
  if (btnGrid) btnGrid.addEventListener('click', () => openModal('modal-grid-overview'));
  if (btnPresenter) btnPresenter.addEventListener('click', () => openModal('modal-presenter'));
  if (btnShortcuts) btnShortcuts.addEventListener('click', () => openModal('modal-shortcuts'));
  if (btnFullscreen) btnFullscreen.addEventListener('click', toggleFullscreen);
  if (btnAutoplay) btnAutoplay.addEventListener('click', toggleAutoplay);

  // Presenter Timer controls
  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  const btnTimerReset = document.getElementById('btn-timer-reset');
  if (btnTimerToggle) {
    btnTimerToggle.addEventListener('click', () => {
      if (PresentationState.timerIsRunning) pausePresenterTimer();
      else startPresenterTimer();
    });
  }
  if (btnTimerReset) btnTimerReset.addEventListener('click', resetPresenterTimer);

  // Dock dots click
  const dots = document.querySelectorAll('.dot-btn');
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const slideNum = parseInt(dot.getAttribute('data-slide'), 10);
      if (slideNum) goToSlide(slideNum);
    });
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
      case 'd':
      case 'D':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'PageUp':
      case 'a':
      case 'A':
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          prevSlide();
        }
        break;

      case 'p':
      case 'P':
        e.preventDefault();
        openModal('modal-presenter');
        break;

      case 'q':
      case 'Q':
        e.preventDefault();
        openModal('modal-qr-zoom');
        break;

      case 'g':
      case 'G':
        e.preventDefault();
        openModal('modal-grid-overview');
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 't':
      case 'T':
        e.preventDefault();
        toggleTheme();
        break;

      case 'm':
      case 'M':
        e.preventDefault();
        toggleAudio();
        break;

      case '?':
        e.preventDefault();
        openModal('modal-shortcuts');
        break;

      case 'Escape':
        closeAllModals();
        break;

      default:
        // Number keys 1-8 for direct slide navigation
        if (e.key >= '1' && e.key <= '8') {
          const num = parseInt(e.key, 10);
          if (num <= PresentationState.totalSlides) {
            goToSlide(num);
          }
        }
        break;
    }
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        if (deltaX < 0) nextSlide();
        else prevSlide();
      }
    }
  }, { passive: true });
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

window.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  updateUIState();
});
'''

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)
print('app.js written!')
'''

with open('build_deck.py', 'w', encoding='utf-8') as f:
    f.write(index_html)
'''

