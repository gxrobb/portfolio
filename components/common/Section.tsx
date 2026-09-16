import type { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  /** Anchor id used by the navigation links. */
  id: string;
  title: string;
  centeredTitle?: boolean;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  centeredTitle = false,
  children,
}: SectionProps) {
  return (
    <>
      {/* The anchor sits above the section's top margin, so nav links scroll
          to a spot with space above the heading. */}
      <div id={id} />
      <section className={`${styles.section} container`}>
        <div className={centeredTitle ? styles.centeredTitle : undefined}>
          <h2>{title}</h2>
        </div>
        {children}
      </section>
    </>
  );
}
