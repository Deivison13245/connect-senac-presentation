/* =========================================================
   CONNECT SENAC — INTERACTIVE ENGINE (11 MINIMALIST SLIDES)
   Three.js 3D Subtle Particle Mesh • Sound FX • Presenter Pitch
   ========================================================= */

const PresentationState = {
  currentSlide: 1,
  totalSlides: 11,
  isAutoplay: false,
  autoplayInterval: null,
  autoplayDelay: 10000,
  isMuted: false,
  currentTheme: 'dark',
  timerSeconds: 0,
  timerInterval: null,
  timerIsRunning: false
};

/* =========================================================
   POWER SCRIPT & SLIDES METADATA (11 SLIDES FIÉIS)
   ========================================================= */
const SlideData = [
  {
    id: 1,
    title: "Slide 01 — Capa: Connect Senac",
    heading: "Connect Senac",
    category: "Abertura",
    speaker: "Equipe ADS",
    targetTime: "2:00 min",
    keyQuote: "Projeto Integrador • Tecnologia em Análise e Desenvolvimento de Sistemas.",
    script: `
      <div class="script-section-tag">ABERTURA OFICIAL</div>
      <p>"Bom dia a todos os presentes, professores e banca examinadora!</p>
      <p>Nós somos a <strong>2ª Turma de Análise e Desenvolvimento de Sistemas</strong> do Senac Santo Antônio de Jesus.</p>
      <p>Estamos aqui hoje para defender o nosso Projeto Integrador: o <strong>Connect Senac</strong>, desenvolvido sob a orientação do professor <strong>Deyson Santana</strong>.</p>
      <p>Não se trata apenas de um software acadêmico, mas de uma ferramenta construída para atender a uma necessidade real de gestão da nossa instituição."</p>
    `
  },
  {
    id: 2,
    title: "Slide 02 — 🎯 O Desafio do Projeto",
    heading: "🎯 O desafio do projeto",
    category: "Desafio",
    speaker: "Equipe ADS",
    targetTime: "2:30 min",
    keyQuote: "Criar uma ferramenta de gestão para os cursos de beleza do Senac.",
    script: `
      <div class="script-section-tag">O DESAFIO</div>
      <p>"Tudo começou com um desafio claro: <strong>Criar uma ferramenta de gestão para os cursos de beleza do Senac</strong>.</p>
      <p>Os laboratórios de estética e beleza demandam um tripé operacional diário: <strong>Gestão</strong> dos dados, <strong>Organização</strong> das bancadas e turmas, e <strong>Agendamento</strong> ágil dos modelos.</p>
      <p>Nosso propósito foi entregar <em>uma nova solução para uma necessidade real</em>."</p>
    `
  },
  {
    id: 3,
    title: "Slide 03 — 🤝 Entendendo o Problema",
    heading: "🤝 Entendendo o problema",
    category: "Diagnóstico",
    speaker: "Equipe ADS",
    targetTime: "3:00 min",
    keyQuote: "Briefing com a coordenadora Professora Zeneide — Ouvir quem vive o problema para criar uma solução que faça sentido.",
    script: `
      <div class="script-section-tag">ENTENDENDO O PROBLEMA</div>
      <p>"Para construir algo com propósito, realizamos um briefing presencial com a coordenadora dos cursos de beleza, a <strong>Professora Zeneide</strong>.</p>
      <p>Mapeamos os 4 públicos fundamentais: <strong>Gestão, Professores, Alunos e Modelos</strong>.</p>
      <p>O problema real não era o uso de papel, mas a fragmentação em canais soltos (WhatsApp), desorganização de horários e a falta de modelos confirmados, o que deixava alunos sem atividade prática."</p>
    `
  },
  {
    id: 4,
    title: "Slide 04 — 🤝 Do Problema ao Planejamento",
    heading: "🤝 Do problema ao planejamento",
    category: "Planejamento",
    speaker: "Equipe ADS",
    targetTime: "2:30 min",
    keyQuote: "Cada equipe, uma responsabilidade. Um projeto em conjunto.",
    script: `
      <div class="script-section-tag">PLANEJAMENTO ÁGIL</div>
      <p>"Com as dores diagnosticadas, estruturamos um pipeline metodológico ágil:</p>
      <p>1º <strong>Informações:</strong> Coleta e síntese das necessidades reais.<br>
      2º <strong>Requisitos:</strong> Definição das regras de negócio, conformidade LGPD e fluxos.<br>
      3º <strong>Divisão de Tarefas:</strong> Separação em frentes coordenadas de trabalho em equipe."</p>
    `
  },
  {
    id: 5,
    title: "Slide 05 — 🎨⚙️ Do Design à Funcionalidade",
    heading: "🎨⚙️ Do design à funcionalidade",
    category: "Construção",
    speaker: "Equipe ADS",
    targetTime: "3:00 min",
    keyQuote: "Duas frentes trabalhando juntas para criar uma boa experiência.",
    script: `
      <div class="script-section-tag">DESIGN × FUNCIONALIDADE</div>
      <p>"Dividimos nossa atuação técnica em duas frentes complementares:</p>
      <p>• <strong>🎨 EXPERIÊNCIA:</strong> Criação de Personas, Layouts intuitivos, Usabilidade em 3 cliques e respeito às necessidades de cada perfil de usuário.<br>
      • <strong>⚙️ FUNCIONALIDADE:</strong> Conexão segura entre telas, execução das regras de negócio, 100% responsivo e disponibilizado via web sem precisar baixar app.</p>
      <p>Uma aplicação pensada tanto para quem usa no celular quanto para quem gerencia no painel!"</p>
    `
  },
  {
    id: 6,
    title: "Slide 06 — 🚀 Aprendizado e Desenvolvimento",
    heading: "🚀 Aprendizado e desenvolvimento",
    category: "Pedagogia",
    speaker: "Equipe ADS",
    targetTime: "2:30 min",
    keyQuote: "Mais do que desenvolver um sistema, desenvolvemos nossas próprias competências!",
    script: `
      <div class="script-section-tag">MARCAS FORMATIVAS</div>
      <p>"Durante esses meses de imersão, exercitamos na prática as <strong>Marcas Formativas do Senac</strong>:</p>
      <p>• <strong>Trabalho em equipe:</strong> Comunicação e alinhamento interdisciplinar.<br>
      • <strong>Conhecimento técnico:</strong> Arquitetura de software, banco relacional e segurança.<br>
      • <strong>Habilidades:</strong> Resolução de problemas práticos sob mentoria do professor Deyson Santana.<br>
      • <strong>Ética e responsabilidade:</strong> Tratamento correto de dados da comunidade."</p>
    `
  },
  {
    id: 7,
    title: "Slide 07 — 🚀 Evolução até o Produto Final",
    heading: "🚀 Evolução até o produto final",
    category: "Jornada",
    speaker: "Equipe ADS",
    targetTime: "2:30 min",
    keyQuote: "Desenvolver, testar, ajustar e evoluir!",
    script: `
      <div class="script-section-tag">CICLO DE EVOLUÇÃO</div>
      <p>"Nossa jornada seguiu um ciclo iterativo contínuo:</p>
      <p><strong>Orientação ➔ Desenvolvimento ➔ Validação ➔ Produto Final</strong>.</p>
      <p>Contamos com o apoio constante de instrutores, geramos múltiplas versões, fizemos testes de usabilidade e documentamos cada etapa até chegar ao software pronto para operação."</p>
    `
  },
  {
    id: 8,
    title: "Slide 08 — ✨ O Resultado: Central de Operações",
    heading: "✨ O resultado: Connect Senac",
    category: "Painel Real",
    speaker: "Equipe ADS",
    targetTime: "3:30 min",
    keyQuote: "Da necessidade apresentada pela cliente a uma solução funcional!",
    script: `
      <div class="script-section-tag">CENTRAL DE OPERAÇÕES REAL</div>
      <p>"O Connect Senac entrega uma solução completa ancorada em uma tríade: <strong>Interface Intuitiva, Funcionalidades Reais e Gestão de Dados</strong>.</p>
      <p>A Central Administrativa opera 5 módulos fundamentais:<br>
      1. <strong>Visão Geral & Operação:</strong> Abertura instantânea de grade e contraindicações.<br>
      2. <strong>Gestão de Cursos:</strong> Catálogo de 8 procedimentos estéticos.<br>
      3. <strong>Usuários & Moderação:</strong> Conformidade legal com LGPD e Termos de Imagem.<br>
      4. <strong>Pautas Globais:</strong> Ocupação em tempo real de bancadas por turma.<br>
      5. <strong>Criar Colaborador:</strong> Perfis e níveis de permissão institucional."</p>
    `
  },
  {
    id: 9,
    title: "Slide 09 — 🎭 DO PROBLEMA À SOLUÇÃO",
    heading: "🎭 DO PROBLEMA À SOLUÇÃO",
    category: "Transição",
    speaker: "Equipe ADS",
    targetTime: "2:00 min",
    keyQuote: "🎬 Agora vamos mostrar na prática.",
    script: `
      <div class="script-section-tag">TRANSIÇÃO DRAMÁTICA</div>
      <p>"Para que todos sintam o real impacto dessa transformação, sintetizamos o contraste:</p>
      <p>• <strong>❌ ANTES:</strong> Agendamento fragmentado, escassez de modelos, informações dispersas e acompanhamento difícil.<br>
      • <strong>✅ DEPOIS:</strong> Organização total, conexão direta, gestão em tempo real e controle completo.</p>
      <p><em>Agora, convidamos a todos para verem essa diferença na prática!</em>"</p>
    `
  },
  {
    id: 10,
    title: "Slide 10 — 🔄 Antes × Depois",
    heading: "🔄 Antes × Depois",
    category: "Impacto",
    speaker: "Equipe ADS",
    targetTime: "3:00 min",
    keyQuote: "MAIS PRATICIDADE | ORGANIZAÇÃO | ACESSIBILIDADE",
    script: `
      <div class="script-section-tag">IMPACTO & EFICIÊNCIA</div>
      <p>"O contraste é nítido:</p>
      <p>Enquanto antes a falta de modelos gerava frustração, bancadas vazias e dados perdidos em mensagens soltas, hoje o <strong>Connect Senac</strong> proporciona maior alcance com captação web contínua, acessibilidade móvel, dados organizados e conformidade legal.</p>
      <p>Transformamos a incerteza em garantia de prática pedagógica para os nossos alunos."</p>
    `
  },
  {
    id: 11,
    title: "Slide 11 — 📱 DO PROJETO À SOLUÇÃO (TESTE AO VIVO)",
    heading: "✨ DO PROJETO À SOLUÇÃO",
    category: "Demonstração",
    speaker: "Equipe ADS",
    targetTime: "4:00 min",
    keyQuote: "Chegamos ao momento mais importante: ver a solução em ação!",
    script: `
      <div class="script-section-tag">PITCH DE DEMONSTRAÇÃO AO VIVO</div>
      <p><strong>Fala Oficial para a Banca Examinadora:</strong></p>
      <p>"Chegamos ao momento mais importante: ver a solução em ação. O Connect Senac não é apenas um conceito, é uma aplicação funcional pronta para o uso.</p>
      <p>Convidamos todos da banca e da plateia a apontarem suas câmeras para o <strong>QR Code agora mesmo na tela</strong>.</p>
      <p>Em menos de 30 segundos, vocês poderão navegar pelas vagas abertas, simular um agendamento e vivenciar a mesma facilidade que os clientes e a coordenação do Senac terão todos os dias.</p>
      <p><strong>Credenciais Oficiais de Teste:</strong><br>
      • <strong>Login:</strong> <code>teste@gmail.com</code><br>
      • <strong>Senha:</strong> <code>123456</code></p>
      <p>Agradecemos à coordenadora <strong>Professora Zeneide</strong>, ao professor e orientador <strong>Deyson Santana</strong> e a toda a banca examinadora. Ficamos à disposição para as perguntas!"</p>
    `
  }
];

