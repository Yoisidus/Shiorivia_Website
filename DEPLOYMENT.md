# Website deployment checklist

1. Run `python3 build.py && python3 -m unittest discover -s tests -v` and verify all five languages on desktop and mobile.
2. Connect **two independent Vercel projects** to `Yoisidus/Shiorivia_Website`, each using `python3 build.py` as Build Command and `dist/main` or `dist/community` as Output Directory. Framework Preset: Other; Root Directory: repository root.
3. Review preview URLs, confirm social buttons, internal/external navigation, SEO metadata, browser console and responsive layout.
4. In Cloudflare, use the **exact DNS records Vercel requests** for `shiorivia.com`, `www.shiorivia.com` and `shiorivia.org`. Redirect `www` to apex. Snapshot DNS first. **Never change `app.shiorivia.com`** without a separate deployment plan. Do not touch `shiorivia.cn` in this phase.
5. Confirm official brand assets and third-party content policy; do not claim all artwork is covered by AGPL. No tracking or analytics currently installed.
6. Only release domains after explicit visual and DNS approval. Keep GitHub issues available for community feedback.

The existing temporary Vercel prototype was deployed without GitHub integration and may be behind Vercel Authentication; it does not affect either target domain.
