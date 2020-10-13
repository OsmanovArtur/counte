import React from "react";
import classes from "../Counter/Counter.module.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  changeCounter1,
  saveIntermediateResult1,
  deleteItem1,
} from "../store/ActionsCreators";

const Counter = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.BtnArea}>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(-40)}
        >
          -40
        </Button>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(-20)}
        >
          -20
        </Button>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(0)}
        >
          0
        </Button>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(20)}
        >
          20
        </Button>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(40)}
        >
          40
        </Button>
        <Button
          variant="outline-secondary"
          className={classes.Btn}
          onClick={() => props.onClickNumber(60)}
        >
          60
        </Button>

        <h1> Results:{props.results}</h1>
        <div>
          <h2 onClick={props.showIntermediateResult}>Intermediate result:</h2>
          {props.intermediateResult.map((item, index) => {
            return (
              <ul key={index} className={classes.intermediateResult}>
                {index + 1} )
                <li onClick={() => props.deleteItem(index)}>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.counter2.results,
    intermediateResult: state.counter2.intermediateResult,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    onClickNumber: (number) => dispatch(changeCounter1(number)),
    showIntermediateResult: () => dispatch(saveIntermediateResult1()),
    deleteItem: (index) => dispatch(deleteItem1(index)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
