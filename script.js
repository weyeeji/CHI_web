const moduleDetails = {
  participant: {
    nav: "Participant UI",
    title: "Participant UI",
    body:
      "A three-column workspace keeps task material, team transcript, and final-proposal control visible, presenting the agents as one collaborative team rather than three separate chat windows.",
    bullets: [
      "Shows Explorer / Critic / Coordinator role names without revealing the hidden condition.",
      "Limits participants to up to five collaboration messages to keep rounds comparable.",
      "Supports study-material snapshots for each session.",
    ],
  },
  orchestrator: {
    nav: "Round Orchestrator",
    title: "Round Orchestrator",
    body:
      "The orchestrator turns the controlled study into a state machine: consent, background survey, two task rounds, post-task measures, post-study measures, and debrief all advance through the same gates.",
    bullets: [
      "Stores counterbalance group to control condition and task order.",
      "Defines entry gates, completion gates, and missing-data prompts for each phase.",
      "Separates pilot, dry-run, and main-study sessions as different run modes.",
    ],
  },
  prompt: {
    nav: "Prompt Stack",
    title: "Prompt Stack and SOUL Layer",
    body:
      "The system separates global instructions, role definitions, condition-specific SOUL/personality layers, phase instructions, and output templates so the manipulation stays focused on personality enactment.",
    bullets: [
      "Role-only and personality-enacted conditions share roles, model, tasks, and phases.",
      "The personality condition adds stable stance, voice, interaction patterns, and boundaries.",
      "Prompt freeze stores auditable snapshots to prevent mid-study drift.",
    ],
  },
  runtime: {
    nav: "Agent Runtime",
    title: "Agent Runtime",
    body:
      "The runtime calls the three agents through OpenAI-compatible chat completions while controlling context, output budget, and speaking order for each phase.",
    bullets: [
      "Logs model, tokens, latency, error state, and raw responses.",
      "Organizes agent-agent discussion, human response, and final synthesis by phase.",
      "Uses the Coordinator as the lead agent for final synthesis.",
    ],
  },
  instruments: {
    nav: "Instruments",
    title: "Measurement Instruments",
    body:
      "The system embeds post-task scales, blind recognition, pairwise comparison, and open-ended prompts into the study flow so researchers do not have to stitch data together afterwards.",
    bullets: [
      "Collects 31 subjective-scale items after each task round.",
      "Post-study measures test whether participants recognize the personality-enacted team.",
      "Open responses are linked with log cues for mixed-method analysis.",
    ],
  },
  database: {
    nav: "Study Database",
    title: "Study Database",
    body:
      "The data layer preserves the collaboration as a reproducible evidence chain: not only questionnaire scores, but every message, agent run, material version, and interface event.",
    bullets: [
      "The messages table stores sender, role, phase, condition, and turn index.",
      "The agent_runs table stores request / response, prompt stack, and runtime metadata.",
      "Client events and material snapshots support quality checks and reproducibility.",
    ],
  },
  admin: {
    nav: "Admin Console",
    title: "Researcher Admin Console",
    body:
      "The admin console is not a presentation page; it is the experiment control room for recruitment codes, prompt management, condition assignment, integrity checks, and export.",
    bullets: [
      "Generates main / pilot / dry-run codes for recruitment batches.",
      "Surfaces missing phases, leakage risks, abnormal latency, and quality flags.",
      "Checks consent, debrief, questionnaires, and both task rounds before analysis-ready export.",
    ],
  },
  analysis: {
    nav: "Analysis Export",
    title: "Analysis Export",
    body:
      "The export layer organizes questionnaire constructs, within-subject differences, blind recognition, and log evidence into analysis-ready structures for the paper.",
    bullets: [
      "Computes the key personality-enacted minus role-only differences.",
      "Places quantitative results alongside participant explanations and agent-behavior excerpts.",
      "Keeps audit fields showing the round, condition, and data type behind each claim.",
    ],
  },
};

const chartData = [
  { key: "explorer", label: "Explorer style", value: 1.08 },
  { key: "critic", label: "Critic style", value: 0.92 },
  { key: "coordinator", label: "Coordinator style", value: 1.13 },
  { key: "teamness", label: "Teamness", value: 0.83 },
  { key: "fluency", label: "Team fluency", value: 0.79 },
  { key: "disagreement", label: "Constructive disagreement", value: 0.63 },
  { key: "trust", label: "Trust calibration", value: 0.79 },
  { key: "workload", label: "Workload", value: -0.56 },
];

let currentModule = "participant";

function renderModuleLabels() {
  document.querySelectorAll(".module").forEach((button) => {
    const key = button.dataset.module;
    const label = moduleDetails[key]?.nav;
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

  const title = document.getElementById("moduleTitle");
  const body = document.getElementById("moduleBody");
  const bullets = document.getElementById("moduleBullets");

  if (title) title.textContent = detail.title;
  if (body) body.textContent = detail.body;
  if (bullets) {
    bullets.replaceChildren(
      ...detail.bullets.map((item) => {
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
      label.textContent = datum.label;

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
      value.textContent =
        datum.value > 0 ? `+${datum.value.toFixed(2)}` : datum.value.toFixed(2);

      track.append(fill);
      row.append(label, track, value);
      return row;
    }),
  );
}

document.querySelectorAll(".module").forEach((button) => {
  button.addEventListener("click", () => renderModuleDetail(button.dataset.module));
});

renderModuleLabels();
renderModuleDetail(currentModule);
renderChart();
