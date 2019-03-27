import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'react-bulma-components';

export interface Props {
  number: number;
  onIncrement?: () => void;
}

const CountNumber: React.FC<Props> = ({ number, onIncrement }) => (
  <div>
    <Button color="primary" onClick={onIncrement}>Increment</Button>
    <Tag color="warning">
    {number}
    </Tag>
  </div>
)

export default CountNumber;
