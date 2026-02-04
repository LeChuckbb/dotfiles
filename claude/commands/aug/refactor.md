# /aug:refactor - 구조 개선 (구조적 변경만)

TDD 사이클의 세 번째 단계: 동작을 변경하지 않고 코드 구조만 개선합니다.

## 워크플로우

1. **GREEN 상태 확인**
   - 모든 테스트가 통과하는지 확인
   - GREEN 상태가 아니면 리팩토링 금지!

2. **변경 전 테스트 실행 (베이스라인)**
   - `npm test` 실행하여 현재 상태 기록
   - 이게 비교 기준이 됨

3. **구조 개선 사항 파악**
   - 사용자에게 어떤 개선을 할지 물어봄
   - 가능한 개선:
     - 메서드/함수 추출 (Extract Method)
     - 변수/함수명 변경 (Rename)
     - 코드 이동 (Move)
     - 중복 제거 (Remove Duplication)
     - 가독성 개선 (Improve Readability)

4. **한 번에 하나의 리팩토링만 수행**
   - 단일 리팩토링 패턴 적용
   - 여러 개 섞지 않기

5. **변경 후 테스트 실행 (검증)**
   - `npm test` 다시 실행
   - 테스트가 여전히 통과하는지 확인
   - **실패하면 즉시 되돌리기!**

6. **다음 단계 제안**
   - 추가 리팩토링: `/aug:refactor` 반복
   - 커밋: `/aug:commit-structural`
   - 새 기능: `/aug:red`

## 제약 조건

- ❌ 동작 변경 절대 금지 (테스트 변경 없음)
- ❌ 여러 리팩토링 동시에 하지 않기
- ✅ 항상 테스트로 검증
- ✅ 테스트 실패하면 무조건 되돌리기
- ✅ 리팩토링 = 구조만, 동작 변경 아님

## 리팩토링 패턴 예시

### 1. Extract Method (메서드 추출)

```typescript
// Before
function processOrder(order: Order) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  console.log(`Order total: ${total}`);
  return total;
}

// After: 계산 로직 추출
function calculateTotal(order: Order): number {
  const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  return subtotal + tax;
}

function processOrder(order: Order) {
  const total = calculateTotal(order);
  console.log(`Order total: ${total}`);
  return total;
}
```

### 2. Rename (명확한 이름으로 변경)

```typescript
// Before
function calc(a: number, b: number): number {
  return a * (1 + b);
}

// After
function calculatePriceWithTax(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
```

### 3. Remove Duplication (중복 제거)

```typescript
// Before
function processPremiumUser(user: User) {
  const basePrice = user.usage * 10;
  const discount = basePrice * 0.2;
  return basePrice - discount;
}

function processRegularUser(user: User) {
  const basePrice = user.usage * 10; // 중복!
  return basePrice;
}

// After
function calculateBasePrice(usage: number): number {
  return usage * 10;
}

function processPremiumUser(user: User) {
  const basePrice = calculateBasePrice(user.usage);
  const discount = basePrice * 0.2;
  return basePrice - discount;
}

function processRegularUser(user: User) {
  return calculateBasePrice(user.usage);
}
```

### 4. Extract Constant (상수 추출)

```typescript
// Before
function calculateTax(price: number): number {
  return price * 0.1;
}

// After
const TAX_RATE = 0.1;

function calculateTax(price: number): number {
  return price * TAX_RATE;
}
```

## Kent Beck의 원칙

> "테스트가 통과할 때만 리팩토링하라 (GREEN 단계에서)"

- 리팩토링은 동작을 변경하지 않는다
- 테스트가 변경을 검증한다
- 작은 단계로 진행하라
- 각 단계마다 테스트 실행

## 테스트 실패 시 대응

```bash
# 리팩토링 후 테스트 실패?
git diff                    # 무엇을 바꿨는지 확인
git checkout -- .           # 되돌리기
# 또는
git stash                   # 임시 저장

# 그리고 다시 생각:
# "이게 정말 구조만 바꾼 건가?"
# "동작이 바뀐 건 아닌가?"
```

## 언제 멈추나?

리팩토링은 끝이 없습니다. 다음 경우에 멈추세요:
1. 코드가 충분히 명확해졌을 때
2. 다음 기능 추가가 쉬워 보일 때
3. 중복이 제거되었을 때
4. 시간이 너무 오래 걸릴 때 (나중에 하기)

**완벽을 추구하지 마세요. 개선만으로 충분합니다.**
