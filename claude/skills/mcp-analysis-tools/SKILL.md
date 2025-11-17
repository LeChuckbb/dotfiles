---
name: mcp-analysis-tools
description: Documentation lookup with Context7, multi-step reasoning with Sequential, and web search with Tavily. Use when importing packages, framework questions (React, Vue, Next.js), complex debugging, architectural analysis, web research, current information beyond knowledge cutoff, or --think flags.
category: analysis
complexity: advanced
mcp-servers: [context7, sequential, tavily]
---

# MCP Analysis Tools (Context7 + Sequential + Tavily)

Combined analysis capabilities using Context7 for documentation, Sequential for reasoning, and Tavily for research.

## Context7 MCP Server

**Purpose**: Official library documentation lookup and framework pattern guidance

### Triggers
- Import statements: `import`, `require`, `from`, `use`
- Framework keywords: React, Vue, Angular, Next.js, Express, etc.
- Library-specific questions about APIs or best practices
- Need for official documentation patterns vs generic solutions
- Version-specific implementation requirements

### Choose When
- **Over WebSearch**: Curated, version-specific documentation
- **Over native knowledge**: Official patterns required
- **For frameworks**: React hooks, Vue composition API, Angular services
- **For libraries**: Correct API usage, authentication flows, configuration

### Examples
```
"implement React useEffect" → Context7 (official React patterns)
"add authentication with Auth0" → Context7 (official Auth0 docs)
"migrate to Vue 3" → Context7 (official migration guide)
```

## Sequential MCP Server

**Purpose**: Multi-step reasoning engine for complex analysis and systematic problem solving

### Triggers
- Complex debugging scenarios with multiple layers
- Architectural analysis and system design questions
- `--think`, `--think-hard`, `--ultrathink` flags
- Problems requiring hypothesis testing and validation
- Multi-component failure investigation

### Choose When
- **Over native reasoning**: Problems have 3+ interconnected components
- **For systematic analysis**: Root cause analysis, architecture review
- **When structure matters**: Decomposition and evidence gathering
- **For cross-domain issues**: Frontend, backend, database, infrastructure

### Examples
```
"why is this API slow?" → Sequential (systematic performance analysis)
"design a microservices architecture" → Sequential (structured system design)
"debug this authentication flow" → Sequential (multi-component investigation)
```

## Tavily MCP Server

**Purpose**: Web search and real-time information retrieval for research and current events

### Triggers
- Web search requirements beyond Claude's knowledge cutoff
- Current events, news, real-time information needs
- Market research and competitive analysis
- Technical documentation not in training data
- Academic research requiring recent publications
- `/sc:research` command activation

### Choose When
- **Over WebSearch**: Structured search with advanced filtering
- **Over WebFetch**: Multi-source search, not single page extraction
- **For research**: Comprehensive investigations requiring multiple sources
- **For current info**: Events after knowledge cutoff

### Search Capabilities
- Web search with ranking algorithms
- News search (time-filtered)
- Academic search (scholarly articles)
- Domain filtering (include/exclude)
- Content extraction (full-text)
- Multi-round searching (iterative refinement)

### Examples
```
"latest TypeScript features 2024" → Tavily (current technical information)
"OpenAI GPT updates this week" → Tavily (recent news)
"quantum computing breakthroughs 2024" → Tavily (recent research)
```

## Integration Patterns

**Context7 → Sequential → Tavily Workflow**:
1. Context7: Get official documentation
2. Sequential: Analyze implementation strategy
3. Tavily: Research current best practices
4. Sequential: Synthesize comprehensive solution

**Research Flow**:
1. Tavily: Initial broad search
2. Sequential: Analyze and identify gaps
3. Tavily: Targeted follow-up searches
4. Context7: Official patterns for implementation
5. Sequential: Synthesize findings

**Common Combined Tasks**:
- Research with Tavily → Analyze with Sequential → Implement with Context7 patterns
- Debug with Sequential → Research with Tavily → Validate with Context7 docs
- Design with Sequential → Research with Tavily → Document with Context7 standards

## Additional Resources

See [reference.md](reference.md) for:
- Tavily search patterns (basic, domain-specific, time-filtered)
- Quality optimization strategies
- Integration flows (research, fact-checking, competitive analysis)
- Performance considerations
- Error handling and fallback strategies
