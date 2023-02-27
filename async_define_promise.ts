const simpleAync = async () => {
  return "foo";
}

// 上手くayncでsetTimoutをAsync
const definePromiseByAcync = async () => {
  await setTimeout(() => {
    return "foo";
  }, 300);
};

const handleAync = async () => {
  const result = await definePromiseByAcync();
  console.log("result: ", result);
}

handleAync();


//sleepを定義する
//c++などsleepがあるが、
//js元々sleepがないから
const sleep = (ms: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

//await sleep
const awaitSleepFunction = async () => {
  await sleep(300);
  return "foo";
};

const handleSleep = async () => {
  const result = await awaitSleepFunction();
  console.log("result: ", result);
}

handleSleep();
