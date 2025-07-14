(function () {
  const toolbarId = 'load-pr-template';
  const urlPattern = /^\/teamdable\/[^\/]+\/compare\/.*/;
  let currentPath = location.pathname;
  let toolbar = null;

  const createToolbar = () => {
    if (toolbar) return;

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

    const createDivider = (container) => {
      const divider = document.createElement('div');
      divider.innerText = '|';
      divider.style.fontSize = '15px';
      divider.style.opacity = '0.3';
      container.appendChild(divider);
    };

    const container = document.createElement('div');
    container.id = toolbarId;
    container.style.position = 'absolute';
    container.style.top = '15px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = 9999;
    container.style.display = 'none';
    container.style.gap = '11px';
    container.style.padding = '0 15px';
    container.style.backgroundColor =
      'var(--bgColor-default, var(--color-canvas-default))';
    container.style.border =
      '1px solid var(--fgColor-default, var(--color-fg-default))';
    container.style.borderRadius = '5px';

    createButton(container, '희영 ♨️', 'heeyoung-btn', templates.heeyoung);
    createButton(container, '민지 🐳', 'minji-btn', templates.minji);
    createButton(container, '태곤 🍜', 'taegon-btn', templates.taegon);
    createButton(container, '성철 🗺️', 'sungcheol-btn', templates.sungcheol);
    createButton(container, '은경 🎀', 'eunkyoung-btn', templates.eunkyoung);
    createDivider(container);
    createButton(container, '가란 🐧', 'garan-btn', templates.garan, true);

    document.body.appendChild(container);
    toolbar = container;
  };

  const updateToolbarVisibility = () => {
    if (!toolbar) return;
    if (urlPattern.test(location.pathname)) {
      toolbar.style.display = 'flex';
    } else {
      toolbar.style.display = 'none';
    }
  };

  const init = () => {
    createToolbar();
    updateToolbarVisibility();
  };

  init();

  const observer = new MutationObserver(() => {
    if (currentPath !== location.pathname) {
      currentPath = location.pathname;
      updateToolbarVisibility();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
