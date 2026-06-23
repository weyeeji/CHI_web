const i18n = {
  zh: {
    selectedModule: "当前模块",
    facts: [
      "Explorer",
      "Critic",
      "Coordinator",
      "2 个条件",
      "2 轮任务",
      "Prompt 冻结",
      "盲识别",
      "完整性审计",
    ],
  },
  en: {
    selectedModule: "Selected module",
    facts: [
      "Explorer",
      "Critic",
      "Coordinator",
      "2 Conditions",
      "2 Task Rounds",
      "Prompt Freeze",
      "Blind Recognition",
      "Integrity Audit",
    ],
  },
};

const moduleDetails = {
  participant: {
    nav: {
      zh: "参与者界面",
      en: "Participant UI",
    },
    title: {
      zh: "参与者界面",
      en: "Participant UI",
    },
    body: {
      zh: "三栏式 workspace 让任务材料、团队 transcript 和最终方案控制同时可见，把 agent team 呈现为一个可协作对象，而不是三个分散聊天窗口。",
      en: "A three-column workspace keeps task material, team transcript, and final-proposal control visible, presenting the agents as one collaborative team rather than three separate chat windows.",
    },
    bullets: {
      zh: [
        "只显示 Explorer / Critic / Coordinator 角色名，不显示隐藏条件。",
        "限制最多 5 条人类协作消息，让两轮任务保持可比。",
        "支持中英文实验材料，并保存每次会话的材料快照。",
      ],
      en: [
        "Shows Explorer / Critic / Coordinator role names without revealing the hidden condition.",
        "Limits participants to up to five collaboration messages to keep rounds comparable.",
        "Supports Chinese and English study material and stores a material snapshot per session.",
      ],
    },
  },
  orchestrator: {
    nav: {
      zh: "流程编排",
      en: "Round Orchestrator",
    },
    title: {
      zh: "轮次编排器",
      en: "Round Orchestrator",
    },
    body: {
      zh: "编排器把受控实验写成状态机：同意、背景问卷、两轮任务、任务后问卷、研究后问卷和 debrief 都由同一套 gates 推进。",
      en: "The orchestrator turns the controlled study into a state machine: consent, background survey, two task rounds, post-task measures, post-study measures, and debrief all advance through the same gates.",
    },
    bullets: {
      zh: [
        "记录 counterbalance group，控制条件顺序与任务顺序。",
        "每个阶段有进入条件、完成条件和缺失数据提示。",
        "把 pilot、dry-run、main study 标记为不同运行模式。",
      ],
      en: [
        "Stores counterbalance group to control condition and task order.",
        "Defines entry gates, completion gates, and missing-data prompts for each phase.",
        "Separates pilot, dry-run, and main-study sessions as different run modes.",
      ],
    },
  },
  prompt: {
    nav: {
      zh: "Prompt 栈",
      en: "Prompt Stack",
    },
    title: {
      zh: "Prompt 栈与 SOUL layer",
      en: "Prompt Stack and SOUL Layer",
    },
    body: {
      zh: "系统把 global instruction、role definition、condition-specific SOUL/personality layer、phase instruction 和输出模板分开管理，让实验操控集中在 personality enactment。",
      en: "The system separates global instructions, role definitions, condition-specific SOUL/personality layers, phase instructions, and output templates so the manipulation stays focused on personality enactment.",
    },
    bullets: {
      zh: [
        "role-only 与 personality-enacted 使用相同角色、模型、任务和阶段。",
        "personality 条件只增加稳定 stance、voice、interaction pattern 和 boundary。",
        "prompt freeze 保存可审计快照，避免实验中途漂移。",
      ],
      en: [
        "Role-only and personality-enacted conditions share roles, model, tasks, and phases.",
        "The personality condition adds stable stance, voice, interaction patterns, and boundaries.",
        "Prompt freeze stores auditable snapshots to prevent mid-study drift.",
      ],
    },
  },
  runtime: {
    nav: {
      zh: "Agent 运行时",
      en: "Agent Runtime",
    },
    title: {
      zh: "Agent 运行时",
      en: "Agent Runtime",
    },
    body: {
      zh: "运行时用 OpenAI-compatible chat completions 调用三个 agent，在每个阶段控制上下文、输出预算和 agent 发言顺序。",
      en: "The runtime calls the three agents through OpenAI-compatible chat completions while controlling context, output budget, and speaking order for each phase.",
    },
    bullets: {
      zh: [
        "记录模型、token、latency、错误状态和原始 response。",
        "按 phase 组织 agent-agent discussion、human response 与 final synthesis。",
        "在最终阶段把 Coordinator 设为综合输出的主 agent。",
      ],
      en: [
        "Logs model, tokens, latency, error state, and raw responses.",
        "Organizes agent-agent discussion, human response, and final synthesis by phase.",
        "Uses the Coordinator as the lead agent for final synthesis.",
      ],
    },
  },
  instruments: {
    nav: {
      zh: "测量工具",
      en: "Instruments",
    },
    title: {
      zh: "测量工具",
      en: "Measurement Instruments",
    },
    body: {
      zh: "系统把任务后量表、盲识别、成对比较和开放问题嵌入实验流程，避免研究者在实验结束后手动拼接数据。",
      en: "The system embeds post-task scales, blind recognition, pairwise comparison, and open-ended prompts into the study flow so researchers do not have to stitch data together afterwards.",
    },
    bullets: {
      zh: [
        "每轮任务后收集 31 项主观量表。",
        "研究后问卷评估参与者是否能识别 personality-enacted 团队。",
        "开放回答与日志 cues 一起进入 mixed-method analysis。",
      ],
      en: [
        "Collects 31 subjective-scale items after each task round.",
        "Post-study measures test whether participants recognize the personality-enacted team.",
        "Open responses are linked with log cues for mixed-method analysis.",
      ],
    },
  },
  database: {
    nav: {
      zh: "研究数据库",
      en: "Study Database",
    },
    title: {
      zh: "研究数据库",
      en: "Study Database",
    },
    body: {
      zh: "数据层把协作过程保存为可复现证据链：不仅保存问卷分数，也保存每条消息、每次 agent run、材料版本和界面事件。",
      en: "The data layer preserves the collaboration as a reproducible evidence chain: not only questionnaire scores, but every message, agent run, material version, and interface event.",
    },
    bullets: {
      zh: [
        "messages 表保留 sender、role、phase、condition 和 turn index。",
        "agent_runs 表保留 request / response、prompt stack 与运行 metadata。",
        "client_events 和 material snapshots 支持质量检查与复现。",
      ],
      en: [
        "The messages table stores sender, role, phase, condition, and turn index.",
        "The agent_runs table stores request / response, prompt stack, and runtime metadata.",
        "Client events and material snapshots support quality checks and reproducibility.",
      ],
    },
  },
  admin: {
    nav: {
      zh: "研究者后台",
      en: "Admin Console",
    },
    title: {
      zh: "研究者后台",
      en: "Researcher Admin Console",
    },
    body: {
      zh: "后台不是展示页，而是实验控制台：它负责 recruitment codes、prompt 管理、条件分配、完整性检查和导出。",
      en: "The admin console is not a presentation page; it is the experiment control room for recruitment codes, prompt management, condition assignment, integrity checks, and export.",
    },
    bullets: {
      zh: [
        "为不同招募批次生成 main / pilot / dry-run code。",
        "显示缺失阶段、泄漏风险、异常延迟和质量 flags。",
        "在 analysis-ready 前检查同意、debrief、问卷和两轮任务是否完整。",
      ],
      en: [
        "Generates main / pilot / dry-run codes for recruitment batches.",
        "Surfaces missing phases, leakage risks, abnormal latency, and quality flags.",
        "Checks consent, debrief, questionnaires, and both task rounds before analysis-ready export.",
      ],
    },
  },
  analysis: {
    nav: {
      zh: "分析导出",
      en: "Analysis Export",
    },
    title: {
      zh: "分析导出",
      en: "Analysis Export",
    },
    body: {
      zh: "导出层把 questionnaire constructs、within-subject differences、blind recognition 和日志证据整理成论文分析可以直接使用的数据结构。",
      en: "The export layer organizes questionnaire constructs, within-subject differences, blind recognition, and log evidence into analysis-ready structures for the paper.",
    },
    bullets: {
      zh: [
        "计算 personality-enacted minus role-only 的核心差值。",
        "把量化结果与参与者文字解释、agent 行为片段并排。",
        "保留审计字段，说明每个结论来自哪轮、哪种条件、哪类数据。",
      ],
      en: [
        "Computes the key personality-enacted minus role-only differences.",
        "Places quantitative results alongside participant explanations and agent-behavior excerpts.",
        "Keeps audit fields showing the round, condition, and data type behind each claim.",
      ],
    },
  },
};

