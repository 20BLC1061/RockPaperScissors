import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #ffffff;
`
export const GameContainer = styled.div`
  width: 80%;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 160px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90px;
  }
`
export const PlayView = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
`
export const PlayButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 50%;
`
