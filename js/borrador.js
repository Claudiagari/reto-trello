window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  var addList = document.getElementById('addList');
  var inputList = document.getElementById('inputList');
  var save1 = document.getElementById('save1');
  var close1 = document.getElementById('close1');
  var conteiner = document.getElementById('section');
  addList.classList.add('hide');
  btn.addEventListener('click', function() {
    btn.classList.add('hide');
    addList.classList.toggle('hide');
    addList.classList.toggle('show');
  });
  save1.addEventListener('click', function(event) {
    conteiner.removeChild(addList);
    var headerList = document.createElement('div');
    var addcard = document.createElement('a');
    addcard.setAttribute('href', '#');
    addcard.setAttribute('id', 'addcard');
    addcard.innerHTML = 'Añadir una tarjeta...';
    addcard.classList.add('addcard');
    var textheader = inputList.value;
    headerList.innerHTML = textheader;
    headerList.classList.add('headerList');
    conteiner.appendChild(headerList);
    conteiner.appendChild(addList);
    inputList.value = '';
    headerList.appendChild(addcard);
    event.preventDefault();
    addcard.addEventListener('click', function() {
      addcard.classList.toggle('addcard');
      addcard.classList.add('hide');
      var divTextarea = document.createElement('div');
      var textarea = document.createElement('textarea');
      textarea.classList.add('textarea');
      var add = document.createElement('button');
      add.classList.add('save');
      add.innerHTML = 'Añadir';
      divTextarea.appendChild(textarea);
      divTextarea.appendChild(add);
      divTextarea.classList.add('newdiv');
      headerList.appendChild(divTextarea);
      textarea.focus();
      add.addEventListener('click', function() {
        var card = document.createElement('div'); 
        var textcard = textarea.value;
        card.textContent = textcard;
        card.classList.add('card');
        textarea.value = '';
        headerList.insertBefore(card,divTextarea);
        textarea.focus();
      });
    });
  });
});
  
