//必ず失敗するPromise
const failPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("fail");
  }, 300)
});

failPromise.then((result) => {
  console.log("result: ", result);
}).catch((error) => {
  console.log("fail: ",error);
});
