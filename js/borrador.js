window.addEventListener('load', function() {
    var btn = document.getElementById('btn');
    var addList = document.getElementById('addList');
    var inputList = document.getElementById('inputList');
    var save1 = document.getElementById('save1');
    var close1 = document.getElementById('close1');
    addList.classList.add('hide');
    btn.addEventListener('click', function() {
      btn.classList.add('hide');
      addList.classList.remove('hide');
      addList.classList.add('show');
    });
    save1.addEventListener('click', function(event) {
      var headerList = document.createElement('div');
      var addcard = document.createElement('a');
      addcard.setAttribute('href', '#');
      addcard.setAttribute('id', 'addcard');
      addcard.innerHTML = 'Añadir una tarjeta...';
      addcard.classList.add('addcard');
      var textheader = inputList.value;
      headerList.innerHTML = textheader;
      headerList.classList.add('headerList');
      document.body.appendChild(headerList);
      document.body.appendChild(addcard);
      inputList.value = '';
      addList.classList.add('left');  
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
        document.body.appendChild(divTextarea);
        textarea.focus();
        add.addEventListener('click', function() {
          document.body.removeChild(divTextarea);
          var card = document.createElement('div');
          var textcard = textarea.value;
          card.textContent = textcard;
          card.classList.add('card');
          textarea.value = '';
          document.body.appendChild(card);
          document.body.appendChild(divTextarea);
          textarea.focus();
        });
      });
    });
  });
  
