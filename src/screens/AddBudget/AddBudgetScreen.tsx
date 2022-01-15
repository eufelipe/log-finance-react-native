import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {
  Toolbar,
  Button,
  NumberKeyboard,
  InputNumber,
  Row,
  CategoryPick,
} from 'components';

import {Container, SubmitContainer, Content, Label, Input} from './styles';
import {Category} from 'models';
import {useNavigation} from '@react-navigation/native';
import {useBudgetContext} from 'contexts/BudgetContext';

const AddBudgetScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState<Category>();
  const [showKeyboard, setShowKeyboard] = useState(true);
  const {t} = useTranslation('add-budget');

  const {saveBudget} = useBudgetContext();

  const onDoneKeyboard = (enteredValue: number) => {
    setValue(enteredValue);
    setShowKeyboard(false);
  };

  const onSubmit = () => {
    if (!value || !category) return;

    saveBudget({
      value,
      category,
      description,
    });

    navigation.goBack();
  };

  return (
    <>
      <Container>
        <Toolbar title={t('title')} />
        <Content>
          <InputNumber
            value={value}
            setValue={setValue}
            setShowKeyboard={() => setShowKeyboard(true)}
          />

          <CategoryPick category={category} setCategory={setCategory} />

          <Row>
            <Label>{t('description')}</Label>
            <Input
              onChangeText={setDescription}
              value={description}
              placeholder={t('description-placeholder')}
            />
          </Row>

          <SubmitContainer>
            <Button
              title={t('save')}
              onPress={onSubmit}
              disabled={!value || !category}
            />
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
  );
};

export default AddBudgetScreen;
