/*
 * Axios
 */
const __AxiosGET = `axios.get('')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPOST = `axios.post('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPUT = `axios.put('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosPATCH = `axios.patch('', { })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

const __AxiosDELETE = `axios.delete('')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`;

export default {
  'HTTP methods': {
    get: {
      code: __AxiosGET
    },
    post: {
      code: __AxiosPOST
    },
    put: {
      code: __AxiosPUT
    },
    patch: {
      code: __AxiosPATCH
    },
    delete: {
      code: __AxiosDELETE
    }
  }
};
