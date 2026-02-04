# /aug:commit-behavioral - 행동적 변경 커밋

행동적 변경(기능 추가/수정)을 포함한 커밋을 생성합니다.

## 워크플로우

1. **모든 테스트 통과 확인**
   - `npm test` 실행 (새 테스트 포함)
   - 실패하면 커밋 불가

2. **Git diff 검토**
   - `git diff` 실행하여 변경사항 확인
   - 테스트와 구현이 모두 포함되었는지 확인

3. **행동적 변경 검증**
   - ✅ **필수**: 새 테스트 또는 수정된 테스트
   - ✅ **필수**: 테스트를 통과시키는 구현
   - ❌ **금지**: 구조적 변경만 있는 경우
   - ❌ **금지**: 테스트 없이 기능 추가

4. **구조적 변경이 섞여있으면**
   - **즉시 중단!**
   - 구조적 변경을 먼저 `/aug:commit-structural`로 커밋
   - 그 다음 행동적 변경만 커밋

5. **커밋 메시지 생성**
   - 형식: `feat:` 또는 `fix:`
   - 본문에 추가된 테스트 명시
   - 구현 내용 간단히 설명

6. **스테이징 및 커밋**
   - `git add .`
   - `git commit -m "..."`

7. **다음 단계 제안**
   - 추가 기능: `/aug:red`
   - 리팩토링: `/aug:refactor`

## 커밋 메시지 예시

### ✅ 좋은 예

```bash
feat: add tax calculation to checkout

- Added test: should calculate 10% tax on subtotal
- Implementation: calculateTax function in utils/tax.ts

행동적 변경 - 테스트로 검증됨.
```

```bash
fix: correct rounding error in price calculation

- Added test: should round to 2 decimal places
- Fixed: use Math.round(price * 100) / 100

버그 수정 - 테스트로 검증됨.
```

```bash
feat: implement VIP user discount

- Added tests:
  * should apply 20% discount for VIP users
  * should not apply discount for regular users
- Implementation: discount logic in processOrder

행동적 변경 - 테스트로 검증됨.
```

### ❌ 나쁜 예

```bash
# 테스트 언급 없음
feat: add tax calculation

# 구조적 변경 혼합
feat: add tax and refactor calculation logic

# 불명확한 메시지
feat: update order processing

# 테스트 없이 기능 추가
feat: add validation
(테스트 코드가 diff에 없음)
```

## 검증 체크리스트

커밋 전 확인:
- [ ] 새 테스트 또는 수정된 테스트 있음?
- [ ] 모든 테스트 통과?
- [ ] 린터 통과?
- [ ] 구조적 변경이 섞이지 않았음?
- [ ] 커밋 메시지에 테스트 내용 명시?
- [ ] feat/fix 중 적절한 타입 사용?

## feat vs fix 구분

**feat (기능 추가)**:
- 새로운 기능
- 기존 기능의 확장
- 사용자에게 보이는 변경

**fix (버그 수정)**:
- 잘못된 동작 수정
- 의도와 다르게 작동하던 것을 바로잡음
- 엣지 케이스 처리

```bash
# feat 예시
feat: add email validation
feat: implement password reset
feat: support dark mode

# fix 예시
fix: prevent negative prices
fix: correct tax calculation rounding
fix: handle empty user list
```

## Kent Beck의 원칙

> "행동적 변경은 반드시 테스트로 검증하라"

**왜 테스트가 필수인가?**
- 기능이 의도대로 작동함을 증명
- 미래의 리팩토링 시 안전망
- 회귀(regression) 방지
- 명세(specification) 역할

## TDD Red-Green 사이클 완료

```bash
# 이 커밋은 다음 사이클의 결과:
/aug:red                      # 테스트 작성 (실패)
/aug:green                    # 구현 (통과)
/aug:refactor (선택)          # 리팩토링
/aug:commit-behavioral        # 이 커밋!

# 커밋 메시지가 사이클 전체를 요약:
# - 어떤 테스트를 추가했는가 (Red)
# - 어떻게 구현했는가 (Green)
# - (필요시) 어떻게 개선했는가 (Refactor)
```

## 구조적 변경이 섞인 경우

```bash
# 잘못된 상황: RED → GREEN → REFACTOR 후 한 번에 커밋하려 함
git status
# 변경사항:
# - test/order.test.ts (새 테스트)
# - src/order.ts (구현)
# - src/utils/tax.ts (리팩토링으로 추출한 함수)

# 올바른 처리:
# 1. 구조적 변경만 먼저 커밋
git add src/utils/tax.ts
git commit -m "refactor: extract tax calculation to utils"

# 2. 행동적 변경 커밋
git add test/order.test.ts src/order.ts
git commit -m "feat: add tax calculation to orders"

# 또는 처음부터:
/aug:refactor                 # 리팩토링
/aug:commit-structural        # 구조적 변경 커밋
/aug:red                      # 새 테스트
/aug:green                    # 구현
/aug:commit-behavioral        # 행동적 변경 커밋
```

## Husky hooks가 검증함

- pre-commit: 모든 테스트 통과 확인
- commit-msg: "test" 키워드 확인 (경고)
- 테스트 없는 feat/fix는 의심스러움!
