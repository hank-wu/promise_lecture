import { simulateCall } from "./functionize";

simulateCall("testURL").then((result) => {
  console.log(result);
})