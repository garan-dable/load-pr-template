// ==UserScript==
// @name         Load PR Template
// @namespace    http://tampermonkey.net/
// @version      25060201
// @description  PR Template 내용을 가져옵니다.
// @author       garan-dable
// @match        https://github.com/teamdable/*/compare/*
// @updateURL    https://gist.githubusercontent.com/garan-dable/ee248fcda8e1274e97684a161bd9fb4e/raw/load-pr-template.user.js
// @downloadURL  https://gist.githubusercontent.com/garan-dable/ee248fcda8e1274e97684a161bd9fb4e/raw/load-pr-template.user.js
// @require      https://gist.githubusercontent.com/garan-dable/ee248fcda8e1274e97684a161bd9fb4e/raw/templates.js?v=25060201
// @require      https://gist.githubusercontent.com/garan-dable/ee248fcda8e1274e97684a161bd9fb4e/raw/main.js?v=25060201
// @grant        none
// ==/UserScript==

// templates.js
const templates = {
  heeyoung: `## 📍 Summary

> 어떤 작업을 했는지 요약해주세요.  


## ❓ Why

> 이 작업이 필요한 이유를 간단히 설명해주세요.  
> 이슈의 배경을 이해하는 데 도움이 되는 문서나 링크가 있다면 작성해주세요.  
  (Jira, Notion, Slack 논의, Figma 등)


## 🛠️ Changes

> 변경된 내용을 정리해주세요 (UI 변경, API 연동 등)
> UI 변경이 있다면 스크린샷 또는 영상도 첨부해주세요.


## 🧪 How to Test

> 어떤 시나리오로 테스트했는지 작성해주세요.
> 테스트에 필요한 계정이 있다면 함께 알려주세요.


## ✅ Checklist

- [ ] 테스트를 작성/수정하기
- [ ] 모든 테스트를 통과
- [ ] Assignee를 지정하기
- [ ] PR 제출 전 최종 검토 진행하기`,
  minji: `## 📍 Summary
\`\`\`
- 어떤 작업인지 간단히 요약해주세요. (무엇을, 왜 진행했는지 등)
- 관련 문서를 링크해주세요. (Jira, Notion, Figma, Slack 등)
\`\`\` 
* 

## 🛠️ Changes
\`\`\`
- 코드리뷰, 히스토리 파악에 도움이 될만한 내용을 자세히 작성해주세요.
- UI 추가/수정 시 스크린샷, 영상 첨부
\`\`\`
* 

## 🧪 How to Test
\`\`\`
- 로컬(또는 피처서버)에서 재현할 수 있는 테스트 시나리오를 설명해주세요.
- 특정 환경/설정이 필요한 경우 명시해주세요.
- 재현방법이 복잡하다면, 영상을 첨부해주시면 좋습니다.
\`\`\`
* 

## ✅ Checklist
- [ ] 모든 테스트를 통과했다.
- [ ] 기존 기능에 영향(부작용)이 없는지 확인했다.
- [ ] (선택) 변경사항에 대한 테스트를 작성했다.
- [ ] PR의 Assignees를 지정했다. - (assign yourself)`,
  garan: `## 🔗 Related
- \`필수\` 관련 Jira 링크를 첨부해 주세요.
- 그 외 참고해야할 링크가 있다면 첨부해 주세요. (Figma, Notion, Slack, 연관 PR 등)

## 📝 Summary
- \`필수\` 어떤 작업을 했는지 간단히 요약해 주세요. (무엇을, 왜, 어떻게 등)
- 작업 내용을 쉽게 이해할 수 있는 스크린샷이나 영상 자료가 있다면 첨부해 주세요. (AS-IS → TO-BE 등)

## 🧪 How to Test
- 테스트 가능한 재현 시나리오를 설명해 주세요.
- 다른 기능에 영향을 줄 수 있는 등 주의할 점이 있다면 적어주세요.

## ✅ Checklist
- [ ] 나에게 PR을 할당했다.
- [ ] 변경 사항에 대한 테스트 코드를 작성했다. (또는 해당 없음)
- [ ] 모든 테스트(E2E, Unit)를 통과했다. (또는 해당 없음)
- [ ] 다국어/통화 환경에서도 화면 표시에 문제가 없다. (또는 해당 없음)

---

> ### Code Review Guide
> 코멘트의 성격에 따라 아래 태그와 함께 남겨주세요.
> 
> - \`RC\` (Request Changes): 꼭 반영해주세요. (버그 등)
> - \`C\` (Comment): 웬만하면 반영해주세요. (논의나 질문이 필요한 경우)
> - \`A\` (Approve): 그냥 사소한 의견입니다. (변수명 변경 등의 사소한 의견)
> 
> 여러 코멘트 중 \`RC\`가 존재하면 Request Change 상태로 리뷰를 제출해주세요.
> 
> 📘 [FE 팀 PR & 리뷰 가이드](https://www.notion.so/dableglobal/Pull-Requests-and-Code-Review-1e05bbc0e5c280a2b4edfa67550de39a)`,
  taegon: `## Summary

- 이슈에 대한 요약, 배경, 관련 이슈를 적습니다.
<!--
예:
- SUPPORT-1234 레이지 로드 위젯이 지연되어 표시되는 문제
또는
- 영어 환경에서 버튼 텍스트가 두 줄로 표시되는 문제(슬랙 대화 링크)
-->

## Changes

- 어떤 기능을 추가했거나, 어떤 버그를 수정했는지 작성해주세요.
- UI 변경이 있다면 스크린샷 또는 짧은 영상을 첨부해주세요.

<!--
예:
- 캠페인 목록에 상태 필터 기능 추가
- 기본 정렬 기준을 '최근 시작일 순'으로 변경
- 테이블 UI가 깨지던 문제 수정
-->

## How to Test

- 테스트 해야 할 항목을 단계별로 설명해주세요.

<!--
예:
- 매체사 웹 사이트의 기사 페이지(링크)로 이동한다.
- 스크롤을 화면 하단까지 내린다.
- lazyload가 적용된 xxxxxx 위젯이 화면에 렌더링된다.
  (필요하다면 스크린 샷 첨부)
-->

## Checklist

- [ ] 자신에게 PR을 할당했다.
- [ ] 변경 사항에 대한 테스트 코드를 작성했다. 또는 추가 테스트 코드가 불필요하다(설정 등).
- [ ] 모든 테스트(E2E, Unit)를 통과했다.
- [ ] 다국어/통화 환경에서도 화면 표시에 문제가 없다.`,
  sungcheol: `## 📝 Summary
<!-- 이 PR에서 무엇을 변경했는지 간단히 설명해주세요 -->
- 

## 🔧 PR Type
<!-- 해당하는 항목에 'x'를 표시해주세요. PR Type 에 따라, 리뷰 속도가 달라질 수 있습니다. -->
- [ ] 🆕 새로운 기능 (feature)
- [ ] 🐛 버그 수정 (bugfix)
- [ ] ♻️ 리팩토링 (refactor)
- [ ] 📚 문서 업데이트 (docs)
- [ ] 🎨 스타일 변경 (style)
- [ ] ⚡ 성능 개선 (performance)
- [ ] ✅ 테스트 추가/수정 (test)
- [ ] 🔧 빌드/설정 변경 (chore)

## 🎯 Changes
<!-- 변경 내용을 자세히 설명해주세요 -->
- 

## 🔗 Related Links
<!-- 지라 문서 링크, 슬랙 링크 또는 노션 문서 링크 등 관련 링크를 작성해주세요 -->
- 

## 🧪 How to Test
<!-- 테스트 방법을 자세히 설명해주세요 -->
- 


## ✅ Checklist
<!-- PR 제출 전 아래 항목들을 확인해주세요 -->
- [ ] 지라 이슈 번호를 PR 제목에 포함했나요?
- [ ] 자신에게 PR 을 할당했나요?
- [ ] 기존 테스트 통과
- [ ] 새로운 테스트 추가
- [ ] 테스트는 없지만, 수동으로 기능을 테스트 했습니다.


## 🔍 리뷰어에게

### 아래 내용을 중점적으로 리뷰해주세요!
<!-- 리뷰어가 특별히 확인해야 할 부분이 있다면 작성해주세요 -->
-

### 질문있어요!
<!-- PR 관련 팀의 확인이 필요한 내용을 작성해주세요 -->
- 

## 📷 Screenshots
<!-- 리뷰어에게 도움이 된다면, 스크린샷을 포함해 주세요 -->`,
  eunkyoung: `
✏️ 이 PR이 왜 필요한지, 어떤 문제를 해결하는지 간단히 작성해주세요.

<!-- 예시:
> 위젯에 다크모드 설정 기능을 명시적으로 추가했습니다.
-->

✅ 입력:
>

---

## 🔍 주요 변경사항 (What's Changed) ✅
✏️ 변경된 핵심 내용을 bullet point로 정리해주세요.

<!-- 예시:
- \`setTheme()\` 함수 추가
- iframe 통신으로 테마 전달
- 시스템 테마 감지 로직 리팩토링
-->

✅ 입력:
> 

---

## 🧪 테스트 방법 (How to Test) ✅
✏️ 리뷰어가 따라할 수 있도록 테스트 방법을 단계별로 적어주세요.

<!-- 예시:
1. \`yarn dev\` 로컬 서버 실행  
2. 다크모드 수동/자동 테스트  
3. iframe 내 적용 확인
-->

✅ 입력:
> 

---

## 📸 데모 / 스크린샷 (Screenshots) ⚪️ *(선택 사항)*
✏️ **UI 변경이 있을 경우** Before/After 이미지를 첨부해주세요.  
❗ 이미지가 없거나 시각적 변경이 없다면 생략해도 됩니다.

<!-- 예시:
| 변경 전 | 변경 후 |
|--------|--------|
| ![before](https://via.placeholder.com/100) | ![after](https://via.placeholder.com/100) |
-->

⚪️ 입력 (없으면 삭제):
| 변경 전 | 변경 후 |
|--------|--------|
|        |        |

---

## 🔗 관련 이슈 / 문서 (Related Issues / Docs) ⚪️ *(선택 사항)*
✏️ Jira, Notion, GitHub Issue 등 관련 문서가 있다면 첨부해주세요.  
❗ 관련 항목이 없다면 생략해도 됩니다.

<!-- 예시:
- Jira: \`SF-1234\`
- Notion: [다크모드 위젯 명세](https://notion.so/...)
-->

⚪️ 입력 (없으면 삭제):
> 


---

## 📌 리뷰어에게 바라는 점 (Focus for Reviewers) ⚪️ *(선택 사항)*
✏️ 리뷰어가 중점적으로 봐줬으면 하는 부분이나 질문이 있다면 적어주세요.  
❗ 특별히 없다면 생략하셔도 괜찮습니다.

<!-- 예시:
- iframe postMessage 적용 여부 확인 요청
- 함수 위치 및 네이밍 적절성 검토 부탁드립니다
-->

⚪️ 입력 (없으면 삭제):
> 


---

## ✅ 체크리스트 ✅
- [ ] 자신에게 PR을 할당했다.
- [ ] 변경 사항에 대한 테스트 코드를 작성했다. 또는 추가 테스트 코드가 불필요하다(설정 등).
- [ ] 모든 테스트(E2E, Unit)를 통과했다.
- [ ] 다국어/통화 환경에서도 화면 표시에 문제가 없다.

---

> 🧑‍💻 **RCA 리뷰 가이드**
>
> 코멘트를 아래 기준 중 하나로 시작해주세요:
>
> - \`RC\` (Request Changes): 반드시 반영이 필요합니다. (버그, 논리 오류 등) ✅  
> - \`C\` (Comment): 웬만하면 반영이 좋습니다. (구조/네이밍 논의 등) 🤝  
> - \`A\` (Approve): 단순한 개인 의견입니다. (선택적 반영) ✍️  
>
> \`RC\`가 하나라도 있으면 **Request Changes** 상태로 리뷰 제출해주세요.
>
> 📘 [FE 팀 PR & 리뷰 가이드](https://www.notion.so/dableglobal/Pull-Requests-and-Code-Review-1e05bbc0e5c280a2b4edfa67550de39a)`,
};

