// Iniciando el archivo despues que cargue la pagina
window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  var addList = document.getElementById('addList');
  var inputList = document.getElementById('inputList');
  var save1 = document.getElementById('save1');
  var close1 = document.getElementById('close1');
  // Al hacer click esconder el boton de añadir lista y mostar el formulario
  btn.addEventListener('click', function() {
    btn.classList.add('hide');
    addList.classList.add('show');
  });
  // LLamar al boton y al hacer click crear un div con el contenido y un nuevo link para agregar tarjeta
  save1.addEventListener('click', function(event) {
    addList.classList.add('hide');
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
    // Al hacer click al link de añadir tarjeta se crea un textarea con un boton de añadir
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
      // Se le da focus al textarea
      textarea.focus();
      // Al darle click al boton añadir se crea un div con el valor del textarea y se muestra el textarea con el boton añadir
      add.addEventListener('click', function() {
        document.body.removeChild(divTextarea);
        var card = document.createElement('div');
        var textcard = textarea.value;
        card.textContent = textcard;
        // Se da un valor vacio para mostrar denuevo
        textarea.value = '';
        card.classList.add('card');
        document.body.appendChild(card);
        document.body.appendChild(divTextarea);
        textarea.focus();
      });
    });
  });
});

