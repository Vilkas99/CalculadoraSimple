function sum() {
    var left = $("input[type=text].left").val();
    var right = $("input[type=text].right").val();
    console.log(left);
    console.log(right);
var url = "http://localhost:8085/sum/?left=" + left + "&right=" + right;

$.getJSON(url,
    function(json) {
       console.log(json);
       document.calc.result.value = json.result;
    }
  );
}

function subs() {
  var left = $("input[type=text].left").val();
  var right = $("input[type=text].right").val();
  console.log(left);
  console.log(right);
var url = "http://localhost:8085/subs/?left=" + left + "&right=" + right;

$.getJSON(url,
  function(json) {
     console.log(json);
     document.calc.result.value = json.result;
  }
);
}

function multiply() {
  var left = $("input[type=text].left").val();
  var right = $("input[type=text].right").val();
  console.log(left);
  console.log(right);
var url = "http://localhost:8085/multiply/?left=" + left + "&right=" + right;

$.getJSON(url,
  function(json) {
     console.log(json);
     document.calc.result.value = json.result;
  }
);
}

function divide() {
  var left = $("input[type=text].left").val();
  var right = $("input[type=text].right").val();
  console.log(left);
  console.log(right);
var url = "http://localhost:8085/divide/?left=" + left + "&right=" + right;

$.getJSON(url,
  function(json) {
     console.log(json);
     document.calc.result.value = json.result;
  }
);
}

function power() {
  var left = $("input[type=text].left").val();
  var right = $("input[type=text].right").val();
  console.log(left);
  console.log(right);
var url = "http://localhost:8085/power/?left=" + left + "&right=" + right;

$.getJSON(url,
  function(json) {
     console.log(json);
     document.calc.result.value = json.result;
  }
);
}

function sqrt() {
  var left = $("input[type=text].left").val();
  console.log(left);
var url = "http://localhost:8085/sqrt/?left=" + left;

$.getJSON(url,
  function(json) {
     console.log(json);
     document.calc.right.value = 0;
     document.calc.result.value = json.result;
  }
);
}


