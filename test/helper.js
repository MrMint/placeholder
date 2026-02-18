// This file contains code that we reuse
// between our tests.

import Fastify from 'fastify'
import app from '../app.js'

// automatically build and tear down our instance
async function build (t) {
  const fastify = Fastify()
  await fastify.register(app)
  await fastify.ready()

  // tear down our app after we are done
  t.teardown(() => fastify.close())

  return fastify
}

export { build }
