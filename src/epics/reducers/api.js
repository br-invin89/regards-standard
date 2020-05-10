import { createReducer } from 'redux-create-reducer';

const initialState = {
  loading: false,
  errorMessage: undefined
}

export default createReducer(initialState, {
  ['api.API_STARTED'](state, action) {
    return {
      ...state,
      loading: true
    };
  },
  ['api.API_DONE'](state, action) {
    return {
      ...state,
      loading: false
    }
  },
  ['api.API_FAILED'](state, action) {
    return {
      ...state,
      loading: false,
      errorMessage: action.payload.errorMessage
    }
  },
  ['api.CLEAR_ERROR_MESSAGE'](state, action) {
    return {
      ...state,
      errorMessage: undefined
    }
  }
})
