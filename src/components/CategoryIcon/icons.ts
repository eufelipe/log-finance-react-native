export interface IconProp {
  [key: string]: {
    name: string;
    type: string;
  };
}

export const icons: IconProp = {
  others: {
    name: 'list',
    type: 'MaterialIcons',
  },
  food: {
    name: 'settings',
    type: 'MaterialIcons',
  },
};

export default icons;
