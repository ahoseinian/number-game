import React, {Component} from 'react';
import SingleNumber from './Single';

export default class NumberButton extends Component {
  handleClick(num) {
    this
      .props
      .clicked(num)
  }

  render() {
    const {num} = this.props;
    return (
      <button className="card btn-block" onClick={this
        .handleClick
        .bind(this, num)}><SingleNumber num={num}/></button>
    )
  }
}
