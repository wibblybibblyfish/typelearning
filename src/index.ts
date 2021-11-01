import { Container } from "typescript-ioc";
import { CounterRunner } from "./counters/counterRunner";
import { DependencyConfig } from "./ioc.config";

// TODO: can't get external binding file imports to work at present this is a workaround
let dependencies = new DependencyConfig();
dependencies.configure();

let runner = Container.get(CounterRunner)

runner.run();
