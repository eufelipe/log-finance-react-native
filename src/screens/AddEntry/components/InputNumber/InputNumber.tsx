import React, {useEffect, useState} from 'react';

import {useEntry} from 'hooks/useEntry';
import {Container, Input, InputValue, Touchable, BackspaceIcon} from './styles';
import {Currency} from 'components';

interface Props {
  setShowKeyboard: () => void;
}

const InputNumber = ({setShowKeyboard}: Props): JSX.Element => {
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
