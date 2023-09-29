import './index.css'

const GameResultsView = props => {
  const {choicesList, gameResults, onClickPlayAgain, resultText} = props
  const yourChoice = choicesList.find(
    item => item.id === gameResults.userChoice,
  ).imageUrl
  const opponentChoice = choicesList.find(
    item => item.id === gameResults.opponentChoice,
  ).imageUrl
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
          PLAY BUTTON
        </button>
      </div>
    </div>
  )
}

export default GameResultsView
