import { Reducer } from 'react';
import { SHOW_ALERT } from '../../actions/app';

const initialState = {
  notifications: {
    message: '',
    status: '',
    visible: false,
    withTimeout: true,
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT: {
      const notifications = {
        ...state.notifications,
        visible: true,
        message: action.message,
        status: action.status,
        duration: action.duration,
      };

      return { ...state, notifications };
    }

    default:
      return state;
  }
}
