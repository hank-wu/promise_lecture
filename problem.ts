//Promise chain上手く使えない場合に連続非同期処理
//promiseA -> promiseB -> promiseC

const promiseA = () => {
  return new Promise<number>((reolve, reject) => {
    setTimeout(() => {
      const result = 300;
      console.log("PromiseA結果: ", result);
      reolve(result);
    }, 300);
  })
}

const promiseB = (input: number) => {
  return new Promise<number>((reolve, reject) => {
    setTimeout(() => {
      const result = input * 2;
      console.log("300ミリ秒の後、PromiseB結果: ", result);
      reolve(result);
    }, 300);
  })
};

const promiseC = (input: number) => {
  return new Promise<number>((reolve, reject) => {
    setTimeout(() => {
      const result = input + 100;
      console.log("300ミリ秒の後、PromiseC結果: : ", result);
      reolve(result);
    }, 300);
  })
};

promiseA().then((result) => {
  promiseB(result).then((result2) => {
    promiseC(result2).then((result3) => {
      console.log("全部の処理の終わり");
    })
  })
})