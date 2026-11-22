#!/usr/bin/env python3
"""Build independent static outputs for shiorivia.com and shiorivia.org."""
from pathlib import Path
from shutil import copytree, copy2, rmtree

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
if DIST.exists():
    rmtree(DIST)

for name in ("main", "community"):
    dest = DIST / name
    dest.mkdir(parents=True)
    copytree(ROOT / "assets", dest / "assets")
    copy2(ROOT / "vercel.json", dest / "vercel.json")

main_html = (ROOT / "index.html").read_text(encoding="utf-8")
main_html = main_html.replace('href="/community/"', 'href="https://shiorivia.org/"')
(DIST / "main" / "index.html").write_text(main_html, encoding="utf-8")

org_html = (ROOT / "community" / "index.html").read_text(encoding="utf-8")
org_html = org_html.replace('href="../assets/', 'href="assets/')
org_html = org_html.replace('src="../assets/', 'src="assets/')
org_html = org_html.replace('href="/#spaces"', 'href="https://shiorivia.com/#spaces"')
org_html = org_html.replace('href="/"', 'href="https://shiorivia.com/"')
(DIST / "community" / "index.html").write_text(org_html, encoding="utf-8")
print("Built dist/main and dist/community")
