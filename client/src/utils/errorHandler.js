export const getErrorMessage = (error) => {
  if (error.response && error.response.message) {
    return error.response.message;
  } else if (error.xhr && error.xhr.response && error.xhr.response.message) {
    return error.xhr.response.message;
  }
  return error.message;
};

export const errorHandler = (failureAction, additionalActions) => (error) => {
  let actionsToTrigger = additionalActions || [];

  console.error(`Error handler with failure action ${failureAction}`, error);

  if (!Array.isArray(actionsToTrigger)) {
    // TODO - I should just enforce the expected type as an array using flow, later on DS
    actionsToTrigger = [additionalActions];
  }
  return [
    {
      type: failureAction,
      payload: { message: getErrorMessage(error), status: error.status },
      error: true,
    },
    ...actionsToTrigger,
  ];
};
