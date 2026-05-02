import { useState, useEffect } from "react";
import { Icon } from "./icons.jsx";

const WHATSAPP_URL =
  "https://wa.me/5511996270946?text=Ol%C3%A1%2C%20vamos%20conversar%3F";
const PHONE_DISPLAY = "(11) 99627-0946";
const EMAIL = "minharrosabrina@gmail.com";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = ["inicio", "areas", "diferenciais", "equipe", "blog", "contato"];
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
    ["equipe", "Equipe"],
    ["blog", "Notícias"],
    ["contato", "Contato"],
  ];

  return (
    <header className={"site-header " + (scrolled ? "scrolled" : "")}>
      <a className="brand" href="#inicio">
        <img src="/assets/logo-full-azul-tight.png" alt="MHDA Advocacia" />
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
        <Icon.whatsapp size={14} />
        Vamos conversar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-eyebrow-row reveal">
          <span>Advocacia para pessoa física</span>
          <span className="vr"></span>
          <span className="meta">Cível · Trabalhista · Previdenciário</span>
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
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Vamos conversar <Icon.arrow size={14} />
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
          <span>Cível</span>
          <span>Trabalhista</span>
          <span>Previdenciário</span>
        </div>
        <span className="terra">Atendimento presencial e online</span>
      </div>
    </div>
  );
}

