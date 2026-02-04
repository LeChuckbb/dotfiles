# /aug:red - 실패하는 테스트 작성 (RED 상태)

TDD 사이클의 첫 번째 단계: 실패하는 테스트를 작성합니다.

## 워크플로우

1. **Git 상태 확인**
   - 현재 feature 브랜치인지 확인 (main/master/develop 금지)
   - Working tree가 clean한지 확인

2. **테스트할 동작 확인**
   - 사용자에게 어떤 동작을 테스트할지 물어봄
   - 단일하고 원자적인 동작이어야 함 (한 번에 하나만!)

3. **테스트 파일 식별/생성**
   - 프로젝트 규칙에 따라 테스트 파일 찾기 또는 생성
   - React Native: `__tests__/` 또는 `.test.tsx`

4. **최소한의 실패 테스트 작성**
   - **단 하나의** 테스트 케이스만 작성
   - 명확한 테스트 이름 사용: `should[동작]_when[조건]_given[상황]`
   - 명확한 assertion 포함

5. **테스트 실행 - 실패 확인**
   - `npm test` 실행
   - 테스트가 실패하는지 검증 (RED 상태)
   - 실패 원인 설명

6. **다음 단계 제안**
   - `/aug:green` 명령으로 구현 시작

## 제약 조건

- ❌ 여러 테스트 케이스 작성 금지 (한 번에 하나만!)
- ❌ 구현 코드 작성 금지 (테스트만!)
- ✅ 테스트가 실제로 실패하는지 반드시 확인
- ✅ 테스트 이름으로 의도를 명확히 표현

## 예시

```typescript
// ✅ 좋은 예: 단일하고 명확한 테스트
describe('calculateTax', () => {
  it('should return 11 when input is 10 with 10% tax rate', () => {
    expect(calculateTax(10, 0.1)).toBe(11);
  });
});

// ❌ 나쁜 예: 여러 테스트 한번에
describe('calculateTax', () => {
  it('should calculate tax', () => {
    expect(calculateTax(10, 0.1)).toBe(11);
    expect(calculateTax(100, 0.2)).toBe(120); // 이건 다음 사이클!
  });
});
```

## Kent Beck의 원칙

> "가장 단순한 실패 테스트부터 시작하라"

- 테스트는 작고 구체적일수록 좋음
- 실패 메시지가 명확하고 유용해야 함
- 테스트를 먼저 작성하면 API 설계가 자연스럽게 됨
