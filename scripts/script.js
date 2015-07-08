(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {
    setupDemos();
  });

  function setupDemos() {
    setupSubTreeDemo();
    // setupTraceDemo();
    setupTableDemo();
    setupSimpleDebuggerDemo();
    setupTempDemo();
  }

  function setupSubTreeDemo() {
    var modifyContent = document.querySelector('#modify-content');
    document.getElementById('toggle').addEventListener('click', function() {
      this.classList.toggle('button-success');
      this.classList.toggle('button-error');
    });
    // document.getElementById('modify').addEventListener('click', function() {
    //   modifyContent.innerHTML = '<span>' + new Date().toISOString() + '</span>';
    // });
  }

  function setupTempDemo() {
    document.getElementById('temp').addEventListener('click', function() {
      console.log(window['demo_object']);
    });
  }

  function setupTraceDemo() {
    document.getElementById('trace').addEventListener('click', function() {
      downTheRabbitHoleLevel1();
    });
  }

  function downTheRabbitHoleLevel1() {
    downTheRabbitHoleLevel2();
  }

  function downTheRabbitHoleLevel2() {
    console.trace();
  }

  function setupTableDemo() {
    window['table_object'] = {
      '1234566': { firstName: "Travis", lastName: "Bickle" },
      '123566': { firstName: "Tyrion", lastName: "Lannister"  }
    };
  }

  var total = 0;
  function setupSimpleDebuggerDemo() {
    document.getElementById('simple-debugger').addEventListener('click', function() {
      for(var i = 0; i < 10; i++) {
        debugger;
        sumTotal(i);
      }
      showTotal($('#debugger-content'));
    });
  }

  function sumTotal(value) {
    return total += value;
  }

  function showTotal($element) {
    $element.text(total);
  }
})();
