import { Row, Column, Container, useScroll } from 'react-basics';
import Link from 'next/link';
import { REPO_URL } from 'lib/constants';
import CompanyLogo from 'components/common/CompanyLogo';
import HamburgerButton from 'components/common/HamburgerButton';
import GitHub from 'assets/github.svg';
import styles from './Header.module.css';

export default function Header() {
  useScroll();

  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.row}>
          <Column defaultSize={4} xs={10} sm={10} md={6} className={styles.title}>
            <CompanyLogo />
          </Column>
          <Column defaultSize={4} xs={0} sm={0} md={0} className={styles.links}>
            <Link href="/features">Features</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/community">Community</Link>
            <Link href="/pricing">Pricing</Link>
          </Column>
          <Column xs={0} sm={0} md={0} className={styles.buttons}>
            <Link href={REPO_URL} target="_blank">
              <GitHub />
            </Link>
          </Column>
          <Column defaultSize={0} xs={2} sm={2} md={6} className={styles.menu}>
            <HamburgerButton />
          </Column>
        </Row>
      </Container>
    </header>
  );
}