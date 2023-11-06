import { getPlaiceholder } from "plaiceholder";

function dataUrlToImageBuffer(dataUrl) {
  const arr = dataUrl.split(",");
  if (arr.length < 2) {
    return undefined;
  }

  return Buffer.from(arr[1], "base64");
}

const schema = {
  body: {
    type: "object",
    required: ["image"],
    properties: {
      image: { type: "string" },
    },
  },
};

export default async function (fastify, opts) {
  fastify.post("/", { schema }, async function (request, reply) {
    const { base64 } = await getPlaiceholder(
      dataUrlToImageBuffer(request.body.image),
    );
    return base64;
  });
}