const AREAS = [
  {
    icon: Icon.scale,
    title: "Direito Cível",
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
    body: "Aposentadoria por idade, tempo, invalidez, pensão por morte e revisão de benefícios do INSS.",
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
  { n: "04", title: "Atendimento próximo", body: "Presencial em Jundiaí ou por videochamada — onde for melhor para você. Resposta em até um dia útil." },
];

function Pillars() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Por que MHDA</p>
          <h2>Um escritório pequeno, dedicado a poucos casos por vez.</h2>
          <p>
            A MHDA foi pensada para o cliente individual — o trabalhador, o aposentado, a família que precisa resolver uma questão importante. Acreditamos que advocacia se faz com tempo e atenção, não em escala.
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

function Team() {
  return (
    <section className="section" id="equipe">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Advogada responsável</p>
          <h2>Quem responde pelo seu caso.</h2>
          <p>
            Atendimento direto, sem intermediários. Você sabe o nome, o e-mail e o telefone de quem cuida do seu processo do início ao fim.
          </p>
        </div>
        <div className="team-solo reveal">
          <div className="team-photo">
            <div className="ph">SM</div>
          </div>
          <div className="team-bio">
            <h4>Sabrina Minharro de Amorim</h4>
            <p className="role">Advogada responsável · Cível, Trabalhista e Previdenciário</p>
            <p className="oab">OAB/SP 385.279</p>
            <p className="bio">
              Sabrina atua no atendimento direto a pessoas físicas, com prática consolidada nas três áreas de atuação do escritório. Conduz pessoalmente cada caso — do primeiro contato à decisão final — privilegiando linguagem clara, prazos honestos e um trato próximo com o cliente.
            </p>
            <p className="bio">Atende presencialmente em Jundiaí e por videochamada para clientes de outras cidades.</p>
            <div className="team-contact">
              <a href="https://wa.me/5511996270946">{PHONE_DISPLAY}</a>
              <span className="sep">·</span>
              <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            </div>
          </div>
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
    area: "Cível",
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
    "https://www.openstreetmap.org/export/embed.html?bbox=-46.8985%2C-23.1965%2C-46.8845%2C-23.1855&layer=mapnik&marker=-23.191%2C-46.8915";
  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Localização</p>
          <h2>Onde nos encontrar.</h2>
          <p>
            Atendimento presencial em Jundiaí, com agenda marcada. Para clientes de outras cidades, oferecemos atendimento por videochamada.
          </p>
        </div>
        <div className="location-grid">
          <div className="location-info reveal">
            <dl>
              <dt>Endereço</dt>
              <dd>
                Avenida Vitorio Baradel, 445<br />
                Jundiaí — SP
              </dd>
              <dt>Telefone / WhatsApp</dt>
              <dd>
                <a href="https://wa.me/5511996270946">{PHONE_DISPLAY}</a>
              </dd>
              <dt>E-mail</dt>
              <dd>
                <a href={"mailto:" + EMAIL}>{EMAIL}</a>
              </dd>
              <dt>Atendimento</dt>
              <dd>
                Segunda a sexta, 9h às 18h<br />
                <span className="small">Sábados sob agendamento prévio</span>
              </dd>
            </dl>
          </div>
          <div className="map-wrap reveal">
            <iframe
              src={mapSrc}
              title="Mapa — Av. Vitorio Baradel, 445, Jundiaí"
              loading="lazy"
            ></iframe>
            <div className="map-overlay">
              <strong>MHDA Advocacia</strong>
              <span>
                Av. Vitorio Baradel, 445<br />
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
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="section section-dark" id="contato" style={{ background: "var(--navy-900)" }}>
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Contato</p>
          <h2>A primeira consulta é sem compromisso.</h2>
          <p style={{ color: "rgba(244,241,235,0.7)" }}>
            Conte rapidamente o seu caso. Respondemos em até um dia útil — pessoalmente, por telefone ou por videochamada.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <dl>
              <dt>Endereço</dt>
              <dd>
                Avenida Vitorio Baradel, 445<br />
                Jundiaí — SP
              </dd>
              <dt>WhatsApp</dt>
              <dd>
                <a href="https://wa.me/5511996270946">{PHONE_DISPLAY}</a>
              </dd>
              <dt>E-mail</dt>
              <dd>
                <a href={"mailto:" + EMAIL}>{EMAIL}</a>
              </dd>
              <dt>Atendimento</dt>
              <dd>Segunda a sexta, 9h às 18h</dd>
              <dt>OAB</dt>
              <dd>OAB/SP 385.279</dd>
            </dl>
          </div>
          <form className="contact-form reveal" onSubmit={onSubmit}>
            <h3>Envie sua mensagem</h3>
            <div className="row2">
              <div className="field">
                <label>Nome</label>
                <input placeholder="Seu nome completo" />
              </div>
              <div className="field">
                <label>Telefone</label>
                <input placeholder="(11) 9 0000-0000" />
              </div>
            </div>
            <div className="field">
              <label>E-mail</label>
              <input type="email" placeholder="seuemail@email.com" />
            </div>
            <div className="field">
              <label>Área</label>
              <select>
                <option>Trabalhista</option>
                <option>Previdenciário</option>
                <option>Cível</option>
                <option>Não tenho certeza</option>
              </select>
            </div>
            <div className="field">
              <label>Como podemos ajudar?</label>
              <textarea rows="4" placeholder="Descreva brevemente seu caso. Tudo o que você compartilhar é confidencial."></textarea>
            </div>
            <button className="btn btn-accent" type="submit" disabled={sent}>
              {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
            </button>
            <p className="form-note">
              Ao enviar, você concorda com nossa política de privacidade. Suas informações são confidenciais.
            </p>
          </form>
        </div>
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
              Advocacia para pessoas, não para processos. Atuação em direito cível, trabalhista e previdenciário.
            </p>
          </div>
          <div className="footer-col">
            <h5>Áreas</h5>
            <ul>
              <li><a href="#areas">Cível</a></li>
              <li><a href="#areas">Trabalhista</a></li>
              <li><a href="#areas">Previdenciário</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Escritório</h5>
            <ul>
              <li><a href="#diferenciais">Sobre</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#blog">Notícias</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li><a href="https://wa.me/5511996270946">{PHONE_DISPLAY}</a></li>
              <li><a href={"mailto:" + EMAIL}>{EMAIL}</a></li>
              <li><a>Av. Vitorio Baradel, 445 — Jundiaí/SP</a></li>
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
      aria-label="Conversar pelo WhatsApp"
    >
      <Icon.whatsapp size={22} />
      <span className="label">Vamos conversar</span>
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
      <Team />
      <Blog />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
