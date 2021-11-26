import {Currency} from 'components';
import React from 'react';

import {ReportItem} from 'services/reports';

import {Container, Title, SubTitle, Circle} from './styles';

const LegendItem = ({text, value, sumed, color}: ReportItem): JSX.Element => {
  return (
    <Container>
      <Circle color={color} />

      <Title>
        {text} ({sumed})
      </Title>

      <Currency
        value={value}
        render={currency => <SubTitle>{currency}</SubTitle>}
      />
    </Container>
  );
};

export default LegendItem;
