const state = {
  roadmaps: [],
  currentContext: null,
};

const elements = {
  form: document.querySelector("#roadmap-form"),
  currentRole: document.querySelector("#current-role"),
  targetRole: document.querySelector("#target-ai-role"),
  years: document.querySelector("#years-of-experience"),
  emptyState: document.querySelector("#empty-state"),
  result: document.querySelector("#result"),
  matchType: document.querySelector("#match-type"),
  title: document.querySelector("#roadmap-title"),
  summary: document.querySelector("#roadmap-summary"),
  difficultyScore: document.querySelector("#difficulty-score"),
  difficultyLabel: document.querySelector("#difficulty-label"),
  metaCurrentRole: document.querySelector("#meta-current-role"),
  metaTargetRole: document.querySelector("#meta-target-role"),
  metaExperience: document.querySelector("#meta-experience"),
  timeline: document.querySelector("#timeline"),
  downloadPdf: document.querySelector("#download-pdf"),
  newRoadmap: document.querySelector("#new-roadmap"),
};

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function populateSelect(select, values) {
  select.innerHTML = values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
}

function availableOptions(roadmaps) {
  return {
    currentRoles: uniqueSorted(
      roadmaps
        .filter((item) => item.current_role !== "Any Role")
        .map((item) => item.current_role)
    ),
    targetRoles: uniqueSorted(
      roadmaps
        .filter((item) => item.target_ai_role !== "AI Generalist")
        .map((item) => item.target_ai_role)
    ),
  };
}

function findRoadmap(currentRole, targetRole, roadmaps) {
  const current = normalize(currentRole);
  const target = normalize(targetRole);

  const exact = roadmaps.find(
    (item) => normalize(item.current_role) === current && normalize(item.target_ai_role) === target
  );
  if (exact) {
    return { roadmap: exact, matchType: "Exact match" };
  }

  const targetDefault = roadmaps.find(
    (item) => normalize(item.current_role) === "any role" && normalize(item.target_ai_role) === target
  );
  if (targetDefault) {
    return { roadmap: targetDefault, matchType: "Closest default for target role" };
  }

  const currentDefault = roadmaps.find(
    (item) => normalize(item.current_role) === current && normalize(item.target_ai_role) === "ai generalist"
  );
  if (currentDefault) {
    return { roadmap: currentDefault, matchType: "Closest default for current role" };
  }

  const generic = roadmaps.find(
    (item) => normalize(item.current_role) === "any role" && normalize(item.target_ai_role) === "ai generalist"
  );
  return { roadmap: generic, matchType: "General default" };
}

function difficultyScore(yearsOfExperience, roadmap) {
  const base = Number(roadmap.base_difficulty || 72);
  const experience = Math.max(0, Number(yearsOfExperience) || 0);
  const experienceCredit = Math.min(30, Math.floor(experience * 4));
  const score = Math.max(20, Math.min(95, base - experienceCredit));

  let label = "Manageable";
  if (score >= 80) {
    label = "High";
  } else if (score >= 55) {
    label = "Moderate";
  }

  return {
    score,
    label,
    base,
    experienceCredit,
  };
}

function buildContext(currentRole, targetRole, yearsOfExperience) {
  const match = findRoadmap(currentRole, targetRole, state.roadmaps);
  const difficulty = difficultyScore(yearsOfExperience, match.roadmap);
  return {
    input: {
      currentRole,
      targetRole,
      yearsOfExperience: Number(yearsOfExperience),
    },
    roadmap: match.roadmap,
    matchType: match.matchType,
    difficulty,
  };
}

