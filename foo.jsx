import React, {Component} from 'react';

export default class Foo extends Component {
  render() {
    const {title, onButtonClick} = this.props;
    return <div>
      <h1>{title}</h1>
      <div>
        <span className="foo-bar"/>
        <span className="foo-bar"/>
        <span className="foo-bar"/>
      </div>
      <button onClick={onButtonClick}>button</button>
    </div>
  }
}