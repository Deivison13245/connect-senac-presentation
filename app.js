/**
 * ====================================================================
 * CONNECT SENAC - INTERACTIVE 3D PRESENTATION SYSTEM
 * Core Engine: Three.js 3D Visualizer, Audio Synthesis,
 * Slide Controller, Presenter Mode, Simulator & UI Mechanics
 * ====================================================================
 */

// Global State
const PresentationState = {
  currentSlide: 1,
  totalSlides: 8,
  isAutoplay: false,
  autoplayInterval: null,
  autoplayDuration: 8000,
  audioEnabled: true,
  theme: 'light',
  presenterTimerSeconds: 0,
  presenterTimerInterval: null,
  presenterTimerRunning: false,
  selectedService: 'Secretaria Acadêmica',
  selectedSlot: '14:00'
};

// Slide Meta & Speaker Notes Data
const SlideData = [
  {
    index: 1,
    title: 'Capa Institucional',
    category: 'Abertura',
    speaker: 'Davi & Equipe',
    notes: '• <strong>Abertura Oficial:</strong> Cumprimentar a banca, docentes, colegas e o orientador Deyson Santana.<br>• <strong>Visão Geral:</strong> Apresentar o propósito do <em>Connect Senac</em> como a resposta definitiva para conectar os processos e as pessoas no ecossistema Senac.<br>• <strong>Destaque:</strong> Projeto Integrador do curso Técnico em Desenvolvimento de Sistemas (TDS).'
  },
  {
    index: 2,
    title: 'Problemática & Cenário Anterior',
    category: 'Diagnóstico',
    speaker: 'Deivison',
    notes: '• <strong>Diagnóstico:</strong> Evidenciar as dores reais do modelo tradicional (filas presenciais, papéis soltos, planilhas dispersas e dependência de funcionários/horário comercial).<br>• <strong>Impacto:</strong> 70% do tempo gasto em processos manuais e alto risco de ruído na comunicação.<br>• <strong>A Oportunidade:</strong> Digitalizar e integrar o atendimento em uma única plataforma moderna com disponibilidade contínua.'
  },
  {
    index: 3,
    title: 'Metodologia Senac & Práticas TDS',
    category: 'Pedagogia & Engenharia',
    speaker: 'Alan',
    notes: '• <strong>Pedagogia por Competências:</strong> Foco em desafios reais do mercado aplicados na prática.<br>• <strong>Engenharia de Software:</strong> Metodologias Ágeis (Scrum/Sprints) e boas práticas de Clean Code.<br>• <strong>Full Stack:</strong> Front-end responsivo, APIs robustas em Node.js e práticas DevOps de entrega contínua.'
  },
  {
    index: 4,
    title: 'Ideias Centrais & Visão do Projeto',
    category: 'Conceito & Arquitetura',
    speaker: 'Raigner',
    notes: '• <strong>Conexão Integrada:</strong> Unificar alunos, professores e coordenação em tempo real.<br>• <strong>Autonomia:</strong> Autosserviço inteligente acessível 24/7.<br>• <strong>3D Ecossistema:</strong> Demonstrar como a arquitetura em microsserviços interconecta todos os nós da instituição.'
  },
  {
    index: 5,
    title: 'A Plataforma Connect Senac & Suas Funções',
    category: 'Funcionalidades',
    speaker: 'Naldo',
    notes: '• <strong>Módulos Centrais:</strong><br>  1. <em>Agendamentos:</em> Gestão de horários com confirmação instantânea.<br>  2. <em>Painel do Aluno:</em> Histórico acadêmico e avisos em tempo real.<br>  3. <em>Painel Administrativo:</em> Gestão de fluxo de atendimento e métricas.<br>• <strong>Responsividade:</strong> Experiência mobile-first e desktop fluida.'
  },
  {
    index: 6,
    title: 'Solução das Dores & Geração de Valor',
    category: 'Comparativo',
    speaker: 'Davi & Alan',
    notes: '• <strong>Antes vs Depois:</strong> Comparação direta de impacto.<br>• <strong>Ganhos:</strong> Redução de 45 minutos de fila para menos de 2 minutos no app digital.<br>• <strong>Eficiência:</strong> +300% de agilidade operacional e 100% de transparência e segurança.'
  },
  {
    index: 7,
    title: 'Demonstração Prática & Vídeo',
    category: 'Experiência ao Vivo',
    speaker: 'Toda a Equipe',
    notes: '• <strong>Ao Vivo:</strong> Convidar os avaliadores a apontar a câmera do celular para o QR Code funcional.<br>• <strong>Vídeo Demonstrativo:</strong> Apresentar o pitch em vídeo no player ao lado exibindo a aplicação em funcionamento real.<br>• <strong>Autonomia:</strong> Testes em tempo real na palma da mão.'
  },
  {
    index: 8,
    title: 'Fechamento & Impacto Institucional',
    category: 'Conclusão',
    speaker: 'Davi & Toda a Equipe',
    notes: '• <strong>Legado do Projeto:</strong> Impacto institucional consolidado (redução de 85% nas filas, 99.4% de satisfação).<br>• <strong>Agradecimentos:</strong> Prof. Deyson Santana e Senac Pernambuco.<br>• <strong>Encerramento:</strong> Prontidão para o mercado e abertura para perguntas da banca.'
  }
];

