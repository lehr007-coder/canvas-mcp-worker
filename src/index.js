/**
 * canvas-mcp-worker — scaffold
 * Minimal Cloudflare Worker to validate the CI/CD deployment pipeline.
 * Replace with the real MCP implementation.
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        status: "ok",
        worker: "canvas-mcp-worker",
        timestamp: new Date().toISOString()
      });
    }

    return Response.json({
      name: "canvas-mcp-worker",
      message: "MCP worker scaffold — implementation pending",
      endpoints: ["/health"]
    });
  }
};
