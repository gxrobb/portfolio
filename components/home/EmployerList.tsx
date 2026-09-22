import { useRef, type KeyboardEvent } from 'react';
import type { Employer } from '@/constants/jobs';
import styles from './EmployerList.module.scss';

// Scoped to the panel so two tab lists on one page never share tab ids.
export function getEmployerTabId(panelId: string, employer: Employer) {
  return `${panelId}-tab-${employer.id}`;
}

interface EmployerListProps {
  label: string;
  panelId: string;
  employers: Employer[];
  activeEmployer: Employer;
  onEmployerSelect: (employer: Employer) => void;
}

export function EmployerList({
  label,
  panelId,
  employers,
  activeEmployer,
  onEmployerSelect,
}: EmployerListProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function selectTab(index: number) {
    const count = employers.length;
    const nextIndex = (index + count) % count;
    onEmployerSelect(employers[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        selectTab(index + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        selectTab(index - 1);
        break;
      case 'Home':
        selectTab(0);
        break;
      case 'End':
        selectTab(employers.length - 1);
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  return (
    <ul role="tablist" aria-label={label} className={styles.list}>
      {employers.map((employer, index) => {
        const isActive = activeEmployer.id === employer.id;
        return (
          <li
            role="presentation"
            className={isActive ? styles.active : undefined}
            key={employer.id}
          >
            <button
              ref={element => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={getEmployerTabId(panelId, employer)}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={styles.tab}
              onClick={() => onEmployerSelect(employer)}
              onKeyDown={event => handleKeyDown(event, index)}
            >
              {employer.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
