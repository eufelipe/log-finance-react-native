import React, {useEffect, useState} from 'react';
import {createNumberMask} from 'react-native-mask-input';

import {useEntry} from 'hooks/useEntry';
import {Container, Input, Touchable, BackspaceIcon} from './styles';
import {sanitizeToFloat} from 'utils/number';

const InputNumber = (): JSX.Element => {
  const {value = 0, setValue} = useEntry();

  const [showBackSpace, setShowBackSpace] = useState(false);

  const onBackSpace = () => {
    if (value === 0) return;
    setValue(Number(value.toString().slice(0, -1)));
  };

  useEffect(() => {
    setShowBackSpace(value > 0);
  }, [value]);

  return (
    <Container>
      <Input
        value={`${value ?? 0}`}
        mask={createNumberMask({
          prefix: ['R', '$', ' '],
          delimiter: '.',
          separator: ',',
          precision: 2,
        })}
        onChangeText={masked => {
          const parseValue = sanitizeToFloat(masked);
          setValue(parseValue);
        }}
      />

      {!!showBackSpace && (
        <Touchable onPress={onBackSpace}>
          <BackspaceIcon />
        </Touchable>
      )}
    </Container>
  );
};

export default InputNumber;
