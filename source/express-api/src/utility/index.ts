export interface ResponseDataType {
  status: number,
  message: string,
  address: string,
  addressType?: string,
  exists?: boolean
}
export class ApiResponse {
  static apiResponse = (responseData: ResponseDataType): ResponseDataType => {
    return ({
      status: responseData.status,
      message: responseData.message,
      address: responseData.address,
      addressType: responseData.addressType,
      exists: responseData.exists
    });
  };
  
  static apiResponse404 = (): ResponseDataType => {
    return ({
      status: 404, 
      message: 'Endpoint not found.',
      address: '',
    });
  };
  
  static apiResponse500 = (error?: string): ResponseDataType => {
    return ({
      status: 500, 
      message: `Server Error${error ? ` : ${error}`: ''}.`,
      address: '',
    });
  };
}

export class Formatter{
  static addressObj = (address): string => {
    let out_str = '';
    delete address.doAddressExistCheck;
    Object.keys(address).forEach(function(key) {
      if(address[key]){
        if(out_str){
          out_str = out_str.concat(', ')
        }
        out_str = out_str.concat(address[key]);
      }
    })
    return out_str;
  }
}
