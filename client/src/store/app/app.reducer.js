import { SHOW_ALERT } from './app.actions';

const initialState = {
  notifications: {
    message: '',
    status: '',
    visible: false,
    withTimeout: true,
  },
};

export default function reduce(action, state = initialState) {
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
