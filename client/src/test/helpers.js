// import { mount } from 'enzyme';
// import getMuiTheme from 'material-ui-v0/styles/getMuiTheme';
// import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import { isEqual } from 'lodash';

/*
export function mountWithState(component, state) {
  const muiTheme = getMuiTheme();
  return mount(component, {
    context: {
      muiTheme,
      store: {
        getState() {
          return state;
        },
        subscribe() {
        }
      }
    },
    childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object }
  });
}
*/

/*
export function test(s) {
  return `[data-test="${s}"]`;
}

export function testStarts(s) {
  return n => {
    return n.prop('data-test') ? n.prop('data-test').startsWith(s) : false;
  };
}
*/
/*
function isFinished() {
  if (this._closed) throw new Error('Response already closed. You should not call json, send or end if you called any of these method previously');
}
*/

/*
export function createResponse() {
  return {
    _headers: {},
    _closed: false,
    set(headers) {
      this._headers = { ...this._headers, ...headers };
    },
    status(status) {
      this._status = status;
      return this;
    },
    json(json) {
      // needed to test circular references
      isFinished.apply(this, []);
      JSON.stringify(json);
      this._body = json;
      this._closed = true;
      return this;

    },
    send(data) {
      isFinished.apply(this, []);
      this._body = data;
      this._closed = true;
      return this;
    },
    end() {
      isFinished.apply(this, []);
      this._closed = true;
      return this;
    },
    render(template, data) {
      isFinished.apply(this, []);
      this._template = template;
      this._data = data;
      return this;
    },
    redirect(url) {
      isFinished.apply(this, []);
      this._redirect = url;
      this._closed = true;
    }
  };
}
*/

const stubForPath = (path, method) => {
  Observable.ajax = jest.fn((request) => {
    if (request.url === path && request.method === method) {
      return Observable.of({ response: this.successMessage });
    }
    console.error('Failed to match request', request);
    return Observable.throw(`Request not matched ${request}`);
  });
};

export default function mockEpic(epic, initialState = {}) {
  const epicMiddleware = createEpicMiddleware(epic);
  const mockStore = configureMockStore([epicMiddleware]);
  const store = mockStore(initialState);
  const originalAjax = Observable.ajax;

  return {
    store,
    successMessage: { dummy: 'response' },
    errorMessage: { message: 'message' },
    dispatch(args) {
      store.dispatch(args);
    },
    getActions() {
      return store.getActions();
    },
    restore() {
      epicMiddleware.replaceEpic(epic);
      Observable.ajax = originalAjax;
    },

    stubPostForPath(path) {
      return stubForPath(path, 'POST');
    },
    stubGetForPath(path) {
      return stubForPath(path, 'GET');
    },
    stubDeleteForPath(path) {
      return stubForPath(path, 'DELETE');
    },
    stubPutForPath(path) {
      return stubForPath(path, 'PUT');
    },

    stubPostForPathWithBody(path, body) {
      Observable.ajax = jest.fn((request) => {
        if (request.url === path && request.method === 'POST' && isEqual(request.body, body)) {
          return Observable.of({ response: this.successMessage });
        }
        console.error('Failed to match request', request, 'against values path', path, 'method POST and body', body);
        return Observable.throw(`Request not matched ${request}`);
      });
    },

    stubPutForPathWithBody(path, body) {
      Observable.ajax = jest.fn((request) => {
        if (request.url === path && request.method === 'PUT' && isEqual(request.body, body)) {
          return Observable.of({ response: this.successMessage });
        }
        console.error('Failed to match request', request, 'against values path', path, 'method PUT and body', body);
        return Observable.throw(`Request not matched ${request}`);
      });
    },

    stubError(errorCode = 500) {
      Observable.ajax = jest.fn(() =>
        Observable.create(observer => observer.error({ status: errorCode, response: this.errorMessage })));
    },
  };
}