/* =========================================================
   THREE.JS 3D PARTICLE MESH (DEEP TEAL SLOW TEXTURE)
   ========================================================= */
let scene, camera, renderer, particleMesh;

function initThreeBackground() {
  const canvas = document.getElementById('bg-canvas-3d');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create delicate geometry
  const particleCount = 120;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 800;
    positions[i + 1] = (Math.random() - 0.5) * 600;
    positions[i + 2] = (Math.random() - 0.5) * 400;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x00b4d8,
    size: 4,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending
  });

  particleMesh = new THREE.Points(geometry, material);
  scene.add(particleMesh);

  // Gentle animation loop
  function animateThree() {
    requestAnimationFrame(animateThree);
    if (particleMesh) {
      particleMesh.rotation.y += 0.0004;
      particleMesh.rotation.x += 0.0002;
    }
    renderer.render(scene, camera);
  }
  animateThree();

  window.addEventListener('resize', () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

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
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
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
   NAVIGATION & SLIDES ENGINE (11 SLIDES)
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

  // Dots navigation (11 dots)
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
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
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
      <span style="color: #94a3b8; font-size: 0.85rem; display: block; margin-top: 2px;">Tempo Estimado: ${nextSlideInfo.targetTime}</span>
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
  const timerEl = document.getElementById('presenter-timer');
  if (timerEl) timerEl.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function updateTimerButton() {
  const btn = document.getElementById('btn-timer-toggle');
  if (btn) {
    btn.innerHTML = PresentationState.timerIsRunning ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
  }
}

/* =========================================================
   GRID OVERVIEW THUMBNAILS (11 SLIDES)
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
      <div class="thumb-num">SLIDE ${slide.id < 10 ? '0' + slide.id : slide.id} • ${slide.category}</div>
      <div class="thumb-title">${slide.heading}</div>
    `;
    grid.appendChild(thumb);
  });
}

function updateGridOverviewHighlight() {
  const cards = document.querySelectorAll('.slide-thumb-card');
  cards.forEach((c, idx) => {
    if (idx + 1 === PresentationState.currentSlide) c.classList.add('active');
    else c.classList.remove('active');
  });
}

/* =========================================================
   MODAL CONTROLLERS & SHORTCUTS
   ========================================================= */
function openModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    if (modalId === 'modal-grid-overview') renderGridThumbnails();
    if (modalId === 'modal-presenter') {
      updatePresenterModal();
      if (!PresentationState.timerIsRunning && PresentationState.timerSeconds === 0) startPresenterTimer();
    }
  }
}

