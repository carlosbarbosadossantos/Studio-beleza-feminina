/*
============================================================
STUDIO BELEZA FEMININA — CONFIGURAÇÃO PRINCIPAL
Landing page adaptada para @oficial_belezaa_feminina
============================================================
*/
const CONFIG = {
  brand: {
    name: "Studio Beleza Feminina",
    tagline: "Salão de Beleza • Campinas",
    pageTitle: "Studio Beleza Feminina | Salão de Beleza em Campinas",
    description: "Studio Beleza Feminina no Centro de Campinas. Cabelo, coloração, tratamentos, finalização e cuidados de beleza com agendamento pelo WhatsApp."
  },

  colors: {
    bg: "#12080e",
    bg2: "#1a0a14",
    surface: "#24101b",
    light: "#fff4fa",
    accent: "#f23898",
    accent2: "#ff81c5"
  },

  contact: {
    whatsapp: "5519998051391",
    whatsappMessage: "Olá, vi seu perfil no instagram e gostaria de mais informações por favor",
    instagram: "https://www.instagram.com/oficial_belezaa_feminina/",
    address: "Rua Barão de Jaguara, 936 — Sala 9B — Centro, Campinas/SP",
    mapEmbed: "https://www.google.com/maps?q=Rua%20Bar%C3%A3o%20de%20Jaguara%20936%20Campinas%20SP&output=embed"
  },

  hero: {
    eyebrow: "Beleza feminina no Centro de Campinas",
    title: "Seu cabelo, sua beleza, do seu jeito.",
    text: "Cortes, coloração, tratamentos e finalizações com atendimento próximo, cuidado em cada etapa e foco em um resultado que combine com você.",
    cta: "Agendar pelo WhatsApp",
    image: "https://lh3.googleusercontent.com/pPhh_9T1PJUvGQepX2_XiJ3mVKZ1EyZBe5ZdRhAanjs88SKaEc4IsnHYvd_HScv4WCfamEBGiZ1z0BS41HU3CC3x7R3f2znqN5c-SNYYUQ=w1000-rw",
    floatingImage1: "https://lh3.googleusercontent.com/Pf8q3iiBx1AI_W8E-5P-b3S--0Qtx-Aku1rVGNVP1Rf9vue0ikOvSunkWQpncCO7IWqAcTqfrzHhbVrSseC8cVBLATH3YGieuvAKW8CC=w700-rw",
    floatingImage2: "https://lh3.googleusercontent.com/nLG6auUYcNTfLSTpOkyfEU5_NVZfTPYRkyjj7_DGuwUgC4oLI9PPEh3bABjpIgtzZQpVHAPRiMTPi4ZvPvmlPmZJ73-UFI79tEYKFb7H-Q=w700-rw",
    floatingLabel: "Studio Beleza Feminina",
    floatingTitle: "Cuidado que valoriza você.",
    stats: [
      {value:"Campinas", label:"atendimento no Centro"},
      {value:"WhatsApp", label:"agendamento direto"},
      {value:"Real", label:"resultados do próprio Studio"}
    ]
  },

  marquee: [
    "Corte feminino",
    "Coloração & mechas",
    "Tratamentos capilares",
    "Escova & finalização",
    "Design de sobrancelhas",
    "Cuidado personalizado"
  ],

  servicesIntro: {
    title: "Cuidados para realçar sua beleza sem complicação.",
    text: "Uma seleção dos serviços que aparecem no trabalho do Studio. Para técnicas específicas, valores e disponibilidade, consulte diretamente pelo WhatsApp."
  },

  services: [
    {
      icon:"✂",
      title:"Corte feminino",
      text:"Cortes pensados para valorizar o formato do rosto, o movimento dos fios e o estilo de cada cliente."
    },
    {
      icon:"✦",
      title:"Coloração & mechas",
      text:"Transformações de cor, iluminação e acabamento com atenção ao resultado desejado e à aparência dos fios."
    },
    {
      icon:"◌",
      title:"Tratamentos capilares",
      text:"Cuidados para hidratação, maciez, brilho e manutenção da aparência saudável do cabelo."
    },
    {
      icon:"◇",
      title:"Escova & finalização",
      text:"Finalização para o dia a dia, ocasiões especiais ou para destacar corte, cor e movimento."
    },
    {
      icon:"⌁",
      title:"Design de sobrancelhas",
      text:"Cuidado do desenho das sobrancelhas para valorizar o olhar e manter um resultado harmonioso."
    },
    {
      icon:"♡",
      title:"Atendimento personalizado",
      text:"Converse com o Studio sobre o resultado que procura e receba orientação sobre o serviço mais adequado."
    }
  ],

  why: {
    title: "Um espaço para cuidar de você e sair se sentindo renovada.",
    text: "A página foi organizada para destacar o que realmente ajuda na decisão: trabalho real, localização, contato rápido e serviços fáceis de entender.",
    items: [
      {title:"Resultados reais", text:"A página utiliza imagens públicas do próprio Studio e de trabalhos já realizados."},
      {title:"Atendimento direto", text:"O contato leva para o WhatsApp, reduzindo etapas até o agendamento."},
      {title:"Localização central", text:"O Studio está no Centro de Campinas, na Rua Barão de Jaguara."},
      {title:"Serviços de beleza", text:"Cabelo e cuidados femininos reunidos em um atendimento próximo e prático."}
    ],
    metrics: [
      {label:"Agendamento", value:"Direto", text:"Conversa rápida pelo WhatsApp."},
      {label:"Localização", value:"Centro", text:"Campinas/SP."}
    ]
  },

  galleryIntro: {
    title: "Resultados reais do Studio.",
    text: "Cortes, cores, finalizações e cuidados registrados no próprio espaço."
  },

  gallery: [
    {
      image:"https://lh3.googleusercontent.com/pPhh_9T1PJUvGQepX2_XiJ3mVKZ1EyZBe5ZdRhAanjs88SKaEc4IsnHYvd_HScv4WCfamEBGiZ1z0BS41HU3CC3x7R3f2znqN5c-SNYYUQ=w1000-rw",
      title:"Cor & movimento",
      text:"Brilho, dimensão e acabamento.",
      tall:true
    },
    {
      image:"https://lh3.googleusercontent.com/Pf8q3iiBx1AI_W8E-5P-b3S--0Qtx-Aku1rVGNVP1Rf9vue0ikOvSunkWQpncCO7IWqAcTqfrzHhbVrSseC8cVBLATH3YGieuvAKW8CC=w900-rw",
      title:"Coloração",
      text:"Técnica aplicada com cuidado."
    },
    {
      image:"https://lh3.googleusercontent.com/Llb1aZJCU9J_N7_Y87vypeh9fANTeGe_0UEckpLvttqiuhdkD4tsYFyfjb4TEZhrqT-MyCwlYxWzZe_5QeUZLs1e140hBqISVniRI6BuBQ=w900-rw",
      title:"Corte & estilo",
      text:"Visual renovado com identidade."
    }
  ],

  about: {
    title:"Beleza feminina com atendimento próximo, no coração de Campinas.",
    text:"O Studio Beleza Feminina atende no Centro de Campinas e apresenta nas redes sociais trabalhos de cabelo, coloração, corte, finalização e outros cuidados de beleza. Aqui, o objetivo é facilitar seu contato e mostrar resultados reais antes do agendamento.",
    image:"https://lh3.googleusercontent.com/S5WZJhZBAsumWAr8fxSAlHIbIrXYzyuCPDTio0s1lEOGMPvSyDjCYkg0ZLC1QHY1CX2dz46D9-chM9lWF6GZ1l_aeVChdI9nkbxcOPu1Yg=w1000-rw",
    highlights:[
      {title:"Centro de Campinas", text:"Rua Barão de Jaguara, 936 — Sala 9B."},
      {title:"Contato simples", text:"Agendamento e dúvidas diretamente pelo WhatsApp."},
      {title:"Portfólio real", text:"Resultados e rotina disponíveis no Instagram do Studio."},
      {title:"Cuidado feminino", text:"Serviços voltados à beleza, cabelo e bem-estar."}
    ]
  },

  proofIntro: {
    title:"Tudo o que você precisa para decidir com mais segurança.",
    text:"Sem depoimentos inventados: a página direciona para canais reais do Studio e deixa as informações principais acessíveis."
  },

  proof:[
    {
      icon:"◎",
      title:"Instagram ativo",
      text:"Veja trabalhos, transformações e conteúdos publicados em @oficial_belezaa_feminina."
    },
    {
      icon:"✆",
      title:"WhatsApp direto",
      text:"Consulte valores, serviços e horários disponíveis sem formulários longos."
    },
    {
      icon:"⌖",
      title:"Endereço fácil de encontrar",
      text:"Atendimento no Centro de Campinas, próximo à rotina de quem circula pela região central."
    }
  ],

  showcase:{
    title:"Cores, cortes e acabamentos que valorizam seu estilo.",
    text:"Do cuidado no lavatório à finalização, o resultado ganha força quando técnica e atenção aos detalhes caminham juntas.",
    image1:"https://lh3.googleusercontent.com/dJPgYbO44AZeHpeiH0HM_rTtDARZxFrvOGjsQhCeMWhBxUUce5A1eZAOVrEAyaT9GuJoxpfT2JZw7cW50b3TJsD0ccgc7TpcZsX19tR__w=w900-rw",
    image2:"https://lh3.googleusercontent.com/dzBp-GXzgMGa7U0fwFJHpCfhaM-fZTjhQrqriIlc5XMNaOsWMPY4y7ZbHX9vzgVuIwBHkSrPXbBY1B6ZrEXCikgfDmsYkA5dHmPXWoUT=w900-rw"
  },

  faqIntro:{
    title:"Dúvidas antes de agendar?",
    text:"As respostas abaixo deixam o caminho mais rápido — e o WhatsApp fica disponível para confirmar os detalhes."
  },

  faq:[
    {q:"Como faço para agendar?", a:"Clique em qualquer botão de WhatsApp da página. A mensagem já será aberta para você consultar horários e informar o serviço desejado."},
    {q:"Onde fica o Studio?", a:"Rua Barão de Jaguara, 936 — Sala 9B — Centro, Campinas/SP."},
    {q:"Quais serviços estão disponíveis?", a:"O Studio divulga trabalhos de cabelo, coloração, corte, finalização e cuidados de beleza. Para confirmar uma técnica específica, consulte diretamente pelo WhatsApp."},
    {q:"Posso consultar valores antes?", a:"Sim. Envie o serviço que deseja pelo WhatsApp para confirmar valores, condições e disponibilidade."}
  ],

  contact:{
    title:"Seu próximo horário começa aqui.",
    text:"Conte o que você procura e abra uma mensagem pronta no WhatsApp do Studio Beleza Feminina."
  },

  footer:{
    text:"Beleza, cabelo e cuidado feminino em Campinas/SP."
  }
};

