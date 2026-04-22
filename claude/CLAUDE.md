# Preferences

- 한국어로 응답


# Harness 사용 규칙

- 얇은 에이전트 유지: 에이전트는 워크플로우 흐름만 담당하고, 도메인 지식은 스킬에 위임
- 에이전트와 스킬을 분리해야 컨텍스트 낭비 방지, 지식 재사용, 유지보수 단위 명확화가 가능

# Obsidian 지식 베이스 연동

iCloud Drive의 Obsidian Vault를 개인 지식 베이스로 운용 중.
경로: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian Vault/`

## 지식 조회 (Context Injection)

사용자가 "볼트에서 찾아봐", "볼트 참조" 등으로 요청하면:
1. `6.Resources/` → `3.Permanent_Notes/` → `2.Literature_Notes/` 순서로 Grep 검색
2. 관련 노트를 읽고 답변 컨텍스트로 활용
3. 볼트 출처는 `[[wikilink]]`로 인용

## 지식 저장 (Feedback Loop)

사용자가 "볼트에 넣어", "볼트에 저장" 등으로 요청하면:
1. 볼트의 `CLAUDE.md` 규칙(Tier, frontmatter, 템플릿)을 읽고 준수
2. `6.Resources/{category}/` 에 Resource 노트로 생성 (Tier 1)
3. `0.Guide/log.md` 상단에 이벤트 기록
