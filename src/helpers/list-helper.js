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

  isDefaultList(activeListId) {
    return /^__DEFAULT_LIST_/.test(activeListId);
  }

  getListLabel(activeListId, defaultLists, customLists) {
    const isDefaultList = this.isDefaultList(activeListId);
    const targetObj = isDefaultList ? defaultLists : customLists;
    const activeList = targetObj.find(el => el.id === activeListId);
    return activeList.label;
  }

  calculateUncompletedTasks(list, listId) {
    const tasks = this.getTasksByListId(list, listId);
    const completedTasks = this.sortCompletedTask(list);
    const uncompletedTasks = tasks.length - completedTasks.length;
    return uncompletedTasks;
  }
}

export default new ListHelper();