const chartData = [
  { key: "explorer", en: "Explorer style", zh: "Explorer 风格", value: 1.08 },
  { key: "critic", en: "Critic style", zh: "Critic 风格", value: 0.92 },
  { key: "coordinator", en: "Coordinator style", zh: "Coordinator 风格", value: 1.13 },
  { key: "teamness", en: "Teamness", zh: "团队感", value: 0.83 },
  { key: "fluency", en: "Team fluency", zh: "团队流畅性", value: 0.79 },
  {
    key: "disagreement",
    en: "Constructive disagreement",
    zh: "建设性分歧",
    value: 0.63,
  },
  { key: "trust", en: "Trust calibration", zh: "信任校准", value: 0.79 },
  { key: "workload", en: "Workload", zh: "工作负担", value: -0.56 },
];

let currentLang = "zh";
let currentModule = "participant";

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem("hmat-lang");
    return stored === "en" || stored === "zh" ? stored : "zh";
  } catch {
    return "zh";
  }
}

function storeLanguage(lang) {
  try {
    window.localStorage.setItem("hmat-lang", lang);
  } catch {
    // Language still switches even when storage is unavailable.
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  storeLanguage(lang);
  renderFacts();
  renderModuleLabels();
  renderModuleDetail(currentModule);
  renderChart();
}

function renderFacts() {
  const factNodes = document.querySelectorAll(".run-facts span");
  i18n[currentLang].facts.forEach((fact, index) => {
    if (factNodes[index]) {
      factNodes[index].textContent = fact;
    }
  });
}

function renderModuleLabels() {
  document.querySelectorAll(".module").forEach((button) => {
    const key = button.dataset.module;
    const label = moduleDetails[key]?.nav[currentLang];
    const strong = button.querySelector("strong");
    if (label && strong) {
      strong.textContent = label;
    }
  });
}

function renderModuleDetail(key) {
  const detail = moduleDetails[key];
  if (!detail) return;

  currentModule = key;
  document.querySelectorAll(".module").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === key);
  });

  const kicker = document.querySelector(".detail-kicker");
  const title = document.getElementById("moduleTitle");
  const body = document.getElementById("moduleBody");
  const bullets = document.getElementById("moduleBullets");

  if (kicker) kicker.textContent = i18n[currentLang].selectedModule;
  if (title) title.textContent = detail.title[currentLang];
  if (body) body.textContent = detail.body[currentLang];
  if (bullets) {
    bullets.replaceChildren(
      ...detail.bullets[currentLang].map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      }),
    );
  }
}

