import { Container } from "typescript-ioc";
import { CounterRunner } from "./counterRunner";
import { IoCInit } from "./ioc.config";

// TODO: can't get external binding file imports to work at present this is a workaround
let initConfig = new IoCInit();
initConfig.init();

let runner = new CounterRunner();

runner.run();
