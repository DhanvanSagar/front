
var tablebody =document.getElementById('tablebody');
var tablesection=document.getElementById("UserTableSection");

var section=document.createElement('div');

// section.innerHTML="NOT sdnkjshdkjsbdjsbdmsbdksnbdmsnld sbdkjsbdjsbdkshdk;sbdk;";
// tablesection.append(section);


// import './../../../OK';
// import {mainFIND} from "./../../Matchingresults.js"

function createCard2 (x) {
    var tabrow=document.createElement('tr');
    var Name=document.createElement('td');
    Name.innerHTML=x.DrugName;
    Name.style.color="#800000"
    Name.style.fontWeight="1000"
    tabrow.appendChild(Name);

    var Composition=document.createElement('td');
    Composition.innerHTML=x.Composition;
    Composition.style.color="#cc0000"
    tabrow.appendChild(Composition);

    var Packaging=document.createElement('td');
    Packaging.innerHTML=x.Packaging;
    tabrow.appendChild(Packaging);

    var Manufacturer=document.createElement('td');
    Manufacturer.innerHTML=x.Manufacturer;
    tabrow.appendChild(Manufacturer);

    var MatchingPercentage=document.createElement('td');
    MatchingPercentage.innerHTML="NA";
    MatchingPercentage.style.fontWeight="600";
    MatchingPercentage.style.color="red";
    MatchingPercentage.style.display="none";

    var mp=document.getElementById('M_P');
    mp.style.display="none";

    tabrow.appendChild(MatchingPercentage);

    var ManufacturerAddress=document.createElement('td')
    ManufacturerAddress.innerHTML=x.ManufacturerAddress;
    tabrow.appendChild(ManufacturerAddress)
    tabrow.className="Adj"
    tablebody.append(tabrow);
}

function createCard4 (x) {
    var tabrow=document.createElement('tr');
    var Name=document.createElement('td');
    Name.innerHTML=x.drugname;
    Name.style.color="#800000"
    Name.style.fontWeight="1000"
    tabrow.appendChild(Name);

    var Composition=document.createElement('td');
    Composition.innerHTML=x.composition;
    Composition.style.color="#cc0000"
    tabrow.appendChild(Composition);

    var Packaging=document.createElement('td');
    Packaging.innerHTML=x.packaging;
    tabrow.appendChild(Packaging);

    var Manufacturer=document.createElement('td');
    Manufacturer.innerHTML=x.manufacturer;
    tabrow.appendChild(Manufacturer);

    var MatchingPercentage=document.createElement('td');
    MatchingPercentage.innerHTML="NA";
    MatchingPercentage.style.fontWeight="600";
    MatchingPercentage.style.color="red";
    MatchingPercentage.style.display="none";

    var mp=document.getElementById('M_P');
    mp.style.display="none";

    tabrow.appendChild(MatchingPercentage);

    var ManufacturerAddress=document.createElement('td')
    ManufacturerAddress.innerHTML=x.manufactureraddress;
    tabrow.appendChild(ManufacturerAddress)
    tabrow.className="Adj"
    tablebody.append(tabrow);
}

