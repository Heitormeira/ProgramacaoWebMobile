import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.navbar} aria-label="Navegacao principal">
        <a className={styles.brand} href="#top" aria-label="Heitor Meira, inicio">
          <span className={styles.brandMark}>HM</span>
          <span>HEITOR MEIRA</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
        <a className={styles.navAction} href="#contato">
          Fale comigo <span aria-hidden="true">-&gt;</span>
        </a>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> Estrategia. Execucao. Impacto.</p>
          <h1>
            Heitor Meira,<br />
            <em>O chefe.</em>
          </h1>
          <p className={styles.lead}>
            Ideias claras, movimentos precisos e resultados que deixam marca.
            Lideranca com visao de futuro e os pes no presente.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#sobre">Conheca meu trabalho <span aria-hidden="true">-&gt;</span></a>
            <a className={styles.textButton} href="#contato">Vamos conversar <span aria-hidden="true">+</span></a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Painel visual de lideranca">
          <div className={styles.visualGrid} />
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.visualCore}>
            <span className={styles.coreCaption}>EST. 1998</span>
            <strong>HM</strong>
            <span className={styles.coreLine} />
            <span className={styles.coreCaption}>BRASIL / MUNDO</span>
          </div>
          <div className={styles.visualLabel}>01 <span>VISÃO EM MOVIMENTO</span></div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Numeros de experiencia">
        <div><strong>12+</strong><span>anos liderando<br />projetos</span></div>
        <div><strong>38</strong><span>marcas<br />transformadas</span></div>
        <div><strong>04</strong><span>continentes<br />conectados</span></div>
        <p>“Quem enxerga longe<br />decide melhor.”</p>
      </section>

      <section className={styles.about} id="sobre">
        <div className={styles.sectionMarker}>02 / SOBRE</div>
        <div>
          <h2>O trabalho fala.<br /><span>Os resultados respondem.</span></h2>
          <p>Construo caminhos para pessoas e negócios que não querem apenas acompanhar o mercado. Meu papel é transformar ambição em direção, e direção em algo impossível de ignorar.</p>
        </div>
      </section>

      <footer className={styles.footer} id="contato">
        <div><span className={styles.footerKicker}>TEM UMA IDEIA GRANDE?</span><h2>Vamos fazer<br /><em>acontecer.</em></h2></div>
        <a className={styles.circleLink} href="mailto:oi@heitormeira.com" aria-label="Enviar email para Heitor Meira">-&gt;</a>
        <div className={styles.footerMeta}><span>© 2025 HEITOR MEIRA</span><span>OI@HEITORMEIRA.COM</span></div>
      </footer>
    </main>
  );
}
