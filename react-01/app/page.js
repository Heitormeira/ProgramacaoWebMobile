import styles from "./page.module.css";

export default function Home() {
  const projects = [
    { title: "Plataforma Web E-commerce", desc: "Desenvolvimento de loja online com React e Next.js", tags: ["React", "Next.js", "Node.js"] },
    { title: "App Mobile de Gestão", desc: "Aplicação mobile para gerenciamento de tarefas", tags: ["React Native", "Firebase"] },
    { title: "Dashboard Analítico", desc: "Painél de análise de dados em tempo real", tags: ["React", "D3.js", "API REST"] },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "CSS3", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Databases"] },
    { category: "Ferramentas", items: ["Git", "Docker", "VS Code", "Figma"] },
  ];

  return (
    <main className={styles.page}>
      <nav className={styles.navbar} aria-label="Navegacao principal">
        <a className={styles.brand} href="#top" aria-label="Heitor Meira, inicio">
          <span className={styles.brandMark}>HM</span>
          <span>HEITOR MEIRA</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>
        <a className={styles.navAction} href="#contato">
          Fale comigo <span aria-hidden="true">→</span>
        </a>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> DESENVOLVIMENTO • INOVAÇÃO • QUALIDADE</p>
          <h1>
            Heitor Meira,<br />
            <em>Desenvolvedor Full Stack.</em>
          </h1>
          <p className={styles.lead}>
            Estudante da Universidade Católica de Pernambuco com paixão por criar soluções web modernas e inovadoras.
            Dedicado a transformar ideias em código e impacto real.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projetos">Veja meu trabalho <span aria-hidden="true">→</span></a>
            <a className={styles.textButton} href="#contato">Vamos colaborar <span aria-hidden="true">+</span></a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Painel visual de desenvolvimento">
          <div className={styles.visualGrid} />
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.visualCore}>
            <span className={styles.coreCaption}>UNICAP</span>
            <strong>HM</strong>
            <span className={styles.coreLine} />
            <span className={styles.coreCaption}>DEV</span>
          </div>
          <div className={styles.visualLabel}>01 <span>DESENVOLVENDO O FUTURO</span></div>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <strong>5+</strong>
          <span>Projetos<br />Completados</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>Tecnologias<br />Dominadas</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Dedicação<br />em Cada Projeto</span>
        </div>
        <p>Desenvolvedor com foco em criar experiências web excepcionais e resolver problemas complexos através da tecnologia.</p>
      </section>

      <section className={styles.about} id="sobre">
        <div>
          <h2>Sobre <span>Mim</span></h2>
        </div>
        <div>
          <p>
            Sou Heitor Meira, estudante de Desenvolvimento Web na Universidade Católica de Pernambuco.
            Apaixonado por tecnologia e inovação, busco constantemente ampliar meus conhecimentos em desenvolvimento full stack.
          </p>
          <p style={{ marginTop: '16px' }}>
            Tenho experiência com React, Next.js, Node.js e outras tecnologias modernas. Meu objetivo é criar
            soluções web de alta qualidade que fazem diferença. Quando não estou codificando, estou estudando novas tecnologias
            ou colaborando em projetos interessantes.
          </p>
        </div>
      </section>

      <section className={styles.projects} id="projetos">
        <div className={styles.projectsHeader}>
          <h2>Projetos <em>Recentes</em></h2>
          <p>Conheça alguns dos meus trabalhos mais relevantes</p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectNumber}>0{idx + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href="#" className={styles.projectLink}>Ver projeto →</a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.skills} id="habilidades">
        <h2>Habilidades <em>&amp; Tecnologias</em></h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3>{skill.category}</h3>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contato">
        <div>
          <h2>Vamos <em>Trabalhar Juntos</em></h2>
          <p className={styles.footerLead}>
            Estou aberto a novas oportunidades e colaborações. Entre em contato através dos links abaixo!
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="mailto:heitor@email.com" className={styles.circleLink} title="Email">
            ✉
          </a>
          <a href="https://linkedin.com" className={styles.circleLink} title="LinkedIn">
            in
          </a>
          <a href="https://github.com" className={styles.circleLink} title="GitHub">
            {'{}'}
          </a>
        </div>
        <div className={styles.footerMeta}>
          <span>© 2024 HEITOR MEIRA. Todos os direitos reservados.</span>
          <span>UNICAP • PERNAMBUCO • BRASIL</span>
        </div>
      </footer>
    </main>
  );
}
