# /aug:status - TDD 상태 확인

현재 TDD 사이클의 어느 단계에 있는지 확인하고 다음 행동을 제안합니다.

## 워크플로우

1. **테스트 실행**
   - `npm test` 실행
   - 결과 분석 (통과/실패/없음)

2. **Git 상태 확인**
   - `git status` 실행
   - 변경사항 있는지 확인
   - 현재 브랜치 확인

3. **현재 상태 판단**

   **🔴 RED (테스트 실패)**
   - 테스트가 실패 중
   - 다음 행동: `/aug:green` (구현)

   **🟢 GREEN (테스트 통과, 변경사항 있음)**
   - 모든 테스트 통과
   - Uncommitted 변경사항 있음
   - 다음 행동:
     - `/aug:refactor` (정리 필요 시)
     - `/aug:commit-structural` (리팩토링만 있으면)
     - `/aug:commit-behavioral` (기능 추가/수정 있으면)

   **⚪ CLEAN (변경사항 없음)**
   - 모든 테스트 통과
   - Working tree clean
   - 다음 행동: `/aug:red` (새 테스트)

   **⚠️ MIXED (구조적 + 행동적 변경 혼합)**
   - 변경사항에 구조적/행동적 변경이 섞임
   - **에러!** 반드시 분리 필요
   - 다음 행동: 변경사항을 분리하여 각각 커밋

4. **브랜치 검증**
   - Feature 브랜치인지 확인
   - main/master/develop에서 작업 중이면 경고

5. **마지막 커밋 메시지 표시**
   - `git log -1 --oneline`
   - 최근 작업 맥락 파악

6. **다음 행동 추천**
   - 현재 상태에 맞는 명령 제안
   - 예상 워크플로우 안내

## 출력 예시

### 예시 1: RED 상태

```
🔴 RED - 테스트 실패 중

테스트 결과:
  ✓ 10 passing
  ✗ 1 failing

실패한 테스트:
  ✗ should calculate 10% tax on subtotal
    Expected: 11, Received: undefined

Git 상태:
  브랜치: feature/add-tax-calculation
  변경사항: src/utils/tax.ts (수정됨)

다음 행동:
  → /aug:green
  테스트를 통과시키는 최소 구현을 작성하세요.
```

### 예시 2: GREEN 상태 (변경사항 있음)

```
🟢 GREEN - 모든 테스트 통과

테스트 결과:
  ✓ 11 passing
  ✗ 0 failing

Git 상태:
  브랜치: feature/add-tax-calculation
  변경사항:
    M test/tax.test.ts (새 테스트)
    M src/utils/tax.ts (구현)

마지막 커밋:
  abc1234 refactor: extract calculateTax method

다음 행동 옵션:
  1. /aug:refactor - 코드 정리가 필요하다면
  2. /aug:commit-behavioral - 기능 추가 커밋

변경사항 분석:
  - 새 테스트 있음 ✓
  - 구현 코드 있음 ✓
  → 행동적 변경으로 판단됨
  → /aug:commit-behavioral 추천
```

### 예시 3: CLEAN 상태

```
⚪ CLEAN - 작업 준비 완료

테스트 결과:
  ✓ 11 passing
  ✗ 0 failing

Git 상태:
  브랜치: feature/add-tax-calculation
  변경사항: 없음 (working tree clean)

마지막 커밋:
  def5678 feat: add tax calculation

다음 행동:
  → /aug:red
  다음 기능/테스트 케이스를 작성하세요.

  또는:
  → git push
  현재 기능이 완료되었으면 푸시하세요.
```

### 예시 4: MIXED 상태 (에러!)

```
⚠️ MIXED - 변경사항 분리 필요!

테스트 결과:
  ✓ 11 passing
  ✗ 0 failing

Git 상태:
  브랜치: feature/add-tax-calculation
  변경사항:
    M test/tax.test.ts (새 테스트) ← 행동적
    M src/utils/tax.ts (구현) ← 행동적
    M src/order.ts (메서드 추출) ← 구조적

⚠️ 문제: 구조적 변경과 행동적 변경이 섞여있습니다!

해결 방법:
  1. git add src/order.ts
  2. /aug:commit-structural
  3. git add test/tax.test.ts src/utils/tax.ts
  4. /aug:commit-behavioral

또는:
  git add -p로 선택적 스테이징
```

### 예시 5: 잘못된 브랜치 경고

```
⚠️ 브랜치 경고!

현재 브랜치: main

경고: main 브랜치에서 직접 작업 중입니다!
권장: feature 브랜치를 만드세요.

추천 명령:
  git checkout -b feature/your-feature-name
```

## 상태 전환 다이어그램

```
CLEAN ──/aug:red──> RED ──/aug:green──> GREEN
  ↑                                        │
  │                                        │
  └──────── /aug:commit-* ←───────────────┘
                           ↑
                           │
                    /aug:refactor
                    (still GREEN)
```

## 언제 사용하나?

- 작업 시작할 때: 어디서부터 해야 할지 모를 때
- 헷갈릴 때: 지금 뭘 해야 하는지 확실하지 않을 때
- 에러 후: 뭔가 잘못됐는데 상태 파악 필요할 때
- 인수인계 후: 다른 사람이 작업한 코드 이어받을 때
- 컨텍스트 스위칭 후: 다른 일 하다가 돌아왔을 때

## 자동 진단

이 명령은 다음을 자동으로 확인합니다:
- ✓ 테스트 실행 가능한가?
- ✓ 테스트 통과/실패 상태
- ✓ Git working tree 상태
- ✓ 변경사항 분류 (구조적/행동적)
- ✓ 올바른 브랜치인가?
- ✓ 다음 적절한 행동

**헷갈리면 항상 `/aug:status`부터!**
