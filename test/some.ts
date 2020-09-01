import { expect } from "chai";
import { None, Option } from "../index";

let some: Option<string>;

describe("Some", () => {
  beforeEach(() => {
    some = Option("hello");
  });

  it("Some#isDefined", () => {
    expect(some.isDefined()).to.equal(true, "Expected some to be defined");
  });

  it("Some#isEmpty", () => {
    expect(some.isEmpty()).to.equal(false, "Expected some to not be empty");
  });

  it("Some#equals", () => {
    expect(some.equals(Option("hello"))).to.equal(true, 'Expected some to equal Option("hello")');
    expect(some.equals(Option(1))).to.equal(false, "Expected some to not equal Option(1)");
    expect(some.equals(None())).to.equal(false, "Expected some to not equal None");
  });

  it("Some#filter", () => {
    expect(some.filter((v: string) => v === "hello")).to.deep.equal(some);
    expect(some.filter((v: string) => v === "world")).to.deep.equal(None());
  });

  it("Some#filterNot", () => {
    expect(some.filterNot((v: string) => v === "hello")).to.deep.equal(None());
    expect(some.filterNot((v: string) => v === "world")).to.deep.equal(some);
  });

  it("Some#flatMap", () => {
    expect(some.flatMap(() => Option("world"))).to.deep.equal(Option("world"));
  });

  it("Some#foreach", () => {
    let executions: number = 0;

    some.foreach(() => { executions += 1; });

    expect(executions).to.be.equal(1);
  });

  it("Some#get", () => {
    if (some.isEmpty()) {
      expect.fail(None(), Option("hello"), "Expected some to be defined");

      return;
    }
    expect(some.get()).to.be.equal("hello");
  });

  it("Some#getOrElse", () => {
    expect(some.getOrElse(() => "world")).to.be.equal("hello");
  });

  it("Some#map", () => {
    expect(some.map((v: string) => `${v} world`)).to.be.deep.equal(Option("hello world"));
  });

  it("Some#match", () => {
    expect(some.match({
      Some: (v: string): string => v,
      None: (): string => "world",
    }))
      .to.equal("hello");
  });

  it("Some#orElse", () => {
    expect(some.orElse(() => Option("world"))).to.be.deep.equal(Option("hello"));
  });
});
