import { useState, useEffect } from "react";
import { Icon } from "./icons.jsx";

const WHATSAPP_URL =
  "https://wa.me/5511967075293?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";
const WHATSAPP_HREF = "https://wa.me/5511967075293";
const PHONE_DISPLAY = "(11) 96707-5293";
const EMAIL = "minharrosabrina@gmail.com";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = ["inicio", "areas", "diferenciais", "blog", "contato"];
      const y = window.scrollY + 140;
      let cur = "inicio";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["inicio", "Início"],
    ["areas", "Áreas"],
    ["diferenciais", "Sobre"],
    ["blog", "Notícias"],
    ["contato", "Contato"],
  ];

  return (
    <header className={"site-header " + (scrolled ? "scrolled" : "")}>
      <a className="brand" href="#inicio">
        <img src="/assets/logo-full-light-tight.png" alt="MHDA Advocacia" />
      </a>
      <nav>
        <ul>
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={"#" + id} className={active === id ? "active" : ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <Icon.whatsapp size={16} />
        <span className="cta-label">Falar com um advogado</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-eyebrow-row reveal">
          <span>Escritório de advocacia</span>
          <span className="vr"></span>
          <span className="meta">Civil · Trabalhista · Previdenciário</span>
        </div>
        <h1 className="reveal">
          Defesa séria, no momento <em>em que você</em> mais precisa
          <span className="dot">.</span>
        </h1>
        <div className="hero-foot reveal">
          <p className="lead">
            Atuamos no que afeta a vida das pessoas — trabalho, família, aposentadoria — com a atenção integral de um advogado responsável, do primeiro contato à decisão final.
          </p>
          <div className="hero-actions">
            <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Icon.whatsapp size={18} />
              Falar com um advogado
            </a>
            <a className="btn btn-ghost" href="#areas">
              Conhecer áreas →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarBand() {
  return (
    <div className="bar-band">
      <div className="container">
        <div className="group">
          <span>Civil</span>
          <span>Trabalhista</span>
          <span>Previdenciário</span>
        </div>
        <span className="terra highlight">
          Atendimento em todo o Brasil — presencial e online
        </span>
      </div>
    </div>
  );
}

const AREAS = [
  {
    icon: Icon.scale,
    title: "Direito Civil",
    body: "Contratos, responsabilidade civil, indenizações, direito do consumidor e questões de família.",
  },
  {
    icon: Icon.briefcase,
    title: "Direito Trabalhista",
    body: "Rescisão, verbas devidas, assédio moral, reconhecimento de vínculo e horas extras não pagas.",
  },
  {
    icon: Icon.clock,
    title: "Direito Previdenciário",
    body: "Aposentadoria por idade, tempo e invalidez, salário maternidade, pensão por morte, planejamento previdenciário e revisão de benefícios do INSS.",
  },
];

function Areas() {
  return (
    <section className="section section-alt" id="areas">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Áreas de atuação</p>
          <h2>Três frentes, uma forma de trabalhar.</h2>
          <p>
            Cada caso é conduzido por um advogado responsável que acompanha o processo do início ao fim. Nada de transferências, nada de "minha equipe entra em contato".
          </p>
        </div>
        <div className="areas-grid">
          {AREAS.map((a, i) => (
            <article key={a.title} className="area-card reveal" style={{ transitionDelay: i * 80 + "ms" }}>
              <div className="icon">
                <a.icon size={32} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <span className="more">Saiba mais</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { n: "01", title: "Atenção integral", body: "Você fala diretamente com o advogado responsável pelo seu caso, do primeiro contato ao desfecho." },
  { n: "02", title: "Linguagem que se entende", body: "Sem juridiquês desnecessário. Explicamos o passo a passo, os prazos e o que esperar de cada decisão." },
  { n: "03", title: "Honorários claros", body: "Tudo combinado por escrito antes de começar. Sem taxas surpresa, sem cobranças inesperadas." },
  { n: "04", title: "Atendimento próximo", body: "Presencial em Jundiaí ou por videochamada — onde for melhor para você." },
];

function Pillars() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Por que MHDA</p>
          <h2>Um escritório com excelência técnica e atendimento humanizado.</h2>
          <p>
            Cada caso recebe a mesma atenção: análise técnica rigorosa, comunicação direta com o cliente e acompanhamento próximo do início ao fim.
          </p>
        </div>
        <div className="pillars-grid reveal">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.n}>
              <div className="num">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote-band">
      <blockquote className="reveal">
        Advocacia para pessoas, não para processos.
        <cite>Manifesto MHDA</cite>
      </blockquote>
    </section>
  );
}

const TESTIMONIALS = [
  { quote: "Fui muito bem orientada do começo ao fim. Pela primeira vez senti que tinha alguém realmente do meu lado.", who: "Cláudia R.", role: "Caso trabalhista" },
  { quote: "Levei dois anos tentando resolver minha aposentadoria por conta própria. Em poucos meses eles concluíram tudo.", who: "José A.", role: "Aposentadoria por tempo de contribuição" },
  { quote: "A clareza no atendimento fez diferença. Sempre soube em que pé estava o processo, sem precisar ficar cobrando.", who: "Mariana F.", role: "Ação de família" },
];

function Testimonials() {
  return (
    <section className="section section-alt" id="depoimentos">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Depoimentos</p>
          <h2>O que nossos clientes dizem.</h2>
          <p>Casos reais, atendidos pela equipe. Identificamos apenas o primeiro nome para preservar a privacidade.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial reveal" style={{ transitionDelay: i * 80 + "ms" }}>
              <p>"{t.quote}"</p>
              <div className="who">
                <strong>{t.who}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const POSTS = [
  {
    area: "Previdenciário",
    date: "18 abr 2026",
    cover: "cover-1",
    glyph: Icon.shieldCheck,
    title: "Revisão da vida toda: o que mudou após a decisão do STF em 2025",
    excerpt: "Entenda quem ainda pode pedir a revisão e quais documentos reunir antes de procurar um advogado.",
  },
  {
    area: "Trabalhista",
    date: "02 abr 2026",
    cover: "cover-2",
    glyph: Icon.feather,
    title: "Acordo extrajudicial trabalhista: quando vale a pena aceitar",
    excerpt: "Nem toda proposta da empresa é desvantajosa — mas há armadilhas comuns que custam caro depois.",
  },
  {
    area: "Civil",
    date: "21 mar 2026",
    cover: "cover-3",
    glyph: Icon.book,
    title: "Direito do consumidor: o que fazer quando a compra online não chega",
    excerpt: "Prazos do CDC, evidências que precisam ser guardadas e o caminho do PROCON antes da ação judicial.",
  },
];

function Blog() {
  return (
    <section className="section section-alt" id="blog">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Notícias e artigos</p>
          <h2>Material para entender melhor seus direitos.</h2>
          <p>Atualizações importantes, decisões recentes dos tribunais e guias práticos sobre as áreas em que atuamos.</p>
        </div>
        <div className="blog-grid">
          {POSTS.map((p, i) => (
            <article key={p.title} className="post reveal" style={{ transitionDelay: i * 80 + "ms" }}>
              <div className={"post-cover " + p.cover}>
                <div className="glyph">
                  <p.glyph size={64} />
                </div>
              </div>
              <div className="post-meta">
                <span>{p.area}</span>
                <span className="dot"></span>
                <span className="date">{p.date}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.4797670286341!2d-46.857779624432965!3d-23.246031963074092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf20571ee8e8ed%3A0xbf0ce6805a8a8459!2sAv.%20Vict%C3%B3rio%20Baradel%2C%20445%20-%20Jardim%20Santa%20Gertrudes%2C%20Jundia%C3%AD%20-%20SP%2C%2013205-260!5e0!3m2!1spt-BR!2sbr!4v1777772488567!5m2!1spt-BR!2sbr";
  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Localização</p>
          <h2>Atuação nacional, com escritório em Jundiaí.</h2>
          <p>
            Atendimento presencial em Jundiaí com agenda marcada e <strong>atuação em todo o Brasil por videochamada</strong>. A mesma proximidade e cuidado, em qualquer cidade.
          </p>
        </div>
        <div className="location-grid">
          <div className="location-info reveal">
            <dl>
              <dt>Endereço</dt>
              <dd>
                Avenida Victório Baradel, 445<br />
                Jundiaí — SP
              </dd>
              <dt>Atendimento online</dt>
              <dd><strong>Em todo o Brasil, por videochamada</strong></dd>
              <dt>Telefone / WhatsApp</dt>
              <dd>
                <a href={WHATSAPP_HREF}>{PHONE_DISPLAY}</a>
              </dd>
              <dt>E-mail</dt>
              <dd>
                <a href={"mailto:" + EMAIL}>{EMAIL}</a>
              </dd>
              <dt>Horário</dt>
              <dd>
                Segunda a sexta, 9h às 18h<br />
                <span className="small">Sábados sob agendamento prévio</span>
              </dd>
            </dl>
          </div>
          <div className="map-wrap reveal">
            <iframe
              src={mapSrc}
              title="Mapa — Av. Victório Baradel, 445, Jundiaí"
              loading="lazy"
            ></iframe>
            <div className="map-overlay">
              <strong>MHDA Advocacia</strong>
              <span>
                Av. Victório Baradel, 445<br />
                Jundiaí — SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <div className="contact-hero reveal">
          <p className="eyebrow">Contato</p>
          <h2>Fale com um advogado.</h2>
          <p className="contact-lead">
            Conte rapidamente o seu caso pelo WhatsApp. Atendemos pessoalmente em Jundiaí, por telefone ou por videochamada — onde for melhor para você.
          </p>
          <a className="btn btn-whatsapp btn-whatsapp-big" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Icon.whatsapp size={24} />
            Falar com um advogado
          </a>
          <p className="contact-phone">
            <span className="hero-reply-dot" />
            <a href={WHATSAPP_HREF}>{PHONE_DISPLAY}</a>
          </p>
        </div>

        <div className="contact-channels reveal">
          <div className="channel">
            <p className="channel-label">Endereço</p>
            <p className="channel-value">
              Avenida Victório Baradel, 445<br />
              Jundiaí — SP
            </p>
          </div>
          <div className="channel">
            <p className="channel-label">E-mail</p>
            <p className="channel-value">
              <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            </p>
          </div>
          <div className="channel">
            <p className="channel-label">Horário</p>
            <p className="channel-value">
              Segunda a sexta<br />
              9h às 18h
            </p>
          </div>
          <div className="channel">
            <p className="channel-label">OAB</p>
            <p className="channel-value">OAB/SP 385.279</p>
          </div>
        </div>

        <p className="contact-national reveal">
          <strong>Atendimento online em todo o Brasil</strong>
          <span> — clientes de qualquer cidade são atendidos por videochamada com a mesma proximidade do presencial.</span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/logo-full-light-tight.png" alt="MHDA Advocacia" />
            <p>
              Advocacia para pessoas, não para processos. Atuação em direito civil, trabalhista e previdenciário em todo o Brasil.
            </p>
          </div>
          <div className="footer-col">
            <h5>Áreas</h5>
            <ul>
              <li><a href="#areas">Civil</a></li>
              <li><a href="#areas">Trabalhista</a></li>
              <li><a href="#areas">Previdenciário</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Escritório</h5>
            <ul>
              <li><a href="#diferenciais">Sobre</a></li>
              <li><a href="#blog">Notícias</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li><a href={WHATSAPP_HREF}>{PHONE_DISPLAY}</a></li>
              <li><a href={"mailto:" + EMAIL}>{EMAIL}</a></li>
              <li><a>Av. Victório Baradel, 445 — Jundiaí/SP</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Minharro de Amorim Advocacia · OAB/SP 385.279</span>
          <span className="ethics">
            Em conformidade com o Provimento 205/2021 do CFOAB · Política de Privacidade · LGPD
          </span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      className="wa-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um advogado pelo WhatsApp"
    >
      <span className="wa-fab-icon">
        <Icon.whatsapp size={30} />
      </span>
      <span className="wa-fab-text">
        <span className="wa-fab-strong">Falar com um advogado</span>
      </span>
    </a>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <Hero />
      <BarBand />
      <Areas />
      <Pillars />
      <Quote />
      <Testimonials />
      <Blog />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
