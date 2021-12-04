import * as moment from 'moment';
import { Sex } from '../types/sex.type';

/**
 * Statyczna klasa do obsługi Pesela
 *
 * @source http://www.algorytm.org/numery-identyfikacyjne/pesel/pesel-j.html
 */
export class PeselUtil {
  /** Długość numeru PESEL */
  static readonly peselLength = 11;

  /** Dostaje datę urodzenia z PESEL-u */
  static getBirthDate(pesel: string): Date {
    if (!pesel || pesel?.length !== PeselUtil.peselLength) {
      // @ts-ignore
      return null;
    }
    return moment()
      .year(PeselUtil.getBirthYear(pesel))
      .month(PeselUtil.getBirthMonth(pesel) - 1)
      .date(PeselUtil.getBirthDay(pesel))
      .startOf('day')
      .toDate();
  }

  /** Dostaje rok urodzenia z PESEL-u */
  static getBirthYear(pesel: string): number {
    let year: number;
    let month: number;
    year = 10 * +pesel[0];
    year += +pesel[1];
    month = 10 * +pesel[2];
    month += +pesel[3];
    if (month > 80 && month < 93) {
      year += 1800;
    } else if (month > 0 && month < 13) {
      year += 1900;
    } else if (month > 20 && month < 33) {
      year += 2000;
    } else if (month > 40 && month < 53) {
      year += 2100;
    } else if (month > 60 && month < 73) {
      year += 2200;
    }
    return year;
  }

  /** Dostaje miesiąc urodzenia z PESEL-u */
  static getBirthMonth(pesel: string): number {
    let month: number;
    month = 10 * +pesel[2];
    month += +pesel[3];
    if (month > 80 && month < 93) {
      month -= 80;
    } else if (month > 20 && month < 33) {
      month -= 20;
    } else if (month > 40 && month < 53) {
      month -= 40;
    } else if (month > 60 && month < 73) {
      month -= 60;
    }
    return month;
  }

  /** Dostaje dzień urodzenia z PESEL-u */
  static getBirthDay(pesel: string): number {
    return 10 * +pesel[4] + +pesel[5];
  }

  /** Dostaje płeć z PESEL-u */
  static getSex(pesel: string): Sex {
    if (!pesel || pesel?.length !== PeselUtil.peselLength) {
      // @ts-ignore
      return null;
    }
    const sexDigit = +pesel[9];
    if (isNaN(sexDigit)) {
      // @ts-ignore
      return null;
    } else {
      return sexDigit % 2 === 1 ? 'M' : 'K';
    }
  }

  /** Sprawdza czy poprawny PESEL */
  static checkSum(pesel: string): boolean {
    let sum =
      +pesel[0] +
      3 * +pesel[1] +
      7 * +pesel[2] +
      9 * +pesel[3] +
      +pesel[4] +
      3 * +pesel[5] +
      7 * +pesel[6] +
      9 * +pesel[7] +
      +pesel[8] +
      3 * +pesel[9];
    sum %= 10;
    sum = 10 - sum;
    sum %= 10;
    let isValid = true;
    const year = this.getBirthYear(pesel);
    const month = this.getBirthMonth(pesel);
    const day = this.getBirthDay(pesel);

    /** walidacja na same zera w dacie */
    if (+year === 0 || +month === 0 || +day === 0) {
      isValid = false;
    }

    /** walidacja na rok przestępny - luty 29/28 dni */
    if ((+year % 4 === 0 && +year % 100 !== 0) || +year % 400 === 0) {
      if (+month === 2) {
        if (+day > 29) {
          isValid = false;
        }
      }
    } else {
      if (+month === 2) {
        if (+day > 28) {
          isValid = false;
        }
      }
    }

    /** walidacja na podaną liczbę dni w miesiącu  */
    switch (+month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (+day > 31) {
          isValid = false;
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        if (+day > 30) {
          isValid = false;
        }
        break;
      case 2:
        break;
      /** walidacja na miesiąc > 12 */
      default:
        isValid = false;
    }

    return sum === +pesel[10] && isValid;
  }
}
