// js/prism-prisma.js
Prism.languages.prisma = {
  comment: /\/\/.*/,
  string: {
    pattern: /"(?:\\.|[^"\\])*"/,
    greedy: true,
  },
  keyword:
    /\b(?:datasource|generator|model|enum|type|true|false|null|default|references|fields|onDelete|onUpdate|enum)\b/,
  function: /\b(?:env|datetime)\b/,
  number: /\b\d+(\.\d+)?\b/,
  punctuation: /[{}[\];(),.:]/,
  operator: /[<>!=]=?|&&|\|\|/,
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((block) => {
    const pre = block.closest("pre");
    if (pre.classList.contains("command-line")) return;

    block.classList.add("line-numbers");
  });
  Prism.highlightAll();
});
