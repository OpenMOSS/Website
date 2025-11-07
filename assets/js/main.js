(function () {
  // 导航栏切换
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-navigation');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // 年份显示
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 国际化翻译系统
  const translations = {
    'zh-CN': {
      'nav.research': '研究方向',
      'nav.highlights': '最新亮点',
      'nav.people': '团队成员',
      'nav.resources': '开放资源',
      'nav.join': '加入我们',

      'hero.subtitle': 'OpenMOSS Lab',
      'hero.title': '构建值得信赖的开放基础模型，服务社会',
      'hero.description.p1': 'OpenMOSS（模思）团队专注于开放、可验证与负责任人工智能研究。我们关注大规模智能系统的发展规律，致力于构建从基础理论、训练方法到系统实现的全链条研究体系。重点研究领域包括预训练模型、推理与对齐、多模态理解、具身智能与智能体协同等方向。',
      'hero.description.p2': '我们的核心目标是推动人工智能的可信演化与广泛落地，使前沿研究成果真正转化为提升生产力、促进社会发展与拓展人类能力的技术基础。我们秉持开放合作与长期主义，与国际一流高校及行业龙头企业开展深度科研合作。',
      'hero.description.p3': '团队成员在人工智能领域具有坚实积累，培养的毕业生任职或深造于 MIT、UC Berkeley、CMU 等世界顶尖高校，或加入 ByteDance、Alibaba、AWS、Optiver 等领先企业，或投身创新创业，或步入学术教职岗位，形成了充满活力的学术与创新生态。',
      'hero.cta1': '加入我们',
      'hero.cta2': '最新亮点',
      'hero.focus.title': '我们的研究重点',
      'hero.focus.item1': '大型开源基础模型',
      'hero.focus.item2': '多模态学习与推理',
      'hero.focus.item3': '具身智能与智能体',
      'hero.focus.item4': '负责任的安全部署',
      'hero.stat1': '发表于 NeurIPS、ICML、ACL、EMNLP、CVPR、ICCV 等顶会',
      'hero.stat2': '开源项目，包括 MOSS、FastNLP、CoLLiE 等',

      'about.title': '关于实验室',
      'about.p1': 'OpenMOSS Lab 源于复旦大学 FudanNLP 团队，致力于开放和负责任的 AI 研究。我们的使命是推进大规模 AI 系统的理论、方法和应用——从预训练和推理到多模态和具身智能——同时确保切实的社会影响。',
      'about.p2': '我们与全球研究合作伙伴和行业领导者合作，将基础研究转化为可部署的系统。校友遍布顶尖大学（MIT、UC Berkeley、CMU）和公司（ByteDance、Alibaba、AWS、Optiver），许多人创办了初创公司或担任教职。',

      'pillars.title': '研究方向',
      'pillars.infra.title': 'AI 基础设施',
      'pillars.infra.desc': '优化器、微调框架和推理扩展，使开放模型更高效、稳健和易用。',
      'pillars.infra.item1': 'LOMO、AdaLomo 优化器',
      'pillars.infra.item2': 'CoLLiE：协作微调',
      'pillars.infra.item3': '大规模训练流程',
      'pillars.multimodal.title': '多模态基础模型',
      'pillars.multimodal.desc': '跨越语音、视觉和语言的统一模型，用于基础理解和推理。',
      'pillars.multimodal.item1': 'SpeechGPT、SpeechTokenizer',
      'pillars.multimodal.item2': 'AnyGPT、Visuothink、UnifiedVisual',
      'pillars.multimodal.item3': '跨模态对齐',
      'pillars.reasoning.title': '推理与智能体',
      'pillars.reasoning.desc': '能够规划、推理并安全地与人类和工具交互的大语言模型智能体。',
      'pillars.reasoning.item1': 'Exchange-of-Thought 对话智能体',
      'pillars.reasoning.item2': 'ConvSearch-R1 检索增强推理',
      'pillars.reasoning.item3': '工具增强工作流',
      'pillars.embodied.title': '具身与交互式 AI',
      'pillars.embodied.desc': '将模型与物理环境连接的视觉-语言-动作系统和模拟器。',
      'pillars.safety.title': '模型安全与可解释性',
      'pillars.safety.desc': '负责任开放模型部署的透明度、评估和治理框架。',
      'pillars.arch.title': '新型架构',
      'pillars.arch.desc': '基于扩散的 LLM、长上下文建模和内存高效的 Transformer，用于下一代系统。',

      'highlights.title': '最新亮点',
      'highlights.viewMore': '点击查看',
      'highlights.opensource.title': '开源领导力',
      'highlights.opensource.desc': '我们发布了 <strong>MOSS</strong>——中国最早的开放对话式大语言模型之一，并持续推动以社区为先的开发，提供开放数据、基准和 API。',
      'highlights.industry.title': '产业影响',
      'highlights.industry.desc': '与华为、荣耀、字节跳动和全球合作伙伴的协作，加速了基础模型在实际产品中的应用。',
      'highlights.academic.title': '学术卓越',
      'highlights.academic.desc': '我们的团队在顶级会议（NeurIPS、ICML、ICLR、ACL、EMNLP、NAACL、ICCV）发表论文，并经常获得杰出论文和演示奖。',
      'highlights.talent.title': '人才培养',
      'highlights.talent.desc': '校友在顶尖大学担任教职，并以创始人、CEO 和 CTO 的身份加入知名 AI 初创公司。',

      'people.title': '团队成员',
      'people.core': '教职成员',
      'people.member1.name': '邱锡鹏',
      'people.member1.title': '教授，实验室主任',
      'people.member2.name': '陈新驰',
      'people.member2.title': '青年研究员',
      'people.member3.name': '纪焘',
      'people.member3.title': '助理教授',
      'people.member4.name': '龚经经',
      'people.member4.title': '研究助理教授',
      'people.member5.name': '何子薇',
      'people.member5.title': '研究助理教授',
      'people.member6.name': '陈爽',
      'people.member6.title': '专任副研究员',
      'people.member7.name': '郑逸宁',
      'people.member7.title': '专任副研究员',
      'people.students.title': '学生与访问学者',
      'people.students.desc': '研究生、访问学者和行业研究员共同推动大规模 AI 系统和社会应用的边界。',
      'people.students.link': '查看完整团队',
      'people.alumni.title': '校友网络',
      'people.alumni.desc': '我们的校友遍布学术界和工业界—MIT、UC Berkeley、CMU、ByteDance、Alibaba、AWS、Optiver 等知名机构。',
      'people.alumni.link': '了解更多',

      'resources.title': '开放资源',
      'resources.tools.title': '开源工具',
      'resources.tools.desc': 'FastNLP、CoLLiE、SpeechGPT、UnifiedToolHub 等开源项目为全球 AI 生态系统提供支持。',
      'resources.tools.link': '访问 GitHub',
      'resources.tools.details': '详情',
      'resources.learning.title': '开放课程',
      'resources.learning.desc': '为使用开放模型构建应用的学生和从业者精心策划的阅读清单、教程和基准。',
      'resources.learning.link': '浏览资源',

      // Projects Page
      'projectsPage.title': '开源项目',
      'projectsPage.projects.title': '开源项目',

      'join.title': '加入 OpenMOSS Lab',
      'join.desc': '我们正在招募对开放系统和负责任 AI 充满热情的研究生、博士后、访问学者和合作者。',
      'join.positions': '开放职位',

      'footer.address1': '上海市徐汇区华发路699弄3号',
      'footer.address2': '上海市杨浦区淞沪路2005号2X号楼',
      'footer.address3': '中国',
      'footer.affiliations': '合作单位',
      'footer.fudan': '复旦大学计算与智能创新学院',
      'footer.fudannlp': '复旦大学自然语言处理团队',
      'footer.sii': '上海创智学院',
      'footer.connect': '联系我们',
      'footer.links': '快速链接',
      'footer.software': '软件',
      'footer.career': '职业发展',
      'footer.archive': '档案',
      'footer.copyright': '&copy; <span id="year"></span> OpenMOSS Lab.',

      // People Page
      'peoplePage.title': '团队成员',
      'peoplePage.teamMembers': '全职成员',
      'peoplePage.postdocs': '博士后',
      'peoplePage.phdStudents': '博士研究生',
      'peoplePage.masterStudents': '硕士研究生',
      'peoplePage.undergraduates': '本科生',
      'peoplePage.visitingStudents': '访问学生',
      'peoplePage.students': '学生与访问学者',
      'peoplePage.studentsDesc': '研究生、博士生、访问学者和行业研究员共同推动大规模 AI 系统和社会应用的边界。我们的团队包括来自世界各地的优秀研究人员，他们在自然语言处理、计算机视觉、机器学习等领域进行前沿研究。',
      'peoplePage.contactInfo': '如需了解更多团队信息或加入我们，请联系：<a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'peoplePage.backHome': '返回首页',

      // Alumni Page
      'alumniPage.title': '校友网络',
      'alumniPage.breadcrumb.home': '首页',
      'alumniPage.breadcrumb.people': '团队成员',
      'alumniPage.breadcrumb.alumni': '往届成员',
      'alumniPage.backToTop': '回到顶部',
      'alumniPage.toc': '目录',
      'alumniPage.postdocs': '博士后',
      'alumniPage.phd': '博士生',
      'alumniPage.masters': '硕士生',
      'alumniPage.undergrad': '本科生',
      'alumniPage.visiting': '访问学生',
      'alumniPage.intro': 'OpenMOSS Lab 为培养了众多优秀的研究人员和工程师而自豪。我们的校友遍布学术界和工业界，在世界各地的顶尖机构和公司中发挥着重要作用。',
      'alumniPage.academia.title': '学术界',
      'alumniPage.academia.desc': '我们的校友在 MIT、Stanford、UC Berkeley、CMU、清华大学、北京大学等世界顶尖大学担任教职或继续深造。',
      'alumniPage.industry.title': '产业界',
      'alumniPage.industry.desc': '校友在 ByteDance、Alibaba、Tencent、Huawei、AWS、Google、Meta 等领先科技公司从事前沿 AI 研究和开发工作。',
      'alumniPage.startup.title': '创业者',
      'alumniPage.startup.desc': '许多校友创办了自己的 AI 初创公司，以创始人、CEO 和 CTO 的身份推动人工智能技术的商业化应用。',
      'alumniPage.research.title': '研究机构',
      'alumniPage.research.desc': '校友在各类研究机构和实验室担任重要职位，继续在 NLP、CV、ML 等领域进行突破性研究。',
      'alumniPage.network.title': '保持联系',
      'alumniPage.network.desc': '我们重视与校友的持续联系和合作。如果您是 OpenMOSS Lab 的校友，欢迎通过以下方式与我们保持联系：',
      'alumniPage.network.item1': '加入我们的校友微信群和 Slack 频道',
      'alumniPage.network.item2': '参加年度校友聚会和学术研讨会',
      'alumniPage.network.item3': '与在读学生分享经验和职业建议',
      'alumniPage.network.item4': '开展合作研究项目和产学研合作',
      'alumniPage.network.contact': '如需更新您的联系方式或了解校友活动，请联系：<a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'alumniPage.backPeople': '查看团队成员',
      'alumniPage.backHome': '返回首页',

      // Webmaster Page
      'webmasterPage.breadcrumb.home': '首页',
      'webmasterPage.breadcrumb.webmaster': '网页设计',
      'webmasterPage.title': '网页设计',
      'webmasterPage.member1.name': '郑逸宁',
      'webmasterPage.member1.role': '网页设计师',
      'webmasterPage.member2.name': '贺心嘉',
      'webmasterPage.member2.role': '网页设计师',
      'webmasterPage.backHome': '返回首页',

      // Positions Page
      'positionsPage.title': '加入 OpenMOSS Lab',
      'positionsPage.intro': '我们正在招募对开放系统和负责任 AI 充满热情的研究人员和工程师。如果您希望在大规模 AI 系统、多模态学习、具身智能等前沿领域进行研究，欢迎加入我们！',
      'positionsPage.open.title': '开放职位',
      'positionsPage.moreDetails': '查看详情',
      'positionsPage.phd.title': '博士研究生',
      'positionsPage.phd.desc': '我们常年招收对 NLP、多模态学习、具身智能感兴趣的博士研究生。提供充足的研究资源和国际合作机会。',
      'positionsPage.phd.req1': '计算机、人工智能或相关专业背景',
      'positionsPage.phd.req2': '扎实的编程能力和数学基础',
      'positionsPage.phd.req3': '对科研充满热情',
      'positionsPage.master.title': '硕士研究生',
      'positionsPage.master.desc': '招收对大语言模型、机器学习、深度学习感兴趣的硕士研究生，参与前沿研究项目。',
      'positionsPage.master.req1': '良好的编程和算法基础',
      'positionsPage.master.req2': '对 AI 研究有浓厚兴趣',
      'positionsPage.master.req3': '具备团队协作精神',
      'positionsPage.postdoc.title': '博士后研究员',
      'positionsPage.postdoc.desc': '诚邀优秀博士后加入，独立开展或合作进行前沿 AI 研究，提供有竞争力的薪酬待遇。',
      'positionsPage.postdoc.req1': '计算机或相关领域博士学位',
      'positionsPage.postdoc.req2': '优秀的科研发表记录',
      'positionsPage.postdoc.req3': '独立研究能力',
      'positionsPage.visiting.title': '访问学者',
      'positionsPage.visiting.desc': '欢迎国内外学者访问交流，开展短期或长期合作研究，共同推进 AI 技术发展。',
      'positionsPage.visiting.req1': '具备相关研究经验',
      'positionsPage.visiting.req2': '明确的合作研究计划',
      'positionsPage.visiting.req3': '良好的学术背景',
      'positionsPage.engineer.title': '研究工程师',
      'positionsPage.engineer.desc': '招聘有经验的研究工程师，参与大规模模型训练、系统优化和开源项目开发。',
      'positionsPage.engineer.req1': '熟练掌握 PyTorch/TensorFlow',
      'positionsPage.engineer.req2': '大规模系统开发经验',
      'positionsPage.engineer.req3': '开源贡献经验优先',
      'positionsPage.intern.title': '实习生',
      'positionsPage.intern.desc': '为本科生和研究生提供实习机会，参与实际研究项目，获得宝贵的研究经验。',
      'positionsPage.intern.req1': '每周至少 3 天实习时间',
      'positionsPage.intern.req2': '掌握基本的机器学习知识',
      'positionsPage.intern.req3': '至少实习 3 个月',
      'positionsPage.why.title': '为什么选择我们',
      'positionsPage.why.research': '前沿研究',
      'positionsPage.why.researchDesc': '参与 AI 领域最前沿的研究项目，<br>在顶级会议发表论文',
      'positionsPage.why.resources': '充足资源',
      'positionsPage.why.resourcesDesc': '提供先进的计算资源和数据集，<br>支持大规模实验',
      'positionsPage.why.team': '优秀团队',
      'positionsPage.why.teamDesc': '与国内外顶尖研究者合作，<br>获得专业指导',
      'positionsPage.why.opensource': '开源文化',
      'positionsPage.why.opensourceDesc': '参与开源项目开发，<br>贡献开源社区',
      'positionsPage.why.collaboration': '国际合作',
      'positionsPage.why.collaborationDesc': '与国际顶尖机构开展合作研究<br>和学术交流',
      'positionsPage.why.career': '职业发展',
      'positionsPage.why.careerDesc': '校友遍布顶尖大学和科技公司，<br>提供广阔发展空间',
      'positionsPage.apply.title': '如何申请',
      'positionsPage.apply.desc': '如果您对以上职位感兴趣，请填写<a href="https://fudannlp.feishu.cn/share/base/form/shrcn29UYq1MCpTH0GBZh3AWPPg" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">报名问卷</a>',
      'positionsPage.applyBtn': '填写申请问卷',
      'positionsPage.backHome': '返回首页',

      // Positions Detail Page
      'positionsDetailPage.title': '开放职位详情',
      'positionsDetailPage.phd.title': '博士研究生',
      'positionsDetailPage.master.title': '硕士研究生',
      'positionsDetailPage.grad.targetTitle': '招收对象：',
      'positionsDetailPage.grad.target': '我们主要招收有志于从事大模型领域科学研究和落地应用的学生，并希望有如下特点：思维活跃、积极主动、热爱研究或开发、刻苦勤奋、不怕失败。如果只是为了混学位或好找工作，请勿联系！',
      'positionsDetailPage.grad.directions': '2025年，本组主要招生方向为大模型预训练、AI Infra、新架构、多模态融合、智能体、具身智能，有兴趣学生欢迎联系。',
      'positionsDetailPage.grad.importantTitle': '重要事项：',
      'positionsDetailPage.grad.important1': '（a）除项目合作推荐实习外，本组不允许学生在研三、博五之前进行任何形式的实习。有实习情节的同学请不要选择本组。',
      'positionsDetailPage.grad.important2': '（b）本组研究生都会根据需要安排一定的工程任务。如果不愿意参与工程项目的，也不要选择本组。',
      'positionsDetailPage.grad.admissionTitle': '招生说明：',
      'positionsDetailPage.grad.admission1': '<strong>（1）硕士名额</strong>',
      'positionsDetailPage.grad.admission1desc': '视研究经费而定，近三年内（每年学硕1名、保研专硕1-2名、考研专硕约10名）。日常科研中我们不区分学硕和专硕，并且都有资格转博。',
      'positionsDetailPage.grad.admission2': '<strong>（2）博士名额</strong>',
      'positionsDetailPage.grad.admission2desc': '视研究经费而定，近三年内 每年博士名额2-3名。',
      'positionsDetailPage.grad.admission2note': '本人在上海创智学院招直博生，和复旦联培，名额不限。除通过复旦面试外，还需通过上海创智学院的招生考试。建议先拿到上海创智学院offer再报名复旦夏令营。',
      'positionsDetailPage.grad.admission3': '<strong>（3）招生途径</strong>',
      'positionsDetailPage.grad.admission3a': '（a）夏令营：需要先通过学院初审，请收到入营通知后联系我（如果有其他咨询可以直接联系我）。我们会安排一个简单的组内面试。以往夏令营学硕的优秀率在10%左右，本组名额学硕+专硕2~3名。',
      'positionsDetailPage.grad.admission3b': '（b）秋季保研：需要先通过学院初审，请收到面试通知后联系我。 我们会安排一个组内面试。通常我们在夏令营招满后，不在本轮招生。',
      'positionsDetailPage.grad.admission3c': '（c）考研：请收到复试通知后联系我。我们会安排一个组内面试。',
      'positionsDetailPage.grad.admission4': '<strong>（4）本组面试</strong>',
      'positionsDetailPage.grad.admission4desc': '我们通常会在学院面试之前安排一次组内面试。与学院面试略有不同，本组面试主要看重科研潜质、工程能力、个性以及团队协作等多重因素。高质量完成<a href="https://github.com/FudanNLP/nlp-beginner" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">nlp-beginner</a>的学生优先。我们非常欢迎对AI算法落地、系统实现感兴趣，并有专研精神的同学。',
      'positionsDetailPage.grad.admission5': '<strong>（5）关于提前进组学习</strong>',
      'positionsDetailPage.grad.admission5desc': '为让学生找到更合适的工作，我们组会让学生在研二结束后就去实习。并且研一课程比较多，剩余时间太短很难产出好的研究成果，因此我们希望确定来本组的同学提前进组学习。外校保研最好来复旦大学做毕业设计（以往学生多数都来了）。',
      'positionsDetailPage.grad.admission5note': '根据表现，本组会择优推进研二或研三学生到字节、华为、上海人工智能实验室、美团等合作单位实习。（往届学生都能拿到转正offer）',
      'positionsDetailPage.grad.admission6': '<strong>（6）关于研究生待遇</strong>',
      'positionsDetailPage.grad.admission6desc': '为营造良好的学习和科研环境，本组参考同水平科研单位的平均水平，给出较有竞争力的研究生补助（除学校补贴外），对于专硕有一定的租房补贴。此外，对于参与企业合作项目的学生有额外的科研补助。',
      'positionsDetailPage.grad.sameAsPhd': '硕士研究生的招生要求和说明请参考上方"博士研究生"部分。',
      'positionsDetailPage.postdoc.title': '博士后研究员',
      'positionsDetailPage.postdoc.intro': '复旦大学自然语言实验室因科研工作需要，常年招聘博士后。',
      'positionsDetailPage.postdoc.directionsTitle': '研究方向',
      'positionsDetailPage.postdoc.direction1': '研究方向1：AI Infra',
      'positionsDetailPage.postdoc.direction2': '研究方向2：大语言模型预训练',
      'positionsDetailPage.postdoc.direction3': '研究方向3：多模态大模型',
      'positionsDetailPage.postdoc.direction4': '研究方向4：语音大模型',
      'positionsDetailPage.postdoc.direction5': '研究方向5：具身智能',
      'positionsDetailPage.postdoc.reqTitle': '申请人要求',
      'positionsDetailPage.postdoc.req1': '1. 博士期间的专业方向是计算机、软件、电子、自动化、数学等相关方向。',
      'positionsDetailPage.postdoc.req2': '2. 申请人具有相关学科国内外优秀大学博士学位，且博士毕业不超过 3 年（不含）。',
      'positionsDetailPage.postdoc.req3': '3. 年龄在 35 周岁以下（不含）。',
      'positionsDetailPage.postdoc.req4': '4. 在人工智能领域发表过高水平文章者或者主持（或参与）过具体项目者优先。',
      'positionsDetailPage.postdoc.req5': '5. 思维活跃、创新能力强、具有强烈的技术创新和研发热情。',
      'positionsDetailPage.postdoc.req6': '6. 责任心强，良好的团队意识。',
      'positionsDetailPage.postdoc.salaryTitle': '工资待遇',
      'positionsDetailPage.postdoc.salary1': '按照复旦大学对博士后的相关规定提供个人待遇和福利（包括与同类院校相当的薪酬，优惠的复旦大学博士后公寓，享受复旦大学事业编制相同的福利待遇如子女入学入托等），支持申请国家"博新计划"、"引进计划"和上海市超级博士后。',
      'positionsDetailPage.postdoc.salary2': '"博新计划"入选者：40万年薪、20万科研经费和3万学术交流经费；"引进计划"入选者：每年38-40万起，和20万科研基金；上海市超级博士后计划：每年28-30万起；复旦大学超级博士后：每年23-28万起，入选率50%；其他18-20万起。',
      'positionsDetailPage.postdoc.salary3': '课题组根据个人研究进展和贡献给予额外补贴，并为入选者提供优越的科研条件和稳定的支持。同时，学校"将博士后作为学校教师队伍其他专业技术队伍的重要来源之一"。',
      'positionsDetailPage.postdoc.salary4': '具体信息请查询复旦大学人事处<a href="https://hr.fudan.edu.cn/" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">官网</a>',
      'positionsDetailPage.postdoc.salary5': '除上述岗位外，我们还和琶洲实验室、华为等知名企业进行联合培养博士后，待遇等同于企业正式员工。博士后出站时可以自主选择留在企业或申请高校职位。',
      'positionsDetailPage.postdoc.applyTitle': '申请方式',
      'positionsDetailPage.postdoc.apply1': '1. 申请邮件请发送至 xpqiu@fudan.edu.cn',
      'positionsDetailPage.postdoc.apply2': '2. 申请邮件主题请注明："应聘博士后 - 姓名 - 专业 - 学校" ，并在邮件中附简历并说明感兴趣的研究方向。',
      'positionsDetailPage.postdoc.apply3': '3. 初审后我们将与您联系。',
      'positionsDetailPage.visiting.title': '访问学者',
      'positionsDetailPage.visiting.content': '待添加详细内容',
      'positionsDetailPage.engineer.title': '研究工程师',
      'positionsDetailPage.engineer.subtitle': '关于科研工程助理招聘（2025年7月，持续更新中）',
      'positionsDetailPage.engineer.intro': '复旦大学自然语言实验室因科研工作需要，长期招聘科研工程助理，待遇面议。',
      'positionsDetailPage.engineer.reqTitle': '招聘说明：',
      'positionsDetailPage.engineer.req1': '参与实验室的LLM工程开发项目',
      'positionsDetailPage.engineer.req2': '有良好的工程经验，熟练掌握Python语言',
      'positionsDetailPage.engineer.req3': '熟悉Pytorch并开发过NLP项目的候选者优先',
      'positionsDetailPage.engineer.req4': '有专研精神、工作踏实认真',
      'positionsDetailPage.engineer.applyTitle': '申请方式：',
      'positionsDetailPage.engineer.apply1': '申请邮件请发送至 xpqiu@fudan.edu.cn',
      'positionsDetailPage.engineer.apply2': '申请邮件主题请注明："应聘科研工程助理 - 姓名" ，并在邮件中附简历。',
      'positionsDetailPage.engineer.apply3': '初审后我们将与您联系。',
      'positionsDetailPage.intern.title': '实习生',
      'positionsDetailPage.intern.content': '待添加详细内容',
      'positionsDetailPage.backPositions': '返回职位列表',

      // Resources Page
      'resourcesPage.title': '开放课程',
      'resourcesPage.intro': 'OpenMOSS Lab 提供丰富的开放课程，帮助研究者和开发者探索大语言模型、多模态学习和具身智能等前沿领域。',
      'resourcesPage.projects.title': '开源项目',
      'resourcesPage.moss.desc': '开源的工具增强对话语言模型，支持插件系统和多种工具调用能力。',
      'resourcesPage.anygpt.desc': '统一的多模态大语言模型，支持离散序列建模，实现真正的多模态理解与生成。',
      'resourcesPage.ttsd.desc': '富有表现力的对话语音合成模型，支持中英文零样本多说话人声音克隆和长篇语音生成。',
      'resourcesPage.speechgpt.desc': 'GPT-4o 级别的实时语音对话系统，实现真正的端到端语音交互。',
      'resourcesPage.speech.desc': '真正的语音到语音大语言模型，无需文本指导，直接实现语音理解和生成。',
      'resourcesPage.saes.desc': 'OpenMOSS 机制可解释性团队的稀疏自编码器（SAE）研究项目。',
      'resourcesPage.viewGitHub': '访问项目',
      'resourcesPage.courses.title': '课程与教程',
      'resourcesPage.prml.title': '模式识别与机器学习',
      'resourcesPage.prml.desc': '复旦大学《模式识别与机器学习》课程资源，涵盖机器学习基础理论与实践。',
      'resourcesPage.viewCourse': '查看课程 →',
      'resourcesPage.papers.title': '论文阅读列表',
      'resourcesPage.papers.desc': '深度学习预备课程',
      'resourcesPage.viewPapers': '查看课程 →',
      'resourcesPage.tools.title': '开发工具',
      'resourcesPage.tools.desc': 'FastNLP、CoLLiE 等实用工具，帮助研究者快速构建和训练模型。',
      'resourcesPage.viewTools': '浏览工具 →',
      'resourcesPage.community.title': '社区与交流',
      'resourcesPage.community.desc': '加入暑期学校，与全球研究者交流学习，共同推进 AI 技术发展。',
      'resourcesPage.joinCommunity': '加入暑期学校 →',
      'resourcesPage.contribute.title': '贡献与合作',
      'resourcesPage.contribute.desc': '我们欢迎来自全球的贡献者参与我们的开源项目。无论是代码贡献、文档改进、bug 报告还是新功能建议，都对我们非常有价值。',
      'resourcesPage.contribute.item1': '⭐ Star 我们的项目，关注最新进展',
      'resourcesPage.contribute.item2': '🐛 提交 Issue 报告问题或建议',
      'resourcesPage.contribute.item3': '🔀 提交 Pull Request 贡献代码',
      'resourcesPage.contribute.item4': '📖 完善文档和教程',
      'resourcesPage.contribute.item5': '💬 参与社区讨论和技术交流',
      'resourcesPage.contribute.contact': '如有合作意向或技术问题，请联系：<a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'resourcesPage.visitGitHub': '访问 GitHub',
      'resourcesPage.backHome': '返回首页'
    },
    'en': {
      'nav.about': 'About',
      'nav.research': 'Research',
      'nav.highlights': 'Highlights',
      'nav.people': 'People',
      'nav.resources': 'Resources',
      'nav.join': 'Join Us',

      'hero.subtitle': 'OpenMOSS Lab',
      'hero.title': 'Building trustworthy, open foundation models that serve society',
      'hero.description.p1': 'The OpenMOSS team focuses on open, verifiable, and responsible artificial intelligence research. We study the development patterns of large-scale intelligent systems and are committed to building a complete research framework from fundamental theory, training methods to system implementation. Our key research areas include pre-training models, reasoning and alignment, multimodal understanding, embodied intelligence, and agent collaboration.',
      'hero.description.p2': 'Our core objective is to advance the trustworthy evolution and widespread deployment of AI, transforming cutting-edge research into technological foundations that enhance productivity, promote social development, and expand human capabilities. We adhere to open collaboration and long-termism, conducting deep research partnerships with world-class universities and leading enterprises.',
      'hero.description.p3': 'Our team members have solid expertise in artificial intelligence. Our graduates work or pursue further studies at top universities such as MIT, UC Berkeley, and CMU, join leading companies like ByteDance, Alibaba, AWS, and Optiver, engage in innovation and entrepreneurship, or take up academic faculty positions, forming a vibrant academic and innovation ecosystem.',
      'hero.cta1': 'Join us',
      'hero.cta2': 'Highlights',
      'hero.focus.title': 'What We Focus On',
      'hero.focus.item1': 'Open-source foundation models',
      'hero.focus.item2': 'Multimodal learning & reasoning',
      'hero.focus.item3': 'Embodied intelligence & agents',
      'hero.focus.item4': 'Responsible, safe deployment',
      'hero.stat1': 'Publications across NeurIPS, ICML, ACL, EMNLP, CVPR, ICCV',
      'hero.stat2': 'Open-source releases including MOSS, FastNLP, CoLLiE',

      'about.title': 'About The Lab',
      'about.p1': 'OpenMOSS Lab, originally part of the FudanNLP group at Fudan University, pioneers open and responsible AI research. Our mission is to advance the theory, methods, and applications of large-scale AI systems—from pretraining and reasoning to multimodal and embodied intelligence—while ensuring tangible societal impact.',
      'about.p2': 'We collaborate with global research partners and industry leaders to translate foundational advances into deployable systems. Alumni continue at top-tier universities (MIT, UC Berkeley, CMU) and companies (ByteDance, Alibaba, AWS, Optiver), and many have launched startups or taken faculty roles.',

      'pillars.title': 'Research Pillars',
      'pillars.infra.title': 'AI Infrastructure',
      'pillars.infra.desc': 'Optimizers, fine-tuning frameworks, and inference scaling that keep open models efficient, robust, and accessible.',
      'pillars.infra.item1': 'LOMO, AdaLomo optimizers',
      'pillars.infra.item2': 'CoLLiE: collaborative fine-tuning',
      'pillars.infra.item3': 'Large-scale training pipelines',
      'pillars.multimodal.title': 'Multimodal Foundation Models',
      'pillars.multimodal.desc': 'Unified models spanning speech, vision, and language for grounded understanding and reasoning.',
      'pillars.multimodal.item1': 'SpeechGPT, SpeechTokenizer',
      'pillars.multimodal.item2': 'AnyGPT, Visuothink, UnifiedVisual',
      'pillars.multimodal.item3': 'Alignment across modalities',
      'pillars.reasoning.title': 'Reasoning & Agents',
      'pillars.reasoning.desc': 'Large language model agents that plan, reason, and interact safely with humans and tools.',
      'pillars.reasoning.item1': 'Exchange-of-Thought dialogue agents',
      'pillars.reasoning.item2': 'ConvSearch-R1 for retrieval-augmented reasoning',
      'pillars.reasoning.item3': 'Tool-augmented workflows',
      'pillars.embodied.title': 'Embodied & Interactive AI',
      'pillars.embodied.desc': 'Vision-language-action systems and simulators that connect models to physical environments.',
      'pillars.safety.title': 'Model Safety & Interpretability',
      'pillars.safety.desc': 'Transparency, evaluation, and governance frameworks for responsible open model deployment.',
      'pillars.arch.title': 'New Architectures',
      'pillars.arch.desc': 'Diffusion-based LLMs, long-context modeling, and memory-efficient transformers for next-generation systems.',

      'highlights.title': 'Highlights',
      'highlights.viewMore': 'Click to View',
      'highlights.opensource.title': 'Open Source Leadership',
      'highlights.opensource.desc': 'We released <strong>MOSS</strong>, one of China\'s earliest open conversational LLMs, and continue to drive community-first development with open data, benchmarks, and APIs.',
      'highlights.industry.title': 'Industry Impact',
      'highlights.industry.desc': 'Collaborations with Huawei, Honor, ByteDance, and partners worldwide accelerate foundation model adoption in real products.',
      'highlights.academic.title': 'Academic Excellence',
      'highlights.academic.desc': 'Our teams publish at top venues (NeurIPS, ICML, ICLR, ACL, EMNLP, NAACL, ICCV) and frequently receive outstanding paper and demo awards.',
      'highlights.talent.title': 'Talent Development',
      'highlights.talent.desc': 'Alumni earn faculty positions at leading universities and join prominent AI startups as founders, CEOs, and CTOs.',

      'people.title': 'People',
      'people.core': 'Faculty',
      'people.member1.name': 'Xipeng Qiu',
      'people.member1.title': 'Professor, Lab Director',
      'people.member2.name': 'Xinchi Chen',
      'people.member2.title': 'Professor',
      'people.member3.name': 'Tao Ji',
      'people.member3.title': 'Assistant Professor',
      'people.member4.name': 'Jingjing Gong',
      'people.member4.title': 'Research Assistant Professor',
      'people.member5.name': 'Ziwei He',
      'people.member5.title': 'Research Assistant Professor',
      'people.member6.name': 'Shuang Chen',
      'people.member6.title': 'Associate Research Fellow',
      'people.member7.name': 'Yining Zheng',
      'people.member7.title': 'Associate Research Fellow',
      'people.students.title': 'Students & Fellows',
      'people.students.desc': 'Graduate researchers, visiting scholars, and industry fellows push the boundaries of large-scale AI systems and societal deployment.',
      'people.students.link': 'Meet the team',
      'people.alumni.title': 'Alumni',
      'people.alumni.desc': 'Our alumni community spans academia and industry—MIT, UC Berkeley, CMU, ByteDance, Alibaba, AWS, Optiver, and beyond.',
      'people.alumni.link': 'Learn More',

      'resources.title': 'Open Resources',
      'resources.tools.title': 'Products',
      'resources.tools.desc': 'FastNLP, CoLLiE, SpeechGPT, UnifiedToolHub, and more open releases power the global AI ecosystem.',
      'resources.tools.link': 'Visit GitHub',
      'resources.tools.details': 'More details',
      'resources.learning.title': 'Sources',
      'resources.learning.desc': 'Curated reading lists, tutorials, and benchmarks for students and practitioners building with open models.',
      'resources.learning.link': 'Browse resources',

      // Projects Page
      'projectsPage.title': 'Open Source Projects',
      'projectsPage.projects.title': 'Open Source Projects',

      'join.title': 'Join OpenMOSS Lab',
      'join.desc': 'We are recruiting graduate students, postdocs, visiting researchers, and collaborators who are passionate about open systems and responsible AI.',
      'join.positions': 'Open positions',

      'footer.address1': '3 Lane 699, Huafa Road, Xuhui District',
      'footer.address2': 'Building 2X, No. 2005 Songhu Road, Yangpu District',
      'footer.address3': 'Shanghai, China',
      'footer.affiliations': 'Affiliations',
      'footer.fudan': 'School of Computer Science and Innovation, Fudan University',
      'footer.fudannlp': 'FudanNLP',
      'footer.sii': 'Shanghai Innovation Institute',
      'footer.connect': 'Connect',
      'footer.links': 'Quick Links',
      'footer.software': 'Software',
      'footer.career': 'Career',
      'footer.archive': 'Archive',
      'footer.copyright': '&copy; <span id="year"></span> OpenMOSS Lab.',

      // People Page
      'peoplePage.title': 'People',
      'peoplePage.teamMembers': 'Staff',
      'peoplePage.postdocs': 'Postdoctoral Researchers',
      'peoplePage.phdStudents': 'PhD Students',
      'peoplePage.masterStudents': 'Master Students',
      'peoplePage.undergraduates': 'Undergraduates',
      'peoplePage.visitingStudents': 'Visiting Students',
      'peoplePage.students': 'Students & Fellows',
      'peoplePage.studentsDesc': 'Graduate researchers, doctoral students, visiting scholars, and industry fellows push the boundaries of large-scale AI systems and societal deployment. Our team includes outstanding researchers from around the world conducting cutting-edge research in natural language processing, computer vision, machine learning, and more.',
      'peoplePage.contactInfo': 'For more information about our team or to join us, please contact: <a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'peoplePage.backHome': 'Back to Home',

      // Alumni Page
      'alumniPage.title': 'Alumni Network',
      'alumniPage.breadcrumb.home': 'Home',
      'alumniPage.breadcrumb.people': 'People',
      'alumniPage.breadcrumb.alumni': 'Former Members',
      'alumniPage.backToTop': 'Back to Top',
      'alumniPage.toc': 'Table of Contents',
      'alumniPage.postdocs': 'Postdoctoral Researchers',
      'alumniPage.phd': 'PhD Students',
      'alumniPage.masters': 'Master Students',
      'alumniPage.undergrad': 'Undergraduates',
      'alumniPage.visiting': 'Visiting Students',
      'alumniPage.intro': 'OpenMOSS Lab takes pride in having trained many excellent researchers and engineers. Our alumni span academia and industry, playing important roles in top institutions and companies worldwide.',
      'alumniPage.academia.title': 'Academia',
      'alumniPage.academia.desc': 'Our alumni hold faculty positions or pursue further studies at world-class universities including MIT, Stanford, UC Berkeley, CMU, Tsinghua University, and Peking University.',
      'alumniPage.industry.title': 'Industry',
      'alumniPage.industry.desc': 'Alumni work on cutting-edge AI research and development at leading tech companies such as ByteDance, Alibaba, Tencent, Huawei, AWS, Google, and Meta.',
      'alumniPage.startup.title': 'Entrepreneurs',
      'alumniPage.startup.desc': 'Many alumni have founded their own AI startups as founders, CEOs, and CTOs, driving the commercialization of artificial intelligence technology.',
      'alumniPage.research.title': 'Research Institutions',
      'alumniPage.research.desc': 'Alumni hold important positions at various research institutions and labs, continuing groundbreaking research in NLP, CV, ML, and other fields.',
      'alumniPage.network.title': 'Stay Connected',
      'alumniPage.network.desc': 'We value ongoing connections and collaborations with our alumni. If you are an OpenMOSS Lab alumnus, we welcome you to stay in touch through:',
      'alumniPage.network.item1': 'Join our alumni WeChat groups and Slack channels',
      'alumniPage.network.item2': 'Attend annual alumni gatherings and academic workshops',
      'alumniPage.network.item3': 'Share experiences and career advice with current students',
      'alumniPage.network.item4': 'Engage in collaborative research and industry-academia partnerships',
      'alumniPage.network.contact': 'To update your contact information or learn about alumni activities, please contact: <a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'alumniPage.backPeople': 'View Team Members',
      'alumniPage.backHome': 'Back to Home',

      // Webmaster Page
      'webmasterPage.breadcrumb.home': 'Home',
      'webmasterPage.breadcrumb.webmaster': 'Webmaster',
      'webmasterPage.title': 'Webmaster',
      'webmasterPage.member1.name': 'Yining Zheng',
      'webmasterPage.member1.role': 'Web Designer',
      'webmasterPage.member2.name': 'Xinjia He',
      'webmasterPage.member2.role': 'Web Designer',
      'webmasterPage.backHome': 'Back to Home',

      // Positions Page
      'positionsPage.title': 'Join OpenMOSS Lab',
      'positionsPage.intro': 'We are recruiting researchers and engineers passionate about open systems and responsible AI. If you want to conduct research in cutting-edge areas such as large-scale AI systems, multimodal learning, and embodied intelligence, we welcome you to join us!',
      'positionsPage.open.title': 'Open Positions',
      'positionsPage.moreDetails': 'More details',
      'positionsPage.phd.title': 'PhD Students',
      'positionsPage.phd.desc': 'We recruit PhD students interested in NLP, multimodal learning, and embodied intelligence year-round. We provide ample research resources and international collaboration opportunities.',
      'positionsPage.phd.req1': 'Background in Computer Science, AI, or related fields',
      'positionsPage.phd.req2': 'Strong programming and mathematical skills',
      'positionsPage.phd.req3': 'Passion for research',
      'positionsPage.master.title': 'Master\'s Students',
      'positionsPage.master.desc': 'Recruiting master\'s students interested in large language models, machine learning, and deep learning to participate in cutting-edge research projects.',
      'positionsPage.master.req1': 'Solid programming and algorithm fundamentals',
      'positionsPage.master.req2': 'Strong interest in AI research',
      'positionsPage.master.req3': 'Team collaboration spirit',
      'positionsPage.postdoc.title': 'Postdoctoral Researchers',
      'positionsPage.postdoc.desc': 'We invite excellent postdocs to join us for independent or collaborative cutting-edge AI research, offering competitive compensation.',
      'positionsPage.postdoc.req1': 'PhD in Computer Science or related fields',
      'positionsPage.postdoc.req2': 'Excellent publication record',
      'positionsPage.postdoc.req3': 'Independent research ability',
      'positionsPage.visiting.title': 'Visiting Scholars',
      'positionsPage.visiting.desc': 'We welcome domestic and international scholars for short-term or long-term collaborative research to advance AI technology together.',
      'positionsPage.visiting.req1': 'Relevant research experience',
      'positionsPage.visiting.req2': 'Clear collaborative research plan',
      'positionsPage.visiting.req3': 'Strong academic background',
      'positionsPage.engineer.title': 'Research Engineers',
      'positionsPage.engineer.desc': 'Recruiting experienced research engineers to participate in large-scale model training, system optimization, and open-source project development.',
      'positionsPage.engineer.req1': 'Proficiency in PyTorch/TensorFlow',
      'positionsPage.engineer.req2': 'Large-scale system development experience',
      'positionsPage.engineer.req3': 'Open-source contribution experience preferred',
      'positionsPage.intern.title': 'Interns',
      'positionsPage.intern.desc': 'We offer internship opportunities for undergraduates and graduate students to participate in actual research projects and gain valuable research experience.',
      'positionsPage.intern.req1': 'At least 3 days per week',
      'positionsPage.intern.req2': 'Basic machine learning knowledge',
      'positionsPage.intern.req3': 'At least 3 months commitment',
      'positionsPage.why.title': 'Why Choose Us',
      'positionsPage.why.research': 'Cutting-edge Research',
      'positionsPage.why.researchDesc': 'Participate in the most advanced AI research projects<br>and publish at top conferences',
      'positionsPage.why.resources': 'Ample Resources',
      'positionsPage.why.resourcesDesc': 'Access to advanced computing resources and datasets<br>to support large-scale experiments',
      'positionsPage.why.team': 'Excellent Team',
      'positionsPage.why.teamDesc': 'Collaborate with top researchers worldwide<br>and receive professional guidance',
      'positionsPage.why.opensource': 'Open Source Culture',
      'positionsPage.why.opensourceDesc': 'Participate in open-source project development<br>and contribute to the community',
      'positionsPage.why.collaboration': 'International Collaboration',
      'positionsPage.why.collaborationDesc': 'Engage in collaborative research and academic exchanges<br>with top international institutions',
      'positionsPage.why.career': 'Career Development',
      'positionsPage.why.careerDesc': 'Alumni at top universities and tech companies,<br>providing broad career opportunities',
      'positionsPage.apply.title': 'How to Apply',
      'positionsPage.apply.desc': 'If you are interested in any of the above positions, please fill out the <a href="https://fudan-nlp.feishu.cn/share/base/form/shrcnnTt5A5tygeK6mMj0gyZKJd" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">application form</a>',
      'positionsPage.applyBtn': 'Fill Application Form',
      'positionsPage.backHome': 'Back to Home',

      // Positions Detail Page
      'positionsDetailPage.title': 'Open Positions Details',
      'positionsDetailPage.phd.title': 'PhD Students',
      'positionsDetailPage.master.title': 'Master Students',
      'positionsDetailPage.grad.targetTitle': 'Target Students:',
      'positionsDetailPage.grad.target': 'We mainly recruit students who are interested in scientific research and practical applications in the field of large models, with the following characteristics: active thinking, proactive, passionate about research or development, hardworking, and not afraid of failure. If you are just looking for a degree or a job, please do not contact us!',
      'positionsDetailPage.grad.directions': 'In 2025, our main recruitment directions are large model pre-training, AI Infra, new architectures, multimodal fusion, agents, and embodied intelligence. Interested students are welcome to contact us.',
      'positionsDetailPage.grad.importantTitle': 'Important Notes:',
      'positionsDetailPage.grad.important1': '(a) Except for project collaboration recommendations, students in our group are not allowed to take internships before their third year of master\'s or fifth year of PhD. Students with internship plans should not choose our group.',
      'positionsDetailPage.grad.important2': '(b) Graduate students in our group will be assigned certain engineering tasks as needed. If you are unwilling to participate in engineering projects, please do not choose our group.',
      'positionsDetailPage.grad.admissionTitle': 'Admission Information:',
      'positionsDetailPage.grad.admission1': '<strong>(1) Master\'s Quota</strong>',
      'positionsDetailPage.grad.admission1desc': 'Depending on research funding, in the past three years (1 academic master, 1-2 recommended professional masters, about 10 exam-based professional masters per year). We do not distinguish between academic and professional masters in daily research, and all are eligible for PhD conversion.',
      'positionsDetailPage.grad.admission2': '<strong>(2) PhD Quota</strong>',
      'positionsDetailPage.grad.admission2desc': 'Depending on research funding, 2-3 PhD positions per year in the past three years.',
      'positionsDetailPage.grad.admission2note': 'I recruit direct PhD students at Shanghai Innovation Institute, jointly trained with Fudan, with unlimited quota. In addition to passing the Fudan interview, you also need to pass the Shanghai Innovation Institute admission exam. It is recommended to get the Shanghai Innovation Institute offer first before applying for the Fudan summer camp.',
      'positionsDetailPage.grad.admission3': '<strong>(3) Admission Routes</strong>',
      'positionsDetailPage.grad.admission3a': '(a) Summer camp: You need to pass the college preliminary review first. Please contact me after receiving the camp admission notice (you can also contact me directly for other inquiries). We will arrange a simple group interview. In the past, the excellent rate of academic masters in summer camps was about 10%, with 2-3 positions for academic + professional masters in our group.',
      'positionsDetailPage.grad.admission3b': '(b) Autumn guaranteed admission: You need to pass the college preliminary review first. Please contact me after receiving the interview notice. We will arrange a group interview. Usually, we do not recruit in this round after filling the quota in the summer camp.',
      'positionsDetailPage.grad.admission3c': '(c) Entrance exam: Please contact me after receiving the re-examination notice. We will arrange a group interview.',
      'positionsDetailPage.grad.admission4': '<strong>(4) Group Interview</strong>',
      'positionsDetailPage.grad.admission4desc': 'We usually arrange a group interview before the college interview. Unlike the college interview, our group interview mainly focuses on research potential, engineering ability, personality, and teamwork. Students who complete <a href="https://github.com/FudanNLP/nlp-beginner" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">nlp-beginner</a> with high quality are prioritized. We warmly welcome students who are interested in AI algorithm implementation and system implementation and have a research spirit.',
      'positionsDetailPage.grad.admission5': '<strong>(5) About Early Group Joining</strong>',
      'positionsDetailPage.grad.admission5desc': 'To help students find more suitable jobs, our group allows students to do internships after the second year of master\'s. Since the first year of master\'s has many courses and too little remaining time to produce good research results, we hope that students who are determined to join our group can join early for study. Students from other universities who are recommended for admission should preferably come to Fudan University for their graduation project (most previous students have come).',
      'positionsDetailPage.grad.admission5note': 'Based on performance, our group will selectively recommend second or third-year master\'s students to internships at cooperative units such as ByteDance, Huawei, Shanghai AI Laboratory, and Meituan. (Previous students have all received full-time offers)',
      'positionsDetailPage.grad.admission6': '<strong>(6) About Graduate Student Benefits</strong>',
      'positionsDetailPage.grad.admission6desc': 'To create a good learning and research environment, our group provides competitive graduate student subsidies (in addition to university subsidies) with reference to the average level of research units at the same level, and provides certain housing subsidies for professional masters. In addition, students participating in enterprise cooperation projects receive additional research subsidies.',
      'positionsDetailPage.grad.sameAsPhd': 'For master\'s student recruitment requirements and instructions, please refer to the "PhD Students" section above.',
      'positionsDetailPage.postdoc.title': 'Postdoctoral Researchers',
      'positionsDetailPage.postdoc.intro': 'Fudan University Natural Language Processing Lab is recruiting postdoctoral researchers year-round for research needs.',
      'positionsDetailPage.postdoc.directionsTitle': 'Research Directions',
      'positionsDetailPage.postdoc.direction1': 'Direction 1: AI Infra',
      'positionsDetailPage.postdoc.direction2': 'Direction 2: Large Language Model Pre-training',
      'positionsDetailPage.postdoc.direction3': 'Direction 3: Multimodal Foundation Models',
      'positionsDetailPage.postdoc.direction4': 'Direction 4: Speech Foundation Models',
      'positionsDetailPage.postdoc.direction5': 'Direction 5: Embodied Intelligence',
      'positionsDetailPage.postdoc.reqTitle': 'Requirements',
      'positionsDetailPage.postdoc.req1': '1. PhD in Computer Science, Software, Electronics, Automation, Mathematics, or related fields.',
      'positionsDetailPage.postdoc.req2': '2. PhD degree from excellent domestic or international universities, graduated within 3 years.',
      'positionsDetailPage.postdoc.req3': '3. Age under 35.',
      'positionsDetailPage.postdoc.req4': '4. Priority for those who have published high-level papers in AI or led/participated in specific projects.',
      'positionsDetailPage.postdoc.req5': '5. Active thinking, strong innovation ability, and passion for technical innovation and R&D.',
      'positionsDetailPage.postdoc.req6': '6. Strong sense of responsibility and good team spirit.',
      'positionsDetailPage.postdoc.salaryTitle': 'Compensation',
      'positionsDetailPage.postdoc.salary1': 'Compensation and benefits are provided according to Fudan University regulations for postdoctoral researchers (including competitive salary, discounted postdoctoral apartments, benefits equivalent to tenured staff such as children\'s enrollment), with support for national programs and Shanghai Super Postdoc program.',
      'positionsDetailPage.postdoc.salary2': '"Boxin Program" winners: 400K RMB annual salary, 200K research funding, 30K academic exchange funding; "Introduction Program" winners: 380-400K+ annually, 200K research funding; Shanghai Super Postdoc: 280-300K+ annually; Fudan Super Postdoc: 230-280K annually, 50% selection rate; Others: 180-200K+.',
      'positionsDetailPage.postdoc.salary3': 'The research group provides additional subsidies based on individual research progress and contributions, and provides excellent research conditions and stable support. The university "regards postdocs as an important source of faculty and professional staff."',
      'positionsDetailPage.postdoc.salary4': 'For details, please visit Fudan University HR <a href="https://hr.fudan.edu.cn/" target="_blank" style="color: var(--fudan-blue); text-decoration: underline;">website</a>',
      'positionsDetailPage.postdoc.salary5': 'In addition, we collaborate with Pazhou Laboratory, Huawei, and other well-known enterprises for joint postdoctoral training, with compensation equivalent to formal employees. Postdocs can choose to stay with the company or apply for university positions after completion.',
      'positionsDetailPage.postdoc.applyTitle': 'How to Apply',
      'positionsDetailPage.postdoc.apply1': '1. Send application email to xpqiu@fudan.edu.cn',
      'positionsDetailPage.postdoc.apply2': '2. Email subject: "Postdoc Application - Name - Major - University", attach CV and specify research interests.',
      'positionsDetailPage.postdoc.apply3': '3. We will contact you after initial review.',
      'positionsDetailPage.visiting.title': 'Visiting Scholars',
      'positionsDetailPage.visiting.content': 'Content to be added',
      'positionsDetailPage.engineer.title': 'Research Engineers',
      'positionsDetailPage.engineer.subtitle': 'About Research Engineering Assistant Recruitment (July 2025, Continuously Updated)',
      'positionsDetailPage.engineer.intro': 'Fudan University Natural Language Processing Lab is recruiting research engineering assistants on a long-term basis due to research needs. Compensation is negotiable.',
      'positionsDetailPage.engineer.reqTitle': 'Job Description:',
      'positionsDetailPage.engineer.req1': 'Participate in the lab\'s LLM engineering development projects',
      'positionsDetailPage.engineer.req2': 'Good engineering experience, proficient in Python',
      'positionsDetailPage.engineer.req3': 'Priority for candidates familiar with Pytorch and have developed NLP projects',
      'positionsDetailPage.engineer.req4': 'Research spirit, hardworking and serious',
      'positionsDetailPage.engineer.applyTitle': 'How to Apply:',
      'positionsDetailPage.engineer.apply1': 'Send application email to xpqiu@fudan.edu.cn',
      'positionsDetailPage.engineer.apply2': 'Email subject: "Research Engineering Assistant Application - Your Name", attach your CV.',
      'positionsDetailPage.engineer.apply3': 'We will contact you after initial review.',
      'positionsDetailPage.intern.title': 'Interns',
      'positionsDetailPage.intern.content': 'Content to be added',
      'positionsDetailPage.backPositions': 'Back to Positions',

      // Resources Page
      'resourcesPage.title': 'Sources',
      'resourcesPage.intro': 'OpenMOSS Lab provides rich resources to help researchers and developers explore cutting-edge areas such as large language models, multimodal learning, and embodied intelligence.',
      'resourcesPage.projects.title': 'Open Source Projects',
      'resourcesPage.moss.desc': 'An open-source tool-augmented conversational language model supporting plugin systems and various tool-calling capabilities.',
      'resourcesPage.anygpt.desc': 'Unified multimodal LLM with discrete sequence modeling for true multimodal understanding and generation.',
      'resourcesPage.ttsd.desc': 'Expressive dialogue speech synthesis model supporting zero-shot multi-speaker voice cloning and long-form speech generation in Chinese and English.',
      'resourcesPage.speechgpt.desc': 'GPT-4o-level real-time spoken dialogue system achieving true end-to-end speech interaction.',
      'resourcesPage.speech.desc': 'True speech-to-speech large language model without text guidance, directly achieving speech understanding and generation.',
      'resourcesPage.saes.desc': 'Sparse Autoencoder (SAE) research project from OpenMOSS Mechanistic Interpretability Team.',
      'resourcesPage.viewGitHub': 'View Project',
      'resourcesPage.courses.title': 'Courses & Tutorials',
      'resourcesPage.prml.title': 'Pattern Recognition & Machine Learning',
      'resourcesPage.prml.desc': 'Course resources for Fudan University\'s Pattern Recognition and Machine Learning, covering fundamental ML theory and practice.',
      'resourcesPage.viewCourse': 'View Course →',
      'resourcesPage.papers.title': 'Reading List',
      'resourcesPage.papers.desc': 'Deep Learning Preparatory Course',
      'resourcesPage.viewPapers': 'View Course →',
      'resourcesPage.tools.title': 'Development Tools',
      'resourcesPage.tools.desc': 'Practical tools like FastNLP and CoLLiE to help researchers quickly build and train models.',
      'resourcesPage.viewTools': 'Browse Tools →',
      'resourcesPage.community.title': 'Community & Exchange',
      'resourcesPage.community.desc': 'Join the summer school to exchange ideas with global researchers and advance AI technology together.',
      'resourcesPage.joinCommunity': 'Join Summer School →',
      'resourcesPage.contribute.title': 'Contribution & Collaboration',
      'resourcesPage.contribute.desc': 'We welcome contributors from around the world to participate in our open-source projects. Whether it\'s code contributions, documentation improvements, bug reports, or feature suggestions, all are valuable to us.',
      'resourcesPage.contribute.item1': '⭐ Star our projects and follow the latest developments',
      'resourcesPage.contribute.item2': '🐛 Submit Issues to report problems or suggestions',
      'resourcesPage.contribute.item3': '🔀 Submit Pull Requests to contribute code',
      'resourcesPage.contribute.item4': '📖 Improve documentation and tutorials',
      'resourcesPage.contribute.item5': '💬 Participate in community discussions and technical exchanges',
      'resourcesPage.contribute.contact': 'For collaboration opportunities or technical questions, please contact: <a href="mailto:xpqiu@fudan.edu.cn">xpqiu@fudan.edu.cn</a>',
      'resourcesPage.visitGitHub': 'Visit GitHub',
      'resourcesPage.backHome': 'Back to Home'
    }
  };

  // 默认语言为中文
  let currentLang = localStorage.getItem('lang') || 'zh-CN';

  // 翻译函数
  function translate(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // 更新 HTML lang 属性
    document.documentElement.setAttribute('lang', lang);

    // 更新按钮文本
    const langBtn = document.querySelector('.lang-text');
    if (langBtn) {
      langBtn.textContent = lang === 'zh-CN' ? '英文' : 'Chinese';
    }

    // 动态更新申请表单链接（根据语言切换）
    const applicationFormLinks = document.querySelectorAll('a[href*="fudannlp.feishu.cn/share/base/form"], a[href*="fudan-nlp.feishu.cn/share/base/form"]');
    applicationFormLinks.forEach(link => {
      if (lang === 'en') {
        // 英文版使用新的链接
        link.href = 'https://fudan-nlp.feishu.cn/share/base/form/shrcnnTt5A5tygeK6mMj0gyZKJd';
      } else {
        // 中文版保持原来的链接
        link.href = 'https://fudannlp.feishu.cn/share/base/form/shrcn29UYq1MCpTH0GBZh3AWPPg';
      }
    });

    // 保存到 localStorage
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  // 语言切换按钮
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
      translate(newLang);
    });
  }

  // ============================================
  // 团队成员动态渲染
  // ============================================

  // 创建成员卡片HTML
  function createMemberCard(member, lang, isStudent = false) {
    const info = getMemberInfo(member, lang);
    const card = document.createElement('div');
    card.className = 'member-card';

    // 构建名字HTML - 如果有主页则添加链接和特殊样式
    let nameHtml;
    if (info.homepage) {
      nameHtml = `<h4 class="member-name member-name-link"><a href="${info.homepage}" target="_blank" rel="noopener noreferrer">${info.name}</a></h4>`;
    } else {
      nameHtml = `<h4 class="member-name">${info.name}</h4>`;
    }

    let html = `
      <img src="${info.photo}" alt="${info.name}" class="member-photo" onerror="this.src='assets/img/default-avatar.svg'">
      ${nameHtml}
    `;

    // 学生模式：只显示姓名和头像，不显示职称、年份、研究方向等
    if (!isStudent) {
      if (info.title) {
        html += `<p class="member-title">${info.title}</p>`;
      }

      // 添加额外信息（研究方向、年份等）
      if (info.research) {
        html += `<p class="member-research">${info.research}</p>`;
      }

      if (info.year) {
        html += `<p class="member-year">${info.year}</p>`;
      }

      if (info.affiliation) {
        html += `<p class="member-affiliation">${info.affiliation}</p>`;
      }
    }

    card.innerHTML = html;
    return card;
  }

  // 渲染成员列表
  function renderMembers(containerSelector, members, lang, isStudent = false) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // 清空容器
    container.innerHTML = '';

    // 添加成员卡片
    members.forEach(member => {
      const card = createMemberCard(member, lang, isStudent);
      container.appendChild(card);
    });
  }

  // 渲染所有团队成员（用于people.html）
  function renderAllTeamMembers(lang) {
    // 渲染核心成员
    if (teamData.coreMembers && teamData.coreMembers.length > 0) {
      renderMembers('#core-members-container', teamData.coreMembers, lang, false);
    }

    // 渲染团队成员（工程师和科研助理）
    if (teamData.teamMembers && teamData.teamMembers.length > 0) {
      renderMembers('#team-members-container', teamData.teamMembers, lang, false);
    }

    // 渲染博士后
    if (teamData.postdocs && teamData.postdocs.length > 0) {
      renderMembers('#postdocs-container', teamData.postdocs, lang, false);
    }

    // 渲染博士生（学生模式：不显示职称等）
    if (teamData.phdStudents && teamData.phdStudents.length > 0) {
      renderMembers('#phd-students-container', teamData.phdStudents, lang, true);
    }

    // 渲染硕士生（学生模式）
    if (teamData.masterStudents && teamData.masterStudents.length > 0) {
      renderMembers('#master-students-container', teamData.masterStudents, lang, true);
    }

    // 渲染本科生（学生模式）
    if (teamData.undergraduates && teamData.undergraduates.length > 0) {
      renderMembers('#undergraduates-container', teamData.undergraduates, lang, true);
    }

    // 渲染访问学生（学生模式）
    if (teamData.visitingStudents && teamData.visitingStudents.length > 0) {
      renderMembers('#visiting-students-container', teamData.visitingStudents, lang, true);
    }
  }

  // 初始化成员列表
  function initTeamMembers() {
    // 检查是否有teamData（从data.js加载）
    if (typeof teamData === 'undefined') {
      console.warn('Team data not loaded. Make sure data.js is included before main.js');
      return;
    }

    // 首页：只显示核心成员
    const indexCoreContainer = document.querySelector('#core-members-home');
    if (indexCoreContainer) {
      renderMembers('#core-members-home', teamData.coreMembers, currentLang);
    }

    // people.html：显示所有成员
    const peoplePage = document.querySelector('body.people-page');
    if (peoplePage) {
      renderAllTeamMembers(currentLang);
    }
  }

  // 页面加载时应用语言和渲染成员
  translate(currentLang);
  initTeamMembers();

  // 更新年份（在翻译后再更新一次）
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 重新绑定语言切换功能，确保切换语言时重新渲染成员
  const originalLangToggle = langToggle;
  if (originalLangToggle) {
    // 移除旧的事件监听器，添加新的
    const newLangToggle = originalLangToggle.cloneNode(true);
    originalLangToggle.parentNode.replaceChild(newLangToggle, originalLangToggle);

    newLangToggle.addEventListener('click', function () {
      const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
      translate(newLang);
      initTeamMembers(); // 重新渲染成员
    });
  }
})();
