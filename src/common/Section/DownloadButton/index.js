import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../../../features/tasks/tasksSlice';
import { Button } from '../../Buttons/styled';

export const DownloadButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button 
      disabled={loading} 
      onClick={() => dispatch(fetchExampleTasks())}
    >
      {loading ? "Loading..." : "Download tasks examples"}
    </Button>)
}; 