/* ====================================================================
   WEB AUDIO API SYNTHESIZER (UI Sounds)
   ==================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playWhoosh() {
    if (!PresentationState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.18);
    } catch (e) {
      console.log('Audio note error:', e);
    }
  }

  playClick() {
    if (!PresentationState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playChime() {
    if (!PresentationState.audioEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.06);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.07, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  }
}

const Sound = new SoundEngine();

/* ====================================================================
   THREE.JS 3D BACKGROUND SYSTEM
   ==================================================================== */
class Global3DBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas-3d');
    if (!this.canvas) return;

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

    this.particles = null;
    this.polyhedra = [];
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.initParticles();
    this.initFloatingObjects();
    this.initLights();
    this.bindEvents();
    this.animate();
  }

  initParticles() {
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x004580);
    const colorOrange = new THREE.Color(0xf37021);
    const colorCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const mixedColor = Math.random() > 0.6 ? colorOrange : (Math.random() > 0.5 ? colorCyan : colorBlue);
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
      opacity: 0.55
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  initFloatingObjects() {
    const geometries = [
      new THREE.IcosahedronGeometry(4.5, 0),
      new THREE.DodecahedronGeometry(3.8, 0),
      new THREE.TorusGeometry(3.5, 1.2, 16, 32),
      new THREE.OctahedronGeometry(4, 0)
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x004580,
        metalness: 0.2,
        roughness: 0.3,
        transparent: true,
        opacity: 0.35,
        wireframe: true
      }),
      new THREE.MeshStandardMaterial({
        color: 0xf37021,
        metalness: 0.3,
        roughness: 0.2,
        transparent: true,
        opacity: 0.45,
        wireframe: true
      }),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.1,
        roughness: 0.4,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      })
    ];

    for (let i = 0; i < 6; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 140;
      mesh.position.y = (Math.random() - 0.5) * 90;
      mesh.position.z = (Math.random() - 0.5) * 50 - 20;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatOffset: Math.random() * Math.PI * 2
      };

      this.polyhedra.push(mesh);
      this.scene.add(mesh);
    }
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xf37021, 1.2);
    dirLight1.position.set(50, 40, 50);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x004580, 1.5);
    dirLight2.position.set(-50, -40, 30);
    this.scene.add(dirLight2);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    if (this.particles) {
      this.particles.rotation.y += 0.0008;
      this.particles.position.x = this.mouse.x * 6;
      this.particles.position.y = this.mouse.y * 6;
    }

    const time = performance.now();
    this.polyhedra.forEach((mesh) => {
      mesh.rotation.x += mesh.userData.rotSpeedX;
      mesh.rotation.y += mesh.userData.rotSpeedY;
      mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.03;
    });

    this.camera.position.x = this.mouse.x * 4;
    this.camera.position.y = this.mouse.y * 4;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

