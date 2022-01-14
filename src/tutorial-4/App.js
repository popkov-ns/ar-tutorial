import React from 'react';
import './App.css';

import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {
    const adjectivesArr = [ 
        "абсолютный", "адский", "азартный", "активный", "ангельский", "астрономический", "баснословный", "безбожный", "безбрежный", "безвозвратный",
        "безграничный", "бездонный", "бездушный", "безжалостный", "замечательно", "замечательный", "записной", "запредельный", "заядлый", "звериный", "зверский",
        "зеленый", "злой", "злостный", "значительный", "неоспоримый", "неотразимый", "неоценимый", "непередаваемый"
    ];

    const nounsArr = ["лгун", "день", "конь", "олень", "человек", "программист", "ребёнок", "конец", "город", "дурак"];

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
                { listPhrase.length ? <Phrase listPhrase={listPhrase} />  : <EmptyBlock /> }
                <button className="btn btn_generate" onClick={generatingPhrases}>Сгенерировать</button>
                <button className="btn btn_clear" onClick={clearPhrases}>Очистить</button>
            </div>
        </div>
    );
}

export default App;