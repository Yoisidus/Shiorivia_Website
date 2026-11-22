# Shiorivia Website · Release Checklist

## Active Git deployments

Both Vercel projects are connected to `Yoisidus/Shiorivia_Website` → `main`. A small README commit (`c461944`) successfully triggered **both** automatic builds, and GitHub Actions passed.

| Website | Vercel project | Build command | Output directory |
| --- | --- | --- | --- |
| Product (`shiorivia.com`) | `shiorivia-web-com` | `python3 build.py` | `dist/main` |
| Community (`shiorivia.org`) | `shiorivia-web-org` | `python3 build.py` | `dist/community` |

The existing `shiorivia_cloud` Vercel project and `app.shiorivia.com` must not be modified as part of website release.

## Domain staging (2026-11-22)

Added `shiorivia.com` and `www.shiorivia.com` (308 redirect to apex) to `shiorivia-web-com`, and `shiorivia.org` to `shiorivia-web-org`. Vercel shows the domains as ownership-verified; **DNS still needs updating in Cloudflare**. As of the check, `shiorivia.com`, `www.shiorivia.com`, and `shiorivia.org` were reported `misconfigured: true`.

Vercel recommended the following hostname-specific DNS CNAME targets:

| Cloudflare zone | Record name | Type | Target |
| --- | --- | --- | --- |
| `shiorivia.com` | `@` | CNAME (Cloudflare apex flattening) | `08ddf03d7ee8bc53.vercel-dns-017.com` |
| `shiorivia.com` | `www` | CNAME | `08ddf03d7ee8bc53.vercel-dns-017.com` |
| `shiorivia.org` | `@` | CNAME (Cloudflare apex flattening) | `53cb130f043131b9.vercel-dns-017.com` |

**Verify the current targets in the Vercel Domains panel immediately before changing DNS**: Vercel may issue different recommendations after project or account changes. Do not add a conflicting A/AAAA alongside a CNAME for the same name. Start with **DNS only** in Cloudflare, confirm Vercel verification and HTTPS reachability, then review Cloudflare proxy configuration intentionally.

Cloudflare DNS must **not** replace or delete the existing `app` CNAME in the `shiorivia.com` zone. Do not touch the `shiorivia.cn` zone in this phase.

## Before publishing

1. Run `python3 build.py` and `python3 -m unittest discover -s tests -v`, and check that GitHub Actions is green.
2. Test both deployed sites on desktop and mobile; switch between zh-CN, zh-TW, en, ja, ko. Inspect browser console and accessibility.
3. Check the X, YouTube, and bilibili social links, Local/Cloud entries, and the links between the main and community websites.
4. Check canonical/OG metadata, assets, responsive layout, redirects, robots indexing, and HTTPS.
5. Snapshot Cloudflare DNS configuration; perform the DNS update only with release approval.
6. After cutover, recheck `app.shiorivia.com` and ensure its existing Cloud application is still reachable.

## Retire old non-Git prototype projects

The following **old** Vercel projects have no custom domains and can be deleted from the Vercel dashboard following confirmation:

- `shiorivia-website-preview`
- `shiorivia-website-main`
- `shiorivia-website-community`

The available connector can provide the deletion pages but **cannot perform the final Delete Project action**. Do not delete `shiorivia-web-com`, `shiorivia-web-org`, or `shiorivia_cloud`.

The site's source code is AGPL-3.0. Brand marks follow the independent `TRADEMARKS.md` policy. External AI providers and third-party character IP have their own terms.
