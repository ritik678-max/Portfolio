"""Build first with `npm run build`, then run this file to serve the portfolio."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os

ROOT = Path(__file__).parent / "dist"
PORT = 8000

class SPAHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        requested = ROOT / self.path.lstrip("/")
        if self.path != "/" and not requested.exists():
            self.path = "/index.html"
        return super().do_GET()

if __name__ == "__main__":
    if not ROOT.exists():
        raise SystemExit("Build missing. Run: npm install && npm run build")
    os.chdir(ROOT)
    print(f"Ritik's portfolio is live at http://localhost:{PORT}")
    ThreadingHTTPServer(("127.0.0.1", PORT), SPAHandler).serve_forever()
