import { useState } from 'react';
import useRequest from './useRequest';
import { fetchCreateList } from '../store/actionCreators/lists';

const useCreationList = () => {
  const [isCreationList, setIsCreationList] = useState(false);
  const [newListValue, setNewListValue] = useState('');

  const createTask = () => {
    setIsCreationList(true);
  };

  const changeNewListValue = e => {
    setNewListValue(e.target.value);
  };

  const creationListReq = useRequest(fetchCreateList(newListValue.trim()));

  const confirmCreationList = () => {
    try {
      if (newListValue.trim().length === 0 || newListValue.trim().length > 25) {
        return false;
      }
      creationListReq();
    } finally {
      setNewListValue('');
      setIsCreationList(false);
    }
  };

  return {
    isCreationList,
    createTask,
    confirmCreationList,
    newListValue,
    changeNewListValue,
  };
};

export default useCreationList;