/* ====================================================================
   THREE.JS SLIDE 4 ECOSYSTEM 3D VISUALIZER
   ==================================================================== */
class Ecosystem3DVisualizer {
  constructor() {
    this.canvas = document.getElementById('ecosystem-canvas-3d');
    if (!this.canvas) return;

    this.container = document.getElementById('canvas-ecosystem-wrapper');
    this.width = this.container.clientWidth || 400;
    this.height = this.container.clientHeight || 280;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 18, 28);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1.2;
    this.controls.maxDistance = 45;
    this.controls.minDistance = 14;

    this.nodes = [];
    this.curves = [];
    this.dataPackets = [];

    this.initEcosystem();
    this.initLights();
    this.bindEvents();
    this.animate();
  }

  initEcosystem() {
    // Central Hub Node: Connect Senac Core
    const hubGeo = new THREE.CylinderGeometry(2.4, 2.4, 1.2, 32);
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0xf37021,
      metalness: 0.5,
      roughness: 0.2,
      emissive: 0xd6590f,
      emissiveIntensity: 0.4
    });
    const hubMesh = new THREE.Mesh(hubGeo, hubMat);
    hubMesh.position.set(0, 0, 0);
    this.scene.add(hubMesh);

    // Glowing Pulse Ring around Central Hub
    const ringGeo = new THREE.RingGeometry(3.2, 3.6, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf37021,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    this.scene.add(ringMesh);
    this.pulseRing = ringMesh;

    // Outer Satellite Nodes
    const satelliteConfig = [
      { name: 'Alunos', color: 0x0288d1, pos: [-10, 2, 4], size: 1.4 },
      { name: 'Docentes', color: 0x00bcd4, pos: [10, 3, -4], size: 1.4 },
      { name: 'Coordenação', color: 0x004580, pos: [6, 1, 9], size: 1.3 },
      { name: 'Cloud API', color: 0x10b981, pos: [-8, -2, -8], size: 1.5 },
      { name: 'Agendamentos', color: 0xff9533, pos: [-2, 4, 11], size: 1.2 }
    ];

    satelliteConfig.forEach((cfg) => {
      const nodeGeo = new THREE.SphereGeometry(cfg.size, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.3,
        metalness: 0.4,
        emissive: cfg.color,
        emissiveIntensity: 0.3
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      this.scene.add(nodeMesh);
      this.nodes.push(nodeMesh);

      // Connection Curve from Node to Hub
      const p1 = new THREE.Vector3(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      const pMid = new THREE.Vector3(cfg.pos[0] * 0.5, cfg.pos[1] + 2.5, cfg.pos[2] * 0.5);
      const p2 = new THREE.Vector3(0, 0.6, 0);

      const curve = new THREE.QuadraticBezierCurve3(p1, pMid, p2);
      this.curves.push(curve);

      const points = curve.getPoints(30);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.5
      });
      const line = new THREE.Line(lineGeo, lineMat);
      this.scene.add(line);

      // Animated Energy Packet
      const packetGeo = new THREE.SphereGeometry(0.35, 12, 12);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      this.scene.add(packet);

      this.dataPackets.push({
        mesh: packet,
        curve: curve,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.006
      });
    });
  }

  initLights() {
    const amb = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(amb);

    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(15, 20, 15);
    this.scene.add(dir);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.container) return;
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      if (this.width > 0 && this.height > 0) {
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.controls.update();

    if (this.pulseRing) {
      const scale = 1 + Math.sin(performance.now() * 0.004) * 0.15;
      this.pulseRing.scale.set(scale, scale, 1);
    }

    this.dataPackets.forEach((pkt) => {
      pkt.progress += pkt.speed;
      if (pkt.progress > 1) pkt.progress = 0;
      const pt = pkt.curve.getPoint(pkt.progress);
      pkt.mesh.position.set(pt.x, pt.y, pt.z);
    });

    this.renderer.render(this.scene, this.camera);
  }
}

