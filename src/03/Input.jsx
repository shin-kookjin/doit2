import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  setRef(ref) {
    this.ref = ref;
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  render() {
    const { errorMessage, label, name, value, type, onFocus, autoFocus } = this.props;
    return (
      <div>
        <label>
          {label}
          <input
            id={`input_${name}`}
            ref={this.setRef}
            onChange={this.handleChange}
            onFocus={onFocus}
            value={value}
            type={type}
            autoFocus={autoFocus}
          />
          {errorMessage && <span>{errorMessage}</span>}
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defalutProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};

export default Input;
