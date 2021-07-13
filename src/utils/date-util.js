class DateUtil {
  static isToday(moment) {
    const now = new Date();
    if (now.getFullYear() !== moment.getFullYear()) return false;
    if (now.getMonth() !== moment.getMonth()) return false;
    if (now.getDate() !== moment.getDate()) return false;
    return true;
  }

  static getDayName(moment) {
    const dayNames = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    console.log(moment.getDay());
    return dayNames[moment.getDay()];
  }

  static getMonthNames(moment) {
    const monthNames = [
      'янв.',
      'фев.',
      'мар.',
      'апр.',
      'май.',
      'июн.',
      'июл.',
      'авг.',
      'сен.',
      'окт.',
      'ноя',
      'дек',
    ];
    return `${monthNames[moment.getMonth()]}`;
  }
}

export default DateUtil;