/* <tr>
    <th>Name</th>
    <th>Composition</th>
    <th>Packaging</th>
    <th>Manufacturer</th>
    <th>Matching Percentage</th>
    <th>Manufacturer Address</th>
</tr> */
//var p={DrugName:"Althrocin Kid 125mg Tablet",Composition:"Erythromycin (125mg)",Manufacturer:"Alembic Pharmaceuticals Ltd",Packaging:"10 tablets in 1 strip",ManufacturerAddress:"Alembic Road Vadodara - 390 003 GujaratINDIA",Code:"0",Matching_percentage:"100"};
function createCard (x) {
    var tabrow=document.createElement('tr');
    var Name=document.createElement('td');
    Name.innerHTML=x.Name;
    Name.style.color="#800000"
    Name.style.fontWeight="1000"
    tabrow.appendChild(Name);

    var Composition=document.createElement('td');
    Composition.innerHTML=x.Composition;
    Composition.style.color="#cc0000"
    tabrow.appendChild(Composition);

    var Packaging=document.createElement('td');
    Packaging.innerHTML=x.Packaging;
    tabrow.appendChild(Packaging);

    var Manufacturer=document.createElement('td');
    Manufacturer.innerHTML=x.Manufacturer;
    tabrow.appendChild(Manufacturer);

    var MatchingPercentage=document.createElement('td');
    MatchingPercentage.innerHTML=Math.floor(x.Percentage_Match)+"%";
    MatchingPercentage.style.fontWeight="600";
    var mp=document.getElementById('M_P');
    mp.style.display="block";
    if(x.Percentage_Match==100)
    {
        MatchingPercentage.style.color="green";
    }
    if(x.Percentage_Match<=75 && x.Percentage_Match>=50)
    {
        MatchingPercentage.style.color="blue";
    }
   else if(x.Percentage_Match<50 && x.Percentage_Match>=25)
    {
        MatchingPercentage.style.color="orange";
    }
   if(x.Percentage_Match<=25)
    {
        MatchingPercentage.style.color="red";
    }
    // else(x.Percentage_Match>=25)
    // {
    //     MatchingPercentage.style.color="red";
    // }
    tabrow.appendChild(MatchingPercentage);

    var ManufacturerAddress=document.createElement('td')
    ManufacturerAddress.innerHTML=x.ManufacturerAddress;
    tabrow.appendChild(ManufacturerAddress)
    tabrow.className="Adj"
    tablebody.append(tabrow);
}




//var btn=document.getElementById('Resetbtn');
var btn2=document.getElementById('Resetbtnname');
var btn3=document.getElementById('ResetbtnMongo');
var btn4=document.getElementById('ResetbtnHybrid');

//btn.innerHTML="Search";
var UserSearch=document.getElementById('UserSearch');
var UserSearchName=document.getElementById('UserSearchName');

var clrbtn=document.getElementById('clear');


function getData(ur){
    fetch(ur).then((response)=>{
        return response.text();
    }).then((data)=>{
        let p=JSON.parse(data);
        if(p.length != 0){
        tablebody.innerHTML=""
        for(let i=0;i<p.length;i++)
       {
           createCard(p[i]);
       }
        }
        else{
        tablebody.innerHTML=""
        section.innerHTML="NOT FOUND, OR CHECK THE SPELLING"}
       
    })
}
function getData2(ur){
    fetch(ur).then((response)=>{
        return response.text();
    }).then((data)=>{
        let p=JSON.parse(data);
        if(p.length != 0){
        tablebody.innerHTML=""
        for(let i=0;i<p.length;i++)
       {
           createCard2(p[i]);
       }
        }
        else{
        tablebody.innerHTML=""
        section.innerHTML="NOT FOUND, OR CHECK THE SPELLING"}
       
    })
}
function getData3(ur){
    fetch(ur).then((response)=>{
        return response.text();
    }).then((data)=>{
        let p=JSON.parse(data);
        if(p.length != 0){
        tablebody.innerHTML=""
        for(let i=0;i<p.length;i++)
       {
           createCard2(p[i]);
       }
        }
        else{
        tablebody.innerHTML=""
        section.innerHTML="NOT FOUND, OR CHECK THE SPELLING"}
       
    })
}
function getData4(ur){
    fetch(ur).then((response)=>{
        return response.text();
    }).then((data)=>{
        
        let p=JSON.parse(data);
        console.log(data);
        if(p.length != 0){
        tablebody.innerHTML=""
        for(let i=0;i<p.length;i++)
       {
           createCard4(p[i]);
       }
        }
        else{
        tablebody.innerHTML=""
        section.innerHTML="NOT FOUND, OR CHECK THE SPELLING"}
       
    })
}
UserSearchName.value="Paracetamol (500mg)";
Resetbtn.onclick= function (){

    if(UserSearchName.value!=""){
    tablebody.innerHTML="LOADING";

    const ur="http://127.0.0.1:8000/?"+UserSearchName.value;

 
    let data=getData(ur);
    }
    else{
    tablebody.innerHTML="EMPTY FIELD :Enter the exact drug";
    }
   
    //console.log(data);
}
Resetbtnname.onclick= function (){

    if(UserSearchName.value!=""){
    tablebody.innerHTML="LOADING";

    const ur="http://127.0.0.1:40000/?"+UserSearchName.value;

 
    let data=getData2(ur);
    }
    else{
        tablebody.innerHTML="EMPTY FIELD :Enter the exact drug";
    }
   
    //console.log(data);
}

