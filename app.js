/* =========================================================
   CONNECT SENAC — INTERACTIVE PRESENTATION ENGINE (9 SLIDES)
   WebGL 3D Engine, Audio FX, Presenter Mode & Power Script
   ========================================================= */

const PresentationState = {
  currentSlide: 1,
  totalSlides: 9,
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
   POWER SCRIPT & SLIDES METADATA (9 SLIDES)
   Storytelling & Pitch de Vendas (Y Combinator Style)
   4 Integrantes | Meta de Tempo: 26 min (25-30 min)
   ========================================================= */
const SlideData = [
  {
    id: 1,
    title: "Slide 01 — Abertura Institucional",
    heading: "CONNECT SENAC — Transformando o atendimento prático em uma experiência digital fluida.",
    category: "Abertura",
    speaker: "Apresentador 1",
    targetTime: "1:30 min",
    keyQuote: "Mais do que agendar. Conectar pessoas, transformar aprendizado e orquestrar a operação pedagógica.",
    script: `
      <div class="script-section-tag">FALA DE ABERTURA — APRESENTADOR 1</div>
      <p>"Bom dia a todos os presentes.</p>
      <p>Nós somos a <strong>Turma de Desenvolvimento de Sistemas</strong>.</p>
      <p>Estamos aqui hoje não apenas para apresentar um software acadêmico, mas para defender um produto desenhado para solucionar uma das maiores dores operacionais e pedagógicas da instituição que fazemos parte.</p>
      <p>Nosso projeto durou meses de pesquisa, validação e desenvolvimento. A apresentação tem como objetivo demonstrar como identificamos uma dor real, desenvolvemos uma aplicação escalável e entregamos uma solução pronta para o uso diário."</p>
      <div class="script-section-tag">TRANSIÇÃO DRAMÁTICA</div>
      <p><em>"E para que vocês sintam o real valor do que construímos, convido todos a mergulhar no cenário que encontramos antes de criarmos a plataforma."</em></p>
    `
  },
  {
    id: 2,
    title: "Slide 02 — O Desafio da Rotina Real",
    heading: "O Desafio da Rotina Real — Três personagens reais enfrentando o gargalo da comunicação fragmentada.",
    category: "O Desafio",
    speaker: "Apresentador 1",
    targetTime: "2:30 min",
    keyQuote: "O problema não é apenas marcar um horário. É o atrito, o estresse e a falta de sincronização que corroem o tempo de aprendizado.",
    script: `
      <div class="script-section-tag">NARRATIVA HUMANA (PERSONAS) — APRESENTADOR 1</div>
      <p>"Imaginem três pessoas no dia a dia da unidade:</p>
      <ul>
        <li>Primeiro, a <strong>Ana</strong> (Cliente/Modelo): quer fazer um procedimento de beleza, manda mensagem no WhatsApp oficial e aguarda dias sem saber se sua vaga foi confirmada, com medo de perder a viagem até o Senac.</li>
        <li>Em segundo lugar, o <strong>Lucas</strong> (Aluno/Prático): preparou a bancada, esterilizou seus instrumentos e chegou com 30 minutos de antecedência... mas a modelo desmarcou em cima da hora sem aviso prévio (<em>no-show</em>). Ele fica sem atendimento prático naquele dia.</li>
        <li>E, no centro, a <strong>Coordenação e o Corpo Docente</strong>: sobrecarregados por mensagens soltas, planilhas desincronizadas e sem garantia de conformidade com termos de imagem e LGPD."</li>
      </ul>
      <div class="script-highlight-quote">
        "O problema não é apenas marcar um horário. É o atrito, o estresse e a falta de sincronização que corroem o tempo de aprendizado."
      </div>
    `
  },
  {
    id: 3,
    title: "Slide 03 — A Pedagogia em Risco",
    heading: "A Pedagogia em Risco — Quando a operação falha, o aprendizado prático é o maior prejudicado.",
    category: "O Desafio",
    speaker: "Apresentador 1",
    targetTime: "2:00 min",
    keyQuote: "O verdadeiro custo da desorganização não é financeiro. É pedagógico: cada bancada vazia é uma oportunidade formativa que não volta mais.",
    script: `
      <div class="script-section-tag">IMPACTO EDUCACIONAL — APRESENTADOR 1</div>
      <p>"Vejam a cadeia de ruptura quando a comunicação falha:</p>
      <p>1. O agendamento ocorre de forma fragmentada e descentralizada;<br>
      2. Sem lembretes e sem protocolo digital, ocorrem desistências de última hora sem aviso;<br>
      3. Sem modelo na bancada, o aluno perde a oportunidade prática e os critérios formativos do Senac são comprometidos."</p>
      <div class="script-highlight-quote">
        "O verdadeiro custo da desorganização não é financeiro. É pedagógico: cada bancada vazia é uma oportunidade formativa que não volta mais."
      </div>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 2</div>
      <p><em>"E para devolver a previsibilidade e o foco ao ensino prático, nós concebemos o Connect Senac. Passo a palavra para o Apresentador 2."</em></p>
    `
  },
  {
    id: 4,
    title: "Slide 04 — A Experiência do Modelo",
    heading: "A Experiência do Modelo: Autoatendimento sem Atrito — Do primeiro clique no smartphone ao atendimento confirmado.",
    category: "A Solução",
    speaker: "Apresentador 2",
    targetTime: "2:30 min",
    keyQuote: "Uma experiência acolhedora que aproxima a comunidade da instituição com total transparência.",
    script: `
      <div class="script-section-tag">JORNADA SEM FRICÇÃO — APRESENTADOR 2</div>
      <p>"Obrigado, Apresentador 1. No Connect Senac, desenhamos uma jornada 100% mobile-first para a comunidade:</p>
      <ol>
        <li><strong>Descoberta Ágil</strong>: Pelo navegador do celular, sem baixar aplicativos pesados, a comunidade visualiza os procedimentos abertos na unidade.</li>
        <li><strong>Escolha Transparente</strong>: Escolhe data, horário e visualiza as orientações prévias de saúde com vagas sincronizadas em tempo real.</li>
        <li><strong>Protocolo Seguro</strong>: Recebe na hora o comprovante digital com código de atendimento e QR Code.</li>
        <li><strong>Atendimento & Avaliação</strong>: No laboratório, o aluno já a aguardava com bancada pronta. Atendimento realizado e avaliação 5 estrelas registrada!"</li>
      </ol>
      <div class="script-highlight-quote">
        "Uma experiência acolhedora que aproxima a comunidade da instituição com total transparência."
      </div>
    `
  },
  {
    id: 5,
    title: "Slide 05 — Central de Operações",
    heading: "A Central de Operações da Gestão — O coração administrativo: cursos, pautas, moderação e governança em tempo real.",
    category: "Produto & Gestão",
    speaker: "Apresentador 2",
    targetTime: "3:00 min",
    keyQuote: "O modelo agenda. O aluno e docente acompanham na pauta. A coordenação governa a capacidade da unidade.",
    script: `
      <div class="script-section-tag">DEMONSTRAÇÃO DO MÓDULO ADMINISTRATIVO — APRESENTADOR 2</div>
      <p>"Convido a banca a observar o nosso Painel de Gestão Operacional, estruturado em 5 abas integradas:</p>
      <ul>
        <li><strong>1. Visão Geral</strong>: KPIs de ocupação em 100%, 14/14 alunos com modelos confirmados, zero conflito de salas e abertura rápida de grade.</li>
        <li><strong>2. Gestão de Cursos</strong>: Catálogo ativo da unidade (Pintura Capilar, Manicure, Sobrancelhas, Massoterapia, Tranças, Corte Masculino).</li>
        <li><strong>3. Usuários & Moderação</strong>: Base com badges de conformidade <code>LGPD OK</code> e <code>Uso de Imagem OK</code>, histórico de presença e integração com WhatsApp oficial.</li>
        <li><strong>4. Pautas Globais</strong>: Visão organizada por docente (Prof. Deyson Santana e Profa. Tais) com validação de presença em 1 clique.</li>
        <li><strong>5. Criar Colaborador</strong>: Controle de acesso institucional por papéis (RBAC)."</li>
      </ul>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 3</div>
      <p><em>"E agora o Apresentador 3 vai detalhar a evolução da rotina e o salto qualitativo alcançado com a plataforma."</em></p>
    `
  },
  {
    id: 6,
    title: "Slide 06 — Antes vs Depois",
    heading: "Antes vs. Depois: O Salto de Maturidade Operacional — Da fragmentação à sincronização digital em tempo real.",
    category: "Transformação",
    speaker: "Apresentador 3",
    targetTime: "2:30 min",
    keyQuote: "Devolvemos o foco dos professores e alunos para o que realmente importa: a excelência do aprendizado prático.",
    script: `
      <div class="script-section-tag">O SALTO QUALITATIVO — APRESENTADOR 3</div>
      <p>"Vejam o impacto comparativo direto na rotina da unidade:</p>
      <ul>
        <li><strong>No Passado (Fragmentado)</strong>: Mensagens soltas no WhatsApp sem garantia de vaga, faltas sem aviso gerando bancadas vazias, planilhas desincronizadas e professores sobrecarregados com logística manual.</li>
        <li><strong>Com o Connect Senac (Sincronizado)</strong>: Autoatendimento digital instantâneo 24/7 com protocolo oficial, turmas com 100% de ocupação, pauta centralizada em tempo real e conformidade LGPD automática."</li>
      </ul>
      <div class="script-highlight-quote">
        "Devolvemos o foco dos professores e alunos para o que realmente importa: a excelência do aprendizado prático."
      </div>
      <div class="script-section-tag">PASSO DE BASTÃO PARA O APRESENTADOR 4</div>
      <p><em>"E para comprovar que essa tecnologia é real e funcional, passo a palavra ao Apresentador 4 para a demonstração prática com a banca."</em></p>
    `
  },
  {
    id: 7,
    title: "Slide 07 — Teste ao Vivo",
    heading: "📱 Teste ao Vivo: Experimente Agora — QR Code interativo e credenciais de teste para a banca examinadora.",
    category: "Demonstração Prática",
    speaker: "Apresentador 4",
    targetTime: "3:30 min",
    keyQuote: "Peguem seus celulares agora e realizem um agendamento teste em 30 segundos! Login: teste@gmail.com | Senha: 123456",
    script: `
      <div class="script-section-tag">DESAFIO AO VIVO PARA A BANCA — APRESENTADOR 4</div>
      <p>"Obrigado, Apresentador 3. Senhores avaliadores e presentes: acreditamos tanto na usabilidade do Connect Senac que <strong>convidamos todos a pegarem seus smartphones agora</strong>.</p>
      <p>1. Apontem a câmera do celular para o QR Code exibido no telão (pressione [Q] para ampliar);<br>
      2. O sistema abrirá diretamente no navegador do seu smartphone, sem instalar nada;<br>
      3. <strong>Para acessar a aplicação, utilizem a conta de teste exibida na tela:</strong><br>
      &nbsp;&nbsp;• <strong>Login:</strong> <code>teste@gmail.com</code><br>
      &nbsp;&nbsp;• <strong>Senha:</strong> <code>123456</code><br>
      4. Escolham um procedimento de estética e concluam um agendamento teste em menos de 30 segundos!</p>
      <p>Vocês verão a geração instantânea do protocolo digital e a facilidade mobile-first que projetamos."</p>
      <div class="script-section-tag">SIMULADOR GUIADO DE 6 ETAPAS</div>
      <p><em>(O apresentador pode alternar para a aba '2. A Jornada da Ana' e guiar os 6 passos reais na tela para a banca).</em></p>
    `
  },
  {
    id: 8,
    title: "Slide 08 — Adoção & Escala",
    heading: "Estratégia de Adoção & Escalabilidade — Implantação no SENAC Santo Antônio de Jesus e expansão em rede.",
    category: "Visão de Futuro",
    speaker: "Apresentador 4",
    targetTime: "2:00 min",
    keyQuote: "O Connect Senac foi concebido para transformar a nossa unidade e escalar com segurança para toda a rede Senac.",
    script: `
      <div class="script-section-tag">VIABILIDADE TÉCNICA E FUTURO — APRESENTADOR 4</div>
      <p>"Para assegurar que o Connect Senac seja perene e sustentável, estruturamos o projeto em três pilares de escala:</p>
      <ul>
        <li><strong>Zero Fricção de Treinamento</strong>: Interface autoexplicativa desenhada para a rotina de alunos e professores, permitindo adoção imediata sem cursos complexos.</li>
        <li><strong>Arquitetura Web Moderna</strong>: API REST Node.js/Express desacoplada e banco PostgreSQL (Supabase) com alta integridade referencial.</li>
        <li><strong>Multiunidade e Multicurso</strong>: Pronto para expandir de Estética e Beleza para Gastronomia, Saúde, TI e outras unidades do Senac Bahia."</li>
      </ul>
      <div class="script-highlight-quote">
        "O Connect Senac foi concebido para transformar a nossa unidade e escalar com segurança para toda a rede Senac."
      </div>
    `
  },
  {
    id: 9,
    title: "Slide 09 — Fechamento & Conexão",
    heading: "Mais do que agendar. Conectar — Uma experiência integrada com reconhecimento especial aos mestres orientadores.",
    category: "Conclusão",
    speaker: "Apresentador 4",
    targetTime: "2:00 min",
    keyQuote: "Connect Senac — Mais do que agendar. Conectar. Muito obrigado a todos e abrimos agora para as considerações da banca examinadora!",
    script: `
      <div class="script-section-tag">FECHAMENTO TRIUNFAL & GRATIDÃO — APRESENTADOR 4</div>
      <p>"Para encerrar a nossa defesa:</p>
      <p>A Cliente participa com dignidade e transparência.<br>
      O Aluno pratica com bancadas cheias e formação plena.<br>
      A Gestão gerencia com pauta em tempo real e governança.<br>
      E o <strong>Connect Senac conecta todas essas pontas em uma experiência fluida e moderna</strong>.</p>
      <p>Nosso agradecimento mais que especial aos nossos professores e mentores <strong>Deyson Santana</strong> e <strong>Tais</strong>, cuja orientação técnica e pedagógica foi indispensável para transformar essa ideia em realidade."</p>
      <div class="script-highlight-quote">
        "Connect Senac — Mais do que agendar. Conectar. Muito obrigado a todos e abrimos agora para as considerações da banca examinadora!"
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
   3D WEBGL GLOBAL BACKGROUND ENGINE (THREE.JS - CALM AUDITORIUM MODE)
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
    // Floating Connected Nodes Grid (Gentle, calm particles for projector readability)
    const particleCount = 120;
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
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.35
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Subtle Torus Wireframe (Digital Ecosystem)
    const torusGeo = new THREE.TorusGeometry(38, 1.0, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x004580,
      wireframe: true,
      transparent: true,
      opacity: 0.08
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
        this.camera.position.x += (mouseX * 3 - this.camera.position.x) * 0.03;
        this.camera.position.y += (mouseY * 3 - this.camera.position.y) * 0.03;
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.particles) {
      this.particles.rotation.y += 0.0003;
      this.particles.rotation.x += 0.00015;
    }
    if (this.torus) {
      this.torus.rotation.z += 0.0005;
      this.torus.rotation.x += 0.00025;
    }
    this.renderer.render(this.scene, this.camera);
  }
}

/* =========================================================
   ADMIN OPERATIONS HUB TABS SWITCHER (SLIDE 05)
   ========================================================= */
function switchAdminTab(tabName) {
  Sound.playClick();
  const tabs = ['visao', 'cursos', 'usuarios', 'pautas', 'colaborador'];
  tabs.forEach((t) => {
    const btn = document.getElementById(`atab-btn-${t}`);
    const panel = document.getElementById(`admin-panel-${t}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (panel) panel.classList.toggle('active', t === tabName);
  });
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
