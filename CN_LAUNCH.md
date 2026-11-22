# Shiorivia.cn · Information-Only Launch Checklist

**Scope**: static product introduction and announcements for mainland China visitors. The actual Shiorivia Local repository and international Cloud application remain independent, hosted outside mainland China. This document is not legal advice.

## Content and architecture
- Build with `python3 build.py`, publish `dist/cn` from a dedicated deployment project.
- Use the same Star Road design and six-space feature overview as `.com`.
- Display Simplified Chinese by default; keep the other four interface languages selectable.
- Make clear this is an informational site, not an independently operated mainland AI application.
- Link to the **international website** for Cloud information instead of adding a direct AI chat/app launch button.
- Prefer bilibili as the first regional social link while preserving X/YouTube as international external destinations.
- Host brand SVG, favicon, CSS, JS and OG image on the same origin; no tracker, embedded social SDK or remote fonts.
- Never accept signups, passwords, model API keys or private prompts from this website.

## Privacy and legal checks before DNS cutover
- Confirm Alibaba Cloud .cn registration real-name approval and WHOIS privacy protection.
- Confirm hosting and CDN nodes are outside mainland China, if relying on the overseas-hosting ICP filing exception. Mainland hosting/CDN usually triggers ICP filing requirements.
- Independently assess applicability of public-security website filing and other content/personal-information obligations; overseas hosting alone does not eliminate these.
- Ensure visible third-party IP, the content disclaimers, and promotional statements are appropriate.
- Do not display a fictional ICP or public-security registration number.
- Never show registrar account screenshots containing identity documents or personal contact details.

## Deployment and release
1. Ensure GitHub PR CI is green; verify mobile/desktop layouts and five-language switches.
2. Create a **new** Vercel Git project for `Yoisidus/Shiorivia_Website`: framework Other, build `python3 build.py`, output `dist/cn`.
3. Inspect protected preview and build logs; test social links, Local repo link, external international homepage link, and official branding.
4. Perform regional reachability checks from mainland networks before committing to Vercel as long-term host.
5. Only after the owner's explicit approval, add `shiorivia.cn` to the Vercel project, obtain the precise recommended records, then update DNS at Alibaba Cloud. Do **not** assume .cn uses the same nameservers as the .com/.org Cloudflare zones.
6. Verify HTTPS, DNS, indexability, canonical URL, and externally hosted destinations after cutover. Monitor any legal filing deadlines.

Useful references:
- [CNNIC privacy via Alibaba Cloud](https://help.aliyun.com/zh/dws/user-guide/cnnic-privacy-protection-service/)
- [Alibaba Cloud ICP filing scenarios](https://www.alibabacloud.com/help/zh/icp-filing/basic-icp-service/product-overview/icp-filing-requirements-for-a-regular-website)
