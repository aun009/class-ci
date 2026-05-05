import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Effects */}
      <div className={styles.background}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
      </div>

      <div className="container">
        {/* Navigation */}
        <nav className={`${styles.nav} animate-fade-in`}>
          <div className={styles.logo}>Sargam.</div>
          <div className={styles.navLinks}>
            <Link href="#about" className={styles.navLink}>About</Link>
            <Link href="#projects" className={styles.navLink}>Projects</Link>
            <Link href="#mentorship" className={styles.navLink}>Mentorship</Link>
            <Link href="https://github.com/devsargam" target="_blank" className={styles.navLink}>GitHub</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`${styles.heroContent} animate-fade-in delay-1`}>
            <div className={styles.badge}>Mentor & Web3 Developer</div>
            <h1 className={styles.title}>
              Building the <span className="gradient-text">Agentic Web.</span>
            </h1>
            <p className={styles.subtitle}>
              I&apos;m Sargam Poudel. I build solutions for the decentralized & agentic web, and I mentor ambitious developers in Harkirat&apos;s 100xDevs course.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="https://github.com/devsargam" target="_blank" className={`${styles.btn} ${styles.btnPrimary}`}>
                View GitHub
              </Link>
              <Link href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                Explore Work
              </Link>
            </div>
          </div>
          
          <div className={`${styles.heroImageWrapper} animate-fade-in delay-2`}>
            <img 
              src="https://github.com/devsargam.png" 
              alt="Sargam Poudel" 
              className={styles.heroImage} 
            />
          </div>
        </section>

        {/* Mentorship Section */}
        <section id="mentorship" className={styles.section}>
          <div className={`${styles.sectionHeader} animate-fade-in delay-2`}>
            <h2 className={styles.sectionTitle}>100xDevs <span className="gradient-text">Mentor</span></h2>
            <p className={styles.sectionSubtitle}>Guiding the next generation of top-tier engineers.</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2} animate-fade-in delay-3`}>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>👨‍🏫</div>
              <h3 className={styles.cardTitle}>Expert Guidance</h3>
              <p className={styles.cardDesc}>
                Recognized as one of the best mentors in the 100xDevs cohort, helping students master full-stack development, DevOps, and Web3 concepts with real-world applications.
              </p>
            </div>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Live Problem Solving</h3>
              <p className={styles.cardDesc}>
                Conducting hands-on debugging sessions, architecture reviews, and providing actionable feedback to help learners break through technical roadblocks.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured <span className="gradient-text">Projects</span></h2>
            <p className={styles.sectionSubtitle}>Building tools for the future of the internet.</p>
          </div>

          <div className={`${styles.grid} ${styles.grid3}`}>
            {/* Actumx */}
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🤖</div>
              <h3 className={styles.cardTitle}>Actumx</h3>
              <p className={styles.cardDesc}>
                Marketplace for the agentic economy. Introducing wallets for AI agents, allowing interaction in natural language to check balances, send tokens, and swap.
              </p>
              <Link href="https://github.com/devsargam/actumx" target="_blank" className={styles.cardLink}>
                View Repository →
              </Link>
            </div>

            {/* Dolphinflow */}
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🐬</div>
              <h3 className={styles.cardTitle}>Dolphinflow</h3>
              <p className={styles.cardDesc}>
                Building seamless flows (A → ⚙️ → B) for decentralized applications. Simplifying complex on-chain interactions into manageable workflows.
              </p>
              <Link href="https://twitter.com/sargampoudel" target="_blank" className={styles.cardLink}>
                Follow Updates →
              </Link>
            </div>

            {/* Aether */}
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardIcon}>🌋</div>
              <h3 className={styles.cardTitle}>Aether</h3>
              <p className={styles.cardDesc}>
                A mini OSS alternative to Vercel that you can spin up for yourself. Empowering developers to own their deployment infrastructure.
              </p>
              <Link href="https://github.com/devsargam/aether" target="_blank" className={styles.cardLink}>
                View Repository →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Sargam Poudel. Building from Nepal.</p>
        </footer>
      </div>
    </main>
  );
}
