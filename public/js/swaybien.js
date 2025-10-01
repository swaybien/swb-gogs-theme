// 文档内容加载完毕时触发
window.addEventListener("DOMContentLoaded", () => {
  // 初始化 Darkmode.js 深色模式
  const Darkmode =
    window.Darkmode ||
    function () {
      console.warn("[SwayBien] Darkmode.js Not Found");
    };
  const darkmode = new Darkmode();

  // 点击事件委托
  document.addEventListener("click", function (event) {
    if (event.target.closest(".dark-btn")) {
      darkmode.toggle();
    }
  });
});
