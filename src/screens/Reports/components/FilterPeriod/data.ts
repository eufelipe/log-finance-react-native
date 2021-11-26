import {
  addDays,
  endOfToday,
  endOfYesterday,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
} from 'date-fns';

export interface FilterPeriodItem {
  id: string;
  active?: boolean;
  interval: {
    start: Date;
    end: Date;
  };
}

const yerterday = endOfYesterday();
const today = endOfToday();
const last15Days = addDays(today, -15);
const month = startOfMonth(today);
const week = startOfWeek(today);
const quarter = startOfQuarter(today);
const semester = addDays(today, -180);
const year = startOfYear(today);

const DATA: FilterPeriodItem[] = [
  {
    id: 'today',
    interval: {
      start: yerterday,
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
  {
    id: 'quarter',
    interval: {
      start: quarter,
      end: today,
    },
  },
  {
    id: 'semester',
    interval: {
      start: semester,
      end: today,
    },
  },
  {
    id: 'year',
    interval: {
      start: year,
      end: today,
    },
  },
];

export default DATA;
