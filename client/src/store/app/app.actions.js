export const SHOW_ALERT = 'SHOW_ALERT';

/**
 * Show a message.
 *
 * @param {string} status - Message type: success, warning, error, info.
 * @param {string} message
 * @param {boolean} withTimeout - Should close after a while.
 *
 * @returns {Object}
 */
export function showAlert(status, message, duration) {
  return {
    type: SHOW_ALERT,
    status,
    message,
    duration,
  };
}

export function showError(message, duration) {
  return showAlert('error', message, duration);
}

export function showSuccess(message, duration) {
  return showAlert('success', message, duration);
}

export function showWarning(message, duration) {
  return showAlert('warning', message, duration);
}
