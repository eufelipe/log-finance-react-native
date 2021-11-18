import React, { useState, useEffect } from 'react';
import { Keyboard as RNKeyboard, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Button, NumberKeyboard, Strap } from 'components';

import {
  MenuEntryType,
  InputNumber,
  EntryDescription,
  EntryCategory,
  EntryDate,
} from './components';

import { Screen, Container, SubmitContainer, Content } from './styles';
import { useEntry } from 'hooks/useEntry';
import { StackParamList } from 'routes/StacksRoute';

const AddEntryScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StackParamList, 'AddEntry'>>();

  const { t } = useTranslation('add');
  const {
    entry,
    value,
    category,
    setValue,
    saveEntry,
    removeEntry,
    fillValuesFromEntry,
    cleanValues,
  } = useEntry();

  const [showKeyboard, setShowKeyboard] = useState(true);
  const [editMode, setEditMode] = useState(true);

  const onDoneKeyboard = (enteredValue: number) => {
    setValue(enteredValue);
    setShowKeyboard(false);
  };

  const onSubmit = () => {
    saveEntry();
    navigation.goBack();
  };

  const showConfirmRemoveDialog = () => {
    return Alert.alert(
      t('confirm-delete-title'),
      t('confirm-delete-description'),
      [
        {
          text: t('yes'),
          onPress: () => {
            if (entry) removeEntry(entry);
            navigation.goBack();
          },
        },
        {
          text: t('no'),
        },
      ],
    );
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

  useEffect(() => {
    if (route.params?.entry) {
      fillValuesFromEntry(route.params?.entry);
      setShowKeyboard(false);
      setEditMode(true);
    }
  }, [route.params?.entry, fillValuesFromEntry]);

  useEffect(() => {
    return () => cleanValues();
  }, [cleanValues]);

  useEffect(() => {
    RNKeyboard.dismiss();
  }, [category]);

  return (
    <Screen onPress={RNKeyboard.dismiss}>
      <>
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
              {entry && editMode && (
                <Button
                  type="danger"
                  title={t('remove')}
                  onPress={showConfirmRemoveDialog}
                />
              )}
            </SubmitContainer>
          </Content>
        </Container>
        {showKeyboard && (
          <NumberKeyboard
            valueDefault={value}
            onDone={onDoneKeyboard}
            onDismiss={() => setShowKeyboard(false)}
          />
        )}
      </>
    </Screen>
  );
};

export default AddEntryScreen;
