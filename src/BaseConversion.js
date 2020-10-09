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
    this.state = { base2Value: '1001', base8Value: '11', base10Value: '9' };
    this.onBase2Change = this.onBase2Change.bind(this);
    this.onBase8Change = this.onBase8Change.bind(this);
    this.onBase10Change = this.onBase10Change.bind(this);
  }

  onBase2Change(value) {
    this.setState(_ => ({
      base2Value: value,
      base8Value: BaseConvertor.bin2octa(value) || '',
      base10Value: BaseConvertor.bin2dec(value) || '',
    }));
  }

  onBase8Change(value) {
    this.setState(_ => ({
      base2Value: BaseConvertor.octa2bin(value) || '',
      base8Value: value,
      base10Value: BaseConvertor.oct2dec(value) || '',
    }));
  }

  onBase10Change(value) {
    this.setState(_ => ({
      base2Value: BaseConvertor.dec2bin(value) || '',
      base8Value: BaseConvertor.dec2octa(value) || '',
      base10Value: value,
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
      </div>
    );
  }
}

export default BaseConversion;
