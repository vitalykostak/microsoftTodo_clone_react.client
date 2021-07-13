import DateUtil from '../utils/date-util';

class TaskHelper {
  constructor() {
    this.oneDayInSeconds = 24 * 60 * 60;
  }
  getCreatedOrCompletedWord(task) {
    return task.isDone ? 'Завершено' : 'Создано';
  }

  getCreatedOrCompletedDate(task) {
    return task.isDone ? task.completionDate : task.creationDate;
  }
  getHumanReadableDate(task) {
    const createdOrCompletedWord = this.getCreatedOrCompletedWord(task);
    const createdOrCompletedDate = this.getCreatedOrCompletedDate(task);

    const moment = new Date(createdOrCompletedDate);

    if (DateUtil.isToday(moment)) {
      return `${createdOrCompletedWord} сегодня`;
    }
    const humanReadableDate = `${createdOrCompletedWord} ${DateUtil.getDayName(
      moment
    )}, ${moment.getDate()} ${DateUtil.getMonthNames(
      moment
    )} ${moment.getFullYear()}г`;

    return humanReadableDate;
  }
}

export default new TaskHelper();
