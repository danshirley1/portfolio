import { getErrorMessage, errorHandler } from './errorHandler';

describe('errorHandler utils', () => {
  describe('getErrorMessage', () => {
    const message = 'foobar';

    it('returns message', () => {
      expect(getErrorMessage({ message })).toBe(message);
    });

    it('returns error.response.message', () => {
      expect(getErrorMessage({
        response: {
          message,
        },
      })).toBe(message);
    });

    it('returns error.xhr.response.message', () => {
      expect(getErrorMessage({
        xhr: {
          response: {
            message,
          },
        },
      })).toBe(message);
    });
  });

  describe('errorHandler', () => {
    it('returns expected error object', () => {
      const failureAction = 'FOO';
      const additionalActions = ['BAR'];

      expect(errorHandler(failureAction, additionalActions)({ message: 'foobar' })).toEqual([
        {
          error: true,
          payload: {
            message: 'foobar',
            status: undefined,
          },
          type: 'FOO',
        },
        'BAR',
      ]);
    });
  });
});
