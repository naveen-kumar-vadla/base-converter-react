import React, { Component } from 'react';

import { Binary, Octal, Decimal, HexaDecimal } from './BaseConvertor';

const LabelWithInput = ({ text, value, onChange }) => {
  return (
    <label>
      {text} :{' '}
      <input
        type='text'
        name={text}
        id={text}
        value={value}
        onChange={event => onChange(event.target.value)}
      ></input>
    </label>
  );
};

const BaseType = ({ text, value, onChange, type }) => {
  return (
    <LabelWithInput
      text={text}
      value={value}
      onChange={v => onChange(type(v))}
    />
  );
};

class BaseConversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base2Value: '1010',
      base8Value: '12',
      base10Value: '10',
      base16Value: 'a',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(_ => state);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
        <BaseType
          text='Base 2'
          value={this.state.base2Value}
          onChange={this.onChange}
          type={Binary}
        />
        <BaseType
          text='Base 8'
          value={this.state.base8Value}
          onChange={this.onChange}
          type={Octal}
        />
        <BaseType
          text='Base 10'
          value={this.state.base10Value}
          onChange={this.onChange}
          type={Decimal}
        />
        <BaseType
          text='Base 16'
          value={this.state.base16Value}
          onChange={this.onChange}
          type={HexaDecimal}
        />
      </div>
    );
  }
}

export default BaseConversion;