function openQrZoomModal() {
  openModal('modal-qr-zoom');
}

function triggerGrandFinaleConfetti() {
  playSound('slide');
  if (typeof confetti === 'function') {
    // Explosao Central
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f05a28', '#004a80', '#00b4d8', '#ffffff', '#ffd166']
    });
    // Canhoes laterais
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#f05a28', '#004a80', '#ffffff']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#00b4d8', '#ffd166', '#ffffff']
      });
    }, 250);
  } else {
    console.log('🎉 Parabéns Connect Senac!');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
}

function toggleAudio() {
  PresentationState.isMuted = !PresentationState.isMuted;
  const btn = document.getElementById('btn-audio-toggle');
  const toast = document.getElementById('audio-toast');

  if (btn) {
    btn.innerHTML = PresentationState.isMuted ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
  }
  if (toast) {
    toast.querySelector('span').textContent = PresentationState.isMuted ? 'Áudio Mutado' : 'Áudio Ativado';
    toast.querySelector('i').className = PresentationState.isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function toggleAutoplay() {
  PresentationState.isAutoplay = !PresentationState.isAutoplay;
  const btn = document.getElementById('btn-autoplay-toggle');

  if (PresentationState.isAutoplay) {
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Pausar</span>';
      btn.classList.add('active');
    }
    PresentationState.autoplayInterval = setInterval(() => nextSlide(), PresentationState.autoplayDelay);
  } else {
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Apresentar</span>';
      btn.classList.remove('active');
    }
    clearInterval(PresentationState.autoplayInterval);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  PresentationState.currentTheme = next;
}

/* =========================================================
   EVENT LISTENERS & KEYBOARD SHORTCUTS
   ========================================================= */
function setupEventListeners() {
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  const btnPresenter = document.getElementById('btn-presenter-mode');
  const btnQr = document.getElementById('btn-qr-modal');
  const btnGrid = document.getElementById('btn-grid-overview');
  const btnTheme = document.getElementById('btn-theme-toggle');
  const btnAudio = document.getElementById('btn-audio-toggle');
  const btnShortcuts = document.getElementById('btn-shortcuts');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnAutoplay = document.getElementById('btn-autoplay-toggle');

  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);
  if (btnPresenter) btnPresenter.addEventListener('click', () => openModal('modal-presenter'));
  if (btnQr) btnQr.addEventListener('click', () => openModal('modal-qr-zoom'));
  if (btnGrid) btnGrid.addEventListener('click', () => openModal('modal-grid-overview'));
  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
  if (btnAudio) btnAudio.addEventListener('click', toggleAudio);
  if (btnShortcuts) btnShortcuts.addEventListener('click', () => openModal('modal-shortcuts'));
  if (btnFullscreen) btnFullscreen.addEventListener('click', toggleFullscreen);
  if (btnAutoplay) btnAutoplay.addEventListener('click', toggleAutoplay);

  // Timer controls
  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  const btnTimerReset = document.getElementById('btn-timer-reset');
  if (btnTimerToggle) {
    btnTimerToggle.addEventListener('click', () => {
      if (PresentationState.timerIsRunning) pausePresenterTimer();
      else startPresenterTimer();
    });
  }
  if (btnTimerReset) btnTimerReset.addEventListener('click', resetPresenterTimer);

  // Dots click
  document.querySelectorAll('.dot-btn').forEach((dot) => {
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
        // Number keys 1-9 for direct slide navigation
        if (e.key >= '1' && e.key <= '9') {
          const num = parseInt(e.key, 10);
          if (num <= PresentationState.totalSlides) goToSlide(num);
        }
        break;
    }
  });

  // Mobile Touch Swipe
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;
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
  initThreeBackground();
  setupEventListeners();
  updateUIState();
});
