---
name: prd-writer
category: documentation
complexity: advanced
---

Generate Product Requirements Documents structured for Confluence documentation and Jira mapping.

## Activation Triggers

- User requests: "PRD 작성", "write a PRD", "product requirements", "requirement document"
- Commands: `/prd`, `--prd`
- Mentions: "Jira structure", "Confluence documentation", "Epic and Stories"

## Process

### 1. Discovery (Brief)

Ask essential questions:
- Project name and goal?
- Target users and roles?
- Core features?
- Technical constraints?

### 2. Generate PRD

Create PRD following the template structure below.

## PRD Template Structure

```markdown
# [Project Name] PRD

> **📌 Sub-task 생성 가이드**
> 이 PRD는 **요구사항(What)**에 집중하며, **구현 방법(How)**은 개발자 판단에 맡깁니다.

---

## 🔐 사용자 권한 정의

### ✅ [Role 1] 가능 기능
- **[Feature]**: [Actions allowed]

### ❌ [Role 1] 불가능 기능 ([Role 2] 필요)
- **[Feature]**: [Actions restricted]

### 🔑 권한 체크
- 권한 없이 접근 시 **401 Unauthorized** 반환
- 각 Story에 권한 요구사항 명시

---

# 1⃣ [Epic Name]

### 📘 Story 1.1: [Actor]는 [action]할 수 있다

**Acceptance Criteria:**
- [ ] [Specific testable requirement]
- [ ] [Permission: 로그인 필요/불필요]
- [ ] [Error handling: 401/403/404]
- [ ] [Validation rules]
- [ ] [Success criteria]

### 📘 Story 1.2: [Actor]는 [action]할 수 있다

**Acceptance Criteria:**
- [ ] [Criteria...]

---

# 2⃣ [Epic Name]

### 📘 Story 2.1: [Actor]는 [action]할 수 있다

**Acceptance Criteria:**
- [ ] [Criteria...]

---

## 🔧 시스템 요구사항

### Technical Task: [Task Name]

**요구사항:**
- [ ] [Technical requirement]
- [ ] [Configuration details]

**검증:**
- [ ] [Verification criteria]

---

## ✅ 완료 조건

### 기능 완료
- [ ] 모든 User Story의 Acceptance Criteria 통과
- [ ] E2E 시나리오: [Critical user journeys]

### 기술 요구사항
- [ ] [Technical requirements]
- [ ] [API standards]

---
```

## Jira/Confluence Mapping

| Jira Level | PRD Element | Example |
|------------|-------------|---------|
| **Epic** | Top-level sections (# 1⃣, # 2⃣, # 3⃣) | "1⃣ Todo 생성 및 조회" |
| **Story** | 📘 User Stories | "User can login with OAuth" |
| **Sub-task** | Implementation details | "Create /auth/login endpoint" (개발자가 생성) |
| **Task** | 🔧 Technical Tasks | "Setup OAuth provider" |

**Confluence**: PRD → Confluence page with checkboxes for progress tracking

**Jira**:
1. Create Epic per top-level section (# 1⃣, # 2⃣, etc.)
2. Create Stories from 📘 Stories
3. Developers create Sub-tasks during implementation
4. Create Tasks from 🔧 Technical Tasks

## User Story Format

**Pattern**: `[Actor]는 [action]할 수 있다` (Korean) or `[Actor] can [action]` (English)

**Acceptance Criteria Must Include**:
- [ ] Functional requirement (what should happen)
- [ ] Permission (로그인 필요/불필요)
- [ ] Error handling (401, 403, 404, 400)
- [ ] Validation rules
- [ ] Success criteria
- [ ] Performance targets (when relevant)

**Example**:

```markdown
### 📘 Story 1.3: User can add items to cart

**Acceptance Criteria:**
- [ ] User can select product and quantity (로그인 필요)
- [ ] Guest users receive 401 error
- [ ] Quantity must be positive integer (400 error if invalid)
- [ ] Cannot exceed stock (400 error: "Insufficient stock")
- [ ] If item exists in cart, increment quantity
- [ ] Response time < 500ms
```

## Technical Task Format

Use for infrastructure, cross-cutting concerns, documentation.

```markdown
### Technical Task: [Task Name]

**요구사항:**
- [ ] [Implementation requirement]
- [ ] [Configuration]
- [ ] [Dependencies]

**검증:**
- [ ] [How to verify completion]
```

## Best Practices

1. **Be Specific**: Include error codes, response times, validation rules
2. **Separate What from How**: Requirements, not implementation
3. **Define Permissions**: Who can do this? What error if unauthorized?
4. **Use Checkboxes**: Enable progress tracking in Confluence/Jira
5. **Think User Journeys**: Group stories that form complete workflows

## Language

- Generate PRD in user's language (Korean/English)
- User Story format adapts: "[Actor]는 [action]할 수 있다" (KR) or "[Actor] can [action]" (EN)
- Technical terms may remain in English (OAuth, JWT, API)

## Output

When generating PRD:
1. Ask discovery questions (unless comprehensive description provided)
2. Generate complete PRD with template structure
3. Use emoji hierarchy: 📌 (header), 1⃣ (epic), 📘 (story), 🔧 (task), ✅ (completion)
4. Include checkboxes for all criteria
5. Specify permissions and error codes
6. Provide Jira/Confluence usage guidance
