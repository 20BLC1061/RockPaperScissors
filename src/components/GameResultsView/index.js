import './index.css'

const GameResultsView = props => {
  const {choicesList, gameResults, onClickPlayAgain, resultText} = props

  const userChoiceObject = choicesList.find(
    item => item.id === gameResults.userChoice,
  )
  const opponentChoiceObject = choicesList.find(
    item => item.id === gameResults.opponentChoice,
  )
  console.log(userChoiceObject)
  console.log(opponentChoiceObject)
  const yourChoice = userChoiceObject.imageUrl
  const opponentChoice = opponentChoiceObject.imageUrl
  return (
    <div className="gameResultsContainer">
      <div className="playerResultContainer">
        <div>
          <h1 className="players">YOU</h1>
          <button type="button" className="playerResult">
            <img src={yourChoice} alt="your choice" className="resultRPS" />
          </button>
        </div>

        <div>
          <h1 className="players">OPPONENT</h1>
          <button type="button" className="playerResult">
            <img
              src={opponentChoice}
              alt="opponent choice"
              className="resultRPS"
            />
          </button>
        </div>
      </div>
      <div>
        <p className="finalResult">{resultText}</p>
        <button type="button" className="playBtn" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameResultsView
