import React from 'react';

import Profile from './Profile';

import TasksListSVG from '../../Shared/SVG/TasksListSVG';
import StarSVG from '../../Shared/SVG/StarSVG';
import ListSVG from '../../Shared/SVG/ListSVG';
import ProjectSVG from '../../Shared/SVG/ProjectSVG';
import ArrowSVG from '../../Shared/SVG/ArrowSVG';
import AddProjectSVG from '../../Shared/SVG/AddProjectSVG';

import './MainMenu.scss';

function MainMenu() {
  return (
    <nav className='main-menu main-menu--non-priority-display'>
      <h3 className='main-menu__app-name container-menu'>To Do</h3>
      <Profile />

      <div className='tasks-essence main-menu__tasks-essence'>
        {/* <div className='tasks-essence__essence-item'>
          <div className='tasks-essence__the-important-item container-menu'>
            <StarSVG classList='tasks-essence__icon tasks-essence__icon-important' />
            <span className='tasks-essence__essence-label'>Важно</span>
            <span className='tasks-essence__task-count'>1</span>
          </div>
        </div> */}
        <div className='tasks-essence__essence-item'>
          <div className='tasks-essence__the-tasks-item container-menu'>
            <TasksListSVG classList='tasks-essence__icon tasks-essence__icon-tasks' />
            <span className='tasks-essence__essence-label'>Задачи</span>
            {/* <span className='tasks-essence__task-count'>12</span> */}
          </div>
        </div>
      </div>
      <div className='user-lists'>
        {/* <div className='user-lists__list user-lists__list--active'>
          <ListSVG classList='user-lists__list-icon' />
          <span className='user-lists__list-label'>Список без названия</span>
          <span className='user-lists__task-count'>1</span>
        </div>
        <div className='user-lists__list'>
          <ListSVG classList='user-lists__list-icon' />
          <span className='user-lists__list-label'>Список без названия 1</span>
          <span className='user-lists__task-count'>1</span>
        </div>
        <div className='user-lists__list'>
          <ListSVG classList='user-lists__list-icon' />
          <span className='user-lists__list-label'>Список без названия 1</span>
          <span className='user-lists__task-count'>1</span>
        </div>

        <div className='user-lists__project'>
          <div className='user-lists__project-title'>
            <ProjectSVG classList='user-lists__project-icon' />
            <p className='user-lists__project-label'>Проэкт 1</p>
            <ArrowSVG classList='user-lists__project-arrow user-lists__project-arrow--close' />
          </div>
          <div className='user-lists__list user-lists__project-list'>
            <ListSVG classList='user-lists__list-icon' />
            <span className='user-lists__list-label'>
              Список без названия 2
            </span>
            <span className='user-lists__task-count'>1</span>
          </div>
          <div className='user-lists__list user-lists__project-list user-lists__project-list--active'>
            <ListSVG classList='user-lists__list-icon' />
            <span className='user-lists__list-label'>
              Список без названия 2
            </span>
            <span className='user-lists__task-count'>1</span>
          </div>
        </div>
        <div className='user-lists__list user-lists__list--active'>
          <ListSVG classList='user-lists__list-icon' />
          <span className='user-lists__list-label'>Список без названия 1</span>
          <span className='user-lists__task-count'>1</span>
        </div> */}
      </div>
      {/* <div className='add-task-object main-menu__add-task-object'>
        <div className='add-task-object__add-list-object'>
          <button className='add-task-object__button-add-list'>
            Cоздать список
          </button>
        </div>
        <div className='add-task-object__add-project-object'>
          <button className='add-task-object__button-add-project'>
            <AddProjectSVG classList='add-task-object__add-project-icon' />
          </button>
        </div>
      </div> */}
    </nav>
  );
}

export default MainMenu;
