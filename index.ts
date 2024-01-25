const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const path = new URL(req.url).pathname;
    console.log(path);
    if (path === '/worker-bundle.js') {
      const file = Bun.file(
        './node_modules/libarchive.js/dist/worker-bundle.js'
      );

      return new Response(file, {
        headers: {
          'content-type': 'application/javascript',
        },
      });
    }
    if (path === '/libarchive.wasm') {
      const file = Bun.file(
        './node_modules/libarchive.js/dist/libarchive.wasm'
      );

      return new Response(file, {
        headers: {
          'content-type': 'application/wasm',
        },
      });
    }

    if (path === '/libarchive.js') {
      const file = Bun.file('./node_modules/libarchive.js/dist/libarchive.js');

      return new Response(file, {
        headers: {
          'content-type': 'application/javascript',
        },
      });
    }

    const file = Bun.file('./index.html');
    return new Response(file, {
      headers: {
        'content-type': 'text/html',
      },
    });
  },
});
console.log(`Listening on ${server.hostname}:${server.port}`);
