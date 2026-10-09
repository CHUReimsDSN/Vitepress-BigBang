import { generateDefinitions } from "./generate-definitions";
import { generateComponentsJson } from "./generate-components-json";
import { generateDefaultPropsJson } from "./generate-default-props-json";

generateDefaultPropsJson();
generateComponentsJson();
generateDefinitions();
