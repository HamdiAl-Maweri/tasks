function add() {
    var Input = document.getElementById('input');
    var list = document.getElementById('list');
    var txt = Input.value;
    Input.value = '';
    if (txt == '') {
      alert('Error! Empty ');
      return;
    }

    var item = document.createElement('li');
    item.className = 'card';

    var txtdiv = document.createElement('div');
    txtdiv.textContent = txt;

    var btns = document.createElement('div');

    var updatebtns = document.createElement('button');
    updatebtns.textContent = 'Edit';
    updatebtns.onclick = function() {
      var newtxt = prompt('Edit Task', txt);
      if (newtxt !== null) {
        txtdiv.textContent = newtxt;
      }
    };
    var delbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.onclick = function() {
      item.remove();
    };
    btns.appendChild(updatebtns);
    btns.appendChild(delbtn);
    item.appendChild(txtdiv);
    item.appendChild(btns);
    list.appendChild(item);
  }