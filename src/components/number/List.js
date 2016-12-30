import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrentDisplay, changeCalculationModel} from '../../actions';
import NumberButton from './NumberButton';

class List extends Component {
  handleClick(num) {
    this
      .props
      .dispatch(changeCurrentDisplay(num * this.props.model))
  }

  changeCalcModel(model) {
    this
      .props
      .dispatch(changeCalculationModel(model))
  }

  render() {
    const numbers = Array(9)
      .fill()
      .map((v, i) => (
        <div className="col-xs-4" key={i}><NumberButton num={i + 1} clicked={this
          .handleClick
          .bind(this)}/></div>
      ));

    return (
      <div className="row">
        <div className="col-xs-9">
          <div className="row">
            {numbers}
          </div>
        </div>
        <div className="col-xs-3">
          <NumberButton num="+" active={this.props.model === 1} clicked={this
            .changeCalcModel
            .bind(this, 1)}/>
          <NumberButton num="-" active={this.props.model === -1} clicked={this
            .changeCalcModel
            .bind(this, -1)}/>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {model: state.calculation.model}
})(List);
