import { Option as MonaptOption } from "monapt";
import { Option } from "./option";

export class None<A> extends Option<A> {
  public throw(): never {
    throw new MonaptOption.NoSuchElementError();
  }
}
