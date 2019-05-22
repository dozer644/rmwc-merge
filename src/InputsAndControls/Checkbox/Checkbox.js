import React from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxM } from '@rmwc/checkbox';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';

function Checkbox(props) {
  return (
      <CheckboxM {...props} onChange={props.onChange} style={props.style}>
        {props.children}Bob
      </CheckboxM>
  );
}

Checkbox.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    style:PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    value: PropTypes.bool,
    label: PropTypes.string
};

export { Checkbox as default };
