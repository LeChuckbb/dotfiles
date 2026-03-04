# Claude Code Configuration

Superpowers 플러그인 기반 설정. TDD + Tidy First 워크플로우 포함.

# ===================================================
# Core Framework
# ===================================================

@AUGMENTED.md

# ===================================================
# AUGMENTED TDD Workflow (Tidy First)
# ===================================================

## Kent Beck's Tidy First Methodology

**Core Reference**: @AUGMENTED.md
> 구조적/행동적 변경 분리, 커밋 규칙

### Available Commands

**리팩토링**: `/aug:refactor` (구조 개선)
**커밋**: `/aug:commit-structural` (구조적 변경) | `/aug:commit-behavioral` (행동적 변경)
**상태**: `/aug:status` (TDD 상태 확인)

**TDD 사이클**: Superpowers `superpowers:test-driven-development` 스킬 사용

**Golden Rule**: 구조적 변경과 행동적 변경을 절대 같은 커밋에 섞지 않기

Commands 위치: `~/.claude/commands/aug/`

# ===================================================
# Custom Skills
# ===================================================

프로젝트별 스킬 (`~/.claude/skills/`):

- **composition-patterns**: React 컴포지션 패턴
- **frontend-dev-guidelines**: React/TypeScript 프론트엔드 가이드
- **prd-writer**: PRD 작성 가이드
- **react-best-practices**: React/Next.js 성능 최적화
- **web-design-guidelines**: 웹 UI/접근성 가이드