/* ====================================================================
   PRESENTATION CONTROLLER & NAVIGATION
   ==================================================================== */
function goToSlide(targetSlide) {
  if (targetSlide < 1 || targetSlide > PresentationState.totalSlides) return;
  if (targetSlide === PresentationState.currentSlide) return;

  Sound.playWhoosh();

  const prevSlideEl = document.getElementById(`slide-${PresentationState.currentSlide}`);
  const nextSlideEl = document.getElementById(`slide-${targetSlide}`);

  if (prevSlideEl) {
    prevSlideEl.classList.remove('active');
    prevSlideEl.classList.add('prev');
    setTimeout(() => prevSlideEl.classList.remove('prev'), 500);
  }

  if (nextSlideEl) {
    nextSlideEl.scrollTop = 0;
    nextSlideEl.classList.add('active');
  }

  PresentationState.currentSlide = targetSlide;
  updateUIState();
  triggerSlideAnimations(targetSlide);
}

function nextSlide() {
  if (PresentationState.currentSlide < PresentationState.totalSlides) {
    goToSlide(PresentationState.currentSlide + 1);
  } else {
    goToSlide(1); // loop
  }
}

function prevSlide() {
  if (PresentationState.currentSlide > 1) {
    goToSlide(PresentationState.currentSlide - 1);
  }
}

function updateUIState() {
  const currentIdx = PresentationState.currentSlide;
  const currentData = SlideData[currentIdx - 1];

  // Header updates
  const headerBadge = document.getElementById('slide-badge-category');
  const headerTitle = document.getElementById('slide-header-title');
  if (headerBadge) headerBadge.innerText = currentData.category;
  if (headerTitle) headerTitle.innerText = currentData.title;

  // Dock updates
  const dockCounter = document.getElementById('dock-counter');
  const dockProgress = document.getElementById('dock-progress-fill');
  if (dockCounter) dockCounter.innerText = `0${currentIdx} / 0${PresentationState.totalSlides}`;
  if (dockProgress) {
    const pct = ((currentIdx) / PresentationState.totalSlides) * 100;
    dockProgress.style.width = `${pct}%`;
  }

  // Dots
  const dots = document.querySelectorAll('.dot-btn');
  dots.forEach((dot, idx) => {
    if (idx + 1 === currentIdx) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Presenter Modal Sync
  updatePresenterModalContent();
}

function triggerSlideAnimations(slideIndex) {
  // Animate numeric counters in active slide
  const activeSlide = document.getElementById(`slide-${slideIndex}`);
  if (!activeSlide) return;

  const countEls = activeSlide.querySelectorAll('[data-target]');
  countEls.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    let count = 0;
    const step = Math.ceil(target / 25);
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        el.innerText = target;
        clearInterval(timer);
      } else {
        el.innerText = count;
      }
    }, 25);
  });
}

/* ====================================================================
   CONFETTI CELEBRATIONS
   ==================================================================== */
function triggerConfettiReward() {
  Sound.playChime();
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#004580', '#f37021', '#10b981', '#38bdf8']
    });
  }
}

