# Preferences

- 한국어로 응답

# Tidy First (Kent Beck)

구조적 변경과 행동적 변경을 절대 같은 커밋에 섞지 말 것.

- **구조적(STRUCTURAL)**: 동작 변경 없이 코드 재배치 (이름 변경, 메서드 추출, 코드 이동)
- **행동적(BEHAVIORAL)**: 실제 기능 추가 또는 수정
- 둘 다 필요하면 구조적 변경을 먼저. 전후로 테스트 실행하여 동작 불변 검증.

## 커밋 규칙

모든 테스트 통과 + 린터 경고 해결 + 단일 논리적 단위일 때만 커밋.
커밋 메시지에 structural/behavioral 명시. 작고 빈번한 커밋 선호.

## Commands

- `/aug:refactor` — 구조 개선 (구조적 변경만)
- `/aug:commit-structural` — 구조적 변경 커밋
- `/aug:commit-behavioral` — 행동적 변경 커밋
- `/aug:status` — TDD 상태 확인
- TDD 사이클은 Superpowers `superpowers:test-driven-development` 스킬 사용
