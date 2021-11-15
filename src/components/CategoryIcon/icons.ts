export interface IconProp {
  [key: string]: {
    name: string;
    type: string;
    contained: string;
  };
}

export const icons: IconProp = {
  others: {
    name: 'list',
    type: 'MaterialIcons',
    contained: '#6F7D9B',
  },
  food: {
    name: 'settings',
    type: 'MaterialIcons',
    contained: '',
  },
};

export default icons;
