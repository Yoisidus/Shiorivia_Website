# Shiorivia Website · Star Road

**Where Stories Find Their Way.**

Official informational websites for [Shiorivia Local](https://github.com/Yoisidus/Shiorivia) and [Shiorivia Cloud](https://github.com/Yoisidus/Shiorivia_Cloud).

- **shiorivia.com** — official product website
- **shiorivia.org** — open-source community and contributor resources
- **app.shiorivia.com** — the existing interactive Cloud application (separate project)

## Development

The websites intentionally use dependency-free static HTML, CSS and JavaScript. No tracker, account, or third-party widget is included.

```sh
python3 -m http.server 8080
# preview / and /community/
python3 build.py
python3 -m unittest discover -s tests -v
```

`build.py` creates two **independent deployable outputs**:

| Output | Intended domain | Published entrypoint |
| --- | --- | --- |
| `dist/main` | `shiorivia.com` | `/` |
| `dist/community` | `shiorivia.org` | `/` |

For Vercel Git projects, set the **Build Command** to `python3 build.py` and the **Output Directory** to `dist/main` or `dist/community` respectively. Both projects use the same Git repository but distinct output directories. Do not map either to the existing Shiorivia Cloud Vercel project.

Site copy supports Simplified and Traditional Chinese, English, Japanese and Korean. Shiorivia Cloud stores most creative data in browser IndexedDB rather than a synchronized server account; external AI requests are forwarded to the chosen model provider.

## Brand and community

Official social profiles: [X](https://x.com/Shiorivia) · [YouTube](https://www.youtube.com/@Shiorivia) · [bilibili](https://space.bilibili.com/3747570193009508).

Official Star Road SVG, favicon and OG media are copied from the Shiorivia Local repository; their use follows [TRADEMARKS.md](TRADEMARKS.md) and [BRANDING.md](BRANDING.md), **separately from the code license**. Code is licensed under [AGPL-3.0](LICENSE); third-party character and fan content rights remain with their owners.

Both websites are connected to separate Vercel Git projects, with `main` as the release branch. Preview and release changes should pass GitHub Actions checks before promotion.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release steps. Do not commit API keys, Cloudflare tokens or private user data.
