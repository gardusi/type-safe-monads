import { None, Option as OptionStatic } from "./lib";

type Option<A> = OptionStatic.Option<A>;
const Option = OptionStatic.Option;

export { None, Option };
