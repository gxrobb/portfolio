import { useState } from 'react';
import Link from 'next/link';
import PageHead from '@/components/common/PageHead';
import IpsumForm from '@/components/ipsum/IpsumForm';
import IpsumOutput from '@/components/ipsum/IpsumOutput';
import { generateIpsum, type IpsumSettings } from '@/lib/rpgIpsum';
import styles from '@/styles/pages/RpgIpsum.module.scss';

interface GeneratedText {
  // Changes on every generation so IpsumOutput remounts and clears any
  // leftover "Copied!" message.
  id: number;
  paragraphs: string[];
}

export default function RpgIpsum() {
  const [generated, setGenerated] = useState<GeneratedText | null>(null);

  function handleGenerate(settings: IpsumSettings) {
    setGenerated(previous => ({
      id: (previous?.id ?? 0) + 1,
      paragraphs: generateIpsum(settings),
    }));
  }

  const paragraphCount = generated?.paragraphs.length ?? 0;

  return (
    <>
      <PageHead
        title="RPG Ipsum | Robert Kregloh"
        description="Generate RPG-inspired lorem ipsum filler text full of heroes, taverns, and rolls for initiative."
        path="/rpgIpsum"
      />
      <main className={`${styles.page} container`}>
        <Link href="/" className="button">
          Back To Portfolio
        </Link>

        <h1 className={styles.title}>
          Looking to add some fun to your filler text?
        </h1>
        <p className={styles.subtitle}>
          Let&apos;s Spiffy up your copy with some RPG inspired Lorem Ipsum!
        </p>

        <IpsumForm onGenerate={handleGenerate} />

        <p role="status" className="visually-hidden">
          {generated
            ? `Generated ${paragraphCount} ${paragraphCount === 1 ? 'paragraph' : 'paragraphs'}.`
            : ''}
        </p>

        {generated && (
          <IpsumOutput key={generated.id} paragraphs={generated.paragraphs} />
        )}
      </main>
    </>
  );
}
