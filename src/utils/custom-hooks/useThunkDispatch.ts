import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/types/AppDispatch';

const useThunkDispatch = (): AppDispatch => {
    return useDispatch<AppDispatch>();
};

export default useThunkDispatch;
