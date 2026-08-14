import styles from "./page.module.css";

export default function Home() {
  const projects = [
    {
      title: "Sistema de Gerenciamento de Pedidos",
      tech: "Java",
      description: "Aplicação para gerenciamento de pedidos com POO",
      details: [
        "Desenvolvimento de uma aplicação para gerenciamento de pedidos",
        "Aplicação de conceitos de Programação Orientada a Objetos",
        "Implementação de funcionalidades de cadastro, consulta e gerenciamento",
        "Utilização de Git e GitHub para controle de versão"
      ],
      tags: ["Java", "POO", "Git", "GitHub"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Script de Análise de Dados",
      tech: "Python",
      description: "Script para tratamento e análise de dados acadêmicos",
      details: [
        "Desenvolvimento de script para tratamento e análise de dados",
        "Manipulação de arquivos e processamento de informações",
        "Aplicação de conceitos de lógica de programação",
        "Implementação de estruturas de dados"
      ],
      tags: ["Python", "Análise de Dados", "Estruturas de Dados"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Website — Startup Ocupacional 3D",
      tech: "Wix",
      description: "Website para apresentação de startup de impressão 3D",
      details: [
        "Desenvolvimento e organização de website para startup",
        "Estruturação das informações e conteúdo",
        "Adaptação do conteúdo para apresentação ao público",
        "Trabalho em equipe com parceiros acadêmicos"
      ],
      tags: ["Wix", "Design Web", "Trabalho em Equipe"],
      links: { demo: "#" }
    }
  ];

  const experience = [
    {
      title: "Estagiário de TI",
      company: "SINDHOSPE",
      period: "2026 – Atual",
      location: "Recife, Pernambuco",
      activities: [
        "Suporte às demandas relacionadas a sistemas e tecnologia dos diferentes setores",
        "Organização, tratamento e digitalização de dados de associados e documentos",
        "Criação e atualização de planilhas para controle e acompanhamento de informações",
        "Utilização de Excel e Power BI para organização e análise de dados",
        "Levantamento de necessidades dos setores e apoio na identificação de soluções tecnológicas",
        "Criação de relatórios e materiais digitais",
        "Análise da presença digital da instituição",
        "Elaboração de relatório técnico com pontos de melhoria"
      ]
    },
    {
      title: "Packer / Picker",
      company: "City Beach",
      period: "2024",
      location: "Austrália",
      activities: [
        "Separação, conferência e preparação de pedidos para expedição",
        "Organização de produtos",
        "Cumprimento de processos e prazos",
        "Trabalho em equipe em ambiente multicultural",
        "Comunicação e execução das atividades em inglês"
      ]
    }
  ];

  const skills = [
    {
      category: "Linguagens",
      items: ["Java", "Python", "C"]
    },
    {
      category: "Programação",
      items: ["Programação Orientada a Objetos", "Estruturas de Dados", "Lógica de Programação", "Desenvolvimento Back-end"]
    },
    {
      category: "Ferramentas",
      items: ["Git", "GitHub", "VS Code", "Excel", "Power BI"]
    }
  ];

  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      school: "UNICAP — Universidade Católica de Pernambuco",
      period: "2024 – 2028"
    },
    {
      degree: "Ensino Médio",
      school: "Colégio Damas",
      period: "2021 – 2023"
    }
  ];

  const languages = [
    {
      name: "Inglês",
      level: "Upper-Intermediate / Avançado",
      cert: "Certificado de conclusão — ILSC Australia, 2024"
    }
  ];

  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <nav className={styles.navbar} aria-label="Navegação principal">
        <a className={styles.brand} href="#home" aria-label="Heitor Meira, início">
          <span className={styles.brandMark}>HM</span>
          <span>HEITOR MEIRA</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#conhecimentos">Conhecimentos</a>
          <a href="#formacao">Formação</a>
          <a href="#contato">Contato</a>
        </div>
        <a className={styles.navAction} href="#contato">
          Contato
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className={styles.hero} id="home">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span></span>Bem-vindo ao meu portfólio</p>
          <h1>
            Heitor Meira
            <br />
            <em>Estudante de Ciência da Computação</em>
          </h1>
          <p className={styles.lead}>
            Construindo minha carreira em desenvolvimento de software através de projetos, tecnologia e aprendizado contínuo.
            Buscando oportunidades de estágio/júnior em desenvolvimento de software com interesse em back-end.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projetos">
              Ver projetos
            </a>
            <a className={styles.secondaryButton} href="https://linkedin.com/in/heitormeira/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className={styles.secondaryButton} href="#contato">
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.section} id="sobre">
        <div className={styles.aboutContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sobre <span>Mim</span></h2>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3>Quem sou eu?</h3>
              <p>
                Sou estudante de Ciência da Computação na UNICAP, com interesse em desenvolvimento de software, principalmente na área de back-end.
                Tenho experiência profissional como estagiário de TI no SINDHOSPE, onde trabalho com suporte às demandas dos setores, organização e tratamento de dados, documentos, Excel, Power BI e identificação de necessidades que podem ser solucionadas com tecnologia.
              </p>
              <p>
                Possuo também experiência profissional internacional na Austrália, onde trabalhei na City Beach como Packer/Picker. Essa experiência me proporcionou contato com um ambiente profissional multicultural, além de desenvolver minha comunicação em inglês, capacidade de adaptação, organização e trabalho em equipe.
              </p>
              <p>
                Na universidade, venho desenvolvendo projetos utilizando Java, Python e C, estudando conceitos como Programação Orientada a Objetos, estruturas de dados, lógica de programação e controle de versão com Git/GitHub.
              </p>
            </div>

            <div className={styles.aboutHighlight}>
              <div className={styles.highlightCard}>
                <strong>UNICAP</strong>
                <span>Bacharelado em Ciência da Computação</span>
              </div>
              <div className={styles.highlightCard}>
                <strong>Recife</strong>
                <span>Pernambuco, Brasil</span>
              </div>
              <div className={styles.highlightCard}>
                <strong>Back-end</strong>
                <span>Área de Interesse</span>
              </div>
              <div className={styles.highlightCard}>
                <strong>2024</strong>
                <span>Experiência Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className={styles.section} id="experiencia">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experiência <span>Profissional</span></h2>
        </div>
        <div className={styles.experienceList}>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <div className={styles.experienceMeta}>
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className={styles.experienceDescription}>
                {exp.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className={styles.section} id="projetos">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projetos <span>Acadêmicos</span></h2>
          <p className={styles.sectionDescription}>
            Conheça alguns dos meus principais projetos desenvolvidos durante a graduação
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectTech}>{project.tech}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectDescription} style={{ marginBottom: '16px', marginTop: '12px' }}>
                {project.details.map((detail, i) => (
                  <li key={i} style={{ marginLeft: '16px' }}>{detail}</li>
                ))}
              </ul>
              <div className={styles.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.links.github && (
                  <a href={project.links.github} className={styles.projectLink}>GitHub</a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} className={styles.projectLink}>Detalhes</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className={styles.section + ' ' + styles.sectionAlt} id="conhecimentos">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Conhecimentos <span>Técnicos</span></h2>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsGrid}>
            {skills.map((skill, idx) => (
              <div key={idx} className={styles.skillCategory}>
                <h3>{skill.category}</h3>
                <ul className={styles.skillList}>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className={styles.section} id="formacao">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Formação <span>Acadêmica</span></h2>
        </div>
        <div className={styles.educationList}>
          {education.map((edu, idx) => (
            <div key={idx} className={styles.educationItem}>
              <div className={styles.educationDegree}>{edu.degree}</div>
              <div className={styles.educationSchool}>{edu.school}</div>
              <div className={styles.educationPeriod}>{edu.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES SECTION */}
      <section className={styles.section + ' ' + styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Idiomas</h2>
        </div>
        <div className={styles.languagesGrid}>
          {languages.map((lang, idx) => (
            <div key={idx} className={styles.languageItem}>
              <div className={styles.languageName}>{lang.name}</div>
              <div className={styles.languageLevel}>{lang.level}</div>
              <div className={styles.languageCert}>{lang.cert}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNATIONAL EXPERIENCE SECTION */}
      <section className={styles.section}>
        <div className={styles.internationalContainer}>
          <div className={styles.internationalContent}>
            <h3>Experiência Internacional</h3>
            <p>
              Em 2024, tive a oportunidade de morar e trabalhar na Austrália. Trabalhei na City Beach em um ambiente multicultural, utilizando inglês no dia a dia profissional. A experiência contribuiu para minha comunicação, autonomia, adaptação e capacidade de trabalhar com pessoas de diferentes culturas.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.section} id="contato">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Vamos <span>Conversar?</span></h2>
          <p className={styles.sectionDescription}>
            Estou aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactLinks}>
            <a href="mailto:heitormeira14@gmail.com" className={styles.contactLink}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>heitormeira14@gmail.com</span>
            </a>
            <a href="tel:+5581999810132" className={styles.contactLink}>
              <span className={styles.contactLabel}>Telefone</span>
              <span className={styles.contactValue}>(81) 9 9981-0132</span>
            </a>
            <a href="https://linkedin.com/in/heitormeira/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <span className={styles.contactValue}>linkedin.com/in/heitormeira/</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
          <div className={styles.footerCopy}>
            © {new Date().getFullYear()} Heitor Meira. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
