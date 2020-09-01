import { expect } from "chai";
import { None, Option } from "../index";

let none: Option<string>;

describe("Some", () => {
  beforeEach(() => {
    none = Option();
  });

  it("Some#isDefined", () => {
    expect(none.isDefined()).to.equal(false, "Expected some to not be defined");
  });

  it("Some#isEmpty", () => {
    expect(none.isEmpty()).to.equal(true, "Expected some to be empty");
  });

  it("Some#equals", () => {
    expect(none.equals(Option())).to.equal(true, "Expected some to equal Option()");
    expect(none.equals(Option(1))).to.equal(false, "Expected some to not equal Option(1)");
    expect(none.equals(None())).to.equal(true, "Expected some to not equal None");
  });

  it("Some#filter", () => {
    expect(none.filter(() => true)).to.deep.equal(None());
    expect(none.filter(() => false)).to.deep.equal(None());
  });

  it("Some#filterNot", () => {
    expect(none.filter(() => true)).to.deep.equal(None());
    expect(none.filter(() => false)).to.deep.equal(None());
  });

  it("Some#flatMap", () => {
    expect(none.flatMap(() => Option("world"))).to.deep.equal(None());
  });

  it("Some#foreach", () => {
    let executions: number = 0;

    none.foreach(() => { executions += 1; });

    expect(executions).to.be.equal(0);
  });

  it("Some#getOrElse", () => {
    expect(none.getOrElse(() => "world")).to.be.equal("world");
  });

  it("Some#map", () => {
    expect(none.map((v: string) => `${v} world`)).to.be.deep.equal(None());
  });

  it("Some#match", () => {
    expect(none.match({
      Some: (v: string): string => v,
      None: (): string => "world",
    }))
      .to.equal("world");
  });

  it("Some#orElse", () => {
    expect(none.orElse(() => Option("world"))).to.be.deep.equal(Option("world"));
  });
});
