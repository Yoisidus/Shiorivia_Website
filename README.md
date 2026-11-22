# Shiorivia Website · Star Road

**Where Stories Find Their Way.**

Official informational websites for [Shiorivia Local](https://github.com/Yoisidus/Shiorivia) and [Shiorivia Cloud](https://github.com/Yoisidus/Shiorivia_Cloud).

- **shiorivia.com** — official product website
- **shiorivia.org** — open-source community and contributor resources
- **shiorivia.cn** — China-region information-only website (offshore hosting, no AI service)
- **app.shiorivia.com** — the existing interactive Cloud application (separate project)

## Development

The websites intentionally use dependency-free static HTML, CSS and JavaScript. No tracker, account, or third-party widget is included.

```sh
python3 -m http.server 8080
# preview / and /community/
python3 build.py
python3 -m unittest discover -s tests -v
```

`build.py` creates three **independent deployable outputs**:

| Output | Intended domain | Published entrypoint |
| --- | --- | --- |
| `dist/main` | `shiorivia.com` | `/` |
| `dist/community` | `shiorivia.org` | `/` |
| `dist/cn` | `shiorivia.cn` | `/` |

For Vercel Git projects, set the **Build Command** to `python3 build.py` and the **Output Directory** to `dist/main`, `dist/community`, or `dist/cn` respectively. Each site uses the same Git repository but a distinct output directory. Do not map either to the existing Shiorivia Cloud Vercel project.

Site copy supports Simplified and Traditional Chinese, English, Japanese and Korean. Shiorivia Cloud stores most creative data in browser IndexedDB rather than a synchronized server account; external AI requests are forwarded to the chosen model provider.

## Brand and community

Official social profiles: [X](https://x.com/Shiorivia) · [YouTube](https://www.youtube.com/@Shiorivia) · [bilibili](https://space.bilibili.com/3747570193009508).

Official Star Road SVG, favicon and OG media are copied from the Shiorivia Local repository; their use follows [TRADEMARKS.md](TRADEMARKS.md) and [BRANDING.md](BRANDING.md), **separately from the code license**. Code is licensed under [AGPL-3.0](LICENSE); third-party character and fan content rights remain with their owners.

Both websites are connected to separate Vercel Git projects, with `main` as the release branch. Preview and release changes should pass GitHub Actions checks before promotion.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release steps. Do not commit API keys, Cloudflare tokens or private user data.

## Mainland China informational website

`dist/cn` is a separate static site generated from the .com visual template, with Simplified Chinese by default and the same optional five-language interface. It provides product and open-source information but **does not** provide user registration, AI conversations, model API calls, or an application backend. The Cloud application remains hosted overseas, and regional availability is not guaranteed. No third-party tracking scripts or remotely loaded fonts are used.

The `.cn` domain is registered with Alibaba Cloud and has already completed real-name verification. **Do not change its DNS until the domain owner's launch checks are completed**, including regional legal requirements (police cybersecurity filing where applicable), hosting location, public WHOIS privacy and cross-border availability.

See [CN_LAUNCH.md](CN_LAUNCH.md) for the dedicated checklist.
