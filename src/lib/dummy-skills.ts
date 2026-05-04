import type { SkillRecord } from "../../type";

export const dummySkills: SkillRecord[] = [
	{
		id: "skill-001",
		title: "Write Code",
		slug: "write-code",
		description:
			"Generate production-ready code from natural language descriptions and requirements.",
		category: "code-generation",
		tags: ["ai", "coding", "generation", "productivity"],
		installCommand: "npm install @skilled/write-code",
		createdAt: "2026-01-15T10:30:00Z",
		authorClerkId: "user_001",
		authorEmail: "developer@example.com",
	},
	{
		id: "skill-002",
		title: "Debug Code",
		slug: "debug-code",
		description:
			"Intelligent code debugging with automatic error detection and fix suggestions.",
		category: "debugging",
		tags: ["debugging", "error-handling", "ai-assist", "testing"],
		installCommand: "npm install @skilled/debug-code",
		createdAt: "2026-02-03T14:45:00Z",
		authorClerkId: "user_002",
		authorEmail: "debugger@example.com",
	},
	{
		id: "skill-003",
		title: "Test Generation",
		slug: "test-generation",
		description:
			"Automatically generate comprehensive unit and integration tests from code.",
		category: "testing",
		tags: ["testing", "qa", "automation", "coverage"],
		installCommand: "npm install @skilled/test-generation",
		createdAt: "2026-01-28T09:15:00Z",
		authorClerkId: "user_003",
		authorEmail: "qa@example.com",
	},
	{
		id: "skill-004",
		title: "Documentation Writer",
		slug: "documentation-writer",
		description:
			"Generate clear, comprehensive documentation from code and comments.",
		category: "documentation",
		tags: ["docs", "documentation", "api-reference", "markdown"],
		installCommand: "npm install @skilled/documentation-writer",
		createdAt: "2026-03-10T11:20:00Z",
		authorClerkId: "user_004",
		authorEmail: "docs@example.com",
	},
	{
		id: "skill-005",
		title: "Performance Optimizer",
		slug: "performance-optimizer",
		description:
			"Analyze and optimize code performance with intelligent refactoring suggestions.",
		category: "optimization",
		tags: ["performance", "optimization", "profiling", "scalability"],
		installCommand: "npm install @skilled/performance-optimizer",
		createdAt: "2026-02-20T16:50:00Z",
		authorClerkId: "user_005",
		authorEmail: "perf@example.com",
	},
];
