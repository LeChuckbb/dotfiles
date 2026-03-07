---
name: obsidian-vault-context
description: Use when working with this Obsidian vault - creating, editing, searching, auditing, or reviewing notes. Provides vault structure, folder rules, and frontmatter schema references needed for all vault operations.
user-invocable: false
---

# Obsidian Vault Context

볼트 구조와 규칙에 대한 참조 컨텍스트. 다른 obsidian-* 스킬이 로드할 때 참조한다.

## 볼트 폴더 구조

```
Obsidian Vault/
  0.Guide/           # 볼트 운영 가이드 (MOC guide 등)
  1.Fleeting_Notes/  # 순간 포착 메모 (미처리 inbox)
  2.Literature_Notes/ # 독서/강의/영상 요약
  3.Permanent_Notes/ # 핵심 — 제텔카스텐 영구노트
    개발/            # category: 개발 노트
    비개발/          # category: 비개발 노트
    0.Inbox/         # 미분류 영구노트
    1.MOC/           # Map of Content 파일들
  4.Projects/        # 진행 중인 프로젝트
  5.Areas/           # 지속 관리 영역 (건강, 책 등)
  6.Resources/       # 참고 자료/개념 정리
    개발/            # category: 개발 리소스
    비개발/          # category: 비개발 리소스
    0.Inbox/         # 미분류 리소스
  7.Archives/        # 완료/보관
  templates/         # 노트 템플릿
  blog-content/      # 블로그 발행 콘텐츠
```

## 노트 유형별 경로 및 템플릿

| 유형 | 저장 경로 | 템플릿 |
|------|-----------|--------|
| 영구노트 | `3.Permanent_Notes/{category}/` | `templates/Permanent_Note Template.md` |
| MOC | `3.Permanent_Notes/1.MOC/` | `templates/MOC Template.md` |
| 리소스 | `6.Resources/{category}/` | `templates/Resources Template.md` |

**category 결정 규칙**: 노트 주제가 개발(프로그래밍, 소프트웨어, 기술)이면 `개발/`, 그 외는 `비개발/`

## Frontmatter 스키마

실제 스키마는 템플릿 파일이 source of truth. 템플릿 참조:
- 영구노트: `templates/Permanent_Note Template.md`
- 리소스: `templates/Resources Template.md`
- MOC: `templates/MOC Template.md`

**공통 날짜 형식**: `YYYY-MM-DD` (예: `2026-03-07`)

**영구노트 핵심 필드**:
- `tags`: 항상 `영구노트` 포함
- `category`: `개발` 또는 `비개발`
- `mocs`: 연결된 MOC 파일명 목록

**리소스 핵심 필드**:
- `category`: `개발` 또는 `비개발`
- `topics`: 주제 태그 목록 (볼트 일관성을 위해 기존 topics 조회 후 재사용)

**MOC 핵심 필드**:
- `category`: 반드시 `MOC` 로 설정

## 볼트 운영 원칙

상세 원칙은 `0.Guide/0.MOC guide.md` 참조.

핵심 요약:
- MOC는 **3.Permanent_Notes에만** 사용 (리소스에는 사용하지 않음)
- 리소스는 `topics` 기반 Base 필터링으로 탐색
- 리소스에서 통찰이 생기면 → 영구노트로 승격 후 MOC에 연결

## 동적 데이터 조회

정적 registry 없음. 필요 시 실시간 조회:

```bash
# MOC 목록 조회
obsidian search query="category: MOC"

# 기존 topics 목록 조회
obsidian property:get name="topics"

# 특정 태그 노트 검색
obsidian search query="tag:영구노트"
```
