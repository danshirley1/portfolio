import { createStore } from 'redux';

import reducer from './';
import { setTokens } from '../../actions/spotify';

describe('spotify reducer', () => {
  const initialReducerState = {
    accessToken: null,
    refreshToken: null,
    visitingUser: { loading: false },
    myUser: { loading: false },
  };

  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('renders initial state', () => {
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });

  it('sets spotify authentication tokens', () => {
    store.dispatch(setTokens({ accessToken: 'foo', refreshToken: 'bar' }));
    const state = store.getState();
    expect(state.accessToken).toBe('foo');
    expect(state.refreshToken).toBe('bar');
  });

/*
  it('form state is pristine when query is applied that does not differ from initial state', () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: '' }));
    const state = store.getState();
    expect(state.searchFormState.isPristine).toBe(true);
  });

  it('updates store on search query change, with no validation errors', () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: 'bn1 2ab' }));
    const state = store.getState();
    expect(state.searchFormState.validationErrors).toEqual({});
    expect(state.searchFormState.fields[JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD]).toEqual({ value: 'bn1 2ab' });
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
    expect(state.searchFormState.isPristine).toBe(false);
  });

  it('updates store on search query change, with validation errors', () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: '*invalid_postcode*' }));
    const state = store.getState();
    expect(state.searchFormState.validationErrors).toEqual({ POSTCODE_FIELD: [{ message: 'Please enter a valid Postcode' }] });
    expect(state.searchFormState.fields[JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD]).toEqual({ value: '*invalid_postcode*' });
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
  });

  it("updates store on search query change - 'Search Type' changed to 'Goals'", () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD, value: 'goals' }));
    const state = store.getState();
    expect(state.searchFormState.fields[JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD]).toEqual({ value: 'publishDate' });
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
  });

  it("updates store on search query change - 'Search Type' changed to 'Keywords'", () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD, value: 'keyword' }));
    const state = store.getState();
    expect(state.searchFormState.fields[JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD]).toEqual({ value: 'relevance' });
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
  });

  it('updates store on request to submit form', () => {
    store.dispatch(submitJobSearchForm());
    const state = store.getState();
    expect(state.searchResults).toEqual(initialReducerState.searchResults);
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IN_PROGRESS);
  });

  it('updates store on request to set remote validation errors', () => {
    store.dispatch(setRemoteValidationErrors([
      {
        field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD,
        message: 'foobar',
      },
      {
        field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD,
        message: 'barfoo',
      }
    ]));
    const state = store.getState();
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
    expect(state.searchFormState.validationErrors).toEqual({
      [JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD]: [
        {
          field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD,
          message: 'foobar',
        },
        {
          field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD,
          message: 'barfoo',
        },
      ],
    });
  });

  it('updates store on remote validation failure', () => {
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...jobSearchReducer.jobSearch,
        submissionState: FORM_SUBMISSION_STATES.IN_PROGRESS,
      }
    });

    store.dispatch(submitRemoteValidationFailure());
    const state = store.getState();
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
  });

  it('updates store on verified search form submission success', () => {
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...jobSearchReducer.jobSearch,
        submissionState: FORM_SUBMISSION_STATES.IN_PROGRESS,
      }
    });

    store.dispatch(submitVerifiedSearchFormSuccess({
      content: [{ foo: 'bar' }],
      totalElements: 1234,
      number: 5,
    }, { foo: 'bar' }));
    const state = store.getState();
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
    expect(state.searchFormState.isSearchQueryHasRun).toBe(true);
    expect(state.searchResults.paginatedResults).toEqual([{ foo: 'bar' }]);
    expect(state.searchResults.totalResults).toEqual(1234);
    expect(state.searchResults.pageIndex).toEqual(5);
    expect(state.previousSuccessfulSearchQuery).toEqual({ foo: 'bar' });
  });

  it('updates store on verified search form submission failure', () => {
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...jobSearchReducer.jobSearch,
        submissionState: FORM_SUBMISSION_STATES.IN_PROGRESS,
      }
    });

    store.dispatch(submitVerifiedSearchFormFailure());
    const state = store.getState();
    expect(state.searchFormState.submissionState).toBe(FORM_SUBMISSION_STATES.IDLE);
  });

  it('updates store with no validation errors when form is valid', () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: 'bn1 2ab' }));
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.KEYWORDS_FIELD, value: 'Taxi Driver' }));
    store.dispatch(validateJobSearchForm());
    const state = store.getState();
    expect(state.searchFormState.validationErrors).toEqual({});
  });

  it('updates store with validation errors when form is invalid', () => {
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: '*invalid_postcode*' }));
    store.dispatch(jobSearchQueryChange({ field: JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD, value: '*invalid_keywords*' }));
    store.dispatch(validateJobSearchForm());
    const state = store.getState();
    expect(state.searchFormState.validationErrors).toEqual({
      POSTCODE_FIELD: [{ message: 'Please enter a valid Postcode' }],
    });
  });

  it('resets form state when form is cleared and preserves UI flags', () => {
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...initialReducerState.searchFormState,
        isSearchWithSavedGoalsEnabled: true,
        isShowSuggestionsControl: true,
        isSearchQueryHasRun: true,
        fields: {
          [JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD]: {
            value: 'foobar1',
          },
          [JOB_SEARCH_FORM_FIELDS.INCLUDE_SUGGESTIONS_FIELD]: {
            value: 'foobar2',
          },
          [JOB_SEARCH_FORM_FIELDS.DISTANCE_FIELD]: {
            value: 'foobar3',
          },
          [JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD]: {
            value: 'foobar4',
          },
          [JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD]: {
            value: 'foobar5',
          },
          [JOB_SEARCH_FORM_FIELDS.KEYWORDS_FIELD]: {
            value: 'foobar6',
          },
        },
      }
    });
    store.dispatch(clearJobSearchForm());
    const state = store.getState();
    expect(state).toEqual({
      ...initialReducerState,
      searchFormState: {
        ...initialReducerState.searchFormState,
        isSearchWithSavedGoalsEnabled: true,
        isShowSuggestionsControl: true,
        isSearchQueryHasRun: false,
        validationErrors: {
          [JOB_SEARCH_FORM_FIELDS.POSTCODE_FIELD]: [
            {
              message: 'Please enter a valid Postcode',
            },
          ],
        },
      },
    });
  });

  it('clears job search results', () => {
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchResults: {
        paginatedResults: [{ foo: 'bar' }],
        totalResults: 100,
        pageIndex: 1,
      },
    });
    store.dispatch(clearSearchResults());
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });

  it('on initialising search form the suggestion control is flagged to be shown', () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().searchFormState.isShowSuggestionsControl).toBe(true);
  });

  it('on initialising search form the suggestion control is flagged not to be shown (UofE control state)', () => {
    const uoeState = { submitted: true, consent: true, control: true };
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().searchFormState.isShowSuggestionsControl).toBe(false);
  });

  it("on initialising search form 'search with saved goals' is enabled", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, [{ socCode: 1, includeInSearch: true }]));
    expect(store.getState().searchFormState.isSearchWithSavedGoalsEnabled).toBe(true);
  });

  it("on initialising search form 'search with saved goals' is disabled - no goals", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().searchFormState.isSearchWithSavedGoalsEnabled).toBe(false);
  });

  it("on initialising search form 'search with saved goals' is disabled - no goals marked for inclusion in search", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, [{ socCode: 1, includeInSearch: false }]));
    expect(store.getState().searchFormState.isSearchWithSavedGoalsEnabled).toBe(false);
  });

  it("on initialising search form when 'search with saved goals' is enabled, order by and search type fields remain unchanged (goal type search)", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...initialReducerState.searchFormState,
        fields: {
          ...initialReducerState.searchFormState.fields,
          [JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD]: {
            value: 'goals',
          },
          [JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD]: {
            value: 'distance',
          },
        },
      }
    });
    store.dispatch(initialiseJobSearchForm(uoeState, [{ socCode: 1, includeInSearch: true }]));
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD].value).toBe('distance');
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD].value).toBe('goals');
  });

  it("on initialising search form when 'search with saved goals' is enabled, order by and search type fields remain unchanged (keyword type search)", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...initialReducerState.searchFormState,
        fields: {
          ...initialReducerState.searchFormState.fields,
          [JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD]: {
            value: 'keyword',
          },
          [JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD]: {
            value: 'distance',
          },
        },
      }
    });
    store.dispatch(initialiseJobSearchForm(uoeState, [{ socCode: 1, includeInSearch: true }]));
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD].value).toBe('distance');
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD].value).toBe('keyword');
  });

  it("on initialising search form when 'search with saved goals' is disabled, field presets are as expected", () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.ORDER_BY_FIELD].value).toBe('relevance');
    expect(store.getState().searchFormState.fields[JOB_SEARCH_FORM_FIELDS.SEARCH_TYPE_FIELD].value).toBe('keyword');
  });

  it('on initialising search form, previously saved search is removed', () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().previousSuccessfulSearchQuery).not.toBeDefined();
  });

  it('on initialising search form, isSearchQueryHasRun flag is reset', () => {
    const uoeState = { submitted: true, consent: true, control: false };
    store = createStore(jobSearchReducer.jobSearch, {
      ...initialReducerState,
      searchFormState: {
        ...initialReducerState.searchFormState,
        isSearchQueryHasRun: true,
      },
    });
    store.dispatch(initialiseJobSearchForm(uoeState, []));
    expect(store.getState().searchFormState.isSearchQueryHasRun).toBe(false);
  });

  it('sets state on request to fetch paginated results', () => {
    store.dispatch(fetchPaginatedResults(2, { foo: 'bar' }));
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });

  it('sets state when request to fetch paginated results has succeded', () => {
    store.dispatch(fetchPaginatedResultsSuccess({
      content: [{ foo: 'bar' }],
      totalElements: 100,
      number: 5,
    }));
    const state = store.getState();
    expect(state).toEqual({
      ...initialReducerState,
      searchResults: {
        ...initialReducerState.searchResults,
        paginatedResults: [{ foo: 'bar' }],
        totalResults: 100,
        pageIndex: 5,
      }
    });
  });

  it('sets state when request to fetch paginated results has failed', () => {
    store.dispatch(fetchPaginatedResultsFailure());
    const state = store.getState();
    expect(state).toEqual(initialReducerState);
  });
  */
});