const $ = (id) => document.getElementById(id);

function setText(id, value){
  const el = $(id);
  if(el && value !== undefined) el.textContent = value;
}

function applyColors(){
  const root = document.documentElement;
  root.style.setProperty("--bg", CONFIG.colors.bg);
  root.style.setProperty("--bg-2", CONFIG.colors.bg2);
  root.style.setProperty("--surface", CONFIG.colors.surface);
  root.style.setProperty("--surface-soft", CONFIG.colors.light);
  root.style.setProperty("--accent", CONFIG.colors.accent);
  root.style.setProperty("--accent-2", CONFIG.colors.accent2);
}

function waLink(){
  return "https://wa.me/5519998051391?text=Ol%C3%A1,+vi+seu+perfil+no+instagram+e+gostaria+de+mais+informa%C3%A7%C3%B5es+por+favor";
}

function render(){
  applyColors();

  document.title = CONFIG.brand.pageTitle;
  $("pageDescription").setAttribute("content", CONFIG.brand.description);

  setText("brandName", CONFIG.brand.name);
  setText("brandTagline", CONFIG.brand.tagline);
  setText("footerBrand", CONFIG.brand.name);
  setText("footerText", CONFIG.footer.text);

  setText("heroEyebrow", CONFIG.hero.eyebrow);
  setText("heroTitle", CONFIG.hero.title);
  setText("heroText", CONFIG.hero.text);
  setText("heroCta", CONFIG.hero.cta);
  $("heroImage").src = CONFIG.hero.image;
  $("floatingImage1").src = CONFIG.hero.floatingImage1;
  $("floatingImage2").src = CONFIG.hero.floatingImage2;
  setText("floatingLabel", CONFIG.hero.floatingLabel);
  setText("floatingTitle", CONFIG.hero.floatingTitle);

  $("heroStats").innerHTML = CONFIG.hero.stats.map(s => `
    <div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>
  `).join("");

  const marqueeItems = [...CONFIG.marquee, ...CONFIG.marquee];
  $("marqueeTrack").innerHTML = marqueeItems.map(i => `<div class="marquee-item">${i}</div>`).join("");

  setText("servicesTitle", CONFIG.servicesIntro.title);
  setText("servicesText", CONFIG.servicesIntro.text);
  $("servicesGrid").innerHTML = CONFIG.services.map(s => `
    <article class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
      <a class="mini-link" href="#contato">Consultar horário →</a>
    </article>
  `).join("");

  setText("whyTitle", CONFIG.why.title);
  setText("whyText", CONFIG.why.text);
  $("whyList").innerHTML = CONFIG.why.items.map(i => `
    <div class="check-item">
      <div class="check-dot">✓</div>
      <div><strong>${i.title}</strong><span>${i.text}</span></div>
    </div>
  `).join("");
  setText("metric1Label", CONFIG.why.metrics[0].label);
  setText("metric1Value", CONFIG.why.metrics[0].value);
  setText("metric1Text", CONFIG.why.metrics[0].text);
  setText("metric2Label", CONFIG.why.metrics[1].label);
  setText("metric2Value", CONFIG.why.metrics[1].value);
  setText("metric2Text", CONFIG.why.metrics[1].text);

  setText("galleryTitle", CONFIG.galleryIntro.title);
  setText("galleryText", CONFIG.galleryIntro.text);
  $("galleryGrid").innerHTML = CONFIG.gallery.map(g => `
    <article class="gallery-card ${g.tall ? "tall" : ""} reveal">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-overlay"><strong>${g.title}</strong><span>${g.text}</span></div>
    </article>
  `).join("");

  setText("aboutTitle", CONFIG.about.title);
  setText("aboutText", CONFIG.about.text);
  $("aboutImage").src = CONFIG.about.image;
  $("aboutHighlights").innerHTML = CONFIG.about.highlights.map(h => `
    <div class="about-highlight"><strong>${h.title}</strong><span>${h.text}</span></div>
  `).join("");

  setText("testimonialsTitle", CONFIG.proofIntro.title);
  setText("testimonialsText", CONFIG.proofIntro.text);
  $("testimonialsGrid").innerHTML = CONFIG.proof.map(p => `
    <article class="testimonial-card proof-card reveal">
      <div class="proof-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </article>
  `).join("");

  setText("baTitle", CONFIG.showcase.title);
  setText("baText", CONFIG.showcase.text);
  $("beforeImage").src = CONFIG.showcase.image1;
  $("afterImage").src = CONFIG.showcase.image2;

  setText("faqTitle", CONFIG.faqIntro.title);
  setText("faqText", CONFIG.faqIntro.text);
  $("faqList").innerHTML = CONFIG.faq.map(f => `
    <div class="faq-item">
      <button class="faq-question" type="button">
        <span>${f.q}</span><span class="faq-plus">+</span>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join("");

  setText("contactTitle", CONFIG.contact.title);
  setText("contactText", CONFIG.contact.text);
  setText("addressText", CONFIG.contact.address);

  const links = ["headerWhatsapp","mobileWhatsapp","heroCta","aboutCta","contactWhatsapp","floatingWhatsapp"];
  links.forEach(id => $(id).href = waLink());
  $("instagramLink").href = CONFIG.contact.instagram;

  $("serviceSelect").innerHTML = `
    <option value="">Selecione</option>
    ${CONFIG.services.map(s => `<option value="${s.title}">${s.title}</option>`).join("")}
  `;

  if(CONFIG.contact.mapEmbed){
    $("mapFrame").src = CONFIG.contact.mapEmbed;
  }else{
    $("mapSection").style.display = "none";
  }

  setText("footerYear", `© ${new Date().getFullYear()} ${CONFIG.brand.name}`);

  observeReveals();
  bindFaq();
}

function bindFaq(){
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });
}

function observeReveals(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

$("menuBtn").addEventListener("click", () => {
  $("mobileMenu").classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
  $("mobileMenu").classList.remove("open");
  document.body.classList.remove("menu-open");
}));

$("leadForm").addEventListener("submit", e => {
  e.preventDefault();
  window.open(waLink(), "_blank");
});

const heroMedia = document.querySelector(".hero-media");
if(heroMedia){
  heroMedia.addEventListener("mousemove", e => {
    const rect = heroMedia.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;

    document.querySelectorAll(".parallax").forEach(el => {
      const depth = Number(el.dataset.depth || .5);
      el.style.translate = `${x * 18 * depth}px ${y * 18 * depth}px`;
    });
  });

  heroMedia.addEventListener("mouseleave", () => {
    document.querySelectorAll(".parallax").forEach(el => el.style.translate = "0 0");
  });
}

render();