// main.js
(function () {
  const toolbarId = 'load-pr-template';
  const urlPattern = /^\/teamdable\/[^\/]+\/compare\/.*/;
  let currentPath = location.pathname;

  const run = async () => {
    if (!urlPattern.test(location.pathname)) return;

    const resetButton = (button) => {
      button.style.color = 'var(--fgColor-default, var(--color-fg-default))';
      button.style.backgroundColor = 'transparent';
    };

    const highlightButton = (button, color) => {
      button.style.color = '#000';
      button.style.backgroundColor = color;
    };

    const createButton = (container, text, id, template, isCurrent) => {
      const button = document.createElement('button');
      button.id = id;
      button.innerText = text;
      button.style.padding = '4px 8px';
      button.style.fontSize = '12px';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.outline = 'none';
      button.style.position = 'relative';
      resetButton(button);

      if (isCurrent) {
        const badge = document.createElement('span');
        badge.innerText = 'CURRENT';
        badge.style.position = 'absolute';
        badge.style.top = '-6px';
        badge.style.left = '50%';
        badge.style.transform = 'translateX(-50%)';
        badge.style.padding = '0 3px';
        badge.style.fontSize = '7px';
        badge.style.fontWeight = 'bold';
        badge.style.color = '#fff';
        badge.style.backgroundColor = '#ff0000';
        badge.style.borderRadius = '10px';
        badge.style.pointerEvents = 'none';
        button.appendChild(badge);
      }

      button.addEventListener('mouseover', () => {
        button.style.fontStyle = 'italic';
        button.style.textDecoration = 'underline';
        highlightButton(button, '#00ffff');
      });
      button.addEventListener('mouseout', () => {
        button.style.fontStyle = 'normal';
        button.style.textDecoration = 'none';
        resetButton(button);
      });

      button.onclick = () => {
        try {
          const textarea = document.querySelector('textarea#pull_request_body');
          if (!textarea) throw new Error('textarea not found');
          textarea.value = template.trim();
          textarea.dispatchEvent(new Event('input', { bubbles: true })); // GitHub는 textarea에 입력되었는지 감지하기 위해 input 이벤트 필요
          highlightButton(button, '#ffff00');
          setTimeout(() => resetButton(button), 200);
          console.log('[LPT🍀]', 'template loaded');
        } catch (error) {
          highlightButton(button, '#ff00ff');
          setTimeout(() => resetButton(button), 200);
          console.warn('[LPT🍀]', error);
        }
      };

      container.appendChild(button);
    };

    const container = document.createElement('div');
    container.id = toolbarId;
    container.style.position = 'fixed';
    container.style.top = '15px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = 9999;
    container.style.display = 'flex';
    container.style.gap = '13px';
    container.style.padding = '0 15px';
    container.style.backgroundColor =
      'var(--bgColor-default, var(--color-canvas-default))';
    container.style.border =
      '1px solid var(--fgColor-default, var(--color-fg-default))';
    container.style.borderRadius = '5px';

    createButton(container, '희영 ♨️', 'heeyoung-btn', templates.heeyoung);
    createButton(container, '민지 🐳', 'minji-btn', templates.minji);
    createButton(container, '가란 🐧', 'garan-btn', templates.garan);
    createButton(container, '태곤 🍜', 'taegon-btn', templates.taegon);
    createButton(container, '성철 🗺️', 'sungcheol-btn', templates.sungcheol);
    createButton(
      container,
      '은경 🎀',
      'eunkyoung-btn',
      templates.eunkyoung,
      true
    );

    document.body.appendChild(container);
  };

  run();

  const observer = new MutationObserver(async () => {
    if (currentPath !== location.pathname) {
      currentPath = location.pathname;
      document.getElementById(toolbarId)?.remove();
      run();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
