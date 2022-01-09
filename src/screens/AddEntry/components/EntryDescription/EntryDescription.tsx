import React from 'react';
import {useTranslation} from 'react-i18next';
import {Row} from 'components';

import {Label, Input} from './styles';
import {useEntry} from 'hooks/useEntry';

const EntryDescription = (): JSX.Element => {
  const {description, setDescription} = useEntry();
  const {t} = useTranslation('add');

  return (
    <Row>
      <Label>{t('description')}</Label>
      <Input
        onChangeText={setDescription}
        value={description}
        placeholder={t('description-placeholder')}
      />
    </Row>
  );
};

export default EntryDescription;
