(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // index.ts
  var import_server = __require("https://deno.land/std@0.140.0/http/server.ts");
  function handler(_req) {
    const data = {
      Hello: "World!"
    };
    const body = JSON.stringify(data, null, 2);
    return new Response(body, {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  (0, import_server.serve)(handler);
})();
