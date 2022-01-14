import React from 'react';
import './App.css';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

import {adjectivesArr, nounsArr} from './ArrayWords';

const App = () => {
    const [listPhrase, serListPhrase] = React.useState([]);

    const generatingPhrases = () => {
        let adjective = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        let noun = nounsArr[Math.floor(Math.random() * nounsArr.length)];

        serListPhrase((prev) => [...prev, `${adjective} ${noun}`]);
    }

    const clearPhrases = () => {
        serListPhrase([]);
    }

    return (
        <div className="container">
            <div className="wrapper">
                { 
                    listPhrase.length 
                        ?
                        <div className="list">
                            {listPhrase.map((phrase, index) => {
                                return <Phrase text={phrase} key={index} />
                            })}
                        </div>
                        : <EmptyBlock /> 
                }
                <button className="btn btn_generate" onClick={generatingPhrases}>Сгенерировать</button>
                <button className="btn btn_clear" onClick={clearPhrases}>Очистить</button>
            </div>
        </div>
    );
}

export default App;