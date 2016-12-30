import React, {Component} from 'react';
import NumberBlock from '../number/Single';
import {connect} from 'react-redux';
import classNames from 'classnames';

class Display extends Component {
  render() {
    const {current, target} = this.props.display;
    const equalClass = classNames('display-1 text-xs-center', {'text-danger': current !== target});
    return (
      <div className="card p-1">
        <div className="row">
          <div className="col-xs-5">
            <NumberBlock num={current}/>
          </div>
          <div className="col-xs-2">
            <h1 className={equalClass}>=</h1>
          </div>
          <div className="col-xs-5">
            <NumberBlock num={target} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {display: state.display}
})(Display);
