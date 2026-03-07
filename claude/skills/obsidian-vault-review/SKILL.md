---
name: obsidian-vault-review
description: Use when asked to analyze vault health, review MOC structure, find connection opportunities, or run weekly/monthly vault reviews. Triggers on requests like "볼트 리뷰", "MOC 분석", "연결 제안", "주간 리뷰", "월간 리뷰", or "건강도".
---

# Obsidian Vault Review

**REQUIRED CONTEXT:** obsidian-vault-context (볼트 구조, 경로, 스키마)

## 워크플로우 선택

```
요청 유형?
├─ MOC 리뷰 → A
├─ 볼트 건강도 체크 → B
├─ 연결 분석 → C
└─ 주기적 리뷰 → D (주간/월간)
```

---

## A. MOC 리뷰

1. **MOC 목록 조회**:
   ```bash
   obsidian search query="category: MOC"
   ```

2. **각 MOC별 분석**:
   - MOC에 링크된 영구노트 목록 파악
   - 해당 주제 관련 영구노트 중 MOC에 빠진 것 탐색:
     ```bash
     obsidian search query="<MOC 주제 키워드> tag:영구노트"
     ```
   - 섹션 구조 검토 → 재구성 제안

3. **MOC 간 교차 연결 분석**:
   - 여러 MOC에 속하는 노트 식별 (다리 노트 후보)
   - 연결이 약한 MOC 쌍 발견

4. **개선 제안** 목록 출력 → 사용자 승인 후 실행

---

## B. 볼트 건강도 체크

```bash
# 유형별 노트 수
obsidian search query="tag:영구노트" total
obsidian search query="category: MOC" total
obsidian search query="path:6.Resources" total

# 최근 30일 활동
obsidian search query="updated_at:>2026-02-07" total

# Inbox 체류 노트
obsidian search query="path:0.Inbox" total
```

**보고서 형식**:
```
## 볼트 건강도 — YYYY-MM-DD

### 통계
- 영구노트: N개 | MOC: N개 | 리소스: N개
- 최근 30일 업데이트: N개
- Inbox 미처리: N개

### 구조적 문제
- 고아 노트: N개 (→ obsidian-vault-audit 실행 권장)
- Frontmatter 불일치: N개
- 빈 노트: N개

### 방치 노트 Top 5
(updated_at 기준 오래된 순)
```

---

## C. 연결 분석

1. **클러스터 파악**: `mocs` / `topics` 기반 노트 그룹 시각화 제안

2. **약한 연결 영역 발견**:
   - 고립된 소규모 클러스터 (노트 3개 이하)
   - 두 클러스터 사이에 걸쳐 있는 노트 (다리 노트 후보)

3. **교차 연결 제안**:
   - 서로 다른 MOC의 노트가 공통 주제를 다루는 경우
   - 리소스 → 관련 영구노트 연결 누락

4. **다리 노트 후보 제안**: 두 개 이상의 분리된 클러스터를 연결할 수 있는 노트

---

## D. 주기적 리뷰 루틴

### 주간 리뷰

```bash
# 이번 주 신규/수정 노트
obsidian search query="updated_at:>YYYY-MM-DD" limit=50

# Inbox 현황
obsidian search query="path:1.Fleeting_Notes"
obsidian search query="path:0.Inbox"
```

점검 항목:
- [ ] 이번 주 신규 영구노트 확인
- [ ] Fleeting Notes 처리 (영구노트 승격 또는 삭제)
- [ ] 0.Inbox 미분류 노트 처리
- [ ] 수정된 MOC 검토

### 월간 리뷰

주간 리뷰 + 추가 항목:
- 볼트 건강도 체크 (B 실행)
- MOC 리뷰 (A 실행)
- Topics 점검 (obsidian-vault-audit C 실행)
- 방치 노트 Top 10 검토 (업데이트 또는 아카이브 결정)

---

## 공통 규칙

- 모든 수정 제안은 사용자 승인 후 실행
- 분석 결과는 항상 구조화된 보고서 형식으로 출력
- 대규모 변경 시 obsidian-vault-audit과 병행 실행 권장
