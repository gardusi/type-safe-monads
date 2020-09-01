import { Option } from "./option";

export class Some<A> extends Option<A> {
  public get(): A {
    return this.option.get();
  }
}
