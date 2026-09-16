import React, { useState } from 'react';

import Paragraph from '../components/ipsum/Paragraph';
import ParagraphInput, {
  type IpsumSettings,
} from '../components/ipsum/ParagraphInput';

export default function rpgIpsum() {
  const [settings, setSettings] = useState<IpsumSettings>({
    paragraphNumber: 0,
    sentenceLength: 0,
    showParagraph: false,
  });

  return (
    <div>
      <p>{settings.showParagraph}</p>
      <ParagraphInput onSubmit={setSettings} />
      <div
        className="container"
        style={{ display: settings.showParagraph ? 'block' : 'none' }}
      >
        <Paragraph {...settings} />
      </div>
    </div>
  );
}
