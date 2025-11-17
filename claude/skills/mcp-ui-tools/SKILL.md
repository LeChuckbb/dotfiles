---
name: mcp-ui-tools
description: UI component generation with Magic and browser testing with Playwright. Use when user requests UI components, /ui or /21 commands, buttons, forms, modals, cards, tables, E2E testing, visual validation, accessibility testing, screenshot capture, or frontend validation needs.
category: frontend
complexity: advanced
mcp-servers: [magic, playwright]
---

# MCP UI Tools (Magic + Playwright)

Combined frontend development and testing capabilities using Magic for UI generation and Playwright for validation.

## Magic MCP Server

**Purpose**: Modern UI component generation from 21st.dev patterns with design system integration

### Triggers
- UI component requests: button, form, modal, card, table, nav
- Design system implementation needs
- `/ui` or `/21` commands
- Frontend-specific keywords: responsive, accessible, interactive
- Component enhancement or refinement requests

### Choose When
- **For UI components**: Use Magic, not native HTML/CSS generation
- **Over manual coding**: When you need production-ready, accessible components
- **For design systems**: When consistency with existing patterns matters
- **For modern frameworks**: React, Vue, Angular with current best practices
- **Not for backend**: API logic, database queries, server configuration

### Examples
```
"create a login form" → Magic (UI component generation)
"build a responsive navbar" → Magic (UI pattern with accessibility)
"add a data table with sorting" → Magic (complex UI component)
"make this component accessible" → Magic (UI enhancement)
```

## Playwright MCP Server

**Purpose**: Browser automation and E2E testing with real browser interaction

### Triggers
- Browser testing and E2E test scenarios
- Visual testing, screenshot, or UI validation requests
- Form submission and user interaction testing
- Cross-browser compatibility validation
- Performance testing requiring real browser rendering
- Accessibility testing with automated WCAG compliance

### Choose When
- **For real browser interaction**: When you need actual rendering, not just code
- **Over unit tests**: For integration testing, user journeys, visual validation
- **For E2E scenarios**: Login flows, form submissions, multi-page workflows
- **For visual testing**: Screenshot comparisons, responsive design validation
- **Not for code analysis**: Static code review, syntax checking, logic validation

### Examples
```
"test the login flow" → Playwright (browser automation)
"check if form validation works" → Playwright (real user interaction)
"take screenshots of responsive design" → Playwright (visual testing)
"validate accessibility compliance" → Playwright (automated WCAG testing)
```

## Integration Patterns

**Magic → Playwright Workflow**:
1. Magic generates UI component
2. Playwright validates component behavior
3. Playwright tests accessibility compliance
4. Playwright captures visual regression screenshots

**Common Combined Tasks**:
- Create component with Magic → Test with Playwright
- Generate form with Magic → Validate submission with Playwright
- Build responsive layout with Magic → Screenshot test with Playwright
- Implement accessible component with Magic → WCAG verify with Playwright
