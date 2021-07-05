class ResponseHelper {
  // errorsArrExample = [{msg: 'errorMsg', param: 'username', value: 'Vitaly'}, ...]
  findErrorsByParam(errorsArr, ...params) {
    // Only errors with the required parameters
    const filtredErr = errorsArr.filter(e => params.includes(e.param));

    const result = filtredErr.reduce(
      (obj, el) => ({ ...obj, [el.param]: el.msg }),
      {}
    );

    return result;
  }
}

export default new ResponseHelper();
