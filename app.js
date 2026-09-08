/* =========================================================
   CONNECT SENAC — INTERACTIVE PRESENTATION ENGINE (10 SLIDES)
   WebGL 3D Engine, Audio FX, Presenter Mode & Power Script
   ========================================================= */

const PresentationState = {
  currentSlide: 1,
  totalSlides: 10,
  isAutoplay: false,
  autoplayInterval: null,
  autoplayDelay: 9000,
  isMuted: false,
  currentTheme: 'light',
  timerSeconds: 0,
  timerInterval: null,
  timerIsRunning: false,
  currentDemoStep: 1,
  currentDemoRole: 'modelo'
};

/* =========================================================
   POWER SCRIPT & SLIDES METADATA (10 SLIDES)
   Storytelling & Pitch de Vendas (Y Combinator Style)
   4 Integrantes | Meta de Tempo: 26 min (25-30 min)
   ========================================================= */
const SlideData = [
  {
    id: 1,
    title: "Slide 01 — Abertura Épica",
    heading: "CONNECT SENAC — Transformando o atendimento prático em uma experiência digital fluida.",
    category: "Abertura",
    speaker: "Apresentador 1",
    targetTime: "1:30 min",
    keyQuote: "Mais do que agendar. Conectar pessoas, transformar aprendizado e eliminar o caos operacional.",
    script: `
      <div class="script-section-tag">FALA DE ABERTURA — APRESENTADOR 1</div>
      <p>"Bom dia / Boa noite aos ilustres professores, membros da banca examinadora e a todos os presentes.</p>
      <p>Nós somos a equipe de desenvolvimento do <strong>Connect Senac</strong>. Estamos aqui hoje não apenas para apresentar mais um software acadêmico, mas para defender um produto desenhado para solucionar uma das maiores dores operacionais e pedagógicas das instituições de ensino técnico e profissionalizante.</p>
      <p>Nosso projeto durou meses de pesquisa, validação e desenvolvimento em equipe composta por 4 pessoas, e nossa apresentação está estruturada para demonstrar como identificamos uma dor real, concebemos uma arquitetura escalável e entregamos uma solução pronta para o uso diário."</p>
      <div class="script-section-tag">TRANSIÇÃO DRAMÁTICA</div>
      <p><em>"E para que vocês sintam o real valor do que construímos, convido a banca a mergulhar no cenário que encontramos antes de criarmos a plataforma."</em></p>
    `
  },
  {
    id: 2,
    title: "Slide 02 — O Drama do Cenário Atual",
    heading: "O Drama do Cenário Tradicional — Três personagens reais enfrentando o vilão invisível: o caos manual.",
    category: "O Problema",
    speaker: "Apresentador 1",
    targetTime: "2:30 min",
    keyQuote: "O custo da desorganização: Ana com medo de perder a viagem, Lucas sem modelo para treinar e a Gestão afundada em papéis.",
    script: `
      <div class="script-section-tag">NARRATIVA HUMANA (PERSONAS) — APRESENTADOR 1</div>
      <p>"Imaginem três pessoas na rotina do Senac:</p>
      <ul>
        <li>Primeiro, a <strong>Ana</strong>: uma cliente da comunidade que deseja fazer um design de sobrancelhas ou um corte de cabelo. Ela manda mensagem no WhatsApp oficial, espera horas ou dias por uma resposta sem saber se sua vaga está garantida e tem medo de ir até a unidade e perder a viagem.</li>
        <li>Em segundo lugar, o <strong>Lucas</strong>: nosso aluno de curso prático. Ele chegou cedo, esterilizou seus instrumentos, montou sua bancada com todo o cuidado... mas a modelo que estava agendada informalmente desmarcou 10 minutos antes. O resultado? Horas de aula prática perdidas olhando para uma cadeira vazia.</li>
        <li>E, no centro de tudo, a <strong>Coordenação e os Docentes</strong>: sobrecarregados por pilhas de pranchetas de papel, conversas perdidas em celulares e zero visibilidade em tempo real sobre quem realmente compareceu."</li>
      </ul>
      <div class="script-highlight-quote">
        "O problema não é apenas marcar um horário no relógio. É o atrito, o estresse e a falta de comunicação que desgastam todas as pessoas envolvidas."
      </div>
      <div class="script-section-tag">TRANSIÇÃO</div>
      <p><em>"E o pior: esse atrito não gera apenas atraso operacional. Ele atinge diretamente o coração do Senac: a pedagogia."</em></p>
    `
  },
  {
    id: 3,
    title: "Slide 03 — A Pedagogia em Risco",
    heading: "A Pedagogia em Risco — Quando a operação falha, o aprendizado prático é o maior prejudicado.",
    category: "O Problema",
    speaker: "Apresentador 1",
    targetTime: "2:00 min",
    keyQuote: "Cada bancada vazia representa uma competência prática que o aluno deixou de exercitar para o mercado.",
    script: `
      <div class="script-section-tag">IMPACTO EDUCACIONAL — APRESENTADOR 1</div>
      <p>"Vejam a gravidade da cadeia de ruptura:</p>
      <p>1. O agendamento é feito de forma descentralizada e manual;<br>
      2. Sem lembretes automáticos e sem confirmação digital, a taxa de <em>no-show</em> (falta sem aviso) explode;<br>
      3. Quando a modelo falta, o aluno não tem como treinar as competências curriculares daquela aula."</p>
      <div class="script-highlight-quote">
        "O verdadeiro custo do caos manual não é financeiro. É pedagógico: cada cadeira vazia é uma oportunidade de aprendizado que nunca mais volta."
      </div>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 2</div>
      <p><em>"E para estancar essa sangria e devolver a previsibilidade para o laboratório, nós criamos o Connect Senac. Passo a palavra para o Apresentador 2 nos guiar pela solução."</em></p>
    `
  },
  {
    id: 4,
    title: "Slide 04 — A Revelação da Solução",
    heading: "A Revelação: Connect Senac — A ponte digital que une a demanda da comunidade com o aprendizado do aluno.",
    category: "A Solução",
    speaker: "Apresentador 2",
    targetTime: "2:30 min",
    keyQuote: "Não é apenas digitalizar um horário. É orquestrar o processo humano de ponta a ponta com previsibilidade.",
    script: `
      <div class="script-section-tag">A REVELAÇÃO DO PRODUTO — APRESENTADOR 2</div>
      <p>"Obrigado, Apresentador 1. O <strong>Connect Senac</strong> nasce exatamente como o herói libertador dessa jornada.</p>
      <p>Ele não é um simples formulário web; ele é uma tríade integrada onde cada ponta alimenta a outra em tempo real:</p>
      <ul>
        <li><strong>A Cliente (Ana)</strong> entra no pilar <em>AGENDAR</em>: descobre os cursos práticos abertos, escolhe a data e recebe confirmação com protocolo na hora.</li>
        <li><strong>O Aluno (Lucas)</strong> atua no pilar <em>ACOMPANHAR</em>: abre a pauta da sua aula no celular ou tablet, sabe exatamente quem vai atender e valida a presença em um clique.</li>
        <li><strong>A Coordenação</strong> governa no pilar <em>GERENCIAR</em>: abre turmas, distribui vagas e monitora a ocupação com dados 100% íntegros."</li>
      </ul>
      <div class="script-highlight-quote">
        "Com o Connect Senac, uma única ação de um usuário gera clareza e previsibilidade instantânea para todos os demais."
      </div>
    `
  },
  {
    id: 5,
    title: "Slide 05 — A Jornada da Ana",
    heading: "A Jornada da Ana: Experiência Sem Atrito — Do primeiro clique no celular ao atendimento com nota máxima.",
    category: "A Solução",
    speaker: "Apresentador 2",
    targetTime: "2:30 min",
    keyQuote: "De horas de espera e incerteza para uma experiência simples, transparente e acolhedora.",
    script: `
      <div class="script-section-tag">A JORNADA DO ALÍVIO — APRESENTADOR 2</div>
      <p>"Vejamos como a vida da Ana se transformou:</p>
      <ol>
        <li><strong>Descoberta Ágil</strong>: Pelo navegador do celular, sem precisar baixar apps pesados, a Ana acessa o catálogo do Senac e vê os procedimentos de estética disponíveis.</li>
        <li><strong>Escolha Transparente</strong>: Ela escolhe a data e o horário com vagas reais sincronizadas em tempo real.</li>
        <li><strong>Protocolo Seguro</strong>: Recebe na hora seu comprovante digital com instruções de chegada e orientações do procedimento.</li>
        <li><strong>Atendimento & Avaliação</strong>: Ao chegar no laboratório, Lucas já a esperava com tudo pronto. Ao final, Ana avalia o atendimento com 5 estrelas!"</li>
      </ol>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 3</div>
      <p><em>"E agora o Apresentador 3 vai mostrar o que acontece no lado da gestão e o salto qualitativo que conquistamos."</em></p>
    `
  },
  {
    id: 6,
    title: "Slide 06 — O Painel de Controle da Gestão",
    heading: "O Painel de Controle da Gestão — A pauta do docente e o dashboard da coordenação em tempo real.",
    category: "Produto & Gestão",
    speaker: "Apresentador 3",
    targetTime: "2:30 min",
    keyQuote: "O modelo agenda. O aluno/docente acompanha. A coordenação gerencia.",
    script: `
      <div class="script-section-tag">ORQUESTRAÇÃO & CONTROLE — APRESENTADOR 3</div>
      <p>"Obrigado, Apresentador 2. Do ponto de vista operacional, o Connect Senac resolve o pesadelo das pranchetas:</p>
      <p>Para o <strong>Docente e o Aluno</strong>, a tela de Pauta substitui as anotações manuais. O professor visualiza a fila da turma, vê o status 'Confirmada' da Ana e clica em 'Validar Presença' em menos de 3 segundos.</p>
      <p>Para a <strong>Coordenação</strong>, o dashboard apresenta métricas de ocupação em tempo real, garantia de zero conflito de salas físicas e segurança por controle de papéis (RBAC)."</p>
      <div class="script-highlight-quote">
        "O modelo agenda. O aluno acompanha. A coordenação gerencia. Cada perfil tem exatamente a ferramenta necessária, sem ruídos."
      </div>
    `
  },
  {
    id: 7,
    title: "Slide 07 — Antes vs Depois",
    heading: "Antes vs. Depois: O Salto Qualitativo — O contraste dramático entre o modelo arcaico e a eficiência integrada.",
    category: "O Salto Qualitativo",
    speaker: "Apresentador 3",
    targetTime: "2:30 min",
    keyQuote: "Não estamos apenas digitalizando um agendamento. Estamos resgatando o tempo pedagógico de alunos e professores.",
    script: `
      <div class="script-section-tag">O SALTO QUALITATIVO — APRESENTADOR 3</div>
      <p>"Vejam o impacto no dia a dia da instituição quando colocamos os dois mundos lado a lado:</p>
      <ul>
        <li><strong>No Passado (Manual)</strong>: Esperas de horas ou dias por mensagem, alto índice de faltas surpresa, bancadas ociosas e pilhas de folhas de papel sujeitas a extravio.</li>
        <li><strong>Com o Connect Senac</strong>: Confirmação em segundos com protocolo digital, agenda previsível com turmas 100% cheias e histórico acadêmico centralizado no banco de dados.</li>
      </ul>
      <div class="script-highlight-quote">
        "Não eliminamos apenas o papel; devolvemos o foco dos professores e alunos para o que realmente importa: a excelência do aprendizado."
      </div>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 4</div>
      <p><em>"E para provar que tudo isso é real e funcional, passo a palavra ao Apresentador 4 para a demonstração ao vivo com a banca."</em></p>
    `
  },
  {
    id: 8,
    title: "Slide 08 — 📱 Teste ao Vivo & Simulador",
    heading: "📱 Teste ao Vivo: Experimente Agora — A melhor forma de comprovar o produto é colocando-o nas mãos da banca e da plateia.",
    category: "Demonstração Prática",
    speaker: "Apresentador 4",
    targetTime: "3:30 min",
    keyQuote: "Peguem seus celulares agora e façam um agendamento teste em 30 segundos pelo QR Code!",
    script: `
      <div class="script-section-tag">CHAMADA AO VIVO PARA A BANCA — APRESENTADOR 4</div>
      <p>"Obrigado, Apresentador 3. Senhores avaliadores e presentes: acreditamos tanto na robustez e facilidade do Connect Senac que <strong>queremos convidar todos vocês a pegarem seus smartphones agora</strong>.</p>
      <p>1. Apontem a câmera do celular para o QR Code exibido na tela (pressionem [Q] no telão para ampliar se necessário);<br>
      2. O sistema abrirá diretamente no navegador do seu smartphone, sem instalar nada;<br>
      3. <strong>Para acessar a aplicação, utilizem a conta de teste exibida na tela:</strong><br>
      &nbsp;&nbsp;• <strong>Login:</strong> <code>teste@gmail.com</code><br>
      &nbsp;&nbsp;• <strong>Senha:</strong> <code>123456</code><br>
      4. Escolham uma aula prática de Estética ou Beleza e realizem um agendamento teste em menos de 30 segundos!</p>
      <p>Vocês verão na palma da mão a geração imediata do protocolo digital e a facilidade de navegação mobile-first que projetamos."</p>
      <div class="script-section-tag">SIMULADOR GUIADO DE 6 PASSOS</div>
      <p><em>(O apresentador pode alternar para a aba '2. A Jornada da Ana' e navegar pelos 6 passos reais na tela para demonstrar o fluxo completo em sincronia).</em></p>
    `
  },
  {
    id: 9,
    title: "Slide 09 — Adoção & Escala",
    heading: "Estratégia de Adoção & Escala — Integração fluida na rotina da unidade com arquitetura pronta para crescer.",
    category: "Visão de Futuro",
    speaker: "Apresentador 4",
    targetTime: "2:00 min",
    keyQuote: "Do laboratório de estética da nossa unidade para todos os cursos práticos do ecossistema Senac.",
    script: `
      <div class="script-section-tag">VIABILIDADE TÉCNICA E FUTURO — APRESENTADOR 4</div>
      <p>"Para garantir que essa solução seja viável e perene na instituição, baseamos o projeto em três pilares:</p>
      <ul>
        <li><strong>Zero Fricção de Treinamento</strong>: Interface autoexplicativa que não exige cursos complexos de capacitação para professores ou alunos.</li>
        <li><strong>Arquitetura Web Escalável</strong>: Backend em Node.js/Express com API REST desacoplada e PostgreSQL/Supabase, permitindo integrar novos cursos com facilidade.</li>
        <li><strong>Segurança e Governança</strong>: Autenticação segura JWT, senhas com hash bcrypt e controle de perfis RBAC, protegendo dados de clientes e da unidade."</li>
      </ul>
      <div class="script-highlight-quote">
        "O Connect Senac foi concebido para começar na nossa unidade e escalar com segurança para toda a rede Senac."
      </div>
    `
  },
  {
    id: 10,
    title: "Slide 10 — Fechamento & Impacto",
    heading: "Mais do que agendar. Conectar — Uma experiência integrada para todos os envolvidos no processo pedagógico.",
    category: "Conclusão",
    speaker: "Apresentador 4",
    targetTime: "2:00 min",
    keyQuote: "Connect Senac — A ponte que une pessoas e tecnologia para elevar a qualidade do ensino prático. Muito obrigado!",
    script: `
      <div class="script-section-tag">FECHAMENTO TRIUNFAL — APRESENTADOR 4</div>
      <p>"Para encerrar nossa apresentação:</p>
      <p>A Cliente participa com facilidade e segurança.<br>
      O Aluno pratica com bancadas cheias e aproveitamento total.<br>
      A Gestão gerencia com dados claros e sem papelada.<br>
      E o <strong>Connect Senac conecta todas essas pontas em uma experiência fluida e moderna</strong>.</p>
      <p>Agradecemos profundamente aos nossos professores, orientadores e a cada um dos membros da banca examinadora pelo tempo e pela atenção.</p>
      <div class="script-highlight-quote">
        "Connect Senac — Mais do que agendar. Conectar. Muito obrigado e abrimos agora para as considerações da banca!"
      </div>
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
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
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
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
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
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.09);
        osc.stop(this.ctx.currentTime + idx * 0.09 + 0.3);
      });
    } catch (e) {}
  }
};

/* =========================================================
   3D WEBGL GLOBAL BACKGROUND ENGINE (THREE.JS)
   ========================================================= */
class Global3DBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas-3d');
    if (!this.canvas || typeof THREE === 'undefined') return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 80;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.initObjects();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  initObjects() {
    // Floating Connected Nodes Grid
    const particleCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x004580); // Senac Blue
    const color2 = new THREE.Color(0xf37021); // Senac Orange

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Subtle Torus Wireframe (Digital Ecosystem)
    const torusGeo = new THREE.TorusGeometry(38, 1.2, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x004580,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    this.torus = new THREE.Mesh(torusGeo, torusMat);
    this.scene.add(this.torus);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.renderer || !this.camera) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      if (this.camera) {
        this.camera.position.x += (mouseX * 5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (mouseY * 5 - this.camera.position.y) * 0.05;
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.particles) {
      this.particles.rotation.y += 0.0012;
      this.particles.rotation.x += 0.0006;
    }
    if (this.torus) {
      this.torus.rotation.z += 0.002;
      this.torus.rotation.x += 0.001;
    }
    this.renderer.render(this.scene, this.camera);
  }
}

/* =========================================================
   NAVIGATION & SLIDES ENGINE (10 SLIDES)
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
    setTimeout(() => prevSlideEl.classList.remove('prev'), 450);
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
    goToSlide(1); // loop back
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

  // Update Top Navigation Bar Labels
  const headerTitle = document.getElementById('slide-header-title');
  const badgeCategory = document.getElementById('slide-badge-category');
  const speakerPill = document.getElementById('slide-speaker-pill');

  if (headerTitle) headerTitle.textContent = slideInfo.title;
  if (badgeCategory) badgeCategory.textContent = slideInfo.category;
  if (speakerPill) speakerPill.innerHTML = `<i class="fa-solid fa-user"></i> ${slideInfo.speaker}`;

  // Update Bottom Dock Counter and Progress
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

  // Update Dock Navigation Dots
  const dots = document.querySelectorAll('.dot-btn');
  dots.forEach((dot, index) => {
    if (index + 1 === current) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Update Modals Content if open
  updatePresenterModal();
  updateGridOverviewHighlight();
}

/* =========================================================
   INTERACTIVE DEMO SIMULATOR & AUDIENCE MODE (SLIDE 8)
   ========================================================= */

function switchDemoMainMode(mode) {
  Sound.playClick();
  const btnStory = document.getElementById('btn-mode-story');
  const btnAudience = document.getElementById('btn-mode-audience');
  const panelStory = document.getElementById('demo-panel-story');
  const panelAudience = document.getElementById('demo-panel-audience');

  if (mode === 'story') {
    if (btnStory) btnStory.classList.add('active');
    if (btnAudience) btnAudience.classList.remove('active');
    if (panelStory) panelStory.classList.add('active');
    if (panelAudience) panelAudience.classList.remove('active');
  } else {
    if (btnAudience) btnAudience.classList.add('active');
    if (btnStory) btnStory.classList.remove('active');
    if (panelAudience) panelAudience.classList.add('active');
    if (panelStory) panelStory.classList.remove('active');
  }
}

function goToDemoStep(stepNumber) {
  PresentationState.currentDemoStep = stepNumber;
  Sound.playClick();

  // Update step sequence tabs
  for (let i = 1; i <= 6; i++) {
    const tab = document.getElementById(`d-seq-${i}`);
    const screen = document.getElementById(`demo-screen-${i}`);
    if (tab) {
      if (i === stepNumber) tab.classList.add('active');
      else tab.classList.remove('active');
    }
    if (screen) {
      if (i === stepNumber) screen.classList.add('active');
      else screen.classList.remove('active');
    }
  }

  // Update address bar text
  const addr = document.getElementById('demo-address-bar');
  if (addr) {
    switch (stepNumber) {
      case 1: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/catalogo'; break;
      case 2: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/procedimento/sobrancelhas'; break;
      case 3: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/confirmacao/ANA-2026'; break;
      case 4: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/profissional/pauta-do-dia'; break;
      case 5: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/coordenacao/dashboard'; break;
      case 6: addr.innerHTML = '<i class="fa-solid fa-lock text-green"></i> connect.senac.br/avaliacao/concluido'; break;
    }
  }

  // Update Role Switcher button active state
  if (stepNumber <= 3) setDemoRole('modelo', false);
  else if (stepNumber === 4) setDemoRole('prof', false);
  else if (stepNumber >= 5) setDemoRole('coord', false);
}

function setDemoRole(role, changeScreen = true) {
  PresentationState.currentDemoRole = role;
  const btnModelo = document.getElementById('role-btn-modelo');
  const btnProf = document.getElementById('role-btn-prof');
  const btnCoord = document.getElementById('role-btn-coord');

  if (btnModelo) btnModelo.classList.toggle('active', role === 'modelo');
  if (btnProf) btnProf.classList.toggle('active', role === 'prof');
  if (btnCoord) btnCoord.classList.toggle('active', role === 'coord');

  if (changeScreen) {
    if (role === 'modelo') goToDemoStep(1);
    else if (role === 'prof') goToDemoStep(4);
    else if (role === 'coord') goToDemoStep(5);
  }
}

function triggerConfettiReward() {
  Sound.playCelebration();
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
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
      <span>${nextSlideInfo.speaker} • Tempo: ${nextSlideInfo.targetTime}</span>
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
   GRID OVERVIEW THUMBNAILS (10 SLIDES)
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
      <span class="thumb-num">Slide ${slide.id < 10 ? '0' + slide.id : slide.id}</span>
      <h4 class="thumb-title">${slide.heading}</h4>
      <span class="thumb-speaker"><i class="fa-solid fa-user"></i> ${slide.speaker} (${slide.targetTime})</span>
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
    // If typing in an input field, do not trigger presentation shortcuts
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

      case '0':
        e.preventDefault();
        goToSlide(10);
        break;

      default:
        // Number keys 1-9 for direct slide navigation
        if (e.key >= '1' && e.key <= '9') {
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

      // Only navigate if horizontal swipe is dominant
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
  // Initialize 3D WebGL Background
  new Global3DBackground();

  // Setup Event Listeners
  setupEventListeners();

  // Initial State Update
  updateUIState();

  // Initialize Vanilla Tilt on desktop
  if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.12
    });
  }
});
