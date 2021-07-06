import React from 'react';

import { fetchUserInfo } from '../../store/actionCreators/user';
import useRequest from '../../hooks/useRequest';

import MainMenu from './MainMenu';

import './app.scss';

function Todo() {
  const getUserInfo = useRequest(fetchUserInfo());

  React.useEffect(() => {
    getUserInfo();
  });

  return (
    <main className='app'>
      <MainMenu />
      {/* <article className='list'>
        <header className='list__header'>
          <div className='list__to-menu'>
            <svg
              className='list__to-menu-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <title>Закрыть подробное представление</title>
              <path d='M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'></path>
            </svg>
          </div>
          <h1 className='list__list-label'>Список без названия</h1>
        </header>
        <div className='list__tasks'>
          <div className='task list__task'>
            <input className='task__checkbox' type='checkbox' id='im' />
            <label className='task__checkbox-label' htmlFor='im'></label>

            <p className='task__task-essence task__task-essence--completed'>
              Задача без названия
            </p>
            <button className='task__important-button'>
              <svg
                className='task__important-icon task__important-icon--true'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>star</title>
                <path d='M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z'></path>
              </svg>
            </button>
          </div>

          <div className='task task--with-note list__task'>
            <input className='task__checkbox' type='checkbox' id='im1' />
            <label className='task__checkbox-label' htmlFor='im1'></label>

            <div className='task__wrapper-task-essence'>
              <p className='task__task-essence'>Задача без названия</p>
              <div className='task__additional-info'>
                <svg
                  className='task__note-icon'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <title>note</title>
                  <path d='M6 11v15.001c0 0.56 0.451 0.999 1.007 0.999h13.993v-4.994c0-1.119 0.895-2.006 1.998-2.006h4.002v-9h-21zM6 10h21v-2.993c0-0.557-0.447-1.007-0.999-1.007h-19.003c-0.56 0-0.999 0.447-0.999 0.999v3.001zM21.5 28h-14.5c-1.105 0-2-0.902-2-2.001v-18.998c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.894 2.001 1.994v14.006l-6 7h-0.5zM22 26.5l4.7-5.5h-3.703c-0.546 0-0.997 0.452-0.997 1.009v4.491z'></path>
                </svg>
                <span className='task__is-note'>Заметка</span>
              </div>
            </div>
            <button className='task__important-button'>
              <svg
                className='task__important-icon task__important-icon--true'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>star</title>
                <path d='M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z'></path>
              </svg>
            </button>
          </div>
        </div>
        <footer className='new-task list__new-task'>
          <div className='new-task__icon'> */}
      {/* <svg
              className='new-task__icon-plus'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z'></path>
            </svg> */}
      {/* <svg
              className='new-task__icon-circle'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
            >
              <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z'></path>
            </svg>
          </div>
          <input
            className='new-task__input'
            type='text'
            placeholder='Добавить задачу'
          />
        </footer>
      </article>
      <div className='task-details task-details--close'>
        <header className='task task-details__task'>
          <input className='task__checkbox' type='checkbox' id='im4' />
          <label className='task__checkbox-label' htmlFor='im4'></label>

          <p className='task__task-essence'>Задача без названия</p>
          <button className='task__important-button'>
            <svg
              className='task__important-icon task__important-icon--true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <title>star</title>
              <path d='M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z'></path>
            </svg>
          </button>
        </header>
        <div className='add-note task-details__add-note'>
          <textarea
            className='add-note__input'
            placeholder='Добавить заметку'
          ></textarea>
        </div>
        <footer className='task-details__management'>
          <div className='task-details__disable'>
            <svg
              className='task-details__disable-arrow'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <title>Закрыть подробное представление</title>
              <path d='M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'></path>
            </svg>
          </div>
          <div className='task-details__date'>Создано вт, 21 июля</div>
          <div className='task-details__delete-task'>
            <svg
              className='task-details__delete-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <title>Удалить задачу</title>
              <path d='M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z'></path>
              <path d='M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z'></path>
            </svg>
          </div>
        </footer>
      </div> */}
    </main>
  );
}

export default Todo;
