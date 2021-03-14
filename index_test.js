import { default as test } from "tape";
import greetings from "./index.js";
import port from "@twilson63/hyper63-port-echo";

test("ok", async t => {
  t.plan(1);
  try {
    const adapter = greetings();
    const env = adapter.load();
    const a = adapter.link(env)();
    const p = port(a);
    const res = await p.echo("World");
    t.equal(res, "Hello World");
  } catch (error) {
    console.log(error);
    t.ok(false);
  }
});
