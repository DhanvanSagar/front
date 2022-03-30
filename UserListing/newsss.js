var SearchDiv= document.getElementById('SearchDiv');

var potCompwrap=document.createElement('div');
potCompwrap.className="potCompwrap";

var UserSearch=document.createElement('input');
UserSearch.type="text";
UserSearch.id="UserSearch";
UserSearch.name="UserSearch";
UserSearch.placeholder="Paracetamol"

potCompwrap.appendChild(UserSearch);

var UserSearchPotency=document.createElement('input');
UserSearchPotency.id="UserSearch-potency"
UserSearchPotency.type="text";
UserSearchPotency.name="UserSearch-potency";
UserSearchPotency.placeholder="500mg"

potCompwrap.appendChild(UserSearchPotency);

var editbtnwrap=document.createElement('div');
editbtnwrap.id="editbtnwrap";

var add=document.createElement('button');
add.id="delete-todo";
add.innerHTML='<i class="fa fa-plus" aria-hidden="true"></i>';
editbtnwrap.appendChild(add);

var edit=document.createElement('button');
edit.id="edit-todo";
edit.innerHTML='<i class="far fa-edit"></i>';
editbtnwrap.appendChild(edit);

var dlt=document.createElement('button');
dlt.id="delete-todo";
dlt.innerHTML='<i class="fas fa-trash-alt"></i>'
editbtnwrap.appendChild(dlt);

potCompwrap.appendChild(editbtnwrap);

SearchDiv.appendChild(potCompwrap);