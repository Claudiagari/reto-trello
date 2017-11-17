window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  var addList = document.getElementById('addList');
  btn.addEventListener('click', function() {
    btn.classList.add('hide');
    addList.classList.add('show');
  });
});

