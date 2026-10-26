import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);

if (!existsSync(root)) {
  console.error("No static export found. Run `npm run build` first.");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const relative = normalize(clean).replace(/^([/\\])+/, "");
  const target = join(root, relative);

  // Never serve outside the export directory.
  if (target !== root && !target.startsWith(root + sep)) return null;

  const candidates = [];
  if (clean.endsWith("/")) candidates.push(join(target, "index.html"));
  else candidates.push(target, `${target}.html`, join(target, "index.html"));

  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) ?? null;
}

createServer((request, response) => {
  const file = resolveFile(request.url ?? "/");

  if (!file) {
    const notFound = join(root, "404.html");
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    if (existsSync(notFound)) {
      createReadStream(notFound).pipe(response);
    } else {
      response.end("Not found");
    }
    return;
  }

  response.writeHead(200, {
    "Content-Type": MIME[extname(file).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": statSync(file).size,
    "Cache-Control": file.endsWith(".html")
      ? "no-cache"
      : "public, max-age=31536000, immutable",
  });
  createReadStream(file).pipe(response);
}).listen(port, () => {
  console.log(`Economics Association of Zambia — serving out/ at http://localhost:${port}`);
});
