import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'react-bulma-components';

import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Props for the functional component
export interface NumberProps {
  number: number;
  onIncrement?: () => void;
}

// The functional component itself
const NumberComponent: React.FC<NumberProps> = ({ number, onIncrement }) => (
  <div>
    <Button color="primary" onClick={onIncrement}>Increment</Button>
    <Tag color="warning">
    {number}
    </Tag>
  </div>
)

// The Redux container mappings
export function mapStateToProps({ enthusiasmLevel }: StoreState) {
  return {
    number: enthusiasmLevel,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberComponent);
