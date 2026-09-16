import { useState, type FormEvent } from 'react';
import {
  MAX_PARAGRAPHS,
  SENTENCE_LENGTHS,
  type IpsumSettings,
} from '../../lib/rpgIpsum';
import styles from '../../styles/RpgIpsum.module.scss';

interface IpsumFormProps {
  onGenerate: (settings: IpsumSettings) => void;
}

export default function IpsumForm({ onGenerate }: IpsumFormProps) {
  // Kept as a string so the field can be cleared while typing; the browser's
  // min/max/required validation runs before submit.
  const [paragraphs, setParagraphs] = useState('5');
  const [wordsPerSentence, setWordsPerSentence] = useState<number>(5);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onGenerate({ paragraphs: Number(paragraphs), wordsPerSentence });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="paragraph-count">
          First, select how many paragraphs you want.
        </label>
        <input
          id="paragraph-count"
          className={styles.numberInput}
          type="number"
          min={1}
          max={MAX_PARAGRAPHS}
          step={1}
          required
          value={paragraphs}
          aria-describedby="paragraph-count-hint"
          onChange={event => setParagraphs(event.target.value)}
        />
        <small id="paragraph-count-hint" className={styles.hint}>
          (Max of {MAX_PARAGRAPHS})
        </small>
      </div>

      <fieldset className={styles.field}>
        <legend>Next, select the length of the sentences</legend>
        <div className={styles.radioGroup}>
          {SENTENCE_LENGTHS.map(option => (
            <label
              key={option.label}
              htmlFor={`sentence-length-${option.label.toLowerCase()}`}
              className={styles.radio}
            >
              <input
                id={`sentence-length-${option.label.toLowerCase()}`}
                type="radio"
                name="sentence-length"
                value={option.wordsPerSentence}
                checked={wordsPerSentence === option.wordsPerSentence}
                onChange={() => setWordsPerSentence(option.wordsPerSentence)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit">Adventure!</button>
    </form>
  );
}
