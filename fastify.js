import Fastify from 'fastify'
import { pathToFileURL } from 'node:url'

const fastify = Fastify({
  logger: true
})

const mod = await import(pathToFileURL("dist/server/entry-server.js").href);

// Declare a route
fastify.get('/', async function (request, reply) {
  reply.header('Content-Type', 'text/html');
  const rendered = await mod.render(request.url);
  reply.send(rendered.body);
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})