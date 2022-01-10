import Colors from 'styles/colors';

export interface IconProp {
  [key: string]: {
    name: string;
    type: string;
    contained: string;
    color: string;
  };
}

// TODO: Mover as propreidades de name, type, contained e color para
// categories.json para serem injetadas no banco.
// Para no futuro toda a configuraçãos de categorias sejam feitas dinamicamente
// Possibilitando assim a criação, alteração e exclusão de categorias

export const icons: IconProp = {
  personal: {
    name: 'account-box',
    type: 'MaterialIcons',
    contained: '#2E82B0',
    color: Colors.white,
  },
  payments: {
    name: 'account-balance-wallet',
    type: 'MaterialIcons',
    contained: '#6FCA44',
    color: Colors.white,
  },
  others: {
    name: 'list',
    type: 'MaterialIcons',
    contained: '#6F7D9B',
    color: Colors.white,
  },
  car: {
    name: 'directions-car',
    type: 'MaterialIcons',
    contained: '#693790',
    color: Colors.white,
  },
  clothing: {
    name: 'dry-cleaning',
    type: 'MaterialIcons',
    contained: '#E522AF',
    color: Colors.white,
  },
  salary: {
    name: 'attach-money',
    type: 'MaterialIcons',
    contained: '#237A40',
    color: Colors.white,
  },
  bonus: {
    name: 'exposure-plus-1',
    type: 'MaterialIcons',
    contained: '#CD7C1C',
    color: Colors.white,
  },
  education: {
    name: 'menu-book',
    type: 'MaterialIcons',
    contained: '#3377B6',
    color: Colors.white,
  },
  electronics: {
    name: 'radio',
    type: 'MaterialIcons',
    contained: '#E87522',
    color: Colors.white,
  },
  health: {
    name: 'local-hospital',
    type: 'MaterialIcons',
    contained: '#309317',
    color: Colors.white,
  },
  home: {
    name: 'home',
    type: 'MaterialIcons',
    contained: '#2C6A6D',
    color: Colors.white,
  },
  leisure: {
    name: 'sports-handball',
    type: 'MaterialIcons',
    contained: '#2747B8',
    color: Colors.white,
  },
  restaurant: {
    name: 'restaurant',
    type: 'MaterialIcons',
    contained: '#A3252C',
    color: Colors.white,
  },
  services: {
    name: 'home-repair-service',
    type: 'MaterialIcons',
    contained: '#283C64',
    color: Colors.white,
  },
  supermarket: {
    name: 'shopping-cart',
    type: 'MaterialIcons',
    contained: '#AD29AF',
    color: Colors.white,
  },
  transportation: {
    name: 'directions-subway',
    type: 'MaterialIcons',
    contained: '#314372',
    color: Colors.white,
  },
  debits: {
    name: 'money-off',
    type: 'MaterialIcons',
    contained: '#0F680D',
    color: Colors.white,
  },
  loans: {
    name: 'monetization-on',
    type: 'MaterialIcons',
    contained: '#309317',
    color: Colors.white,
  },
  entertainment: {
    name: 'assistant',
    type: 'MaterialIcons',
    contained: '#18A180',
    color: Colors.white,
  },
  hobbies: {
    name: 'sports-tennis',
    type: 'MaterialIcons',
    contained: '#0588A5',
    color: Colors.white,
  },
  food: {
    name: 'fastfood',
    type: 'MaterialIcons',
    contained: '#9A2121',
    color: Colors.white,
  },
  family: {
    name: 'family-restroom',
    type: 'MaterialIcons',
    contained: '#A411BC',
    color: Colors.white,
  },
  gift: {
    name: 'card-giftcard',
    type: 'MaterialIcons',
    contained: '#DA620B',
    color: Colors.white,
  },
  donations: {
    name: 'attach-money',
    type: 'MaterialIcons',
    contained: '#309317',
    color: Colors.white,
  },
  investiments: {
    name: 'insights',
    type: 'MaterialIcons',
    contained: '#60781C',
    color: Colors.white,
  },
  shopping: {
    name: 'shopping-bag',
    type: 'MaterialIcons',
    contained: '#591C39',
    color: Colors.white,
  },
  pets: {
    name: 'pets',
    type: 'MaterialIcons',
    contained: '#845C36',
    color: Colors.white,
  },
  taxes: {
    name: 'local-atm',
    type: 'MaterialIcons',
    contained: '#194F11',
    color: Colors.white,
  },
  work: {
    name: 'home-repair-service',
    type: 'MaterialIcons',
    contained: '#3B4876',
    color: Colors.white,
  },
  kids: {
    name: 'child-care',
    type: 'MaterialIcons',
    contained: '#A320A6',
    color: Colors.white,
  },
  amusement: {
    name: 'festival',
    type: 'MaterialIcons',
    contained: '#CD471D',
    color: Colors.white,
  },
  utilities: {
    name: 'all-inbox',
    type: 'MaterialIcons',
    contained: '#6F7D9B',
    color: Colors.white,
  },
};

export default icons;
