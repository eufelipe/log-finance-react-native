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

const AddEntryScreen = (): JSX.Element => {
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
          <Button title="Salvar" onPress={() => {}} />
        </SubmitContainer>
      </Content>
    </Container>
  );
};

export default AddEntryScreen;
