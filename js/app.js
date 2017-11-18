window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  var addList = document.getElementById('addList');
  var inputList = document.getElementById('inputList');
  var save1 = document.getElementById('save1');
  var close1 = document.getElementById('close1')
  btn.addEventListener('click', function() {
    btn.classList.add('hide');
    addList.classList.add('show');
  });
  save1.addEventListener('click', function(event) {
    addList.classList.add('hide');
    var headerList = document.createElement('div');
    var addcard = document.createElement('a');
    addcard.setAttribute('href', '#');
    addcard.innerHTML = 'Añadir una tarjeta...';
    addcard.classList.add('addcard');
    var textheader = inputList.value;
    headerList.innerHTML = textheader;
    headerList.classList.add('headerList');
    document.body.appendChild(headerList);
    document.body.appendChild(addcard);
    addList.classList.add('left');
    event.preventDefault();
  });


});

