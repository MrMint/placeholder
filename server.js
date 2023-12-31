// ESM
import Fastify from "fastify";
import app from "./app.js";

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true,

  bodyLimit: 10 * 1024 * 1024, // Default Limit set to 10MB
});

app(fastify);

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
