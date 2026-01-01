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
@AUGMENTED.md

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

# ===================================================
# AUGMENTED TDD Workflow
# ===================================================

## ⚠️ Kent Beck's TDD + Tidy First Methodology

**Core Reference**: @AUGMENTED.md
> 구조적/행동적 변경 분리, TDD 사이클, 커밋 규칙

### 🔄 Available Commands

**TDD 사이클**: `/aug:red` (테스트) → `/aug:green` (구현) → `/aug:refactor` (정리)
**커밋**: `/aug:commit-structural` (리팩토링) | `/aug:commit-behavioral` (기능/수정)
**도구**: `/aug:status` (상태 확인)

**Golden Rule**: 구조적 변경과 행동적 변경을 절대 같은 커밋에 섞지 않기

Commands 위치: `~/.dotfiles/claude/commands/augmented/`