function renderTimeline(months) {
  elements.timeline.innerHTML = months
    .map((item) => {
      const tasks = item.tasks
        .map((task) => `<li>${escapeHtml(task)}</li>`)
        .join("");
      const instructions = (item.upskilling_instructions || [])
        .map((instruction) => `<li>${escapeHtml(instruction)}</li>`)
        .join("");
      const references = (item.references || [])
        .map(
          (reference) =>
            `<a href="${escapeHtml(reference.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.title)}</a>`
        )
        .join("");

      return `
        <article class="month-card">
          <div class="month-index">Month ${escapeHtml(item.month)}</div>
          <div>
            <h2>${escapeHtml(item.focus)}</h2>
            <ul>${tasks}</ul>
            <h3>Upskilling instructions</h3>
            <ol class="instruction-list">${instructions}</ol>
            <h3>References</h3>
            <div class="reference-list">${references}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResult(context) {
  elements.matchType.textContent = context.matchType;
  elements.title.textContent = context.roadmap.title;
  elements.summary.textContent = context.roadmap.summary;
  elements.difficultyScore.textContent = context.difficulty.score;
  elements.difficultyLabel.textContent = `${context.difficulty.label} | ${context.difficulty.experienceCredit} point experience credit`;
  elements.metaCurrentRole.textContent = context.input.currentRole;
  elements.metaTargetRole.textContent = context.input.targetRole;
  elements.metaExperience.textContent = `${context.input.yearsOfExperience} years`;
  renderTimeline(context.roadmap.months);

  elements.emptyState.hidden = true;
  elements.result.hidden = false;
  elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight, options = {}) {
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line) => {
    if (y > options.pageBottom) {
      y = addPdfPage(doc, options);
    }
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
}

function addPdfPage(doc, options) {
  doc.addPage();
  drawPdfBackground(doc);
  drawPdfFooter(doc, options);
  return options.top;
}

function drawPdfBackground(doc) {
  doc.setFillColor(9, 11, 16);
  doc.rect(0, 0, 210, 297, "F");
}

function drawPdfFooter(doc, options) {
  doc.setDrawColor(40, 50, 68);
  doc.line(options.left, 282, options.right, 282);
  doc.setTextColor(168, 179, 199);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("AI Role Roadmap Generator", options.left, 288);
}

function drawPdfHeader(doc, context, options) {
  drawPdfBackground(doc);
  doc.setFillColor(18, 23, 34);
  doc.roundedRect(options.left, 16, options.contentWidth, 53, 3, 3, "F");
  doc.setDrawColor(45, 212, 191);
  doc.setLineWidth(0.6);
  doc.line(options.left, 16, options.right, 16);

  doc.setTextColor(45, 212, 191);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(context.matchType.toUpperCase(), options.left + 7, 27);

  doc.setTextColor(244, 247, 251);
  doc.setFontSize(20);
  doc.text(context.roadmap.title, options.left + 7, 40, { maxWidth: 128 });

  doc.setTextColor(168, 179, 199);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(context.roadmap.summary, options.left + 7, 51, { maxWidth: 128 });

  doc.setFillColor(245, 158, 11);
  doc.roundedRect(165, 24, 23, 23, 3, 3, "F");
  doc.setTextColor(3, 17, 15);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(String(context.difficulty.score), 176.5, 40, { align: "center" });
  doc.setTextColor(168, 179, 199);
  doc.setFontSize(8);
  doc.text("Difficulty", 176.5, 54, { align: "center" });
  drawPdfFooter(doc, options);
}

function drawPdfMeta(doc, context, y, options) {
  const cards = [
    ["Current Role", context.input.currentRole],
    ["Target AI Role", context.input.targetRole],
    ["Experience", `${context.input.yearsOfExperience} years`],
  ];
  const width = (options.contentWidth - 8) / 3;

  cards.forEach(([label, value], index) => {
    const x = options.left + index * (width + 4);
    doc.setFillColor(18, 23, 34);
    doc.roundedRect(x, y, width, 20, 2, 2, "F");
    doc.setTextColor(168, 179, 199);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(label, x + 4, y + 7);
    doc.setTextColor(244, 247, 251);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(value, x + 4, y + 15, { maxWidth: width - 8 });
  });

  return y + 30;
}

function generatePdf(context) {
  if (!window.jspdf?.jsPDF) {
    alert("PDF library is still loading. Please try again in a moment.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const options = {
    left: 14,
    right: 196,
    top: 18,
    pageBottom: 272,
    contentWidth: 182,
  };

  drawPdfHeader(doc, context, options);
  let y = drawPdfMeta(doc, context, 78, options);

  context.roadmap.months.forEach((month) => {
    const estimatedHeight = 34 + month.tasks.length * 6 + (month.upskilling_instructions || []).length * 9;
    if (y + estimatedHeight > options.pageBottom) {
      y = addPdfPage(doc, options);
    }

    doc.setFillColor(18, 23, 34);
    doc.roundedRect(options.left, y, options.contentWidth, 13, 2, 2, "F");
    doc.setTextColor(45, 212, 191);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(`MONTH ${month.month}`, options.left + 5, y + 8.5);
    doc.setTextColor(244, 247, 251);
    doc.setFontSize(11);
    doc.text(month.focus, options.left + 32, y + 8.5, { maxWidth: 140 });
    y += 20;

    doc.setTextColor(244, 247, 251);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Practice Tasks", options.left, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(168, 179, 199);
    doc.setFontSize(8.5);
    month.tasks.forEach((task) => {
      y = addWrappedText(doc, `- ${task}`, options.left + 2, y, options.contentWidth - 4, 5, options);
    });

    y += 3;
    doc.setTextColor(244, 247, 251);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Upskilling Instructions", options.left, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(202, 211, 225);
    doc.setFontSize(8.4);
    (month.upskilling_instructions || []).forEach((instruction, index) => {
      y = addWrappedText(doc, `${index + 1}. ${instruction}`, options.left + 2, y, options.contentWidth - 4, 4.8, options);
      y += 1;
    });

    y += 3;
    doc.setTextColor(244, 247, 251);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("Live References", options.left, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(45, 212, 191);
    doc.setFontSize(8);
    (month.references || []).forEach((reference) => {
      if (y > options.pageBottom) {
        y = addPdfPage(doc, options);
      }
      doc.textWithLink(`- ${reference.title}`, options.left + 2, y, { url: reference.url });
      doc.setTextColor(168, 179, 199);
      y = addWrappedText(doc, reference.url, options.left + 7, y + 4, options.contentWidth - 9, 4, options);
      doc.setTextColor(45, 212, 191);
      y += 1;
    });

    y += 8;
  });

  const filename = `${normalize(context.input.targetRole).replaceAll(" ", "-")}-roadmap.pdf`;
  doc.save(filename);
}

const ADDITIONAL_REFERENCES = {
  1: [
    { title: "Google MLCC: ML Prereqs", url: "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework" },
    { title: "Kaggle Learn: Python", url: "https://www.kaggle.com/learn/python" },
    { title: "W3Schools: Python Tutorial", url: "https://www.w3schools.com/python/" },
    { title: "MDN: JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { title: "FreeCodeCamp: Python Basics", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" }
  ],
  2: [
    { title: "Kaggle: Intro to ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
    { title: "Scikit-Learn: Getting Started", url: "https://scikit-learn.org/stable/getting_started.html" },
    { title: "Google MLCC: Representation", url: "https://developers.google.com/machine-learning/crash-course/representation" },
    { title: "Towards Data Science: ML Basics", url: "https://towardsdatascience.com/machine-learning/home" },
    { title: "StatQuest YouTube channel", url: "https://youtube.com/@statquest" }
  ],
  3: [
    { title: "fast.ai: Deep Learning Course", url: "https://course.fast.ai/" },
    { title: "PyTorch: Learning Tutorials", url: "https://docs.pytorch.org/tutorials/" },
    { title: "TensorFlow: Core Quickstart", url: "https://www.tensorflow.org/tutorials/quickstart/beginner" },
    { title: "3Blue1Brown: DL Series", url: "https://www.3blue1brown.com/topics/deep-learning" },
    { title: "Stanford: CS230 DL Cheatsheet", url: "https://stanford.edu/~shervine/teaching/cs-230/cheatsheet-deep-learning-tips-tricks" }
  ],
  4: [
    { title: "Hugging Face: NLP Course", url: "https://huggingface.co/learn/nlp-course" },
    { title: "OpenAI: Prompt Engineering", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    { title: "Cohere: LLM University", url: "https://cohere.com/llmu" },
    { title: "Google MLCC: Generative AI", url: "https://developers.google.com/machine-learning/crash-course/generative-ai" },
    { title: "DeepLearning.AI Short Courses", url: "https://www.deeplearning.ai/" }
  ],
  5: [
    { title: "Pinecone: Vector Database Learn", url: "https://www.pinecone.io/learn/" },
    { title: "Hugging Face: Embeddings Guide", url: "https://huggingface.co/blog/getting-started-with-embeddings" },
    { title: "OpenAI: Embeddings API Guide", url: "https://platform.openai.com/docs/guides/embeddings" },
    { title: "Weaviate: Vector Academy", url: "https://weaviate.io/developers/academy" },
    { title: "Cohere: Semantic Search", url: "https://txt.cohere.com/what-is-semantic-search/" }
  ],
  6: [
    { title: "LangChain: RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" },
    { title: "LlamaIndex: Starter Tutorial", url: "https://docs.llamaindex.ai/en/stable/getting_started/starter_example/" },
    { title: "MongoDB: Atlas Vector Search", url: "https://www.mongodb.com/products/platform/atlas-vector-search" },
    { title: "LangChain: Developer Academy", url: "https://academy.langchain.com/" },
    { title: "Pinecone: RAG Architecture Handbook", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
  ],
  7: [
    { title: "Arize AI: Phoenix Evaluation", url: "https://phoenix.arize.com/" },
    { title: "Hugging Face: Evaluate Library", url: "https://huggingface.co/docs/evaluate/index" },
    { title: "TruLens: Evaluation Tools", url: "https://www.trulens.org/" },
    { title: "Weights & Biases Track Guide", url: "https://docs.wandb.ai/" },
    { title: "Scikit-Learn: Metrics Scoring", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" }
  ],
  8: [
    { title: "Chip Huyen: ML Systems Design", url: "https://huyenchip.com/ml-interviews-book/" },
    { title: "GitHub: System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
    { title: "Google: Rules of Machine Learning", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
    { title: "Evidently AI: ML Monitoring Guide", url: "https://www.evidentlyai.com/" },
    { title: "AWS Architecture: AI/ML Center", url: "https://aws.amazon.com/architecture/ml/" }
  ],
  9: [
    { title: "Docker: Curriculum for Beginners", url: "https://docker-curriculum.com/" },
    { title: "Hugging Face: Spaces Deploy Guide", url: "https://huggingface.co/docs/hub/spaces" },
    { title: "Streamlit: Deploy App Tutorial", url: "https://docs.streamlit.io/deploy/streamlit-community-cloud" },
    { title: "FastAPI: Deployment Guide", url: "https://fastapi.tiangolo.com/deployment/" },
    { title: "DVC: GitHub Actions for ML", url: "https://dvc.org/doc/use-cases/ci-cd-for-machine-learning" }
  ],
  10: [
    { title: "Microsoft: AutoGen Framework", url: "https://microsoft.github.io/autogen/" },
    { title: "CrewAI: Multi-Agent Platform", url: "https://docs.crewai.com/" },
    { title: "OpenAI: Assistants API Reference", url: "https://platform.openai.com/docs/assistants/overview" },
    { title: "LangGraph: Agentic Workflows", url: "https://langchain-ai.github.io/langgraph/" },
    { title: "Microsoft: Semantic Kernel Guides", url: "https://learn.microsoft.com/en-us/semantic-kernel/" }
  ],
  11: [
    { title: "OWASP: Top 10 for LLM Apps", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
    { title: "NIST: AI Risk Management", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { title: "Lakera: Gandalf Prompt Injection", url: "https://gandalf.lakera.ai/" },
    { title: "Microsoft: Responsible AI Standards", url: "https://www.microsoft.com/en-us/ai/responsible-ai" },
    { title: "Google: AI Principles Practices", url: "https://ai.google/responsibility/principles/" }
  ],
  12: [
    { title: "Hugging Face: Spaces Portfolio", url: "https://huggingface.co/spaces" },
    { title: "GitHub: Profile README Guide", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme" },
    { title: "Google: Technical Writing Courses", url: "https://developers.google.com/tech-writing" },
    { title: "Kaggle: ML Competitions Portfolio", url: "https://www.kaggle.com/competitions" },
    { title: "Papers with Code: Trends Benchmarks", url: "https://paperswithcode.com/" }
  ]
};

function updateLivePreview() {
  const currentRole = elements.currentRole.value;
  const targetRole = elements.targetRole.value;
  const years = Number(elements.years.value);

  // Update slider display bubble
  const expVal = document.querySelector("#experience-val");
  if (expVal) {
    expVal.textContent = years;
  }

  if (!currentRole || !targetRole || state.roadmaps.length === 0) {
    return;
  }

  const match = findRoadmap(currentRole, targetRole, state.roadmaps);
  const difficulty = difficultyScore(years, match.roadmap);

  const previewDifficulty = document.querySelector("#preview-difficulty");
  const previewMeterFill = document.querySelector("#preview-meter-fill");
  const previewCredit = document.querySelector("#preview-credit");

  if (previewDifficulty) {
    previewDifficulty.textContent = `${difficulty.score}%`;
  }
  if (previewMeterFill) {
    previewMeterFill.style.width = `${difficulty.score}%`;
    
    // Smoothly color difficulty states
    if (difficulty.score >= 80) {
      previewMeterFill.style.background = 'var(--danger)';
    } else if (difficulty.score >= 55) {
      previewMeterFill.style.background = 'var(--accent-2)';
    } else {
      previewMeterFill.style.background = 'var(--accent)';
    }
  }
  if (previewCredit) {
    previewCredit.textContent = `${difficulty.experienceCredit} point experience credit (${difficulty.label})`;
  }
}

async function loadRoadmaps() {
  if (!window.ROADMAP_DATA?.roadmaps) {
    throw new Error("Roadmap data was not loaded.");
  }

  // Enrich roadmaps with additional 5 free links per month dynamically
  state.roadmaps = window.ROADMAP_DATA.roadmaps.map((roadmap) => {
    return {
      ...roadmap,
      months: roadmap.months.map((month) => {
        const additional = ADDITIONAL_REFERENCES[month.month] || [];
        return {
          ...month,
          references: [...(month.references || []), ...additional],
        };
      }),
    };
  });

  const { currentRoles, targetRoles } = availableOptions(state.roadmaps);
  populateSelect(elements.currentRole, currentRoles);
  populateSelect(elements.targetRole, targetRoles);

  // Setup live updates for the form panel
  updateLivePreview();
  elements.currentRole.addEventListener("change", updateLivePreview);
  elements.targetRole.addEventListener("change", updateLivePreview);
  elements.years.addEventListener("input", updateLivePreview);
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const context = buildContext(
    elements.currentRole.value,
    elements.targetRole.value,
    elements.years.value
  );
  state.currentContext = context;
  renderResult(context);
});

elements.downloadPdf.addEventListener("click", () => {
  if (state.currentContext) {
    generatePdf(state.currentContext);
  }
});

elements.newRoadmap.addEventListener("click", () => {
  elements.form.scrollIntoView({ behavior: "smooth", block: "center" });
});

loadRoadmaps().catch((error) => {
  elements.emptyState.innerHTML = `
    <div>
      <span>Data load failed</span>
      <strong>${escapeHtml(error.message)}</strong>
      <p>Refresh the page and make sure static/roadmaps-data.js is present next to the other site files.</p>
    </div>
  `;
});

