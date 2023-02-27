//同じPromise
const samePromise = new Promise<string>((resolve, reject) => { 
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

const handle = async () => {
  const result = await samePromise;
  console.log("result: ", result);
}

handle();
