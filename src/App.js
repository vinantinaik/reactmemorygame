import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from "./components/Score"
import cards from "./cards.json"
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";

let score = 0;
let topScore = 0;
let win = 0;
let lost = 0;
let msg = "";
let memoryCards = [];
class App extends Component {

  state = {
    cards,
    score,
    topScore,
    msg

  };

  removeCard = id => {
    let container = document.querySelector(".container");
    if (memoryCards.includes(id)) {

      score = 0;
      msg = "You guessed it incorrectly"
      memoryCards = [];
      container.classList.add("shake");
    }
    else {
      container.classList.remove("shake");
      memoryCards.push(id);
      score++;

      if (score > topScore) {
        topScore = score
      }
      msg = "You guessed it correctly"

    }
    this.setState({ score: score, topScore: topScore, msg: msg })
    cards.sort(() => {
      return (0.5 - Math.random())
    })
    this.setState({ cards: cards })



  }


  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="brand">
              <a href="/">Clicky Game</a>
            </li>
            <Score
              score={this.state.score}
              topScore={this.state.topScore}
              msg={this.state.msg}
            />

          </ul>
        </nav>
        <header className="header">

          <h1 >Welcome to Clicky game</h1>
          <h2 >Click on an image to earn points, but don't click on any more than once!</h2>

        </header>
        <main className="container">
          <Wrapper>
            {this.state.cards.map(item => (
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                className="col-md-3"
                removeCard={this.removeCard}

              />
            ))}
          </Wrapper>

        </main>
      </div>
    );
  }
}

export default App;
