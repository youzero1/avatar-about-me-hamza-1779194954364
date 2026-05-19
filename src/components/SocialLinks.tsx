import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import styles from './SocialLinks.module.css';

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const LINKS: SocialLink[] = [
  { href: 'https://github.com', label: 'GitHub', icon: <Github size={18} /> },
  { href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={18} /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <Linkedin size={18} /> },
  { href: 'mailto:hello@example.com', label: 'Email', icon: <Mail size={18} /> },
];

export default function SocialLinks() {
  return (
    <div className={styles.list}>
      {LINKS.map((link: SocialLink) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
