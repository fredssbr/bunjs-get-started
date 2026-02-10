const server = Bun.serve({
    port: 6969,
    routes: {
        "/" : () => new Response('Hi, mom!')
    }
});

console.log(`Listening on ${server.url}`);