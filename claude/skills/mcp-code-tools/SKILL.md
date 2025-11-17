---
name: mcp-code-tools
description: Pattern-based code editing with Morphllm and semantic operations with Serena. Use for multi-file edits, bulk transformations, style enforcement, symbol operations, renaming, finding references, /sc:load, /sc:save, session persistence, or large codebase navigation.
category: backend
complexity: advanced
mcp-servers: [morphllm, serena]
---

# MCP Code Tools (Morphllm + Serena)

Combined code manipulation and semantic understanding capabilities using Morphllm for pattern-based edits and Serena for symbol operations.

## Morphllm MCP Server

**Purpose**: Pattern-based code editing engine with token optimization for bulk transformations

### Triggers
- Multi-file edit operations requiring consistent patterns
- Framework updates, style guide enforcement, code cleanup
- Bulk text replacements across multiple files
- Natural language edit instructions with specific scope
- Token optimization needed (efficiency gains 30-50%)

### Choose When
- **Over Serena**: For pattern-based edits, not symbol operations
- **For bulk operations**: Style enforcement, framework updates, text replacements
- **When token efficiency matters**: Fast Apply scenarios with compression needs
- **For simple to moderate complexity**: <10 files, straightforward transformations
- **Not for semantic operations**: Symbol renames, dependency tracking, LSP integration

### Examples
```
"update all React class components to hooks" → Morphllm (pattern transformation)
"enforce ESLint rules across project" → Morphllm (style guide application)
"replace all console.log with logger calls" → Morphllm (bulk text replacement)
```

## Serena MCP Server

**Purpose**: Semantic code understanding with project memory and session persistence

### Triggers
- Symbol operations: rename, extract, move functions/classes
- Project-wide code navigation and exploration
- Multi-language projects requiring LSP integration
- Session lifecycle: `/sc:load`, `/sc:save`, project activation
- Memory-driven development workflows
- Large codebase analysis (>50 files, complex architecture)

### Choose When
- **Over Morphllm**: For symbol operations, not pattern-based edits
- **For semantic understanding**: Symbol references, dependency tracking, LSP integration
- **For session persistence**: Project context, memory management, cross-session learning
- **For large projects**: Multi-language codebases requiring architectural understanding
- **Not for simple edits**: Basic text replacements, style enforcement, bulk operations

### Examples
```
"rename getUserData function everywhere" → Serena (symbol operation with dependency tracking)
"find all references to this class" → Serena (semantic search and navigation)
"load my project context" → Serena (/sc:load with project activation)
"save my current work session" → Serena (/sc:save with memory persistence)
```

## Integration Patterns

**Serena → Morphllm Workflow**:
1. Serena analyzes semantic context and dependencies
2. Serena identifies target symbols and references
3. Morphllm executes precise pattern-based edits
4. Serena validates changes and updates memory

**Common Combined Tasks**:
- Analyze with Serena → Execute bulk edits with Morphllm
- Find references with Serena → Update patterns with Morphllm
- Load session with Serena → Apply transformations with Morphllm
- Navigate codebase with Serena → Enforce styles with Morphllm
