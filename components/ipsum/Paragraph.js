import React, { useState, useEffect } from 'react'
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

function SelectRandomNumber(array){
    return Math.floor(Math.random() * (1, array.length -1));
}

function GetRandomWord(wordArray){
    return wordArray[SelectRandomNumber(wordArray)];
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function CreateASentence(WORDS, numOfWords){
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
 function CreateParagraph(paragraphSize) {
	let paragraph = []
	for(let x = 0; x < paragraphSize; x++) {
		paragraph.push(CreateASentence(WORDS, 5))
	}
    return paragraph.join('')
}

function GenerateTheOutput(numberOfParagraphs, size){

    !numberOfParagraphs ? numberOfParagraphs = 1 : numberOfParagraphs;
    !size ? size = 5 : size;
    
    if(numberOfParagraphs > 10) {
        numberOfParagraphs = 10
    }
    if( numberOfParagraphs < 1) {
        numberOfParagraphs = 1
    }
    let theOutput = []
    let x = 0
    while(x < numberOfParagraphs) {
        theOutput.push(CreateParagraph(size))
        x++
    }
    return theOutput
}

export default function Paragraph({ paragraphNumber, sentenceLength }) {
	const [generatedParagraph, setGeneratedParagraph] = useState([]);
	// useEffect(()=>{
	// 	setGeneratedParagraph(GenerateTheOutput(paragraphNumber, 5))
	// }, []) 

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


