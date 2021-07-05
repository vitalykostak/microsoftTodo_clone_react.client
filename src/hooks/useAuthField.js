import { useDispatch } from 'react-redux';

function useAuthField(
  changeVisitAction,
  changeValueAction,
  { value, visited }
) {
  const dispatch = useDispatch();

  const completeVisit = () => {
    if (visited) return visited;
    dispatch(changeVisitAction());
  };

  const handleInput = e => {
    const normalisedValue = e.target.value.trim();
    if (normalisedValue === value) return normalisedValue;
    dispatch(changeValueAction(normalisedValue));
  };

  return { completeVisit, handleInput };
}

export default useAuthField;
