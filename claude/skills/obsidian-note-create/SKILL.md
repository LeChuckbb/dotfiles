---
name: obsidian-note-create
description: Use when creating permanent notes, resources, or MOCs in the Obsidian vault, or when promoting a resource to a permanent note. Triggers on requests like "노트 만들어줘", "리소스 추가", "MOC 생성", or "승격".
---

# Obsidian Note Create

**REQUIRED CONTEXT:** obsidian-vault-context (볼트 구조, 경로, 스키마)

## 워크플로우 선택

```
요청 유형?
├─ 영구노트 생성 → A
├─ 리소스 생성 → B
├─ MOC 생성 → C
└─ 리소스→영구노트 승격 → D
```

---

## A. 영구노트 생성

1. **주제 확인** → category 결정 (`개발` / `비개발`)
2. **중복 탐색**: `obsidian search query="<주제 키워드>"` — 유사 노트 있으면 사용자에게 알림
3. **MOC 파악**: `obsidian search query="category: MOC"` → 관련 MOC 자동 제안
4. **노트 생성**:
   ```bash
   obsidian create name="<노트 제목>" template="Permanent_Note Template" path="3.Permanent_Notes/<category>/" silent
   ```
5. **frontmatter 설정**: `category`, `mocs`, `publish_date`(오늘), `updated_at`(오늘)
6. **본문 작성**: "나의 생각" 섹션에 사용자 통찰 반영, "연결문서"에 관련 노트 wikilink
7. **MOC 업데이트**: 해당 MOC에 새 노트 링크 추가 제안 (사용자 승인 후 실행)

---

## B. 리소스 생성

1. **주제/개념 확인** → category 결정
2. **중복 확인**: `obsidian search query="<주제>"`
3. **topics 조회**: `obsidian property:get name="topics"` → 기존 topics 목록 제시, 재사용 권장
4. **노트 생성**:
   ```bash
   obsidian create name="<노트 제목>" template="Resources Template" path="6.Resources/<category>/" silent
   ```
5. **frontmatter 설정**: `category`, `topics`, `publish_date`, `updated_at`

---

## C. MOC 생성

1. **주제 확인** → 관련 영구노트 수집:
   ```bash
   obsidian search query="<주제 키워드> tag:영구노트"
   ```
2. **초안 작성**: 수집된 노트를 의미 단위로 섹션 분류 (사용자와 협의)
3. **MOC 생성**:
   ```bash
   obsidian create name="<주제>_MOC" template="MOC Template" path="3.Permanent_Notes/1.MOC/" silent
   ```
4. **frontmatter**: `category: MOC`, `publish_date`, `updated_at`
5. **역링크 추가**: 포함된 영구노트의 `mocs` frontmatter에 새 MOC 추가 제안

---

## D. 리소스 → 영구노트 승격

1. **통찰 확인**: 리소스에서 얻은 사용자의 핵심 인사이트 파악
2. **영구노트 생성**: 워크플로우 A 실행
3. **참고문헌 연결**:
   - 새 영구노트 "참고문헌" 섹션에 원본 리소스 wikilink 추가
   - 원본 리소스 "연결문서"에 새 영구노트 역링크 추가

---

## 공통 규칙

- **날짜**: `YYYY-MM-DD` 형식 (예: `2026-03-07`)
- **topics 재사용**: 신규 topic 생성 전 항상 기존 목록 확인
- **wikilink**: `[[노트 제목]]` 형식 (확장자 없이)
- **silent 플래그**: 노트 생성 시 Obsidian에서 자동으로 열리지 않도록 항상 사용
