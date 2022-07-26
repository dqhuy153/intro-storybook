// Root Reducer
import { combineReducers } from 'redux';
import todoReduder, { ITodoState } from './todo';
import themeReducer, { IThemeState } from './theme';

export interface IRootState {
  todoState: ITodoState;
  themeState: IThemeState;
}

const rootReducer = combineReducers({
  todoState: todoReduder,
  themeState: themeReducer,
});

export default rootReducer;
