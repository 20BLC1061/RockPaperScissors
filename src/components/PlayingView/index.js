import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import {
  Header,
  GameContainer,
  ScoreContainer,
  PlayView,
  PlayButton,
} from './styledComponents'

import GameResultsView from '../GameResultsView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    displayPlayView: true,
    gameResults: {
      opponentChoice: '',
      userChoice: '',
    },
  }

  onClickPlayAgain = () => {
    this.setState({displayPlayView: true})
  }

  relatedScore = () => {
    const result = this.renderResultText()
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  renderResultText = () => {
    const {gameResults} = this.state
    const {userChoice, opponentChoice} = gameResults
    let text = ''
    switch (opponentChoice) {
      case userChoice:
        text = 'IT IS DRAW'
        break
      case 'ROCK':
        if (userChoice === 'SCISSORS') {
          text = 'YOU LOSE'
        } else if (userChoice === 'PAPER') {
          text = 'YOU WON'
        }
        break
      case 'PAPER':
        if (userChoice === 'ROCK') {
          text = 'YOU LOSE'
        } else if (userChoice === 'SCISSORS') {
          text = 'YOU WON'
        }
        break
      case 'SCISSORS':
        if (userChoice === 'PAPER') {
          text = 'YOU LOSE'
        } else if (userChoice === 'ROCK') {
          text = 'YOU WON'
        }
        break
      default:
        return null
    }
    return text
  }

  onClickRPSButton = event => {
    const randomId = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        displayPlayView: false,
        gameResults: {
          userChoice: event.target.id,
          opponentChoice: choicesList[randomId].id,
        },
      },
      this.relatedScore,
    )
  }

  renderHeader = () => {
    const {score} = this.state
    return (
      <Header>
        <h1 className="gameHeading">
          ROCK <br /> PAPER <br />
          SCISSORS
        </h1>
        <ScoreContainer>
          <p className="scoreTitle">Score</p>
          <p className="totalScore">{score}</p>
        </ScoreContainer>
      </Header>
    )
  }

  renderPlayerView = () => (
    <PlayView>
      <PlayButton
        type="button"
        data-testid="rockButton"
        onClick={this.onClickRPSButton}
      >
        <img
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          id={choicesList[0].id}
          className="rpsImage"
        />
      </PlayButton>
      <PlayButton
        type="button"
        data-testid="scissorsButton"
        onClick={this.onClickRPSButton}
      >
        <img
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          id={choicesList[1].id}
          className="rpsImage"
        />
      </PlayButton>
      <PlayButton
        type="button"
        data-testid="paperButton"
        onClick={this.onClickRPSButton}
      >
        <img
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          id={choicesList[2].id}
          className="rpsImage"
        />
      </PlayButton>
    </PlayView>
  )

  renderRules = () => (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Rules
        </button>
      }
    >
      {close => (
        <div className="popupContainer">
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine />
          </button>

          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rulesImage"
          />
        </div>
      )}
    </Popup>
  )

  render() {
    const {displayPlayView, gameResults} = this.state
    return (
      <GameContainer>
        {this.renderHeader()}
        {displayPlayView ? (
          <div className="playContainer">
            {this.renderPlayerView()}
            {this.renderRules()}
          </div>
        ) : (
          <GameResultsView
            gameResults={gameResults}
            choicesList={choicesList}
            onClickPlayAgain={this.onClickPlayAgain}
            resultText={this.renderResultText()}
          />
        )}
      </GameContainer>
    )
  }
}

export default PlayingView
