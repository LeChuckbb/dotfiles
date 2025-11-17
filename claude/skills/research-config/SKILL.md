---
name: research-config
description: Deep research configuration with planning strategies, hop patterns, quality standards, and parallelization rules. Use when conducting comprehensive research, multi-hop investigations, /sc:research command, or user requests thorough research analysis with adaptive strategies.
category: analysis
complexity: enterprise
mcp-servers: [tavily, sequential, playwright, serena]
---

# Deep Research Configuration

Comprehensive research configuration for systematic investigation and evidence-based reasoning.

## Default Settings

```yaml
research_defaults:
  planning_strategy: unified
  max_hops: 5
  confidence_threshold: 0.7
  memory_enabled: true
  parallelization: true
  parallel_first: true  # MANDATORY DEFAULT
```

## Parallel Execution Rules (MANDATORY)

**DEFAULT_MODE**: PARALLEL

**Mandatory Parallel**:
- Multiple search queries
- Batch URL extractions
- Independent analyses
- Non-dependent hops
- Result processing

**Sequential Only With Justification**:
- Explicit dependency (Hop N requires Hop N-1 results)
- Resource constraint (API rate limit reached)
- User requirement (debugging)

## Planning Strategies

1. **Planning Only**: Immediate execution, no clarification
2. **Intent Planning**: Clarification first, max 3 questions
3. **Unified**: Optional clarification, plan presentation, user feedback

## Hop Configuration

- Max depth: 5 hops
- Timeout per hop: 60s
- Parallel hops: enabled
- Loop detection: enabled
- Genealogy tracking: enabled

## Confidence Scoring

- Relevance weight: 0.5
- Completeness weight: 0.5
- Minimum threshold: 0.6
- Target threshold: 0.8

## Tool Coordination

- Discovery primary: Tavily
- Extraction: Smart routing (Tavily vs Playwright)
- Reasoning engine: Sequential
- Memory backend: Serena
- Parallel tool calls: enabled

## Quality Gates

**Planning Gate**: Required elements (objectives, strategy, success criteria)
**Execution Gate**: Min confidence 0.6
**Synthesis Gate**: Coherence and clarity required

## Additional Resources

See [reference.md](reference.md) for:
- Performance optimizations
- Strategy selection rules
- Source credibility matrix
- Depth configurations
- Multi-hop patterns
- Error handling
- Monitoring metrics
