export default function(env) {
  return {
    echo: (s = "default") =>
      Promise.resolve(`Hello ${s === null ? "default" : s}`)
  };
}
