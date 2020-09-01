import { Option as MonaptOption } from "monapt";
import { None as None_ } from "./none";
import { OptionType } from "./option";
import { Some } from "./some";

// tslint:disable: variable-name no-namespace no-shadowed-variable only-arrow-functions

const None = <A>(): None_<A> => new None_(MonaptOption<A>(undefined));

namespace Option {
  export function Option<A>(value?: A | null): OptionType<A> {
    if (value === undefined || value === null) {
      return None();
    }

    return new Some(MonaptOption(value));
  }
  export type Option<A> = OptionType<A>;
}

export { None, Option };
