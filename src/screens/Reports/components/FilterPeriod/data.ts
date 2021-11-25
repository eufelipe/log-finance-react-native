import {addDays, startOfMonth, startOfWeek} from 'date-fns';

export interface FilterPeriodItem {
  id: string;
  active?: boolean;
  interval: {
    start: Date;
    end: Date;
  };
}

const today = new Date();
const last15Days = addDays(today, -15);
const month = startOfMonth(today);
const week = startOfWeek(today);

const DATA: FilterPeriodItem[] = [
  {
    id: 'today',
    interval: {
      start: today,
      end: today,
    },
    active: true,
  },
  {
    id: 'week',
    interval: {
      start: week,
      end: today,
    },
  },
  {
    id: '15-days',
    interval: {
      start: last15Days,
      end: today,
    },
  },
  {
    id: 'month',
    interval: {
      start: month,
      end: today,
    },
  },
];

export default DATA;
