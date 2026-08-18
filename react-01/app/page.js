import styles from "./page.module.css";

export default function Home() {
  const mainProject = {
    title: "Gestão de Sócios CNC",
    subtitle: "Sistema de Gestão de Sócios — Clube Náutico Capibaribe",
    tech: "Java",
    description: "Sistema completo para gerenciamento de sócios de um clube náutico, desenvolvido com Programação Orientada a Objetos.",
    problem: "Gestão eficiente de associados e categorias de membros de uma instituição",
    features: [
      "Cadastro, edição e exclusão de sócios",
      "Gerenciamento de categorias",
      "Consulta de benefícios por categoria",
      "Autenticação de usuários (login admin)",
      "Persistência de dados via serialização",
      "Salvamento automático em background com threads"
    ],
    concepts: [
      "Programação Orientada a Objetos (Herança, Abstração, Polimorfismo, Encapsulamento)",
      "Threads (AutoSaveThread para salvamento periódico)",
      "Collections e Generics",
      "Serialização e I/O (Persistência em arquivos .dat)",
      "Padrão Singleton",
      "Tratamento de Exceções"
    ],
    technologies: ["Java 17+", "POO", "Threads", "Collections", "Serialização", "CLI"],
    tags: ["Java", "POO", "Threads", "Serialização", "Padrões de Projeto", "CLI"],
    team: ["Heitor Meira", "João da Fonte Queiroz", "Marcelo Caldas", "Addson Cardoso"],
    year: "2025",
    university: "UNICAP — Ciências da Computação",
    links: {
      github: "https://github.com/joaodafontequeiroz/gestao-socios-cnc",
      uml_classes: "https://drive.google.com/file/d/1NYZLVUbe7Bt6H9J6Ul4Sgvqj aF1lqBpx/view?usp=sharing",
      uml_cases: "https://drive.google.com/file/d/1yJZoxdZb9Wph1DpmLcd-ahDBf01LC_lb/view?usp=sharing",
      video: "https://drive.google.com/file/d/1426ifEZPnV04pToTNqiVbNagvYi_qKqF/view?usp=sharing"
    },
    featured: true
  };

  const projects = [
    {
      title: "HashGuard System — Tabela Hash com Sondagem Linear",
      tech: "C",
      description: "Implementação de Tabela Hash com Endereçamento Aberto e Sondagem Linear para cadastro e autenticação de usuários",
      problem: "Demonstrar o funcionamento eficiente de estruturas de dados para armazenamento e busca",
      features: [
        "Cadastro de usuários com senha",
        "Login com validação de credenciais",
        "Remoção de usuários com marcador de item removido",
        "Consulta e visualização do estado da tabela",
        "Hashing de senhas com função djb2"
      ],
      concepts: [
        "Tabela Hash com Endereçamento Aberto",
        "Sondagem Linear para tratamento de colisões",
        "Marcador ITEM_REMOVIDO para manutenção da estrutura",
        "Funções de hash (djb2)",
        "Alocação dinâmica de memória",
        "Ponteiros e manipulação de estruturas"
      ],
      technologies: ["C", "GCC", "Estruturas de Dados", "Hashing", "Gerenciamento de Memória"],
      tags: ["C", "Hash", "Estruturas de Dados", "Ponteiros", "Memória", "Algoritmos"],
      team: ["Heitor Meira", "João da Fonte Queiroz", "Marcelo Caldas"],
      year: "2025",
      university: "UNICAP",
      links: {
        github: "https://github.com/joaodafontequeiroz/projeto-Tabela-Hash-estrutura-de-dados-"
      },
      featured: true
    },
    {
      title: "Website — Startup Ocupacional 3D",
      tech: "Wix",
      description: "Website para apresentação de startup especializada em soluções de impressão 3D",
      features: [
        "Estruturação de informações da startup",
        "Apresentação de produtos e serviços",
        "Design responsivo",
        "Trabalho colaborativo em equipe"
      ],
      concepts: [
        "Web Design",
        "Desenvolvimento colaborativo",
        "Arquitetura de informação",
        "Usabilidade"
      ],
      technologies: ["Wix", "Design Web", "HTML", "CSS"],
      tags: ["Wix", "Web Design", "Trabalho em Equipe"],
      year: "2025",
      university: "UNICAP",
      links: { demo: "#" }
    },
    {
      title: "Lab Topologia Híbrida — Mininet + Docker",
      tech: "Mininet, Docker, Linux",
      description: "Simulação de rede corporativa híbrida combinando Mininet (simulação de rede) com Docker (containerização)",
      problem: "Compreender e demonstrar na prática como redes corporativas são arquitetadas, como containers se comunicam e como analisar o tráfego entre eles",
      features: [
        "Topologia de rede simulada no Mininet com 3 switches e múltiplos hosts",
        "Containers Docker em rede isolada com docker-compose",
        "Teste de conectividade entre hosts simulados e containers",
        "Análise de latência e bandwidth com iperf",
        "Documentação detalhada com prints e logs",
        "Reprodutibilidade — código disponível para replicar o lab"
      ],
      concepts: [
        "Arquitetura de Redes (Topologia, Switching, Roteamento)",
        "Virtualização com Docker e Containerização",
        "Networking no Docker (bridge, host, overlay)",
        "Ferramentas de diagnóstico (ping, traceroute, iperf)",
        "Simulação de redes com Mininet",
        "Linux — iptables, namespaces, network stack"
      ],
      technologies: ["Mininet", "Docker", "Docker Compose", "Linux", "Python", "Bash", "iperf"],
      tags: ["Redes", "Mininet", "Docker", "Containerização", "Linux", "Simulação", "Laboratório"],
      team: ["Heitor Meira"],
      year: "2025",
      university: "UNICAP — Autoformação",
      links: {
        github: "https://github.com/heitormeira/lab-mininet-docker-networking"
      },
      featured: false
    },
    {
      title: "Análise de Tráfego de Rede — Wireshark + Casos Práticos",
      tech: "Wireshark, Mininet, tcpdump",
      description: "Captura, análise e documentação de tráfego de rede real em diferentes cenários, identificando protocolos, vulnerabilidades e comportamentos",
      problem: "Entender como dados trafegam pela rede, identificar protocolos, detectar anomalias e compreender segurança de rede na prática",
      features: [
        "Captura de pacotes em tempo real com Wireshark",
        "Análise detalhada de protocolos: TCP, UDP, DNS, HTTP/HTTPS, DHCP, ARP",
        "Filtros de captura e display (display filters, BPF)",
        "Identificação de tráfego criptografado vs. em claro",
        "Análise de fluxos TCP — Three-way handshake, flags (SYN, ACK, FIN)",
        "Exportação e documentação de findings com exemplos práticos",
        "Casos de estudo: comunicação normal vs. tentativa de ataque ARP spoofing"
      ],
      concepts: [
        "Camadas OSI e TCP/IP Stack",
        "Protocolos de Transporte (TCP, UDP) e Aplicação (DNS, HTTP, HTTPS)",
        "Análise de pacotes e estatísticas",
        "Segurança de Rede — identificação de riscos",
        "ARP, DHCP, DNS — como funcionam na prática",
        "TLS/SSL — criptografia de dados em trânsito"
      ],
      technologies: ["Wireshark", "tcpdump", "Mininet", "Linux", "Bash"],
      tags: ["Wireshark", "Análise de Tráfego", "Segurança de Redes", "Protocolos", "Linux", "Laboratório"],
      team: ["Heitor Meira"],
      year: "2025",
      university: "UNICAP — Autoformação",
      links: {
        github: "https://github.com/heitormeira/wireshark-traffic-analysis"
      },
      featured: false
    }
  ];

  const experience = [
    {
      title: "Estagiário de TI — Infraestrutura & Suporte",
      company: "SINDHOSPE",
      period: "2026 – Atual",
      location: "Recife, Pernambuco",
      activities: [
        "Suporte técnico e diagnóstico de problemas de sistemas e conectividade",
        "Análise de infraestrutura de TI e levantamento de necessidades",
        "Configuração e manutenção de ambientes virtualizados",
        "Documentação de topologias de rede e fluxo de dados",
        "Organização, tratamento e análise de dados operacionais com Excel e Power BI",
        "Identificação de soluções tecnológicas baseadas em infraestrutura",
        "Relatórios técnicos com recomendações de melhoria em infraestrutura"
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
      category: "Redes & Infraestrutura",
      items: ["Mininet (Simulação de Redes)", "Wireshark (Análise de Tráfego)", "Docker & Containerização", "Oracle Virtual Box", "Linux (Terminal, Bash, iptables)", "TCP/IP, DNS, DHCP, Roteamento", "VLAN, QoS, Segurança de Redes"]
    },
    {
      category: "Linguagens",
      items: ["Java", "Python", "C", "Bash/Shell"]
    },
    {
      category: "Programação",
      items: ["Programação Orientada a Objetos", "Estruturas de Dados", "Lógica de Programação"]
    },
    {
      category: "Ferramentas & Sistemas",
      items: ["Git", "GitHub", "VS Code", "Linux", "Excel", "Power BI"]
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
    <p className={styles.eyebrow}>
      <span></span>Bem-vindo ao meu portfólio
    </p>

    <h1>
      Heitor Meira
      <br />
      <em>Estudante de Ciência da Computação</em>
    </h1>

    <p className={styles.lead}>
      Com foco em Infraestrutura e Redes, venho construindo minha trajetória
      em Engenharia de Redes através de projetos práticos, laboratórios e
      aprendizado contínuo. Busco oportunidades de estágio ou posições
      júnior em Infraestrutura de TI e Redes de Computadores.
    </p>

    <div className={styles.heroActions}>
      <a className={styles.primaryButton} href="#projetos">
        Ver projetos
      </a>

      <a
        className={styles.secondaryButton}
        href="/curriculum"
        target="_blank"
        rel="noopener noreferrer"
      >
        Currículo
      </a>

      <a
        className={styles.secondaryButton}
        href="https://linkedin.com/in/heitormeira/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
                Sou estudante de Ciência da Computação na UNICAP com forte foco em Infraestrutura de TI e Redes de Computadores. 
                Tenho experiência profissional como estagiário de TI no SINDHOSPE, onde trabalho com suporte técnico, levantamento de necessidades tecnológicas, análise de infraestrutura e identificação de soluções com base em dados e tecnologia.
              </p>
              <p>
                Possuo experiência prática com ferramentas de simulação e análise de redes como <strong>Mininet</strong>, <strong>Wireshark</strong>, <strong>Docker</strong> e <strong>Oracle Virtual Box</strong>.
                Tenho sólidos conhecimentos em conceitos de redes como TCP/IP, DNS, DHCP, roteamento, VLAN, segurança de redes e containerização.
              </p>
              <p>
                Experiência profissional internacional na Austrália, onde desenvolvi comunicação fluida em inglês, adaptabilidade em ambientes multiculturais e mentalidade colaborativa.
                Na universidade, desenvolvimento de projetos em Java, Python e C que demonstram lógica estruturada e compreensão de conceitos computacionais fundamentais.
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
                <strong>Redes & Infraestrutura</strong>
                <span>Especialização</span>
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
          <h2 className={styles.sectionTitle}>Projetos <span>Principais</span></h2>
          <p className={styles.sectionDescription}>
            Conheça os meus principais projetos desenvolvidos durante a graduação
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className={styles.featuredProjectContainer}>
          <div className={styles.featuredProject}>
            <div className={styles.featuredBadge}>Projeto Principal</div>
            <div className={styles.featuredHeader}>
              <div>
                <div className={styles.projectTech}>{mainProject.tech}</div>
                <h2 className={styles.featuredTitle}>{mainProject.title}</h2>
                <p className={styles.featuredSubtitle}>{mainProject.subtitle}</p>
                <p className={styles.featuredDescription}>{mainProject.description}</p>
              </div>
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.featuredSection}>
                <h4>O Problema</h4>
                <p>{mainProject.problem}</p>
              </div>

              <div className={styles.featuredSection}>
                <h4>Principais Funcionalidades</h4>
                <ul className={styles.featureList}>
                  {mainProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.featuredSection}>
                <h4>Conceitos e Padrões Implementados</h4>
                <ul className={styles.featureList}>
                  {mainProject.concepts.map((concept, i) => (
                    <li key={i}>{concept}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.featuredTechStack}>
                <h4>Tecnologias</h4>
                <div className={styles.techStack}>
                  {mainProject.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.featuredMeta}>
                <div className={styles.metaItem}>
                  <strong>Equipe</strong>
                  <span>{mainProject.team.join(", ")}</span>
                </div>
                <div className={styles.metaItem}>
                  <strong>Universidade</strong>
                  <span>{mainProject.university}</span>
                </div>
                <div className={styles.metaItem}>
                  <strong>Ano</strong>
                  <span>{mainProject.year}</span>
                </div>
              </div>

              <div className={styles.featuredTags}>
                {mainProject.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.featuredLinks}>
                <a href={mainProject.links.github} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                  Ver no GitHub
                </a>
                <a href={mainProject.links.video} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                  Assistir Vídeo
                </a>
                <a href={mainProject.links.uml_classes} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                  Diagrama UML
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={`${styles.projectCard} ${project.featured ? styles.projectCardFeatured : ''}`}>
              <div className={styles.projectTech}>{project.tech}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              {project.features && (
                <div className={styles.projectFeatures}>
                  <h4>Funcionalidades</h4>
                  <ul className={styles.featureList}>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.concepts && (
                <div className={styles.projectConcepts}>
                  <h4>Conceitos</h4>
                  <ul className={styles.featureList}>
                    {project.concepts.map((concept, i) => (
                      <li key={i}>{concept}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.team && (
                <div className={styles.projectTeam}>
                  <strong>Equipe:</strong> {project.team.join(", ")}
                </div>
              )}

              <div className={styles.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                {project.links.github && project.links.github !== "#" && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub</a>
                )}
                {project.links.demo && project.links.demo !== "#" && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Detalhes</a>
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
            <a href="https://www.instagram.com/heitormeiramelo/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.contactLabel}>Instagram</span>
              <span className={styles.contactValue}>@heitormeiramelo</span>
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
