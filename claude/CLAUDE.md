# SuperClaude Entry Point

This file serves as the entry point for the SuperClaude framework.
Core behavioral framework loaded globally.
Additional capabilities available through Skills in ~/.claude/skills/

# ===================================================
# SuperClaude Framework Components
# ===================================================

# Core Framework (Always Loaded)
@PRINCIPLES.md
@RULES.md

# ===================================================
# Available Skills (Auto-Activated On-Demand)
# ===================================================

Skills activate automatically based on context:

## Behavioral Mode Skills
- **mode-brainstorming**: Interactive requirements discovery
- **mode-introspection**: Meta-cognitive analysis
- **mode-orchestration**: Intelligent tool selection
- **mode-task-management**: Hierarchical task organization with memory
- **mode-token-efficiency**: Symbol-enhanced communication
- **mode-deep-research**: Comprehensive research with adaptive strategies
- **mode-business-panel**: Multi-expert business analysis (multi-file)

## Research & Analysis Skills
- **research-config**: Deep research configuration (multi-file)
- **mcp-analysis-tools**: Context7 + Sequential + Tavily (multi-file)

## Development & Testing Skills
- **mcp-ui-tools**: Magic + Playwright for frontend
- **mcp-code-tools**: Morphllm + Serena for code operations

## System Reference Skills
- **flags-system**: SuperClaude behavioral flags reference

Skills are stored in ~/.claude/skills/ with automatic activation.
Each skill has clear trigger conditions and descriptions for optimal routing.
