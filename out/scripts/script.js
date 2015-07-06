(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {
    setupDemos();
  });

  function setupDemos() {
    setupSubTreeDemo();
  }

  function setupSubTreeDemo() {
    var modifyContent = document.querySelector('#modify-content');
    document.querySelector('#toggle').addEventListener('click', function() {
      this.classList.toggle('button-success');
      this.classList.toggle('button-error');
    });
    document.querySelector('#modify').addEventListener('click', function() {
      modifyContent.innerHTML = '<span>' + new Date().toISOString() + '</span>';
    });
  }
})();
