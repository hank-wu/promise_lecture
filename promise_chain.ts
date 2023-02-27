const simplePromiseA = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    const result = 300;
    console.log("PromiseA結果: ", result);
    resolve(result);
  }, 300);
})


const simplePromiseB = (input: number) => {
  return new Promise<number>((reolve, reject) => {
    setTimeout(() => {
      const result = input * 2;
      console.log("300ミリ秒の後、PromiseB結果: ", result);
      reolve(result);
    }, 300);
  })
};

const simplePromiseC = (input: number) => {
  return new Promise<number>((reolve, reject) => {
    setTimeout(() => {
      const result = input + 100;
      console.log("300ミリ秒の後、PromiseC結果: : ", result);
      reolve(result);
    }, 300);
  })
};

//thenの中でreturnすることで値を届く
simplePromiseA.then((result) => {
  const result2 = result * 2;
  console.log("B結果: ", result2);
  //重要
  return result2;
}).then((result3) => {
  const result4 = result3 + 100;
  console.log("C結果: ", result4);
  return result4;
}).then(() =>{
  console.log("処理終了");
})

//problem.tsの中の例をpromise chainでの場合は
simplePromiseA.then((result) => simplePromiseB(result))
              .then((result2) => simplePromiseC(result2))
              .then(() =>{
                console.log("処理終了");
              });

//aync/awaitの場合
const awaitChain = async () => {
  const result = await simplePromiseA;
  const result2 = await simplePromiseB(result);
  await simplePromiseC(result2);
  console.log("処理終了");
}

awaitChain();