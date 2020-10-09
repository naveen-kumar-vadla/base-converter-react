import React, { Component } from 'react';

import BaseConvertor from './BaseConvertor';

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

class BaseConversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base2Value: '1010',
      base8Value: '12',
      base10Value: '10',
      base16Value: 'a',
    };
    this.onBase2Change = this.onBase2Change.bind(this);
    this.onBase8Change = this.onBase8Change.bind(this);
    this.onBase10Change = this.onBase10Change.bind(this);
    this.onBase16Change = this.onBase16Change.bind(this);
  }

  onBase2Change(value) {
    this.setState(_ => ({
      base2Value: value,
      base8Value: BaseConvertor.binaryToOctal(value),
      base10Value: BaseConvertor.binaryToDecimal(value),
      base16Value: BaseConvertor.binaryToHexaDecimal(value),
    }));
  }

  onBase8Change(value) {
    this.setState(_ => ({
      base2Value: BaseConvertor.octalToBinary(value),
      base8Value: value,
      base10Value: BaseConvertor.octalToDecimal(value),
      base16Value: BaseConvertor.octalToHexDecimal(value),
    }));
  }

  onBase10Change(value) {
    this.setState(_ => ({
      base2Value: BaseConvertor.decimalToBinary(value),
      base8Value: BaseConvertor.decimalToOctal(value),
      base10Value: value,
      base16Value: BaseConvertor.decimalToHexaDecimal(value),
    }));
  }

  onBase16Change(value) {
    this.setState(_ => ({
      base2Value: BaseConvertor.hexaDecimalToBinary(value),
      base8Value: BaseConvertor.hexaDecimalToOctal(value),
      base10Value: BaseConvertor.hexaDecimalToDecimal(value),
      base16Value: value,
    }));
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
        <LabelWithInput
          text='Base 2'
          value={this.state.base2Value}
          onChange={this.onBase2Change}
        />
        <LabelWithInput
          text='Base 8'
          value={this.state.base8Value}
          onChange={this.onBase8Change}
        />
        <LabelWithInput
          text='Base 10'
          value={this.state.base10Value}
          onChange={this.onBase10Change}
        />
        <LabelWithInput
          text='Base 16'
          value={this.state.base16Value}
          onChange={this.onBase16Change}
        />
      </div>
    );
  }
}

export default BaseConversion;
