//偽URL
const testURL = "http://test.com";
//Promiseを返すfunction
export const simulateCall = (target: string) => {
  //Promiseが返す値を指定することが可能です
  return new Promise<string>((resolve, reject) => {
    console.log(`http://test.com/${target}読み込み中...`);
    if (target !== "401") {
      setTimeout(() => {
        resolve("成功");
      }, 1000);
      return;
    }
    reject("失敗");
  })
}
