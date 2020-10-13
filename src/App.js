import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import classes from "./App.module.css";
import {
  changeCounter,
  saveIntermediateResult,
  deleteItem,
} from "./store/ActionsCreators";
import Counter from "./Counter/Counter";

class App extends Component {
  render() {
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.BtnArea}>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(-20)}
            >
              -20
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(-10)}
            >
              -10
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(0)}
            >
              0
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(5)}
            >
              5
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(10)}
            >
              10
            </Button>
            <Button
              variant="outline-secondary"
              className={classes.Btn}
              onClick={() => this.props.onClickBtn(20)}
            >
              20
            </Button>
            <h1> Результат:{this.props.results}</h1>
            <div>
              <h2 onClick={this.props.showIntermediateResult}>
                Промежуточный результат:
              </h2>
              {this.props.intermediateResult.map((item, index) => {
                return (
                  <ul key={index} className={classes.intermediateResult}>
                    {index + 1} )
                    <li onClick={() => this.props.deleteItem(index)}>{item}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
        <Counter />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.counter1.results,
    intermediateResult: state.counter1.intermediateResult,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClickBtn: (number) => dispatch(changeCounter(number)),
    showIntermediateResult: () => dispatch(saveIntermediateResult()),
    deleteItem: (index) => dispatch(deleteItem(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
