# /aug:commit-structural - 구조적 변경 커밋

구조적 변경(리팩토링)만 포함된 커밋을 생성합니다.

## 워크플로우

1. **모든 테스트 통과 확인**
   - `npm test` 실행
   - 실패하면 커밋 불가

2. **Git diff 검토**
   - `git diff` 실행하여 변경사항 확인
   - 변경 내용 분석

3. **구조적 변경만 있는지 검증**
   - ✅ **허용**: 이름 변경, 메서드 추출, 코드 이동, 중복 제거
   - ❌ **금지**: 새 기능, 버그 수정, 동작 변경
   - ❌ **금지**: 새 테스트 추가 (테스트 이름 변경만 OK)

4. **행동적 변경 발견 시**
   - **즉시 중단!**
   - 변경사항을 분리하라고 안내
   - 구조적 변경을 먼저 커밋하고, 행동적 변경은 별도 커밋

5. **커밋 메시지 생성**
   - 형식: `refactor: [구체적인 리팩토링 패턴]`
   - 본문에 "구조적 변경만 - 동작 변경 없음" 명시

6. **스테이징 및 커밋**
   - `git add .`
   - `git commit -m "..."`

7. **다음 단계 제안**
   - 추가 리팩토링: `/aug:refactor`
   - 새 기능: `/aug:red`

## 커밋 메시지 예시

### ✅ 좋은 예

```bash
refactor: extract calculateTax method from processOrder

구조적 변경만 - 동작 변경 없음.
모든 테스트 통과.
```

```bash
refactor: rename calc to calculatePriceWithTax for clarity

구조적 변경만 - 동작 변경 없음.
변수명을 더 명확하게 변경.
```

```bash
refactor: remove duplicate base price calculation

구조적 변경만 - 동작 변경 없음.
calculateBasePrice 함수로 중복 제거.
```

```bash
refactor: move tax calculation logic to utils/tax.ts

구조적 변경만 - 동작 변경 없음.
파일 구조 개선.
```

### ❌ 나쁜 예

```bash
# 불명확
refactor: update code

# 동작 변경 포함
refactor: extract method and fix bug

# 기능 추가 포함
refactor: add validation and extract method

# 구조적 변경인지 불명확
refactor: improve performance
```

## 검증 체크리스트

커밋 전 확인:
- [ ] 모든 테스트 통과?
- [ ] 린터 통과?
- [ ] 새 기능 없음?
- [ ] 버그 수정 없음?
- [ ] 테스트 코드 변경 없음? (이름 변경만 OK)
- [ ] 커밋 메시지에 "구조적 변경" 명시?
- [ ] 동작이 이전과 100% 동일?

## Kent Beck의 원칙

> "구조적 변경과 행동적 변경을 절대 섞지 마라"

**왜 분리하나?**
- 리뷰 용이: 구조적 변경은 diff만 봐도 안전함을 확인 가능
- 되돌리기 쉬움: 문제 발생 시 어느 커밋이 원인인지 명확
- 이해 용이: 각 커밋의 목적이 명확
- 충돌 최소화: Merge conflict 발생 시 대응 쉬움

## 혼합 변경 발견 시

```bash
# 현재 변경사항에 구조적 + 행동적 변경이 섞여있다면

# 1. 현재 상태 저장
git stash

# 2. 구조적 변경만 먼저 적용
# (수동으로 구조적 변경만 다시 수행)
git add .
git commit -m "refactor: ..."

# 3. 행동적 변경 적용
git stash pop
# (필요하면 충돌 해결)
git add .
git commit -m "feat: ..."

# 또는 git add -p로 선택적 스테이징
git add -p
# 구조적 변경만 선택해서 스테이징
git commit -m "refactor: ..."
# 남은 행동적 변경 스테이징
git add .
git commit -m "feat: ..."
```

## Husky pre-commit hook이 검증함

- 모든 테스트 통과하지 않으면 커밋 차단
- 린터 에러 있으면 커밋 차단
- commit-msg hook이 메시지 형식 검증
