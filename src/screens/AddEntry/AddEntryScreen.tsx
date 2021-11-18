import React, {useState, useEffect} from 'react';
import {Keyboard as RNKeyboard} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {Button, Keyboard, Strap} from 'components';

import {
  MenuEntryType,
  InputNumber,
  EntryDescription,
  EntryCategory,
  EntryDate,
} from './components';

import {Screen, Container, SubmitContainer, Content} from './styles';
import {useEntry} from 'hooks/useEntry';

const AddEntryScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const {t} = useTranslation('add');
  const {value, setValue, saveEntry} = useEntry();

  const [showKeyboard, setShowKeyboard] = useState(true);

  const onDoneKeyboard = (enteredValue: number) => {
    setValue(enteredValue);
    setShowKeyboard(false);
  };

  const onSubmit = () => {
    saveEntry();
    navigation.goBack();
  };

  useEffect(() => {
    const showSubscription = RNKeyboard.addListener('keyboardDidShow', () => {
      setShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (showKeyboard) {
      RNKeyboard.dismiss();
    }
  }, [showKeyboard]);

  return (
    <Screen>
      <Container>
        <Strap />
        <MenuEntryType />

        <InputNumber setShowKeyboard={() => setShowKeyboard(true)} />

        <Content>
          <EntryDescription />
          <EntryCategory />
          <EntryDate />

          <SubmitContainer>
            <Button title={t('save')} onPress={onSubmit} disabled={!value} />
          </SubmitContainer>
        </Content>
      </Container>
      {showKeyboard && (
        <Keyboard
          valueDefault={value}
          onDone={onDoneKeyboard}
          onDismiss={() => setShowKeyboard(false)}
        />
      )}
    </Screen>
  );
};

export default AddEntryScreen;