function triggerGrandFinaleConfetti() {
  Sound.playChime();
  if (typeof confetti === 'function') {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#004580', '#f37021', '#10b981', '#ffffff', '#ffb703'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}

/* ====================================================================
   QR CODE INITIALIZER
   ==================================================================== */
function initQRCode() {
  // Uses official functional QR code asset from user (assets/qrcode.png)
  const qrImg = document.getElementById('official-qr-image');
  if (qrImg) {
    qrImg.onerror = () => {
      console.warn('QR code asset loading fallback');
    };
  }
}

/* ====================================================================
   YOUTUBE VIDEO PLAYER CONTROLLER (SLIDE 7)
   ==================================================================== */
function parseYouTubeID(url) {
  if (!url) return '';
  const trimmed = url.trim();

  // Support shorts: youtube.com/shorts/VIDEO_ID
  const shortsMatch = trimmed.match(/(?:shorts\/)([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // Support standard, youtu.be, embed, watch?v=
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = trimmed.match(regExp);
  if (match && match[2] && match[2].length === 11) {
    return match[2];
  }

  // If raw 11-char ID is passed directly
  if (trimmed.length === 11 && !trimmed.includes('/') && !trimmed.includes('.')) {
    return trimmed;
  }
  return '';
}

function updateYouTubeVideo() {
  const input = document.getElementById('yt-url-input');
  const iframe = document.getElementById('yt-iframe');
  const placeholder = document.getElementById('yt-empty-placeholder');
  if (!input) return;

  const rawUrl = input.value;
  const videoId = parseYouTubeID(rawUrl);

  if (videoId) {
    localStorage.setItem('connect_senac_yt_url', rawUrl);
    if (iframe) {
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.classList.remove('hidden');
    }
    if (placeholder) {
      placeholder.style.display = 'none';
    }
    Sound.playChime();
  } else {
    alert('Por favor, insira um link ou ID válido do YouTube (ex: https://youtu.be/... ou https://www.youtube.com/watch?v=...)');
  }
}

function clearYouTubeVideo() {
  const input = document.getElementById('yt-url-input');
  const iframe = document.getElementById('yt-iframe');
  const placeholder = document.getElementById('yt-empty-placeholder');

  localStorage.removeItem('connect_senac_yt_url');
  if (input) input.value = '';
  if (iframe) {
    iframe.src = '';
    iframe.classList.add('hidden');
  }
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
  Sound.playClick();
}

function openYouTubeExternal() {
  const input = document.getElementById('yt-url-input');
  if (!input) return;
  const rawUrl = input.value.trim();
  const videoId = parseYouTubeID(rawUrl);
  if (videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  } else if (rawUrl.startsWith('http')) {
    window.open(rawUrl, '_blank');
  } else {
    alert('Insira um link do YouTube para abrir em nova aba.');
  }
}

function initYouTubePlayer() {
  const saved = localStorage.getItem('connect_senac_yt_url');
  if (saved) {
    const input = document.getElementById('yt-url-input');
    if (input) input.value = saved;
    updateYouTubeVideo();
  }
}

/* ====================================================================
   PRESENTER MODE & TIMER ENGINE
   ==================================================================== */
function updatePresenterModalContent() {
  const currentIdx = PresentationState.currentSlide;
  const currentData = SlideData[currentIdx - 1];
  const nextData = SlideData[currentIdx] || SlideData[0];

  const pCurTitle = document.getElementById('presenter-current-title');
  const pNextTitle = document.getElementById('presenter-next-title');
  const pSpeaker = document.getElementById('presenter-speaker-tag');
  const pNotes = document.getElementById('presenter-notes-text');
  const pCurPrev = document.getElementById('presenter-current-preview');
  const pNextPrev = document.getElementById('presenter-next-preview');

  if (pCurTitle) pCurTitle.innerText = `Slide ${currentIdx}: ${currentData.title}`;
  if (pNextTitle) pNextTitle.innerText = `Slide ${nextData.index}: ${nextData.title}`;
  if (pSpeaker) pSpeaker.innerText = currentData.speaker;
  if (pNotes) pNotes.innerHTML = currentData.notes;

  if (pCurPrev) {
    pCurPrev.innerHTML = `
      <div style="font-weight:700; color:var(--senac-blue-primary); margin-bottom:4px;">${currentData.title}</div>
      <div style="font-size:0.8rem; color:var(--text-secondary);">${currentData.category}</div>
    `;
  }

  if (pNextPrev) {
    pNextPrev.innerHTML = `
      <div style="font-weight:700; color:var(--senac-orange); margin-bottom:4px;">${nextData.title}</div>
      <div style="font-size:0.8rem; color:var(--text-secondary);">${nextData.category}</div>
    `;
  }
}

function startPresenterTimer() {
  if (PresentationState.presenterTimerRunning) return;
  PresentationState.presenterTimerRunning = true;
  PresentationState.presenterTimerInterval = setInterval(() => {
    PresentationState.presenterTimerSeconds++;
    renderPresenterTimer();
  }, 1000);
}

function pausePresenterTimer() {
  PresentationState.presenterTimerRunning = false;
  clearInterval(PresentationState.presenterTimerInterval);
}

function resetPresenterTimer() {
  pausePresenterTimer();
  PresentationState.presenterTimerSeconds = 0;
  renderPresenterTimer();
}

function renderPresenterTimer() {
  const timerEl = document.getElementById('presenter-timer');
  if (!timerEl) return;

  const total = PresentationState.presenterTimerSeconds;
  const hrs = Math.floor(total / 3600).toString().padStart(2, '0');
  const mins = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
  const secs = (total % 60).toString().padStart(2, '0');

  timerEl.innerText = `${hrs}:${mins}:${secs}`;
}

/* ====================================================================
   GRID OVERVIEW THUMBNAILS GENERATOR
   ==================================================================== */
function buildGridOverview() {
  const grid = document.getElementById('slides-thumbnail-grid');
  if (!grid) return;

  grid.innerHTML = '';
  SlideData.forEach((slide) => {
    const card = document.createElement('div');
    card.className = `slide-thumb-card ${slide.index === PresentationState.currentSlide ? 'active' : ''}`;
    card.innerHTML = `
      <div class="thumb-num">SLIDE 0${slide.index}</div>
      <div class="thumb-title">${slide.title}</div>
      <div class="thumb-category"><i class="fa-solid fa-tag"></i> ${slide.category}</div>
    `;
    card.onclick = () => {
      goToSlide(slide.index);
      closeAllModals();
    };
    grid.appendChild(card);
  });
}

/* ====================================================================
   MODAL CONTROLS
   ==================================================================== */
function toggleModal(modalId) {
  Sound.playClick();
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (modal.classList.contains('hidden')) {
    closeAllModals();
    modal.classList.remove('hidden');
    if (modalId === 'modal-presenter') {
      startPresenterTimer();
      updatePresenterModalContent();
    } else if (modalId === 'modal-grid-overview') {
      buildGridOverview();
    }
  } else {
    modal.classList.add('hidden');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
}

/* ====================================================================
   THEME & AUDIO TOGGLES
   ==================================================================== */
function toggleTheme() {
  Sound.playClick();
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  PresentationState.theme = next;

  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) {
    themeBtn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleAudio() {
  PresentationState.audioEnabled = !PresentationState.audioEnabled;
  Sound.playClick();

  const audioBtn = document.getElementById('btn-audio-toggle');
  const toast = document.getElementById('audio-toast');

  if (audioBtn) {
    audioBtn.innerHTML = PresentationState.audioEnabled
      ? '<i class="fa-solid fa-volume-high"></i>'
      : '<i class="fa-solid fa-volume-xmark"></i>';
  }

  if (toast) {
    toast.innerHTML = PresentationState.audioEnabled
      ? '<i class="fa-solid fa-volume-high"></i> <span>Áudio Ativado</span>'
      : '<i class="fa-solid fa-volume-xmark"></i> <span>Áudio Desativado</span>';
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
  }
}

function toggleFullscreen() {
  Sound.playClick();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function toggleAutoplay() {
  Sound.playClick();
  const btn = document.getElementById('btn-autoplay-toggle');

  if (PresentationState.isAutoplay) {
    clearInterval(PresentationState.autoplayInterval);
    PresentationState.isAutoplay = false;
    if (btn) {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Apresentar</span>';
    }
  } else {
    PresentationState.isAutoplay = true;
    PresentationState.autoplayInterval = setInterval(() => {
      nextSlide();
    }, PresentationState.autoplayDuration);
    if (btn) {
      btn.classList.add('playing');
      btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Pausar</span>';
    }
  }
}

/* ====================================================================
   KEYBOARD SHORTCUTS & EVENT LISTENERS
   ==================================================================== */
function setupEventListeners() {
  // Start button on Hero
  const startBtn = document.getElementById('btn-start-presentation');
  if (startBtn) {
    startBtn.onclick = () => goToSlide(2);
  }

  // Navigation dock buttons
  const prevBtn = document.getElementById('btn-prev-slide');
  const nextBtn = document.getElementById('btn-next-slide');
  if (prevBtn) prevBtn.onclick = () => prevSlide();
  if (nextBtn) nextBtn.onclick = () => nextSlide();

  // Dots
  const dots = document.querySelectorAll('.dot-btn');
  dots.forEach((dot) => {
    dot.onclick = () => {
      const target = parseInt(dot.getAttribute('data-slide'), 10);
      goToSlide(target);
    };
  });

  // Top Action Buttons
  const themeBtn = document.getElementById('btn-theme-toggle');
  if (themeBtn) themeBtn.onclick = toggleTheme;

  const audioBtn = document.getElementById('btn-audio-toggle');
  if (audioBtn) audioBtn.onclick = toggleAudio;

  const gridBtn = document.getElementById('btn-grid-overview');
  if (gridBtn) gridBtn.onclick = () => toggleModal('modal-grid-overview');

  const presBtn = document.getElementById('btn-presenter-mode');
  if (presBtn) presBtn.onclick = () => toggleModal('modal-presenter');

  const shortBtn = document.getElementById('btn-shortcuts');
  if (shortBtn) shortBtn.onclick = () => toggleModal('modal-shortcuts');

  const fullBtn = document.getElementById('btn-fullscreen');
  if (fullBtn) fullBtn.onclick = toggleFullscreen;

  const autoBtn = document.getElementById('btn-autoplay-toggle');
  if (autoBtn) autoBtn.onclick = toggleAutoplay;

  // Modal close buttons
  const closeGrid = document.getElementById('btn-close-grid-modal');
  if (closeGrid) closeGrid.onclick = closeAllModals;

  const closePres = document.getElementById('btn-close-presenter-modal');
  if (closePres) closePres.onclick = closeAllModals;

  const closeShort = document.getElementById('btn-close-shortcuts-modal');
  if (closeShort) closeShort.onclick = closeAllModals;

  // Presenter Timer actions
  const timerToggle = document.getElementById('btn-timer-toggle');
  if (timerToggle) {
    timerToggle.onclick = () => {
      if (PresentationState.presenterTimerRunning) {
        pausePresenterTimer();
        timerToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        startPresenterTimer();
        timerToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    };
  }
  const timerReset = document.getElementById('btn-timer-reset');
  if (timerReset) timerReset.onclick = resetPresenterTimer;

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Ignore when inside input
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case 'd':
      case 'D':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'a':
      case 'A':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(1);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(PresentationState.totalSlides);
        break;

      case 'f':
      case 'F':
        toggleFullscreen();
        break;

      case 'p':
      case 'P':
        toggleModal('modal-presenter');
        break;

      case 'g':
      case 'G':
        toggleModal('modal-grid-overview');
        break;

      case 't':
      case 'T':
        toggleTheme();
        break;

      case 'm':
      case 'M':
        toggleAudio();
        break;

      case '?':
        toggleModal('modal-shortcuts');
        break;

      case 'Escape':
        closeAllModals();
        break;

      default:
        // Number keys 1-9
        if (e.key >= '1' && e.key <= '9') {
          const num = parseInt(e.key, 10);
          if (num <= PresentationState.totalSlides) {
            goToSlide(num);
          }
        }
        break;
    }
  });

  // Touch Swipe Navigation (Horizontal Swipe Only)
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

      // Only navigate if horizontal movement is dominant and meets threshold
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
        if (deltaX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  }, { passive: true });
}

/* ====================================================================
   INITIALIZATION ON DOM LOAD
   ==================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  // Initialize 3D Systems
  new Global3DBackground();
  new Ecosystem3DVisualizer();

  // Initialize QR Code
  initQRCode();

  // Initialize YouTube Video Player if URL is saved
  initYouTubePlayer();

  // Setup Event Listeners
  setupEventListeners();

  // Update UI to initial slide
  updateUIState();
  triggerSlideAnimations(1);

  // Initialize Vanilla Tilt on premium cards if available
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.15
    });
  }
});
