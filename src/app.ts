import lodash from "lodash";
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log(lodash.shuffle([3, 2, 1]));
