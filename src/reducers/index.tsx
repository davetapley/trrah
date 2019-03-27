import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM } from '../constants/index';

const initialState: StoreState = { enthusiasmLevel: 100 };

export function reducer(state: StoreState = initialState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    default:
      return initialState;
  }
}
