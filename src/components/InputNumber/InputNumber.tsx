import React, {useEffect, useState} from 'react';

import {Container, Input, InputValue, Touchable, BackspaceIcon} from './styles';
import {Currency} from 'components';

interface Props {
  setShowKeyboard: () => void;
  value?: number;
  setValue: (value: number) => void;
}

const InputNumber = ({
  value = 0,
  setValue,
  setShowKeyboard,
}: Props): JSX.Element => {
  const [showBackSpace, setShowBackSpace] = useState(false);

  const onBackSpace = () => {
    if (value === 0) return;
    setValue(Number(value.toString().slice(0, -1)));
  };

  useEffect(() => {
    setShowBackSpace(value > 0);
  }, [value]);

  return (
    <>
      <Container>
        <Currency
          value={Number(value ?? 0)}
          render={text => <Input>{text}</Input>}
        />

        {!!showBackSpace && (
          <Touchable onPress={onBackSpace}>
            <BackspaceIcon />
          </Touchable>
        )}
      </Container>
      <InputValue onPress={setShowKeyboard} addSpaceRight={!!showBackSpace} />
    </>
  );
};

export default InputNumber;
