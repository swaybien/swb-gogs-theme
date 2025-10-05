// 使用 IIFE 包裹以避免全局变量污染
(function () {
  // 文档内容加载完毕时触发
  // window.addEventListener("DOMContentLoaded", () => {
  // 初始化 Darkmode.js 深色模式
  const Darkmode =
    window.Darkmode ||
    function () {
      console.warn("[SwayBien] Darkmode.js Not Found");
    };
  const darkmode = new Darkmode();

  /**
   * 同步镜像仓库
   * @param {HTMLElement} btn
   */
  function sync_mirror(btn) {
    // 获取按钮元素
    const button = btn.closest(".swb-sync-btn");
    if (!button) {
      console.error("Sync button not found");
      return;
    }

    // 从按钮的 data-repo 属性获取仓库路径
    const repoPath = button.getAttribute("data-repo");
    if (!repoPath) {
      console.error("Repository path not found in data-repo attribute");
      return;
    }

    // 从按钮内部获取 CSRF token
    const csrfInput = button.querySelector('input[name="_csrf"]');
    if (!csrfInput || !csrfInput.value) {
      console.error("CSRF token not found");
      return;
    }
    const csrfToken = csrfInput.value;

    // 创建表单元素
    const form = document.createElement("form");
    form.method = "POST";
    form.action = repoPath; // 使用 data-repo 中的路径

    // 添加 CSRF token
    const csrfHidden = document.createElement("input");
    csrfHidden.type = "hidden";
    csrfHidden.name = "_csrf";
    csrfHidden.value = csrfToken;
    form.appendChild(csrfHidden);

    // 添加 action 参数
    const actionHidden = document.createElement("input");
    actionHidden.type = "hidden";
    actionHidden.name = "action";
    actionHidden.value = "mirror-sync";
    form.appendChild(actionHidden);

    // 将表单添加到文档并提交
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  // 点击事件委托
  document.addEventListener("click", function (event) {
    if (event.target.closest(".swb-dark-btn")) {
      darkmode.toggle();
    } else if (event.target.closest(".swb-sync-btn")) {
      sync_mirror(event.target);
    }
  });
  // });
})();
