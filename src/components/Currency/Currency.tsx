import React from 'react';
import NumberFormat from 'react-number-format';
import {Text} from 'styles/layout';

interface Props {
  value: number;
  prefix?: string;
  decimalScale?: number;
  render?: (text: string) => React.ReactNode | string;
}

const Currency = ({
  value,
  prefix = 'R$ ',
  decimalScale = 2,
  render,
}: Props): JSX.Element => {
  const renderItem = (text: string) => {
    if (render) {
      return render(text);
    }
    return <Text>{text}</Text>;
  };

  return (
    <NumberFormat
      fixedDecimalScale
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      prefix={prefix}
      value={value}
      decimalScale={decimalScale}
      renderText={renderItem}
    />
  );
};

export default Currency;
