import Avatar from '@/components/Avatar';
import InfoCard from '@/components/InfoCard';
import SkillTag from '@/components/SkillTag';
import SocialLinks from '@/components/SocialLinks';
import { Sparkles, MapPin, Briefcase, Heart } from 'lucide-react';
import styles from './AboutPage.module.css';

const SKILLS: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'UI/UX Design',
  'Vite',
  'CSS',
  'Problem Solving',
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <Avatar />
          <div className={styles.heroText}>
            <p className={styles.greeting}>
              <Sparkles size={16} /> Hello, I'm
            </p>
            <h1 className={styles.name}>Alex Morgan</h1>
            <p className={styles.title}>Frontend Developer &amp; Designer</p>
            <p className={styles.bio}>
              Passionate about building beautiful, fast, and accessible web experiences.
              I love turning complex problems into simple, elegant interfaces that
              people enjoy using every day.
            </p>
            <SocialLinks />
          </div>
        </header>

        <section className={styles.grid}>
          <InfoCard icon={<MapPin size={20} />} title="Location">
            Based in San Francisco, CA — open to remote opportunities worldwide.
          </InfoCard>
          <InfoCard icon={<Briefcase size={20} />} title="Experience">
            5+ years crafting digital products for startups and enterprise teams.
          </InfoCard>
          <InfoCard icon={<Heart size={20} />} title="Interests">
            Coffee, hiking, open-source projects, and exploring new design systems.
          </InfoCard>
        </section>

        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills &amp; Tools</h2>
          <div className={styles.skillList}>
            {SKILLS.map((skill: string) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Made with care · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
