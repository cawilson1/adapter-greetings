import { default as test } from "tape";
import adapter from "./adapter.js";

test("echo hello world", async t => {
  t.plan(1);
  const a = adapter();
  t.equal(await a.echo("World"), "Hello World");
});

test("echo undefined", async t => {
  t.plan(1);
  const a = adapter();
  t.equal(await a.echo(undefined), "Hello default");
});

test("echo null", async t => {
  t.plan(1);
  const a = adapter();
  t.equal(await a.echo(null), "Hello default");
});
