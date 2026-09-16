const WORDS = [
  'rpg',
  'hero',
  'villain',
  'roll for initiative',
  'bard',
  'face',
  'healer',
  'tank',
  'dps',
  'fighter',
  'wizard',
  'sorcerer',
  'tavern',
  'brawl',
  'intelligence',
  'agility',
  'dexterity',
  'strength',
  'charisma',
  'wisdom',
  'sense',
  'fire',
  'light',
  'initiative',
  'advantage',
  'disadvantage',
  'ship',
  'monster',
  'druid',
  'undead',
  'necromancer',
  'knight',
  'ambush',
  'flanking',
  'axe',
  'sword',
  'spear',
  'bow',
  'longbow',
  'shortbow',
  'longsword',
  'shortsword',
  'falchion',
  'scythe',
  'ogre',
  'orc',
  'goblin',
  'hobgoblin',
  'leviathan',
  'beastie',
  'temple',
  'net',
  'polearm',
  'poleaxe',
  'great axe',
  'lance',
  'horse',
  'wagon',
  'map',
  'cartographer',
  'summoning',
  'cultist',
  'troll',
  'gnoll',
  'spell casting',
  'modifier',
  'armor class',
  'spirit',
];

export const MAX_PARAGRAPHS = 10;
export const SENTENCES_PER_PARAGRAPH = 5;

export const SENTENCE_LENGTHS = [
  { label: 'Short', wordsPerSentence: 3 },
  { label: 'Medium', wordsPerSentence: 5 },
  { label: 'Long', wordsPerSentence: 7 },
] as const;

export interface IpsumSettings {
  paragraphs: number;
  wordsPerSentence: number;
}

function randomWord(random: () => number): string {
  return WORDS[Math.floor(random() * WORDS.length)];
}

function createSentence(wordCount: number, random: () => number): string {
  const sentence = Array.from({ length: wordCount }, () =>
    randomWord(random)
  ).join(' ');
  return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}.`;
}

function createParagraph(
  wordsPerSentence: number,
  random: () => number
): string {
  return Array.from({ length: SENTENCES_PER_PARAGRAPH }, () =>
    createSentence(wordsPerSentence, random)
  ).join(' ');
}

export function generateIpsum(
  { paragraphs, wordsPerSentence }: IpsumSettings,
  random: () => number = Math.random
): string[] {
  const count = Math.min(
    Math.max(Math.floor(paragraphs) || 1, 1),
    MAX_PARAGRAPHS
  );
  return Array.from({ length: count }, () =>
    createParagraph(wordsPerSentence, random)
  );
}
