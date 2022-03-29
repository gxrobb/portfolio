import React, { useState } from 'react'


import Paragraph from '../components/ipsum/Paragraph.js'
import ParagraphInput from '../components/ipsum/ParagraphInput.js';

export default function rpgIpsum() {

    const [settings, setSettings] = useState({
        paragraphNumber: 0,
        sentenceLength: 0,
        showParagraph: false
    });


    return (
        <div>
            <p>{settings.showParagraph}</p>
            <ParagraphInput onSubmit={setSettings} />
            <div
                className="container"
                style={{display: settings.showParagraph?"block":"none" }}
            >
                <Paragraph {...settings} />
            </div>
        </div>
    )
}


