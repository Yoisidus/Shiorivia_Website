/* Shiorivia official website v0.1 — static, client-side five-language copy.
   Every HTML entry is written here, not taken from untrusted input. */
(() => {
  'use strict';
  const languages = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko'];
  const copy = {
    nav_spaces: ['探索空间','探索空間','Explore','空間を探る','공간 탐험'],
    nav_editions: ['选择版本','選擇版本','Editions','エディション','에디션'],
    nav_story: ['设计理念','設計理念','Philosophy','デザイン理念','디자인 철학'],
    nav_community: ['社区','社群','Community','コミュニティ','커뮤니티'],
    nav_launch: ['启动 Cloud','啟動 Cloud','Launch Cloud','Cloud を開く','Cloud 시작'],
    hero_eyebrow: ['一个属于故事与想象力的空间','一個屬於故事與想像力的空間','A space for stories and imagination','物語と想像力のための場所','이야기와 상상력을 위한 공간'],
    hero_description: ['在无数可能的世界线之间，写下只属于你的故事。让对话、角色与灵感，在同一片星空下自然相遇。','在無數可能的世界線之間，寫下只屬於你的故事。讓對話、角色與靈感，在同一片星空下自然相遇。','Across countless possible worlds, write a story only you can tell. Let conversations, characters, and ideas meet beneath the same stars.','無数の世界線のあいだで、あなただけの物語を。会話もキャラクターもひらめきも、同じ星空の下で出会います。','수많은 가능성의 세계선 사이에서 나만의 이야기를 써 보세요. 대화와 캐릭터, 영감이 하나의 별하늘 아래에서 만납니다.'],
    hero_cloud: ['进入 Cloud 版','進入 Cloud 版','Enter Cloud','Cloud 版を開く','Cloud 시작하기'],
    hero_explore: ['探索 Shiorivia','探索 Shiorivia','Discover Shiorivia','Shiorivia を探る','Shiorivia 살펴보기'],
    hero_meta: ['两种版本 · 六个空间 · 五种语言','兩種版本 · 六個空間 · 五種語言','Two editions · Six spaces · Five languages','2つのエディション · 6つの空間 · 5つの言語','두 가지 에디션 · 여섯 공간 · 다섯 언어'],
    scroll: ['向下探索','向下探索','Scroll to discover','スクロールして探る','스크롤하여 둘러보기'],
    intro_kicker: ['关于 Shiorivia','關於 Shiorivia','About Shiorivia','Shiorivia について','Shiorivia 소개'],
    intro_title: ['不止于对话。<br><em>让每一种想象，都拥有去处。</em>','不止於對話。<br><em>讓每一種想像，都擁有去處。</em>','Beyond conversation.<br><em>A place for every imagination.</em>','会話の、その先へ。<br><em>すべての想像に、居場所を。</em>','대화 그 너머.<br><em>모든 상상에 머물 곳을.</em>'],
    intro_body: ['Shiorivia 是一座为 AI 对话、角色互动与故事创作而设计的工作室。你可以探索既有世界，也可以亲手编织自己的世界；从一个问题，到一段旅程，再到一本小说。','Shiorivia 是一座為 AI 對話、角色互動與故事創作而設計的工作室。你可以探索既有世界，也能親手編織自己的世界；從一個問題，到一段旅程，再到一本小說。','Shiorivia is a studio for AI conversations, character interactions, and storytelling. Explore existing worlds or weave your own—from a single question to a journey, and perhaps an entire novel.','Shiorivia は、AI との会話、キャラクターとの交流、物語づくりのためのスタジオ。既存の世界を旅することも、自分だけの世界を編むこともできます。一つの問いから、旅へ、そして小説へ。','Shiorivia는 AI 대화, 캐릭터 상호작용, 이야기 창작을 위한 스튜디오입니다. 이미 존재하는 세계를 탐험하거나 직접 새로운 세계를 만들 수 있어요. 하나의 질문에서 여행으로, 그리고 한 편의 소설로.'],
    stat_spaces: ['创作空间','創作空間','Creative spaces','創作空間','창작 공간'],
    stat_languages: ['界面语言','介面語言','UI languages','表示言語','인터페이스 언어'],
    stat_editions: ['使用版本','使用版本','Editions','エディション','에디션'],
    spaces_kicker: ['探索六大空间','探索六大空間','Explore the six spaces','6つの空間','여섯 공간 탐험'],
    spaces_title: ['六条路径，<em>无数种可能。</em>','六條路徑，<em>無數種可能。</em>','Six pathways, <em>endless possibility.</em>','6つの道、<em>無限の可能性。</em>','여섯 갈래 길, <em>무한한 가능성.</em>'],
    spaces_desc: ['为不同的创作方式保留各自的节奏，也让它们在同一个世界中彼此连接。','為不同的創作方式保留各自的節奏，也讓它們在同一個世界中彼此連結。','Each creative practice has its own rhythm, yet all can connect within one world.','それぞれの創作に、それぞれのリズムを。同じ世界の中で、ゆるやかにつながります。','각각의 창작에 고유한 리듬을 남기면서도 하나의 세계 안에서 서로 연결합니다.'],
    space_officina: ['灵感与工程','靈感與工程','Ideas & engineering','アイデアと開発','아이디어와 개발'],
    space_officina_desc: ['从日常思考到代码创作，让想法拥有具体的形状。','從日常思考到程式創作，讓想法擁有具體的形狀。','From everyday questions to code, give your ideas a shape.','日々の問いからコードまで。アイデアを形に。','일상의 질문부터 코드까지, 아이디어를 형태로 만들어 보세요.'],
    space_vialata: ['步入故事','步入故事','Step into a story','物語の中へ','이야기 속으로'],
    space_vialata_desc: ['走进时间线与场景，和角色共同推动故事。','走進時間線與場景，和角色共同推動故事。','Enter timelines and scenes, and shape a story with its characters.','時間軸と場面に入り、キャラクターと物語を進めます。','시간선과 장면 속에서 캐릭터와 함께 이야기를 이어 갑니다.'],
    space_umbra: ['静谧的对话','靜謐的對話','Quiet conversations','静かな対話','고요한 대화'],
    space_umbra_desc: ['与角色深入交流，让独立的记忆沉淀为联系。','與角色深入交流，讓獨立的記憶沉澱為連結。','Connect with characters through conversations and distinct memories.','キャラクターと対話し、固有の記憶を積み重ねます。','캐릭터와 대화하며 각자의 기억을 쌓아 갑니다.'],
    space_tela: ['编织长篇','編織長篇','Weave a novel','長い物語を紡ぐ','장편을 엮다'],
    space_tela_desc: ['在章节与文字之间，慢慢写成属于自己的小说。','在章節與文字之間，慢慢寫成屬於自己的小說。','Shape chapters and prose into a novel of your own.','章と文章を重ね、あなただけの小説へ。','장과 문장을 쌓아 나만의 소설을 써 내려갑니다.'],
    space_viae: ['交错的道路','交錯的道路','Intersecting paths','交差する道','교차하는 길'],
    space_viae_desc: ['以多角色、多视角与不同路径探索故事的分岔。','以多角色、多視角與不同路徑探索故事的分岔。','Explore branching stories with multiple characters and viewpoints.','複数の登場人物や視点から、物語の分岐を探ります。','여러 캐릭터와 시점으로 갈라지는 이야기를 탐색합니다.'],
    space_charta: ['记录你的世界','記錄你的世界','Map your world','世界を記す','나의 세계 기록하기'],
    space_charta_desc: ['保存角色、时间线与世界观，让每段旅程有所归依。','保存角色、時間線與世界觀，讓每段旅程有所歸依。','Organize characters, timelines, and lore so every journey has a home.','キャラクター、時間軸、世界設定を記録します。','캐릭터와 시간선, 세계관을 정리하여 여정을 기록합니다.'],
    editions_kicker: ['两种方式，一片星空','兩種方式，一片星空','Two ways, one sky','2つの方法、ひとつの空','두 가지 방법, 하나의 하늘'],
    editions_title: ['选择你的<em>启程方式。</em>','選擇你的<em>啟程方式。</em>','Choose how <em>you begin.</em>','あなたらしい<em>始め方を。</em>','나만의 <em>시작을 선택하세요.</em>'],
    editions_desc: ['在自己的设备上悉心保存，或直接打开浏览器开始探索。','在自己的裝置上悉心保存，或直接打開瀏覽器開始探索。','Keep your work on your own device, or step in directly from a browser.','自分の端末で大切に保存するか、ブラウザーからすぐに始めるか。','내 기기에 저장하거나 브라우저에서 바로 시작하세요.'],
    local_title: ['留在你身边的工作室','留在你身邊的工作室','A studio close to home','手元にあるスタジオ','내 곁의 스튜디오'],
    local_body: ['本地优先的存储、工程文件集成，以及面向个人创作环境的深度定制。','本機優先的儲存、工程檔案整合，以及配合個人創作環境的深度自訂。','Local-first storage, integrated project files, and deep customization for your own creative setup.','ローカル優先の保存、プロジェクトファイル連携、自分らしい制作環境へのカスタマイズ。','로컬 우선 저장, 프로젝트 파일 연동, 개인 창작 환경을 위한 심화 설정을 제공합니다.'],
    tag_local: ['本地存储','本機儲存','Local storage','ローカル保存','로컬 저장'],
    tag_ide: ['工程 IDE','工程 IDE','Project IDE','プロジェクト IDE','프로젝트 IDE'],
    tag_custom: ['可定制','可自訂','Customizable','カスタマイズ','사용자 설정'],
    local_cta: ['查看本地版与安装说明','查看本機版與安裝說明','Explore Local & installation','Local 版と導入方法','Local 및 설치 안내'],
    cloud_title: ['随浏览器启程','隨瀏覽器啟程','Begin in your browser','ブラウザーから始める','브라우저에서 시작'],
    cloud_body: ['无需安装本地服务，带上自己的模型密钥，在浏览器中开启对话与创作。','無需安裝本機服務，帶上自己的模型金鑰，在瀏覽器中開啟對話與創作。','No local service setup. Bring your own model keys and create directly in your browser.','ローカルサーバーの準備は不要。自分のモデルキーで、ブラウザーから創作へ。','로컬 서버 설치 없이, 자신의 모델 키로 브라우저에서 대화와 창작을 시작합니다.'],
    tag_browser: ['浏览器体验','瀏覽器體驗','Browser-first','ブラウザー中心','브라우저 중심'],
    tag_byok: ['加密 BYOK','加密 BYOK','Encrypted BYOK','暗号化 BYOK','암호화 BYOK'],
    tag_export: ['支持导出','支援匯出','Export tools','エクスポート','내보내기'],
    cloud_cta: ['打开 Cloud 版','開啟 Cloud 版','Launch Cloud Edition','Cloud 版を開く','Cloud 열기'],
    editions_note: ['Cloud 的创作数据主要保存在当前浏览器中，不提供跨设备账户同步；模型请求会发送至你选择的第三方供应商。请定期导出备份，并为 API Key 设置消费上限。','Cloud 的創作資料主要保存在目前瀏覽器中，不提供跨裝置帳號同步；模型請求會傳送至你選擇的第三方供應商。請定期匯出備份，並為 API Key 設定消費上限。','Cloud stores most creative data in this browser; there is no cross-device account sync. Model requests go to your chosen third-party provider. Export backups regularly and set API spending limits.','Cloud の制作データは主にこのブラウザーに保存され、端末間のアカウント同期はありません。モデルへのリクエストは選択した外部プロバイダーに送信されます。定期的な書き出しと利用上限の設定をおすすめします。','Cloud의 창작 데이터는 주로 현재 브라우저에 저장되며 기기 간 계정 동기화를 제공하지 않습니다. 모델 요청은 선택한 외부 제공업체로 전송됩니다. 정기적으로 백업하고 API 사용 한도를 설정하세요.'],
    philosophy_kicker: ['我们的设计哲学','我們的設計哲學','Our design philosophy','デザイン哲学','디자인 철학'],
    philosophy_title: ['少一些喧嚣，<br><em>多一些故事。</em>','少一些喧囂，<br><em>多一些故事。</em>','Less noise.<br><em>More room for stories.</em>','余計なものは少なく。<br><em>物語の余白は豊かに。</em>','소란스러움은 덜고,<br><em>이야기의 여백은 더하고.</em>'],
    philosophy_body: ['简约，不是删去所有细节；优雅，是让每一个细节都有存在的理由。愿 Shiorivia 成为你思考、创作与想象时，一处安静而自由的角落。','簡約，不是刪去所有細節；優雅，是讓每個細節都有存在的理由。願 Shiorivia 成為你思考、創作與想像時，一處安靜而自由的角落。','Simplicity is not the absence of detail. Elegance is giving every detail a reason to exist. We hope Shiorivia becomes a quiet, open corner for your thinking and imagination.','簡潔さは、細部を消すことではありません。優雅さは、すべての細部に意味があること。Shiorivia が、思考と創作のための静かで自由な場所になりますように。','간결함은 모든 디테일을 없애는 것이 아니라, 각 디테일에 이유를 부여하는 것입니다. Shiorivia가 생각과 창작을 위한 고요하고 자유로운 공간이 되기를 바랍니다.'],
    last_kicker: ['下一站，从这里开始','下一站，從這裡開始','Your next chapter begins here','次の章は、ここから','다음 장은 여기에서'],
    last_title: ['你的故事，<br><em>正等待启程。</em>','你的故事，<br><em>正等待啟程。</em>','Your story<br><em>is ready to begin.</em>','あなたの物語が、<br><em>始まりを待っています。</em>','당신의 이야기는<br><em>시작을 기다립니다.</em>'],
    last_body: ['从一条新的世界线、一个角色，或一句简单的问候开始。','從一條新的世界線、一位角色，或一句簡單的問候開始。','Start with a worldline, a character, or a simple hello.','世界線ひとつ、キャラクターひとり、あるいは短い挨拶から。','하나의 세계선, 한 명의 캐릭터, 또는 가벼운 인사에서 시작하세요.'],
    last_cta: ['开始探索','開始探索','Begin exploring','探索を始める','탐험 시작'],
    footer_community: ['社区与开源','社群與開源','Community & open source','コミュニティとオープンソース','커뮤니티와 오픈소스'],
    footer_brand: ['品牌规范','品牌規範','Brand policy','ブランドポリシー','브랜드 정책'],
    footer_note: ['一个非官方同人创作项目。第三方角色与素材权利归原权利人所有。','一個非官方同人創作專案。第三方角色與素材權利歸原權利人所有。','An unofficial fan project. Third-party characters and assets belong to their respective rights holders.','非公式のファンプロジェクトです。第三者のキャラクターと素材の権利は各権利者に帰属します。','비공식 팬 프로젝트입니다. 제3자 캐릭터와 자료의 권리는 해당 권리자에게 있습니다.'],
    back_top: ['返回顶部 ↑','返回頂部 ↑','Back to top ↑','ページ上部へ ↑','맨 위로 ↑'],
    community_nav_code: ['开源仓库','開源儲存庫','Repositories','リポジトリ','저장소'],
    community_nav_contribute: ['参与贡献','參與貢獻','Contribute','貢献する','기여하기'],
    community_nav_principles: ['社区原则','社群原則','Principles','大切にすること','커뮤니티 원칙'],
    community_eyebrow: ['SHIORIVIA · 开放源码','SHIORIVIA · 開放原始碼','SHIORIVIA · OPEN SOURCE','SHIORIVIA · オープンソース','SHIORIVIA · 오픈소스'],
    community_title: ['每一颗星，<br><em>都能成为星图的一部分。</em>','每一顆星，<br><em>都能成為星圖的一部分。</em>','Every star<br><em>belongs to a constellation.</em>','ひとつひとつの星が、<br><em>星図を描いてゆく。</em>','모든 별은<br><em>하나의 별자리를 이룹니다.</em>'],
    community_desc: ['一款作品的旅程，不必由一个人独自完成。这里是 Shiorivia 的开源开发、文档与社区协作空间。','一款作品的旅程，不必由一個人獨自完成。這裡是 Shiorivia 的開源開發、文件與社群協作空間。','A project’s journey need not be taken alone. Find Shiorivia’s source code, documentation, and ways to collaborate here.','作品の旅路は、一人で歩く必要はありません。ここは Shiorivia の開発、ドキュメント、協力のための場所です。','프로젝트의 여정을 혼자 걸을 필요는 없습니다. Shiorivia의 소스 코드, 문서, 협업 방법을 여기에서 만날 수 있습니다.'],
    community_explore: ['探索项目','探索專案','Explore projects','プロジェクトを見る','프로젝트 살펴보기'],
    community_contrib: ['贡献指南','貢獻指南','Contribution guide','貢献ガイド','기여 가이드'],
    community_repo_kicker: ['项目仓库','專案儲存庫','Project repositories','プロジェクトのリポジトリ','프로젝트 저장소'],
    community_repo_title: ['从代码出发，<em>共同拓展世界。</em>','從程式碼出發，<em>共同拓展世界。</em>','Built in code, <em>expanded together.</em>','コードから、<em>世界を広げよう。</em>','코드에서 시작해 <em>함께 세계를 넓히다.</em>'],
    community_repo_desc: ['两套独立版本，共享创作理想。阅读源码、报告问题，或从你的第一个贡献开始。','兩套獨立版本，共享創作理想。閱讀原始碼、回報問題，或從你的第一個貢獻開始。','Two distinct editions, one creative vision. Read code, report an issue, or make your first contribution.','2つのエディション、ひとつの創作理念。コードを読み、問題を報告し、最初の貢献を始めましょう。','두 개의 에디션, 하나의 창작 철학. 코드를 읽고 문제를 제보하거나 첫 기여를 시작하세요.'],
    repo_local_desc: ['本地优先的 AI 对话与叙事工作室，包含文件与工程能力。','本機優先的 AI 對話與敘事工作室，包含檔案與工程能力。','Local-first AI conversations and storytelling, with file and project tools.','ファイル・プロジェクト機能を備えたローカル優先の AI 会話・物語スタジオ。','파일과 프로젝트 도구를 갖춘 로컬 우선 AI 대화·스토리 스튜디오.'],
    repo_cloud_desc: ['浏览器优先的云端版本，以 IndexedDB 和加密 BYOK 为核心。','瀏覽器優先的雲端版本，以 IndexedDB 和加密 BYOK 為核心。','Browser-first edition with IndexedDB data and encrypted bring-your-own keys.','IndexedDB と暗号化 BYOK を採用したブラウザー中心のエディション。','IndexedDB와 암호화된 BYOK를 사용하는 브라우저 중심 에디션.'],
    repo_view: ['查看仓库 ↗','查看儲存庫 ↗','View repository ↗','リポジトリを見る ↗','저장소 보기 ↗'],
    repo_issues: ['问题反馈 ↗','問題回報 ↗','Issues ↗','Issue を見る ↗','이슈 보기 ↗'],
    contribute_kicker: ['参与 Shiorivia','參與 Shiorivia','Join Shiorivia','Shiorivia に参加','Shiorivia 참여'],
    contribute_title: ['伟大的旅程，<em>始于微小的贡献。</em>','偉大的旅程，<em>始於微小的貢獻。</em>','Great journeys <em>start with small contributions.</em>','大きな旅は、<em>小さな貢献から。</em>','위대한 여정은 <em>작은 기여에서 시작됩니다.</em>'],
    contribute_desc: ['无论是修复一个问题、完善一条翻译，还是记录一种新的使用方式，都值得被认真对待。','無論是修復問題、完善一條翻譯，還是記錄新的使用方式，都值得被認真對待。','A bug fix, a better translation, a thoughtful guide—every contribution matters.','バグ修正も、翻訳の改善も、使い方の記録も。そのすべてが大切な貢献です。','버그 수정, 번역 개선, 새로운 사용 방법 기록까지 모든 기여가 소중합니다.'],
    contribute_issue: ['发现与反馈','發現與回饋','Report & discuss','発見・フィードバック','발견과 피드백'],
    contribute_issue_desc: ['提交问题、分享复现步骤，帮助项目变得更加稳定。','提交問題、分享重現步驟，協助專案變得更加穩定。','Share reproducible issues to help the project grow more reliable.','再現手順を添えて問題を報告し、安定性の向上にご協力ください。','재현 방법과 함께 문제를 공유해 안정성을 높이는 데 참여하세요.'],
    contribute_code: ['参与开发','參與開發','Contribute code','開発に参加','개발에 기여'],
    contribute_code_desc: ['阅读贡献规范，为功能、测试与技术文档提交改进。','閱讀貢獻規範，為功能、測試與技術文件提交改進。','Use the contribution guide to improve features, tests, and docs.','貢献ガイドを読み、機能・テスト・技術文書を改善しましょう。','기여 가이드를 읽고 기능, 테스트, 기술 문서를 개선하세요.'],
    contribute_language: ['完善语言体验','完善語言體驗','Improve translations','翻訳を磨く','언어 경험 개선'],
    contribute_language_desc: ['帮助五种界面语言保持自然、清晰与一致。','協助五種介面語言保持自然、清晰與一致。','Help keep all five UI languages natural, clear, and consistent.','5つの表示言語を、自然でわかりやすく、一貫したものに。','다섯 가지 UI 언어를 자연스럽고 명확하며 일관되게 다듬습니다.'],
    resources_kicker: ['文档与资源','文件與資源','Docs & resources','ドキュメントと資料','문서와 자료'],
    resources_title: ['让好奇心，<em>有迹可循。</em>','讓好奇心，<em>有跡可循。</em>','Follow <em>your curiosity.</em>','好奇心の<em>道しるべ。</em>','호기심이 향하는 <em>길을 따라.</em>'],
    resource_dev: ['本地版开发文档','本機版開發文件','Local development guide','Local 開発ガイド','Local 개발 가이드'],
    resource_cloud: ['Cloud 文档索引','Cloud 文件索引','Cloud documentation','Cloud ドキュメント','Cloud 문서'],
    resource_security: ['安全与负责任披露','安全與負責任的揭露','Security & responsible disclosure','セキュリティと責任ある報告','보안 및 책임 있는 제보'],
    resource_brand: ['品牌标识使用规范','品牌標識使用規範','Brand & marks policy','ブランド・商標ポリシー','브랜드 및 표장 정책'],
    principles_kicker: ['社区共同原则','社群共同原則','Our principles','大切にすること','커뮤니티 원칙'],
    principles_title: ['保持开放。<br><em>保持温柔与好奇。</em>','保持開放。<br><em>保持溫柔與好奇。</em>','Stay open.<br><em>Stay kind and curious.</em>','開かれた場所に。<br><em>やさしさと好奇心を。</em>','열린 마음으로.<br><em>다정함과 호기심으로.</em>'],
    principles_desc: ['尊重创作者、维护彼此的权益，以可追溯的讨论和审慎的代码变更，共同守护这条星路。','尊重創作者、維護彼此的權益，以可追溯的討論和審慎的程式變更，共同守護這條星路。','Respect creators and one another. Let thoughtful discussion and carefully reviewed code guide our shared path.','創作者と互いの権利を尊重し、丁寧な対話と慎重なコード変更で、この星の道を守りましょう。','창작자와 서로의 권리를 존중하며, 신중한 토론과 코드 변경으로 함께 별길을 지켜 갑니다.'],
    principles_cta: ['阅读贡献规范','閱讀貢獻規範','Read contribution guide','貢献ガイドを読む','기여 가이드 읽기'],
    community_back: ['返回主站','返回主站','Main website','メインサイトに戻る','메인 사이트로 돌아가기']
  };

  const titleBySite = {
    main: ['Shiorivia — 故事，于此寻路','Shiorivia — 故事，於此尋路','Shiorivia — Where Stories Find Their Way','Shiorivia — 物語の道しるべ','Shiorivia — 이야기가 길을 찾는 곳'],
    community: ['Shiorivia 社区 · 共绘星图','Shiorivia 社群 · 共繪星圖','Shiorivia Community · Together, We Chart the Stars','Shiorivia コミュニティ · 星図をともに','Shiorivia 커뮤니티 · 함께 그리는 별자리']
  };
  let current = 'zh-CN';
  try { current = localStorage.getItem('shiorivia-site-language') || navigator.language || 'zh-CN'; } catch { current = navigator.language || 'zh-CN'; }
  if (!languages.includes(current)) { current = /^zh-(TW|HK|MO)/i.test(current) ? 'zh-TW' : /^zh/i.test(current) ? 'zh-CN' : /^ja/i.test(current) ? 'ja' : /^ko/i.test(current) ? 'ko' : 'en'; }
  function applyLanguage(lang) {
    current = languages.includes(lang) ? lang : 'en';
    const index = languages.indexOf(current);
    document.documentElement.lang = current;
    document.querySelectorAll('[data-i18n]').forEach(node => { const key = node.dataset.i18n; if (copy[key]) node.textContent = copy[key][index]; });
    document.querySelectorAll('[data-i18n-html]').forEach(node => { const key = node.dataset.i18nHtml; if (copy[key]) node.innerHTML = copy[key][index]; });
    document.querySelectorAll('.language-switch').forEach(node => { node.value = current; });
    document.title = titleBySite[document.body.dataset.site || 'main'][index];
    try { localStorage.setItem('shiorivia-site-language', current); } catch {}
  }
  document.querySelectorAll('.language-switch').forEach(select => select.addEventListener('change', event => applyLanguage(event.target.value)));
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => { const open = !nav.classList.contains('is-open'); nav.classList.toggle('is-open',open); toggle.setAttribute('aria-expanded',String(open)); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event => { if(event.key === 'Escape') closeMenu(); });
  }
  document.querySelectorAll('#year').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  applyLanguage(current);
})();
