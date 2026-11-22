"""Smoke tests for the Shiorivia static product and community websites."""
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / "index.html", ROOT / "community/index.html", ROOT / "dist/main/index.html", ROOT / "dist/community/index.html"]
LINKS = (
    "https://x.com/Shiorivia",
    "https://www.youtube.com/@Shiorivia",
    "https://space.bilibili.com/3747570193009508",
)

class WebsiteTests(unittest.TestCase):
    def test_social_accounts(self):
        for page in PAGES:
            with self.subTest(page=str(page)):
                html = page.read_text(encoding="utf-8")
                for url in LINKS:
                    self.assertIn('href="' + url + '"', html)
                self.assertEqual(3, html.count('class="social-link social-'))
                self.assertIn('rel="noopener noreferrer"', html)

    def test_brand_assets(self):
        for page in PAGES:
            with self.subTest(page=str(page)):
                html = page.read_text(encoding="utf-8")
                self.assertNotIn("raw.githubusercontent.com", html)
        for edition in ("main", "community"):
            for name in ("shiorivia-mark.svg", "shiorivia-og.png", "shiorivia-favicon-32.png", "style.css", "site.js"):
                self.assertTrue((ROOT / "dist" / edition / "assets" / name).is_file())

    def test_independent_routes(self):
        main = (ROOT / "dist/main/index.html").read_text(encoding="utf-8")
        org = (ROOT / "dist/community/index.html").read_text(encoding="utf-8")
        self.assertIn('href="https://shiorivia.org/"', main)
        self.assertIn('href="https://shiorivia.com/"', org)
        self.assertIn('href="assets/style.css"', org)
        self.assertNotIn('href="../assets/style.css"', org)

    def test_languages(self):
        js = (ROOT / "assets/site.js").read_text(encoding="utf-8")
        for language in ("zh-CN","zh-TW","en","ja","ko"):
            self.assertIn(language, js)
        self.assertNotIn("eval(", js)
        self.assertNotIn("new Function(", js)

if __name__ == "__main__":
    unittest.main()
