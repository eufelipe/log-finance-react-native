import {Alert} from 'react-native';
import {useTranslation} from 'react-i18next';

export const DIALOG_OPTIONS = {
  YES: 'yes',
  NO: 'no',
};

interface AlertYesOrNoProps {
  title: string;
  message: string;
}

interface UseDialogProps {
  dialog: (argments: AlertYesOrNoProps) => void;
  alertYesOrNo: (argments: AlertYesOrNoProps) => Promise<boolean>;
}

export const useDialog = (): UseDialogProps => {
  const {t} = useTranslation('global');

  const dialog = ({title, message}: AlertYesOrNoProps) =>
    new Promise(resolve => {
      const actions = [
        {
          text: t('yes'),
          onPress: () => resolve(DIALOG_OPTIONS.YES),
        },
        {
          text: t('no'),
        },
      ];
      Alert.alert(title, message, actions, {cancelable: false});
    });

  const alertYesOrNo = async ({
    title,
    message,
  }: AlertYesOrNoProps): Promise<boolean> =>
    (await dialog({title, message})) === DIALOG_OPTIONS.YES;

  return {
    dialog,
    alertYesOrNo,
  };
};

export default useDialog;
