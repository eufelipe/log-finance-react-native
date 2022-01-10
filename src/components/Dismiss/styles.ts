import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'styles/colors';

export const Container = styled.TouchableOpacity``;

export const DismissIcon = styled(Icon).attrs({
  name: 'chevron-down-circle',
  color: `${Colors.white}50`,
  size: 32,
})``;
