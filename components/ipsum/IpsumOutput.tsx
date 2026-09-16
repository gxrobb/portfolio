import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/RpgIpsum.module.scss';

type CopyStatus = 'idle' | 'copied' | 'failed';

const COPY_MESSAGES: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Copied!',
  failed: "Couldn't copy. Select the text and copy it manually.",
};

export default function IpsumOutput({ paragraphs }: { paragraphs: string[] }) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(paragraphs.join('\n\n'));
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyStatus('idle'), 2500);
  }

  return (
    <section className={styles.output} aria-label="Generated text">
      <div className={styles.outputActions}>
        <button type="button" onClick={handleCopy}>
          Copy to clipboard
        </button>
        <span role="status" className={styles.copyStatus}>
          {COPY_MESSAGES[copyStatus]}
        </span>
      </div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}
