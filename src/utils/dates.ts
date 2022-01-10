import {
  format as formatPattern,
  isValid,
  parseISO as parseISOFNS,
} from 'date-fns';

import locale from 'date-fns/locale/pt-BR';

export const DATE_FORMAT_ISO = 'yyyy-MM-dd';
export const DATE_FORMAT_BR = 'dd/MM/yyyy';
export const DATE_FORMAT_FRIENDLY = " dd/MM 'às' HH:mm";
export const DATE_FORMAT_FRIENDLY_TIME = "'às' HH:mm";

export function parseStringToDate(value: string): Date {
  const parsedDate = parseISOFNS(value);
  if (!isValid(parsedDate)) {
    throw Error('canot parse date');
  }
  return parsedDate;
}
export function parseDateToString({
  value,
  format = DATE_FORMAT_BR,
}: {
  value: Date;
  format?: string;
}): string {
  return formatPattern(value, format, {locale});
}

export const getDate = (date: Date): string => {
  return formatPattern(date, DATE_FORMAT_ISO, {locale});
};

export const getDateToday = (): string => {
  const today = new Date();
  return formatPattern(today, DATE_FORMAT_ISO, {locale});
};

export const getDateAndHourFriendly = (value: Date): string => {
  return formatPattern(value, DATE_FORMAT_FRIENDLY, {locale});
};

export const getTimeFriendly = (value: Date): string => {
  return formatPattern(value, DATE_FORMAT_FRIENDLY_TIME, {locale});
};
