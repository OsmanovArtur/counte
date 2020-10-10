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
  showIntermediateResult = () => {
    const newArr = [...this.state.intermediateResult];
    newArr.push(this.state.results);

    this.setState({
      intermediateResult: newArr,
    });
  };
  deleteItem = (item, index) => {
    const newArr = this.state.intermediateResult;

    newArr.splice(index, 1);
    const intermediateResult = newArr;

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
            <h2 onClick={this.showIntermediateResult}>
              Промежуточный результат:
            </h2>
            {this.state.intermediateResult.map((item, index) => {
              return (
                <ul key={index} className={classes.intermediateResult}>
                  {index + 1} )
                  <li onClick={() => this.deleteItem(index, index)}>{item}</li>
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