clrbtn.onclick=function (){
    tablebody.innerHTML="";
   // UserSearchName.value=""
    UserSearchName.value="";
}
btn3.onclick= function (){

    if(UserSearchName.value!=""){
    tablebody.innerHTML="LOADING";

    const ur="http://127.0.0.1:50000/?"+UserSearchName.value;

 
    let data=getData3(ur);
    }
    else{
    tablebody.innerHTML="EMPTY FIELD :Enter the exact drug";
    }
   
    
    //console.log(data);
}
btn4.onclick= function (){

    if(UserSearchName.value!=""){
    tablebody.innerHTML="LOADING";

    const ur="http://127.0.0.1:8500/?"+UserSearchName.value;

 
    let data=getData4(ur);
    }
    else{
    tablebody.innerHTML="EMPTY FIELD :Enter the exact drug";
    }
   
    
    //console.log(data);
}
UserSearchName.onkeydown=function(e){
    if(e.key === "Enter"){

        if(UserSearchName.value!=""){
            tablebody.innerHTML="LOADING";
        
            const ur="http://127.0.0.1:8500/?"+UserSearchName.value;
        
         
            let data=getData4(ur);
            }
            else{
            tablebody.innerHTML="EMPTY FIELD :Enter the exact drug";
            }
    }
    
}

//xhttp.send()

//    let p= mainFIND(UserSearch.value);

//    for(let i=0;i<p.length;i++)
//    {
//        createCard(p[i]);
//    }
//     //p.DrugName=UserSearch.value;
// //createCard(p);



/* <div class="potCompwrap">
                <input type="text" id="UserSearch" name="UserSearch" placeholder="Paracetamol"/>
                <input type="text" id="UserSearch-potency" name="UserSearch-potency" placeholder="500mg"/>
                    <div id="editbtnwrap">
                        <button id="delete-todo"><i class="fa fa-plus" aria-hidden="true"></i></button>
                        <button id="edit-todo"><i class="far fa-edit"></i></button>
                        <button id="delete-todo"><i class="fas fa-trash-alt"></i></button>
                    </div>

</div> */

// var SearchDiv= document.getElementById('SearchDiv');

// var potCompwrap=document.createElement('div');
// potCompwrap.className="potCompwrap";

// var UserSearch=document.createElement('input');
// UserSearch.type="text";
// UserSearch.id="UserSearch";
// UserSearch.name="UserSearch";
// UserSearch.placeholder="Paracetamol"

// potCompwrap.appendChild(UserSearch);

// var UserSearchPotency=document.createElement('input');
// UserSearchPotency.id="UserSearch-potency"
// UserSearchPotency.type="text";
// UserSearchPotency.name="UserSearch-potency";
// UserSearchPotency.placeholder="500mg"

// potCompwrap.appendChild(UserSearchPotency);

// var editbtnwrap=document.createElement('div');
// editbtnwrap.id="editbtnwrap";

// var add=document.createElement('button');
// add.id="delete-todo";
// add.innerHTML='<i class="fa fa-plus" aria-hidden="true"></i>';
// editbtnwrap.appendChild(add);

// var edit=document.createElement('button');
// edit.id="edit-todo";
// edit.innerHTML='<i class="far fa-edit"></i>';
// editbtnwrap.appendChild(edit);

// var dlt=document.createElement('button');
// dlt.id="delete-todo";
// dlt.innerHTML='<i class="fas fa-trash-alt"></i>'
// editbtnwrap.appendChild(dlt);

// potCompwrap.appendChild(editbtnwrap);

// SearchDiv.appendChild(potCompwrap);
