(function () {
    var script = document.currentScript;
    var origin = new URL(script.src).origin;
    var url = new URL(location.href);
    var attributes = script.dataset;
    var params = {};
    params.origin = url.toString();
    params.repo = attributes.repo;
    params.repoId = attributes.repoId;
    params.category = attributes.category || '';
    params.categoryId = attributes.categoryId;
    var locale = attributes.lang ? "/".concat(attributes.lang) : '';
    var src = "".concat(origin).concat(locale, "/widget?").concat(new URLSearchParams(params));
    var iframeElement = document.createElement('iframe');
    var iframeAttributes = {
        class: 'frame',
        title: 'Comments',
        scrolling: 'no',
        allow: 'clipboard-write',
        src: src,
    };
    Object.entries(iframeAttributes).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return value && iframeElement.setAttribute(key, value);
    });
    var iframeContainer = document.createElement('div');
    iframeContainer.setAttribute('class', 'byuls');
    iframeContainer.appendChild(iframeElement);
    script.insertAdjacentElement('afterend', iframeContainer);
})();
