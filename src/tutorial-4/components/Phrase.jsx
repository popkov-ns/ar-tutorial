const Phrase = ({ listPhrase }) => {
    return (
        <div className="list">
            {
                listPhrase.map((phrase, index) => {
                    return <div className="block" key={index}><h3>{phrase}</h3></div>
                })
            }
        </div>
    )
}

export default Phrase;