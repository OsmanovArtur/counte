import React, { Component } from "react";
import { Button } from "react-bootstrap";

import classes from "./App.module.css";

class App extends Component {
  state = {
    results: 0,
    intermediateResult: [],
  };
  onClickBtn = (results) => {
    this.setState({
      results: results + this.state.results,
    });
  };
  ShowIntermediateResult = () => {
    const results = this.state.results;
    const newArr = [results];
    const intermediateResult = [...this.state.intermediateResult, ...newArr];
    this.setState({
      intermediateResult,
    });
  };

  deleteItem = (number) => {
    const newArr = this.state.intermediateResult;
    const intermediateResult = newArr.filter((item) => {
      if (item === number) {
        return false;
      } else {
        return true;
      }
    });

    this.setState({ intermediateResult });
  };
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.BtnArea}>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(-20)}
          >
            -20
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(-10)}
          >
            -10
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(0)}
          >
            0
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(5)}
          >
            5
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(10)}
          >
            10
          </Button>
          <Button
            variant="outline-secondary"
            className={classes.Btn}
            onClick={() => this.onClickBtn(20)}
          >
            20
          </Button>
          <h1> Результат:{this.state.results}</h1>
          <div>
            <h2 onClick={this.ShowIntermediateResult}>
              Промежуточный результат:
            </h2>
            {this.state.intermediateResult.map((item, index) => {
              return (
                <ul key={index} className={classes.intermediateResult}>
                  {index + 1} )
                  <li onClick={() => this.deleteItem(item)}>{item}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
