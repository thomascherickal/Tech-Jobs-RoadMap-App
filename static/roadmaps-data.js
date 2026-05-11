window.ROADMAP_DATA = {
  "roadmaps": [
    {
      "current_role": "Software Engineer",
      "target_ai_role": "AI Engineer",
      "title": "Software Engineer to AI Engineer",
      "summary": "A production-focused path from application engineering into model-powered systems, LLM integrations, evaluation, and deployment.",
      "base_difficulty": 70,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript AI Foundations",
          "tasks": [
            "Refresh JavaScript for data workflows",
            "Practice NumPy and pandas basics",
            "Build a CLI that cleans and validates text data"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Machine Learning Basics",
          "tasks": [
            "Study supervised learning concepts",
            "Train scikit-learn classification and regression models",
            "Track experiments and compare metrics"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Deep Learning Concepts",
          "tasks": [
            "Learn tensors, gradients, and neural network layers",
            "Train a small PyTorch model",
            "Document overfitting and regularization findings"
          ],
          "upskilling_instructions": [
            "Learn the training loop slowly: tensors, batches, forward pass, loss, backward pass, optimizer step, validation, and checkpointing.",
            "Run small experiments with learning rate, batch size, regularization, and architecture depth so you can connect symptoms to fixes.",
            "End with a concise model report showing curves, failure examples, compute cost, and whether a simpler model would have been enough."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://docs.pytorch.org/tutorials/"
            },
            {
              "title": "PyTorch Learn the Basics",
              "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html"
            },
            {
              "title": "Google MLCC: Neural Networks",
              "url": "https://developers.google.com/machine-learning/crash-course/neural-networks"
            }
          ]
        },
        {
          "month": 4,
          "focus": "LLM Application Patterns",
          "tasks": [
            "Build prompt templates and structured outputs",
            "Add retries, validation, and guardrails",
            "Compare outputs across several prompts"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Embeddings and Retrieval",
          "tasks": [
            "Create an embedding search prototype",
            "Chunk documents and test retrieval quality",
            "Implement citation-backed responses"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "RAG Systems",
          "tasks": [
            "Build a RAG workflow with browser JavaScript",
            "Add document upload and indexing",
            "Evaluate retrieval and answer quality"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Model Evaluation",
          "tasks": [
            "Create golden datasets",
            "Score factuality, relevance, and latency",
            "Add regression checks to CI"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "AI System Design",
          "tasks": [
            "Design async inference workflows",
            "Add caching and queue boundaries",
            "Document reliability tradeoffs"
          ],
          "upskilling_instructions": [
            "Draw the system before coding: user flow, data flow, trust boundaries, model calls, storage, queues, retries, monitoring, and fallback behavior.",
            "Prototype the riskiest component first, then add observability so failures are visible as structured logs, metrics, traces, or review queues.",
            "Finish with an architecture note that explains tradeoffs in latency, cost, quality, reliability, and operational ownership."
          ],
          "references": [
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "MDN Web APIs",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API"
            },
            {
              "title": "OpenTelemetry JavaScript Documentation",
              "url": "https://opentelemetry.io/docs/languages/js/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Deployment",
          "tasks": [
            "Containerize an AI service",
            "Add observability and cost logging",
            "Deploy to a cloud or local production-like target"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Agents and Tools",
          "tasks": [
            "Build tool-calling workflows",
            "Add permission checks for tool execution",
            "Measure task completion rate"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Security and Safety",
          "tasks": [
            "Test prompt injection scenarios",
            "Add data handling controls",
            "Create safety and abuse monitoring notes"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio Capstone",
          "tasks": [
            "Ship a complete AI product demo",
            "Write architecture and evaluation docs",
            "Prepare interview stories around tradeoffs"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Software Engineer",
      "target_ai_role": "ML Engineer",
      "title": "Software Engineer to ML Engineer",
      "summary": "A path into model training, feature pipelines, experimentation, and reliable ML deployment.",
      "base_difficulty": 76,
      "months": [
        {
          "month": 1,
          "focus": "Math and JavaScript Refresh",
          "tasks": [
            "Review linear algebra and probability basics",
            "Practice NumPy vectorization",
            "Implement metrics from scratch"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Classical ML",
          "tasks": [
            "Train scikit-learn baseline models",
            "Learn train-validation-test splits",
            "Compare precision, recall, and ROC-AUC"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Feature Engineering",
          "tasks": [
            "Build preprocessing pipelines",
            "Handle missing values and categorical data",
            "Version datasets and feature transforms"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Experiment Tracking",
          "tasks": [
            "Log parameters and metrics",
            "Run controlled model comparisons",
            "Create repeatable experiment reports"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Deep Learning",
          "tasks": [
            "Train PyTorch models",
            "Tune optimizers and learning rates",
            "Use GPUs when available"
          ],
          "upskilling_instructions": [
            "Learn the training loop slowly: tensors, batches, forward pass, loss, backward pass, optimizer step, validation, and checkpointing.",
            "Run small experiments with learning rate, batch size, regularization, and architecture depth so you can connect symptoms to fixes.",
            "End with a concise model report showing curves, failure examples, compute cost, and whether a simpler model would have been enough."
          ],
          "references": [
            {
              "title": "PyTorch Tutorials",
              "url": "https://docs.pytorch.org/tutorials/"
            },
            {
              "title": "PyTorch Learn the Basics",
              "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html"
            },
            {
              "title": "Google MLCC: Neural Networks",
              "url": "https://developers.google.com/machine-learning/crash-course/neural-networks"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Data Pipelines",
          "tasks": [
            "Create batch feature jobs",
            "Validate input schemas",
            "Add pipeline monitoring"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Model Serving",
          "tasks": [
            "Expose inference through a JavaScript interface",
            "Add batch and online prediction paths",
            "Measure latency and throughput"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "MLOps",
          "tasks": [
            "Package models with reproducible environments",
            "Create CI checks for training code",
            "Automate model promotion gates"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Monitoring",
          "tasks": [
            "Track prediction drift",
            "Log model performance signals",
            "Define retraining triggers"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Scaling",
          "tasks": [
            "Optimize inference performance",
            "Test async and batch strategies",
            "Estimate serving costs"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Responsible ML",
          "tasks": [
            "Evaluate bias and error slices",
            "Document model limitations",
            "Add explainability artifacts"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Production Capstone",
          "tasks": [
            "Ship an end-to-end ML system",
            "Create a model card",
            "Prepare system design interview notes"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Software Engineer",
      "target_ai_role": "AI Product Manager",
      "title": "Software Engineer to AI Product Manager",
      "summary": "A transition from engineering delivery into AI product strategy, discovery, metrics, and cross-functional execution.",
      "base_difficulty": 62,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Landscape",
          "tasks": [
            "Map AI product categories",
            "Study common LLM capabilities and limits",
            "Analyze three AI products"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Customer Discovery",
          "tasks": [
            "Run problem interviews",
            "Convert pain points into opportunity statements",
            "Prioritize by frequency and severity"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Technical Fluency",
          "tasks": [
            "Learn RAG, fine-tuning, and agents at PM depth",
            "Create decision trees for build choices",
            "Document risks and dependencies"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Metrics",
          "tasks": [
            "Define activation and quality metrics",
            "Add AI-specific evaluation metrics",
            "Design a dashboard outline"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Prototyping",
          "tasks": [
            "Build a clickable or lightweight AI prototype",
            "Run usability tests",
            "Capture failure modes"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Roadmapping",
          "tasks": [
            "Write a PRD for an AI feature",
            "Plan MVP and post-MVP scope",
            "Define release gates"
          ],
          "upskilling_instructions": [
            "Design features from a clear hypothesis, not convenience: write down why each feature should help before adding it to the pipeline.",
            "Use train-only fitting for preprocessing, test categorical and numerical transforms separately, and watch for target leakage at every step.",
            "Deliver a feature pipeline that can transform new records consistently and includes notes on rejected features and tradeoffs."
          ],
          "references": [
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "Google MLCC: Categorical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/categorical-data"
            },
            {
              "title": "scikit-learn ColumnTransformer",
              "url": "https://scikit-learn.org/stable/modules/compose.html#column-transformer"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluation Strategy",
          "tasks": [
            "Create acceptance criteria for model output",
            "Set human review loops",
            "Plan benchmark datasets"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Go-to-Market",
          "tasks": [
            "Develop positioning",
            "Create launch messaging",
            "Plan beta feedback loops"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Risk and Compliance",
          "tasks": [
            "Assess privacy and safety risks",
            "Write escalation policies",
            "Partner with legal and security stakeholders"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Experimentation",
          "tasks": [
            "Design A/B and holdout tests",
            "Interpret quality and business metrics together",
            "Prioritize iteration bets"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Executive Communication",
          "tasks": [
            "Prepare strategy narratives",
            "Translate model tradeoffs into business impact",
            "Practice roadmap reviews"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio Case Study",
          "tasks": [
            "Publish an AI product case study",
            "Show discovery-to-launch reasoning",
            "Prepare PM interview stories"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "AI Engineer",
      "title": "Data Analyst to AI Engineer",
      "summary": "A practical path from analytics into JavaScript apps, LLM workflows, retrieval systems, and AI application delivery.",
      "base_difficulty": 78,
      "months": [
        {
          "month": 1,
          "focus": "Software Foundations",
          "tasks": [
            "Strengthen JavaScript modules and project structure",
            "Practice Git workflows",
            "Build small tested modules"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 2,
          "focus": "APIs and Web Services",
          "tasks": [
            "Learn HTTP and REST concepts",
            "Build a browser-based CRUD workflow",
            "Add request validation with Pydantic"
          ],
          "upskilling_instructions": [
            "Build one API from scratch with typed request and response models, clear validation errors, and a small set of realistic sample requests.",
            "Practice the full request lifecycle: route design, schema validation, status codes, exception handling, logging, and basic security boundaries.",
            "Ship a working local demo with API docs, curl examples, and tests for both successful and invalid inputs."
          ],
          "references": [
            {
              "title": "MDN Web API Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "MDN HTTP Overview",
              "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            }
          ]
        },
        {
          "month": 3,
          "focus": "ML Basics",
          "tasks": [
            "Train scikit-learn models",
            "Interpret common metrics",
            "Create reproducible notebooks"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Production JavaScript",
          "tasks": [
            "Add logging and error handling",
            "Write unit tests",
            "Refactor notebooks into modules"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM Basics",
          "tasks": [
            "Create prompt templates",
            "Parse structured model outputs",
            "Evaluate answer quality manually"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings",
          "tasks": [
            "Generate embeddings for text data",
            "Build similarity search",
            "Tune chunking strategies"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 7,
          "focus": "RAG API",
          "tasks": [
            "Create document ingestion endpoints",
            "Serve grounded answers",
            "Return source citations"
          ],
          "upskilling_instructions": [
            "Build the retrieval pipeline before the chatbot: ingestion, chunking, metadata, indexing, search, reranking if needed, and citation formatting.",
            "Test grounded answers against known documents and track unsupported claims, missing citations, stale data, and bad retrieval separately.",
            "End with a RAG demo that can explain which sources were used and what the system should do when the corpus has no answer."
          ],
          "references": [
            {
              "title": "OpenAI Retrieval Guide",
              "url": "https://developers.openai.com/api/docs/guides/retrieval"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "LangChain RAG Tutorial",
              "url": "https://js.langchain.com/docs/tutorials/rag/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "System Reliability",
          "tasks": [
            "Add retries and timeouts",
            "Cache repeated requests",
            "Track errors and latency"
          ],
          "upskilling_instructions": [
            "Draw the system before coding: user flow, data flow, trust boundaries, model calls, storage, queues, retries, monitoring, and fallback behavior.",
            "Prototype the riskiest component first, then add observability so failures are visible as structured logs, metrics, traces, or review queues.",
            "Finish with an architecture note that explains tradeoffs in latency, cost, quality, reliability, and operational ownership."
          ],
          "references": [
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "MDN Web APIs",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API"
            },
            {
              "title": "OpenTelemetry JavaScript Documentation",
              "url": "https://opentelemetry.io/docs/languages/js/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Evaluation",
          "tasks": [
            "Build test prompts",
            "Create scoring rubrics",
            "Track regressions over time"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment",
          "tasks": [
            "Containerize the app",
            "Deploy a public demo",
            "Add environment-based configuration"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Security",
          "tasks": [
            "Handle user data safely",
            "Test prompt injection",
            "Add role-based access basics"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship an analytics-to-AI assistant",
            "Write implementation docs",
            "Create a portfolio walkthrough"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "ML Engineer",
      "title": "Data Analyst to ML Engineer",
      "summary": "A data-heavy path into production-grade model development, pipelines, monitoring, and deployment.",
      "base_difficulty": 72,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript Engineering",
          "tasks": [
            "Move analysis code into modules",
            "Write pytest tests",
            "Practice Git branching"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Statistics for ML",
          "tasks": [
            "Review distributions and hypothesis testing",
            "Connect statistics to model evaluation",
            "Explain uncertainty clearly"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical Models",
          "tasks": [
            "Train regression and tree models",
            "Tune hyperparameters",
            "Compare baselines"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Feature Pipelines",
          "tasks": [
            "Build reusable preprocessing",
            "Avoid leakage",
            "Version feature definitions"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Experimentation",
          "tasks": [
            "Use experiment tracking",
            "Run ablation studies",
            "Create model selection reports"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Deep Learning Basics",
          "tasks": [
            "Train simple neural networks",
            "Understand embeddings",
            "Use validation curves"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Model Packaging",
          "tasks": [
            "Serialize models safely",
            "Create inference wrappers",
            "Add schema validation"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Serving",
          "tasks": [
            "Build online prediction APIs",
            "Add batch scoring jobs",
            "Benchmark latency"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Orchestration",
          "tasks": [
            "Schedule training workflows",
            "Add data quality checks",
            "Create failure alerts"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring",
          "tasks": [
            "Track drift",
            "Monitor prediction distributions",
            "Define retraining criteria"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Responsible ML",
          "tasks": [
            "Audit error segments",
            "Create explainability reports",
            "Write model cards"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Deliver a production-style ML project",
            "Publish code and documentation",
            "Practice ML system design"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Data Analyst",
      "target_ai_role": "AI Product Manager",
      "title": "Data Analyst to AI Product Manager",
      "summary": "A path that uses analytics strengths to drive AI product discovery, prioritization, experimentation, and business outcomes.",
      "base_difficulty": 58,
      "months": [
        {
          "month": 1,
          "focus": "Product Foundations",
          "tasks": [
            "Learn product discovery basics",
            "Study AI product examples",
            "Translate metrics into user problems"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "User Research",
          "tasks": [
            "Conduct five customer interviews",
            "Synthesize themes",
            "Write opportunity briefs"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 3,
          "focus": "AI Fluency",
          "tasks": [
            "Learn LLM and ML product patterns",
            "Map model capabilities to user jobs",
            "Document AI constraints"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Metric Design",
          "tasks": [
            "Define north-star and guardrail metrics",
            "Create quality metrics for AI outputs",
            "Build a measurement plan"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "PRDs",
          "tasks": [
            "Write a concise PRD",
            "Define MVP scope",
            "Create launch criteria"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Prototyping",
          "tasks": [
            "Create a low-code AI prototype",
            "Run usability sessions",
            "Prioritize improvements"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experimentation",
          "tasks": [
            "Design A/B tests",
            "Build success dashboards",
            "Connect product usage to quality signals"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Cross-Functional Execution",
          "tasks": [
            "Run sprint planning rituals",
            "Manage tradeoff decisions",
            "Document dependencies"
          ],
          "upskilling_instructions": [
            "Spend the first week rebuilding fundamentals with short daily coding sessions, then convert one familiar work task into reusable JavaScript.",
            "By mid-month, practice reading files, transforming data, handling errors, and writing functions that can be tested without manual setup.",
            "Finish with a small repo that includes a README, sample input data, and evidence that the app logic works on more than one case."
          ],
          "references": [
            {
              "title": "JavaScript Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              "title": "NumPy Absolute Beginners Guide",
              "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
            },
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Risk",
          "tasks": [
            "Assess privacy, bias, and misuse risks",
            "Design review workflows",
            "Create policy notes"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Launch",
          "tasks": [
            "Plan beta cohorts",
            "Create enablement materials",
            "Gather launch feedback"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Strategy",
          "tasks": [
            "Create market and competitor analysis",
            "Build a 6-month roadmap",
            "Present investment rationale"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio",
          "tasks": [
            "Write a data-driven AI PM case study",
            "Show product judgment with metrics",
            "Prepare interview narratives"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "AI Engineer",
      "title": "Product Manager to AI Engineer",
      "summary": "A technical transition path emphasizing JavaScript, web APIs, ML fundamentals, and hands-on AI application construction.",
      "base_difficulty": 86,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript Fundamentals",
          "tasks": [
            "Complete daily JavaScript exercises",
            "Learn functions, classes, and modules",
            "Build a command-line utility"
          ],
          "upskilling_instructions": [
            "Spend the first week rebuilding fundamentals with short daily coding sessions, then convert one familiar work task into reusable JavaScript.",
            "By mid-month, practice reading files, transforming data, handling errors, and writing functions that can be tested without manual setup.",
            "Finish with a small repo that includes a README, sample input data, and evidence that the app logic works on more than one case."
          ],
          "references": [
            {
              "title": "JavaScript Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              "title": "NumPy Absolute Beginners Guide",
              "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
            },
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Developer Workflow",
          "tasks": [
            "Use Git and virtual environments",
            "Write tests with pytest",
            "Read and debug existing code"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Web APIs",
          "tasks": [
            "Learn HTTP and JSON",
            "Build a JavaScript web app",
            "Add validation and error handling"
          ],
          "upskilling_instructions": [
            "Build one API from scratch with typed request and response models, clear validation errors, and a small set of realistic sample requests.",
            "Practice the full request lifecycle: route design, schema validation, status codes, exception handling, logging, and basic security boundaries.",
            "Ship a working local demo with API docs, curl examples, and tests for both successful and invalid inputs."
          ],
          "references": [
            {
              "title": "MDN Web API Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "MDN HTTP Overview",
              "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Data Handling",
          "tasks": [
            "Use pandas for datasets",
            "Clean and transform text data",
            "Create reproducible scripts"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "ML Concepts",
          "tasks": [
            "Train basic models",
            "Understand evaluation metrics",
            "Explain model limitations"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "LLM Apps",
          "tasks": [
            "Build prompt-driven features",
            "Add structured output parsing",
            "Create evaluation samples"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Embeddings and Search",
          "tasks": [
            "Build semantic search",
            "Experiment with chunk sizes",
            "Measure retrieval relevance"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "RAG",
          "tasks": [
            "Create a document Q&A app",
            "Return citations",
            "Evaluate hallucination risks"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Backend Quality",
          "tasks": [
            "Add logging and monitoring",
            "Handle secrets and config",
            "Create CI checks"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Deployment",
          "tasks": [
            "Containerize the service",
            "Deploy a live demo",
            "Measure latency and cost"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Safety",
          "tasks": [
            "Test prompt injection",
            "Add content safeguards",
            "Document data boundaries"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship a polished AI app",
            "Publish architecture notes",
            "Practice engineering interviews"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "ML Engineer",
      "title": "Product Manager to ML Engineer",
      "summary": "A demanding path from product work into model development, software engineering, data pipelines, and MLOps.",
      "base_difficulty": 90,
      "months": [
        {
          "month": 1,
          "focus": "Programming Basics",
          "tasks": [
            "Practice JavaScript daily",
            "Understand data structures",
            "Build small scripts"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Software Practices",
          "tasks": [
            "Use Git",
            "Write tests",
            "Refactor code into modules"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Math Foundations",
          "tasks": [
            "Study linear algebra basics",
            "Review probability",
            "Connect math to model behavior"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Data Science Basics",
          "tasks": [
            "Use pandas and visualization libraries",
            "Clean datasets",
            "Create train-test splits"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Classical ML",
          "tasks": [
            "Train baseline models",
            "Tune hyperparameters",
            "Analyze errors"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Feature Engineering",
          "tasks": [
            "Create preprocessing pipelines",
            "Prevent leakage",
            "Version datasets"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Deep Learning",
          "tasks": [
            "Learn neural network basics",
            "Train PyTorch models",
            "Experiment with embeddings"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Serving",
          "tasks": [
            "Build prediction APIs",
            "Package models",
            "Benchmark inference"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Pipelines",
          "tasks": [
            "Create scheduled training jobs",
            "Add data validation",
            "Automate reports"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "MLOps",
          "tasks": [
            "Track experiments",
            "Create CI for ML code",
            "Define model promotion gates"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Monitoring",
          "tasks": [
            "Track drift and performance",
            "Set retraining triggers",
            "Write model cards"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio",
          "tasks": [
            "Ship an end-to-end ML system",
            "Document tradeoffs",
            "Prepare system design stories"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Product Manager",
      "target_ai_role": "AI Product Manager",
      "title": "Product Manager to AI Product Manager",
      "summary": "A focused PM upskilling path for AI-native strategy, model evaluation, responsible launch, and AI product growth.",
      "base_difficulty": 48,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Models",
          "tasks": [
            "Study LLM, RAG, fine-tuning, and agents",
            "Map capabilities to product use cases",
            "Create an AI vocabulary brief"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Use Case Selection",
          "tasks": [
            "Identify high-friction workflows",
            "Prioritize AI opportunities",
            "Define feasibility and value criteria"
          ],
          "upskilling_instructions": [
            "Spend the first week rebuilding fundamentals with short daily coding sessions, then convert one familiar work task into reusable JavaScript.",
            "By mid-month, practice reading files, transforming data, handling errors, and writing functions that can be tested without manual setup.",
            "Finish with a small repo that includes a README, sample input data, and evidence that the app logic works on more than one case."
          ],
          "references": [
            {
              "title": "JavaScript Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              "title": "NumPy Absolute Beginners Guide",
              "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
            },
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Discovery",
          "tasks": [
            "Run targeted interviews",
            "Validate willingness to use AI assistance",
            "Capture trust concerns"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 4,
          "focus": "PRD for AI",
          "tasks": [
            "Write AI-specific specs",
            "Define human review states",
            "Set output quality thresholds"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Evaluation",
          "tasks": [
            "Create evaluation datasets",
            "Define rubrics",
            "Review model outputs with SMEs"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Prototype",
          "tasks": [
            "Build or coordinate an AI prototype",
            "Run usability tests",
            "Track failure modes"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Safety and Privacy",
          "tasks": [
            "Define data boundaries",
            "Plan abuse prevention",
            "Create escalation paths"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Experiment Design",
          "tasks": [
            "Define rollout metrics",
            "Plan A/B tests",
            "Create quality guardrails"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Launch Planning",
          "tasks": [
            "Plan beta launch",
            "Write enablement materials",
            "Prepare support workflows"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Growth",
          "tasks": [
            "Analyze adoption funnels",
            "Improve onboarding",
            "Prioritize retention bets"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Strategy",
          "tasks": [
            "Create AI product vision",
            "Map competitive differentiation",
            "Present roadmap tradeoffs"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Leadership Portfolio",
          "tasks": [
            "Publish an AI PM case study",
            "Show measurable outcomes",
            "Prepare executive interview stories"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "AI Engineer",
      "title": "UX Designer to AI Engineer",
      "summary": "A hands-on technical path that turns UX intuition into AI prototyping, full-stack implementation, and production-minded AI systems.",
      "base_difficulty": 88,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript Basics",
          "tasks": [
            "Practice JavaScript syntax daily",
            "Build small automation scripts",
            "Learn debugging basics"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Web Foundations",
          "tasks": [
            "Learn HTTP and APIs",
            "Build a JavaScript app interface",
            "Connect forms to endpoints"
          ],
          "upskilling_instructions": [
            "Build one API from scratch with typed request and response models, clear validation errors, and a small set of realistic sample requests.",
            "Practice the full request lifecycle: route design, schema validation, status codes, exception handling, logging, and basic security boundaries.",
            "Ship a working local demo with API docs, curl examples, and tests for both successful and invalid inputs."
          ],
          "references": [
            {
              "title": "MDN Web API Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "MDN HTTP Overview",
              "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Data Skills",
          "tasks": [
            "Use pandas for structured data",
            "Clean text datasets",
            "Create simple charts"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "ML Foundations",
          "tasks": [
            "Train simple models",
            "Understand evaluation metrics",
            "Document error cases"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM Prototyping",
          "tasks": [
            "Create prompt workflows",
            "Design structured outputs",
            "Test UX of AI uncertainty"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings",
          "tasks": [
            "Build semantic search",
            "Compare query results",
            "Design relevance feedback loops"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 7,
          "focus": "RAG Product",
          "tasks": [
            "Create document Q&A",
            "Show citations in UI",
            "Evaluate answer trust"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Engineering Quality",
          "tasks": [
            "Add tests",
            "Handle errors gracefully",
            "Create logging"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Deployment",
          "tasks": [
            "Deploy a working app",
            "Use environment variables",
            "Monitor latency"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Agents",
          "tasks": [
            "Build a tool-using assistant",
            "Design confirmation flows",
            "Measure completion quality"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Safety UX",
          "tasks": [
            "Design trust and review states",
            "Test misuse scenarios",
            "Document guardrails"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship an AI UX prototype as real software",
            "Publish code and design notes",
            "Prepare portfolio storytelling"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "ML Engineer",
      "title": "UX Designer to ML Engineer",
      "summary": "A deep technical transition into programming, data, modeling, serving, and MLOps with portfolio-ready proof points.",
      "base_difficulty": 94,
      "months": [
        {
          "month": 1,
          "focus": "Programming Foundations",
          "tasks": [
            "Learn JavaScript fundamentals",
            "Build scripts from UX workflow needs",
            "Practice problem solving"
          ],
          "upskilling_instructions": [
            "Design for trust by making AI state visible: confidence, sources, editability, review steps, user control, and graceful failure states.",
            "Prototype the core interaction and test it with users before optimizing visuals; listen for confusion, over-trust, and unmet expectations.",
            "Deliver interaction notes that specify empty states, loading states, error states, feedback capture, and safety copy."
          ],
          "references": [
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            },
            {
              "title": "Nielsen Norman Group AI Articles",
              "url": "https://www.nngroup.com/articles/ai-paradigm/"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Software Workflow",
          "tasks": [
            "Use Git and GitHub",
            "Write basic tests",
            "Organize projects cleanly"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Math for ML",
          "tasks": [
            "Study vectors and matrices",
            "Review probability",
            "Connect math concepts to model examples"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Data Handling",
          "tasks": [
            "Use pandas",
            "Clean datasets",
            "Visualize distributions"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Classical ML",
          "tasks": [
            "Train baseline models",
            "Evaluate metrics",
            "Analyze errors by segment"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Feature Engineering",
          "tasks": [
            "Build preprocessing pipelines",
            "Encode categorical features",
            "Prevent leakage"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Deep Learning",
          "tasks": [
            "Train neural networks",
            "Learn embeddings",
            "Experiment with transfer learning"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Serving Models",
          "tasks": [
            "Create inference APIs",
            "Validate inputs",
            "Benchmark response times"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Training Pipelines",
          "tasks": [
            "Automate training runs",
            "Track experiments",
            "Version models"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "MLOps",
          "tasks": [
            "Create CI checks",
            "Package models",
            "Define promotion criteria"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Monitoring and Ethics",
          "tasks": [
            "Track drift",
            "Audit error slices",
            "Write model cards"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship an ML system with a usable interface",
            "Document technical decisions",
            "Prepare ML interview practice"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "UX Designer",
      "target_ai_role": "AI Product Manager",
      "title": "UX Designer to AI Product Manager",
      "summary": "A design-led AI PM path focused on discovery, trust, prototyping, evaluation, and product strategy.",
      "base_difficulty": 56,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Literacy",
          "tasks": [
            "Study LLM and ML product patterns",
            "Analyze AI interaction models",
            "Build an AI product teardown"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Problem Discovery",
          "tasks": [
            "Run user interviews",
            "Map AI-suitable pain points",
            "Prioritize by value and risk"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Technical Fluency",
          "tasks": [
            "Learn RAG, agents, and evaluation basics",
            "Create build-vs-buy notes",
            "Document model limitations"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "AI UX Patterns",
          "tasks": [
            "Design uncertainty and review states",
            "Prototype feedback loops",
            "Test trust signals"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 5,
          "focus": "PRD Writing",
          "tasks": [
            "Write product specs",
            "Define output quality criteria",
            "Set MVP scope"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluation",
          "tasks": [
            "Create rubric-based evaluations",
            "Plan human review",
            "Track failures by category"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Prototype Testing",
          "tasks": [
            "Build a realistic prototype",
            "Run usability tests",
            "Translate findings into roadmap changes"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Metrics",
          "tasks": [
            "Define adoption and quality metrics",
            "Design guardrails",
            "Create dashboard sketches"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Launch Readiness",
          "tasks": [
            "Plan beta release",
            "Create onboarding materials",
            "Coordinate support feedback"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Risk Management",
          "tasks": [
            "Assess privacy and misuse risks",
            "Design escalation workflows",
            "Partner with legal and security"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Strategy",
          "tasks": [
            "Create a product vision",
            "Analyze competitors",
            "Prioritize roadmap bets"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio",
          "tasks": [
            "Publish an AI PM case study",
            "Show research-to-roadmap impact",
            "Practice PM interviews"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Engineer",
      "title": "Default Path to AI Engineer",
      "summary": "A general fallback path for building AI application engineering skill from any starting point.",
      "base_difficulty": 82,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript and Git",
          "tasks": [
            "Practice JavaScript fundamentals",
            "Use Git confidently",
            "Build small automation scripts"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 2,
          "focus": "APIs",
          "tasks": [
            "Learn HTTP",
            "Build JavaScript interaction handlers",
            "Validate requests and responses"
          ],
          "upskilling_instructions": [
            "Build one API from scratch with typed request and response models, clear validation errors, and a small set of realistic sample requests.",
            "Practice the full request lifecycle: route design, schema validation, status codes, exception handling, logging, and basic security boundaries.",
            "Ship a working local demo with API docs, curl examples, and tests for both successful and invalid inputs."
          ],
          "references": [
            {
              "title": "MDN Web API Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/latest/"
            },
            {
              "title": "MDN HTTP Overview",
              "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Data Basics",
          "tasks": [
            "Use pandas",
            "Clean datasets",
            "Create repeatable scripts"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "ML Basics",
          "tasks": [
            "Train baseline models",
            "Understand metrics",
            "Document model limits"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM Apps",
          "tasks": [
            "Use prompt templates",
            "Parse structured outputs",
            "Evaluate responses"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Embeddings",
          "tasks": [
            "Build semantic search",
            "Tune chunking",
            "Measure relevance"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 7,
          "focus": "RAG",
          "tasks": [
            "Create document Q&A",
            "Add citations",
            "Test answer quality"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Reliability",
          "tasks": [
            "Add logging",
            "Handle failures",
            "Use retries and timeouts"
          ],
          "upskilling_instructions": [
            "Draw the system before coding: user flow, data flow, trust boundaries, model calls, storage, queues, retries, monitoring, and fallback behavior.",
            "Prototype the riskiest component first, then add observability so failures are visible as structured logs, metrics, traces, or review queues.",
            "Finish with an architecture note that explains tradeoffs in latency, cost, quality, reliability, and operational ownership."
          ],
          "references": [
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "MDN Web APIs",
              "url": "https://developer.mozilla.org/en-US/docs/Web/API"
            },
            {
              "title": "OpenTelemetry JavaScript Documentation",
              "url": "https://opentelemetry.io/docs/languages/js/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Deployment",
          "tasks": [
            "Containerize the app",
            "Deploy a demo",
            "Track latency and cost"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Agents",
          "tasks": [
            "Build tool workflows",
            "Add confirmations",
            "Evaluate completion"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Safety",
          "tasks": [
            "Test prompt injection",
            "Protect sensitive data",
            "Document guardrails"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship a polished AI app",
            "Write architecture notes",
            "Prepare interview stories"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "ML Engineer",
      "title": "Default Path to ML Engineer",
      "summary": "A general fallback path for learning model development, production ML, and MLOps from any starting point.",
      "base_difficulty": 88,
      "months": [
        {
          "month": 1,
          "focus": "JavaScript",
          "tasks": [
            "Practice JavaScript daily",
            "Learn modules and tests",
            "Build data scripts"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Math",
          "tasks": [
            "Review linear algebra",
            "Study probability",
            "Apply math to model examples"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Data",
          "tasks": [
            "Clean datasets",
            "Visualize distributions",
            "Create train-test splits"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Classical ML",
          "tasks": [
            "Train baseline models",
            "Tune hyperparameters",
            "Analyze errors"
          ],
          "upskilling_instructions": [
            "Start with a simple baseline model, then improve only after you can explain the target, features, split strategy, and evaluation metric.",
            "Run at least three model comparisons and record what changed, why it changed, and whether it improved generalization or only training performance.",
            "Close the month with an error analysis: inspect false positives, false negatives, weak segments, and the next data or feature bet."
          ],
          "references": [
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            },
            {
              "title": "scikit-learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Features",
          "tasks": [
            "Build preprocessing pipelines",
            "Avoid leakage",
            "Version transformations"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Deep Learning",
          "tasks": [
            "Train neural networks",
            "Use embeddings",
            "Tune training loops"
          ],
          "upskilling_instructions": [
            "Create a small corpus, generate embeddings, and manually inspect nearest-neighbor results to build intuition for semantic similarity.",
            "Experiment with chunk size, metadata, filtering, and similarity thresholds; record where retrieval improves and where it becomes noisy.",
            "Deliver a searchable prototype with evaluation queries, expected matches, and notes on cost, refresh cadence, and privacy boundaries."
          ],
          "references": [
            {
              "title": "OpenAI Embeddings API Reference",
              "url": "https://developers.openai.com/api/reference/resources/embeddings"
            },
            {
              "title": "OpenAI Embeddings FAQ",
              "url": "https://openai.com/index/introducing-text-and-code-embeddings/"
            },
            {
              "title": "Google MLCC: Embeddings",
              "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Experiment Tracking",
          "tasks": [
            "Log metrics",
            "Compare runs",
            "Create reports"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Serving",
          "tasks": [
            "Build inference APIs",
            "Package models",
            "Benchmark latency"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Pipelines",
          "tasks": [
            "Schedule training",
            "Validate data",
            "Automate model artifacts"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "MLOps",
          "tasks": [
            "Create CI checks",
            "Define promotion gates",
            "Deploy models"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Monitoring",
          "tasks": [
            "Track drift",
            "Audit performance",
            "Create model cards"
          ],
          "upskilling_instructions": [
            "Turn experiments into auditable runs by logging data versions, parameters, metrics, artifacts, environment details, and model lineage.",
            "Define promotion gates before training: minimum quality, fairness checks, latency budget, monitoring hooks, and rollback criteria.",
            "End with a repeatable train-package-serve workflow and a short runbook for retraining, review, approval, and model retirement."
          ],
          "references": [
            {
              "title": "MLflow Tracking Quickstart",
              "url": "https://mlflow.org/docs/latest/ml/tracking/quickstart/"
            },
            {
              "title": "Google MLCC: Production ML Systems",
              "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
            },
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship an end-to-end ML system",
            "Document architecture",
            "Prepare interviews"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Product Manager",
      "title": "Default Path to AI Product Manager",
      "summary": "A general fallback path for AI product discovery, delivery, evaluation, and launch leadership.",
      "base_difficulty": 64,
      "months": [
        {
          "month": 1,
          "focus": "AI Product Literacy",
          "tasks": [
            "Study AI product categories",
            "Learn LLM basics",
            "Analyze product examples"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Discovery",
          "tasks": [
            "Run user interviews",
            "Map problems",
            "Prioritize opportunities"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Technical Fluency",
          "tasks": [
            "Learn RAG and agents",
            "Understand evaluation",
            "Document model tradeoffs"
          ],
          "upskilling_instructions": [
            "Start with one tool and one narrow task; define exactly when the model may call the tool, what arguments are allowed, and what requires confirmation.",
            "Test agent behavior with success cases, ambiguous requests, malicious instructions, missing data, and tool failures.",
            "Ship a constrained workflow with audit logs, permission checks, tool output validation, and a human handoff path."
          ],
          "references": [
            {
              "title": "OpenAI Function Calling Help",
              "url": "https://openai.com/index/function-calling-and-other-api-updates/"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://developers.openai.com/api/docs/guides/tools-file-search"
            },
            {
              "title": "OWASP LLM Top 10",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "PRDs",
          "tasks": [
            "Write specs",
            "Define MVP",
            "Set launch gates"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Metrics",
          "tasks": [
            "Define success metrics",
            "Add quality measures",
            "Create dashboard plans"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Prototype",
          "tasks": [
            "Build or guide a prototype",
            "Run usability tests",
            "Capture failure modes"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Evaluation",
          "tasks": [
            "Create rubrics",
            "Review outputs",
            "Set human review loops"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Risk",
          "tasks": [
            "Assess privacy",
            "Plan misuse prevention",
            "Write escalation paths"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Launch",
          "tasks": [
            "Plan beta release",
            "Create messaging",
            "Gather feedback"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Experimentation",
          "tasks": [
            "Design A/B tests",
            "Interpret results",
            "Prioritize iterations"
          ],
          "upskilling_instructions": [
            "Treat this month as engineering hygiene: isolate environments, use Git intentionally, and keep every exercise reproducible from a clean checkout.",
            "Write small tests before changing behavior, then refactor code into modules so future AI or ML work can be maintained outside notebooks.",
            "End with a checklist covering setup, tests, linting, debugging notes, and the decisions you made while organizing the project."
          ],
          "references": [
            {
              "title": "JavaScript Modules",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
            },
            {
              "title": "pytest Get Started",
              "url": "https://docs.pytest.org/en/stable/getting-started.html"
            },
            {
              "title": "Pro Git Book",
              "url": "https://git-scm.com/book/en/v2"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Strategy",
          "tasks": [
            "Create product vision",
            "Analyze market",
            "Present roadmap"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Portfolio",
          "tasks": [
            "Publish an AI PM case study",
            "Show measurable impact",
            "Prepare interviews"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Generalist",
      "title": "General AI Career Roadmap",
      "summary": "A broad default roadmap when no close role match exists.",
      "base_difficulty": 70,
      "months": [
        {
          "month": 1,
          "focus": "AI Landscape",
          "tasks": [
            "Learn core AI terminology",
            "Study common AI roles",
            "Pick a working direction"
          ],
          "upskilling_instructions": [
            "Spend the first week rebuilding fundamentals with short daily coding sessions, then convert one familiar work task into reusable JavaScript.",
            "By mid-month, practice reading files, transforming data, handling errors, and writing functions that can be tested without manual setup.",
            "Finish with a small repo that includes a README, sample input data, and evidence that the app logic works on more than one case."
          ],
          "references": [
            {
              "title": "JavaScript Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              "title": "NumPy Absolute Beginners Guide",
              "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
            },
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "JavaScript Basics",
          "tasks": [
            "Practice JavaScript",
            "Use notebooks",
            "Automate a small task"
          ],
          "upskilling_instructions": [
            "Spend the first week rebuilding fundamentals with short daily coding sessions, then convert one familiar work task into reusable JavaScript.",
            "By mid-month, practice reading files, transforming data, handling errors, and writing functions that can be tested without manual setup.",
            "Finish with a small repo that includes a README, sample input data, and evidence that the app logic works on more than one case."
          ],
          "references": [
            {
              "title": "JavaScript Guide",
              "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              "title": "NumPy Absolute Beginners Guide",
              "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
            },
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Data Skills",
          "tasks": [
            "Clean data",
            "Create visual summaries",
            "Explain insights"
          ],
          "upskilling_instructions": [
            "Use a messy dataset and document every cleaning decision, including missing values, outliers, leakage risks, and assumptions about the source.",
            "Create repeatable transforms instead of one-off notebook cells, then compare raw and processed data with summary statistics and visual checks.",
            "Finish with a data quality report that names what is trustworthy, what is questionable, and what must be collected before modeling."
          ],
          "references": [
            {
              "title": "pandas Getting Started",
              "url": "https://pandas.pydata.org/docs/getting_started/index.html"
            },
            {
              "title": "Google MLCC: Numerical Data",
              "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
            },
            {
              "title": "scikit-learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "ML Fundamentals",
          "tasks": [
            "Train simple models",
            "Compare metrics",
            "Document limitations"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM Basics",
          "tasks": [
            "Write effective prompts",
            "Test structured outputs",
            "Study failure modes"
          ],
          "upskilling_instructions": [
            "Build prompts as versioned artifacts: state the task, audience, context, constraints, examples, output schema, and refusal boundaries.",
            "Compare prompt variants against the same test set, then measure correctness, format adherence, latency, and failure modes instead of relying on vibes.",
            "Finish with a small LLM feature that validates structured output and gives users a graceful path when the answer is uncertain."
          ],
          "references": [
            {
              "title": "OpenAI Prompt Engineering Best Practices",
              "url": "https://openai.com/academy/prompting/"
            },
            {
              "title": "OpenAI Text Generation Guide",
              "url": "https://developers.openai.com/api/docs/guides/text"
            },
            {
              "title": "Google MLCC: Large Language Models",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
            }
          ]
        },
        {
          "month": 6,
          "focus": "AI Prototyping",
          "tasks": [
            "Build a small AI workflow",
            "Collect user feedback",
            "Improve the prototype"
          ],
          "upskilling_instructions": [
            "Anchor the month in discovery: define the user, job-to-be-done, current workaround, measurable pain, and why AI is necessary.",
            "Convert research into product bets with clear assumptions, MVP scope, success metrics, quality guardrails, and launch risks.",
            "End with a short PRD or case study that connects customer evidence, technical feasibility, business value, and responsible AI considerations."
          ],
          "references": [
            {
              "title": "Atlassian Product Discovery",
              "url": "https://www.atlassian.com/agile/product-management/discovery"
            },
            {
              "title": "Atlassian Customer Interview Play",
              "url": "https://www.atlassian.com/team-playbook/plays/customer-interview"
            },
            {
              "title": "Google People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Retrieval",
          "tasks": [
            "Use embeddings",
            "Build search",
            "Add citations"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Evaluation",
          "tasks": [
            "Create test cases",
            "Score outputs",
            "Track regressions"
          ],
          "upskilling_instructions": [
            "Create a small but representative evaluation set with ideal answers, unacceptable answers, edge cases, and realistic user phrasing.",
            "Score quality with multiple signals: task success, factuality, retrieval relevance, format validity, latency, cost, and human review notes.",
            "Make the eval repeatable so future prompt, model, data, or pipeline changes can be compared against the same baseline."
          ],
          "references": [
            {
              "title": "OpenAI Evals Guide",
              "url": "https://developers.openai.com/api/docs/guides/evals"
            },
            {
              "title": "Google ML Testing and Debugging",
              "url": "https://developers.google.com/machine-learning/testing-debugging/"
            },
            {
              "title": "scikit-learn Model Evaluation",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Deployment Basics",
          "tasks": [
            "Package an app",
            "Deploy a demo",
            "Monitor usage"
          ],
          "upskilling_instructions": [
            "Package the app so another person can run it without hidden local assumptions: environment variables, dependency pins, and clear startup commands.",
            "Add production-minded basics: health checks, logging, secret handling, timeouts, resource limits, and rollback notes.",
            "Deploy or simulate deployment, then measure startup time, request latency, error behavior, and the steps needed to debug an incident."
          ],
          "references": [
            {
              "title": "Docker Get Started",
              "url": "https://docs.docker.com/get-started/"
            },
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://docs.github.com/en/pages"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Responsible AI",
          "tasks": [
            "Study privacy and bias",
            "Add safeguards",
            "Document risks"
          ],
          "upskilling_instructions": [
            "Threat-model the AI workflow from user input to model output, including prompt injection, sensitive data exposure, unsafe actions, and over-trust.",
            "Add practical controls: input boundaries, output validation, least-privilege tools, red-team prompts, monitoring, and escalation procedures.",
            "Finish with a risk register that names severity, likelihood, mitigations, owners, and what must be revisited before launch."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLM Applications",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI",
              "url": "https://support.microsoft.com/en-us/topic/what-is-responsible-ai-33fc14be-15ea-4c2c-903b-aa493f5b8d92"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Career Positioning",
          "tasks": [
            "Choose target roles",
            "Tailor your portfolio",
            "Network with practitioners"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone",
          "tasks": [
            "Ship a complete AI project",
            "Write a case study",
            "Prepare interview examples"
          ],
          "upskilling_instructions": [
            "Package the work as evidence: problem, constraints, approach, architecture, results, failures, tradeoffs, and what you would improve next.",
            "Polish the repo or case study so a hiring manager can understand the value in five minutes and inspect the technical depth afterward.",
            "Prepare three interview stories using the same project: technical implementation, product judgment, and learning from failure."
          ],
          "references": [
            {
              "title": "GitHub Pages Documentation",
              "url": "https://docs.github.com/en/pages"
            },
            {
              "title": "GitHub README Guide",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            },
            {
              "title": "Google Technical Writing Courses",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    }
  ]
}
;


