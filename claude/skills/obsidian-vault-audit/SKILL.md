---
name: obsidian-vault-audit
description: Use when asked to audit, clean up, validate, or fix vault data quality — orphaned notes, frontmatter inconsistencies, duplicate topics, placeholder values, or category mismatches.
---

# Obsidian Vault Audit

**REQUIRED CONTEXT:** obsidian-vault-context (볼트 구조, 경로, 스키마)

## 워크플로우 선택

```
요청 유형?
├─ 고아 노트 탐색 → A
├─ Frontmatter 검증 → B
└─ Topics 관리 → C
```

---

## A. 고아 노트 탐색

backlinks가 없고 MOC에도 포함되지 않은 영구노트를 식별한다.

1. **백링크 없는 노트 조회**:
   ```bash
   obsidian search query="tag:영구노트" limit=200
   ```
   각 노트에 대해: `obsidian backlinks file="<노트명>" total`

2. **MOC 포함 여부 확인**: backlinks 0인 노트가 어느 MOC에도 없는지 확인

3. **분류 보고**:
   - 완전 고아 (backlinks=0, MOC 없음)
   - 약한 연결 (backlinks=1, MOC 없음)
   - MOC만 있음 (다른 노트 링크 없음)

4. **연결 제안**: 관련 MOC 또는 영구노트와의 연결 제안 (사용자 승인 후 실행)

---

## B. Frontmatter 일관성 체크

### 영구노트 검증 항목
- `tags`에 `영구노트` 포함 여부
- `category` 값이 `개발` 또는 `비개발`인지
- `mocs`에 나열된 MOC 파일이 실제 존재하는지
- `publish_date`, `updated_at` 형식이 `YYYY-MM-DD`인지

### 리소스 검증 항목
- `category` 존재 및 유효값 여부
- `topics` 존재 여부 (빈 값 포함)
- 날짜 형식

### MOC 검증 항목
- `category: MOC` 설정 여부

### 일괄 수정

불일치 목록 제시 후 사용자 승인 시:
```bash
obsidian property:set name="category" value="개발" file="<노트명>"
obsidian property:set name="updated_at" value="2026-03-07" file="<노트명>"
```

---

## C. Topics 관리

### 전체 topics 수집 및 분석

```bash
obsidian property:get name="topics"
```

분석 항목:
1. **빈도 분석**: 각 topic 사용 횟수 집계
2. **유사/중복 탐지**:
   - 대소문자 차이: `OOP` vs `oop`
   - 표기 불일치: `Next.js` vs `NextJS` vs `Nextjs`
   - 복수/단수: `design-pattern` vs `design-patterns`
3. **placeholder 식별**: `"Related"`, `"TODO"`, `"미분류"` 등
4. **category↔topics 불일치**: `category: 비개발` 인데 `topics`에 개발 관련 값

### 정규화 실행

사용자 승인 후 일괄 수정:
```bash
# 예: "OOP" → "oop" 통일
obsidian property:set name="topics" value='["oop", "design-pattern"]' file="<노트명>"
```

볼트 자체가 source of truth — 별도 registry 파일 없음.

---

## 감사 보고서 형식

```
## 볼트 감사 결과 — YYYY-MM-DD

### 고아 노트
- 완전 고아: N개
- 약한 연결: N개

### Frontmatter 불일치
- 영구노트: N개 이슈
- 리소스: N개 이슈
- MOC: N개 이슈

### Topics 이슈
- 중복/유사: N쌍
- Placeholder: N개
- 불일치: N개

### 권장 조치
1. ...
2. ...
```
