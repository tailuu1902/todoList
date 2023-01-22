import { creatStore } from "./core.js";
import reducer from "./reducer.js";
import Logger from "./ShowLogger.js";
const { attach, connect, dispatch } = creatStore(Logger(reducer));

window.dispatch = dispatch;
export { attach, connect };
