import React, {Component} from 'react';
import CurrentValue from '../number/Single';
import {connect} from 'react-redux';

class Display extends Component {
  render() {
    const {current} = this.props.display;
    return (
      <div className="card p-1">
        <CurrentValue num={current}/>
      </div>
    )
  }
}

export default connect((state) => {
  return {display: state.display}
})(Display);