function renderChart() {
  const chart = document.getElementById("differenceChart");
  if (!chart) return;

  const min = -0.9;
  const max = 1.3;
  const span = max - min;
  const zero = Math.abs(min) / span;

  chart.replaceChildren(
    ...chartData.map((datum) => {
      const row = document.createElement("div");
      row.className = "bar-row";

      const label = document.createElement("div");
      label.className = "bar-label";
      label.textContent = datum[currentLang];

      const track = document.createElement("div");
      track.className = "bar-track";
      track.style.setProperty("--zero", `${zero * 100}%`);

      const fill = document.createElement("div");
      fill.className = `bar-fill${datum.value < 0 ? " negative" : ""}`;
      const fillLeft =
        datum.value >= 0
          ? zero * 100
          : ((Math.abs(min) + datum.value) / span) * 100;
      const fillWidth = (Math.abs(datum.value) / span) * 100;
      fill.style.left = `${fillLeft}%`;
      fill.style.width = `${fillWidth}%`;

      const value = document.createElement("div");
      value.className = "bar-value";
      value.textContent = datum.value > 0 ? `+${datum.value.toFixed(2)}` : datum.value.toFixed(2);

      track.append(fill);
      row.append(label, track, value);
      return row;
    }),
  );
}

document.querySelector(".lang-toggle")?.addEventListener("click", () => {
  setLanguage(currentLang === "zh" ? "en" : "zh");
});

document.querySelectorAll(".module").forEach((button) => {
  button.addEventListener("click", () => renderModuleDetail(button.dataset.module));
});

setLanguage(getStoredLanguage());
