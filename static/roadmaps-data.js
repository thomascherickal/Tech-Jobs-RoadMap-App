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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://github.com/openai/evals"
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
              "title": "LangChain: RAG Tutorial",
              "url": "https://python.langchain.com/docs/tutorials/rag/"
            },
            {
              "title": "LlamaIndex: Starter Tutorial",
              "url": "https://docs.llamaindex.ai/en/stable/getting_started/starter_example/"
            },
            {
              "title": "Pinecone: RAG Handbook",
              "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Mathematics for ML Book",
              "url": "https://mml-book.github.io/"
            },
            {
              "title": "Kaggle Learn: Python",
              "url": "https://www.kaggle.com/learn/python"
            },
            {
              "title": "Google MLCC: ML Prereqs",
              "url": "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://github.com/openai/evals"
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
              "title": "Hugging Face NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "OWASP Top 10 LLM Apps",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
            },
            {
              "title": "OpenAI File Search Guide",
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Mathematics for ML Book",
              "url": "https://mml-book.github.io/"
            },
            {
              "title": "Kaggle Learn: Python",
              "url": "https://www.kaggle.com/learn/python"
            },
            {
              "title": "Google MLCC: ML Prereqs",
              "url": "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "title": "Google: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            },
            {
              "title": "NN/g: UX for AI Research",
              "url": "https://www.nngroup.com/articles/ai-ux/"
            },
            {
              "title": "UX Collective: Designing AI",
              "url": "https://uxdesign.cc/"
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
              "title": "Hugging Face NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "OWASP Top 10 LLM Apps",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "Hugging Face: NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "Google MLCC: LLMs",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
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
              "title": "Pinecone: Vector Embeddings Guide",
              "url": "https://www.pinecone.io/learn/vector-embeddings/"
            },
            {
              "title": "Hugging Face: Embeddings Hub",
              "url": "https://huggingface.co/blog/getting-started-with-embeddings"
            },
            {
              "title": "OpenAI: Embeddings API Guide",
              "url": "https://platform.openai.com/docs/guides/embeddings"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://github.com/openai/evals"
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
              "title": "Google: People + AI Guidebook",
              "url": "https://pair.withgoogle.com/guidebook/"
            },
            {
              "title": "NN/g: UX for AI Research",
              "url": "https://www.nngroup.com/articles/ai-ux/"
            },
            {
              "title": "UX Collective: Designing AI",
              "url": "https://uxdesign.cc/"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "title": "Mathematics for ML Book",
              "url": "https://mml-book.github.io/"
            },
            {
              "title": "Kaggle Learn: Python",
              "url": "https://www.kaggle.com/learn/python"
            },
            {
              "title": "Google MLCC: ML Prereqs",
              "url": "https://developers.google.com/machine-learning/crash-course/prereqs-and-prework"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "title": "Hugging Face NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "OWASP Top 10 LLM Apps",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://github.com/openai/evals"
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
              "title": "Hugging Face NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "OWASP Top 10 LLM Apps",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "StatQuest ML basics",
              "url": "https://youtube.com/@statquest"
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
              "title": "OpenAI: Prompt Engineering",
              "url": "https://platform.openai.com/docs/guides/prompt-engineering"
            },
            {
              "title": "Hugging Face: NLP Course",
              "url": "https://huggingface.co/learn/nlp-course"
            },
            {
              "title": "Google MLCC: LLMs",
              "url": "https://developers.google.com/machine-learning/crash-course/llm"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "title": "LangChain: RAG Tutorial",
              "url": "https://python.langchain.com/docs/tutorials/rag/"
            },
            {
              "title": "LlamaIndex: Starter Tutorial",
              "url": "https://docs.llamaindex.ai/en/stable/getting_started/starter_example/"
            },
            {
              "title": "Pinecone: RAG Handbook",
              "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/api-reference/embeddings"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://platform.openai.com/docs/guides/assistants/tools/file-search"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://www.uvicorn.org/"
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
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
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
              "url": "https://platform.openai.com/docs/guides/text-generation"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://github.com/openai/evals"
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
              "url": "https://www.uvicorn.org/"
            },
            {
              "title": "Uvicorn Deployment",
              "url": "https://www.uvicorn.org/"
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
              "url": "https://www.uvicorn.org/"
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
              "url": "https://www.uvicorn.org/"
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
      "current_role": "Data Engineer",
      "target_ai_role": "AI Generalist",
      "title": "Data Engineer to AI Generalist",
      "summary": "Learn how to build feature stores, orchestrate clean data pipelines for machine learning models, and serve AI applications at scale.",
      "base_difficulty": 65,
      "months": [
        {
          "month": 1,
          "focus": "Python for AI Data Pipelines",
          "tasks": [
            "Set up standard virtual environments and dependencies",
            "Practice advanced Pandas, NumPy and Polars for fast transformations",
            "Build a pipeline script that ingests, cleans, and structures raw text data"
          ],
          "upskilling_instructions": [
            "Configure poetry or pipenv for reproducible pipelines.",
            "Write clean, vectorized operations instead of slow for-loops.",
            "Implement robust unit testing for raw data cleaning functions."
          ],
          "references": [
            {
              "title": "Polars Documentation",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Pandas Vectorization",
              "url": "https://pandas.pydata.org/docs/user_guide/enhancingperf.html"
            },
            {
              "title": "PyTest Quickstart",
              "url": "https://docs.pytest.org/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "EDA and Feature Engineering",
          "tasks": [
            "Conduct Exploratory Data Analysis (EDA) on a tabular dataset",
            "Implement feature scaling, encoding, and imputation transformations",
            "Build a automated feature validation script"
          ],
          "upskilling_instructions": [
            "Use Scikit-Learn pipelines to group imputation and scaling into one step.",
            "Establish dataset sanity checks: check null counts, data types, and value distributions.",
            "Document data leakage vectors and write checks to prevent them."
          ],
          "references": [
            {
              "title": "Scikit-Learn Pipelines",
              "url": "https://scikit-learn.org/stable/modules/compose.html"
            },
            {
              "title": "Kaggle Feature Engineering Course",
              "url": "https://www.kaggle.com/learn/feature-engineering"
            },
            {
              "title": "Data Leakage Guide",
              "url": "https://scikit-learn.org/stable/common_obstacles.html#data-leakage"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Classical ML for Data Pipelines",
          "tasks": [
            "Train baseline classification and regression models using Scikit-Learn",
            "Implement cross-validation and hyperparameter tuning in a pipeline",
            "Deploy a model locally and verify its predictions on new records"
          ],
          "upskilling_instructions": [
            "Utilize GridSearchCV or RandomizedSearchCV to find optimal hyper-parameters.",
            "Use cross-validation fold splits rather than a simple single test split.",
            "Expose predictions through a lightweight CLI tool."
          ],
          "references": [
            {
              "title": "Scikit-Learn Cross-Validation",
              "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
            },
            {
              "title": "Tuning Hyperparameters",
              "url": "https://scikit-learn.org/stable/modules/grid_search.html"
            },
            {
              "title": "Scikit-Learn Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning & Tensors",
          "tasks": [
            "Understand multi-dimensional arrays, tensors, and gradient descent",
            "Train a basic PyTorch multi-layer perceptron on tabular data",
            "Graph training and validation loss curves to identify overfitting"
          ],
          "upskilling_instructions": [
            "Learn tensor operations: reshaping, transposing, and matrix multiplications.",
            "Build custom PyTorch Dataset and DataLoader instances for structured data.",
            "Apply dropout and L2 regularization to correct overfitting curves."
          ],
          "references": [
            {
              "title": "PyTorch Learn the Basics",
              "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html"
            },
            {
              "title": "PyTorch Datasets & DataLoaders",
              "url": "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html"
            },
            {
              "title": "Google MLCC: Neural Networks",
              "url": "https://developers.google.com/machine-learning/crash-course/neural-networks"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLMs and Prompt Data Workflows",
          "tasks": [
            "Interact with commercial or open-weight models via API calls",
            "Build structured prompt templates and implement JSON schema validation",
            "Design a pipeline that processes thousands of rows via async API calls"
          ],
          "upskilling_instructions": [
            "Specify strict JSON schemas inside model parameters or prompt templates.",
            "Add exponential backoff retries to manage rate limits and network errors.",
            "Implement concurrency controls to avoid overloading API quotas."
          ],
          "references": [
            {
              "title": "OpenAI Structured Outputs",
              "url": "https://openai.com/index/introducing-structured-outputs-in-the-api/"
            },
            {
              "title": "Asyncio in Python Guide",
              "url": "https://docs.python.org/3/library/asyncio.html"
            },
            {
              "title": "Tenacity Retrying Library",
              "url": "https://tenacity.readthedocs.io/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Semantic Indexing & Vector Search",
          "tasks": [
            "Generate document embeddings using local sentence-transformers models",
            "Set up a local instance of a vector database (Chroma, Qdrant, or PGVector)",
            "Perform semantic similarity queries and compare performance to keywords"
          ],
          "upskilling_instructions": [
            "Choose an appropriate embedding model from the MTEB leaderboard.",
            "Install and configure ChromaDB or Qdrant inside a local Docker container.",
            "Compare cosine similarity, L2 distance, and dot product search metrics."
          ],
          "references": [
            {
              "title": "Sentence Transformers on HF",
              "url": "https://huggingface.co/sentence-transformers"
            },
            {
              "title": "Qdrant Quickstart",
              "url": "https://qdrant.tech/documentation/quickstart/"
            },
            {
              "title": "Pinecone Embedding Guide",
              "url": "https://www.pinecone.io/learn/vector-embeddings/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "RAG Data Pipelines & ETL",
          "tasks": [
            "Build a document parsing pipeline using PyPDF, Markdown, or HTML parsers",
            "Implement recursive and semantic text chunking strategies",
            "Create an incremental vector ETL pipeline that only indexes modified files"
          ],
          "upskilling_instructions": [
            "Analyze chunk sizes (250 vs 500 vs 1000 tokens) on retrieval relevance.",
            "Add overlapping windows to prevent semantic truncation at chunk boundaries.",
            "Write hash-based delta checkers to track changed files and prevent redundant embeddings."
          ],
          "references": [
            {
              "title": "LlamaIndex Data Connectors",
              "url": "https://docs.llamaindex.ai/en/stable/module_guides/loading/connector/"
            },
            {
              "title": "LangChain Text Splitters",
              "url": "https://python.langchain.com/docs/how_to/#text-splitters"
            },
            {
              "title": "Pinecone Chunking Strategies",
              "url": "https://www.pinecone.io/learn/chunking-strategies/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Model Evaluation & Drift Data",
          "tasks": [
            "Create a golden test suite of 100 question-answer-context evaluation pairs",
            "Score RAG pipelines on faithfulness, answer relevance, and context precision",
            "Evaluate inference latency and token usage budgets"
          ],
          "upskilling_instructions": [
            "Set up Ragas or TruLens evaluation libraries in your project.",
            "Configure LLM-as-a-judge patterns to score answer quality automatically.",
            "Compute cost per 1k tokens and document budget thresholds."
          ],
          "references": [
            {
              "title": "Ragas Documentation",
              "url": "https://docs.ragas.io/"
            },
            {
              "title": "TruLens Evaluation Guide",
              "url": "https://www.trulens.org/"
            },
            {
              "title": "OpenAI Evals",
              "url": "https://github.com/openai/evals"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Feature Stores & Pipelines",
          "tasks": [
            "Install Feast or Hopsworks locally and write an feature definition file",
            "Build a batch feature ingestion pipeline that writes to an offline store",
            "Simulate real-time serving by pulling feature vectors with low latency"
          ],
          "upskilling_instructions": [
            "Define entities, features, and sources inside a Feast repository.",
            "Connect parquet files as the offline historical feature source.",
            "Configure Redis or SQLite as the online low-latency feature provider."
          ],
          "references": [
            {
              "title": "Feast Quickstart Guide",
              "url": "https://docs.feast.dev/getting-started/quickstart"
            },
            {
              "title": "Hopsworks Academy",
              "url": "https://www.hopsworks.ai/"
            },
            {
              "title": "Feature Stores for ML",
              "url": "https://www.featurestore.org/"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Model Hosting & Serving",
          "tasks": [
            "Build a model inference microservice using FastAPI",
            "Add input request validation schemas using Pydantic",
            "Implement batch inference logic to handle multiple requests concurrently"
          ],
          "upskilling_instructions": [
            "Write asynchronous route handlers in FastAPI for fast IO operations.",
            "Define strict input schemas and output formats using Pydantic models.",
            "Expose standard Prometheus metrics (/metrics) for monitoring throughput."
          ],
          "references": [
            {
              "title": "FastAPI Deployment Docs",
              "url": "https://fastapi.tiangolo.com/deployment/"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/"
            },
            {
              "title": "Prometheus Python Client",
              "url": "https://github.com/prometheus/client_python"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Data Governance & Privacy",
          "tasks": [
            "Implement Personally Identifiable Information (PII) scrubbing in text data",
            "Anonymize dataset variables before model training",
            "Audit dataset composition for class and gender representation biases"
          ],
          "upskilling_instructions": [
            "Integrate Microsoft Presidio to scrub names, emails, and phone numbers.",
            "Use k-anonymity or differential privacy techniques for tabular exports.",
            "Write statistical bias reports on target labels across demographics."
          ],
          "references": [
            {
              "title": "Microsoft Presidio",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Google Responsible AI Practices",
              "url": "https://ai.google/responsibility/principles/"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Real-Time Feature & Scoring Pipeline",
          "tasks": [
            "Develop a pipeline that updates Feast online features from a data source",
            "Serve real-time predictions via a containerized FastAPI app",
            "Write a case study documenting architecture, metrics, and deployment instructions"
          ],
          "upskilling_instructions": [
            "Combine Feast, Redis, FastAPI, and Docker into one docker-compose stack.",
            "Conduct load testing using Locust and verify latencies under load.",
            "Host the repository on GitHub with detailed setup instructions."
          ],
          "references": [
            {
              "title": "Docker Compose Get Started",
              "url": "https://docs.docker.com/compose/gettingstarted/"
            },
            {
              "title": "Locust Load Testing",
              "url": "https://docs.locust.io/"
            },
            {
              "title": "GitHub README Best Practices",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            }
          ]
        }
      ]
    },
    {
      "current_role": "DevOps Engineer",
      "target_ai_role": "AI Generalist",
      "title": "DevOps Engineer to AI Generalist",
      "summary": "Master the art of managing machine learning hardware infrastructure, GPU workloads, orchestration, and automated model release cycles.",
      "base_difficulty": 68,
      "months": [
        {
          "month": 1,
          "focus": "Python and Scripting for AI",
          "tasks": [
            "Develop complex administration scripts in Python using subprocess and os modules",
            "Write automated environment validators for AI software dependencies",
            "Develop a structured backup script for deep learning weight artifacts"
          ],
          "upskilling_instructions": [
            "Replace standard bash administration scripts with clean, modular Python.",
            "Write unit tests for shell command invokers.",
            "Incorporate graceful error handling, signal traps, and color-coded logger outputs."
          ],
          "references": [
            {
              "title": "Python Scripting",
              "url": "https://docs.python.org/3/tutorial/"
            },
            {
              "title": "Subprocess Module Docs",
              "url": "https://docs.python.org/3/library/subprocess.html"
            },
            {
              "title": "Logging in Python",
              "url": "https://docs.python.org/3/library/logging.html"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Linux, CUDA and GPU Setup",
          "tasks": [
            "Configure CUDA and cuDNN on a Linux machine",
            "Monitor GPU memory, power, and temperatures using nvidia-smi",
            "Build a custom Docker image featuring GPU access"
          ],
          "upskilling_instructions": [
            "Install NVIDIA container toolkit to pass GPU acceleration to Docker containers.",
            "Set up GPU memory limits within Docker configuration scripts.",
            "Troubleshoot common driver conflicts and mismatch errors."
          ],
          "references": [
            {
              "title": "NVIDIA Container Toolkit",
              "url": "https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html"
            },
            {
              "title": "nvidia-smi Commands Guide",
              "url": "https://developer.nvidia.com/nvidia-system-management-interface"
            },
            {
              "title": "CUDA Installation Guide",
              "url": "https://docs.nvidia.com/cuda/cuda-installation-guide-linux/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Intro to ML & Deep Learning Concepts",
          "tasks": [
            "Train a basic classifier using PyTorch on a standard GPU server",
            "Practice loading datasets into GPU memory using .to('cuda')",
            "Measure and compare training speed differences between CPU and GPU runs"
          ],
          "upskilling_instructions": [
            "Understand backpropagation, batch optimization, and learning rates.",
            "Write PyTorch scripts that target cpu or cuda dynamically based on device availability.",
            "Profile memory bottlenecks in the training loop."
          ],
          "references": [
            {
              "title": "PyTorch CUDA Semantics",
              "url": "https://pytorch.org/docs/stable/notes/cuda.html"
            },
            {
              "title": "PyTorch Profiler Tutorial",
              "url": "https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html"
            },
            {
              "title": "3Blue1Brown Neural Networks",
              "url": "https://www.3blue1brown.com/topics/neural-networks"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Model Deployment Basics",
          "tasks": [
            "Containerize a Python-based model serving app using lightweight Docker base images",
            "Configure multi-stage Docker builds to reduce image sizes",
            "Host containerized model on a local network and perform test curl requests"
          ],
          "upskilling_instructions": [
            "Utilize lightweight python-slim or alpine-based images.",
            "Split packaging steps to ensure compiler tools are left out of final release layers.",
            "Implement container health checks (`HEALTHCHECK`) targeting the inference endpoint."
          ],
          "references": [
            {
              "title": "Docker Multi-Stage Builds",
              "url": "https://docs.docker.com/build/building/multi-stage/"
            },
            {
              "title": "Dockerizing Python Apps",
              "url": "https://docs.docker.com/language/python/containerize/"
            },
            {
              "title": "FastAPI Web Application",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Container Orchestration for AI",
          "tasks": [
            "Install a local Kubernetes cluster (Minikube, Kind, or MicroK8s)",
            "Deploy a model serving deployment with pod horizontal autoscalers (HPA)",
            "Define resource limits for CPU and GPU in deployment manifests"
          ],
          "upskilling_instructions": [
            "Install the NVIDIA device plugin inside the Kubernetes cluster.",
            "Establish custom limits and requests for nvidia.com/gpu resources.",
            "Define readiness and liveness probes tailored to model cold-starts."
          ],
          "references": [
            {
              "title": "K8s GPU Scheduling",
              "url": "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/"
            },
            {
              "title": "NVIDIA GPU Operator",
              "url": "https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html"
            },
            {
              "title": "Minikube Setup",
              "url": "https://minikube.sigs.k8s.io/docs/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "High-Throughput Model Serving",
          "tasks": [
            "Install Triton Inference Server or vLLM locally",
            "Deploy an open LLM (e.g. Llama-3-8B) on a serving framework",
            "Configure batching parameters to optimize concurrent request throughput"
          ],
          "upskilling_instructions": [
            "Define model repository structures expected by Triton.",
            "Analyze latency metrics: Time-to-First-Token (TTFT) and inter-token latency.",
            "Set up dynamic batching intervals to group incoming requests."
          ],
          "references": [
            {
              "title": "Triton Server Architecture",
              "url": "https://github.com/triton-inference-server/server/blob/main/docs/user_guide/architecture.md"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/en/latest/"
            },
            {
              "title": "Hugging Face Models",
              "url": "https://huggingface.co/models"
            }
          ]
        },
        {
          "month": 7,
          "focus": "CI/CD for Machine Learning",
          "tasks": [
            "Set up DVC (Data Version Control) to version model weights separately from git",
            "Configure a GitHub Action that triggers testing on pull requests",
            "Automate docker image compilation and registry push on code merges"
          ],
          "upskilling_instructions": [
            "Configure local, AWS S3, or Google Cloud storage backends for DVC.",
            "Write CI test scripts to assert model interface formats and inputs.",
            "Leverage cache actions to speed up docker layer construction in workflows."
          ],
          "references": [
            {
              "title": "DVC Get Started",
              "url": "https://dvc.org/doc/start"
            },
            {
              "title": "GitHub Actions Docs",
              "url": "https://docs.github.com/en/actions"
            },
            {
              "title": "Docker Hub Registry",
              "url": "https://docs.docker.com/docker-hub/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Experiment and Model Registries",
          "tasks": [
            "Host an MLflow server instance with an database backend",
            "Register model training runs, parameters, metrics, and weight outputs",
            "Create a promotion pipeline that moves models from Staging to Production"
          ],
          "upskilling_instructions": [
            "Use PostgreSQL as backend storage and AWS S3 as an artifact store.",
            "Incorporate mlflow.log_model commands to track specific model types.",
            "Implement webhook listeners to automate pipeline steps on status transitions."
          ],
          "references": [
            {
              "title": "MLflow Tracking Server",
              "url": "https://mlflow.org/docs/latest/tracking/server.html"
            },
            {
              "title": "MLflow Model Registry",
              "url": "https://mlflow.org/docs/latest/model-registry.html"
            },
            {
              "title": "AWS S3 Setup",
              "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Distributed Training Infrastructure",
          "tasks": [
            "Learn standard data-parallel and model-parallel paradigms",
            "Configure a local multi-node or multi-GPU training environment using PyTorch DDP",
            "Troubleshoot inter-node communication errors and connection timeouts"
          ],
          "upskilling_instructions": [
            "Understand NCCL, GLOO, and MPI communication runtimes.",
            "Configure torchrun with master address, port, and node counts.",
            "Set up logging configurations to track specific networking drops."
          ],
          "references": [
            {
              "title": "PyTorch DDP Tutorial",
              "url": "https://pytorch.org/tutorials/intermediate/ddp_tutorial.html"
            },
            {
              "title": "NCCL Technical Guide",
              "url": "https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/index.html"
            },
            {
              "title": "Torchrun Documentation",
              "url": "https://pytorch.org/docs/stable/elastic/run.html"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Logging, Metrics and Observability",
          "tasks": [
            "Expose model prediction latency and count metrics to Prometheus",
            "Build a custom Grafana dashboard showing CPU, GPU, memory, and error rates",
            "Establish alert definitions to catch spike patterns in model error codes"
          ],
          "upskilling_instructions": [
            "Expose standard metrics via fastapi middleware integration.",
            "Connect Prometheus scrape jobs targeting container IP addresses.",
            "Establish notification routes targeting Slack or email gateways."
          ],
          "references": [
            {
              "title": "Prometheus Getting Started",
              "url": "https://prometheus.io/docs/introduction/first_steps/"
            },
            {
              "title": "Grafana Setup Guide",
              "url": "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/"
            },
            {
              "title": "Evidently AI Monitoring",
              "url": "https://www.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Security, IAM, and Resource Management",
          "tasks": [
            "Configure secure IAM roles for model instances",
            "Encrypt weight files in transit and at rest",
            "Configure token validation middlewares on serving endpoints"
          ],
          "upskilling_instructions": [
            "Enforce least-privilege policies for S3 model access roles.",
            "Set up KMS or equivalent key services to manage model decryptions.",
            "Validate OAuth2 or JWT signatures on gateway controllers."
          ],
          "references": [
            {
              "title": "AWS IAM Best Practices",
              "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
            },
            {
              "title": "OAuth 2.0 Framework",
              "url": "https://oauth.net/2/"
            },
            {
              "title": "NIST Cloud Security Guide",
              "url": "https://www.nist.gov/publications/nist-cloud-computing-security-reference-architecture"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Autoscaling Model Cluster",
          "tasks": [
            "Deploy an autoscaling Triton server in Kubernetes using GitOps",
            "Integrate Prometheus monitoring and Grafana visualization dashboard configs",
            "Document standard incident response steps for OOM and connection drops"
          ],
          "upskilling_instructions": [
            "Create GitOps manifests targeting ArgoCD or Flux.",
            "Implement KEDA scaling rules based on queue depth metrics.",
            "Run performance profiles using locust to prove target scalability."
          ],
          "references": [
            {
              "title": "ArgoCD Documentation",
              "url": "https://argo-cd.readthedocs.io/en/stable/"
            },
            {
              "title": "KEDA Autoscaling Guides",
              "url": "https://keda.sh/docs/latest/scalers/"
            },
            {
              "title": "Locust Load Tester",
              "url": "https://locust.io/"
            }
          ]
        }
      ]
    },
    {
      "current_role": "QA Engineer",
      "target_ai_role": "AI Generalist",
      "title": "QA Engineer to AI Generalist",
      "summary": "Calibrate your quality assurance expertise for AI systems, mastering model validation, automated evaluations, security fuzzing, and compliance testing.",
      "base_difficulty": 62,
      "months": [
        {
          "month": 1,
          "focus": "Python for Automation & Testing",
          "tasks": [
            "Write Python scripts that automate API interactions and validate JSON payloads",
            "Build testing workflows using PyTest and generate HTML test reports",
            "Implement parameterization tests to cover diverse input data variants"
          ],
          "upskilling_instructions": [
            "Replace GUI automation scripts with lightweight API validation harnesses.",
            "Configure pytest-cov to track testing paths and coverage stats.",
            "Utilize pytest.mark.parametrize to reduce duplicated testing logic."
          ],
          "references": [
            {
              "title": "PyTest Documentation",
              "url": "https://docs.pytest.org/en/stable/"
            },
            {
              "title": "Requests Library Guide",
              "url": "https://requests.readthedocs.io/en/latest/"
            },
            {
              "title": "Python Testing Course",
              "url": "https://realpython.com/python-testing/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Statistical Validation & Metrics",
          "tasks": [
            "Review basic probability distributions and statistical hypothesis testing",
            "Calculate precision, recall, F1, and confusion matrices for classification models",
            "Implement automated statistical sanity checks on raw dataset variables"
          ],
          "upskilling_instructions": [
            "Write functions that compute ML metrics from raw predictions.",
            "Apply chi-square or t-tests to identify demographic differences in predictions.",
            "Document performance limitations under imbalanced test slices."
          ],
          "references": [
            {
              "title": "Scikit-Learn Classification Metrics",
              "url": "https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics"
            },
            {
              "title": "StatQuest ML Metrics",
              "url": "https://statquest.org/"
            },
            {
              "title": "Hypothesis Testing Guide",
              "url": "https://www.khanacademy.org/math/statistics-probability"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Machine Learning Testing Basics",
          "tasks": [
            "Train baseline scikit-learn models and write unit tests for their predictors",
            "Perform testing for concept and data drift over simulated batches",
            "Implement boundary value testing for model inputs and target shapes"
          ],
          "upskilling_instructions": [
            "Utilize mock libraries to isolate model API dependency behaviors.",
            "Use Great Expectations to assert structured schema bounds.",
            "Write assertions to verify NaN behaviors are gracefully managed."
          ],
          "references": [
            {
              "title": "Great Expectations Docs",
              "url": "https://docs.greatexpectations.io/docs/"
            },
            {
              "title": "Testing ML Models Guide",
              "url": "https://martinfowler.com/articles/articles-ml-testing.html"
            },
            {
              "title": "Mocking in Python Guide",
              "url": "https://docs.python.org/3/library/unittest.mock.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Testing Deep Learning Models",
          "tasks": [
            "Train a small PyTorch model and write verification tests for model weights",
            "Implement neural network gradient checks and shape assertions",
            "Track model performance across epochs using weights and biases"
          ],
          "upskilling_instructions": [
            "Add shape check assertions (`assert tensor.shape == (...)`) inside model layers.",
            "Write checks to detect vanishing or exploding gradients.",
            "Compare validation curve outputs to catch training regression steps."
          ],
          "references": [
            {
              "title": "PyTorch Shapes & Operations",
              "url": "https://pytorch.org/docs/stable/tensors.html"
            },
            {
              "title": "Weights & Biases Track Guide",
              "url": "https://docs.wandb.ai/guides/track"
            },
            {
              "title": "Stanford CS230 DL Cheatsheet",
              "url": "https://stanford.edu/~shervine/teaching/cs-230/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "LLM Vulnerability & Security Testing",
          "tasks": [
            "Design test prompts targeting prompt injection vectors",
            "Audit LLM outputs for leakage of system prompts and secret keys",
            "Establish automated filters that flag unsafe generation outputs"
          ],
          "upskilling_instructions": [
            "Red-team prompts for alignment bypass and roleplay attacks.",
            "Design system instruction constraints and verify refusal behaviors.",
            "Integrate regex-based validation scanners to prevent credential leaks."
          ],
          "references": [
            {
              "title": "OWASP Top 10 for LLMs",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "Prompt Injection Vectors",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "Llama Guard Safety Guide",
              "url": "https://huggingface.co/meta-llama/Llama-Guard-3"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Golden Datasets & Ground Truth",
          "tasks": [
            "Collect and curate a set of 100 benchmark test prompts and target outputs",
            "Implement automated format check tests on LLM outputs",
            "Develop a grading script that evaluates correct string targets"
          ],
          "upskilling_instructions": [
            "Include target edge cases, extreme inputs, and bad formatting syntax.",
            "Incorporate pydantic validation parser tools within grading pipelines.",
            "Establish exact, partial, and semantically valid comparison metrics."
          ],
          "references": [
            {
              "title": "Kaggle: Intro to ML",
              "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
            },
            {
              "title": "Scikit-Learn: Getting Started",
              "url": "https://scikit-learn.org/stable/getting_started.html"
            },
            {
              "title": "Google Machine Learning Crash Course",
              "url": "https://developers.google.com/machine-learning/crash-course/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "RAG Evaluation Metrics",
          "tasks": [
            "Install and configure the Ragas or TruLens evaluation libraries",
            "Score test cases on faithfulness, answer relevance, and context precision",
            "Identify and catalog retrieval failures and model hallucination rates"
          ],
          "upskilling_instructions": [
            "Generate test datasets using local document vector structures.",
            "Establish automated workflows to rank retrieve contexts.",
            "Construct classification labels for model hallucination symptoms."
          ],
          "references": [
            {
              "title": "Ragas Metrics Guide",
              "url": "https://docs.ragas.io/en/stable/concepts/metrics/index.html"
            },
            {
              "title": "TruLens RAG Triad",
              "url": "https://www.trulens.org/trulens_eval/core_concepts/rag_triad/"
            },
            {
              "title": "LlamaIndex Evaluation Guide",
              "url": "https://docs.llamaindex.ai/en/stable/module_guides/evaluating/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Performance & Latency Benchmarking",
          "tasks": [
            "Build an automated performance load testing suite using Locust",
            "Measure time-to-first-token (TTFT) and throughput latencies on models",
            "Profile memory consumption profiles during batch generation tasks"
          ],
          "upskilling_instructions": [
            "Configure locust task classes simulating concurrent API users.",
            "Track percentile metrics (p95, p99) to establish performance boundaries.",
            "Monitor GPU resources during intensive batch processes."
          ],
          "references": [
            {
              "title": "Locust Documentation",
              "url": "https://docs.locust.io/"
            },
            {
              "title": "vLLM Benchmarking Utilities",
              "url": "https://github.com/vllm-project/vllm/tree/main/benchmarks"
            },
            {
              "title": "Triton Performance Analyzer",
              "url": "https://github.com/triton-inference-server/client/blob/main/src/python/library/tritonclient/utils/perf_analyzer"
            }
          ]
        },
        {
          "month": 9,
          "focus": "CI Integration & Regression Testing",
          "tasks": [
            "Integrate evaluation runs into GitHub Actions workflows",
            "Write assertions that cause build steps to fail on model regressions",
            "Automate performance dashboard generations on release merges"
          ],
          "upskilling_instructions": [
            "Execute evaluations in CI using cached small Golden Datasets.",
            "Compare scores against production branch baseline benchmarks.",
            "Establish notification outputs highlighting test results."
          ],
          "references": [
            {
              "title": "GitHub Actions Runners",
              "url": "https://docs.github.com/en/actions/using-github-hosted-runners"
            },
            {
              "title": "PyTest CI/CD Integration",
              "url": "https://docs.pytest.org/en/stable/how-to/ci.html"
            },
            {
              "title": "Weights & Biases CI Utilities",
              "url": "https://docs.wandb.ai/guides/data-lineage"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Security & Bias Auditing",
          "tasks": [
            "Conduct systemic prompt jailbreak testing targeting target models",
            "Audit target responses for demographic bias using test lists",
            "Verify adherence to standard local privacy and encryption requirements"
          ],
          "upskilling_instructions": [
            "Utilize jailbreak testing repositories (e.g. Fuzzing frameworks).",
            "Write demographic slice validation checks across specific groups.",
            "Review credentials and encryption parameters inside release builds."
          ],
          "references": [
            {
              "title": "Gandalf Prompt Sandbox",
              "url": "https://gandalf.lakera.ai/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Fairlearn Documentation",
              "url": "https://fairlearn.org/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Human-in-the-Loop Validation Pipelines",
          "tasks": [
            "Design a web-based human annotation form for prompt evaluations",
            "Calculate inter-annotator agreement metrics (Kappa) across team reviews",
            "Integrate human grading feedback streams into training datasets"
          ],
          "upskilling_instructions": [
            "Establish clear scoring rules, rubrics, and feedback guidelines.",
            "Calculate Cohen's kappa score on double-graded prompt cases.",
            "Set up automated feedback pipelines targeting training buckets."
          ],
          "references": [
            {
              "title": "Label Studio Documentation",
              "url": "https://labelstud.io/"
            },
            {
              "title": "Statsmodels Cohen's Kappa",
              "url": "https://www.statsmodels.org/stable/generated/statsmodels.stats.inter_rater.fleiss_kappa.html"
            },
            {
              "title": "Google Technical Writing Course",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Automated AI Eval Suite",
          "tasks": [
            "Deploy an automated LLM assessment microservice on local infrastructure",
            "Configure scheduled evaluation sweeps triggering on golden test cases",
            "Draft an official test assessment summarizing reliability, security, and accuracy"
          ],
          "upskilling_instructions": [
            "Integrate Docker, PyTest, and Ragas into one automated testing setup.",
            "Expose evaluation progress results via an visual web page dashboard.",
            "Present key statistics, metrics, and failures in a final report."
          ],
          "references": [
            {
              "title": "Docker Compose Setup Guide",
              "url": "https://docs.docker.com/compose/"
            },
            {
              "title": "Python Markdown Library",
              "url": "https://github.com/Python-Markdown/markdown"
            },
            {
              "title": "Google Technical Writing Best Practices",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "MLOps Engineer",
      "title": "Any Role to MLOps Engineer",
      "summary": "The master career path to MLOps Engineering. Build, scale, monitor, and coordinate industrial-grade machine learning pipelines.",
      "base_difficulty": 78,
      "months": [
        {
          "month": 1,
          "focus": "Python & Bash for MLOps",
          "tasks": [
            "Configure standard virtual environments, locks, and package registries",
            "Develop automation utilities for raw file transfers and logs parsing",
            "Write unit tests asserting script logic paths using PyTest"
          ],
          "upskilling_instructions": [
            "Incorporate Poetry to manage stable package environments.",
            "Replace bash pipelines with clean, maintainable Python utilities.",
            "Write tests targeting system utility operations."
          ],
          "references": [
            {
              "title": "Poetry Package Manager",
              "url": "https://python-poetry.org/"
            },
            {
              "title": "Bash Scripting Guide",
              "url": "https://tldp.org/LDP/abs/html/"
            },
            {
              "title": "PyTest Guidelines",
              "url": "https://docs.pytest.org/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Data Wrangling & Validation at Scale",
          "tasks": [
            "Build high-throughput ingestion pipelines using Pandas and Polars",
            "Establish automated schema assertions using Great Expectations",
            "Design statistical validation checks targeting data distributions"
          ],
          "upskilling_instructions": [
            "Compare memory behaviors of Polars and Pandas on large raw datasets.",
            "Integrate schema checks within raw data landing zones.",
            "Track null metrics and outlier values dynamically."
          ],
          "references": [
            {
              "title": "Polars Ingestion Guide",
              "url": "https://docs.pola.rs/"
            },
            {
              "title": "Great Expectations Quickstart",
              "url": "https://docs.greatexpectations.io/docs/"
            },
            {
              "title": "Scikit-Learn Preprocessing",
              "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Core ML and Experiment Tracking",
          "tasks": [
            "Train baseline scikit-learn models and write verification tests",
            "Register model parameters, runs, metrics and weights using MLflow",
            "Construct comparison dashboards to rank different experiment outputs"
          ],
          "upskilling_instructions": [
            "Isolate models from data splits before metrics calculation.",
            "Add mlflow.log_model commands to record models.",
            "Compare precision, recall, and ROC-AUC curves in dashboard views."
          ],
          "references": [
            {
              "title": "MLflow Tracking Server",
              "url": "https://mlflow.org/docs/latest/tracking.html"
            },
            {
              "title": "Scikit-Learn Model Selection",
              "url": "https://scikit-learn.org/stable/modules/classes.html#module-sklearn.model_selection"
            },
            {
              "title": "Kaggle Model Validation",
              "url": "https://www.kaggle.com/code/dansbecker/model-validation"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Model Packaging & Containerization",
          "tasks": [
            "Develop lightweight Docker files to host inference operations",
            "Configure multi-stage compile chains to minimize file overheads",
            "Configure local containers and assert health checks on startup"
          ],
          "upskilling_instructions": [
            "Adopt multi-stage builds to yield narrow final images.",
            "Run container processes using non-root system users for security.",
            "Add container HEALTHCHECK instructions targeting the inference route."
          ],
          "references": [
            {
              "title": "Docker Multi-Stage Builds",
              "url": "https://docs.docker.com/build/building/multi-stage/"
            },
            {
              "title": "Docker Security Best Practices",
              "url": "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"
            },
            {
              "title": "FastAPI Setup Guide",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Orchestrating ML Pipelines",
          "tasks": [
            "Develop structured pipelines using Apache Airflow or Prefect",
            "Design DAG flows linking data check, training, and registry jobs",
            "Incorporate error retry parameters inside specific pipeline nodes"
          ],
          "upskilling_instructions": [
            "Adopt standard task frameworks to structure job schedules.",
            "Map inputs and outputs between consecutive tasks securely.",
            "Configure email or Slack notices on task pipeline failures."
          ],
          "references": [
            {
              "title": "Apache Airflow Getting Started",
              "url": "https://airflow.apache.org/docs/apache-airflow/stable/start.html"
            },
            {
              "title": "Prefect Architecture Guide",
              "url": "https://docs.prefect.io/"
            },
            {
              "title": "Kubeflow Pipeline Specs",
              "url": "https://www.kubeflow.org/docs/components/pipelines/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Feature Stores & Real-Time Features",
          "tasks": [
            "Deploy a Feast store locally and configure features definitions",
            "Build pipelines converting historical data into Feast offline stores",
            "Pull feature vectors at low-latency under simulated test runs"
          ],
          "upskilling_instructions": [
            "Define schemas, sources, and entities inside Feast structures.",
            "Connect parquet files as offline source directories.",
            "Configure Redis target directories as online feature providers."
          ],
          "references": [
            {
              "title": "Feast Quickstart Guide",
              "url": "https://docs.feast.dev/getting-started/quickstart"
            },
            {
              "title": "Redis Getting Started",
              "url": "https://redis.io/docs/latest/get-started/"
            },
            {
              "title": "Feature Stores Reference",
              "url": "https://www.featurestore.org/"
            }
          ]
        },
        {
          "month": 7,
          "focus": "High-Performance Model Serving",
          "tasks": [
            "Deploy model targets using Triton Inference Server or vLLM",
            "Expose endpoint interfaces and validate schemas via Pydantic",
            "Fine-tune concurrent batch parameters to maximize throughput speeds"
          ],
          "upskilling_instructions": [
            "Adopt high-speed frameworks like Triton or vLLM.",
            "Utilize Pydantic to ensure input schemas are correct.",
            "Adjust dynamic batching queues to optimize request throughput."
          ],
          "references": [
            {
              "title": "Triton Server Architecture",
              "url": "https://github.com/triton-inference-server/server/blob/main/docs/user_guide/architecture.md"
            },
            {
              "title": "vLLM Documentation",
              "url": "https://docs.vllm.ai/en/latest/"
            },
            {
              "title": "Pydantic Documentation",
              "url": "https://docs.pydantic.dev/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Production Kubernetes & KServe",
          "tasks": [
            "Configure model deployments inside local Kubernetes clusters",
            "Enable GPU configurations and schedules for model servers",
            "Configure deployment manifests containing replica autoscaling limits"
          ],
          "upskilling_instructions": [
            "Install the NVIDIA container scheduling operator inside clusters.",
            "Allocate nvidia.com/gpu resources limits inside deployment pods.",
            "Define specific readiness and liveness tests."
          ],
          "references": [
            {
              "title": "K8s Scheduling GPUs",
              "url": "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/"
            },
            {
              "title": "NVIDIA GPU Operator",
              "url": "https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html"
            },
            {
              "title": "KServe Documentation",
              "url": "https://kserve.github.io/website/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Continuous Delivery & GitOps",
          "tasks": [
            "Establish automated deployment pipelines using ArgoCD or Flux",
            "Maintain Kubernetes state configurations inside versioned Git channels",
            "Implement zero-downtime rolling releases for serving containers"
          ],
          "upskilling_instructions": [
            "Set up GitOps mechanisms to sync cluster configurations.",
            "Maintain cluster manifest states inside distinct Git trees.",
            "Configure rolling update parameters (`maxSurge` / `maxUnavailable`)."
          ],
          "references": [
            {
              "title": "ArgoCD Getting Started",
              "url": "https://argo-cd.readthedocs.io/en/stable/getting_started/"
            },
            {
              "title": "GitOps Overview",
              "url": "https://www.gitops.tech/"
            },
            {
              "title": "K8s Deployments Rolling Updates",
              "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Monitoring, Metrics and Drift",
          "tasks": [
            "Expose serving throughput and latency metrics to Prometheus collectors",
            "Build custom Dashboards in Grafana visualizing system stats",
            "Implement evidently AI drift detection checks over inference inputs"
          ],
          "upskilling_instructions": [
            "Define middleware endpoints logging model latency metrics.",
            "Add Prometheus collectors scraping target metrics.",
            "Write scheduled checks logging input drift changes."
          ],
          "references": [
            {
              "title": "Prometheus Scrape Configs",
              "url": "https://prometheus.io/docs/prometheus/latest/configuration/configuration/"
            },
            {
              "title": "Grafana Setup Guide",
              "url": "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/"
            },
            {
              "title": "Evidently AI Monitoring Docs",
              "url": "https://docs.evidentlyai.com/"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Compute Optimization & Cost Control",
          "tasks": [
            "Configure GPU sharing and fractional GPU slicing workloads",
            "Analyze model inference latency against compute cost rates",
            "Draft budget limit guidelines for development pipelines"
          ],
          "upskilling_instructions": [
            "Adopt NVIDIA Multi-Instance GPU (MIG) for hardware optimization.",
            "Profile cost trends per 1M model predictions.",
            "Implement automatic sandbox timeouts on idle servers."
          ],
          "references": [
            {
              "title": "NVIDIA MIG Guide",
              "url": "https://docs.nvidia.com/datacenter/tesla/mig-user-guide/index.html"
            },
            {
              "title": "Kubernetes Resource Quotas",
              "url": "https://kubernetes.io/docs/concepts/policy/resource-quotas/"
            },
            {
              "title": "Google Cloud FinOps",
              "url": "https://cloud.google.com/finops"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Enterprise MLOps Pipeline",
          "tasks": [
            "Build an end-to-end Airflow-MLflow-FastAPI-K8s GitOps deployment",
            "Integrate evidently AI drift alerts and Grafana dashboards",
            "Draft system operations instructions covering OOM recovery rules"
          ],
          "upskilling_instructions": [
            "Group Feast, Airflow, MLflow, and Kubernetes operators in one GitOps configuration.",
            "Run performance profiles using locust to prove deployment scalability.",
            "Expose system operations status on a simple dashboard."
          ],
          "references": [
            {
              "title": "Locust Performance Tool",
              "url": "https://locust.io/"
            },
            {
              "title": "Helm Package Manager",
              "url": "https://helm.sh/"
            },
            {
              "title": "GitHub README Best Practices",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "AI Safety Engineer",
      "title": "Any Role to AI Safety Engineer",
      "summary": "Master the critical disciplines of AI safety, alignment engineering, alignment validation, guardrails, red-teaming, and compliance.",
      "base_difficulty": 75,
      "months": [
        {
          "month": 1,
          "focus": "Python & Ethical AI Principles",
          "tasks": [
            "Configure standard virtual environments and dependencies using Python",
            "Review core AI alignment guidelines and safety literature",
            "Write Python validators that catch offensive words in input strings"
          ],
          "upskilling_instructions": [
            "Adopt Poetry to maintain clean, isolated Python dependencies.",
            "Read fundamental publications from Anthropic, OpenAI, and DeepMind on alignment.",
            "Implement robust regular-expression search rules for unsafe terms."
          ],
          "references": [
            {
              "title": "Anthropic Core Views",
              "url": "https://www.anthropic.com/news/core-views-on-ai-safety"
            },
            {
              "title": "DeepMind Alignment Research",
              "url": "https://deepmind.google/discover/blog/alignment-research/"
            },
            {
              "title": "Poetry Installation",
              "url": "https://python-poetry.org/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Fine-Tuning & Safety Guards",
          "tasks": [
            "Deploy open weights model sizes using Hugging Face",
            "Structure prompt guidelines that enforce safe system behavior",
            "Expose endpoint interfaces and assert output structures"
          ],
          "upskilling_instructions": [
            "Configure Hugging Face transformers parameters locally.",
            "Design system instructions and test refusal responses.",
            "Integrate validation parsers to catch schema non-compliance."
          ],
          "references": [
            {
              "title": "Hugging Face Transformers Quickstart",
              "url": "https://huggingface.co/docs/transformers/index"
            },
            {
              "title": "Llama Guard Safety Models",
              "url": "https://huggingface.co/meta-llama/Llama-Guard-3"
            },
            {
              "title": "FastAPI Web Application Docs",
              "url": "https://fastapi.tiangolo.com/"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Alignment Foundations",
          "tasks": [
            "Study Reinforcement Learning from Human Feedback (RLHF) mechanics",
            "Train a basic reward classifier on PyTorch",
            "Review Direct Preference Optimization (DPO) frameworks"
          ],
          "upskilling_instructions": [
            "Compare reward models, policy models, and reference models.",
            "Construct classification loss pipelines scoring preference pairs.",
            "Map parameter updates under DPO loss equations."
          ],
          "references": [
            {
              "title": "Hugging Face TRL Library",
              "url": "https://huggingface.co/docs/trl/index"
            },
            {
              "title": "DPO Publication Reference",
              "url": "https://arxiv.org/abs/2305.18290"
            },
            {
              "title": "PyTorch Basic Tutorials",
              "url": "https://pytorch.org/tutorials/"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Red Teaming and Attacks",
          "tasks": [
            "Design complex adversarial prompt injection tests",
            "Execute roleplay and system instruction bypass attacks on local models",
            "Catalog model vulnerabilities and leakage frequencies"
          ],
          "upskilling_instructions": [
            "Fuzz local models using diverse jailbreak vectors.",
            "Attempt to force model extraction of hidden system guidelines.",
            "Create vulnerability scores summarizing model robust levels."
          ],
          "references": [
            {
              "title": "OWASP Top 10 LLM Security Risks",
              "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
            },
            {
              "title": "Jailbreaking Research Literature",
              "url": "https://arxiv.org/abs/2307.15043"
            },
            {
              "title": "Gandalf Prompt Jailbreak Game",
              "url": "https://gandalf.lakera.ai/"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Guardrail Frameworks",
          "tasks": [
            "Install Llama Guard or NeMo Guardrails packages",
            "Build safety gate routes that inspect user inputs before model calls",
            "Benchmark the latency overhead added by safety wrappers"
          ],
          "upskilling_instructions": [
            "Define safety rules and boundaries in NeMo configurations.",
            "Implement high-speed input-output screening middlewares.",
            "Profile Latency margins added by additional safety validation steps."
          ],
          "references": [
            {
              "title": "NeMo Guardrails GitHub",
              "url": "https://github.com/NVIDIA/NeMo-Guardrails"
            },
            {
              "title": "Llama Guard HF Reference",
              "url": "https://huggingface.co/meta-llama/Llama-Guard-3"
            },
            {
              "title": "FastAPI Middlewares Guide",
              "url": "https://fastapi.tiangolo.com/tutorial/middleware/"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Evaluations for Factuality & Hallucination",
          "tasks": [
            "Set up automated grading pipelines using Ragas or TruLens",
            "Score model generations on faithfulness, context precision, and hallucination rates",
            "Design golden evaluation prompts that trigger model hallucinations"
          ],
          "upskilling_instructions": [
            "Utilize Ragas metrics to measure factual consistency.",
            "Configure LLM-as-a-judge classifiers to grade output compliance.",
            "Map edge cases where semantic references contain conflicting claims."
          ],
          "references": [
            {
              "title": "Ragas Evaluation Documentation",
              "url": "https://docs.ragas.io/"
            },
            {
              "title": "TruLens Evaluation Tools",
              "url": "https://www.trulens.org/"
            },
            {
              "title": "OpenAI Evals Framework",
              "url": "https://github.com/openai/evals"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Sandboxing & Execution Security",
          "tasks": [
            "Deploy model execution runtimes inside secure, restricted sandboxes",
            "Implement resource usage caps (memory, CPU) for inference runs",
            "Verify docker configuration isolation configurations"
          ],
          "upskilling_instructions": [
            "Adopt micro-VM tools or container runtimes like gVisor.",
            "Restrict process execution paths within target sandbox limits.",
            "Run container processes using non-root system users."
          ],
          "references": [
            {
              "title": "gVisor Container Sandbox",
              "url": "https://gvisor.dev/"
            },
            {
              "title": "Docker Sandboxing Best Practices",
              "url": "https://docs.docker.com/engine/security/"
            },
            {
              "title": "Kubernetes Pod Security Standards",
              "url": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Data Privacy & Anonymization",
          "tasks": [
            "Integrate Microsoft Presidio to scrub PII from training datasets",
            "Apply differential privacy algorithms on raw tabular records",
            "Audit dataset caches for credit card and social security variables"
          ],
          "upskilling_instructions": [
            "Design automated PII sanitization pipelines.",
            "Add noise bounds to satisfy differential privacy standards.",
            "Establish regex-based checkers in raw data storage layers."
          ],
          "references": [
            {
              "title": "Microsoft Presidio",
              "url": "https://microsoft.github.io/presidio/"
            },
            {
              "title": "Differential Privacy Overview",
              "url": "https://github.com/google/differential-privacy"
            },
            {
              "title": "GDPR Compliance Checklists",
              "url": "https://gdpr.eu/checklist/"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Bias and Fairness Auditing",
          "tasks": [
            "Install and configure the Fairlearn bias auditing library",
            "Identify performance variance slices across demographic groups",
            "Mitigate demographic prediction disparities using fair preprocessing"
          ],
          "upskilling_instructions": [
            "Calculate metric disparities across protected groups.",
            "Document bias rates inside standard Model Card reports.",
            "Apply preprocessing transformations to achieve equalized odds."
          ],
          "references": [
            {
              "title": "Fairlearn Documentation",
              "url": "https://fairlearn.org/"
            },
            {
              "title": "Hugging Face Model Cards",
              "url": "https://huggingface.co/docs/hub/model-cards"
            },
            {
              "title": "Google MLCC: Fairness",
              "url": "https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Explainability & Interpretability",
          "tasks": [
            "Calculate variable contributions using SHAP or LIME frameworks",
            "Plot integrated gradients maps highlighting LLM input weightings",
            "Build interactive feature dashboards for model explainability reports"
          ],
          "upskilling_instructions": [
            "Generate SHAP explanation values on classification models.",
            "Expose token probability weights in generated outputs.",
            "Incorporate explainability maps in review tool dashboards."
          ],
          "references": [
            {
              "title": "SHAP Documentation",
              "url": "https://shap.readthedocs.io/en/latest/"
            },
            {
              "title": "Captum PyTorch Interpretability",
              "url": "https://captum.ai/"
            },
            {
              "title": "LIME Documentation",
              "url": "https://github.com/marcotcr/lime"
            }
          ]
        },
        {
          "month": 11,
          "focus": "AI Governance & Compliance Standards",
          "tasks": [
            "Map model deployment parameters to EU AI Act requirement lists",
            "Conduct compliance reviews based on the NIST AI Risk Management Framework",
            "Draft risk mitigation registries outlining fallback plan guides"
          ],
          "upskilling_instructions": [
            "Categorize model deployment risks (Unacceptable, High, Limited, Minimal).",
            "Incorporate NIST AI RMF metrics within testing phases.",
            "Document escalation paths for model failures in production."
          ],
          "references": [
            {
              "title": "EU AI Act Compliance Guide",
              "url": "https://artificialintelligenceact.eu/"
            },
            {
              "title": "NIST AI Risk Management Framework",
              "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
              "title": "Microsoft Responsible AI Standards",
              "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Safe LLM Proxy Guardrail",
          "tasks": [
            "Develop a secure LLM serving proxy incorporating input and output guardrails",
            "Integrate anonymization, jailbreak checkers, and hallucination scoring",
            "Write a case study detailing safety architecture, cost, and latency overheads"
          ],
          "upskilling_instructions": [
            "Integrate Presidio, NeMo Guardrails, Ragas, and FastAPI in a single proxy docker container.",
            "Run performance profiles using locust to prove safety scaling capabilities.",
            "Host the repository on GitHub with detailed setup guides."
          ],
          "references": [
            {
              "title": "Docker Compose Setup Guide",
              "url": "https://docs.docker.com/compose/"
            },
            {
              "title": "Locust Performance Tool",
              "url": "https://locust.io/"
            },
            {
              "title": "GitHub README Best Practices",
              "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"
            }
          ]
        }
      ]
    },
    {
      "current_role": "Any Role",
      "target_ai_role": "Research Scientist",
      "title": "Any Role to Research Scientist",
      "summary": "The advanced mathematical and architectural pathway to becoming an AI Research Scientist. Formulate architectures, train networks from scratch, and optimize training dynamics.",
      "base_difficulty": 88,
      "months": [
        {
          "month": 1,
          "focus": "Mathematics for Machine Learning",
          "tasks": [
            "Review linear algebra: matrix operations, eigenvalues, eigenvectors, SVD",
            "Review calculus: partial derivatives, gradients, Jacobians, and Hessians",
            "Review probability: random variables, expectation, joint distributions, Bayes theorem"
          ],
          "upskilling_instructions": [
            "Solve foundational math problems on paper and verify numerically using NumPy.",
            "Write analytical gradient equations for multi-variable equations.",
            "Write conditional probability simulators to verify Bayes theorem outcomes."
          ],
          "references": [
            {
              "title": "Mathematics for Machine Learning Book",
              "url": "https://mml-book.github.io/"
            },
            {
              "title": "MIT Linear Algebra Course",
              "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
            },
            {
              "title": "NumPy Reference Guides",
              "url": "https://numpy.org/doc/stable/reference/"
            }
          ]
        },
        {
          "month": 2,
          "focus": "Optimization Theory & Loss Functions",
          "tasks": [
            "Implement gradient descent, stochastic gradient descent (SGD), and Adam from scratch in Python",
            "Study convex optimization, duality, and saddle points in loss landscapes",
            "Implement custom loss functions (e.g. contrastive loss, Huber loss) in PyTorch"
          ],
          "upskilling_instructions": [
            "Write standard optimization updates using raw NumPy arrays.",
            "Write gradient updates manually for simple classification objectives.",
            "Construct training loops validating loss curves under custom loss constraints."
          ],
          "references": [
            {
              "title": "Stanford Convex Optimization Book",
              "url": "https://web.stanford.edu/~boyd/cvxbook/"
            },
            {
              "title": "PyTorch Custom Loss Guide",
              "url": "https://pytorch.org/docs/stable/nn.html#loss-functions"
            },
            {
              "title": "Adam Optimizer Publication",
              "url": "https://arxiv.org/abs/1412.6980"
            }
          ]
        },
        {
          "month": 3,
          "focus": "Neural Network Architectures from Scratch",
          "tasks": [
            "Build and train a fully-connected deep neural network with backpropagation from scratch using only NumPy",
            "Implement vector initialization rules (Xavier, He) and study vanishing/exploding gradients",
            "Add batch normalization and dropout layers to your custom NumPy network"
          ],
          "upskilling_instructions": [
            "Derive gradient update steps on paper for every network layer.",
            "Compare convergence speeds under He initialization vs zero-state configurations.",
            "Assert forward and backward shape alignments between all network nodes."
          ],
          "references": [
            {
              "title": "Stanford CS231n Neural Networks",
              "url": "https://cs231n.github.io/neural-networks-1/"
            },
            {
              "title": "Deep Learning Book - Bengio et al.",
              "url": "https://www.deeplearningbook.org/"
            },
            {
              "title": "NumPy Matrix Operations Reference",
              "url": "https://numpy.org/doc/stable/reference/routines.linalg.html"
            }
          ]
        },
        {
          "month": 4,
          "focus": "Deep Learning Theory & Convergence",
          "tasks": [
            "Study generalization error bounds, Rademacher complexity, and VC dimension",
            "Investigate double descent phenomenon by training models of varying capacities",
            "Plot weight distributions and activations across network layers during training"
          ],
          "upskilling_instructions": [
            "Train models beyond interpolation thresholds to observe generalization benefits.",
            "Analyze generalization error metrics across training steps.",
            "Expose activation statistics inside review tool dashboards."
          ],
          "references": [
            {
              "title": "Understanding Machine Learning Theory Book",
              "url": "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/"
            },
            {
              "title": "Deep Double Descent Research",
              "url": "https://arxiv.org/abs/1912.02292"
            },
            {
              "title": "TensorBoard Visualization Guide",
              "url": "https://pytorch.org/docs/stable/tensorboard.html"
            }
          ]
        },
        {
          "month": 5,
          "focus": "Attention & Transformer Architectures",
          "tasks": [
            "Write scaled dot-product attention and multi-head attention modules from scratch in PyTorch",
            "Implement sinusoidal positional embeddings and layer normalization blocks",
            "Assemble a complete Transformer Encoder block and verify input-output shape mappings"
          ],
          "upskilling_instructions": [
            "Implement masking parameters within self-attention vectors to preserve causal rules.",
            "Compare Pre-LN vs Post-LN stability behaviors.",
            "Review shapes throughout matrix projections."
          ],
          "references": [
            {
              "title": "Attention Is All You Need",
              "url": "https://arxiv.org/abs/1706.03762"
            },
            {
              "title": "The Annotated Transformer",
              "url": "https://nlp.seas.harvard.edu/annotated-transformer/"
            },
            {
              "title": "PyTorch Transformer Layers API",
              "url": "https://pytorch.org/docs/stable/nn.html#transformer-layers"
            }
          ]
        },
        {
          "month": 6,
          "focus": "Language Model Pretraining",
          "tasks": [
            "Build a custom character-level or subword-level tokenizer",
            "Write a PyTorch pretraining script with masked language modeling (MLM) or causal language modeling",
            "Pretrain a small 10M parameter GPT model on a subset of Wikipedia or textbooks"
          ],
          "upskilling_instructions": [
            "Train a Byte-Pair Encoding (BPE) tokenizer using Tokenizers.",
            "Implement causal masking inside model configurations.",
            "Expose generated generation outputs on baseline check points."
          ],
          "references": [
            {
              "title": "Hugging Face Tokenizers",
              "url": "https://huggingface.co/docs/tokenizers/index"
            },
            {
              "title": "Let's build GPT - Karpathy YouTube",
              "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY"
            },
            {
              "title": "PyTorch DataLoader Guide",
              "url": "https://pytorch.org/docs/stable/data.html"
            }
          ]
        },
        {
          "month": 7,
          "focus": "Reinforcement Learning Foundations",
          "tasks": [
            "Implement Q-learning and Policy Gradient (REINFORCE) algorithms on OpenAI Gym environments",
            "Study Markov Decision Processes (MDPs), value iteration, and policy iteration",
            "Graph training reward curves to evaluate convergence stability"
          ],
          "upskilling_instructions": [
            "Construct discrete agent states utilizing gym baseline environments.",
            "Formulate reward updates using value iteration algorithms.",
            "Mitigate policy variance drops using variance reduction techniques."
          ],
          "references": [
            {
              "title": "Sutton & Barto Reinforcement Learning Book",
              "url": "http://incompleteideas.net/book/the-book-2nd.html"
            },
            {
              "title": "Gymnasium Documentation",
              "url": "https://gymnasium.farama.org/"
            },
            {
              "title": "Spinning Up in Deep RL by OpenAI",
              "url": "https://spinningup.openai.com/en/latest/"
            }
          ]
        },
        {
          "month": 8,
          "focus": "Custom Optimization & Schedulers",
          "tasks": [
            "Implement learning rate schedules (cosine annealing with linear warmup) in PyTorch",
            "Implement gradient clipping and weight decay (L2 vs AdamW decapsulation rules)",
            "Investigate training behavior changes under various learning rate scales"
          ],
          "upskilling_instructions": [
            "Configure customized scheduler classes inside PyTorch train runs.",
            "Apply gradient clipping norms before optimizer updates.",
            "Document loss behavior trends across training sweeps."
          ],
          "references": [
            {
              "title": "PyTorch Learning Rate Schedulers",
              "url": "https://pytorch.org/docs/stable/optim.html#how-to-adjust-learning-rate"
            },
            {
              "title": "AdamW Optimization Publication",
              "url": "https://arxiv.org/abs/1711.05101"
            },
            {
              "title": "Deep Learning Training Playbook",
              "url": "https://github.com/google-research/tuning_playbook"
            }
          ]
        },
        {
          "month": 9,
          "focus": "Parameter-Efficient Fine-Tuning (PEFT)",
          "tasks": [
            "Implement LoRA (Low-Rank Adaptation) layers from scratch in PyTorch",
            "Fine-tune a pretrained LLM using QLoRA and quantization on a consumer GPU",
            "Analyze the parameter reduction and memory savings compared to full fine-tuning"
          ],
          "upskilling_instructions": [
            "Construct adapter matrices and join target weights dynamically.",
            "Set up 4-bit quantizations using BitsAndBytes parameters.",
            "Compare GPU memory profiles of standard and PEFT modes."
          ],
          "references": [
            {
              "title": "LoRA Publication",
              "url": "https://arxiv.org/abs/2106.09685"
            },
            {
              "title": "Hugging Face PEFT Library",
              "url": "https://huggingface.co/docs/peft/index"
            },
            {
              "title": "QLoRA Publication",
              "url": "https://arxiv.org/abs/2305.14314"
            }
          ]
        },
        {
          "month": 10,
          "focus": "Distributed Training Algorithms",
          "tasks": [
            "Study data parallelism (DP/DDP), tensor parallelism, and pipeline parallelism",
            "Configure a multi-GPU training run using PyTorch DistributedDataParallel (DDP)",
            "Measure scaling efficiency (communication overhead vs throughput)"
          ],
          "upskilling_instructions": [
            "Verify gradient synchronizations across parallel run steps.",
            "Launch multinode setups utilizing torchrun command suites.",
            "Expose training iteration logs to verify speed gains."
          ],
          "references": [
            {
              "title": "PyTorch Distributed Overview",
              "url": "https://pytorch.org/docs/stable/distributed.html"
            },
            {
              "title": "DeepSpeed Documentation",
              "url": "https://www.deepspeed.ai/"
            },
            {
              "title": "Megatron-LM GitHub",
              "url": "https://github.com/NVIDIA/Megatron-LM"
            }
          ]
        },
        {
          "month": 11,
          "focus": "Vision and Multimodal Architectures",
          "tasks": [
            "Implement a Vision Transformer (ViT) architecture in PyTorch",
            "Study contrastive representation learning (CLIP) and image-text alignment",
            "Train a multi-modal projection layer connecting a ViT to an LLM"
          ],
          "upskilling_instructions": [
            "Convert raw images into sequential token patches inside model feeds.",
            "Define CLIP loss pipelines calculating cosine scores on image-text outputs.",
            "Construct linear projections aligning vision states to language vocabularies."
          ],
          "references": [
            {
              "title": "Vision Transformer Publication",
              "url": "https://arxiv.org/abs/2010.11929"
            },
            {
              "title": "CLIP Publication - OpenAI",
              "url": "https://arxiv.org/abs/2103.00020"
            },
            {
              "title": "LLaVA Architecture Publication",
              "url": "https://arxiv.org/abs/2304.08485"
            }
          ]
        },
        {
          "month": 12,
          "focus": "Capstone Project: Custom Model Training",
          "tasks": [
            "Train a custom Transformer-based model from scratch on a specialized text corpus",
            "Evaluate performance against standard benchmarks and baseline models",
            "Write an academic-style paper or comprehensive technical report on your findings"
          ],
          "upskilling_instructions": [
            "Deploy custom models to Hugging Face Hub models directories.",
            "Score accuracy outputs against standard metrics.",
            "Detail architecture and training curves in LaTeX/Markdown files."
          ],
          "references": [
            {
              "title": "Hugging Face Model Hub upload",
              "url": "https://huggingface.co/docs/hub/adding-a-model"
            },
            {
              "title": "Overleaf LaTeX Tutorials",
              "url": "https://www.overleaf.com/learn"
            },
            {
              "title": "Google Technical Writing Course",
              "url": "https://developers.google.com/tech-writing"
            }
          ]
        }
      ]
    }
  ]
};
