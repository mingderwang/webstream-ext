import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({ port: 8000 });

console.log('Server started on http://localhost:8000/');

async function handleRequest(req: Request): Promise<Response> {
  return new Response('Hello, world!');
}

while (true) {
  const req = await server.receive();
  const res = await handleRequest(req);
  await server.respond(res);
}

