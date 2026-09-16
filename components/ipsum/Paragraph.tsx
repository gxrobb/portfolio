import React from 'react'
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
        'tavern',
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
        'spirit'
]

function SelectRandomNumber(array: string[]): number {
    return Math.floor(Math.random() * array.length);
}

function GetRandomWord(wordArray: string[]): string {
    return wordArray[SelectRandomNumber(wordArray)];
}
function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function CreateASentence(WORDS: string[], numOfWords: number): string {
    let tempSentence = '';
    let lengthCounter = 0;
    while(lengthCounter < numOfWords){
        tempSentence += GetRandomWord(WORDS) + ' ';
        lengthCounter++;
    }
 
    //format tempSentence
    tempSentence = tempSentence.toLowerCase();
    tempSentence = capitalizeFirstLetter(tempSentence);
    return tempSentence.trim() + '. ';
 }
 function CreateParagraph(paragraphSize: number): string {
	const paragraph: string[] = []
	for(let x = 0; x < paragraphSize; x++) {
		paragraph.push(CreateASentence(WORDS, 5))
	}
    return paragraph.join('')
}

function GenerateTheOutput(numberOfParagraphs: number, size: number): string[] {

    if (!numberOfParagraphs) numberOfParagraphs = 1;
    if (!size) size = 5;
    
    if(numberOfParagraphs > 10) {
        numberOfParagraphs = 10
    }
    if( numberOfParagraphs < 1) {
        numberOfParagraphs = 1
    }
    const theOutput: string[] = []
    let x = 0
    while(x < numberOfParagraphs) {
        theOutput.push(CreateParagraph(size))
        x++
    }
    return theOutput
}

interface ParagraphProps {
    paragraphNumber: number
    sentenceLength: number
}

export default function Paragraph({ paragraphNumber, sentenceLength }: ParagraphProps) {
  return (
    <>
        {GenerateTheOutput(paragraphNumber, sentenceLength).map(paragraph => {
            return (
                <p
                    suppressHydrationWarning
                    key={paragraph}
                >
                    {paragraph}
                </p>
            )
        })}
    </>
  );
}


