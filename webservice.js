import axios from 'axios';
const SERVER_URI = 'https://service.ebesim.com/';
const productionConfig = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1vYmlsZSI6eyJjb2RlIjoiKzY2IiwibnVtYmVyIjoiNjI3MTY2NzUwIn0sImJhbm5lZF9yZWNvcmQiOnsibG9nIjpbXX0sInZlcmlmeV9hY2NvdW50Ijp7ImVtYWlsIjp0cnVlfSwidXNlcl9hZ3JlZW1lbnQiOnsiYWNjb3VudCI6dHJ1ZSwic2hvcCI6ZmFsc2UsImN1c3RvbWVyIjpmYWxzZSwicmlkZXIiOmZhbHNlfSwidXNlcl9kZXRhaWwiOnsibmFtZSI6eyJmaXJzdG5hbWUiOiLguJjguJnguIHguKTguJUiLCJsYXN0bmFtZSI6IuC4quC4p-C4meC4lOC4tSJ9LCJreWMiOnsiaWRfY2FyZF9ubyI6IiIsImxhc2VyX2NvZGUiOiIiLCJwZXJzb25faW1nIjoiIn0sInBvc2l0aW9uIjp7InBvc2l0aW9uIjoiIiwibGV2ZWwiOiIiLCJwcml2aWxlZ2UiOiIifSwid2FsbGV0Ijp7ImVfY3JlZGl0IjowLCJzX3BvaW50IjowLCJiX3BvaW50IjowLCJ0X3BvaW50IjowLCJ2X3BvaW50IjowfSwibmV0d29yayI6eyJkb3duIjpbXSwidXAiOiJyb290In0sInByb2ZpbGVfaW1nIjoiIiwiYmFua19hY2NvdW50IjpbXX0sImxvZ2RldGFpbCI6eyJjcmVhdGVkX2RhdGUiOiIyMDIxLTAzLTIyVDAzOjMzOjQ3LjkzOVoiLCJjcmVhdGVkX2J5IjoiU1lTVEVNIiwidXBkYXRlZF9kYXRlIjoiMjAyMS0wMy0yMlQwMzozMzo0Ny45NDJaIiwidXBkYXRlZF9ieSI6IlNZU1RFTSJ9LCJfaWQiOiI2MDU4MTAxYmZjOTFlZTAwMTFjMTEwZmYiLCJlbWFpbCI6InRoYW5ha3JpdC5zdUBtYWlsLnd1LmFjLnRoIiwiaGFzaF9wYXNzd29yZCI6IiQyYiQwNiQvWS9mNlgxUmpFWVo2dW1paEZUM2kueEhOVEN4QVg0dnVMeGNYVXZncVBhVkhDMExRNU1RNiIsInJlZ2lzdGVyX2J5IjoiRU1BSUwiLCJfX3YiOjB9LCJpYXQiOjE2MTcwNzQxMDQsImV4cCI6MTYxNzE2MDUwNH0.7W-58nVGsq2ROrcAzVvXG-KIjvCUNdRGXdf2Y9W_o32tBy1m8RJzskndMwVy1S5E_E1spXwsT-nJGQ2tk7cdBA',
  },
  baseURL: SERVER_URI,
};

const getOrderByShopId = params => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/order/getorderbyshopid', params, productionConfig)
      .then(response => {
        // console.log(response)
        resolve(response);
      })
      .catch(error => {
        // console.log(error)
        reject(error.response);
      });
  });
};

const getOrderById = params => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/order/getorderbyid', params, productionConfig)
      .then(response => {
        // console.log(response)
        resolve(response);
      })
      .catch(error => {
        // console.log(error)
        reject(error.response);
      });
  });
};

const getProductById = params => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/product/getproductbyid', params, productionConfig)
      .then(response => {
        // console.log(response)
        resolve(response);
      })
      .catch(error => {
        // console.log(error)
        reject(error.response);
      });
  });
};

const getOrderall = params => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/order/getorderall', params, productionConfig)
      .then(response => {
        // console.log(response)
        resolve(response);
      })
      .catch(error => {
        // console.log(error)
        reject(error.response);
      });
  });
};

module.exports = {
  getOrderByShopId,
  getOrderById,
  getProductById,
  getOrderall,
};
