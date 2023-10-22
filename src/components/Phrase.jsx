
const Phrase = ({phraseRandom}) => {

  return (
    <article>
        <p className="app__phrase">{phraseRandom.phrase}</p>
    </article>
  )
}

export default Phrase