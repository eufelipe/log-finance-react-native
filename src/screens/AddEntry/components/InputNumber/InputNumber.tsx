import React, {useEffect, useState, useRef} from 'react';
import {createNumberMask} from 'react-native-mask-input';

import {useEntry} from 'hooks/useEntry';
import {Container, Input, Touchable, BackspaceIcon} from './styles';

const InputNumber = (): JSX.Element => {
  const {value = 0, setValue} = useEntry();

  const [showBackSpace, setShowBackSpace] = useState(false);

  const onBackSpace = () => {
    if (value === 0) return;
    setValue(Number(value.toString().slice(0, -1)));
  };

  useEffect(() => {
    console.log('looop');
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
        onChangeText={(masked, unmasked) => {
          const parseValue = parseFloat(unmasked);
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
