import React from 'react';
import {useTranslation} from 'react-i18next';

import {Container, EmptyAnimation, Title, SubTitle} from './styles';

import EMPTY from './empty.json';

const ListEmpty = (): JSX.Element => {
  const {t} = useTranslation('home');

  return (
    <Container>
      <EmptyAnimation source={EMPTY} />

      <Title>{t('no-entries')}</Title>
      <SubTitle>{t('message-add-new')}</SubTitle>
    </Container>
  );
};

export default ListEmpty;
