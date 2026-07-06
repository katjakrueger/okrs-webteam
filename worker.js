export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    if (newResponse.headers.get("content-type")?.includes("text/html")) {
      newResponse.headers.set("content-type", "text/html; charset=utf-8");
    }
    return newResponse;
  }
}
