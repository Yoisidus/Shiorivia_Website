#!/usr/bin/env python3
"""Build independent static outputs for shiorivia.com and shiorivia.org."""
from pathlib import Path
from shutil import copytree, copy2, rmtree

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
if DIST.exists():
    rmtree(DIST)

for name in ("main", "community", "cn"):
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
print("Built dist/main, dist/community and dist/cn")

# The China-region website is a static introduction to the overseas project.
# It deliberately offers no login, user submissions, online AI interface,
# server-side proxy, model credentials, or interactive AI service.
cn_html = (ROOT / "index.html").read_text(encoding="utf-8")
replacements = (
    ('<body data-site="main">', '<body data-site="cn">'),
    ('href="/community/"', 'href="https://shiorivia.org/"'),
    ('href="https://app.shiorivia.com"', 'href="https://shiorivia.com/"'),
    ('data-i18n="nav_launch"', 'data-i18n="cn_nav_main"'),
    ('data-i18n="hero_cloud"', 'data-i18n="cn_hero_main"'),
    ('data-i18n="cloud_cta"', 'data-i18n="cn_cloud_cta"'),
    ('data-i18n="last_cta"', 'data-i18n="cn_last_cta"'),
    ('content="https://shiorivia.com/assets/shiorivia-og.png"', 'content="https://shiorivia.cn/assets/shiorivia-og.png"'),
    ('content="Shiorivia · Where Stories Find Their Way"', 'content="Shiorivia 中国站 · Where Stories Find Their Way"'),
    ('content="Shiorivia — a multilingual, local-first AI conversation and interactive storytelling studio. Where Stories Find Their Way."', 'content="Shiorivia 中国站：了解开源 AI 对话、角色世界与故事创作项目。本站提供静态产品介绍，在线应用位于海外主站。"'),
    ('content="Explore AI conversations, worlds, characters and stories in Shiorivia Local and Cloud."', 'content="Shiorivia 中国站：产品概览、六大创作空间、开源代码与海外版本信息。"'),
    ('<title>Shiorivia — Where Stories Find Their Way.</title>', '<title>Shiorivia 中国站 · 故事，于此寻路</title>'),
)
for original, replacement in replacements:
    assert original in cn_html, f"Missing CN template anchor: {original}"
    cn_html = cn_html.replace(original, replacement)

cn_html = cn_html.replace(
    '  <link rel="icon" href="assets/shiorivia-favicon-32.png" type="image/png">',
    '  <link rel="icon" href="assets/shiorivia-favicon-32.png" type="image/png">\\n'
    '  <link rel="canonical" href="https://shiorivia.cn/">'.replace('\\n', '\n'),
)
cn_html = cn_html.replace(
    '<div class="hero-meta">',
    '<div class="cn-region-label" data-i18n="cn_region">中国大陆 · 产品资讯站</div>'
    '<p class="cn-region-description" data-i18n="cn_intro">'
    '本页面仅提供产品介绍与开源资讯，在线应用由海外主站提供。'
    '</p><div class="hero-meta">',
    1
)
cn_html = cn_html.replace(
    '<div class="note-line">',
    '<div class="cn-notice" role="note">'
    '<span class="cn-notice-label" data-i18n="cn_notice_title">关于中国站</span>'
    '<p data-i18n="cn_notice">本站为静态介绍页面，不提供账号注册、在线 AI 对话或模型 API 服务。'
    'Cloud 为海外应用，具体可用性取决于所在地区与第三方服务商。</p>'
    '</div><div class="note-line">',
    1
)
(DIST / "cn" / "index.html").write_text(cn_html, encoding="utf-8")
