import React, {Component} from 'react';
import SingleNumber from './Single';
import classNames from 'classnames';

export default class NumberButton extends Component {
  handleClick(num) {
    this
      .props
      .clicked(num)
  }

  render() {
    const {num, active} = this.props;
    const classN = classNames("card btn-block", {'bg-info': active});
    return (
      <button className={classN} onClick={this
        .handleClick
        .bind(this, num)}><SingleNumber num={num}/></button>
    )
  }
}
