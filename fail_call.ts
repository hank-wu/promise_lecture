import { simulateCall } from "./functionize";

simulateCall("401").then((result) => {
  console.log("成功の結果: ", result);
}).catch((ereor) => {
  console.log(ereor);
})