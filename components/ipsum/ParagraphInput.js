import React, { useState } from 'react'
export default function ParagraphInput({ onSubmit }) {
    const [paragraphNumber, setParagraphNumber] = useState(5);
    const [sentenceLength, setSentenceLength] = useState(5);
    const [showParagraph, setShowParagraph] = useState(true);
    

  
    return (
      <div>
        {/* ... */}


        <div className="container">
                <div className="row">
                    <div className="col-md-2 d-sm-none d-xs-none d-md-block d-none">
                        {/* <img src="public/images/Bard.jpg" alt="Lorem Ipsum Bard!" className="img-fluid" /> */}
                    </div>
                    <div className="col-md-10">
                        <h2>Looking to add some fun to your filler text?</h2>
                        <h5>Let`&apos;`s Spiffy up your copy with some RPG inspired Lorem Ipsum!</h5>

                        <div className="form-container">
                            <p>First, select how many paragraphs you want.  
                                <input 
                                    type="number" 
                                    name="para" 
                                    value={paragraphNumber} 
                                    className="para-box" 
                                    required 
                                    
                                    onInput={
                                        event => setParagraphNumber(parseInt(event.target.value))
                                    }
                                />
                                <small id="para-box-help" className="form-text text-muted">(Max of 10)</small>
                            </p>
                            <p>Next, select the length of the sentences</p>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="sentences" 
                                    value="3" 
                                    required 
                                    checked={sentenceLength === 3 ? 'checked' : ''}
                                    onChange={
                                        event => setSentenceLength(parseInt(event.target.value))
                                    }
                                /> 
                                <label className="form-check-label" htmlFor="inlineRadio1">Short</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="sentences" 
                                    value="5" 
                                    checked={sentenceLength === 5 ? 'checked' : ''}
                                    required 
                                    onChange={
                                        event => setSentenceLength(parseInt(event.target.value))
                                    }
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="sentences" 
                                    value="7" 
                                    checked={sentenceLength === 7 ? 'checked' : ''}
                                    required 
                                    onChange={
                                        event => setSentenceLength(parseInt(event.target.value))
                                    }
                                />
                                <label className="form-check-label" htmlFor="inlineRadio3">Long</label>
                            </div>
                            <div className="form-group">
                            <button
                                type="submit"
                                onClick={() =>{ 
                                    onSubmit({
                                        paragraphNumber, 
                                        sentenceLength,
                                        showParagraph
                                    })}
                                }
                                >Adventure!
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }