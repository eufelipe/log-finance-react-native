import React from 'react';
import {Button} from 'components';

import {
  MenuEntryType,
  InputNumber,
  EntryDescription,
  EntryCategory,
  EntryDate,
} from './components';

import {Container, SubmitContainer, AnchorDismiss, Content} from './styles';
import {useEntry} from 'hooks/useEntry';
import {useNavigation} from '@react-navigation/native';

const AddEntryScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const {value, saveEntry} = useEntry();

  const onSubmit = () => {
    saveEntry();
    navigation.goBack();
  };

  return (
    <Container>
      <AnchorDismiss />
      <MenuEntryType />

      <InputNumber />

      <Content>
        <EntryDescription />
        <EntryCategory />
        <EntryDate />

        <SubmitContainer>
          <Button title="Salvar" onPress={onSubmit} disabled={!value} />
        </SubmitContainer>
      </Content>
    </Container>
  );
};

export default AddEntryScreen;
