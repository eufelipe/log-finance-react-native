import {Button, Currency, Strap} from 'components';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {
  Container,
  DismissArea,
  Grid,
  Key,
  EmptyKey,
  KeyLabel,
  ButtonContainer,
  BackspaceIcon,
  Touchable,
  Label,
  ContainnerValue,
  Value,
} from './styles';

interface Props {
  valueDefault?: number;
  onDismiss: () => void;
  onDone: (value: number) => void;
}

const MAX_NUMBER_SIZE = 8;

export const NumberKeyboard = ({
  onDone,
  onDismiss,
  valueDefault = 0,
}: Props): JSX.Element => {
  const [value, setValue] = useState(`${valueDefault}`);
  const {t} = useTranslation('global');

  const onBackSpace = () => {
    if (!value) return;
    setValue(value.toString().slice(0, -1));
  };

  const appendValue = (valueEntered: string) => {
    if (valueEntered === '0' && value === '0') return;
    if (valueEntered === '.' && value.indexOf('.') > -1) return;

    const sumValue = `${value}${valueEntered}`;

    if (sumValue.length === MAX_NUMBER_SIZE) return;

    setValue(sumValue);
  };

  return (
    <>
      <DismissArea onPress={onDismiss} />

      <Container>
        <ContainnerValue>
          <Currency
            value={Number(value)}
            render={text => <Value>{text}</Value>}
          />
          <Touchable onPress={() => setValue('')}>
            <Label>{t('clear')}</Label>
          </Touchable>
        </ContainnerValue>

        <Strap />

        <Grid>
          <Key onPress={() => appendValue('1')}>
            <KeyLabel>1</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('2')}>
            <KeyLabel>2</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('3')}>
            <KeyLabel>3</KeyLabel>
          </Key>
        </Grid>
        <Grid>
          <Key onPress={() => appendValue('4')}>
            <KeyLabel>4</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('5')}>
            <KeyLabel>5</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('6')}>
            <KeyLabel>6</KeyLabel>
          </Key>
        </Grid>

        <Grid>
          <Key onPress={() => appendValue('7')}>
            <KeyLabel>7</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('8')}>
            <KeyLabel>8</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('9')}>
            <KeyLabel>9</KeyLabel>
          </Key>
        </Grid>
        <Grid>
          <Key onPress={() => appendValue('.')}>
            <KeyLabel>,</KeyLabel>
          </Key>
          <Key onPress={() => appendValue('0')}>
            <KeyLabel>0</KeyLabel>
          </Key>
          <EmptyKey>
            <Touchable onPress={() => onBackSpace()}>
              <BackspaceIcon />
            </Touchable>
          </EmptyKey>
        </Grid>
        <ButtonContainer>
          <Button inverse title={t('cancel')} onPress={onDismiss} />
          <Button title={t('done')} onPress={() => onDone(Number(value))} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default NumberKeyboard;
