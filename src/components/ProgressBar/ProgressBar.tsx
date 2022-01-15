import React from 'react';
import {Container, Progress} from './styles';

interface ProgressBarProps {
  percent: number;
  color?: string;
}

const ProgressBar = ({percent, color}: ProgressBarProps): JSX.Element => {
  return (
    <Container>
      <Progress percent={percent} color={color} />
    </Container>
  );
};

export default ProgressBar;
