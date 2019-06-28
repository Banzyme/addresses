interface ResponseDataType {
  status: number,
  message: string,
  address?: object,
  exists?: boolean,
  doExistenceCheck?: boolean
}

export const apiResponse = (responseData: ResponseDataType): ResponseDataType => {
  return ({
    status: responseData.status,
    message: responseData.message,
  });
};

export const apiResponse404 = (): ResponseDataType => {
  return apiResponse({
    status: 404, 
    message: 'Endpoint not found.'
  });
};

export const apiResponse500 = (): ResponseDataType => {
  return apiResponse({
    status: 500, 
    message: 'Server is down.'
  });
};