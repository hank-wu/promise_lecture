//必ず成功するPromise
const myPromise = new Promise((resolve, reject) => { 
  setTimeout(() => {
    resolve("foo");
  }, 300);
});


myPromise.then((result) => {
  console.log("result: ", result);
});

console.log("後ろの実行");