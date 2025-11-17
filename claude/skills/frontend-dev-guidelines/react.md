# useEffect가 필요하지 않은 상황

## 요약

useEffect 사용을 가능한 자제해 줘. useEffect는 코드의 가독성을 심하게 저하시켜.

## useEffect를 사용하지 말아야 하는 경우

1. 렌더링을 위한 데이터 변환

props나 state에서 계산 가능한 값은 Effect 없이 렌더링 중에 계산
불필요한 state 변수 제거하고 직접 계산

2. 비용이 큰 계산

Effect 대신 useMemo로 캐싱
의존성이 변경되지 않으면 재계산 건너뛰기

3. state 초기화/리셋

Effect 대신 key prop 사용
key가 바뀌면 컴포넌트 전체가 자동으로 리셋됨

4. 사용자 이벤트 처리

버튼 클릭 같은 이벤트는 Effect가 아닌 이벤트 핸들러에서 처리
Effect는 "왜" 실행되는지 알 수 없지만, 이벤트 핸들러는 명확함

5. 부모에게 state 변경 알리기

Effect 대신 같은 이벤트 핸들러에서 부모 state도 함께 업데이트
또는 state 끌어올리기(lift state up) 사용

6. Effect 체이닝

여러 Effect가 서로를 트리거하면 매우 비효율적
렌더링 중 계산하거나 이벤트 핸들러에서 한 번에 처리

## useEffect가 필요한 경우

외부 시스템과 동기화할 때만 Effect 사용 (네트워크 요청, 브라우저 API, 써드파티 라이브러리 등)
핵심 원칙: 렌더링 중에 계산 가능하면 Effect 불필요. 특정 이벤트 때문이면 이벤트 핸들러 사용.
