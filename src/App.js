import React, { Component } from "react";
import AnimateCard from "./components/AnimateCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import BootRow from "./components/Row";
import animations from "./friends.json";

class App extends Component {
  state = {
    animations,
    score: 0,
    highscore: 0,
    clicked: [],
    lostalert:"",
    winalert:""
  };
  shuffle = (animations)=> {
    animations.sort(() => Math.random() - 0.5);
    return animations
  }
  resetScore = () => {
    this.setState({
      score: 0,
      highscore: this.state.highscore,
      clicked: []
    })
  }
  resetScoreWon = ()=>{
    this.setState({
      score: 0,
      highscore: 0,
      clicked: []
    })
  }

  clickyGameFunc = id => {
    this.setState({winalert:"Good Job Continue"})
    this.setState({lostalert:""})
    if (this.state.clicked.indexOf(id) === -1) {
      const newScore = this.state.score + 1;
      this.shuffle(animations)
      this.setState({
        score: newScore
      });
      if (newScore >= this.state.highscore) {
        this.setState({ highscore: newScore });
        this.shuffle(animations)
      }
     if (newScore === 10) {
      this.setState({winalert:"You Won!"})
      this.setState({lostalert:""})
        this.shuffle(animations)
        this.resetScoreWon()
      }
      this.setState({ clicked: this.state.clicked.concat(id) });

    }
    else {
      this.setState({winalert:""})
      this.setState({lostalert:"You Lost!"})
      this.shuffle(animations)
      this.resetScore()
    }
  }
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore} lostalert={this.state.lostalert} winalert={this.state.winalert}>Click an image to begin! Don't Click duplicates</Title>
        <BootRow>
          {this.state.animations.map(friend => (
            <AnimateCard
              clickyGameFunc={this.clickyGameFunc}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </BootRow>
      </Wrapper>
    );
  }
}

export default App;
