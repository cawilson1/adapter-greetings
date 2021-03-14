import adapter from "./adapter.js";
export default () => ({
  id: "greeting",
  port: "echo",
  load: () => ({}),
  link: env => _ => adapter(env)
});
