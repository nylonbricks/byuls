(() => {
  const script = document.currentScript as HTMLScriptElement;
  const origin = new URL(script.src).origin;

  const url = new URL(location.href);

  const attributes = script.dataset;
  const params: Record<string, string> = {};
  params.origin = url.toString();
  params.repo = attributes.repo as string;
  params.repoId = attributes.repoId as string;
  params.category = attributes.category || '';
  params.categoryId = attributes.categoryId as string;

  const locale = attributes.lang ? `/${attributes.lang}` : '';
  const src = `${origin}${locale}/widget?${new URLSearchParams(params)}`;

  const iframeElement = document.createElement('iframe');

  const iframeAttributes = {
    class: 'frame',
    title: 'Comments',
    scrolling: 'no',
    allow: 'clipboard-write',
    src,
  };

  Object.entries(iframeAttributes).forEach(
    ([key, value]) => value && iframeElement.setAttribute(key, value),
  );

  const iframeContainer = document.createElement('div');
  iframeContainer.setAttribute('class', 'byuls');
  iframeContainer.appendChild(iframeElement);

  script.insertAdjacentElement('afterend', iframeContainer);
})();
