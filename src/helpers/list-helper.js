class ListHelper {
  //sort only parentless tasks
  sortParentlessTask(list) {
    return list.filter(task => !task.externalList);
  }

  //sort only completed tasks
  sortCompletedTask(list) {
    return list.filter(task => task.isDone);
  }

  //sort only important tasks
  sortImportantTask(list) {
    return list.filter(task => task.isImportant);
  }

  sortByParentList(list, listId) {
    return list.filter(task => task.externalList === listId);
  }

  getTasksByListId(list, listId) {
    switch (listId) {
      case '__DEFAULT_LIST_TASKS__': {
        return this.sortParentlessTask(list);
      }

      case '__DEFAULT_LIST_IMPORTANT__': {
        return this.sortImportantTask(list);
      }

      default: {
        return this.sortByParentList(list, listId);
      }
    }
  }

  findAndReplace(list, newTask) {
    return list.map(currentTask =>
      currentTask._id === newTask._id ? newTask : currentTask
    );
  }

  findTask(list, taskId) {
    return list.find(currentTask => currentTask._id === taskId);
  }

  deleteOneTask(list, taskId) {
    return list.filter(task => task._id !== taskId);
  }

  isDefaultList(activeListId) {
    return /^__DEFAULT_LIST_/.test(activeListId);
  }

  isDefaultImportantList(activeListId) {
    return activeListId === '__DEFAULT_LIST_IMPORTANT__';
  }

  getListLabel(activeListId, defaultLists, customLists) {
    const isDefaultList = this.isDefaultList(activeListId);
    const targetObj = isDefaultList ? defaultLists : customLists;
    const activeList = targetObj.find(el => el.id === activeListId);
    return activeList.label;
  }

  calculateUncompletedTasks(tasks, listId) {
    const completedTasks = this.sortCompletedTask(tasks);
    const uncompletedTasks = tasks.length - completedTasks.length;
    return uncompletedTasks;
  }
}

export default new ListHelper();
