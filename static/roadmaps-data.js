window.ROADMAP_DATA = {
  "roadmaps": [
    {
      "current_role": "Software Engineer",
      "target_ai_role": "AI Engineer",
      "title": "Software Engineer to AI Engineer",
      "summary": "A production-focused 2026 path from application engineering into context-engineered LLM systems, MCP tool integrations, automated evals, and resilient AI deployment.",
      "base_difficulty": 68,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python AI Stack",
          "tasks": [
            "Set up reproducible Python environments with uv, ruff, and pyproject.toml",
            "Build typed data pipelines using Pydantic v2, Polars, and DuckDB",
            "Create a CLI that ingests, normalizes, and validates messy JSON/text corpora"
          ],
          "upskilling_instructions": [
            "Standardize on uv lockfiles and strict ruff linting from day one so every experiment is reproducible across machines.",
            "Model all input and output records with Pydantic v2 schemas to catch malformed fields, missing values, and encoding issues early.",
            "Benchmark Polars/DuckDB transforms on a realistic text dataset and log data-quality metrics before any model sees the data."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Applied Machine Learning",
          "tasks": [
            "Master supervised learning, train/test splits, and data leakage prevention",
            "Train scikit-learn baselines (logistic regression, gradient-boosted trees) on tabular and text features",
            "Compare classical ML baselines against zero-shot LLM classifiers on cost, latency, and F1"
          ],
          "upskilling_instructions": [
            "Always build a fast classical baseline first—many classification, routing, and scoring tasks do not need an LLM in production.",
            "Track precision, recall, calibration, and inference latency per slice so you know exactly where simple models fail.",
            "Document the cost-per-1k-predictions and latency tradeoffs between scikit-learn and hosted frontier models."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Deep Learning & Transformer Mechanics",
          "tasks": [
            "Work with PyTorch tensors, autograd, mixed precision, and GPU memory profiling",
            "Fine-tune a compact open-weight encoder/embedding model on domain data",
            "Inspect tokenization, context-window limits, and KV-cache memory scaling"
          ],
          "upskilling_instructions": [
            "Build intuition for why token count, sequence length, and batch size drive GPU memory and latency in Transformer inference.",
            "Run small fine-tuning experiments and log training/validation loss curves to spot overfitting and label noise.",
            "Keep a reference sheet of model parameter counts, context lengths, and quantization formats (BF16, FP8, INT4)."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 4,
          "focus": "LLM APIs, Reasoning Models & Structured Outputs",
          "tasks": [
            "Build resilient model clients with strict JSON Schema structured outputs and retries",
            "Implement model routing between fast/low-cost models and reasoning models with thinking budgets",
            "Use prompt caching and streaming responses to cut latency and token spend"
          ],
          "upskilling_instructions": [
            "Enforce strict schema validation on every model response and treat schema violations as typed application errors.",
            "Route routine extraction or classification to fast models while reserving reasoning models for multi-step planning or verification.",
            "Measure time-to-first-token (TTFT), total latency, and cached vs uncached token costs across providers."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Context Engineering & Hybrid Retrieval",
          "tasks": [
            "Implement hybrid search combining BM25 lexical matching, dense embeddings, and cross-encoder reranking",
            "Parse complex PDFs, tables, and charts using multimodal vision-language models",
            "Build citation-backed answers with chunk provenance and context-budget management"
          ],
          "upskilling_instructions": [
            "Compare pure vector search against hybrid BM25 + dense + reranker pipelines on exact-match terms, IDs, and domain jargon.",
            "Preserve document structure (headings, tables, page numbers) during chunking instead of blindly splitting by fixed character counts.",
            "Verify every generated claim against its retrieved source chunk and surface clickable citations in the response."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Production RAG & Memory Architectures",
          "tasks": [
            "Design an incremental indexing pipeline with document versioning and permission-aware filtering",
            "Add short-term conversation compaction and long-term user/episodic memory layers",
            "Evaluate retrieval recall@k, groundedness, and end-to-end answer accuracy"
          ],
          "upskilling_instructions": [
            "Enforce document-level access control (ACLs) inside the retrieval query itself so unauthorized chunks never enter the model context.",
            "Implement context compaction (summarizing older turns and pruning stale tool outputs) to prevent context rot in long sessions.",
            "Build an automated indexing test that verifies updates, deletes, and permission changes propagate cleanly."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evals, Observability & CI Gates",
          "tasks": [
            "Curate a versioned golden evaluation dataset covering happy paths, edge cases, and adversarial inputs",
            "Build automated evals combining deterministic assertions, code graders, and calibrated LLM-as-a-judge",
            "Instrument OpenTelemetry GenAI traces and block PR merges on eval regressions in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Treat evals like unit and integration tests: every bug report or failure mode in production should become a permanent eval case.",
            "Calibrate LLM-as-a-judge rubrics against human SME labels until inter-rater agreement is high before trusting automated scores.",
            "Log trace IDs, prompt versions, model IDs, token counts, and latency spans with OpenTelemetry GenAI conventions."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Context Protocol (MCP) & Tool-Using Agents",
          "tasks": [
            "Build and test custom MCP servers exposing resources, prompts, and typed tools",
            "Implement bounded tool-calling loops with human-in-the-loop approval for state-changing actions",
            "Evaluate agent trajectory efficiency, tool-selection accuracy, and task completion rate"
          ],
          "upskilling_instructions": [
            "Design tool schemas with clear descriptions, narrow scopes, and idempotency keys so agents cannot trigger unintended side effects.",
            "Enforce max-step budgets, timeouts, and explicit confirmation gates before any write, delete, or external API mutation.",
            "Record full agent trajectories (thoughts, tool calls, tool responses) to debug multi-step failures systematically."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 9,
          "focus": "AI System Architecture & Async Workflows",
          "tasks": [
            "Build FastAPI streaming and background-job services for long-running agentic tasks",
            "Add semantic/exact caching, rate-limiting, circuit breakers, and provider fallback routing",
            "Benchmark concurrency, queue backpressure, and graceful degradation under provider outages"
          ],
          "upskilling_instructions": [
            "Decouple slow reasoning or multi-step agent runs from HTTP request-response cycles using durable queues and status webhooks/SSE.",
            "Implement multi-provider fallbacks and circuit breakers so a single model API outage degrades gracefully rather than taking down your app.",
            "Track unit economics per user/tenant including retries, tool calls, and embedding/reranking overhead."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment, Containers & Self-Hosted Inference",
          "tasks": [
            "Containerize your AI API and worker services with multi-stage Docker builds",
            "Run and benchmark open-weight models locally or on GPU instances via vLLM/Ollama",
            "Set up automated staging deployments, health checks, and cost/latency alerting"
          ],
          "upskilling_instructions": [
            "Know when to use frontier hosted APIs versus self-hosted open-weight models for privacy, predictable cost, or fine-tuned specialization.",
            "Configure readiness probes, structured JSON logging, and per-endpoint token/cost alerts before opening traffic.",
            "Test rollback procedures for both application code and prompt/model configurations."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Security, Sandboxing & Governance",
          "tasks": [
            "Red-team your app against direct/indirect prompt injection, data exfiltration, and MCP tool poisoning",
            "Sandbox any agent-generated code or file operations using isolated containers",
            "Implement PII redaction, audit logging, and alignment with OWASP LLM/Agentic Top 10"
          ],
          "upskilling_instructions": [
            "Never trust retrieved documents, web pages, or external MCP tool outputs—treat all untrusted text as potential prompt injection vectors.",
            "Isolate code execution and shell tools in ephemeral sandboxes with no host filesystem or internal network access.",
            "Document data retention, model training opt-outs, and incident response playbooks for enterprise security reviews."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Production Capstone & AI Engineering Portfolio",
          "tasks": [
            "Ship an end-to-end production AI application featuring hybrid RAG, MCP tools, and live evals",
            "Publish architecture diagrams, eval scorecards, latency/cost benchmarks, and a post-mortem",
            "Practice system-design interviews covering context engineering, agent reliability, and scaling tradeoffs"
          ],
          "upskilling_instructions": [
            "Lead your portfolio write-up with measurable outcomes: eval accuracy before/after iteration, p95 latency, and cost per task.",
            "Include a live demo or reproducible repo with a one-command setup (`uv run`) and automated CI evals.",
            "Prepare concrete stories about debugging hallucinations, tightening retrieval, and preventing tool-use failures."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Frontend Engineer",
      "target_ai_role": "AI Engineer",
      "title": "Frontend Engineer to AI Engineer",
      "summary": "A TypeScript-first and full-stack 2026 roadmap turning frontend expertise into streaming AI interfaces, generative UI, MCP integrations, and evaluated LLM backends.",
      "base_difficulty": 66,
      "months": [
        {
          "month": 1,
          "focus": "TypeScript AI Foundations & Typed Schemas",
          "tasks": [
            "Build Node/TypeScript AI utilities with strict Zod schemas and async streaming",
            "Practice token counting, context budgeting, and structured JSON generation",
            "Create a CLI that processes and validates text/markdown files using LLM APIs"
          ],
          "upskilling_instructions": [
            "Use Zod schemas as the single source of truth for both LLM structured outputs and TypeScript UI props.",
            "Measure token usage and streaming chunk timing so you understand how backend latency affects perceived frontend speed.",
            "Keep API keys strictly on the server or edge runtime; never expose provider credentials in client bundles."
          ],
          "references": [
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Streaming & Generative UI Patterns",
          "tasks": [
            "Build streaming chat and structured-object UIs with Server-Sent Events (SSE) and Vercel AI SDK",
            "Design Generative UI components that render interactive cards, tables, and charts from tool outputs",
            "Handle partial JSON streaming, loading skeletons, and user-initiated stream cancellation cleanly"
          ],
          "upskilling_instructions": [
            "Design UI states for every phase of model execution: thinking, tool-calling, streaming partial output, error, and retry.",
            "Use AbortController and clean cancellation handlers so users can interrupt slow generations without corrupting client state.",
            "Separate raw model reasoning traces from user-facing summaries with collapsible, accessible UI controls."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Python Interop & Core ML Literacy",
          "tasks": [
            "Set up Python with uv to run embedding, evaluation, and data-processing scripts",
            "Learn supervised ML basics, embeddings, and cosine similarity with scikit-learn",
            "Compare classical classifiers against LLM calls for UI routing and intent detection"
          ],
          "upskilling_instructions": [
            "Even as a TypeScript-focused AI Engineer, reading Python notebooks and running eval/ML scripts with uv is essential.",
            "Use small classifiers or embeddings for instant UI autocomplete and intent routing instead of waiting on a full LLM call.",
            "Verify model behavior on edge-case inputs rather than assuming prompt tweaks fix systematic classification errors."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Browser & Edge AI with WebGPU",
          "tasks": [
            "Run small open-weight models and embeddings directly in the browser via WebGPU / Transformers.js",
            "Implement client-side semantic search, voice transcription, or offline summarization",
            "Benchmark WebGPU cold-start download size, memory limits, and fallback to cloud APIs"
          ],
          "upskilling_instructions": [
            "Use progressive loading and IndexedDB/Cache API caching so multi-megabyte model weights do not block initial page render.",
            "Design hybrid architectures that run privacy-sensitive or low-latency tasks on-device and escalate complex reasoning to server APIs.",
            "Test graceful degradation on devices without WebGPU support."
          ],
          "references": [
            {
              "title": "MDN WebGPU API",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Embeddings, Hybrid Search & Citation UI",
          "tasks": [
            "Build a server-side hybrid search pipeline (BM25 + pgvector/Qdrant + reranking)",
            "Render inline citations, source previews, and highlighted evidence spans in the UI",
            "Handle multi-format document uploads (PDFs, images, markdown) with multimodal parsing"
          ],
          "upskilling_instructions": [
            "Never show unverified citations: map every inline footnote to the exact chunk ID and page metadata returned by retrieval.",
            "Design split-pane or drawer source viewers so users can verify AI claims in one click.",
            "Measure retrieval precision separately from UI rendering to isolate where bad answers originate."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            }
          ]
        },
        {
          "month": 6,
          "focus": "MCP Clients & Agentic Frontend Workflows",
          "tasks": [
            "Build an MCP client in TypeScript that connects to local or remote MCP servers",
            "Implement human-in-the-loop (HITL) approval modals and undo/rollback flows for agent tool calls",
            "Support multi-step background agent runs with live progress indicators"
          ],
          "upskilling_instructions": [
            "Surface exact tool arguments (e.g., email recipient, SQL query, file path) in approval dialogs before executing side effects.",
            "Persist agent state and step history on the server so refreshing the browser tab resumes the live workflow seamlessly.",
            "Constrain tool execution permissions per user session."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Automated Evals & UI Regression Testing",
          "tasks": [
            "Build Promptfoo / Vitest eval suites for prompts, structured outputs, and tool selection",
            "Test streaming UI behavior and error recovery with automated end-to-end tests",
            "Add CI eval thresholds in GitHub Actions so prompt regressions fail pull requests"
          ],
          "upskilling_instructions": [
            "Separate deterministic UI/schema tests from probabilistic model-quality evals in your CI pipeline.",
            "Pin model snapshots in CI evals and track pass rates over time to catch silent provider behavior shifts.",
            "Include accessibility checks (keyboard navigation, ARIA live regions for streaming text) in your test suite."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Observability, Latency & Cost Engineering",
          "tasks": [
            "Instrument end-to-end traces from browser interaction to LLM API and vector DB spans",
            "Implement prompt caching, optimistic UI updates, and smart model routing",
            "Build an internal dashboard tracking TTFT, tokens per session, and user thumbs-up/down feedback"
          ],
          "upskilling_instructions": [
            "Correlate frontend interaction IDs with backend OpenTelemetry trace IDs so user feedback links directly to the exact prompt and context.",
            "Use prompt caching for stable system instructions and large shared context prefixes to cut both latency and cost.",
            "Optimize perceived latency with immediate optimistic UI feedback and progressive rendering."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Multimodal & Voice Interfaces",
          "tasks": [
            "Build image/screenshot input flows and real-time audio/voice streaming interfaces",
            "Handle turn-taking, interruption (barge-in), and transcription error correction in UI",
            "Test multimodal prompts across diverse screen sizes, lighting, and noisy audio"
          ],
          "upskilling_instructions": [
            "Always provide a text fallback and transcript view alongside voice or camera inputs for accessibility and noisy environments.",
            "Compress and resize images client-side before upload to reduce bandwidth and vision-token cost.",
            "Design clear visual indicators for microphone state, processing, and speaking."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Full-Stack Deployment & Edge Scaling",
          "tasks": [
            "Deploy full-stack AI apps with streaming-capable edge/container infrastructure",
            "Configure rate limiting, per-user token quotas, and abuse protection at the API gateway",
            "Set up staging environments with synthetic traffic and cost alarms"
          ],
          "upskilling_instructions": [
            "Verify your hosting/proxy layer does not buffer SSE streams—configure timeouts and flush headers for long-running generations.",
            "Enforce per-user and per-IP token budgets before requests reach expensive reasoning models.",
            "Run load tests simulating concurrent streaming connections."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Frontend & Agentic AI Security",
          "tasks": [
            "Prevent XSS and markdown/HTML injection when rendering untrusted LLM outputs",
            "Defend against indirect prompt injection via user-uploaded files or fetched web content",
            "Implement strict CSP headers, PII redaction, and safe tool-execution boundaries"
          ],
          "upskilling_instructions": [
            "Sanitize all LLM-generated markdown, links, and SVG/HTML before rendering—treat model output as untrusted user input.",
            "Never auto-execute links or client-side actions returned by a model without explicit user confirmation.",
            "Review your app against the OWASP Top 10 for LLM Applications."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Full-Stack AI Capstone & Portfolio",
          "tasks": [
            "Launch a polished full-stack AI product featuring Generative UI, hybrid RAG, and MCP tools",
            "Publish a technical case study covering UX latency optimizations, eval metrics, and security controls",
            "Prepare for AI Engineer interviews spanning frontend streaming, context engineering, and system design"
          ],
          "upskilling_instructions": [
            "Showcase live interactive UX alongside hard engineering numbers: TTFT, eval pass rate, and cost per session.",
            "Document why you chose specific models, caching strategies, and human-in-the-loop checkpoints.",
            "Record a crisp 2-minute walkthrough demonstrating edge-case handling and source citations."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "AI Engineer",
      "title": "Data Analyst to AI Engineer",
      "summary": "A structured 2026 transition from SQL, BI, and analytics into Python software engineering, production RAG, automated evals, and AI services.",
      "base_difficulty": 76,
      "months": [
        {
          "month": 1,
          "focus": "Software Engineering Foundations in Python",
          "tasks": [
            "Transition from ad-hoc notebooks to modular Python packages managed with uv and ruff",
            "Master Git workflows, virtual environments, type hints, and Pydantic v2 models",
            "Write pytest unit tests for data-cleaning and SQL-to-Python transformation modules"
          ],
          "upskilling_instructions": [
            "Break habit of keeping production logic inside notebooks—extract reusable functions into tested Python modules.",
            "Use Git feature branches and meaningful commit messages for every pipeline or prompt change.",
            "Add type annotations and Pydantic validation so data-shape bugs fail loudly during development."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Modern Data Engineering & APIs",
          "tasks": [
            "Build fast analytical and text-processing pipelines with Polars and DuckDB",
            "Create REST and streaming endpoints using FastAPI with request/response validation",
            "Handle async I/O, retries, pagination, and structured logging in Python services"
          ],
          "upskilling_instructions": [
            "Leverage your SQL strengths in DuckDB to process millions of text/log rows locally before sending subsets to LLMs.",
            "Test your FastAPI endpoints with pytest and FastAPI's TestClient, including malformed payloads and timeouts.",
            "Log structured JSON events with latency and row counts for every API call."
          ],
          "references": [
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Applied Machine Learning",
          "tasks": [
            "Train classification, regression, and forecasting models in scikit-learn",
            "Prevent target leakage with proper time-based and group-based cross-validation",
            "Build an error-analysis report slicing metrics across business segments"
          ],
          "upskilling_instructions": [
            "Use your analytics instincts to audit datasets for survivorship bias, label leakage, and missing-not-at-random values.",
            "Compare simple interpretable models against complex ones and document feature importance.",
            "Save preprocessing pipelines alongside trained weights so inference matches training."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Production Python & Async Systems",
          "tasks": [
            "Write concurrent batch-processing scripts using asyncio and bounded semaphores",
            "Implement idempotency, checkpointing, and dead-letter queues for failed records",
            "Package your data-and-API service cleanly in a Docker container"
          ],
          "upskilling_instructions": [
            "When calling LLM APIs over thousands of rows, always use bounded concurrency and exponential backoff for rate limits.",
            "Checkpoint intermediate results to Parquet/DuckDB so long batch jobs resume cleanly after failures.",
            "Verify your Docker container runs identically locally and in CI."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM APIs & Structured Data Extraction",
          "tasks": [
            "Use LLMs with strict JSON Schema outputs to extract entities and categories from unstructured text",
            "Combine SQL/DuckDB analytics with LLM-extracted tags to answer previously unqueryable questions",
            "Compare prompt strategies and reasoning models on accuracy and cost per 1,000 rows"
          ],
          "upskilling_instructions": [
            "Validate every extracted field with Pydantic and route low-confidence or malformed rows to a review queue.",
            "Test prompts on a stratified sample of messy real-world records, not just clean examples.",
            "Use batch APIs or prompt caching when processing large analytical backfills."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings, Hybrid Search & Text-to-SQL",
          "tasks": [
            "Build a hybrid search index (BM25 + dense embeddings) over company docs or tickets",
            "Design a safe Text-to-SQL / semantic-layer assistant backed by DuckDB or Postgres",
            "Enforce read-only SQL execution, schema allowlists, and query timeouts"
          ],
          "upskilling_instructions": [
            "In Text-to-SQL systems, provide curated table schemas, join keys, and example queries—never dump 500 raw tables into the prompt.",
            "Run generated SQL in a read-only sandbox with row limits and explain-plan checks before execution.",
            "Measure SQL execution accuracy and semantic correctness against analyst-written ground truth."
          ],
          "references": [
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluation & Metric Rigor",
          "tasks": [
            "Apply your analytics background to design statistically sound LLM evaluation suites",
            "Track faithfulness, relevance, SQL correctness, latency, and cost across prompt versions",
            "Run automated evals in CI with Promptfoo or Langfuse before deploying changes"
          ],
          "upskilling_instructions": [
            "Compute confidence intervals and slice metrics by query type so overall averages do not hide critical segment failures.",
            "Calibrate automated LLM judges against human analyst ratings.",
            "Build a clear eval scorecard stakeholders can read at a glance."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "System Reliability & Caching",
          "tasks": [
            "Add semantic/exact response caching and fallback model routing to your FastAPI service",
            "Instrument OpenTelemetry traces and monitor token spend, error rates, and p95 latency",
            "Write runbooks for provider outages, schema drift, and embedding re-indexing"
          ],
          "upskilling_instructions": [
            "Monitor input data drift and query distribution shifts just as you would monitor BI pipeline SLAs.",
            "Set hard daily spend caps and anomaly alerts on LLM API keys.",
            "Test graceful fallback responses when upstream model APIs time out."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Deep Learning & Embedding Fine-Tuning",
          "tasks": [
            "Learn PyTorch fundamentals and how Transformer embeddings work",
            "Fine-tune a small embedding or reranker model on domain-specific query-document pairs",
            "Measure retrieval lift before and after domain adaptation"
          ],
          "upskilling_instructions": [
            "You do not need to pretrain models from scratch—focus on how fine-tuning small encoders/rerankers boosts retrieval accuracy.",
            "Use hard negatives from your own search logs to make fine-tuned embeddings dramatically sharper.",
            "Document the compute cost and retrieval NDCG/MRR improvement."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "MCP Tools & Analytical Agents",
          "tasks": [
            "Build an MCP server exposing curated DuckDB/warehouse metrics and semantic definitions",
            "Create a bounded analyst agent that queries data, runs Python checks, and cites sources",
            "Add approval gates and read-only guardrails for every tool invocation"
          ],
          "upskilling_instructions": [
            "Expose high-level semantic metric tools (e.g., `get_monthly_retention`) alongside raw read-only SQL to prevent inconsistent metric definitions.",
            "Require the agent to show the exact SQL and row counts behind every chart or insight.",
            "Test agent trajectories on ambiguous business questions."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Security, Privacy & Data Governance",
          "tasks": [
            "Implement PII masking and column-level access controls before data reaches external LLM APIs",
            "Test your AI analyst system against prompt injection and unauthorized data-exfiltration attempts",
            "Document compliance with company data policies and NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Never send raw customer PII or confidential financial rows to third-party APIs without approved enterprise DPAs and masking.",
            "Enforce row-level and column-level security in the database layer, not in the system prompt.",
            "Audit query logs for suspicious patterns or injection attempts."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Production AI Analytics System",
          "tasks": [
            "Ship an end-to-end AI analytics/RAG application with FastAPI, DuckDB/pgvector, MCP, and CI evals",
            "Publish a case study highlighting business impact, eval methodology, and cost controls",
            "Prepare for AI Engineer interviews emphasizing data rigor, evals, and production Python"
          ],
          "upskilling_instructions": [
            "Frame your analytics background as a superpower: most AI teams struggle with data quality and evaluation, where you excel.",
            "Demonstrate clean code, automated tests, and measurable accuracy improvements over a naive baseline.",
            "Practice explaining architecture and data-pipeline tradeoffs clearly."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "AI Engineer",
      "title": "Product Manager to AI Engineer",
      "summary": "An intensive 2026 transition from product strategy into hands-on Python engineering, LLM/RAG architecture, MCP agents, and production deployment.",
      "base_difficulty": 84,
      "months": [
        {
          "month": 1,
          "focus": "Python & Developer Tooling Foundations",
          "tasks": [
            "Learn core Python syntax, data structures, functions, and error handling using uv",
            "Use Git, GitHub, and terminal workflows daily for versioned code",
            "Build a small Python CLI that reads, cleans, and summarizes CSV/JSON files"
          ],
          "upskilling_instructions": [
            "Write code every single day and commit small working increments to Git rather than trying to read everything passively.",
            "Use AI coding assistants to explain errors and write tests, but make sure you can trace and debug every line yourself.",
            "Verify your CLI with pytest on edge cases like empty files and malformed rows."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Software Practices & Data Manipulation",
          "tasks": [
            "Write modular Python code with type hints, Pydantic v2 models, and ruff linting",
            "Process structured datasets using Polars and DuckDB SQL queries",
            "Build unit tests and practice debugging with logs and breakpoints"
          ],
          "upskilling_instructions": [
            "Focus on clean data contracts: define what valid input and output look like before writing business logic.",
            "Practice reading stack traces methodically to isolate root causes.",
            "Write small, single-purpose functions that are easy to test."
          ],
          "references": [
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Web APIs & Backend Services",
          "tasks": [
            "Understand HTTP, JSON, REST, SSE streaming, and authentication basics",
            "Build a FastAPI service that validates requests and calls external APIs cleanly",
            "Add structured logging, timeouts, and error handling to your endpoints"
          ],
          "upskilling_instructions": [
            "Trace the full lifecycle of a request from client to FastAPI route to external model API and back.",
            "Test failure scenarios (429 rate limits, 500 errors, timeouts) and return clear client responses.",
            "Keep secrets in environment variables, never hardcoded in source files."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Machine Learning Fundamentals",
          "tasks": [
            "Learn supervised vs unsupervised learning, train/test splits, and evaluation metrics",
            "Train simple scikit-learn models to understand features, overfitting, and baselines",
            "Analyze precision, recall, and confusion matrices on real datasets"
          ],
          "upskilling_instructions": [
            "Understanding classical ML prevents you from using expensive LLMs for problems a tiny classifier solves in 2ms.",
            "Focus on why models fail: bad data, leakage, class imbalance, or distribution shift.",
            "Document clear metric definitions for every experiment."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM APIs & Context Engineering",
          "tasks": [
            "Build applications using structured outputs, system prompts, and model routing",
            "Compare standard models vs reasoning models on latency, cost, and quality",
            "Implement prompt versioning and golden test cases"
          ],
          "upskilling_instructions": [
            "Treat prompts as versioned code artifacts, not ad-hoc strings scattered across files.",
            "Test structured outputs with strict schemas and automated retries on validation failure.",
            "Measure token cost and latency per user workflow."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings & RAG Systems",
          "tasks": [
            "Learn how vector embeddings and hybrid search (BM25 + dense + reranking) work",
            "Build a RAG pipeline over product docs or support tickets using pgvector or Qdrant",
            "Add source citations and measure retrieval quality separately from answer generation"
          ],
          "upskilling_instructions": [
            "Debug bad RAG answers by inspecting the retrieved chunks first—80% of RAG failures are retrieval or chunking problems.",
            "Preserve document headings and metadata during ingestion.",
            "Compare answers with and without reranking."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluation & Observability",
          "tasks": [
            "Build an evaluation suite with golden datasets and LLM-as-a-judge rubrics",
            "Instrument traces, token usage, and latency with Langfuse and OpenTelemetry",
            "Set up automated eval checks in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Use your PM skill of defining clear acceptance criteria to write sharp, unambiguous eval rubrics.",
            "Review failed eval traces weekly and categorize root causes.",
            "Never ship a prompt or model change without comparing against your baseline eval."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "MCP & Agentic Workflows",
          "tasks": [
            "Build a simple MCP server and connect it to an LLM agent with strict tool schemas",
            "Implement human-in-the-loop confirmation steps and step limits",
            "Evaluate agent task completion rate and failure modes"
          ],
          "upskilling_instructions": [
            "Start with deterministic workflows and add autonomous agent loops only where dynamic planning is genuinely needed.",
            "Require explicit user approval before any irreversible external action.",
            "Log every tool call and return value for debugging."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 9,
          "focus": "System Reliability & Cost Engineering",
          "tasks": [
            "Add caching, rate limiting, and provider fallbacks to your FastAPI AI backend",
            "Handle async background jobs for long-running AI workflows",
            "Model unit economics: cost per active user and gross margin impact"
          ],
          "upskilling_instructions": [
            "Design graceful fallbacks so users get a helpful degraded experience if a model API is slow or down.",
            "Use prompt caching and smaller models for classification/routing to keep unit costs sustainable.",
            "Load-test your API endpoints before sharing demos."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment & Cloud Operations",
          "tasks": [
            "Containerize your AI application with Docker and deploy to a cloud platform",
            "Configure environment secrets, health checks, and CI/CD pipelines",
            "Monitor production logs, error rates, and daily token spend"
          ],
          "upskilling_instructions": [
            "Automate builds and deployments via GitHub Actions so shipping fixes is fast and repeatable.",
            "Verify health checks and rollback procedures work in practice.",
            "Set billing alerts on all model provider accounts."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Security, Safety & Governance",
          "tasks": [
            "Test your application against prompt injection and data-leakage scenarios",
            "Add input/output guardrails, PII redaction, and safe tool permissions",
            "Map your system's risks to OWASP LLM Top 10 and NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Ensure authorization happens in backend code before data is ever placed into a prompt.",
            "Sandbox any code or file-system tools.",
            "Write a clear AI safety & data-handling brief for your project."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Engineering Capstone & Career Transition",
          "tasks": [
            "Ship a complete, deployed AI product with clean code, tests, evals, and observability",
            "Write an engineering architecture doc explaining technical tradeoffs you made",
            "Practice coding and AI system-design interviews to prove hands-on execution"
          ],
          "upskilling_instructions": [
            "Your differentiator is combining product judgment with real, tested, deployed engineering code.",
            "Be ready to walk through your codebase, eval results, and debugging stories line by line.",
            "Target hybrid roles like Forward Deployed AI Engineer or Founding AI Engineer alongside core AI Engineer roles."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "AI Engineer",
      "title": "UX Designer to AI Engineer",
      "summary": "A 2026 pathway from UX design into full-stack TypeScript/Python AI engineering, generative UI, streaming interactions, RAG, and evaluated AI products.",
      "base_difficulty": 84,
      "months": [
        {
          "month": 1,
          "focus": "Programming Foundations in TypeScript & Python",
          "tasks": [
            "Learn TypeScript fundamentals, async/await, and Zod schemas for web AI apps",
            "Set up Python with uv for running data, embedding, and evaluation scripts",
            "Build a small interactive script or CLI using versioned Git commits"
          ],
          "upskilling_instructions": [
            "Pair your visual intuition with code by building small, working interactive prototypes every week.",
            "Use Git from day one so you can experiment freely and roll back broken changes.",
            "Learn to read console errors and API payloads methodically."
          ],
          "references": [
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Web Foundations & Streaming UI",
          "tasks": [
            "Build accessible HTML/CSS/TypeScript interfaces that handle streaming text and loading states",
            "Use the Vercel AI SDK to connect a frontend interface to an LLM backend",
            "Design clear states for thinking, tool execution, cancellation, and error recovery"
          ],
          "upskilling_instructions": [
            "Design for latency from the start: streaming tokens, skeleton states, and optimistic UI make AI feel twice as fast.",
            "Ensure keyboard navigation and screen-reader announcements work smoothly during live streaming.",
            "Test how your UI behaves when a stream drops mid-sentence."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            },
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "APIs, Backends & Structured Outputs",
          "tasks": [
            "Build a FastAPI or Node/TypeScript backend endpoint with schema validation",
            "Use LLM structured outputs to drive rich Generative UI components (cards, forms, tables)",
            "Implement server-side secret management, rate limiting, and retries"
          ],
          "upskilling_instructions": [
            "Validate every model response with Zod or Pydantic before rendering dynamic UI components.",
            "Separate presentation logic from prompt templates so you can iterate on both independently.",
            "Log request latency and token usage on the server."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Machine Learning & Embedding Intuition",
          "tasks": [
            "Learn core ML concepts: classification, embeddings, similarity, and evaluation metrics",
            "Explore scikit-learn and vector embeddings to see how semantic search works",
            "Build a visual explorer showing how text chunks cluster by embedding similarity"
          ],
          "upskilling_instructions": [
            "Understanding embeddings helps you design better search, clustering, and recommendation experiences.",
            "Learn why models are probabilistic and why UX must handle uncertainty gracefully.",
            "Document common failure modes like false positives and low-confidence matches."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Multimodal, Voice & Browser AI",
          "tasks": [
            "Build image/sketch-to-code or visual QA workflows using multimodal vision models",
            "Experiment with client-side WebGPU / Transformers.js for instant local AI interactions",
            "Prototype voice or real-time multimodal input with clear feedback states"
          ],
          "upskilling_instructions": [
            "Use your design eye to craft seamless multimodal inputs (drag-and-drop, paste, annotated screenshots).",
            "Provide visible confidence cues and easy manual correction whenever AI interprets visual or audio input.",
            "Benchmark local WebGPU inference vs cloud API latency."
          ],
          "references": [
            {
              "title": "MDN WebGPU API",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 6,
          "focus": "RAG Systems & Trustworthy Citation UX",
          "tasks": [
            "Build a hybrid search and RAG backend over a real knowledge base",
            "Design and implement inline citations, source drawers, and confidence indicators",
            "Measure retrieval quality and verify that citations accurately support generated claims"
          ],
          "upskilling_instructions": [
            "Trust is a UX and engineering problem together: users trust AI when they can verify sources in one click.",
            "Test how your UI handles 'I don't know / not in sources' responses cleanly.",
            "Inspect retrieved chunks whenever an answer looks wrong."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluations & Human-Centered Quality",
          "tasks": [
            "Create golden test sets based on real user tasks and edge cases",
            "Run automated evals with Promptfoo or Langfuse and correlate scores with user satisfaction",
            "Wire in-app user feedback (thumbs, edits, regenerations) directly into eval datasets"
          ],
          "upskilling_instructions": [
            "Turn qualitative usability-test findings into automated eval assertions so fixes never regress.",
            "Track edit distance (how much users edit AI drafts) as a real-world quality signal.",
            "Run evals in CI before merging prompt or UI changes."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 8,
          "focus": "MCP Tools & Human-in-the-Loop Agents",
          "tasks": [
            "Connect an AI interface to MCP tools with clear user-approval checkpoints",
            "Build undo/rollback, step-by-step progress views, and editable action previews",
            "Test multi-step agent workflows with real users to spot trust and control gaps"
          ],
          "upskilling_instructions": [
            "Never let an agent perform a destructive or external action silently—preview the exact payload and ask for confirmation.",
            "Design resumable UI states for long-running background agents.",
            "Measure both task completion rate and user sense of control."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Observability & Performance Optimization",
          "tasks": [
            "Instrument end-to-end traces with OpenTelemetry and Langfuse",
            "Optimize perceived and actual latency via prompt caching and smart model routing",
            "Profile frontend bundle size, streaming render performance, and API costs"
          ],
          "upskilling_instructions": [
            "Use fast models for instant UI helpers and reserve slower reasoning models for explicit deep-work actions.",
            "Avoid re-rendering entire markdown trees on every streamed token.",
            "Track cost per completed user task."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment & Production Shipping",
          "tasks": [
            "Containerize your backend with Docker and deploy your full-stack AI app",
            "Set up CI/CD with GitHub Actions, environment secrets, and uptime checks",
            "Monitor production errors, streaming dropouts, and token budgets"
          ],
          "upskilling_instructions": [
            "Verify SSE streaming works cleanly behind your production reverse proxy or CDN.",
            "Set hard rate limits and spend alerts before sharing your app publicly.",
            "Test mobile and low-bandwidth behavior in production."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Security, Accessibility & Responsible Design",
          "tasks": [
            "Sanitize AI-generated markdown/HTML to prevent XSS and unsafe link execution",
            "Test against prompt injection and ensure PII is protected",
            "Audit your AI product for accessibility, bias, and transparent AI disclosure"
          ],
          "upskilling_instructions": [
            "Make AI capabilities and limitations obvious in the interface without overwhelming the user.",
            "Verify screen readers, keyboard shortcuts, and high-contrast modes work across all AI components.",
            "Follow OWASP LLM Top 10 and NIST AI RMF guidance."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "MDN Web Docs",
              "url": "https://developer.mozilla.org/en-US/docs/Web"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Design-Engineered AI Capstone",
          "tasks": [
            "Launch a flagship AI application that showcases both refined UX and solid engineering",
            "Publish a case study with architecture diagrams, eval metrics, and usability insights",
            "Prepare for AI Engineer and Design Engineer interviews with live code walkthroughs"
          ],
          "upskilling_instructions": [
            "Your rare combination of UX craft and full-stack AI engineering is in high demand for AI-native products.",
            "Demonstrate clean TypeScript/Python code, automated evals, and thoughtful human-in-the-loop patterns.",
            "Practice explaining backend architecture, retrieval, and latency tradeoffs clearly."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Engineer",
      "title": "Default Path to AI Engineer",
      "summary": "A comprehensive 2026 baseline path into AI engineering covering modern Python, applied ML, context engineering, MCP agents, evals, and production deployment.",
      "base_difficulty": 80,
      "months": [
        {
          "month": 1,
          "focus": "Python & Git Engineering Foundations",
          "tasks": [
            "Set up modern Python workflows with uv, ruff, and virtual environments",
            "Learn Git branching, pull requests, and pytest unit testing",
            "Build a Python CLI that cleans, validates, and summarizes structured text data"
          ],
          "upskilling_instructions": [
            "Build strong habits early: modular functions, type hints, and automated tests for every script.",
            "Commit small, working changes to Git daily to build fluency with version control.",
            "Use Pydantic v2 to validate data schemas rather than ad-hoc dictionary checks."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "APIs, Data Pipelines & Async Python",
          "tasks": [
            "Build REST and streaming endpoints with FastAPI and Pydantic v2",
            "Process tabular and text datasets efficiently using Polars and DuckDB",
            "Implement async HTTP clients with retries, timeouts, and structured logging"
          ],
          "upskilling_instructions": [
            "Understand HTTP status codes, JSON serialization, and async I/O before calling LLM APIs at scale.",
            "Write FastAPI integration tests covering valid, invalid, and timeout scenarios.",
            "Keep API keys in environment variables and never commit secrets."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Applied Machine Learning",
          "tasks": [
            "Master supervised learning, train/validation/test splits, and leakage prevention",
            "Train scikit-learn baselines and inspect precision, recall, F1, and calibration",
            "Compare classical ML models against LLM zero-shot performance"
          ],
          "upskilling_instructions": [
            "Always benchmark a fast classical baseline before reaching for a heavyweight LLM.",
            "Analyze error slices to understand whether failures come from noisy labels, missing features, or class imbalance.",
            "Save and version preprocessing steps alongside model artifacts."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning & Transformer Basics",
          "tasks": [
            "Learn tensors, backpropagation, and training loops in PyTorch",
            "Explore open-weight models on Hugging Face, tokenization, and quantization",
            "Fine-tune a small encoder or classifier on a domain dataset"
          ],
          "upskilling_instructions": [
            "Focus on practical Transformer mechanics: context windows, token limits, and memory/latency tradeoffs.",
            "Plot training and validation curves to diagnose overfitting.",
            "Understand how quantization (FP8, INT4) reduces VRAM requirements."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM APIs, Reasoning & Structured Outputs",
          "tasks": [
            "Build reliable LLM wrappers with strict JSON Schema structured outputs",
            "Route tasks between fast models and reasoning models with thinking budgets",
            "Use prompt caching and streaming to optimize latency and token cost"
          ],
          "upskilling_instructions": [
            "Treat prompts as versioned code and validate every structured output against a strict schema.",
            "Measure time-to-first-token (TTFT) and cost per 1,000 requests across model tiers.",
            "Design clear fallback behavior when a model returns an invalid or refused response."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings & Hybrid RAG Systems",
          "tasks": [
            "Build a hybrid search pipeline (BM25 + dense embeddings + reranking) with pgvector or Qdrant",
            "Parse PDFs, tables, and markdown while preserving document hierarchy and metadata",
            "Generate grounded answers with verifiable inline citations"
          ],
          "upskilling_instructions": [
            "Debug RAG failures by inspecting retrieved chunks first before tweaking prompts.",
            "Test chunking strategies on real messy documents with tables and headers.",
            "Enforce user/tenant permission filters inside the retrieval query."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluations & Observability",
          "tasks": [
            "Curate a golden eval dataset with normal cases, edge cases, and adversarial prompts",
            "Build automated evals using deterministic checks and calibrated LLM-as-a-judge",
            "Instrument OpenTelemetry GenAI traces and Langfuse dashboards"
          ],
          "upskilling_instructions": [
            "Run evals automatically in CI on every prompt, retrieval, or model change.",
            "Turn every production bug into a permanent regression test case.",
            "Track quality, latency, and cost together so improvements on one metric do not silently break another."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "MCP & Tool-Using Agents",
          "tasks": [
            "Build custom MCP servers exposing typed tools and context resources",
            "Implement bounded agent loops with step budgets and human approval for write actions",
            "Evaluate agent trajectories, tool-call accuracy, and task completion rate"
          ],
          "upskilling_instructions": [
            "Write clear, narrow tool schemas with strict parameter validation and idempotency.",
            "Start with deterministic workflows and only add open-ended agent loops where needed.",
            "Log every tool input and output for post-run debugging."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 9,
          "focus": "AI System Reliability & Architecture",
          "tasks": [
            "Design async background workers for long-running reasoning and agent jobs",
            "Add caching, rate limiting, circuit breakers, and multi-provider fallbacks",
            "Load-test your AI service and model unit economics at scale"
          ],
          "upskilling_instructions": [
            "Never block HTTP request threads on multi-step agent executions—use queues and streaming status updates.",
            "Test how your service behaves when an upstream model API returns 429 or 503 errors.",
            "Monitor per-feature token spend and set hard budget alerts."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment & Operations",
          "tasks": [
            "Containerize your AI application with multi-stage Docker builds",
            "Automate testing, evals, and deployment using GitHub Actions",
            "Configure production health checks, structured logs, and cost/latency alerts"
          ],
          "upskilling_instructions": [
            "Keep staging and production configurations identical via environment variables and Docker.",
            "Practice rolling back a bad prompt or model version quickly.",
            "Benchmark self-hosted open-weight inference vs managed APIs."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Security, Sandboxing & Responsible AI",
          "tasks": [
            "Red-team your app against prompt injection, tool poisoning, and data leakage",
            "Sandbox agent code execution and apply PII scrubbing before external API calls",
            "Audit your system against OWASP LLM Top 10 and NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Treat all retrieved external text and tool outputs as untrusted input.",
            "Enforce authorization in application and database code, never solely in system prompts.",
            "Document data retention, privacy boundaries, and incident response steps."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone & Job Readiness",
          "tasks": [
            "Ship a complete, deployed AI product with hybrid RAG, MCP tools, and CI evals",
            "Write a thorough technical case study covering architecture, evals, and cost tradeoffs",
            "Prepare for technical and system-design interviews with live demos"
          ],
          "upskilling_instructions": [
            "Lead with concrete metrics: retrieval precision, eval pass rate, p95 latency, and cost per task.",
            "Make your repository effortless to inspect and run (`uv run` / Docker Compose).",
            "Practice explaining failure modes you found and how you engineered around them."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Model Context Protocol (MCP) Docs",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Software Engineer",
      "target_ai_role": "ML Engineer",
      "title": "Software Engineer to ML Engineer",
      "summary": "A 2026 engineering path from software development into statistical modeling, PyTorch 2.x, post-training (LoRA/DPO/GRPO), high-throughput vLLM serving, and production ML pipelines.",
      "base_difficulty": 74,
      "months": [
        {
          "month": 1,
          "focus": "Math & Modern Python Data Stack",
          "tasks": [
            "Refresh linear algebra, probability, and calculus intuition for optimization",
            "Master NumPy, Polars, and DuckDB inside uv-managed Python workspaces",
            "Build deterministic, tested feature-extraction pipelines with pytest"
          ],
          "upskilling_instructions": [
            "Focus on matrix shapes, broadcasting, gradients, and conditional probability as working engineering tools.",
            "Use Polars and DuckDB for fast, reproducible dataset transforms instead of slow row-by-row Python loops.",
            "Write unit tests asserting schema invariants, null-handling, and zero NaN/Inf propagation."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Supervised Learning & Tabular Baselines",
          "tasks": [
            "Build end-to-end scikit-learn and XGBoost pipelines with proper cross-validation",
            "Prevent data leakage across time-series, user-grouped, and target-encoded features",
            "Optimize threshold selection against real business cost/benefit matrices"
          ],
          "upskilling_instructions": [
            "Always split data by time or entity group before computing any scaling, imputation, or target statistics.",
            "Log precision-recall curves, calibration plots, and confusion matrices per slice.",
            "Package preprocessing and model weights into a single scikit-learn Pipeline artifact."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Feature Engineering & Data Quality",
          "tasks": [
            "Design domain-specific temporal, aggregation, and text/embedding features",
            "Automate schema validation and distribution assertions before training runs",
            "Run systematic ablation studies to drop noisy or redundant features"
          ],
          "upskilling_instructions": [
            "Measure feature importance and permutation impact on a held-out validation set before keeping any new feature.",
            "Verify online-offline feature parity so training features match what is available at inference time.",
            "Document data lineage and known upstream collection biases."
          ],
          "references": [
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning with PyTorch 2.x",
          "tasks": [
            "Implement custom Datasets, DataLoaders, training loops, and mixed-precision (BF16) in PyTorch",
            "Profile GPU utilization and accelerate models with torch.compile",
            "Diagnose vanishing/exploding gradients, overfitting, and learning-rate schedules"
          ],
          "upskilling_instructions": [
            "Verify your training loop on a tiny 32-sample overfit test first to catch label or loss bugs immediately.",
            "Use PyTorch Profiler to spot data-loading bottlenecks before blaming GPU compute speed.",
            "Track gradient norms, validation loss, and throughput (samples/sec) on every run."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Transformers, Fine-Tuning & Embeddings",
          "tasks": [
            "Fine-tune open-weight encoders and sequence models using Hugging Face Transformers",
            "Train custom domain embedding or reranker models with contrastive loss",
            "Evaluate fine-tuned models against zero-shot frontier baselines on accuracy and latency"
          ],
          "upskilling_instructions": [
            "Compare zero-shot API performance against a compact fine-tuned model—often a 100M-1B parameter model wins on cost and speed.",
            "Inspect tokenization edge cases (numbers, code, domain jargon) before training.",
            "Keep a frozen test set completely untouched until final model comparison."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Post-Training: LoRA, DPO & Reinforcement Fine-Tuning",
          "tasks": [
            "Fine-tune open-weight LLMs efficiently using QLoRA/LoRA and TRL",
            "Align model behavior with Direct Preference Optimization (DPO) and verifiable-reward RL (GRPO)",
            "Generate, filter, and deduplicate synthetic training data without causing model collapse"
          ],
          "upskilling_instructions": [
            "Start with high-quality curated SFT examples before reaching for preference optimization or RL.",
            "Validate synthetic training pairs with automated verifiers (unit tests, math checkers, schema validators) rather than blind self-play.",
            "Track both target task lift and capability regression on general benchmarks."
          ],
          "references": [
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking & Model Registries",
          "tasks": [
            "Track hyperparameters, datasets, metrics, and artifacts reproducibly with MLflow",
            "Automate model promotion gates (staging -> production) via metric thresholds",
            "Version training datasets and evaluation splits alongside code in Git"
          ],
          "upskilling_instructions": [
            "Make every experiment reproducible from a single command and logged git commit SHA.",
            "Never promote a model to production without comparing it head-to-head against the current champion.",
            "Store calibration and slice-level metrics inside the model registry metadata."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "High-Throughput Model Serving & Quantization",
          "tasks": [
            "Serve open-weight LLMs with vLLM using continuous batching and PagedAttention",
            "Benchmark FP8/AWQ/GGUF quantization tradeoffs across throughput, TTFT, and accuracy",
            "Expose typed FastAPI + Pydantic v2 inference gateways with batching and health checks"
          ],
          "upskilling_instructions": [
            "Measure latency under realistic concurrent load (p50, p95, p99 TTFT and tokens/sec), not single-request benchmarks.",
            "Verify quantized models on your golden eval set to ensure accuracy loss stays within budget.",
            "Configure graceful shutdown and readiness probes for containerized model servers."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Distributed Training & Ray Pipelines",
          "tasks": [
            "Scale preprocessing, hyperparameter tuning, and training across GPUs using Ray or PyTorch FSDP",
            "Handle spot-instance checkpointing, fault tolerance, and memory optimization",
            "Profile communication overhead vs compute utilization in multi-GPU runs"
          ],
          "upskilling_instructions": [
            "Test checkpoint resume logic early so a mid-run preemption does not waste hours of GPU compute.",
            "Tune batch size, gradient accumulation, and activation checkpointing to maximize MFU without OOMs.",
            "Log GPU cost per training run alongside final validation metrics."
          ],
          "references": [
            {
              "title": "Ray Distributed ML Docs",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Drift & Continuous Retraining",
          "tasks": [
            "Monitor input feature drift, embedding shift, and prediction confidence in production",
            "Build automated feedback loops that sample uncertain predictions for human labeling",
            "Schedule shadow-model evaluations before swapping live production traffic"
          ],
          "upskilling_instructions": [
            "Track both data drift (covariate shift) and concept drift (stale ground-truth relationships).",
            "Always run new models in shadow mode against live traffic before full rollout.",
            "Define clear rollback triggers tied to error rate, latency, or business KPI drops."
          ],
          "references": [
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 11,
          "focus": "ML Security, Fairness & Governance",
          "tasks": [
            "Audit models for demographic slice disparities, data poisoning, and membership inference",
            "Harden inference endpoints against adversarial inputs and model-extraction abuse",
            "Document model cards and risk assessments aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Slice evaluation metrics across key user cohorts and geographies to uncover hidden bias.",
            "Sanitize external training data sources to prevent poisoned or copyrighted contamination.",
            "Write clear model cards stating intended use, known limitations, and retraining cadence."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Production ML Capstone & Interviews",
          "tasks": [
            "Deliver an end-to-end ML system: Polars pipeline, PyTorch/TRL training, MLflow registry, and vLLM/FastAPI serving",
            "Publish benchmarks covering accuracy, quantization tradeoffs, p95 latency, and drift alerts",
            "Prepare for ML Engineer interviews spanning ML theory, coding, and production ML system design"
          ],
          "upskilling_instructions": [
            "Highlight engineering rigor: reproducible training, leakage-free validation, and real serving benchmarks.",
            "Be ready to explain why you chose classical ML, fine-tuning, or RL post-training for each problem.",
            "Practice whiteboard ML system design (ranking, fraud, recommendations, LLM post-training)."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "ML Engineer",
      "title": "Data Analyst to ML Engineer",
      "summary": "A 2026 path turning SQL and analytical mastery into production Python engineering, predictive modeling, PyTorch fine-tuning, and deployed ML systems.",
      "base_difficulty": 72,
      "months": [
        {
          "month": 1,
          "focus": "Python Engineering & Modern Data Tools",
          "tasks": [
            "Move from notebooks to modular Python packages using uv, ruff, and Git",
            "Master NumPy, Polars, and DuckDB for fast vectorized feature processing",
            "Write pytest unit tests for data transformations and edge-case handling"
          ],
          "upskilling_instructions": [
            "Refactor repetitive notebook cells into tested Python modules with clear function signatures.",
            "Use DuckDB and Polars together to replace slow pandas scripts.",
            "Validate schemas at pipeline boundaries with Pydantic v2."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Statistical Modeling & Experimentation",
          "tasks": [
            "Connect hypothesis testing, confidence intervals, and causal thinking to ML evaluation",
            "Build scikit-learn classification and regression pipelines with stratified/time splits",
            "Analyze residuals, calibration, and business-metric lift"
          ],
          "upskilling_instructions": [
            "Use your analytics intuition to question suspiciously high accuracy—almost always a sign of data leakage.",
            "Compute confidence intervals on validation metrics when comparing candidate models.",
            "Translate model thresholds into concrete revenue or cost impact."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Gradient Boosting & Feature Engineering",
          "tasks": [
            "Train XGBoost/LightGBM models on messy real-world tabular datasets",
            "Engineer lag, rolling-window, and interaction features cleanly without future leakage",
            "Use SHAP or permutation importance to interpret predictions for stakeholders"
          ],
          "upskilling_instructions": [
            "Verify every rolling or aggregation feature uses strictly past timestamps relative to the prediction point.",
            "Compare gradient-boosted trees against simple logistic/linear baselines.",
            "Document feature definitions in a shared spec."
          ],
          "references": [
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Software Engineering for ML Pipelines",
          "tasks": [
            "Build reproducible training scripts configurable via CLI/YAML and tracked in Git",
            "Package ML pipelines in Docker containers with automated CI tests in GitHub Actions",
            "Handle missing data, schema drift, and logging cleanly"
          ],
          "upskilling_instructions": [
            "Ensure a teammate can clone your repo and reproduce your training run with a single command.",
            "Add smoke tests in CI that train on a tiny synthetic fixture in seconds.",
            "Separate configuration from code."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Deep Learning Foundations in PyTorch",
          "tasks": [
            "Learn tensors, autograd, neural network layers, and optimization in PyTorch",
            "Train tabular/text neural networks and compare them against XGBoost baselines",
            "Diagnose overfitting, underfitting, and learning-rate instability"
          ],
          "upskilling_instructions": [
            "Use PyTorch where unstructured data (text, images, sequences) gives neural nets a clear edge over trees.",
            "Plot training and validation curves for every run.",
            "Test mixed precision and proper train/eval mode switching."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 6,
          "focus": "NLP, Embeddings & Open-Weight Fine-Tuning",
          "tasks": [
            "Fine-tune Hugging Face encoder models for classification, NER, or semantic search",
            "Explore LoRA fine-tuning of compact open-weight LLMs with TRL",
            "Evaluate fine-tuned models against hosted LLM APIs on cost, latency, and accuracy"
          ],
          "upskilling_instructions": [
            "Show stakeholders the exact unit-cost savings of a fine-tuned 1B-7B model vs calling a frontier API at high volume.",
            "Audit training labels for annotator disagreement before fine-tuning.",
            "Benchmark inference latency on realistic input lengths."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking & Model Versioning",
          "tasks": [
            "Log parameters, datasets, metrics, and model artifacts using MLflow",
            "Build reproducible comparison reports across feature sets and model families",
            "Establish model promotion criteria and regression checks"
          ],
          "upskilling_instructions": [
            "Tag every MLflow run with dataset version, git commit, and slice metrics.",
            "Never delete failed experiments—document why they failed so the team learns.",
            "Automate model artifact registration."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Serving & APIs",
          "tasks": [
            "Wrap trained models in FastAPI + Pydantic v2 inference microservices",
            "Serve open-weight LLMs or embeddings efficiently with vLLM or ONNX Runtime",
            "Benchmark single-item vs batch inference throughput and p95 latency"
          ],
          "upskilling_instructions": [
            "Validate all incoming feature types and ranges in Pydantic before passing tensors to the model.",
            "Implement health/readiness endpoints and structured prediction logging.",
            "Test concurrent requests to uncover bottlenecks."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Online Testing & Causal Uplift",
          "tasks": [
            "Design A/B tests, shadow deployments, and multi-armed bandits for live ML models",
            "Measure offline-to-online metric alignment and guardrail regressions",
            "Build executive dashboards linking model scores to business KPIs"
          ],
          "upskilling_instructions": [
            "Offline AUC improvements do not guarantee online conversion lift—always validate with controlled rollouts.",
            "Monitor guardrail metrics (latency, error rate, user complaints) alongside primary KPIs.",
            "Use your analytics background to run clean power calculations."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Drift & Retraining Loops",
          "tasks": [
            "Set up Evidently AI checks for feature drift, target shift, and prediction anomalies",
            "Automate retraining triggers when drift or performance degradation crosses thresholds",
            "Create incident runbooks for bad data feeds or stale models"
          ],
          "upskilling_instructions": [
            "Alert on upstream schema changes before they silently turn into garbage predictions.",
            "Log sampled production inputs and predictions for periodic human audit.",
            "Practice rolling back to the previous model version."
          ],
          "references": [
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Responsible ML & Data Governance",
          "tasks": [
            "Audit models for demographic bias, proxy variables, and privacy leakage",
            "Apply PII scrubbing and access controls to training pipelines",
            "Write model cards and risk documentation aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Check whether seemingly neutral features (zip code, device type) act as sensitive proxies.",
            "Ensure training data respects user consent and retention policies.",
            "Document known failure modes clearly."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Production ML Capstone & Portfolio",
          "tasks": [
            "Ship a complete end-to-end ML product from DuckDB/Polars ingestion to FastAPI/vLLM serving and drift monitoring",
            "Publish a case study detailing business problem, baseline vs final lift, and production architecture",
            "Prepare for ML Engineer interviews highlighting data rigor, experimentation, and deployment"
          ],
          "upskilling_instructions": [
            "Your analytics background is a major asset: emphasize leakage prevention, metric design, and business impact.",
            "Make your code modular, tested, and Dockerized.",
            "Practice explaining trade-offs between classical ML, fine-tuned models, and frontier LLMs."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "ML Engineer",
      "title": "Product Manager to ML Engineer",
      "summary": "A deep technical 2026 transition from product management into Python engineering, mathematical ML foundations, PyTorch, fine-tuning, and production ML deployment.",
      "base_difficulty": 88,
      "months": [
        {
          "month": 1,
          "focus": "Python Programming & Engineering Discipline",
          "tasks": [
            "Learn Python syntax, data structures, OOP, and functional patterns with uv",
            "Practice Git workflows, debugging, and writing pytest unit tests",
            "Build a tested CLI tool that parses and validates structured datasets"
          ],
          "upskilling_instructions": [
            "Commit to writing code daily and solving data-manipulation problems without relying blindly on copy-paste.",
            "Use pytest from week one so you build confidence refactoring code.",
            "Learn to read tracebacks and debug systematically."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Math & Vectorized Data Processing",
          "tasks": [
            "Study linear algebra (vectors, matrices, dot products), derivatives, and probability",
            "Master NumPy, Polars, and DuckDB for fast numerical and tabular workflows",
            "Implement basic statistical metrics and linear regression from scratch in NumPy"
          ],
          "upskilling_instructions": [
            "Implementing gradient descent and linear regression from scratch makes ML optimization click permanently.",
            "Focus on matrix dimensions and vectorized operations.",
            "Verify your scratch math against scikit-learn outputs."
          ],
          "references": [
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical Machine Learning",
          "tasks": [
            "Build classification and regression pipelines in scikit-learn and XGBoost",
            "Master cross-validation, regularization, and bias-variance tradeoffs",
            "Evaluate models using ROC-AUC, PR-AUC, F1, and calibration curves"
          ],
          "upskilling_instructions": [
            "Focus heavily on preventing data leakage and choosing metrics that match real product costs.",
            "Compare simple linear baselines against tree ensembles.",
            "Write clear error-analysis notes on misclassified examples."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Software Architecture & APIs",
          "tasks": [
            "Build modular Python services with FastAPI and Pydantic v2 validation",
            "Containerize applications with Docker and set up GitHub Actions CI",
            "Implement structured logging, error handling, and integration tests"
          ],
          "upskilling_instructions": [
            "Learn clean separation between data loading, model inference, and API routing.",
            "Test edge cases like missing fields, out-of-range inputs, and timeouts.",
            "Keep environments reproducible with uv lockfiles and Docker."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Deep Learning & PyTorch",
          "tasks": [
            "Learn tensors, autograd, loss functions, and backpropagation in PyTorch",
            "Train neural networks for tabular, text, and image classification",
            "Diagnose training curves, learning-rate schedules, and regularization"
          ],
          "upskilling_instructions": [
            "Always run a sanity check by overfitting a tiny batch before launching a full training run.",
            "Understand how batch size, learning rate, and weight decay interact.",
            "Track experiments cleanly rather than overwriting model checkpoints."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Transformers & Fine-Tuning",
          "tasks": [
            "Understand attention, tokenization, and encoder/decoder Transformer architectures",
            "Fine-tune a Hugging Face encoder or compact LLM using LoRA/QLoRA",
            "Compare fine-tuned models against zero-shot API baselines"
          ],
          "upskilling_instructions": [
            "Focus on data quality: 500 clean, diverse examples beat 50,000 noisy ones.",
            "Measure inference speed and VRAM usage alongside accuracy.",
            "Keep a strict held-out test set."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking & Reproducibility",
          "tasks": [
            "Set up MLflow to track hyperparameters, datasets, metrics, and model artifacts",
            "Version data splits and automate evaluation scripts",
            "Build reproducible training and evaluation workflows"
          ],
          "upskilling_instructions": [
            "Treat every model run as a scientific experiment with a clear hypothesis and control baseline.",
            "Automate comparison tables across runs.",
            "Verify reproducibility across random seeds."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Serving & Inference Optimization",
          "tasks": [
            "Deploy models behind FastAPI and benchmark open-weight LLM serving with vLLM",
            "Test quantization (FP8/INT4) and batching tradeoffs on latency and cost",
            "Add health checks, request validation, and fallback logic"
          ],
          "upskilling_instructions": [
            "Measure p95 latency and throughput under concurrent load.",
            "Verify quantized model accuracy on your eval set before deploying.",
            "Document hardware and memory requirements clearly."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Production Pipelines & Distributed Basics",
          "tasks": [
            "Build automated training and batch-scoring pipelines using Ray or scheduled workflows",
            "Implement data-validation gates before training runs",
            "Handle retries, checkpointing, and failure alerts"
          ],
          "upskilling_instructions": [
            "Automate data checks so corrupt upstream data never trains a broken model.",
            "Test pipeline recovery from mid-run failures.",
            "Track compute cost per training run."
          ],
          "references": [
            {
              "title": "Ray Distributed ML Docs",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Drift & Online Experimentation",
          "tasks": [
            "Monitor data drift, prediction distributions, and latency with Evidently AI",
            "Design shadow deployments and A/B tests to validate online model impact",
            "Define automated rollback triggers"
          ],
          "upskilling_instructions": [
            "Connect offline ML metrics to real online product metrics.",
            "Review production prediction samples regularly for silent degradation.",
            "Practice incident response for model regressions."
          ],
          "references": [
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "ML Security, Fairness & Governance",
          "tasks": [
            "Audit models for demographic bias and adversarial vulnerabilities",
            "Apply PII scrubbing and data governance to training pipelines",
            "Write model cards aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Combine your PM user-empathy with ML fairness auditing across user segments.",
            "Document data provenance and known model limitations.",
            "Review endpoints for input abuse and rate-limit bypasses."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "ML Engineering Capstone",
          "tasks": [
            "Build and deploy an end-to-end ML system with reproducible training, MLflow tracking, and FastAPI/vLLM serving",
            "Publish a technical report covering math/modeling choices, ablations, and serving benchmarks",
            "Prepare for technical coding and ML system-design interviews"
          ],
          "upskilling_instructions": [
            "Demonstrate deep hands-on fluency in Python, PyTorch, and evaluation rigor.",
            "Be prepared to explain every line of your training and serving code.",
            "Highlight how product judgment guided your metric and architecture choices."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "ML Engineer",
      "title": "UX Designer to ML Engineer",
      "summary": "An ambitious 2026 transition from UX design into Python software engineering, ML mathematics, PyTorch, multimodal/generative models, and production ML deployment.",
      "base_difficulty": 92,
      "months": [
        {
          "month": 1,
          "focus": "Python & Version Control Foundations",
          "tasks": [
            "Learn Python fundamentals, data structures, and functions using uv",
            "Use Git and GitHub daily for version control and code reviews",
            "Build a small Python CLI that processes and validates text or image metadata"
          ],
          "upskilling_instructions": [
            "Focus on building fluency with code structure, debugging, and reading documentation.",
            "Write small tests with pytest to verify your functions behave as expected.",
            "Commit small working increments every day."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Math & Numerical Computing",
          "tasks": [
            "Build intuition for vectors, matrices, dot products, gradients, and probability",
            "Practice NumPy array manipulation and Polars/DuckDB data workflows",
            "Visualize data distributions and decision boundaries with clear plots"
          ],
          "upskilling_instructions": [
            "Use your visual strengths to plot vectors, loss surfaces, and feature distributions—visual intuition makes ML math click.",
            "Verify array shapes at every step of a calculation.",
            "Implement basic linear regression in NumPy."
          ],
          "references": [
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical Machine Learning",
          "tasks": [
            "Train classification, clustering, and regression models in scikit-learn and XGBoost",
            "Master train/validation/test splits and leakage prevention",
            "Analyze precision, recall, confusion matrices, and error cases"
          ],
          "upskilling_instructions": [
            "Start with simple models and inspect misclassified examples visually to understand why the model struggled.",
            "Practice explaining model metrics in plain language.",
            "Save complete preprocessing + model pipelines."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Software Engineering & APIs",
          "tasks": [
            "Build FastAPI services with Pydantic v2 input/output validation",
            "Containerize Python applications using Docker",
            "Add automated pytest suites and GitHub Actions CI"
          ],
          "upskilling_instructions": [
            "Treat your ML backend like a real product: clean error messages, schema validation, and health checks.",
            "Test your API with malformed inputs and edge cases.",
            "Keep dependencies locked with uv."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Deep Learning & PyTorch",
          "tasks": [
            "Learn tensors, autograd, layers, and optimization loops in PyTorch",
            "Train vision or text neural networks and inspect training/validation curves",
            "Use regularization, dropout, and learning-rate scheduling"
          ],
          "upskilling_instructions": [
            "Run a 32-sample overfit sanity check before full training.",
            "Visualize feature maps, embeddings (UMAP/t-SNE), and failure examples.",
            "Log every experiment cleanly."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Multimodal, Vision & Fine-Tuning",
          "tasks": [
            "Explore Hugging Face vision-language models, CLIP embeddings, and LoRA fine-tuning",
            "Fine-tune a compact model on a domain-specific visual or text task",
            "Evaluate fine-tuned performance against zero-shot baselines"
          ],
          "upskilling_instructions": [
            "Leverage your design eye on multimodal tasks—UI screenshot understanding, visual search, or style classification.",
            "Curate clean, balanced training datasets and check for label noise.",
            "Measure inference speed and memory footprint."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking & Reproducibility",
          "tasks": [
            "Track hyperparameters, datasets, metrics, and artifacts in MLflow",
            "Run systematic ablation studies changing one variable at a time",
            "Version datasets and evaluation benchmarks"
          ],
          "upskilling_instructions": [
            "Document hypotheses before running experiments so you learn systematically rather than guessing.",
            "Compare models on both aggregate metrics and hard edge-case slices.",
            "Automate evaluation reports."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Serving & Optimization",
          "tasks": [
            "Serve trained models via FastAPI and benchmark open-weight LLM/VLM serving with vLLM",
            "Measure quantization (FP8/INT4) effects on quality and latency",
            "Build a lightweight interactive demo UI to test live model behavior"
          ],
          "upskilling_instructions": [
            "Test how latency and streaming affect user perception of model quality.",
            "Verify quantized models on your held-out test set.",
            "Set request timeouts and graceful error fallbacks."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Data Pipelines & Scaling",
          "tasks": [
            "Build automated preprocessing and batch-inference pipelines with Polars and Ray",
            "Add automated data-quality assertions before training",
            "Profile bottlenecks in data loading vs model compute"
          ],
          "upskilling_instructions": [
            "Ensure training and inference preprocessing use the exact same code path.",
            "Test pipeline recovery on partial failures.",
            "Monitor compute cost per run."
          ],
          "references": [
            {
              "title": "Ray Distributed ML Docs",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Drift & User Feedback Loops",
          "tasks": [
            "Monitor input drift and prediction confidence with Evidently AI",
            "Design human-in-the-loop feedback collection that feeds back into retraining",
            "Run shadow evaluations before promoting updated models"
          ],
          "upskilling_instructions": [
            "Use UX research skills to inspect real production inputs and spot distribution shifts early.",
            "Define clear rollback thresholds.",
            "Track user corrections as a high-signal labeling source."
          ],
          "references": [
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Fairness, Interpretability & Responsible ML",
          "tasks": [
            "Audit models for demographic bias and visual/textual failure modes",
            "Use interpretability tools (attention/saliency, SHAP) to explain predictions",
            "Document model cards aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Test multimodal models across diverse demographics, lighting, and accessibility edge cases.",
            "Make model confidence and limitations transparent.",
            "Protect user privacy in training data."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Full-Stack ML Capstone",
          "tasks": [
            "Ship an end-to-end ML product (e.g., multimodal search or fine-tuned classifier) with MLflow, FastAPI/vLLM, and monitoring",
            "Publish a case study combining visual clarity with rigorous ML benchmarks",
            "Prepare for ML Engineer interviews covering Python, PyTorch, and ML system design"
          ],
          "upskilling_instructions": [
            "Showcase both your engineering rigor (tests, MLflow, benchmarks) and your product/UX sensibility.",
            "Practice walking through training code, loss curves, and serving architecture.",
            "Consider hybrid roles in Multimodal ML or Human-Centered AI Engineering."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "ML Engineer",
      "title": "Default Path to ML Engineer",
      "summary": "A comprehensive 2026 baseline roadmap into ML engineering covering Python data stacks, classical ML, PyTorch 2.x, post-training, vLLM serving, and production monitoring.",
      "base_difficulty": 86,
      "months": [
        {
          "month": 1,
          "focus": "Python & Engineering Foundations",
          "tasks": [
            "Set up reproducible Python environments with uv, ruff, and Git",
            "Master NumPy, Polars, and DuckDB for fast tabular and text data workflows",
            "Write pytest unit tests and Pydantic v2 data-validation models"
          ],
          "upskilling_instructions": [
            "Build clean engineering habits early: modular functions, type hints, and automated tests.",
            "Commit small, working increments to Git every day.",
            "Validate input schemas at pipeline boundaries."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Math & Statistical Foundations",
          "tasks": [
            "Review linear algebra, multivariable calculus gradients, and probability distributions",
            "Implement gradient descent and logistic regression from scratch in NumPy",
            "Practice hypothesis testing, confidence intervals, and error analysis"
          ],
          "upskilling_instructions": [
            "Connect mathematical concepts directly to code by implementing simple optimizers yourself.",
            "Focus on matrix shapes and numerical stability.",
            "Verify your scratch implementations against scikit-learn."
          ],
          "references": [
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical Machine Learning & Tabular Modeling",
          "tasks": [
            "Train and tune scikit-learn and XGBoost models on real datasets",
            "Master cross-validation, time/group splits, and data-leakage prevention",
            "Evaluate models with ROC-AUC, PR-AUC, F1, and calibration plots"
          ],
          "upskilling_instructions": [
            "Always build a fast linear/tree baseline before trying deep learning.",
            "Audit datasets carefully for target leakage and class imbalance.",
            "Bundle preprocessing and model weights in a single pipeline."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "XGBoost Documentation",
              "url": "https://xgboost.readthedocs.io/en/stable/"
            },
            {
              "title": "Kaggle: Intro to Machine Learning",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            }
          ]
        },
        {
          "month": 4,
          "focus": "APIs, Containers & CI",
          "tasks": [
            "Build typed inference APIs using FastAPI and Pydantic v2",
            "Containerize training and serving code with Docker",
            "Automate linting and pytest runs in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Ensure training and serving environments are identical via Docker and uv lockfiles.",
            "Write API tests for valid payloads, malformed inputs, and error responses.",
            "Keep configuration separate from code."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Deep Learning with PyTorch 2.x",
          "tasks": [
            "Build custom Datasets, DataLoaders, and training loops in PyTorch",
            "Use mixed precision (BF16) and torch.compile to speed up training",
            "Diagnose overfitting, gradient instability, and learning-rate schedules"
          ],
          "upskilling_instructions": [
            "Always run a tiny-batch overfit sanity check before launching full training.",
            "Plot training and validation curves for every experiment.",
            "Profile data-loading vs GPU compute time."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Transformers, Fine-Tuning & Post-Training",
          "tasks": [
            "Fine-tune Hugging Face encoders and compact open-weight LLMs with LoRA/QLoRA",
            "Practice DPO and verifiable-reward post-training (GRPO) using TRL",
            "Evaluate fine-tuned models against zero-shot API baselines"
          ],
          "upskilling_instructions": [
            "Curate clean, deduplicated training data—data quality drives fine-tuning gains more than hyperparameter tweaks.",
            "Evaluate both target task accuracy and general capability retention.",
            "Track compute cost per training run."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking & Model Registry",
          "tasks": [
            "Track parameters, datasets, metrics, and artifacts in MLflow",
            "Establish automated promotion gates comparing challenger vs champion models",
            "Version data splits and evaluation scripts in Git"
          ],
          "upskilling_instructions": [
            "Make every experiment reproducible from a single command and git SHA.",
            "Store slice-level metrics alongside aggregate scores.",
            "Document why failed experiments did not work."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "High-Throughput Model Serving",
          "tasks": [
            "Serve models with FastAPI and benchmark open-weight LLM inference using vLLM",
            "Test quantization (FP8/AWQ/GGUF) tradeoffs on throughput, TTFT, and accuracy",
            "Add health checks, batching, and graceful timeouts"
          ],
          "upskilling_instructions": [
            "Benchmark under realistic concurrent traffic rather than single-request loops.",
            "Verify quantized models against your golden eval set before shipping.",
            "Monitor GPU memory utilization and tail latency (p95/p99)."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Distributed Workflows & Ray",
          "tasks": [
            "Scale data preprocessing and hyperparameter tuning with Ray",
            "Implement checkpointing and fault-tolerant training jobs",
            "Measure scaling efficiency and GPU cost per run"
          ],
          "upskilling_instructions": [
            "Test checkpoint resume early so preemptions never lose training progress.",
            "Automate data-quality checks before distributed jobs start.",
            "Profile I/O bottlenecks."
          ],
          "references": [
            {
              "title": "Ray Distributed ML Docs",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Drift & Retraining",
          "tasks": [
            "Monitor input drift, embedding shift, and prediction anomalies with Evidently AI",
            "Run shadow deployments before routing live traffic to new models",
            "Build feedback loops for human review and scheduled retraining"
          ],
          "upskilling_instructions": [
            "Set alerts on upstream schema changes and null spikes.",
            "Define clear automated rollback triggers.",
            "Review production error samples weekly."
          ],
          "references": [
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 11,
          "focus": "ML Security, Fairness & Governance",
          "tasks": [
            "Audit models for slice-level bias, data poisoning, and endpoint abuse",
            "Apply PII scrubbing and access controls to training data",
            "Write model cards aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Check performance across demographic and behavioral slices.",
            "Protect inference endpoints with rate limits and input validation.",
            "Document intended use, limitations, and retraining cadence."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Drift & Eval Docs",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone & ML Engineer Interviews",
          "tasks": [
            "Ship a complete end-to-end ML system with reproducible training, MLflow registry, vLLM/FastAPI serving, and drift monitoring",
            "Write a technical report detailing baselines, ablations, quantization, and latency benchmarks",
            "Prepare for ML coding, theory, and production ML system-design interviews"
          ],
          "upskilling_instructions": [
            "Lead with measurable engineering results: baseline vs final lift, p95 latency, and cost.",
            "Make your repository effortless to run and verify.",
            "Practice explaining tradeoffs between classical ML, fine-tuning, and hosted LLMs."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Software Engineer",
      "target_ai_role": "AI Product Manager",
      "title": "Software Engineer to AI Product Manager",
      "summary": "A 2026 transition from software engineering into AI product strategy, customer discovery, eval-driven PRDs, unit economics, and cross-functional AI shipping.",
      "base_difficulty": 60,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Architecture & Paradigm Fluency",
          "tasks": [
            "Map 2026 AI capabilities: frontier vs open-weight, reasoning models, context engineering, RAG, fine-tuning/RFT, and MCP agents",
            "Analyze when deterministic code or classical ML beats an LLM on cost, speed, and reliability",
            "Write an executive brief translating technical AI tradeoffs into user and business outcomes"
          ],
          "upskilling_instructions": [
            "Resist the urge to solve every problem with an autonomous agent—use the simplest architecture that meets the user reliability bar.",
            "Compare build, fine-tune, and API-orchestration options using 12-month total cost of ownership.",
            "Practice explaining model limits without jargon to non-technical stakeholders."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Customer Discovery & Workflow Friction",
          "tasks": [
            "Conduct 10+ structured user interviews focused on existing workarounds and time sinks",
            "Map end-to-end user workflows to spot where AI removes toil vs where it adds verification overhead",
            "Validate willingness to pay and trust thresholds before writing a single spec"
          ],
          "upskilling_instructions": [
            "Ask about specific past tasks users hated or abandoned rather than pitching hypothetical AI features.",
            "Measure the 'verification tax'—if reviewing AI output takes longer than doing the task manually, the feature will fail.",
            "Document concrete user quotes and workflow bottlenecks."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 3,
          "focus": "AI-Native Value Propositions & Positioning",
          "tasks": [
            "Define crisp problem statements, target personas, and non-goals for an AI product",
            "Benchmark competitors' AI UX, pricing models (seat vs usage vs outcome), and defensibility",
            "Identify proprietary data loops and MCP workflow integrations that create real moats"
          ],
          "upskilling_instructions": [
            "Avoid generic 'AI wrapper' positioning—anchor value in proprietary context, deep workflow integration, and measurable ROI.",
            "Test pricing hypotheses against variable token and reasoning compute costs.",
            "Align sales, design, and engineering on what the product will explicitly refuse to do."
          ],
          "references": [
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Eval-Driven PRDs & Acceptance Criteria",
          "tasks": [
            "Write an AI PRD specifying golden eval sets, quality thresholds, latency budgets, and human-in-the-loop states",
            "Define failure-mode fallbacks (low confidence, tool failure, refusal, timeout)",
            "Align engineering and SMEs on exact grading rubrics before build begins"
          ],
          "upskilling_instructions": [
            "In 2026, evals are the PRD: define 30-50 concrete input/output examples with pass/fail criteria alongside user stories.",
            "Specify exact human approval gates for any state-changing agent action.",
            "Include p95 latency and max cost-per-task budgets as hard launch requirements."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Rapid AI Prototyping & Feasibility",
          "tasks": [
            "Build interactive AI prototypes yourself using modern coding agents, AI Studio, or Vercel AI SDK",
            "Test prompt/context strategies on messy real-world user inputs to expose edge cases early",
            "Run quick usability sessions on live prototypes before committing full sprint capacity"
          ],
          "upskilling_instructions": [
            "Use your engineering background to prototype in hours, not weeks—live models reveal UX flaws static Figma mocks hide.",
            "Test with messy, ambiguous, and adversarial inputs, not curated demo prompts.",
            "Hand off clean learnings and eval cases to the delivery team."
          ],
          "references": [
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Git & Collaborative Workflows",
              "url": "https://git-scm.com/doc"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation Calibration & Quality Governance",
          "tasks": [
            "Partner with domain SMEs to label golden datasets and calibrate LLM-as-a-judge rubrics",
            "Track offline eval pass rates alongside online edit rates and user satisfaction",
            "Establish a weekly error-triage ritual categorizing retrieval, reasoning, and UX failures"
          ],
          "upskilling_instructions": [
            "Ensure automated judge scores correlate strongly with human SME judgment before relying on them for release gates.",
            "Separate retrieval failures from generation failures so engineering fixes the right layer.",
            "Track regressions across every model upgrade."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Economics, Pricing & Cost Modeling",
          "tasks": [
            "Build a unit-economics model covering input/output tokens, reasoning tokens, caching, and retrieval",
            "Design model-routing tiers and prompt-caching strategies to protect gross margins",
            "Evaluate outcome-based, credit-based, and tiered subscription pricing models"
          ],
          "upskilling_instructions": [
            "Model power-user tails (top 5% of heavy agent users) so flat-rate pricing does not destroy margins.",
            "Factor in background evals, retries, and guardrail calls when estimating cost per active user.",
            "Partner with finance to set automated spend alerts."
          ],
          "references": [
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Safety, Privacy & Regulatory Compliance",
          "tasks": [
            "Define data boundaries, tenant isolation, and zero-data-retention requirements with enterprise buyers",
            "Map product risks to EU AI Act obligations, NIST AI RMF, and OWASP LLM Top 10",
            "Design clear incident-response, escalation, and user-reporting workflows"
          ],
          "upskilling_instructions": [
            "Treat enterprise security and compliance questionnaires as product requirements, not last-minute legal hurdles.",
            "Ensure AI disclosures, citations, and human-override controls are built directly into the UX.",
            "Run pre-launch red-teaming with security and QA."
          ],
          "references": [
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Experimentation & Phased Rollouts",
          "tasks": [
            "Design shadow launches, A/B tests, and feature-flagged beta cohorts",
            "Track primary workflow KPIs alongside guardrail metrics (latency, hallucination reports, support tickets)",
            "Write enablement guides and internal playbooks for customer success and sales"
          ],
          "upskilling_instructions": [
            "Ship to internal dogfooders and design partners first to capture real-world edge cases safely.",
            "Define clear go/no-go rollback criteria before expanding traffic.",
            "Avoid vanity 'AI usage' metrics—measure completed tasks and retained value."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Adoption, Retention & Feedback Flywheels",
          "tasks": [
            "Analyze onboarding drop-offs, prompt abandonment, and user edit-distance funnels",
            "Turn in-product corrections and thumbs-down feedback into curated eval and fine-tuning data",
            "Prioritize high-leverage UX fixes that reduce user effort per outcome"
          ],
          "upskilling_instructions": [
            "Study why users abandon AI features after week one—usually inconsistent quality or unclear capabilities.",
            "Make giving feedback effortless and show users when the product improves.",
            "Balance new capability bets with reliability polish."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Product Strategy & Executive Alignment",
          "tasks": [
            "Craft a 12-month AI roadmap balancing quick wins, platform/MCP investments, and R&D bets",
            "Present build-vs-buy, model-portability, and margin tradeoffs to leadership",
            "Lead cross-functional planning across engineering, design, data, legal, and GTM"
          ],
          "upskilling_instructions": [
            "Protect roadmap agility—foundation models improve every quarter, so avoid over-investing in brittle workarounds.",
            "Communicate clearly about uncertainty, eval confidence, and phased milestones.",
            "Align incentives across teams around shared customer outcomes."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI PM Portfolio & Leadership Interviews",
          "tasks": [
            "Publish 2 deep AI PM case studies showing discovery, eval-driven PRDs, launch metrics, and margin impact",
            "Practice AI PM product-sense, technical-depth, and execution interviews",
            "Refine your narrative bridging deep engineering credibility with customer-first product leadership"
          ],
          "upskilling_instructions": [
            "Highlight how your engineering roots let you spot technical feasibility, eval gaps, and latency tradeoffs faster.",
            "Show real numbers: task completion lift, edit-rate reduction, or gross margin improvement.",
            "Prepare thoughtful answers on AI safety, build-vs-buy, and agent autonomy."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "AI Product Manager",
      "title": "Data Analyst to AI Product Manager",
      "summary": "A 2026 path leveraging analytical and experimentation rigor into AI product management, eval design, AI unit economics, and data-driven launches.",
      "base_difficulty": 56,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Landscape & Technical Fluency",
          "tasks": [
            "Learn 2026 AI building blocks: reasoning models, RAG, context engineering, fine-tuning, and MCP agents",
            "Analyze how data quality, retrieval, and model selection shape product reliability",
            "Write a product teardown of two competing AI tools in your domain"
          ],
          "upskilling_instructions": [
            "Use your data background to look past AI hype and inspect what inputs, context, and metrics actually drive product value.",
            "Document where classical ML or SQL analytics is superior to generative AI.",
            "Practice summarizing technical tradeoffs in crisp executive memos."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Opportunity Sizing & Discovery",
          "tasks": [
            "Combine funnel/ticket telemetry with user interviews to identify high-ROI AI opportunities",
            "Quantify manual hours, error rates, and willingness to adopt AI assistance",
            "Prioritize use cases using feasibility, data readiness, and business impact"
          ],
          "upskilling_instructions": [
            "Pair quantitative drop-off data with qualitative interviews so you know both what is happening and why.",
            "Check whether the underlying data needed for RAG or agents actually exists and is clean.",
            "Avoid low-frequency novelty features."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 3,
          "focus": "User Research & Trust Calibration",
          "tasks": [
            "Run structured discovery interviews and concept tests with target users",
            "Identify trust blockers: hallucinations, opaque reasoning, privacy fears, or slow latency",
            "Synthesize research into clear user personas and jobs-to-be-done"
          ],
          "upskilling_instructions": [
            "Listen for how users currently double-check colleagues' work—that reveals how they will verify AI outputs.",
            "Capture exact user language to inform onboarding and UI copy.",
            "Share synthesized insights with engineering and design."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Eval-Driven PRDs & Success Metrics",
          "tasks": [
            "Write an AI PRD defining target workflows, human-in-the-loop checkpoints, and strict quality thresholds",
            "Design golden evaluation datasets stratified across real user query distributions",
            "Specify latency, cost-per-task, and fallback requirements"
          ],
          "upskilling_instructions": [
            "Your analytics skill in defining clean metrics and edge-case slices makes you naturally strong at AI PRDs.",
            "Ensure eval datasets reflect messy real-world traffic, not just clean happy-path examples.",
            "Define explicit refusal and escalation paths."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Prototyping & Prompt Iteration",
          "tasks": [
            "Prototype AI workflows in Google AI Studio, APIs, or coding assistants",
            "Test structured outputs, retrieval chunks, and prompt variations on real sample data",
            "Run quick usability checks on live prototype outputs"
          ],
          "upskilling_instructions": [
            "Hands-on prototyping gives you intuition for token limits, context rot, and model quirks.",
            "Log prototype test results in a spreadsheet or DuckDB to compare prompt versions objectively.",
            "Identify where retrieval vs reasoning is the bottleneck."
          ],
          "references": [
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation Calibration & Error Analysis",
          "tasks": [
            "Lead SME labeling sessions and measure inter-annotator agreement",
            "Calibrate LLM-as-a-judge metrics against human ground truth",
            "Build an error-taxonomy dashboard tracking failure modes over time"
          ],
          "upskilling_instructions": [
            "Apply statistical rigor: check sample sizes, slice performance by segment, and watch for Goodhart's Law.",
            "Turn top failure clusters into prioritized engineering tickets.",
            "Establish eval gates before every model or prompt release."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Unit Economics & Pricing Strategy",
          "tasks": [
            "Model token, reasoning, embedding, and guardrail costs across user tiers in SQL/spreadsheets",
            "Evaluate prompt caching and model-routing optimizations with engineering",
            "Recommend sustainable packaging and pricing models"
          ],
          "upskilling_instructions": [
            "Analyze usage skew—power users can drive 10x higher token costs than median users.",
            "Include evaluation and background agent runs in COGS calculations.",
            "Simulate margin impact under different adoption scenarios."
          ],
          "references": [
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Safety, Privacy & Compliance",
          "tasks": [
            "Define PII boundaries, data retention rules, and tenant isolation requirements",
            "Map product risks to EU AI Act, NIST AI RMF, and OWASP LLM Top 10",
            "Partner with legal and security on red-teaming and escalation playbooks"
          ],
          "upskilling_instructions": [
            "Use your data-governance experience to audit where sensitive fields might leak into prompts or logs.",
            "Ensure clear user consent and AI transparency in the interface.",
            "Document compliance posture for enterprise buyers."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Experimentation & Controlled Rollouts",
          "tasks": [
            "Design A/B tests, shadow deployments, and holdout groups for AI features",
            "Monitor primary outcome metrics and guardrail metrics (latency, error rate, user edits)",
            "Coordinate beta enablement, support docs, and GTM readiness"
          ],
          "upskilling_instructions": [
            "Design experiments to measure true incremental value (time saved, retention, conversion), not just clicks on an AI button.",
            "Set clear statistical stopping and rollback rules.",
            "Share transparent launch readouts."
          ],
          "references": [
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Growth, Retention & Data Flywheels",
          "tasks": [
            "Analyze cohort retention, feature stickiness, and edit-distance trends",
            "Design ethical feedback loops that improve retrieval and evals from real usage",
            "Prioritize onboarding and workflow integrations (e.g., MCP) that drive habit formation"
          ],
          "upskilling_instructions": [
            "Distinguish initial curiosity spikes from sustained 30-day workflow retention.",
            "Look for segments where AI fails consistently and fix those workflows first.",
            "Close the loop between analytics insights and roadmap updates."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Product Strategy & Roadmapping",
          "tasks": [
            "Build a 12-month AI product strategy grounded in data moats and customer ROI",
            "Present build-vs-buy and model-portability recommendations to executives",
            "Align engineering, design, analytics, and GTM on quarterly OKRs"
          ],
          "upskilling_instructions": [
            "Anchor roadmap pitches in validated metrics and customer evidence rather than AI buzzwords.",
            "Keep architecture flexible enough to adopt faster, cheaper models as they launch.",
            "Communicate tradeoffs decisively."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI PM Portfolio & Interview Readiness",
          "tasks": [
            "Create 2 end-to-end AI PM case studies highlighting metric design, evals, and launch impact",
            "Practice product-sense, analytics, and AI system-design interview questions",
            "Position your data rigor as a rare competitive edge in AI product management"
          ],
          "upskilling_instructions": [
            "Most PMs struggle with probabilistic evals and unit economics—make those the centerpiece of your portfolio.",
            "Practice walking through an AI PRD and A/B test readout concisely.",
            "Be ready to critique real AI products on UX, evals, and business model."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "AI Product Manager",
      "title": "Product Manager to AI Product Manager",
      "summary": "A focused 2026 upskilling path for practicing PMs to master reasoning models, context engineering, MCP ecosystems, eval-driven PRDs, and AI unit economics.",
      "base_difficulty": 46,
      "months": [
        {
          "month": 1,
          "focus": "2026 AI Stack & Paradigm Mastery",
          "tasks": [
            "Study frontier vs open-weight models, reasoning models, context engineering, RAG, RFT/fine-tuning, and MCP agents",
            "Map each technical paradigm to product latency, accuracy, and cost characteristics",
            "Build an internal AI glossary and architecture cheat-sheet for your team"
          ],
          "upskilling_instructions": [
            "Know when a workflow needs simple structured prompting, hybrid RAG, fine-tuning, or a multi-step agent.",
            "Test multiple frontier and open-weight models hands-on so you feel their real latency and reasoning differences.",
            "Focus on solving user problems, not shipping AI for its own sake."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 2,
          "focus": "AI Opportunity Discovery & Prioritization",
          "tasks": [
            "Audit core user journeys for high-friction, high-frequency bottlenecks suited to AI",
            "Evaluate data availability, verification cost, and error tolerance per candidate use case",
            "Build a scored prioritization matrix with engineering and design leads"
          ],
          "upskilling_instructions": [
            "Avoid high-stakes workflows with zero error tolerance unless human review fits naturally into the flow.",
            "Assess whether your product already has the context/data needed for accurate responses.",
            "Validate value before scoping complex agentic architectures."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 3,
          "focus": "AI Discovery & Trust Research",
          "tasks": [
            "Run user interviews probing trust, explainability, and willingness to delegate to AI agents",
            "Test low-fidelity concepts of copilot vs autonomous background workflows",
            "Document user mental models and privacy concerns"
          ],
          "upskilling_instructions": [
            "Watch where users hesitate to click 'send' or 'apply' on AI suggestions—that is your trust gap.",
            "Distinguish tasks users want accelerated from tasks they want fully delegated.",
            "Capture concrete edge cases directly from customer workflows."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Eval-Driven PRDs & Agentic Specs",
          "tasks": [
            "Write an AI PRD including golden test cases, quality thresholds, human-in-the-loop states, and fallbacks",
            "Define permissions, undo/rollback, and escalation rules for tool-calling agents",
            "Align engineering on p95 latency and cost-per-task SLAs"
          ],
          "upskilling_instructions": [
            "Specify what 'good', 'acceptable', and 'unacceptable' outputs look like with concrete examples.",
            "Design human approval gates for any irreversible or external action.",
            "Treat prompt/model behavior specs as living, versioned artifacts."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Hands-On Prototyping & Prompt Testing",
          "tasks": [
            "Build working AI prototypes using AI Studio, coding agents, or no-code/low-code tools",
            "Test prompts against 30+ messy real-world inputs and log failure patterns",
            "Run rapid usability tests on real, non-scripted model outputs"
          ],
          "upskilling_instructions": [
            "Never judge an AI feature from 3 cherry-picked demo prompts—test the messy middle and edge cases.",
            "Use prototypes to align design and engineering much faster than long documents.",
            "Measure how often users have to edit or retry outputs."
          ],
          "references": [
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation Systems & SME Calibration",
          "tasks": [
            "Co-design golden datasets and grading rubrics with domain SMEs",
            "Implement automated evals (deterministic + LLM-as-a-judge) in the release workflow",
            "Run weekly trace reviews to diagnose retrieval, reasoning, and UX gaps"
          ],
          "upskilling_instructions": [
            "Verify automated judges correlate with human SME ratings before using them as launch gates.",
            "Track eval scores across every model or prompt change to prevent silent regressions.",
            "Turn customer bug reports directly into new eval cases."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Unit Economics & Monetization",
          "tasks": [
            "Model gross margins across token usage, reasoning compute, caching, and retrieval",
            "Design smart model-routing and caching tiers with engineering",
            "Evaluate seat, usage, credit, and outcome-based pricing models"
          ],
          "upskilling_instructions": [
            "Stress-test pricing against heavy agentic power users.",
            "Factor in evals, retries, and background indexing into total AI COGS.",
            "Communicate margin levers clearly to leadership."
          ],
          "references": [
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Safety, Privacy, EU AI Act & Governance",
          "tasks": [
            "Define data residency, zero-retention, and PII handling requirements",
            "Map product risks to EU AI Act, NIST AI RMF, and OWASP LLM Top 10",
            "Establish red-teaming, abuse monitoring, and incident escalation playbooks"
          ],
          "upskilling_instructions": [
            "Build trust by making AI provenance, citations, and data boundaries transparent to buyers.",
            "Ensure enterprise permissioning is enforced in backend retrieval, not just prompts.",
            "Partner early with legal and InfoSec."
          ],
          "references": [
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Beta Rollouts & Online Experimentation",
          "tasks": [
            "Plan phased rollouts (internal dogfood -> design partners -> A/B test -> GA)",
            "Define primary outcome KPIs and safety/latency guardrail metrics",
            "Create GTM enablement, customer education, and support escalation docs"
          ],
          "upskilling_instructions": [
            "Measure real workflow completion and retention rather than novelty clicks.",
            "Set clear automated rollback triggers for latency spikes or quality drops.",
            "Equip support teams with trace-lookup tools for customer issues."
          ],
          "references": [
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Adoption, Retention & Ecosystem Integrations",
          "tasks": [
            "Analyze onboarding funnels, edit rates, and repeat-usage cohorts",
            "Leverage MCP integrations to connect your AI product into customers' existing tools",
            "Build ethical feedback loops that continuously improve evals and context"
          ],
          "upskilling_instructions": [
            "AI features stick when they live inside the user's daily workflow rather than forcing a separate chat tab.",
            "Fix top abandonment triggers before adding new capabilities.",
            "Measure time-to-value in the first 5 minutes."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Strategy & Competitive Defensibility",
          "tasks": [
            "Define a 12-month AI product vision anchored in proprietary data, workflow lock-in, and eval quality",
            "Assess build-vs-buy and multi-model portability strategies",
            "Present roadmap tradeoffs and ROI forecasts to executive stakeholders"
          ],
          "upskilling_instructions": [
            "Assume base models will keep getting faster, cheaper, and smarter—build product moats that compound with model progress.",
            "Avoid locking into a single model version without an eval-backed migration path.",
            "Align product, engineering, and GTM on clear quarterly outcomes."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI PM Case Studies & Executive Readiness",
          "tasks": [
            "Publish a polished AI PM case study covering discovery, evals, launch metrics, and margin management",
            "Prepare concrete stories on handling hallucinations, safety, and cross-functional tradeoffs",
            "Lead AI product initiatives or interview confidently for Senior/Staff AI PM roles"
          ],
          "upskilling_instructions": [
            "Show measurable business outcomes alongside rigorous eval and unit-economics discipline.",
            "Be ready to whiteboard an AI feature from user problem to eval pipeline and rollout.",
            "Demonstrate deep fluency in both user empathy and 2026 AI systems."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "AI Product Manager",
      "title": "UX Designer to AI Product Manager",
      "summary": "A 2026 pathway turning UX research and interaction design mastery into AI product management, human-centered evals, AI prototyping, and strategic ownership.",
      "base_difficulty": 56,
      "months": [
        {
          "month": 1,
          "focus": "AI Capabilities & Product Architecture",
          "tasks": [
            "Learn 2026 AI primitives: reasoning models, RAG, context engineering, multimodal models, and MCP agents",
            "Map each capability to concrete UX patterns (streaming, generative UI, copilot, background agent)",
            "Write a product teardown analyzing UX and business tradeoffs of leading AI apps"
          ],
          "upskilling_instructions": [
            "Connect technical primitives directly to user experience: latency, predictability, and error recovery.",
            "Understand why deterministic UI still beats chat for many structured tasks.",
            "Practice framing technical constraints in product terms."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Problem Discovery & Opportunity Sizing",
          "tasks": [
            "Conduct discovery interviews to uncover high-friction workflows where AI adds real leverage",
            "Quantify opportunity size, frequency, and user verification overhead",
            "Prioritize AI bets with engineering and business stakeholders"
          ],
          "upskilling_instructions": [
            "Use your research strengths to spot where users actually struggle vs where they just say they want AI.",
            "Check data readiness and cost feasibility before committing to a concept.",
            "Align on measurable success criteria early."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Human-Centered AI & Trust Design",
          "tasks": [
            "Define UX patterns for uncertainty, source provenance, confidence cues, and error recovery",
            "Test copilot vs autonomous agent concepts with users to calibrate control",
            "Synthesize trust and accessibility requirements into product principles"
          ],
          "upskilling_instructions": [
            "Design for graceful failure: when AI is wrong or unsure, recovery must be effortless.",
            "Ensure users always feel in control of consequential actions.",
            "Include accessibility and diverse user needs from day one."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Eval-Driven PRDs & Acceptance Criteria",
          "tasks": [
            "Write an AI PRD combining user flows, HITL states, golden eval cases, and quality thresholds",
            "Define latency, cost, and safety guardrails with engineering",
            "Specify clear fallback behavior for low-confidence or blocked outputs"
          ],
          "upskilling_instructions": [
            "Translate qualitative UX expectations into concrete eval rubrics and test cases.",
            "Include edge cases, refusals, and empty states in every AI spec.",
            "Align engineering, design, and QA around shared release criteria."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Live AI Prototyping & Usability Testing",
          "tasks": [
            "Build interactive AI prototypes using AI Studio, v0/coding agents, or Vercel AI SDK",
            "Run usability tests using live, unscripted model outputs rather than static mocks",
            "Iterate on prompts, context, and UI framing based on real user reactions"
          ],
          "upskilling_instructions": [
            "Testing static Figma mocks hides latency, streaming awkwardness, and weird model phrasing—always test with real models.",
            "Observe how users recover when the prototype gives a mediocre answer.",
            "Feed discovered failure modes into your golden eval set."
          ],
          "references": [
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation Rigor & Quality Loops",
          "tasks": [
            "Partner with SMEs to grade outputs and calibrate LLM-as-a-judge rubrics",
            "Track edit distance, regeneration rate, and eval pass rates together",
            "Lead weekly quality reviews prioritizing the highest-impact UX and model fixes"
          ],
          "upskilling_instructions": [
            "Combine quantitative eval scores with qualitative trace reading—numbers tell you what broke, traces tell you why.",
            "Ensure automated metrics reflect real user satisfaction.",
            "Gate releases on regression checks."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Business Models & Unit Economics",
          "tasks": [
            "Learn token, reasoning, and retrieval cost drivers and model product gross margins",
            "Collaborate with engineering on model routing and caching tradeoffs",
            "Design pricing and packaging aligned with delivered customer value"
          ],
          "upskilling_instructions": [
            "Understand how UX choices (e.g., auto-triggering vs explicit button, streaming previews) directly impact token spend.",
            "Account for power users and background agent runs in financial models.",
            "Tie product investments to clear ROI."
          ],
          "references": [
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Safety, Privacy & Responsible AI Governance",
          "tasks": [
            "Define transparent AI disclosures, data boundaries, and consent flows",
            "Map product risks to EU AI Act, NIST AI RMF, and OWASP LLM Top 10",
            "Establish escalation paths and abuse-prevention requirements"
          ],
          "upskilling_instructions": [
            "Make privacy and data-usage boundaries crystal clear in the UI without legalese.",
            "Design safe confirmation patterns for MCP tools and external actions.",
            "Partner with security and legal before beta launch."
          ],
          "references": [
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Launch Planning & Experimentation",
          "tasks": [
            "Design phased beta rollouts and A/B experiments with clear guardrail metrics",
            "Build onboarding, empty states, and example prompts that teach users what the AI does well",
            "Prepare enablement materials for support, sales, and customer success"
          ],
          "upskilling_instructions": [
            "Great onboarding is half the battle in AI products—show users realistic high-value starting points.",
            "Track task completion and retention, not just first-day curiosity.",
            "Define crisp rollback criteria."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Growth, Retention & Continuous Learning",
          "tasks": [
            "Analyze adoption funnels, retention cohorts, and user-edit patterns",
            "Design non-intrusive feedback mechanisms that improve evals and retrieval",
            "Expand workflow integration via MCP or embedded product surfaces"
          ],
          "upskilling_instructions": [
            "Move AI out of isolated sidebars into the natural flow of user work.",
            "Use qualitative follow-ups with churned users to fix trust or utility gaps.",
            "Iterate rapidly on high-impact friction points."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Product Strategy & Leadership",
          "tasks": [
            "Define a 12-month AI product vision balancing UX differentiation, data moats, and margin health",
            "Present strategic tradeoffs and build-vs-buy decisions to executives",
            "Lead cross-functional planning across engineering, design, data, and GTM"
          ],
          "upskilling_instructions": [
            "Position human-centered design and eval rigor as your product's core competitive advantage.",
            "Keep roadmaps adaptable as model capabilities evolve.",
            "Communicate crisp business rationale behind every bet."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI PM Portfolio & Transition",
          "tasks": [
            "Publish 2 end-to-end AI PM case studies showcasing discovery, live prototyping, evals, and outcomes",
            "Practice AI PM product-sense, analytics, and execution interviews",
            "Highlight your unique blend of UX craft, live AI prototyping, and business rigor"
          ],
          "upskilling_instructions": [
            "Show that you own outcomes, metrics, and strategy—not just interface polish.",
            "Walk interviewers through how you turned user research into eval rubrics and shipped impact.",
            "Target AI-native product teams that prize design-minded PMs."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Product Manager",
      "title": "Default Path to AI Product Manager",
      "summary": "A comprehensive 2026 baseline path into AI Product Management covering AI architecture literacy, discovery, eval-driven PRDs, unit economics, and safe launches.",
      "base_difficulty": 62,
      "months": [
        {
          "month": 1,
          "focus": "2026 AI Technology & Market Fluency",
          "tasks": [
            "Learn core 2026 AI paradigms: LLMs, reasoning models, RAG, context engineering, fine-tuning, and MCP agents",
            "Analyze real AI products to see how they handle latency, accuracy, and trust",
            "Build a structured vocabulary brief for engineering and business alignment"
          ],
          "upskilling_instructions": [
            "Test multiple leading AI models hands-on so you understand strengths, failure modes, and cost tiers firsthand.",
            "Learn when simple rules or classical ML outperform generative AI.",
            "Focus on user outcomes rather than technology novelty."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Use Case Selection & Prioritization",
          "tasks": [
            "Identify high-friction workflows where AI creates measurable time or quality gains",
            "Score opportunities on user value, data readiness, error tolerance, and unit economics",
            "Define clear non-goals and out-of-scope boundaries"
          ],
          "upskilling_instructions": [
            "Avoid automating high-stakes tasks without a natural human-review step.",
            "Verify that required source data is accessible, clean, and permissioned.",
            "Start with narrow, high-frequency workflows."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Customer Discovery & Trust Validation",
          "tasks": [
            "Conduct structured user interviews focused on current workflows and pain points",
            "Validate willingness to rely on AI outputs and identify trust blockers",
            "Synthesize findings into target personas and jobs-to-be-done"
          ],
          "upskilling_instructions": [
            "Listen for how much manual verification users will tolerate before abandoning an AI tool.",
            "Capture real examples of messy inputs users work with daily.",
            "Share research recordings and insights with engineering and design."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Eval-Driven PRDs & Specifications",
          "tasks": [
            "Write an AI PRD with golden test cases, quality thresholds, latency/cost budgets, and HITL states",
            "Define fallback behaviors for refusals, low confidence, and tool errors",
            "Align engineering, design, and QA on release gates"
          ],
          "upskilling_instructions": [
            "Include 30+ concrete input-output examples in your PRD so ambiguity is eliminated early.",
            "Require explicit user confirmation before any irreversible agent action.",
            "Treat eval criteria as living product requirements."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Hands-On AI Prototyping",
          "tasks": [
            "Build a working AI prototype using AI Studio, coding agents, or low-code tools",
            "Test prompts and context setups against messy real-world inputs",
            "Run quick usability sessions with live model outputs"
          ],
          "upskilling_instructions": [
            "Prototyping yourself builds intuition for context limits, latency, and edge-case failures.",
            "Log failure cases from prototype testing directly into your eval set.",
            "Iterate quickly before locking in engineering specs."
          ],
          "references": [
            {
              "title": "Google Gemini API & AI Studio",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation & Quality Operations",
          "tasks": [
            "Co-create golden datasets and grading rubrics with domain SMEs",
            "Set up automated eval tracking with Langfuse or Promptfoo",
            "Run weekly error-triage sessions to categorize and fix top failure modes"
          ],
          "upskilling_instructions": [
            "Calibrate automated LLM judges against human SME scores.",
            "Track quality regressions across every prompt, retrieval, or model update.",
            "Separate retrieval issues from reasoning or UX issues."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo LLM Evaluation",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Unit Economics & Pricing",
          "tasks": [
            "Model COGS across tokens, reasoning compute, caching, retrieval, and evals",
            "Explore model routing and prompt caching to improve gross margins",
            "Design pricing (tiered, usage, credits, or outcome-based) aligned with customer value"
          ],
          "upskilling_instructions": [
            "Stress-test financial models against heavy power users and agent loops.",
            "Monitor cost per completed user task, not just cost per API call.",
            "Partner with engineering on cost-saving architecture choices."
          ],
          "references": [
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Safety, Privacy & Compliance",
          "tasks": [
            "Define data privacy boundaries, PII handling, and tenant isolation",
            "Map product risks to EU AI Act, NIST AI RMF, and OWASP LLM Top 10",
            "Create abuse-prevention, red-teaming, and escalation playbooks"
          ],
          "upskilling_instructions": [
            "Make AI disclosures, citations, and data controls clear to both users and enterprise buyers.",
            "Enforce access controls in backend data layers, not just prompts.",
            "Review compliance early with legal and security."
          ],
          "references": [
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Beta Launch & Experimentation",
          "tasks": [
            "Plan phased rollouts (dogfood -> beta -> A/B test -> GA) with clear rollback triggers",
            "Define outcome KPIs alongside latency, safety, and quality guardrails",
            "Prepare customer onboarding, enablement, and support playbooks"
          ],
          "upskilling_instructions": [
            "Measure real workflow completion and retention over novelty usage.",
            "Use shadow or canary rollouts when swapping underlying models.",
            "Equip support teams with clear troubleshooting guides."
          ],
          "references": [
            {
              "title": "Evidently AI Evaluation Concepts",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Adoption, Retention & Feedback Loops",
          "tasks": [
            "Analyze onboarding drop-offs, user edit rates, and 30-day cohort retention",
            "Integrate AI into existing user workflows via APIs or MCP connectors",
            "Turn user feedback and edits into continuous eval improvements"
          ],
          "upskilling_instructions": [
            "Focus on reducing friction to first value within the user's first session.",
            "Fix recurring quality gaps before expanding scope.",
            "Keep feedback loops lightweight and respectful of user privacy."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "DuckDB Analytics SQL",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Product Strategy & Stakeholder Alignment",
          "tasks": [
            "Create a 12-month AI roadmap anchored in defensible data and workflow moats",
            "Present build-vs-buy and multi-model portability tradeoffs to leadership",
            "Align engineering, design, data, and GTM on measurable quarterly goals"
          ],
          "upskilling_instructions": [
            "Design roadmaps that benefit as foundation models get faster and cheaper.",
            "Communicate uncertainty and eval-backed confidence honestly.",
            "Stay grounded in customer ROI."
          ],
          "references": [
            {
              "title": "Anthropic Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OpenAI Platform & Evals Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI PM Portfolio & Interview Prep",
          "tasks": [
            "Publish 2 comprehensive AI PM case studies showing discovery, evals, launch metrics, and economics",
            "Practice product-sense, metrics, and technical AI PM interviews",
            "Demonstrate fluency across user empathy, eval rigor, and business impact"
          ],
          "upskilling_instructions": [
            "Show concrete before/after metrics and real lessons from failed prototypes or evals.",
            "Be ready to walk through an end-to-end AI PRD on a whiteboard.",
            "Keep up with model, protocol (MCP), and regulatory shifts."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "EU AI Act Service Desk & Timeline",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Generalist",
      "title": "General AI Career Roadmap",
      "summary": "A 2026 foundation roadmap for professionals from any background to build practical AI fluency: modern Python, ML basics, context engineering, MCP workflows, evals, and shipping an AI project.",
      "base_difficulty": 68,
      "months": [
        {
          "month": 1,
          "focus": "2026 AI Landscape & Core Concepts",
          "tasks": [
            "Learn core 2026 AI concepts: LLMs, reasoning models, embeddings, RAG, fine-tuning, and MCP agents",
            "Compare major AI career tracks (AI Engineer, ML Engineer, Agentic AI Engineer, AI PM, AI UX)",
            "Audit your current domain strengths to pick a high-leverage direction"
          ],
          "upskilling_instructions": [
            "Use multiple frontier and open-weight models daily to build intuition for what they solve well and where they hallucinate.",
            "Focus on practical capabilities and limitations rather than hype.",
            "Write a short 1-page plan mapping your existing skills to 2 target roles."
          ],
          "references": [
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Python & Git Foundations",
          "tasks": [
            "Set up Python with uv and learn Git version control basics",
            "Practice variables, functions, JSON handling, and calling REST APIs",
            "Build a small automation script that summarizes or organizes local files"
          ],
          "upskilling_instructions": [
            "Code a little every day and commit small working steps to Git.",
            "Use AI coding assistants to explain syntax, but verify every script by running it yourself.",
            "Keep API keys in environment variables, never inside code."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Git Reference Manual",
              "url": "https://git-scm.com/doc"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Data Literacy & Exploration",
          "tasks": [
            "Clean, filter, and aggregate real CSV/JSON datasets using Polars or DuckDB",
            "Create clear summary charts and spot missing values, outliers, and biases",
            "Write a short data brief explaining what the dataset can and cannot support"
          ],
          "upskilling_instructions": [
            "Always inspect raw records before trusting aggregate averages.",
            "Document every cleaning assumption so results are reproducible.",
            "Practice explaining data findings clearly to non-technical teammates."
          ],
          "references": [
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Machine Learning Fundamentals",
          "tasks": [
            "Learn supervised vs unsupervised learning, train/test splits, and evaluation metrics",
            "Train simple scikit-learn classifiers and regressors on tabular data",
            "Compare classical ML models against zero-shot LLM prompts"
          ],
          "upskilling_instructions": [
            "Understand why simple classical models often beat LLMs on structured tabular prediction.",
            "Check precision, recall, and confusion matrices rather than raw accuracy alone.",
            "Watch out for data leakage between training and test splits."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Context Engineering & Structured Outputs",
          "tasks": [
            "Design clear system prompts, few-shot examples, and strict JSON Schema outputs",
            "Learn when to use fast models vs reasoning models with thinking budgets",
            "Test prompts systematically across tricky and ambiguous inputs"
          ],
          "upskilling_instructions": [
            "Treat prompts like structured specifications—give clear roles, constraints, and edge-case instructions.",
            "Validate structured JSON outputs with Pydantic instead of fragile regex parsing.",
            "Log token usage and response latency."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Rapid AI Prototyping",
          "tasks": [
            "Build a working AI workflow or web demo using FastAPI or AI Studio",
            "Share the prototype with 3-5 real users and watch where they get stuck",
            "Iterate on UX, error states, and prompt context based on feedback"
          ],
          "upskilling_instructions": [
            "Test with messy, unscripted user inputs rather than idealized examples.",
            "Add clear loading states and helpful error messages.",
            "Record what failed so you can turn it into automated tests."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Embeddings & Retrieval (RAG)",
          "tasks": [
            "Generate text embeddings and build semantic + keyword hybrid search with Qdrant or pgvector",
            "Chunk documents cleanly while preserving headings and page metadata",
            "Return grounded answers with clickable source citations"
          ],
          "upskilling_instructions": [
            "Inspect retrieved chunks whenever a RAG answer is wrong—retrieval quality drives answer quality.",
            "Include 'I do not have enough information in the provided sources' fallback handling.",
            "Test how your system handles tables and multi-page documents."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Evaluation & Regression Testing",
          "tasks": [
            "Create a 30-50 case golden eval set covering normal queries and edge cases",
            "Score outputs automatically with Promptfoo or Langfuse",
            "Track quality regressions whenever you update prompts, models, or retrieval"
          ],
          "upskilling_instructions": [
            "Never rely on 'vibe checks' alone—measure pass rates across a repeatable test set.",
            "Turn every bug or hallucination into a new permanent eval case.",
            "Track quality, latency, and cost together."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "MCP & Workflow Automation",
          "tasks": [
            "Connect an AI assistant to local tools or APIs using Model Context Protocol (MCP)",
            "Add human-in-the-loop approval before any external write or send action",
            "Measure task completion rate and tool-call accuracy"
          ],
          "upskilling_instructions": [
            "Keep tool permissions minimal and read-only wherever possible.",
            "Require explicit user confirmation for irreversible actions.",
            "Log every tool call so you can audit what the agent did."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment & Operations Basics",
          "tasks": [
            "Package your AI app in Docker and deploy a live demo",
            "Add health checks, rate limiting, and spend alerts",
            "Monitor logs, latency, and error rates in production"
          ],
          "upskilling_instructions": [
            "Set daily/monthly API spend caps before sharing any public demo.",
            "Keep staging and production configs clean via environment variables.",
            "Test graceful error handling when an upstream API times out."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Responsible AI, Privacy & Security",
          "tasks": [
            "Learn OWASP Top 10 LLM risks including prompt injection and sensitive data exposure",
            "Apply PII redaction and access controls before sending data to external APIs",
            "Document limitations, bias risks, and privacy boundaries using NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Never paste confidential customer or company data into unapproved public tools.",
            "Treat retrieved external content as untrusted input that could contain prompt injections.",
            "Be transparent with users about when they are interacting with AI."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone & Career Positioning",
          "tasks": [
            "Ship a complete, documented AI project solving a real problem in your domain",
            "Publish a case study explaining architecture, eval results, and lessons learned",
            "Tailor your resume and portfolio for your chosen AI role and network with practitioners"
          ],
          "upskilling_instructions": [
            "Your existing domain expertise combined with real AI building skills is your strongest differentiator.",
            "Show concrete metrics (time saved, eval accuracy, cost) rather than generic demos.",
            "Make your project easy to run and inspect."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Engineer",
      "target_ai_role": "AI Generalist",
      "title": "Data Engineer to AI Generalist",
      "summary": "A 2026 path turning data-pipeline and lakehouse expertise into multimodal ETL for RAG, hybrid vector indexing, AI data governance, and production AI workflows.",
      "base_difficulty": 62,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python AI Stack & Lakehouse Interop",
          "tasks": [
            "Standardize Python AI pipelines with uv, ruff, and Pydantic v2",
            "Process large structured and unstructured datasets with Polars, DuckDB, and Apache Iceberg",
            "Build tested ingestion scripts converting messy logs and documents into clean Parquet/Iceberg tables"
          ],
          "upskilling_instructions": [
            "Combine Polars and DuckDB for blazing-fast local/single-node AI data prep before spinning up heavy clusters.",
            "Enforce strict Pydantic schemas at ingestion boundaries.",
            "Version raw and processed datasets cleanly."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Apache Iceberg Documentation",
              "url": "https://iceberg.apache.org/docs/latest/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "EDA & Feature Engineering for AI",
          "tasks": [
            "Profile text, tabular, and metadata distributions with DuckDB SQL",
            "Build deterministic, leakage-free feature transforms",
            "Automate data-quality checks for nulls, duplicates, and schema drift"
          ],
          "upskilling_instructions": [
            "Deduplicate near-identical documents before embedding—duplicate chunks pollute RAG retrieval.",
            "Verify online-offline feature parity.",
            "Log data quality metrics on every pipeline run."
          ],
          "references": [
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical ML in Data Pipelines",
          "tasks": [
            "Train scikit-learn baselines for classification, routing, and anomaly detection",
            "Run time-aware cross-validation and hyperparameter sweeps",
            "Package preprocessing + model inference into reproducible batch jobs"
          ],
          "upskilling_instructions": [
            "Use lightweight classical models inside ETL pipelines for cheap tagging and filtering before calling LLMs.",
            "Audit splits carefully for temporal leakage.",
            "Track feature importance."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning & Embedding Mechanics",
          "tasks": [
            "Learn PyTorch tensor basics, batching, and GPU-accelerated embedding generation",
            "Benchmark open-weight embedding and reranker models on your domain corpus",
            "Optimize batch sizes and sequence lengths for high-throughput vectorization"
          ],
          "upskilling_instructions": [
            "Measure tokens/sec and VRAM usage when running local embedding models.",
            "Compare general embeddings against domain-tuned or multilingual models.",
            "Cache embeddings keyed by content hash to avoid recomputing unchanged docs."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Batch LLM Extraction & Async Pipelines",
          "tasks": [
            "Build async Python pipelines calling LLM APIs with structured JSON outputs",
            "Implement rate-limit backoff, checkpointing, and dead-letter queues for failed rows",
            "Compare real-time vs batch API pricing for large-scale enrichment"
          ],
          "upskilling_instructions": [
            "Always checkpoint completed batches to Parquet/DuckDB so long runs resume cleanly.",
            "Use batch APIs and prompt caching to cut enrichment costs by 50%+.",
            "Validate every LLM-extracted record with Pydantic."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Multimodal Document Parsing & Chunking",
          "tasks": [
            "Parse complex PDFs, tables, and slide decks using vision-language models (VLMs) and layout parsers",
            "Implement structure-aware chunking preserving headers, tables, and source URLs",
            "Store rich metadata for hybrid filtering"
          ],
          "upskilling_instructions": [
            "Stop relying solely on naive PDF text extraction—tables and charts require layout-aware or VLM parsing.",
            "Attach document ACLs, timestamps, and section titles to every chunk.",
            "Test chunking on your ugliest real enterprise documents."
          ],
          "references": [
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Hybrid Vector Indexing & Incremental ETL",
          "tasks": [
            "Build hybrid search indexes (BM25 + dense vectors + reranking) in Qdrant or pgvector",
            "Implement incremental CDC-style syncs that handle inserts, updates, and deletes cleanly",
            "Measure retrieval recall@k and latency across index configurations"
          ],
          "upskilling_instructions": [
            "Stale or deleted documents in a vector DB are a top enterprise AI bug—test deletes and permission updates.",
            "Benchmark HNSW/quantization settings for memory vs recall tradeoffs.",
            "Monitor index freshness SLAs."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Data Quality & RAG Evaluation",
          "tasks": [
            "Build a golden 100-query evaluation dataset grounded in your indexed corpus",
            "Score retrieval precision, faithfulness, and answer relevance with Langfuse or Promptfoo",
            "Trace bad answers back to specific ETL, chunking, or staleness bugs"
          ],
          "upskilling_instructions": [
            "Run retrieval evals automatically whenever your chunking or embedding pipeline changes.",
            "Slice eval scores by document type (PDFs vs wikis vs tickets).",
            "Track token and storage cost per 1,000 indexed documents."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Context Pipelines & MCP Data Connectors",
          "tasks": [
            "Build MCP servers exposing curated warehouse tables, semantic metrics, and document search",
            "Design read-only query sandboxes with row limits and query timeouts",
            "Provide agents with clean schema descriptions and example queries"
          ],
          "upskilling_instructions": [
            "Data Engineers are uniquely positioned to build reliable MCP data connectors that prevent hallucinated SQL.",
            "Enforce permissions at the warehouse/query layer, never in prompts.",
            "Log every agent-generated query for auditability."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Apache Iceberg Documentation",
              "url": "https://iceberg.apache.org/docs/latest/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Serving Data & AI Microservices",
          "tasks": [
            "Expose retrieval and scoring endpoints via FastAPI + Pydantic v2",
            "Containerize pipelines and services with Docker and CI via GitHub Actions",
            "Add OpenTelemetry GenAI traces and latency/throughput monitoring"
          ],
          "upskilling_instructions": [
            "Ensure batch and online feature/context logic share the same tested code.",
            "Set timeouts, retries, and health checks on all serving endpoints.",
            "Load-test concurrent retrieval queries."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Data Governance, Privacy & Lineage",
          "tasks": [
            "Scrub PII from unstructured text and embeddings using Microsoft Presidio",
            "Enforce row-level and document-level ACLs across lakehouse and vector stores",
            "Audit data lineage and compliance with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Remember that embeddings can leak sensitive information—strip PII before embedding.",
            "Maintain full lineage from source file to vector ID so GDPR/deletion requests are instant.",
            "Document data retention and third-party API boundaries."
          ],
          "references": [
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Enterprise AI Data & RAG Platform",
          "tasks": [
            "Ship an end-to-end incremental multimodal ETL -> hybrid vector/MCP -> FastAPI service with CI evals",
            "Publish architecture diagrams, freshness SLAs, retrieval metrics, and governance controls",
            "Position yourself for AI Data Engineer, AI Engineer, or Forward Deployed AI Engineer roles"
          ],
          "upskilling_instructions": [
            "Highlight what most AI devs lack: rock-solid incremental pipelines, ACL enforcement, and clean unstructured data.",
            "Show measurable retrieval and cost improvements.",
            "Keep the repo reproducible with Docker and uv."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "DevOps Engineer",
      "target_ai_role": "AI Generalist",
      "title": "DevOps Engineer to AI Generalist",
      "summary": "A 2026 roadmap leveraging cloud, Kubernetes, and SRE expertise into GPU/vLLM inference infrastructure, AI gateways, OpenTelemetry GenAI observability, and secure AI platforms.",
      "base_difficulty": 64,
      "months": [
        {
          "month": 1,
          "focus": "Python & Modern AI Runtime Basics",
          "tasks": [
            "Standardize Python tooling with uv, ruff, and Pydantic v2",
            "Understand LLM inference mechanics: tokens, KV-cache, context length, and VRAM sizing",
            "Build a CLI tool that queries model APIs and benchmarks latency/token throughput"
          ],
          "upskilling_instructions": [
            "Learn how KV-cache scales with batch size and sequence length—this drives GPU memory planning.",
            "Keep all tooling reproducible with uv lockfiles.",
            "Track TTFT (time-to-first-token) and inter-token latency separately."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "AI APIs, Gateways & Routing",
          "tasks": [
            "Build or configure an AI gateway handling multi-provider routing, retries, and fallbacks",
            "Implement per-team API keys, token rate limiting, and semantic/exact caching",
            "Enforce strict payload validation and timeout budgets at the gateway"
          ],
          "upskilling_instructions": [
            "Centralize provider keys, spend caps, and fallback routing in an AI gateway so app teams stay decoupled from vendors.",
            "Test circuit breakers against simulated 429 and 503 provider outages.",
            "Log token usage per team and environment."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            }
          ]
        },
        {
          "month": 3,
          "focus": "ML Lifecycle & Experiment Infrastructure",
          "tasks": [
            "Understand ML training, evaluation, and model-registry workflows",
            "Deploy an internal artifact/model registry and object-storage pipeline",
            "Automate reproducible container builds for Python ML workloads"
          ],
          "upskilling_instructions": [
            "Treat model weights, prompt templates, and eval datasets as versioned artifacts.",
            "Pin base CUDA/Python images and verify checksums.",
            "Separate dev, staging, and prod model buckets."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Containerizing GPU & Inference Workloads",
          "tasks": [
            "Build lean, multi-stage CUDA-ready Docker images for AI services",
            "Configure NVIDIA Container Toolkit, health checks, and model-weight caching",
            "Eliminate cold-start bottlenecks when pulling multi-gigabyte weights"
          ],
          "upskilling_instructions": [
            "Never bake 15GB model weights into application Docker images—mount pre-warmed volumes or fast object-store caches.",
            "Configure startup probes tuned for model loading times.",
            "Scan images for CVEs in CI."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 5,
          "focus": "High-Throughput Serving with vLLM",
          "tasks": [
            "Deploy open-weight models using vLLM with continuous batching and PagedAttention",
            "Benchmark FP8/AWQ quantization tradeoffs across throughput and GPU memory",
            "Load-test concurrent streaming requests to find saturation points"
          ],
          "upskilling_instructions": [
            "Measure tokens/sec and p95 TTFT under realistic concurrent prompt/output length distributions.",
            "Verify quantized models against quality evals before shipping.",
            "Tune max-model-len and gpu-memory-utilization carefully."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Kubernetes for AI & GPU Scheduling",
          "tasks": [
            "Configure GPU node pools, device plugins, and resource quotas in Kubernetes",
            "Explore fractional GPUs (MIG / time-slicing) and autoscaling on inference queue depth",
            "Test zero-downtime rolling updates for heavy inference pods"
          ],
          "upskilling_instructions": [
            "Autoscale inference pods on active request/KV-cache queue depth, not just CPU utilization.",
            "Separate latency-sensitive online inference from preemptible batch/eval jobs on spot GPUs.",
            "Practice node drain and pod eviction drills."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI CI/CD & Automated Eval Gates",
          "tasks": [
            "Integrate Promptfoo or pytest eval suites into GitHub Actions",
            "Gate prompt, retrieval, and model-version promotions on automated quality/latency checks",
            "Implement canary/shadow traffic splitting for new model rollouts"
          ],
          "upskilling_instructions": [
            "Apply GitOps discipline to prompts, guardrail configs, and model routing rules.",
            "Run fast deterministic checks on every PR and full LLM evals on release candidates.",
            "Keep instant rollback paths ready."
          ],
          "references": [
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "OpenTelemetry GenAI Observability",
          "tasks": [
            "Instrument AI services with OpenTelemetry GenAI semantic conventions",
            "Build Prometheus & Grafana dashboards for TTFT, token burn, error rates, and GPU utilization",
            "Connect trace IDs to Langfuse for prompt/context debugging"
          ],
          "upskilling_instructions": [
            "Correlate infrastructure metrics (GPU memory, KV-cache usage) with application metrics (TTFT, cost/request).",
            "Set alerts on token-spend spikes and tail-latency regressions.",
            "Scrub PII from trace payloads before storing logs."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 9,
          "focus": "RAG & Vector Database Operations",
          "tasks": [
            "Deploy, back up, and monitor Qdrant or pgvector in production",
            "Plan memory/disk sizing, HNSW indexing tuning, and zero-downtime re-indexing",
            "Automate backup/restore drills for vector and metadata stores"
          ],
          "upskilling_instructions": [
            "Test restoring a vector collection from snapshot and verify query latency afterward.",
            "Monitor index memory pressure and disk IOPS.",
            "Separate staging and production vector namespaces."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Agent Sandboxing & MCP Infrastructure",
          "tasks": [
            "Deploy isolated execution sandboxes for agent code-running and tool workloads",
            "Configure secure internal MCP server hosting, auth, and network egress rules",
            "Enforce strict CPU, memory, and timeout caps on agentic tasks"
          ],
          "upskilling_instructions": [
            "Never run agent-generated code on shared application nodes—use isolated microVMs or hardened containers.",
            "Restrict outbound network egress from agent sandboxes by default.",
            "Audit MCP server credentials and scopes."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Security, FinOps & Governance",
          "tasks": [
            "Implement secrets rotation, zero-retention provider configs, and OWASP LLM controls",
            "Build GPU/API FinOps dashboards tracking cost per team, feature, and environment",
            "Document reliability and security compliance aligned with NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Right-size models and GPU instances regularly—idle GPUs burn budgets fast.",
            "Enforce automated spend circuit breakers.",
            "Run chaos/outage drills for model API failures."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Production AI Platform Stack",
          "tasks": [
            "Deliver a reproducible Kubernetes/Docker AI platform with vLLM, AI gateway, OpenTelemetry/Grafana, and CI eval gates",
            "Publish architecture diagrams, load-test results, FinOps benchmarks, and runbooks",
            "Position yourself for MLOps Engineer, AI Platform Engineer, or AI Systems Engineer roles"
          ],
          "upskilling_instructions": [
            "Showcase real infra numbers: cold-start time, p95 TTFT under load, GPU utilization, and cost per 1M tokens.",
            "Include clean Terraform/Helm/Compose manifests.",
            "Prepare incident-response stories for GPU OOMs and provider outages."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "QA Engineer",
      "target_ai_role": "AI Generalist",
      "title": "QA Engineer to AI Generalist",
      "summary": "A 2026 roadmap transforming QA and test-automation skills into probabilistic AI evaluation, Promptfoo/Inspect AI harnesses, agent trajectory testing, and LLM red-teaming.",
      "base_difficulty": 60,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python Test Automation",
          "tasks": [
            "Set up Python test projects with uv, ruff, and pytest",
            "Build parameterized pytest suites validating async LLM API wrappers and Pydantic schemas",
            "Generate structured test reports in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Leverage your QA mindset: test boundary inputs, empty strings, Unicode, huge payloads, and timeouts.",
            "Use Pydantic v2 to assert strict structural contracts on AI outputs.",
            "Keep test suites fast and deterministic where possible."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Statistical & Probabilistic Testing",
          "tasks": [
            "Learn why AI outputs are non-deterministic and how to test distributions instead of single exact strings",
            "Compute precision, recall, F1, confidence intervals, and pass@k metrics",
            "Design repeatable test runs with temperature=0 and multi-trial pass rates"
          ],
          "upskilling_instructions": [
            "Replace brittle string-equality assertions with semantic, structural, and statistical thresholds.",
            "Track variance across multiple runs so flaky prompts are caught before release.",
            "Slice pass rates by input category."
          ],
          "references": [
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course"
            },
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "ML Testing & Data Drift Checks",
          "tasks": [
            "Write unit and invariant tests for classical ML models (monotonicity, invariance, null handling)",
            "Detect data drift and schema violations using Evidently AI",
            "Verify preprocessing parity between training and inference"
          ],
          "upskilling_instructions": [
            "Test metamorphic properties: e.g., changing a harmless synonym or formatting should not flip a classification.",
            "Automate data-quality gates before models run.",
            "Document clear failure severity levels."
          ],
          "references": [
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "LLM APIs & Output Contract Testing",
          "tasks": [
            "Test structured JSON outputs, tool-call schemas, and refusal handling across model providers",
            "Verify graceful fallback when models return truncated, malformed, or rate-limited responses",
            "Compare standard vs reasoning models on consistency and edge-case adherence"
          ],
          "upskilling_instructions": [
            "Build a mock/replay harness for fast CI unit tests alongside live-model integration suites.",
            "Test how the system handles model refusals and safety triggers.",
            "Log token counts and latency per test case."
          ],
          "references": [
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Golden Datasets & Eval Harnesses",
          "tasks": [
            "Curate versioned golden datasets covering happy paths, edge cases, and regression bugs",
            "Build automated eval suites using Promptfoo and Inspect AI",
            "Implement deterministic code graders alongside calibrated LLM-as-a-judge rubrics"
          ],
          "upskilling_instructions": [
            "Every production bug or weird user screenshot should become a permanent golden test case.",
            "Calibrate LLM judges against human QA labels so scores are trustworthy.",
            "Keep eval datasets versioned in Git."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Inspect AI Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 6,
          "focus": "RAG & Groundedness QA",
          "tasks": [
            "Test retrieval recall, citation accuracy, and hallucination rates in RAG pipelines",
            "Create adversarial queries where the answer is NOT in the knowledge base to verify honest 'I don't know' behavior",
            "Audit document parsing on messy tables, PDFs, and multi-column layouts"
          ],
          "upskilling_instructions": [
            "Separate retrieval QA from generation QA so devs know whether the search or the LLM failed.",
            "Verify every inline citation actually supports the sentence it is attached to.",
            "Test permission boundaries so unauthorized docs never leak into answers."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Agent Trajectory & MCP Tool Testing",
          "tasks": [
            "Test multi-step tool-calling agents for tool-selection accuracy, argument validity, and loop termination",
            "Build sandboxed mock MCP servers to test agent error recovery and retry logic",
            "Verify human-in-the-loop approval gates trigger on all state-changing actions"
          ],
          "upskilling_instructions": [
            "Assert on both final outcome AND the intermediate tool trajectory (e.g., no redundant or unauthorized calls).",
            "Simulate tool timeouts, 500 errors, and malformed tool responses.",
            "Verify step-budget caps prevent infinite agent loops."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Inspect AI Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Adversarial Red-Teaming & Security QA",
          "tasks": [
            "Design automated red-team suites for direct and indirect prompt injection",
            "Test for system-prompt leakage, PII exposure, and MCP tool poisoning",
            "Run automated adversarial scans with Promptfoo aligned to OWASP LLM Top 10"
          ],
          "upskilling_instructions": [
            "Think like an attacker: hide instructions inside uploaded PDFs, emails, or web pages retrieved by the app.",
            "Verify PII redaction and output sanitization (XSS/markdown injection) before UI rendering.",
            "Document reproducible exploit steps for every finding."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Performance, Latency & Cost Benchmarking",
          "tasks": [
            "Benchmark TTFT, tokens/sec, and concurrency under load",
            "Test streaming UI behavior under slow networks and mid-stream drops",
            "Add cost-regression assertions so prompt bloat fails CI"
          ],
          "upskilling_instructions": [
            "Monitor p95 and p99 latency—averages hide terrible tail experiences.",
            "Catch accidental context-window bloat early in PR checks.",
            "Test provider failover behavior."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 10,
          "focus": "CI/CD Eval Gates & Observability",
          "tasks": [
            "Wire Promptfoo / pytest evals into GitHub Actions with clear pass/fail thresholds",
            "Inspect production traces in Langfuse to discover new failure clusters",
            "Build release-readiness scorecards for product and engineering leads"
          ],
          "upskilling_instructions": [
            "Run fast deterministic checks on every commit and full eval suites nightly or on release candidates.",
            "Pin model versions during regression comparisons.",
            "Turn production trace anomalies into new test cases."
          ],
          "references": [
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Bias, Accessibility & Compliance Auditing",
          "tasks": [
            "Test AI outputs across demographic slices, languages, and edge-case personas",
            "Verify AI UIs meet accessibility standards (keyboard, screen-reader live regions)",
            "Map QA evidence to NIST AI RMF and EU AI Act documentation needs"
          ],
          "upskilling_instructions": [
            "Check for subtle tone or refusal disparities across user demographics.",
            "Ensure streaming responses are accessible to assistive technologies.",
            "Maintain auditable test evidence for enterprise compliance."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "Inspect AI Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Automated AI Quality & Red-Team Suite",
          "tasks": [
            "Deliver a complete CI-integrated AI evaluation and red-teaming framework for a RAG/agent app",
            "Publish a quality scorecard covering accuracy, trajectory safety, latency, and injection resilience",
            "Position yourself for AI QA Lead, AI Evaluation Engineer, or AI Safety Engineer roles"
          ],
          "upskilling_instructions": [
            "AI Evaluation Engineering is one of the fastest-growing specialties in 2026—your QA rigor is a direct superpower.",
            "Show real failure modes you caught and how your harness prevented regressions.",
            "Make the suite easy to run via `uv run` and GitHub Actions."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Inspect AI Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Frontend Engineer",
      "target_ai_role": "AI Generalist",
      "title": "Frontend Engineer to AI Generalist",
      "summary": "A 2026 roadmap helping frontend engineers adopt AI across their workflow: TypeScript AI SDKs, streaming/generative UI, WebGPU local models, MCP integrations, and evals.",
      "base_difficulty": 58,
      "months": [
        {
          "month": 1,
          "focus": "AI-Native Frontend Engineering",
          "tasks": [
            "Master AI-assisted coding workflows with repo context, rules, and spec-driven verification",
            "Learn 2026 AI fundamentals: tokens, context windows, reasoning models, RAG, and MCP",
            "Build a TypeScript utility calling LLM APIs with strict Zod validation"
          ],
          "upskilling_instructions": [
            "Use AI coding agents to accelerate boilerplate while keeping strict code review, type safety, and test coverage.",
            "Never ship unreviewed AI-generated code—verify accessibility, bundle size, and edge cases.",
            "Keep API keys strictly server-side."
          ],
          "references": [
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Streaming UI & Vercel AI SDK",
          "tasks": [
            "Build streaming chat and structured-object interfaces using SSE and Vercel AI SDK",
            "Design responsive loading, thinking, cancellation, and retry states",
            "Render streamed markdown and code blocks without layout shift or jank"
          ],
          "upskilling_instructions": [
            "Optimize perceived latency with immediate optimistic updates and smooth token rendering.",
            "Support AbortController cancellation on every streaming request.",
            "Ensure ARIA live regions announce updates cleanly for screen readers."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Generative UI & Structured Components",
          "tasks": [
            "Map typed LLM tool calls and JSON outputs directly to interactive React/Web components",
            "Design inline editing, diff previews, and one-click undo for AI-assisted actions",
            "Validate all dynamic component props with Zod before rendering"
          ],
          "upskilling_instructions": [
            "Go beyond plain chat boxes—render rich tables, forms, charts, and action cards where appropriate.",
            "Always give users a deterministic manual control alongside AI suggestions.",
            "Handle partial/incomplete streamed objects gracefully."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Browser & On-Device AI with WebGPU",
          "tasks": [
            "Run small embeddings, classifiers, or local LLMs in the browser via WebGPU / Transformers.js",
            "Cache model weights cleanly in IndexedDB/Cache API with progress indicators",
            "Build a hybrid local-first feature that falls back to cloud APIs when needed"
          ],
          "upskilling_instructions": [
            "Keep initial page load fast by lazy-loading AI weights only when the user opts in.",
            "Test fallback paths on browsers or devices without WebGPU.",
            "Highlight privacy benefits of local inference."
          ],
          "references": [
            {
              "title": "MDN WebGPU API",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Python & Backend AI Literacy",
          "tasks": [
            "Set up Python with uv to run embedding, data, and evaluation scripts",
            "Build a simple FastAPI endpoint and understand vector search fundamentals",
            "Connect your TypeScript frontend cleanly to Python AI microservices"
          ],
          "upskilling_instructions": [
            "Being comfortable across both TypeScript UIs and Python AI backends makes you far more versatile.",
            "Define shared OpenAPI/JSON schemas between backend and frontend.",
            "Log end-to-end request IDs across both layers."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "RAG Interfaces & Citation UX",
          "tasks": [
            "Connect a frontend to a hybrid search / RAG backend (pgvector or Qdrant)",
            "Build inline citation chips, hover previews, and split-pane source verification",
            "Display honest uncertainty when sources do not contain the answer"
          ],
          "upskilling_instructions": [
            "Users trust AI products when verifying a claim takes one click.",
            "Highlight exact retrieved passages inside the source viewer.",
            "Test long multi-document queries."
          ],
          "references": [
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Frontend Evals & UI Regression Testing",
          "tasks": [
            "Write Promptfoo evals for your prompts and structured UI schemas",
            "Add end-to-end tests covering streaming states, error banners, and cancellation",
            "Run automated checks in GitHub Actions on every PR"
          ],
          "upskilling_instructions": [
            "Mock model streams in fast UI unit tests, and run live Promptfoo evals on prompt changes.",
            "Verify visual stability (CLS) during token streaming.",
            "Track prompt regressions over time."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 8,
          "focus": "MCP Integrations & Agentic UX",
          "tasks": [
            "Connect your app to MCP servers and surface live tool-execution progress in the UI",
            "Build clear human-in-the-loop confirmation dialogs for external actions",
            "Persist multi-step agent state across page refreshes"
          ],
          "upskilling_instructions": [
            "Show exact parameters before executing any destructive or external tool call.",
            "Make long-running background agents resumable and inspectable.",
            "Avoid trapping users in opaque spinners."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Multimodal & Voice Web Experiences",
          "tasks": [
            "Add screenshot/image paste, drag-and-drop, and multimodal prompt flows",
            "Experiment with real-time browser audio/voice interactions and live transcripts",
            "Optimize client-side image resizing before upload to save bandwidth and tokens"
          ],
          "upskilling_instructions": [
            "Always offer keyboard and text alternatives alongside voice or camera UI.",
            "Show clear microphone and recording indicators.",
            "Test across mobile and desktop viewports."
          ],
          "references": [
            {
              "title": "Google Gemini API Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "MDN WebGPU API",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Observability, Caching & Cost Control",
          "tasks": [
            "Trace frontend-to-LLM latency and user feedback events in Langfuse",
            "Use prompt caching and fast models for instant UI helpers (autocomplete, titles)",
            "Implement per-user rate limits and graceful quota messages"
          ],
          "upskilling_instructions": [
            "Connect UI thumbs-up/down and edit events directly to backend trace IDs.",
            "Measure real TTFT from click to first visible token.",
            "Set clear spend alerts."
          ],
          "references": [
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Frontend AI Security & Accessibility",
          "tasks": [
            "Sanitize all LLM-generated markdown, HTML, and URLs to prevent XSS",
            "Defend against indirect prompt injection in user-uploaded content",
            "Audit AI interfaces for WCAG accessibility and transparent AI labeling"
          ],
          "upskilling_instructions": [
            "Never use `dangerouslySetInnerHTML` on raw model output—use strict markdown sanitizers and safe link policies.",
            "Verify keyboard-only navigation through citations, tool approvals, and streaming regions.",
            "Follow OWASP LLM Top 10 guidance."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: AI-Native Web Application",
          "tasks": [
            "Ship a polished full-stack AI web app with Generative UI, citations, MCP tools, and CI evals",
            "Write a case study highlighting UX latency, eval pass rates, and security hardening",
            "Position yourself for Full-Stack AI Engineer, AI UX Engineer, or Frontend AI roles"
          ],
          "upskilling_instructions": [
            "Your strength is turning raw model capabilities into fast, trustworthy, delightful user interfaces.",
            "Include a live demo and crisp technical walkthrough.",
            "Highlight measurable improvements in user task speed and accuracy."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Security Engineer",
      "target_ai_role": "AI Generalist",
      "title": "Security Engineer to AI Generalist",
      "summary": "A 2026 roadmap applying AppSec, CloudSec, and threat-modeling expertise to AI systems: OWASP LLM/Agentic risks, MCP security, agent sandboxing, red-teaming, and AI governance.",
      "base_difficulty": 60,
      "months": [
        {
          "month": 1,
          "focus": "AI Architecture & Threat Surface Basics",
          "tasks": [
            "Learn 2026 AI architectures: LLMs, reasoning models, RAG, fine-tuning, and MCP agents",
            "Map the AI attack surface across prompts, retrieval stores, tool connectors, and model weights",
            "Set up a reproducible Python workspace with uv for security testing scripts"
          ],
          "upskilling_instructions": [
            "Translate classic AppSec concepts (untrusted input, confused deputy, SSRF, privilege escalation) into LLM and agent contexts.",
            "Run local and API models hands-on to see how system prompts and tool calls work.",
            "Build a threat-model template for AI features."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 2,
          "focus": "OWASP Top 10 for LLM & Agentic Apps",
          "tasks": [
            "Study prompt injection, sensitive information disclosure, supply-chain risks, and excessive agency",
            "Audit sample AI apps for missing authorization, unsafe output handling, and unbounded consumption",
            "Write security review checklists for engineering teams shipping AI features"
          ],
          "upskilling_instructions": [
            "Remember: system prompts are NOT security boundaries—enforce access control in code and databases.",
            "Identify where LLM outputs flow into SQL, shell, HTML, or API calls without sanitization.",
            "Prioritize findings by exploitability and blast radius."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "RAG & Data-Layer Security",
          "tasks": [
            "Audit vector databases (Qdrant, pgvector) for tenant isolation and ACL enforcement",
            "Test indirect prompt injection hidden inside retrieved PDFs, tickets, or web pages",
            "Implement PII detection and redaction with Microsoft Presidio before indexing or API calls"
          ],
          "upskilling_instructions": [
            "Verify document-level permissions are filtered inside the vector query before chunks reach the prompt.",
            "Test what happens when a malicious document is uploaded to a shared knowledge base.",
            "Track data lineage for deletion and compliance."
          ],
          "references": [
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            }
          ]
        },
        {
          "month": 4,
          "focus": "MCP & Tool-Use Security",
          "tasks": [
            "Threat-model Model Context Protocol (MCP) servers, tool descriptions, and OAuth scopes",
            "Test for tool poisoning, rug-pull schema mutations, and cross-server data exfiltration",
            "Enforce least-privilege credentials and human-in-the-loop approval for sensitive tools"
          ],
          "upskilling_instructions": [
            "Pin and audit third-party MCP server versions just like npm or PyPI dependencies.",
            "Never grant an agent broad admin tokens when read-only or scoped tokens suffice.",
            "Log every tool invocation with caller identity and arguments."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Anthropic Claude Docs",
              "url": "https://docs.anthropic.com/en/docs/welcome"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Automated Red-Teaming & Eval Harnesses",
          "tasks": [
            "Build automated adversarial test suites using Promptfoo and Inspect AI",
            "Test jailbreaks, multi-turn persuasion, encoding bypasses, and secret-leakage probes",
            "Integrate security regression suites into GitHub Actions CI"
          ],
          "upskilling_instructions": [
            "Automate repeatable red-team suites in CI rather than relying on one-off manual pentests.",
            "Measure attack success rate (ASR) before and after adding mitigations.",
            "Keep exploit payloads versioned internally."
          ],
          "references": [
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Inspect AI Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Sandboxing Agent Code & Execution",
          "tasks": [
            "Isolate agent-executed code, browsers, and shell tools in hardened containers/microVMs",
            "Enforce strict CPU, memory, filesystem, and outbound-network egress policies",
            "Test container escape, SSRF, and metadata-service access from inside agent sandboxes"
          ],
          "upskilling_instructions": [
            "Treat any code written or executed by an AI agent as untrusted code.",
            "Block access to cloud metadata endpoints (169.254.169.254) and internal VPC subnets by default.",
            "Use ephemeral, single-use sandboxes."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "AI Supply Chain & Model Integrity",
          "tasks": [
            "Audit open-weight model artifacts (safetensors vs unsafe pickle files) and dataset provenance",
            "Verify container signatures, SBOMs, and dependency lockfiles in AI pipelines",
            "Assess third-party model API terms (zero-data-retention, training opt-outs, residency)"
          ],
          "upskilling_instructions": [
            "Ban unsafe pickle deserialization in ML pipelines—require safetensors.",
            "Treat Hugging Face repos and community LoRA adapters with the same scrutiny as open-source packages.",
            "Verify vendor DPAs and SOC2/ISO posture."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Input/Output Guardrails & Abuse Prevention",
          "tasks": [
            "Evaluate guardrail models and deterministic policy checks at the AI gateway",
            "Implement rate limiting, token-exhaustion (denial-of-wallet) protection, and anomaly alerts",
            "Measure false-positive impact on legitimate users and latency overhead"
          ],
          "upskilling_instructions": [
            "Layer deterministic controls (auth, schema validation, allowlists) underneath probabilistic guardrail models.",
            "Monitor for automated scraping or model-extraction patterns.",
            "Tune guardrails so they do not break normal workflows."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 9,
          "focus": "AI Observability & Incident Response",
          "tasks": [
            "Instrument OpenTelemetry GenAI traces without logging raw secrets or PII",
            "Build detection rules for prompt-injection spikes, unusual tool calls, and data exfiltration",
            "Write an AI incident-response playbook covering compromised prompts, poisoned indexes, and rogue agents"
          ],
          "upskilling_instructions": [
            "Ensure security teams can trace a suspicious action back to the exact user, prompt, retrieved chunk, and tool call.",
            "Practice tabletop exercises for AI-specific incidents.",
            "Redact sensitive fields at log ingestion."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Langfuse LLM Observability & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "AI Governance, EU AI Act & NIST AI RMF",
          "tasks": [
            "Map enterprise AI inventories to EU AI Act risk tiers and NIST AI RMF functions",
            "Build lightweight AI risk-assessment workflows that unblock teams safely",
            "Partner with legal, privacy, and product on model cards and vendor reviews"
          ],
          "upskilling_instructions": [
            "Be an enabler with clear guardrails ('paved roads'), not a blanket blocker—teams will otherwise use shadow AI.",
            "Keep governance checklists practical and tied to technical controls.",
            "Maintain an up-to-date registry of approved models and MCP servers."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI-Assisted Security Operations",
          "tasks": [
            "Build safe internal AI workflows for triage, threat-model drafting, and code-review assistance",
            "Evaluate AI security assistants rigorously for hallucinated CVEs or false negatives",
            "Keep humans in the loop for all remediation and blocking decisions"
          ],
          "upskilling_instructions": [
            "Use AI to accelerate repetitive SecOps triage while verifying every finding deterministically.",
            "Never auto-merge AI-generated security patches without tests and review.",
            "Measure false-positive and false-negative rates."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OpenAI API & Responses Guide",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: AI Security & Red-Team Framework",
          "tasks": [
            "Ship an end-to-end AI security assessment toolkit: Promptfoo/Inspect red-team suite, MCP scanner, and hardened sandbox template",
            "Publish a threat model and remediation report with measured attack-success-rate reductions",
            "Position yourself for AI Security Engineer, AI Safety Engineer, or Product Security Lead roles"
          ],
          "upskilling_instructions": [
            "AI security is one of the highest-leverage gaps in 2026 enterprises—pair deep security fundamentals with hands-on AI fluency.",
            "Show concrete before/after exploit mitigation results.",
            "Share practical paved-road templates engineers can adopt immediately."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "MLOps Engineer",
      "title": "Any Role to MLOps Engineer",
      "summary": "A 2026 MLOps and LLMOps roadmap covering uv, Polars/DuckDB, MLflow, Ray orchestration, vLLM serving, Kubernetes/KServe, GitOps, OpenTelemetry, and GPU FinOps.",
      "base_difficulty": 78,
      "months": [
        {
          "month": 1,
          "focus": "Python, uv & Linux Automation for MLOps",
          "tasks": [
            "Standardize reproducible Python projects with uv lockfiles, ruff, and pyproject.toml",
            "Write Bash and Python automation utilities for dataset transfers, checksums, and log parsing",
            "Test pipeline utilities thoroughly with pytest in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Eliminate 'works on my machine' issues by locking Python versions and CUDA wheels via uv.",
            "Make CLI scripts idempotent so re-running a failed step never corrupts artifacts.",
            "Log structured JSON output for easy ingestion by log aggregators."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Data Wrangling & Validation at Scale",
          "tasks": [
            "Build high-throughput ingestion and feature prep pipelines using Polars and DuckDB",
            "Enforce automated schema, null, and distribution assertions with Pydantic and Evidently",
            "Version training datasets cleanly in object storage / Parquet"
          ],
          "upskilling_instructions": [
            "Fail pipelines loudly on schema drift before bad data wastes expensive GPU training hours.",
            "Benchmark Polars lazy evaluation vs eager transforms on multi-gigabyte files.",
            "Track dataset hashes alongside every training run."
          ],
          "references": [
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Core ML & Experiment Tracking",
          "tasks": [
            "Train baseline scikit-learn models and write automated verification tests",
            "Log parameters, git SHAs, datasets, metrics, and model artifacts in MLflow",
            "Implement automated champion-vs-challenger promotion gates"
          ],
          "upskilling_instructions": [
            "Ensure any registered model can be traced back to the exact commit, dataset hash, and hyperparameters.",
            "Store slice-level metrics and calibration curves in MLflow, not just overall accuracy.",
            "Automate smoke-test inference before registering a model."
          ],
          "references": [
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Model Packaging & Lean Containers",
          "tasks": [
            "Build multi-stage Docker images for FastAPI + Pydantic v2 inference services",
            "Configure NVIDIA Container Toolkit for GPU workloads without bloating image layers",
            "Implement startup/readiness probes and graceful shutdown for active requests"
          ],
          "upskilling_instructions": [
            "Never bake multi-gigabyte model weights into Docker layers—mount pre-warmed caches or stream from object storage.",
            "Pin base image digests and run container vulnerability scans in CI.",
            "Verify health checks wait until weights are fully loaded into VRAM."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Orchestrating ML & Data Pipelines with Ray",
          "tasks": [
            "Build distributed preprocessing, training, and batch-inference pipelines using Ray",
            "Configure retries, checkpointing, and dead-letter queues for failed pipeline tasks",
            "Schedule recurring retraining and evaluation workflows cleanly"
          ],
          "upskilling_instructions": [
            "Design pipeline stages as pure, restartable tasks so spot-instance preemptions recover seamlessly.",
            "Separate CPU data-prep workers from GPU training/inference workers.",
            "Monitor task queue depth and worker utilization."
          ],
          "references": [
            {
              "title": "Ray & KubeRay Documentation",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Feature & Context Pipelines",
          "tasks": [
            "Build low-latency online feature and vector-context lookup services",
            "Guarantee online-offline feature parity by sharing transformation code",
            "Add incremental document/embedding syncs with freshness SLAs"
          ],
          "upskilling_instructions": [
            "Eliminate training-serving skew by running the exact same feature transform module in batch and online paths.",
            "Measure p99 feature-retrieval latency under simulated traffic.",
            "Monitor embedding/index staleness."
          ],
          "references": [
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "High-Performance Model & LLM Serving",
          "tasks": [
            "Serve open-weight LLMs with vLLM using continuous batching and PagedAttention",
            "Benchmark FP8/AWQ quantization tradeoffs across throughput, TTFT, and eval accuracy",
            "Front serving backends with an AI gateway handling auth, rate limits, and routing"
          ],
          "upskilling_instructions": [
            "Test serving under realistic concurrent distributions of short and long contexts.",
            "Verify quantized models against your golden eval suite before promoting.",
            "Tune KV-cache memory allocation to prevent OOMs under burst load."
          ],
          "references": [
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Kubernetes, KServe & KubeRay",
          "tasks": [
            "Deploy model servers on Kubernetes using KServe and KubeRay",
            "Configure GPU node pools, NVIDIA device plugins, and queue-based autoscaling",
            "Test zero-downtime rolling updates and canary traffic splitting"
          ],
          "upskilling_instructions": [
            "Autoscale inference pods on active request/KV-cache queue metrics rather than CPU percentage.",
            "Configure PodDisruptionBudgets and anti-affinity rules for high availability.",
            "Practice node drain and pod eviction drills."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "KServe Model Serving on Kubernetes",
              "url": "https://kserve.github.io/website/"
            },
            {
              "title": "Ray & KubeRay Documentation",
              "url": "https://docs.ray.io/en/latest/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Continuous Delivery & GitOps",
          "tasks": [
            "Manage Kubernetes ML manifests and model-routing configs via Argo CD GitOps",
            "Automate container builds, eval gates, and staging promotions in GitHub Actions",
            "Implement instant rollback workflows for bad model or prompt releases"
          ],
          "upskilling_instructions": [
            "Keep every cluster change declarative in Git—never `kubectl edit` production state manually.",
            "Separate fast unit/smoke checks on PRs from heavier GPU evals on release branches.",
            "Verify rollback speed under simulated bad-model deployments."
          ],
          "references": [
            {
              "title": "Argo CD GitOps Documentation",
              "url": "https://argo-cd.readthedocs.io/en/stable/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Observability, Drift & Eval Monitoring",
          "tasks": [
            "Instrument OpenTelemetry GenAI traces alongside Prometheus and Grafana dashboards",
            "Track TTFT, tokens/sec, error rates, GPU utilization, and Evidently AI data/prediction drift",
            "Trigger automated alerts and shadow evaluations on drift spikes"
          ],
          "upskilling_instructions": [
            "Correlate infrastructure metrics (GPU memory, thermal throttling) with application SLOs (p95 latency, eval score).",
            "Redact PII before storing inference payloads for drift analysis.",
            "Set actionable alert thresholds to avoid pager fatigue."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "Grafana Documentation",
              "url": "https://grafana.com/docs/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "GPU FinOps, Scheduling & Cost Control",
          "tasks": [
            "Configure fractional GPUs (MIG / time-slicing) for small models and dev environments",
            "Route batch/eval workloads to spot GPUs with checkpointing",
            "Build cost-per-1M-tokens and cost-per-training-run dashboards with budget alerts"
          ],
          "upskilling_instructions": [
            "Identify idle GPU pods and right-size instance types weekly.",
            "Compare self-hosted vLLM unit economics vs managed API pricing at your actual traffic profile.",
            "Enforce namespace resource quotas and automated dev-pod shutdowns."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Enterprise MLOps & LLMOps Platform",
          "tasks": [
            "Deliver an end-to-end GitOps MLOps stack: Ray/Polars pipeline -> MLflow registry -> vLLM/KServe on K8s -> Argo CD -> Prometheus/Grafana/Evidently",
            "Publish architecture diagrams, load-test benchmarks, FinOps analysis, and OOM recovery runbooks",
            "Prepare for MLOps/LLMOps Engineer interviews covering Kubernetes, serving optimization, and reliability"
          ],
          "upskilling_instructions": [
            "Highlight real operational metrics: cold-start time, p95 TTFT under load, and GPU utilization.",
            "Make local reproduction effortless via Kind/Minikube or Docker Compose.",
            "Be ready to walk through incident runbooks for drift, OOMs, and bad rollouts."
          ],
          "references": [
            {
              "title": "KServe Model Serving on Kubernetes",
              "url": "https://kserve.github.io/website/"
            },
            {
              "title": "Argo CD GitOps Documentation",
              "url": "https://argo-cd.readthedocs.io/en/stable/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Safety Engineer",
      "title": "Any Role to AI Safety Engineer",
      "summary": "A 2026 AI Safety & Alignment Engineering roadmap covering Python, post-training (RLHF/DPO/GRPO), automated red-teaming, Inspect AI evals, sandboxing, mechanistic interpretability, and EU AI Act / NIST compliance.",
      "base_difficulty": 76,
      "months": [
        {
          "month": 1,
          "focus": "Python Tooling & AI Safety Foundations",
          "tasks": [
            "Set up reproducible Python environments with uv, ruff, and pytest",
            "Study core AI safety domains: specification gaming, alignment faking, misuse, and systemic risk",
            "Build deterministic input/output policy validators with Pydantic v2"
          ],
          "upskilling_instructions": [
            "Distinguish between robustness (reliability under shift), security (adversarial misuse), and alignment (intent/values).",
            "Write clean, tested Python harnesses for running repeatable safety probes.",
            "Document assumptions and threat models clearly."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Open-Weight Models & Inference Controls",
          "tasks": [
            "Deploy and inspect open-weight models using Hugging Face Transformers and vLLM",
            "Analyze system-prompt adherence, refusal calibration, and false-positive over-refusals",
            "Expose typed FastAPI endpoints logging safety-relevant metadata"
          ],
          "upskilling_instructions": [
            "Measure both safety (blocking harmful requests) and helpfulness (not refusing benign requests).",
            "Understand how chat templates and special tokens affect model behavior.",
            "Keep test environments isolated."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Alignment & Post-Training Mechanics",
          "tasks": [
            "Study RLHF, Constitutional AI, Direct Preference Optimization (DPO), and GRPO",
            "Train a small reward/preference classifier in PyTorch and run a DPO experiment with TRL",
            "Investigate reward hacking and sycophancy in preference-tuned models"
          ],
          "upskilling_instructions": [
            "Inspect failure modes where optimizing a proxy reward degrades truthfulness or encourages sycophancy.",
            "Compare SFT vs DPO on safety-vs-capability tradeoffs.",
            "Track capability regressions on standard benchmarks."
          ],
          "references": [
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Adversarial Red-Teaming & Agentic Attacks",
          "tasks": [
            "Design red-team suites for direct/indirect prompt injection, multi-turn jailbreaks, and roleplay bypasses",
            "Test agentic attack vectors: MCP tool poisoning, confused-deputy exfiltration, and excessive agency",
            "Automate adversarial scans using Promptfoo and measure attack success rate (ASR)"
          ],
          "upskilling_instructions": [
            "Focus heavily on indirect prompt injection hidden inside retrieved documents, emails, or tool outputs.",
            "Quantify ASR across attack categories rather than relying on anecdotal screenshots.",
            "Maintain reproducible exploit test cases."
          ],
          "references": [
            {
              "title": "Promptfoo Red Teaming & Evals",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Guardrail Architectures & Defense-in-Depth",
          "tasks": [
            "Integrate open-weight safety classifiers (e.g., Llama Guard) alongside deterministic policy gates",
            "Build input/output guardrail proxies and measure latency overhead and false-positive rates",
            "Enforce strict schema validation and allowlists beneath model-based guardrails"
          ],
          "upskilling_instructions": [
            "Never rely on a single LLM guardrail alone—layer deterministic auth, schema checks, and classifiers.",
            "Benchmark p95 latency added by guardrail calls.",
            "Test whether attackers can bypass output filters using encoding or partial streaming."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Safety Evaluations & Inspect AI",
          "tasks": [
            "Build reproducible safety and capability evaluations using Inspect AI",
            "Measure hallucination rates, dangerous-capability uplift, and cyber/agentic risk benchmarks",
            "Create golden evaluation suites that distinguish genuine safety from superficial keyword refusal"
          ],
          "upskilling_instructions": [
            "Use Inspect AI tasks and solvers to make safety evals modular, shareable, and auditable.",
            "Verify eval grading logic with human spot-checks to prevent grader gaming.",
            "Run evals across multiple model temperatures and system prompts."
          ],
          "references": [
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Promptfoo Red Teaming & Evals",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Agent Sandboxing & Execution Containment",
          "tasks": [
            "Run agent-generated code and browser/shell tools inside hardened, ephemeral sandboxes",
            "Enforce strict CPU, memory, filesystem, and outbound-network egress restrictions",
            "Test sandbox escape, SSRF, and privilege-escalation vectors"
          ],
          "upskilling_instructions": [
            "Assume an agent executing untrusted instructions will eventually attempt unsafe commands—contain the blast radius.",
            "Block internal VPC/metadata endpoints from agent containers by default.",
            "Require human approval for high-impact external actions."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Data Privacy, PII & Unlearning",
          "tasks": [
            "Integrate Microsoft Presidio to detect and scrub PII from training corpora, RAG indexes, and traces",
            "Audit training datasets and model outputs for memorization and secret leakage",
            "Implement data-lineage and deletion workflows for compliance"
          ],
          "upskilling_instructions": [
            "Scrub PII before data enters embeddings or third-party APIs.",
            "Test for canary-string memorization when fine-tuning open-weight models.",
            "Document privacy guarantees and residual risks."
          ],
          "references": [
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Bias, Fairness & Societal Impact Auditing",
          "tasks": [
            "Audit model outputs and classifiers across demographic, linguistic, and accessibility slices",
            "Measure both disparate accuracy and disparate refusal rates",
            "Design mitigation strategies (balanced data, threshold calibration, post-processing)"
          ],
          "upskilling_instructions": [
            "Check intersectional slices rather than single attributes alone.",
            "Avoid 'fairness through unawareness'—proxy features often encode protected attributes.",
            "Document known disparities transparently in model cards."
          ],
          "references": [
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Mechanistic Interpretability & Monitoring",
          "tasks": [
            "Explore representation engineering, activation steering, and Sparse Autoencoders (SAEs) on open models",
            "Inspect internal feature activations to detect deception, refusal circuits, or concept representations",
            "Compare black-box behavioral evals against white-box interpretability probes"
          ],
          "upskilling_instructions": [
            "Use mechanistic interpretability to understand *why* a model behaves unsafely, not just *that* it did.",
            "Verify steering interventions do not silently degrade general reasoning.",
            "Follow open-source interp tooling and reproducible notebooks."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Governance, EU AI Act & Frontier Frameworks",
          "tasks": [
            "Map system architectures and evals to EU AI Act GPAI/high-risk obligations and NIST AI RMF",
            "Draft model cards, system cards, and risk-mitigation registries with concrete fallback triggers",
            "Design incident-response and responsible-disclosure playbooks"
          ],
          "upskilling_instructions": [
            "Translate regulatory requirements into concrete engineering artifacts: eval logs, data lineage, and kill switches.",
            "Define clear deployment-halting thresholds if safety evals regress.",
            "Partner across legal, security, and product teams."
          ],
          "references": [
            {
              "title": "EU AI Act Regulatory Framework",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: End-to-End Safe AI Proxy & Eval Suite",
          "tasks": [
            "Ship a hardened LLM/agent gateway combining PII scrubbing, MCP permission checks, sandboxed tools, and an Inspect AI + Promptfoo safety suite",
            "Publish a system card documenting attack-success-rate reductions, latency overhead, and compliance mapping",
            "Prepare for AI Safety Engineer and AI Security Engineer interviews"
          ],
          "upskilling_instructions": [
            "Demonstrate empirical rigor: show exact ASR, false-refusal, and latency numbers before and after your defenses.",
            "Make your safety harness reproducible with one command.",
            "Articulate both near-term AppSec/agentic risks and longer-term alignment challenges."
          ],
          "references": [
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "EU AI Act Regulatory Framework",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Security Engineer",
      "target_ai_role": "AI Safety Engineer",
      "title": "Security Engineer to AI Safety Engineer",
      "summary": "An accelerated 2026 transition from AppSec/CloudSec into AI Safety & Alignment Engineering: adversarial ML, agentic/MCP red-teaming, sandboxing, Inspect AI evals, and AI governance.",
      "base_difficulty": 66,
      "months": [
        {
          "month": 1,
          "focus": "Python ML Stack & AI Safety Landscape",
          "tasks": [
            "Set up reproducible Python AI workspaces with uv, ruff, and pytest",
            "Bridge classic AppSec threat modeling to AI safety: alignment, robustness, and adversarial misuse",
            "Run open-weight models locally with Hugging Face and vLLM"
          ],
          "upskilling_instructions": [
            "Use your security threat-modeling instincts to map trust boundaries across prompts, RAG, weights, and tools.",
            "Understand how probabilistic model behavior differs from deterministic software bugs.",
            "Build clean, typed Python evaluation scripts."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Alignment & Post-Training Mechanics",
          "tasks": [
            "Study RLHF, Constitutional AI, DPO, and verifiable-reward RL (GRPO)",
            "Run a small DPO safety-alignment experiment using PyTorch and TRL",
            "Analyze reward hacking, sycophancy, and jailbreak generalization"
          ],
          "upskilling_instructions": [
            "Understand how safety behavior is trained into weights—and why superficial refusal tuning is brittle.",
            "Measure both safety improvements and benign-task over-refusal.",
            "Inspect training data poisoning vectors."
          ],
          "references": [
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Adversarial Prompting & Indirect Injection",
          "tasks": [
            "Build automated attack suites for direct/indirect prompt injection and multi-turn jailbreaks",
            "Test data exfiltration via markdown images, tool arguments, and retrieved documents",
            "Quantify attack success rates using Promptfoo"
          ],
          "upskilling_instructions": [
            "Treat every untrusted document, webpage, or email entering context as a potential injection payload.",
            "Automate attack suites in CI so regressions are caught immediately.",
            "Document clear severity ratings and mitigations."
          ],
          "references": [
            {
              "title": "Promptfoo Red Teaming & Evals",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "MCP & Agentic System Security",
          "tasks": [
            "Audit MCP servers for tool poisoning, rug-pull schema changes, and confused-deputy privilege escalation",
            "Design least-privilege OAuth scopes, tool allowlists, and human-approval gates",
            "Test multi-agent workflows for cascading instruction hijacking"
          ],
          "upskilling_instructions": [
            "Apply strict supply-chain and zero-trust principles to external MCP tools and skills.",
            "Enforce authorization in backend services, never in system prompts.",
            "Log every tool call with caller identity and parameters."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Execution Sandboxing & Containment",
          "tasks": [
            "Harden agent code-execution environments using isolated containers/microVMs",
            "Enforce seccomp, read-only rootfs, resource caps, and strict egress firewalls",
            "Pentest sandboxes for SSRF, metadata-service access, and container escapes"
          ],
          "upskilling_instructions": [
            "Your CloudSec/container-hardening background is a huge asset here—treat agent code as hostile.",
            "Use ephemeral single-task sandboxes with zero persistent secrets.",
            "Automate sandbox security checks in CI."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Safety Evals with Inspect AI",
          "tasks": [
            "Build modular capability and safety evaluations using Inspect AI",
            "Test cyber-offense uplift, dangerous-knowledge, and autonomous-replication proxies",
            "Verify eval integrity against grader gaming and prompt sensitivity"
          ],
          "upskilling_instructions": [
            "Design evals that measure real-world risk uplift rather than trivial keyword matching.",
            "Run evals across multiple seeds and elicitation strategies.",
            "Publish clear, reproducible eval logs."
          ],
          "references": [
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Promptfoo Red Teaming & Evals",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Guardrail Proxies & Defense-in-Depth",
          "tasks": [
            "Deploy input/output guardrail classifiers alongside deterministic policy engines",
            "Measure latency overhead, false-positive refusal rates, and streaming-filter edge cases",
            "Implement denial-of-wallet protections (token caps, rate limits, anomaly detection)"
          ],
          "upskilling_instructions": [
            "Remember that streaming responses can leak partial unsafe tokens before a post-hoc filter catches them—buffer or scan chunks smartly.",
            "Layer deterministic controls underneath model-based guards.",
            "Track guardrail bypasses in production telemetry."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Privacy, PII & Model Extraction Defense",
          "tasks": [
            "Deploy Microsoft Presidio for PII redaction across RAG pipelines and observability logs",
            "Audit open-weight and fine-tuned models for training-data memorization",
            "Defend inference APIs against model-extraction and membership-inference probing"
          ],
          "upskilling_instructions": [
            "Ensure observability traces do not become a secondary PII/secret leak.",
            "Ban unsafe pickle model formats in favor of safetensors.",
            "Verify zero-data-retention terms with model providers."
          ],
          "references": [
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Bias, Fairness & Adversarial Robustness",
          "tasks": [
            "Audit classifiers and LLMs for demographic disparities and adversarial perturbations",
            "Test evasion and data-poisoning attacks on classical ML and embedding models",
            "Build continuous monitoring alerts for anomalous input distributions"
          ],
          "upskilling_instructions": [
            "Connect adversarial ML robustness to real-world fraud and abuse evasion.",
            "Evaluate fairness across user cohorts and languages.",
            "Document residual risks clearly."
          ],
          "references": [
            {
              "title": "Evidently AI Monitoring & Evals",
              "url": "https://docs.evidentlyai.com/"
            },
            {
              "title": "scikit-learn User Guide",
              "url": "https://scikit-learn.org/stable/user_guide.html"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Mechanistic Interpretability for Safety",
          "tasks": [
            "Explore activation probing, Sparse Autoencoders (SAEs), and circuit analysis in PyTorch",
            "Test white-box anomaly detectors for jailbreak or deception detection",
            "Evaluate where interpretability complements black-box red-teaming"
          ],
          "upskilling_instructions": [
            "Focus on practical safety applications of interpretability: monitoring, unlearning verification, and red-team diagnostics.",
            "Verify probes generalize across diverse prompts.",
            "Keep experiments reproducible."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 11,
          "focus": "EU AI Act, NIST RMF & AI Incident Response",
          "tasks": [
            "Map technical controls and evals to EU AI Act and NIST AI RMF requirements",
            "Build an AI incident-response playbook (poisoned RAG, rogue agent, compromised MCP)",
            "Run tabletop security exercises with engineering and legal teams"
          ],
          "upskilling_instructions": [
            "Turn high-level governance frameworks into concrete engineering gates and runbooks.",
            "Define pre-agreed kill-switch and rollback authority.",
            "Maintain auditable evidence trails."
          ],
          "references": [
            {
              "title": "EU AI Act Regulatory Framework",
              "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Hardened Agentic Gateway & Safety Eval Suite",
          "tasks": [
            "Ship a production-grade AI security & safety gateway with MCP policy enforcement, sandboxing, PII scrubbing, and Inspect AI evals",
            "Publish a full threat model, benchmarked attack-success-rate drop, and system card",
            "Target AI Safety Engineer, Frontier Red-Team Engineer, or AI Security Architect roles"
          ],
          "upskilling_instructions": [
            "Your security background gives you immediate credibility on sandboxing, threat modeling, and adversarial thinking.",
            "Highlight empirical eval results and working code.",
            "Share reproducible defenses the community or employers can inspect."
          ],
          "references": [
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "Research Scientist",
      "title": "Any Role to Research Scientist",
      "summary": "A rigorous 2026 ML/AI Research Scientist roadmap covering math foundations, modern Transformer internals (RoPE/RMSNorm/GQA), pretraining, RLVR/GRPO post-training, distributed FSDP2, multimodal architectures, and mechanistic interpretability.",
      "base_difficulty": 88,
      "months": [
        {
          "month": 1,
          "focus": "Mathematics for Modern ML Research",
          "tasks": [
            "Master linear algebra (SVD, eigenvalues, matrix calculus), multivariable gradients, and Jacobians",
            "Review probability theory, information theory (KL divergence, cross-entropy), and concentration bounds",
            "Translate core equations into clean, vectorized NumPy implementations"
          ],
          "upskilling_instructions": [
            "Verify every analytical gradient numerically with finite differences.",
            "Build fluency reading paper derivations and mapping symbols to tensor dimensions.",
            "Keep a personal derivation notebook."
          ],
          "references": [
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Optimization Theory & Loss Landscapes",
          "tasks": [
            "Implement SGD, Momentum, AdamW, and Muon/second-order intuition in Python",
            "Study convex optimization, saddle points, loss sharpness, and learning-rate warmup/decay",
            "Implement custom losses (InfoNCE contrastive loss, focal loss, label smoothing) in PyTorch"
          ],
          "upskilling_instructions": [
            "Test how weight decay, gradient clipping, and learning rate scaling interact across model widths.",
            "Log gradient norms and parameter update ratios during training.",
            "Compare convergence speed across optimizers on a controlled benchmark."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Neural Architectures from Scratch",
          "tasks": [
            "Build and train a multi-layer network with manual backpropagation in pure NumPy",
            "Implement Xavier/He initialization, residual connections, and normalization layers",
            "Verify your NumPy gradients match PyTorch autograd to floating-point precision"
          ],
          "upskilling_instructions": [
            "Implementing backprop by hand once cements tensor shapes and chain-rule debugging forever.",
            "Inspect activation and gradient histograms across layers to spot dead neurons or explosions.",
            "Write unit tests asserting gradient correctness."
          ],
          "references": [
            {
              "title": "NumPy Documentation",
              "url": "https://numpy.org/doc/stable/"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning Theory & Scaling Laws",
          "tasks": [
            "Study generalization, double descent, implicit bias of SGD, and Chinchilla/inference-compute scaling laws",
            "Run controlled experiments varying model width, depth, and dataset size on a fixed compute budget",
            "Fit empirical power-law scaling curves to predict loss at larger scales"
          ],
          "upskilling_instructions": [
            "Design clean, controlled ablations changing one hyperparameter at a time.",
            "Separate training-compute scaling from test-time compute scaling.",
            "Report error bars across multiple random seeds."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Modern Transformer Internals",
          "tasks": [
            "Implement scaled dot-product attention, Grouped-Query Attention (GQA), RoPE, RMSNorm, and SwiGLU from scratch in PyTorch",
            "Understand KV-cache mechanics, FlashAttention memory hierarchy, and causal masking",
            "Verify tensor shapes and numerical equivalence against reference implementations"
          ],
          "upskilling_instructions": [
            "Go beyond 2017 sinusoidal/LayerNorm blocks—implement the 2026 standard Transformer components (RoPE, GQA, RMSNorm, SwiGLU).",
            "Profile memory bandwidth vs FLOPs in attention layers.",
            "Test KV-cache incremental decoding vs full-sequence forward passes."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Language Model Pretraining",
          "tasks": [
            "Train a BPE tokenizer and build a streaming, packed token dataloader",
            "Write a clean PyTorch 2.x pretraining loop with BF16 mixed precision and torch.compile",
            "Pretrain a small 50M-150M parameter causal LM and track perplexity and downstream evals"
          ],
          "upskilling_instructions": [
            "Measure tokens/sec and Model FLOPs Utilization (MFU) on your hardware.",
            "Verify data packing does not leak attention across document boundaries.",
            "Save and resume checkpoints cleanly."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Reinforcement Learning & Reasoning Post-Training",
          "tasks": [
            "Implement policy gradients (REINFORCE, PPO) on Gymnasium environments",
            "Study RL with Verifiable Rewards (RLVR), GRPO, and DPO for reasoning models",
            "Train a compact model with GRPO/TRL on verifiable math or coding tasks"
          ],
          "upskilling_instructions": [
            "Connect classic RL foundations directly to modern reasoning-model post-training.",
            "Monitor KL divergence from the reference policy to prevent reward hacking and collapse.",
            "Evaluate pass@1 vs pass@k and test-time compute scaling."
          ],
          "references": [
            {
              "title": "Gymnasium RL Environments",
              "url": "https://gymnasium.farama.org/"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Parameter-Efficient Adaptation & Synthetic Data",
          "tasks": [
            "Implement LoRA layers from scratch in PyTorch and compare full fine-tuning vs LoRA/DoRA",
            "Study synthetic data generation, rejection sampling, and distillation from frontier reasoning models",
            "Measure catastrophic forgetting and distribution shift across fine-tuning stages"
          ],
          "upskilling_instructions": [
            "Investigate rank, target modules, and learning-rate scaling in LoRA.",
            "Filter synthetic datasets with deterministic verifiers whenever possible.",
            "Run controlled ablations on data quality vs quantity."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face TRL (SFT, DPO, GRPO)",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Distributed Training & Systems Efficiency",
          "tasks": [
            "Study Data Parallelism (DDP), FSDP2, Tensor Parallelism, and Pipeline Parallelism",
            "Run multi-GPU training with PyTorch FSDP2 and activation checkpointing",
            "Profile communication vs compute overlap using PyTorch Profiler"
          ],
          "upskilling_instructions": [
            "Understand memory breakdown: parameters, gradients, optimizer states (AdamW), and activations.",
            "Measure scaling efficiency across GPUs and eliminate dataloader bottlenecks.",
            "Test fault-tolerant checkpointing."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Ray & KubeRay Documentation",
              "url": "https://docs.ray.io/en/latest/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Mechanistic Interpretability & Evaluation",
          "tasks": [
            "Study Sparse Autoencoders (SAEs), circuit tracing, and linear probing on Transformer activations",
            "Build reproducible evaluation harnesses (e.g., Inspect AI) for reasoning and capability measurement",
            "Test whether discovered internal features causally influence model outputs via steering"
          ],
          "upskilling_instructions": [
            "Treat interpretability hypotheses scientifically: formulate falsifiable predictions and run causal ablation tests.",
            "Beware of confirmation bias when interpreting feature examples.",
            "Share clean analysis notebooks."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Inspect AI Safety Evaluation Framework",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Multimodal & World-Model Architectures",
          "tasks": [
            "Implement a Vision Transformer (ViT) and vision-language projection/cross-attention bridge",
            "Study unified multimodal tokenization, audio/video encoders, and diffusion/flow-matching basics",
            "Train a small multimodal experiment and ablate resolution/token budgets"
          ],
          "upskilling_instructions": [
            "Understand how visual patch counts explode context length and compute.",
            "Run ablations comparing early-fusion vs late-projection multimodal designs.",
            "Evaluate multimodal grounding carefully to avoid text-prior shortcuts."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "Hugging Face Transformers & PEFT",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Original Research Paper & Reproducible Code",
          "tasks": [
            "Formulate a clear research question, design baselines and ablations, and run rigorous experiments",
            "Evaluate against standard benchmarks with statistical significance and error bars",
            "Write an arXiv-style technical paper with open-source, uv-reproducible code"
          ],
          "upskilling_instructions": [
            "A strong, clean negative result with insightful ablations beats a sloppy positive claim.",
            "Make every figure, table, and hyperparameter reproducible from your repo.",
            "Present your work in reading groups or open-source communities for peer feedback."
          ],
          "references": [
            {
              "title": "arXiv Computer Science (cs.LG / cs.CL)",
              "url": "https://arxiv.org/list/cs.LG/recent"
            },
            {
              "title": "PyTorch Tutorials & 2.x Docs",
              "url": "https://pytorch.org/tutorials/"
            },
            {
              "title": "MLflow Documentation",
              "url": "https://mlflow.org/docs/latest/index.html"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "Agentic AI Engineer",
      "title": "Any Role to Agentic AI Engineer",
      "summary": "A 2026 roadmap to becoming an Agentic AI Engineer: context engineering, Model Context Protocol (MCP), durable multi-step workflows, sandboxing, agent memory, and trajectory evaluations.",
      "base_difficulty": 78,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python & Typed Contracts",
          "tasks": [
            "Set up reproducible Python projects with uv, ruff, and pytest",
            "Master async/await, Pydantic v2 schemas, and structured error handling",
            "Build a typed CLI that orchestrates multi-step API calls with retries"
          ],
          "upskilling_instructions": [
            "Agents fail unpredictably when tool inputs/outputs are untyped—use Pydantic v2 everywhere.",
            "Write pytest unit tests for deterministic business logic before adding LLM calls.",
            "Keep secrets strictly in environment variables."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "LLM Foundations & Reasoning Models",
          "tasks": [
            "Build resilient clients for frontier and reasoning models with strict JSON Schema outputs",
            "Learn when to use deterministic workflows vs single-turn LLM calls vs autonomous agent loops",
            "Benchmark thinking budgets, prompt caching, and latency/cost tradeoffs"
          ],
          "upskilling_instructions": [
            "Start with the simplest workflow pattern (chaining, routing, parallelization) before introducing open-ended agent loops.",
            "Measure token spend per step—multi-turn agents multiply input tokens rapidly.",
            "Handle model refusals and truncated responses gracefully."
          ],
          "references": [
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Context Engineering & Memory Systems",
          "tasks": [
            "Design layered context: system instructions, dynamic tool schemas, working memory, and episodic/long-term memory",
            "Implement context compaction (summarizing older turns and pruning stale tool outputs)",
            "Prevent context rot and instruction drift across 30+ turn sessions"
          ],
          "upskilling_instructions": [
            "Keep context lean and high-signal—dumping 100k tokens of noisy tool logs degrades reasoning accuracy.",
            "Test how your agent performs at turn 25 compared to turn 2.",
            "Use prompt caching for stable system prefixes."
          ],
          "references": [
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Model Context Protocol (MCP) Mastery",
          "tasks": [
            "Build custom MCP servers exposing typed tools, resources, and prompts",
            "Connect an MCP client to multiple servers and manage tool-namespace collisions",
            "Write clear, unambiguous tool descriptions and parameter schemas that guide model selection"
          ],
          "upskilling_instructions": [
            "Invest heavily in tool ergonomics: clear parameter names, examples, and actionable error messages help agents self-correct.",
            "Return concise, structured tool outputs rather than raw 50KB HTML or JSON blobs.",
            "Test MCP servers independently with unit and contract tests."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Agentic RAG & Tool-Augmented Retrieval",
          "tasks": [
            "Build agentic retrieval where the model iteratively refines queries, filters, and follows citations",
            "Combine hybrid search (BM25 + dense + reranking) with structured SQL/DuckDB lookups",
            "Verify groundedness and prevent retrieval loops"
          ],
          "upskilling_instructions": [
            "Cap maximum retrieval hops per user turn so an agent cannot spin indefinitely on missing information.",
            "Enforce document-level permissions inside the retrieval tool, never in the prompt.",
            "Require source chunk IDs on every factual claim."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Durable Execution & Long-Running Workflows",
          "tasks": [
            "Make multi-step agents crash-proof and resumable using Temporal or durable state machines",
            "Handle long-running human-in-the-loop (HITL) pauses, webhooks, and scheduled wakeups",
            "Design idempotent tool actions so retries never duplicate emails, charges, or database writes"
          ],
          "upskilling_instructions": [
            "Separate deterministic state transitions from non-deterministic LLM reasoning steps.",
            "Test killing a worker mid-workflow and verifying it resumes cleanly from the last checkpoint.",
            "Assign idempotency keys to every external mutation."
          ],
          "references": [
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Multi-Agent Orchestration & Subagents",
          "tasks": [
            "Implement supervisor/worker, handoff, and parallel-subagent patterns cleanly",
            "Define crisp inter-agent contracts, scoped workspaces, and shared artifacts",
            "Avoid over-fragmentation: benchmark single-agent vs multi-agent latency, cost, and accuracy"
          ],
          "upskilling_instructions": [
            "Only split into multiple agents when distinct context isolation, permissions, or parallel execution genuinely helps.",
            "Prevent infinite ping-pong loops between peer agents with explicit handoff budgets.",
            "Pass structured summaries between agents rather than raw full histories."
          ],
          "references": [
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Browser, Computer-Use & Coding Agents",
          "tasks": [
            "Build bounded browser-automation or repo-editing agents with verification loops",
            "Combine visual/DOM grounding with deterministic assertions (tests, linters, type-checks)",
            "Handle dynamic UI states, timeouts, and ambiguous page elements safely"
          ],
          "upskilling_instructions": [
            "Pair coding or browser agents with fast automated verifiers (pytest, tsc, DOM checks) so they self-correct on real signals.",
            "Never let a browser agent submit payments or sensitive forms without human confirmation.",
            "Capture screenshots and action logs for every step."
          ],
          "references": [
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Agent Sandboxing & Security",
          "tasks": [
            "Isolate agent code execution and shell tools inside ephemeral Docker/microVM sandboxes",
            "Defend against indirect prompt injection, MCP tool poisoning, and excessive agency",
            "Enforce least-privilege credentials, egress firewalls, and PII redaction"
          ],
          "upskilling_instructions": [
            "Treat every external webpage, email, or document read by an agent as untrusted attacker-controlled input.",
            "Block internal VPC and cloud metadata endpoints from agent sandboxes.",
            "Require explicit user approval for state-changing or external-communication tools."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Agent Trajectory Evals & Observability",
          "tasks": [
            "Instrument OpenTelemetry GenAI spans across every reasoning step, tool call, and subagent",
            "Build trajectory and task-completion evals using Inspect AI and Langfuse",
            "Measure pass@k, step efficiency, tool-error recovery, and cost per completed task"
          ],
          "upskilling_instructions": [
            "Evaluate both the final state (did the DB/file change correctly?) and the trajectory (did it take 3 clean steps or 25 chaotic ones?).",
            "Run deterministic verifier scripts on agent environments instead of relying only on LLM judges.",
            "Turn every failed production trace into a regression scenario."
          ],
          "references": [
            {
              "title": "Inspect AI Agent & Safety Evals",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Production Deployment & Cost Controls",
          "tasks": [
            "Deploy agent backends with FastAPI, async worker queues, and streaming progress updates",
            "Implement per-tenant token budgets, step caps, and circuit breakers",
            "Run chaos tests simulating tool outages, rate limits, and slow reasoning models"
          ],
          "upskilling_instructions": [
            "Design clear UI/API progress events so users see what the agent is doing during 30-second runs.",
            "Set hard per-run cost and step ceilings to prevent runaway loops.",
            "Align governance controls with NIST AI RMF."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Production Multi-Step Agent System",
          "tasks": [
            "Ship a durable, sandboxed agentic application with MCP tools, context compaction, HITL approvals, and automated trajectory evals",
            "Publish architecture diagrams, eval scorecards (task success rate, cost/task, p95 duration), and security threat model",
            "Prepare for Agentic AI Engineer interviews covering context engineering, MCP, and reliability"
          ],
          "upskilling_instructions": [
            "Show real benchmark numbers across 50+ realistic tasks rather than cherry-picked happy-path videos.",
            "Highlight how you prevented runaway loops, prompt injections, and silent state corruption.",
            "Make your repo reproducible with `uv run` and Docker Compose."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Inspect AI Agent & Safety Evals",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Software Engineer",
      "target_ai_role": "Agentic AI Engineer",
      "title": "Software Engineer to Agentic AI Engineer",
      "summary": "An accelerated 2026 path for software engineers into production agentic systems: MCP servers/clients, durable execution (Temporal), context engineering, sandboxing, and trajectory evals.",
      "base_difficulty": 70,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python AI Stack & Typed Agent Contracts",
          "tasks": [
            "Standardize on uv, ruff, Pydantic v2, and strict typing for agent state and tool schemas",
            "Build resilient multi-provider LLM clients with structured outputs and retries",
            "Compare reasoning models vs fast models on latency, cost, and tool-calling accuracy"
          ],
          "upskilling_instructions": [
            "Treat agent state transitions like distributed systems state machines with strict typed schemas.",
            "Measure token burn and latency from day one.",
            "Write unit tests for all deterministic validation and routing code."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Workflow Patterns & Context Engineering",
          "tasks": [
            "Implement core agentic patterns: prompt chaining, parallel fan-out, evaluator-optimizer, and bounded loops",
            "Design context compaction, tool-result truncation, and memory layers",
            "Optimize prompt caching for large shared instructions and tool definitions"
          ],
          "upskilling_instructions": [
            "Default to deterministic orchestration wherever control flow is known upfront; reserve autonomous loops for genuinely open-ended tasks.",
            "Verify accuracy does not degrade over long 20+ turn horizons.",
            "Keep system prompts and tool definitions cache-friendly."
          ],
          "references": [
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Model Context Protocol (MCP) Engineering",
          "tasks": [
            "Author production MCP servers (stdio and streamable HTTP) with typed tools, resources, and auth",
            "Build an MCP client host managing tool discovery, schema validation, and error formatting",
            "Design idempotent, least-privilege tool interfaces"
          ],
          "upskilling_instructions": [
            "Return concise, structured error messages from tools so the model can self-correct invalid arguments.",
            "Scope MCP server permissions tightly per user/tenant.",
            "Test MCP servers with automated contract suites."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Durable Execution & Distributed Agent State",
          "tasks": [
            "Build crash-safe, long-running agents using Temporal workflows and activities",
            "Support human-in-the-loop (HITL) approval signals, timeouts, and resumable state",
            "Ensure external side effects use idempotency keys and saga/compensation logic"
          ],
          "upskilling_instructions": [
            "Separate deterministic workflow orchestration from non-deterministic LLM/tool activities.",
            "Test worker restarts mid-execution to prove zero lost progress or duplicate writes.",
            "Stream live step updates to clients via SSE/WebSockets."
          ],
          "references": [
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Agentic Retrieval & Hybrid Knowledge",
          "tasks": [
            "Build hybrid search (BM25 + Qdrant/pgvector + reranking) exposed as agent retrieval tools",
            "Combine unstructured document search with structured DuckDB/Postgres queries",
            "Enforce document-level ACLs inside retrieval tools and require verifiable citations"
          ],
          "upskilling_instructions": [
            "Give agents targeted search tools (by metadata, date, section) rather than a single blurry semantic query.",
            "Cap retrieval retries to avoid infinite search loops.",
            "Verify citation spans programmatically."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Multi-Agent Systems & Coordination",
          "tasks": [
            "Design supervisor-worker and parallel-subagent architectures with isolated context windows",
            "Implement shared message boards/artifacts and clean handoff protocols",
            "Benchmark single-agent vs multi-agent cost, latency, and task success"
          ],
          "upskilling_instructions": [
            "Use subagents primarily to keep specialized contexts clean and run independent subtasks in parallel.",
            "Enforce strict handoff budgets and loop detection.",
            "Validate inter-agent payloads with Pydantic."
          ],
          "references": [
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Coding, Browser & Computer-Use Agents",
          "tasks": [
            "Build sandboxed coding or browser-use agents backed by deterministic verifiers (tests, linters, DOM checks)",
            "Implement diff previews, rollback checkpoints, and safe workspace branching",
            "Handle flaky external pages and tool timeouts gracefully"
          ],
          "upskilling_instructions": [
            "Closed-loop verification (run tests -> read failure -> fix -> re-run) is the biggest reliability multiplier for coding agents.",
            "Always snapshot or branch workspaces before letting an agent edit files.",
            "Never auto-submit irreversible web forms."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Sandboxing, Security & Prompt-Injection Defense",
          "tasks": [
            "Run untrusted agent code and tools in ephemeral, egress-restricted containers/microVMs",
            "Red-team agents against indirect prompt injection, MCP tool poisoning, and data exfiltration",
            "Implement PII redaction and human approval gates for sensitive actions"
          ],
          "upskilling_instructions": [
            "Apply zero-trust principles: assume retrieved web/doc content may contain adversarial instructions.",
            "Block access to cloud metadata services and internal networks from agent sandboxes.",
            "Audit against OWASP LLM & Agentic Top 10."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Trajectory Evaluations & Verification",
          "tasks": [
            "Build end-to-end agent eval harnesses with Inspect AI and Promptfoo",
            "Grade both final environment state and intermediate tool trajectories",
            "Track pass@k, step efficiency, and regression rates in GitHub Actions"
          ],
          "upskilling_instructions": [
            "Use deterministic environment assertions (did the right file/row/PR get created?) wherever possible.",
            "Pin eval environments in Docker so runs are reproducible.",
            "Turn every production trace failure into a permanent eval task."
          ],
          "references": [
            {
              "title": "Inspect AI Agent & Safety Evals",
              "url": "https://inspect.aisi.org.uk/"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 10,
          "focus": "OpenTelemetry Observability & FinOps",
          "tasks": [
            "Instrument full distributed traces across agent steps, MCP servers, and LLM calls using OpenTelemetry GenAI",
            "Build Langfuse/Grafana dashboards tracking cost per task, loop counts, and tool failure rates",
            "Enforce per-run token/step ceilings and circuit breakers"
          ],
          "upskilling_instructions": [
            "Trace IDs must flow seamlessly from client -> orchestrator -> subagents -> MCP servers.",
            "Alert on abnormal step-count spikes that signal infinite loops.",
            "Optimize expensive loops with prompt caching and model routing."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Grafana Documentation",
              "url": "https://grafana.com/docs/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Production Hardening & Governance",
          "tasks": [
            "Load-test concurrent agent executions, queue backpressure, and provider failover",
            "Implement audit logs, compliance artifacts (NIST AI RMF), and kill switches",
            "Run game-day drills for model outages and compromised tool responses"
          ],
          "upskilling_instructions": [
            "Ensure operators can pause or terminate runaway background agents immediately.",
            "Maintain immutable audit logs of all tool mutations.",
            "Test graceful degradation when reasoning models are throttled."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Enterprise Agentic Platform",
          "tasks": [
            "Ship a production-grade agentic system with Temporal durability, MCP servers, sandboxed execution, OpenTelemetry tracing, and Inspect AI evals",
            "Publish benchmarks (task completion rate, cost/task, p95 duration) and security architecture",
            "Prepare for Senior/Staff Agentic AI Engineer interviews"
          ],
          "upskilling_instructions": [
            "Your software engineering rigor (durability, idempotency, sandboxing, observability) is what separates production agents from brittle demos.",
            "Present concrete ablation results showing how verifiers and context engineering improved pass rates.",
            "Keep the repo clean and runnable via Docker Compose."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            },
            {
              "title": "Inspect AI Agent & Safety Evals",
              "url": "https://inspect.aisi.org.uk/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Systems & Inference Engineer",
      "title": "Any Role to AI Systems & Inference Engineer",
      "summary": "A deep 2026 systems roadmap focused on high-throughput LLM serving: GPU architecture, PyTorch 2.x, Triton kernels, vLLM/SGLang, KV-cache & speculative decoding, quantization, and Kubernetes inference scaling.",
      "base_difficulty": 86,
      "months": [
        {
          "month": 1,
          "focus": "Systems Python, Linux & Performance Profiling",
          "tasks": [
            "Master uv, profiling tools (py-spy, cProfile), and async concurrency in Python",
            "Understand CPU/GPU memory hierarchy, PCIe/NVLink bandwidth, and roofline modeling",
            "Build a benchmark harness measuring TTFT, inter-token latency (ITL), and throughput"
          ],
          "upskilling_instructions": [
            "Always distinguish compute-bound (prefill) from memory-bandwidth-bound (decode) phases in LLM inference.",
            "Measure p50, p95, and p99 latencies under concurrent load, never single-request averages.",
            "Automate reproducible benchmarks."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "PyTorch 2.x Internals & torch.compile",
          "tasks": [
            "Understand PyTorch tensors, strides, CUDA streams, and memory allocators",
            "Accelerate models with torch.compile, CUDA Graphs, and BF16/FP16 mixed precision",
            "Profile GPU kernels and CPU dispatch overhead using PyTorch Profiler"
          ],
          "upskilling_instructions": [
            "Eliminate CPU-GPU synchronization points (`.item()`, unnecessary host copies) that stall GPU execution.",
            "Use CUDA Graphs to slash kernel-launch overhead during autoregressive decode.",
            "Verify numerical equivalence after compiler optimizations."
          ],
          "references": [
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Transformer Memory & KV-Cache Mechanics",
          "tasks": [
            "Calculate exact parameter, activation, and KV-cache VRAM budgets for GQA/MQA models",
            "Study FlashAttention tiling and PagedAttention virtual memory management",
            "Implement a minimal KV-cache autoregressive decoder in PyTorch"
          ],
          "upskilling_instructions": [
            "Build a spreadsheet or script that predicts exact max batch size for any model, context length, and GPU VRAM.",
            "Understand why GQA and FP8 KV-cache dramatically increase concurrent batch capacity.",
            "Inspect memory fragmentation issues."
          ],
          "references": [
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Production Serving with vLLM & SGLang",
          "tasks": [
            "Deploy and tune open-weight LLMs with vLLM and SGLang",
            "Configure continuous batching, chunked prefill, and prefix caching (RadixAttention)",
            "Benchmark throughput/latency tradeoffs across varying prompt/output length distributions"
          ],
          "upskilling_instructions": [
            "Enable prefix caching for workloads with shared system prompts or multi-turn agent histories.",
            "Tune chunked prefill so long prompts do not stall active decode batches.",
            "Compare vLLM and SGLang on structured-output and multi-turn benchmarks."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Quantization: FP8, FP4, AWQ & GGUF",
          "tasks": [
            "Apply post-training quantization (FP8, AWQ, GPTQ, GGUF) and measure VRAM/speedups",
            "Evaluate quantized models on perplexity and downstream reasoning/coding evals",
            "Understand activation outliers and mixed-precision dequantization kernels"
          ],
          "upskilling_instructions": [
            "Never deploy a quantized model on speed benchmarks alone—always check quality degradation on reasoning and structured-output tasks.",
            "Benchmark FP8 on Hopper/Blackwell GPUs vs INT4 weight-only quantization.",
            "Document quality-vs-throughput Pareto curves."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Speculative Decoding & Latency Optimization",
          "tasks": [
            "Implement and benchmark speculative decoding (draft models, Medusa/Eagle-style heads)",
            "Measure acceptance rates across domains (code, chat, structured JSON)",
            "Combine structured-output constrained decoding (xgrammar/outlines) with high throughput"
          ],
          "upskilling_instructions": [
            "Speculative decoding shines on predictable text like code and JSON—measure actual tokens/sec speedup, not theoretical acceptance.",
            "Verify constrained decoding masks do not stall the GPU scheduler.",
            "Test under both low and high concurrency."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            },
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "GPU Kernel Programming with Triton",
          "tasks": [
            "Learn GPU warps, shared memory, coalesced memory access, and SRAM tiling",
            "Write custom fused elementwise, softmax, and RMSNorm kernels in OpenAI Triton",
            "Benchmark your Triton kernels against PyTorch eager and torch.compile baselines"
          ],
          "upskilling_instructions": [
            "Focus on memory-bandwidth-bound ops where fusing reads/writes into a single kernel yields huge speedups.",
            "Verify kernel correctness across edge-case tensor shapes and dtypes.",
            "Profile achieved memory bandwidth vs hardware theoretical peak."
          ],
          "references": [
            {
              "title": "OpenAI Triton GPU Kernels",
              "url": "https://triton-lang.org/main/index.html"
            },
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Multi-GPU & Disaggregated Inference",
          "tasks": [
            "Configure Tensor Parallelism (TP) and Pipeline Parallelism (PP) for large models",
            "Study disaggregated prefill/decode architectures and KV-cache transfer over RDMA/NVLink",
            "Benchmark inter-node communication overhead vs single-node TP"
          ],
          "upskilling_instructions": [
            "Separate prefill-heavy nodes from decode-heavy nodes when long-context workloads cause TTFT/ITL interference.",
            "Measure NVLink vs PCIe scaling efficiency.",
            "Tune NCCL environment settings for multi-GPU stability."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            },
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Kubernetes Inference & AI Gateways",
          "tasks": [
            "Deploy inference engines on Kubernetes with GPU scheduling, readiness probes, and autoscaling",
            "Implement KV-cache-aware routing and prefix-affinity load balancing at the AI gateway",
            "Handle graceful pod draining without dropping active streaming connections"
          ],
          "upskilling_instructions": [
            "Standard round-robin load balancing destroys prefix-cache hit rates—route requests with shared prefixes to warm replicas.",
            "Autoscale on queue depth and KV-cache utilization, not CPU.",
            "Test rolling upgrades under live streaming traffic."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Observability, Profiling & SLO Engineering",
          "tasks": [
            "Expose vLLM/SGLang metrics to Prometheus and build Grafana SLO dashboards",
            "Instrument OpenTelemetry traces across gateway routing and inference workers",
            "Diagnose tail-latency spikes (GC pauses, prefill interference, thermal throttling, OOMs)"
          ],
          "upskilling_instructions": [
            "Track TTFT, TPOT (time-per-output-token), KV-cache usage %, and preemption counts continuously.",
            "Set actionable SLO alerts tied to user-visible latency.",
            "Profile production-like traffic replays."
          ],
          "references": [
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "Grafana Documentation",
              "url": "https://grafana.com/docs/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Inference Economics & Capacity Planning",
          "tasks": [
            "Model cost per 1M input/output tokens across GPU types (H100/H200/B200/L40S)",
            "Design tiered routing (small quantized models + frontier fallback) and spot/reserved capacity mixes",
            "Implement rate limiting, token quotas, and denial-of-wallet protections"
          ],
          "upskilling_instructions": [
            "Compute break-even utilization for self-hosted GPUs vs serverless token APIs.",
            "Account for idle off-peak hours and cold-start buffers in capacity math.",
            "Verify security hardening on multi-tenant inference endpoints."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: High-Throughput Inference Stack",
          "tasks": [
            "Deliver a benchmarked inference platform with vLLM/SGLang, FP8/speculative optimization, prefix-aware routing on Kubernetes, and Grafana SLO dashboards",
            "Publish Pareto curves (throughput vs p95 latency vs eval accuracy vs $/1M tokens)",
            "Prepare for AI Systems & Inference Engineer interviews covering GPU memory, Triton, and distributed serving"
          ],
          "upskilling_instructions": [
            "Bring hard, reproducible numbers: tokens/sec/GPU, KV-cache hit rate, and $/1M tokens.",
            "Include load-testing scripts so reviewers can reproduce your benchmarks.",
            "Practice explaining prefill vs decode bottlenecks clearly."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "OpenAI Triton GPU Kernels",
              "url": "https://triton-lang.org/main/index.html"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "DevOps Engineer",
      "target_ai_role": "AI Systems & Inference Engineer",
      "title": "DevOps Engineer to AI Systems & Inference Engineer",
      "summary": "A 2026 path leveraging Kubernetes, Linux, and SRE expertise into GPU inference infrastructure, vLLM/SGLang tuning, quantization, prefix-aware routing, and AI serving SLOs.",
      "base_difficulty": 74,
      "months": [
        {
          "month": 1,
          "focus": "GPU Hardware & LLM Inference Basics",
          "tasks": [
            "Understand GPU VRAM, HBM bandwidth, NVLink, and the roofline model of LLM inference",
            "Set up reproducible Python tooling with uv and build an async TTFT/ITL benchmark client",
            "Size GPU memory budgets for weights, activations, and KV-cache"
          ],
          "upskilling_instructions": [
            "Map your SRE intuition for CPU/memory saturation directly to GPU compute (prefill) vs HBM bandwidth (decode).",
            "Always benchmark p95/p99 tail latency under realistic concurrency.",
            "Build a VRAM sizing calculator script."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "CUDA Containers & Model Weight Delivery",
          "tasks": [
            "Build lean multi-stage CUDA Docker images with NVIDIA Container Toolkit",
            "Optimize multi-gigabyte model weight caching (NVMe, OCI/artifact caches, fast object storage)",
            "Eliminate cold-start bottlenecks in autoscaled GPU pods"
          ],
          "upskilling_instructions": [
            "Keep container images small and stream/mount weights from fast local NVMe or parallel object-store pulls.",
            "Configure startup probes tuned for weight-loading time.",
            "Scan base images for CVEs in CI."
          ],
          "references": [
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "PyTorch 2.x & Profiling Fundamentals",
          "tasks": [
            "Understand PyTorch execution, CUDA streams, BF16 mixed precision, and torch.compile",
            "Profile inference bottlenecks using PyTorch Profiler and NVIDIA Nsight/DCGM metrics",
            "Identify CPU-bound tokenization or preprocessing bottlenecks starving GPUs"
          ],
          "upskilling_instructions": [
            "Often GPUs sit idle because Python tokenization, image decoding, or HTTP serialization is single-threaded.",
            "Separate CPU preprocessing workers from GPU inference pods when needed.",
            "Verify GPU utilization with DCGM."
          ],
          "references": [
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Production Serving with vLLM & SGLang",
          "tasks": [
            "Deploy and tune vLLM and SGLang with continuous batching and PagedAttention",
            "Configure chunked prefill and prefix caching (RadixAttention) for multi-turn agent workloads",
            "Load-test mixed short/long context workloads to find saturation points"
          ],
          "upskilling_instructions": [
            "Tune `max-num-seqs` and `gpu-memory-utilization` carefully to maximize throughput without KV-cache thrashing.",
            "Verify prefix caching hit rates on realistic agent traces.",
            "Test graceful shutdown so streaming responses finish cleanly."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Quantization & Speculative Decoding",
          "tasks": [
            "Deploy FP8, AWQ, and GGUF quantized models and measure VRAM savings and throughput gains",
            "Run automated accuracy evals (Promptfoo/Inspect) to ensure quantization stays within quality SLOs",
            "Test speculative decoding on code and structured-output traffic"
          ],
          "upskilling_instructions": [
            "Treat model quantization like any other performance optimization: prove correctness with automated evals before shipping.",
            "Compare throughput per dollar across GPU SKUs.",
            "Document quality-latency Pareto curves."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Hugging Face Transformers",
              "url": "https://huggingface.co/docs/transformers/index"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Multi-GPU & Disaggregated Serving",
          "tasks": [
            "Configure Tensor Parallelism across multi-GPU nodes and tune NCCL networking",
            "Explore disaggregated prefill/decode pools to isolate TTFT from decode ITL",
            "Test node failure recovery and RDMA/network health checks"
          ],
          "upskilling_instructions": [
            "Only use Tensor Parallelism when a model cannot fit or meet latency SLOs on a single GPU—TP adds communication overhead.",
            "Isolate long-context prefill bursts from latency-sensitive decode traffic.",
            "Automate GPU health checks (XID errors, ECC)."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "SGLang Fast Serving Framework",
              "url": "https://docs.sglang.ai/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Kubernetes GPU Scheduling & Autoscaling",
          "tasks": [
            "Configure GPU node pools, NVIDIA GPU Operator, MIG/time-slicing, and topology-aware scheduling",
            "Autoscale inference replicas using custom metrics (waiting requests, KV-cache usage)",
            "Manage multi-region failover and warm standby pools"
          ],
          "upskilling_instructions": [
            "CPU/RAM HPA metrics are useless for LLM pods—scale on vLLM/SGLang queue depth and KV-cache saturation.",
            "Use MIG slicing for smaller embedding/guardrail models.",
            "Practice node drain and preemption drills."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Prefix-Aware AI Gateways & Routing",
          "tasks": [
            "Deploy an AI gateway performing auth, rate limiting, token quotas, and fallback routing",
            "Implement prefix-affinity / session-aware load balancing to maximize KV-cache reuse",
            "Configure circuit breakers and automatic failover to managed APIs during capacity spikes"
          ],
          "upskilling_instructions": [
            "Routing consecutive turns of an agent session to the same warm replica can cut TTFT dramatically.",
            "Enforce per-tenant token-per-minute limits at the gateway.",
            "Test failover under simulated GPU cluster outages."
          ],
          "references": [
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Observability & Tail-Latency Debugging",
          "tasks": [
            "Build Prometheus + Grafana dashboards for DCGM GPU stats, TTFT, TPOT, and preemption rates",
            "Instrument OpenTelemetry GenAI traces end-to-end from gateway to inference engine",
            "Diagnose tail-latency anomalies (batching stalls, KV-cache evictions, noisy neighbors)"
          ],
          "upskilling_instructions": [
            "Alert on KV-cache preemption spikes—they directly cause sudden latency cliffs.",
            "Keep trace sampling smart so observability does not add overhead.",
            "Scrub PII from logged payloads."
          ],
          "references": [
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            },
            {
              "title": "Grafana Documentation",
              "url": "https://grafana.com/docs/"
            },
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Triton & Custom Kernel Literacy",
          "tasks": [
            "Learn GPU kernel execution basics and read OpenAI Triton kernels",
            "Understand how custom fused kernels (FlashAttention, quantized GEMMs) impact serving engines",
            "Benchmark inference engine upgrades safely in canary environments"
          ],
          "upskilling_instructions": [
            "Even if you do not write CUDA kernels daily, reading Triton/kernel profiles helps you diagnose hardware bottlenecks.",
            "Validate new vLLM/CUDA releases in staging against regression suites.",
            "Track upstream kernel optimizations for your GPU generation."
          ],
          "references": [
            {
              "title": "OpenAI Triton GPU Kernels",
              "url": "https://triton-lang.org/main/index.html"
            },
            {
              "title": "PyTorch Documentation",
              "url": "https://pytorch.org/docs/stable/index.html"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Inference FinOps & Security Hardening",
          "tasks": [
            "Build $/1M-token unit economics models comparing self-hosted GPUs vs serverless APIs",
            "Harden multi-tenant inference clusters (network policies, safetensors-only, weight integrity)",
            "Implement denial-of-wallet protections and automated idle-GPU scale-down"
          ],
          "upskilling_instructions": [
            "Idle H100s are expensive—automate scale-to-zero or spot fallback for non-critical environments.",
            "Enforce safetensors-only weight loading to eliminate pickle RCE risks.",
            "Audit endpoints against OWASP LLM Top 10."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "Prometheus Monitoring",
              "url": "https://prometheus.io/docs/introduction/overview/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: Production GPU Inference Platform",
          "tasks": [
            "Deliver a Kubernetes inference platform with vLLM/SGLang, prefix-aware gateway routing, custom autoscaling, and Grafana SLO dashboards",
            "Publish reproducible load-test benchmarks, cold-start timings, and $/1M-token analysis",
            "Target AI Inference Engineer, AI Infrastructure Engineer, or Staff MLOps roles"
          ],
          "upskilling_instructions": [
            "Your SRE + Kubernetes depth combined with real vLLM/GPU tuning is one of the scarcest skillsets in 2026.",
            "Present concrete before/after throughput and cost optimizations.",
            "Include clean runbooks for GPU OOMs and cluster failovers."
          ],
          "references": [
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Grafana Documentation",
              "url": "https://grafana.com/docs/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI UX Designer",
      "title": "Any Role to AI UX Designer",
      "summary": "A 2026 roadmap into AI UX Design: designing non-deterministic interfaces, generative UI, agentic supervision & approval flows, multimodal/voice UX, live model prototyping, and human-centered evals.",
      "base_difficulty": 62,
      "months": [
        {
          "month": 1,
          "focus": "Human-Centered AI Foundations",
          "tasks": [
            "Study Google PAIR Guidebook and 2026 AI UX patterns (copilot, inline assist, generative UI, background agents)",
            "Audit 5 leading AI products to catalog how they handle latency, uncertainty, and errors",
            "Learn core AI concepts: tokens, context windows, reasoning models, RAG, and MCP"
          ],
          "upskilling_instructions": [
            "Stop thinking of AI UX as a single chat box—most great AI products embed intelligence directly into existing canvases and workflows.",
            "Map where deterministic controls are faster and clearer than natural language.",
            "Build a pattern library of real-world AI interactions."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Designing for Non-Determinism & Uncertainty",
          "tasks": [
            "Design UI states for streaming, thinking/reasoning progress, partial results, and failures",
            "Create graceful error-recovery, regeneration, and manual-override patterns",
            "Define honest empty states and capability boundaries so users know what the AI can do"
          ],
          "upskilling_instructions": [
            "Every AI interaction has failure modes—design the 'when AI is wrong' path with as much care as the happy path.",
            "Keep thinking traces collapsible and scannable so users feel informed without being overwhelmed.",
            "Avoid fake precision or misleading confidence scores."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Generative UI & Beyond-Chat Interfaces",
          "tasks": [
            "Design structured Generative UI components (interactive cards, diff views, inline tables, forms)",
            "Craft seamless transitions between natural-language prompts and direct manipulation",
            "Prototype canvas-based and ambient AI workflows"
          ],
          "upskilling_instructions": [
            "Give users structured controls (toggles, sliders, inline edits) to refine AI output instead of forcing them to re-prompt from scratch.",
            "Use diff views for edits so users immediately see what changed.",
            "Keep layouts stable during streaming to avoid disorienting jumps."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Trust, Provenance & Citation UX",
          "tasks": [
            "Design inline citations, hover evidence previews, and source-verification drawers for RAG",
            "Create clear visual distinctions between verified source facts and model synthesis",
            "Design honest 'not found in sources' and ambiguity-clarification states"
          ],
          "upskilling_instructions": [
            "Trust comes from easy verification—users should be able to check a claim against its original source in one click.",
            "Test whether users over-trust fluent AI prose during usability sessions.",
            "Show data freshness and scope clearly."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Agentic UX, Control & Human-in-the-Loop",
          "tasks": [
            "Design supervision interfaces for multi-step background agents and MCP tool use",
            "Create clear approval dialogs showing exact tool arguments, impact, and undo/rollback options",
            "Design resumable progress timelines, pause/steer controls, and escalation notifications"
          ],
          "upskilling_instructions": [
            "Match autonomy to risk: auto-run read-only searches, preview drafts, and require explicit approval for external writes or sends.",
            "Let users steer or correct an agent mid-run rather than waiting for it to fail at step 12.",
            "Design clear audit trails of what an agent changed."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Live AI Prototyping with Code & AI Studio",
          "tasks": [
            "Learn TypeScript/HTML/CSS basics and prototype live AI flows using Vercel AI SDK or AI Studio",
            "Test your designs against real, unscripted model outputs and real latency",
            "Iterate on prompt framing and UI copy together"
          ],
          "upskilling_instructions": [
            "Static Figma mocks lie about AI UX because they use perfect lorem-ipsum text and zero latency—always prototype with live models.",
            "Observe how real streaming speed and messy formatting affect layout.",
            "Share interactive prototypes with engineers for faster alignment."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Multimodal, Voice & Spatial Interactions",
          "tasks": [
            "Design multimodal inputs (annotated screenshots, camera, file drops) and real-time voice UX",
            "Handle voice turn-taking, barge-in interruptions, noise, and live editable transcripts",
            "Provide instant text/visual fallbacks for every voice or camera interaction"
          ],
          "upskilling_instructions": [
            "Voice UX fails if users cannot glance at a visual anchor or edit a misheard entity easily.",
            "Show clear listening, thinking, and speaking states.",
            "Test multimodal flows in realistic, imperfect environments."
          ],
          "references": [
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            }
          ]
        },
        {
          "month": 8,
          "focus": "AI Usability Research & Evaluation",
          "tasks": [
            "Run task-based usability tests measuring verification time, edit distance, and user trust",
            "Translate qualitative UX findings into golden eval test cases with PMs and engineers",
            "Analyze real user prompt logs and abandonment points"
          ],
          "upskilling_instructions": [
            "Watch where users hesitate, copy-paste into another tool, or abandon the AI completely.",
            "Pair qualitative observation with quantitative edit-rate metrics.",
            "Contribute edge-case prompts directly to the team's eval suite."
          ],
          "references": [
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Accessibility & Inclusive AI Design",
          "tasks": [
            "Audit streaming text, Generative UI, and tool-approval modals for WCAG & ARIA compliance",
            "Ensure screen readers announce streamed updates cleanly without spamming focus",
            "Test AI copy and UX across diverse languages, literacy levels, and assistive tech"
          ],
          "upskilling_instructions": [
            "Use polite ARIA live regions and clear keyboard shortcuts for stop/regenerate/approve actions.",
            "Avoid relying solely on color or subtle motion to indicate AI confidence or errors.",
            "Test with actual keyboard-only and screen-reader workflows."
          ],
          "references": [
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Responsible AI, Privacy & Consent UX",
          "tasks": [
            "Design transparent AI disclosures, data-usage controls, and enterprise privacy indicators",
            "Create safe confirmation patterns that help users spot potential prompt injections or risky actions",
            "Align UX patterns with EU AI Act transparency obligations and NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Explain data boundaries in plain human language—tell users what is shared, stored, or kept private.",
            "Never use dark patterns to nudge users into sharing sensitive data.",
            "Design clear reporting flows for harmful or inaccurate outputs."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Design Systems for AI Products",
          "tasks": [
            "Build reusable AI UI tokens and components (streaming containers, citation chips, diff cards, approval sheets)",
            "Document usage guidelines for when to use inline assist vs side-panel vs background agent",
            "Collaborate with frontend engineers on responsive, low-CLS component implementations"
          ],
          "upskilling_instructions": [
            "Standardize AI patterns across the product so users do not have to relearn trust cues on every screen.",
            "Include states for loading, partial stream, empty, refusal, and error in every component spec.",
            "Partner closely with engineering on component ergonomics."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI UX Portfolio & Case Studies",
          "tasks": [
            "Publish 2 deep AI UX case studies featuring live prototypes, failure-mode handling, and usability metrics",
            "Show before/after flows demonstrating reduced verification time and higher user trust",
            "Prepare for AI UX / Product Designer interviews with live critique and prototyping exercises"
          ],
          "upskilling_instructions": [
            "Highlight how you designed for non-determinism, agency, and error recovery—not just pretty dark-mode chat bubbles.",
            "Include recordings of live model prototypes.",
            "Be ready to critique any AI product's UX, trust cues, and workflow fit."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "AI UX Designer",
      "title": "UX Designer to AI UX Designer",
      "summary": "A focused 2026 specialization path for UX designers to master generative UI, agentic human-in-the-loop patterns, live model prototyping, multimodal/voice UX, and eval-driven design.",
      "base_difficulty": 48,
      "months": [
        {
          "month": 1,
          "focus": "2026 AI Paradigms Through a UX Lens",
          "tasks": [
            "Master how reasoning models, RAG, context windows, and MCP agents shape user experience",
            "Deconstruct 5 leading AI-native products beyond chat (canvas, inline, background agent)",
            "Establish a personal AI UX pattern library"
          ],
          "upskilling_instructions": [
            "Connect technical constraints (TTFT, context rot, tool errors) directly to interaction design choices.",
            "Identify where deterministic UI beats prompting every time.",
            "Test multiple frontier models daily to build taste for model behavior."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Designing for Latency & Probabilistic Outputs",
          "tasks": [
            "Craft streaming, thinking-indicator, cancellation, and graceful-failure patterns",
            "Design progressive disclosure for model reasoning and confidence cues",
            "Create honest empty states and prompt-starter scaffolding"
          ],
          "upskilling_instructions": [
            "Design the unhappy paths first: timeouts, hallucinations, refusals, and partial streams.",
            "Never hide latency behind dead spinners—use meaningful progress and partial rendering.",
            "Avoid misleading numerical confidence percentages without calibration."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Generative UI & Direct Manipulation",
          "tasks": [
            "Design structured Generative UI components (tables, diffs, forms, action cards)",
            "Combine natural-language intent with direct-manipulation controls for fast refinement",
            "Prototype inline editing and one-click undo/retry flows"
          ],
          "upskilling_instructions": [
            "Users should be able to tweak a slider or edit a single cell without rewriting a whole prompt.",
            "Use clear diff highlights whenever AI modifies user work.",
            "Keep layout shifts near zero while components stream in."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Zod Schema Validation",
              "url": "https://zod.dev/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Trust, Citations & Groundedness UX",
          "tasks": [
            "Design inline citations, source drawers, and highlighted evidence spans",
            "Distinguish retrieved facts from synthesized recommendations visually",
            "Design clear 'insufficient evidence' and clarification states"
          ],
          "upskilling_instructions": [
            "Make verifying an AI claim effortless—one click from sentence to exact highlighted source passage.",
            "Watch for automation bias in user testing where users blindly accept polished prose.",
            "Surface source recency and access scope."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Agentic Supervision & Approval Patterns",
          "tasks": [
            "Design multi-step agent timelines, pause/steer controls, and MCP tool-approval modals",
            "Map risk tiers to autonomy levels (auto-execute read vs confirm write vs escalate)",
            "Design clear audit logs and rollback mechanisms for agent actions"
          ],
          "upskilling_instructions": [
            "Preview the exact external payload (email, PR, SQL, calendar invite) before an agent executes a mutation.",
            "Let users redirect an agent mid-flight instead of canceling from scratch.",
            "Design calm, non-spammy notifications for background agents."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Live Model Prototyping",
          "tasks": [
            "Build interactive prototypes with live models using AI Studio, v0/coding agents, or Vercel AI SDK",
            "Test your Figma concepts against real, messy model outputs and real API latency",
            "Co-iterate on prompt instructions and UI copy with engineers"
          ],
          "upskilling_instructions": [
            "Live prototyping exposes weird phrasing, slow reasoning pauses, and edge-case formatting immediately.",
            "Share working code prototypes to cut handoff ambiguity.",
            "Test with messy real user inputs, not clean demo data."
          ],
          "references": [
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "TypeScript Handbook",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Multimodal & Voice Interaction Design",
          "tasks": [
            "Design seamless image, screenshot, document, and voice input flows",
            "Craft real-time voice turn-taking, interruption handling, and editable live transcripts",
            "Ensure text/visual parity for noisy or low-privacy environments"
          ],
          "upskilling_instructions": [
            "Pair voice interactions with persistent visual state so users never lose context.",
            "Make correcting a transcription error effortless.",
            "Design clear privacy indicators for mic and camera."
          ],
          "references": [
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            },
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            }
          ]
        },
        {
          "month": 8,
          "focus": "AI Usability Testing & Eval Collaboration",
          "tasks": [
            "Run usability studies measuring verification overhead, edit distance, and task trust",
            "Convert observed UX failures into golden test cases in Promptfoo or Langfuse",
            "Partner with PMs and engineers in weekly trace-review rituals"
          ],
          "upskilling_instructions": [
            "Your qualitative research skills are vital for catching subtle UX failures that automated evals miss.",
            "Define what 'good' looks like in concrete rubrics.",
            "Track how UI changes affect prompt success rates."
          ],
          "references": [
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Accessibility in AI Interfaces",
          "tasks": [
            "Design WCAG-compliant streaming regions, keyboard-first approvals, and accessible citations",
            "Ensure voice and multimodal flows have full keyboard and screen-reader alternatives",
            "Test AI interfaces with assistive technologies"
          ],
          "upskilling_instructions": [
            "Configure ARIA live regions carefully so screen readers announce completed chunks cleanly without chaos.",
            "Never rely on color alone for diff highlights or status.",
            "Keep focus management predictable when Generative UI updates."
          ],
          "references": [
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Privacy, Transparency & Safe AI UX",
          "tasks": [
            "Design clear AI disclosures, memory/data controls, and opt-out settings",
            "Craft friction-right warnings for risky agent actions or untrusted external content",
            "Align interface transparency with EU AI Act and NIST AI RMF expectations"
          ],
          "upskilling_instructions": [
            "Use plain, respectful language to explain what context the AI can see and what is stored.",
            "Make deleting memory or chat history obvious and immediate.",
            "Design clear feedback/reporting controls."
          ],
          "references": [
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Design Systems & Cross-Functional Leadership",
          "tasks": [
            "Create a scalable AI component library (streaming, citations, diffs, agent cards, approvals)",
            "Write clear product-wide guidelines on when to use copilot vs autonomous agent patterns",
            "Lead AI design critiques and mentor peers on human-centered AI"
          ],
          "upskilling_instructions": [
            "Include every edge state (loading, streaming, error, refusal, offline) in your Figma and code specs.",
            "Align design, engineering, and PM on shared quality bars.",
            "Keep components flexible as models evolve."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "MDN Web Accessibility (ARIA)",
              "url": "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
            }
          ]
        },
        {
          "month": 12,
          "focus": "AI UX Specialization Portfolio",
          "tasks": [
            "Publish 2 standout AI UX case studies with live interactive prototypes, eval collaboration, and trust metrics",
            "Present clear before/after outcomes (task time, edit rate, user confidence)",
            "Interview confidently for Senior/Staff AI UX Designer or Design Technologist roles"
          ],
          "upskilling_instructions": [
            "Lead with how you solved hard non-deterministic UX problems: control, verification, and error recovery.",
            "Show live prototypes alongside research artifacts.",
            "Articulate how UX and model evals reinforce each other."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Vercel AI SDK",
              "url": "https://sdk.vercel.ai/docs"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "Forward Deployed AI Engineer",
      "title": "Any Role to Forward Deployed AI Engineer",
      "summary": "A 2026 roadmap for Forward Deployed AI Engineers: rapid customer discovery, messy enterprise data integration, MCP connectors, custom SME-calibrated evals, security/compliance, and production delivery.",
      "base_difficulty": 78,
      "months": [
        {
          "month": 1,
          "focus": "Modern Python & Rapid Prototyping Stack",
          "tasks": [
            "Set up fast, reproducible Python workspaces with uv, ruff, FastAPI, and Pydantic v2",
            "Build clean CLI and API wrappers around frontier and open-weight LLM providers",
            "Use Git branching and pytest to move fast without breaking customer environments"
          ],
          "upskilling_instructions": [
            "Forward Deployed Engineers ship fast under ambiguity—reproducible uv environments and strict Pydantic schemas keep rapid iterations reliable.",
            "Write smoke tests for every customer-specific transform.",
            "Keep configuration cleanly separated per deployment."
          ],
          "references": [
            {
              "title": "uv: Python Package & Project Manager",
              "url": "https://docs.astral.sh/uv/"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Enterprise Discovery & Problem Scoping",
          "tasks": [
            "Shadow domain experts (ops, finance, legal, support) to map real manual workflows",
            "Translate vague executive AI goals into narrow, measurable, high-ROI pilot scopes",
            "Identify data availability, access-control, and verification bottlenecks upfront"
          ],
          "upskilling_instructions": [
            "Never build in isolation for 6 weeks—sit with the actual operators on day one and watch their screen.",
            "Pick an initial use case with clear ground truth and high weekly frequency.",
            "Define concrete success metrics with the customer sponsor before coding."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Messy Enterprise Data & Multimodal ETL",
          "tasks": [
            "Ingest and normalize ugly real-world PDFs, spreadsheets, emails, and legacy APIs using Polars, DuckDB, and VLMs",
            "Preserve document hierarchy, timestamps, and source links during parsing",
            "Build incremental syncs and data-quality alerts"
          ],
          "upskilling_instructions": [
            "Enterprise data is always messier than expected—inspect 50 real documents before designing your chunking or extraction schema.",
            "Use DuckDB to slice and audit ingested records in seconds.",
            "Handle encoding quirks, scanned PDFs, and nested tables cleanly."
          ],
          "references": [
            {
              "title": "Polars User Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            },
            {
              "title": "Google Gemini API & Agent Docs",
              "url": "https://ai.google.dev/gemini-api/docs"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Hybrid RAG & Permission-Aware Retrieval",
          "tasks": [
            "Deploy hybrid search (BM25 + Qdrant/pgvector + reranking) tailored to domain terminology",
            "Enforce customer ACLs, tenant isolation, and row-level security inside retrieval queries",
            "Deliver verifiable inline citations pointing back to exact enterprise source records"
          ],
          "upskilling_instructions": [
            "Enterprise pilots fail immediately if an employee sees a document they lack permission to view—enforce ACLs in the retrieval layer.",
            "Tune hybrid weights for exact SKUs, policy IDs, and internal acronyms.",
            "Show clickable provenance in every answer."
          ],
          "references": [
            {
              "title": "Qdrant Vector Search Docs",
              "url": "https://qdrant.tech/documentation/"
            },
            {
              "title": "pgvector: Vector Similarity Search",
              "url": "https://github.com/pgvector/pgvector"
            },
            {
              "title": "OpenAI Agents & Responses Docs",
              "url": "https://platform.openai.com/docs/overview"
            }
          ]
        },
        {
          "month": 5,
          "focus": "MCP Connectors & Legacy System Integration",
          "tasks": [
            "Build custom MCP servers wrapping customer ERPs, CRMs, ticketing tools, and SQL warehouses",
            "Implement read-only sandboxes, rate limits, and idempotent write tools with human approval",
            "Handle flaky legacy APIs with retries, circuit breakers, and clear error messages"
          ],
          "upskilling_instructions": [
            "MCP lets you connect AI workflows cleanly to heterogeneous customer stacks without rewriting core agents.",
            "Start with read-only tools and draft-creation before enabling automated writes.",
            "Log every external API call with correlation IDs."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            },
            {
              "title": "Pydantic v2 Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "SME-Calibrated Evals & Golden Datasets",
          "tasks": [
            "Co-create 50-100 golden test cases directly with customer domain experts",
            "Build automated eval suites in Langfuse and Promptfoo calibrated to SME grading",
            "Run side-by-side accuracy, latency, and cost scorecards for weekly customer readouts"
          ],
          "upskilling_instructions": [
            "Evals are your best stakeholder alignment tool: turn subjective feedback ('it feels off') into concrete test cases.",
            "Calibrate automated LLM judges against SME scores until they agree.",
            "Gate every deployment on zero regressions."
          ],
          "references": [
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "Promptfoo Evaluation & Red Teaming",
              "url": "https://www.promptfoo.dev/docs/intro/"
            },
            {
              "title": "pytest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Agentic Workflows & Durable Execution",
          "tasks": [
            "Build reliable multi-step workflows combining deterministic code with bounded LLM/agent steps",
            "Use durable execution (Temporal or state queues) for long-running enterprise batch/approval flows",
            "Add human-in-the-loop review queues for low-confidence or high-impact outputs"
          ],
          "upskilling_instructions": [
            "Enterprise customers prize predictability over flashiness—use deterministic state machines wherever possible.",
            "Design clean escalation paths to human operators when confidence is low.",
            "Test crash recovery mid-workflow."
          ],
          "references": [
            {
              "title": "Temporal Durable Execution",
              "url": "https://docs.temporal.io/"
            },
            {
              "title": "Anthropic: Building Effective Agents",
              "url": "https://www.anthropic.com/research/building-effective-agents"
            },
            {
              "title": "FastAPI Documentation",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Enterprise Security, Privacy & Deployment",
          "tasks": [
            "Deploy inside customer VPCs or isolated cloud environments using Docker and Kubernetes",
            "Implement PII scrubbing (Presidio), zero-data-retention API configs, and prompt-injection defenses",
            "Complete security architecture reviews aligned with OWASP LLM Top 10 and NIST AI RMF"
          ],
          "upskilling_instructions": [
            "Know how to answer InfoSec questionnaires crisply: data residency, encryption, RBAC, and audit logging.",
            "Sandbox any code execution or untrusted document processing.",
            "Never log raw customer secrets in external observability tools."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM & GenAI Apps",
              "url": "https://genai.owasp.org/llm-top-10/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Presidio PII Anonymization",
              "url": "https://microsoft.github.io/presidio/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Observability, Latency & Unit Economics",
          "tasks": [
            "Instrument OpenTelemetry GenAI traces and build customer-facing ROI & usage dashboards",
            "Optimize cost and speed via prompt caching, smart model routing, and batch APIs",
            "Monitor production drift, tool errors, and user edit rates"
          ],
          "upskilling_instructions": [
            "Prove ROI with hard numbers: hours saved, tickets resolved, and cost per task vs manual baseline.",
            "Catch silent upstream data changes before they degrade quality.",
            "Set hard budget alerts."
          ],
          "references": [
            {
              "title": "OpenTelemetry GenAI Semantic Conventions",
              "url": "https://opentelemetry.io/docs/specs/semconv/gen-ai/"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "DuckDB Documentation",
              "url": "https://duckdb.org/docs/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Open-Weight & Air-Gapped Inference",
          "tasks": [
            "Deploy open-weight models via vLLM in strict privacy or air-gapped customer environments",
            "Benchmark quantized self-hosted models against frontier APIs on the customer's golden eval set",
            "Configure health checks, autoscaling, and fallback routing"
          ],
          "upskilling_instructions": [
            "Many regulated enterprises require self-hosted or VPC-local models—knowing vLLM and quantization unlocks those deals.",
            "Verify structured-output and tool-calling reliability on open models before committing.",
            "Document exact GPU sizing."
          ],
          "references": [
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            },
            {
              "title": "Kubernetes Documentation",
              "url": "https://kubernetes.io/docs/home/"
            },
            {
              "title": "Docker Documentation",
              "url": "https://docs.docker.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Production Rollout, Enablement & Handoff",
          "tasks": [
            "Lead phased rollouts (shadow -> pilot -> team-wide GA) with clear adoption tracking",
            "Write operator runbooks, admin guides, and internal champion training materials",
            "Package reusable patterns back into core platform templates"
          ],
          "upskilling_instructions": [
            "A technically great system still fails if frontline staff do not trust or adopt it—invest in onboarding and clear UX.",
            "Gather real user feedback in the first 2 weeks post-launch to fix friction fast.",
            "Document clean handoff procedures for customer IT/SRE."
          ],
          "references": [
            {
              "title": "Google PAIR: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook"
            },
            {
              "title": "GitHub Actions Documentation",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone: End-to-End Enterprise Deployment",
          "tasks": [
            "Build a complete simulated enterprise deployment: messy multimodal ingestion, ACL-enforced hybrid RAG, MCP connector, SME-calibrated evals, and VPC-ready Docker/K8s packaging",
            "Write an executive ROI & architecture case study showing business impact, security posture, and eval results",
            "Prepare for Forward Deployed AI Engineer interviews (live coding, ambiguous customer scoping, and rapid architecture)"
          ],
          "upskilling_instructions": [
            "FDEs are judged on end-to-end ownership: customer empathy + full-stack AI engineering + production reliability.",
            "Practice scoping an ambiguous enterprise problem in a 30-minute mock discovery session.",
            "Showcase working, tested, containerized code."
          ],
          "references": [
            {
              "title": "Model Context Protocol (MCP)",
              "url": "https://modelcontextprotocol.io/introduction"
            },
            {
              "title": "Langfuse Agent Tracing & Evals",
              "url": "https://langfuse.com/docs"
            },
            {
              "title": "vLLM High-Throughput Serving",
              "url": "https://docs.vllm.ai/"
            }
          ]
        }
      ]
    }
  ]
};
