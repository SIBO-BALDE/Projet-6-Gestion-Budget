// recuperer les element html par le DOM par la methode getElementByid   
const incomEl=document.getElementById("idincom");
const expenseEl=document.getElementById("idexpense");
const descriptionEl=document.getElementById("iddescription");
const montantEl=document.getElementById("idmontant");
const buttonEl=document.getElementById("idbutton");
const selectEl=document.getElementById("idselect");
const values = selectEl.options[selectEl.selectedIndex].value;

let solde=0
 let revenu=0
 let depense =0

const tabdépense=[]



//function pour  ecouter l'evenement du click en appuyant au button envoyer
buttonEl.addEventListener("click", function(event){
var select=document.getElementById("idselect");
const values = select.options[select.selectedIndex].value;

    
// pour recuper la valeur des variables déclarées
    var montant = document.getElementById("idmontant").value;
    const parsed = parseInt(montant);
    var incomValue=incomEl.value
    const balanceEl=document.getElementById("idbalance");

    const balanceValue=balanceEl.value
    
// pour enlever la function par défaut dunavigateur le raffraichissement automatique
event.preventDefault()



  if(values ==="+" ){
        incomEl.innerHTML=`${revenu += parsed } FCFA`;
        balanceEl.innerHTML=`${solde += parsed}  FCFA`;
         
         addTransactionIncom();
         console.log('Revenue calculer avec succées')
        }
        
   


   if(values ==="-" ){
        expenseEl.innerHTML=  `${depense+= parsed}  FCFA`;
        balanceEl.innerHTML= `${solde -= parsed}  FCFA`
      
        addTransactionExpense()
        console.log('Depense calculée avec succées')
                                                           
    } 

// les fonctions  pour creer l'historique des transactions

function addTransactionIncom(){
    var ul=document.getElementById("revenu_1");
    var li=document.createElement("li");
    li.textContent=`${selectEl.value} ${descriptionEl.value} ${montantEl.value} FCFA  `;    
    // creer du noeud de text
    li.appendChild(document.createTextNode(""));
    // appliquer du css au li creer à partir du javascript
    ul.appendChild(li).style.listStyle="none";
    ul.appendChild(li).style.backgroundColor="white";
    ul.appendChild(li).style.color="green";
    ul.appendChild(li).style.fontSize="20px";
    ul.appendChild(li).style.width="140%";
    ul.appendChild(li).style.border="1px solid white";  
    ul.appendChild(li).style.borderRadius="10px";
    ul.appendChild(li).style.display="block";
    ul.appendChild(li).style.marginTop= "10px";
   
    
}




function addTransactionExpense(){

    var ul=document.getElementById("dépense_2");
    var li=document.createElement("li");
     li.textContent=`${selectEl.value} ${descriptionEl.value}   ${montantEl.value} FCFA`; 
  // creer du noeud de text
    li.appendChild(document.createTextNode(" "));
    // appliquer du css aux élements li creer à partir du javascript
    ul.appendChild(li) .style.listStyle="none";
    ul.appendChild(li).style.backgroundColor="white";
    ul.appendChild(li).style.color="red";
    ul.appendChild(li).style.fontSize="20px";
    ul.appendChild(li).style.width="140%";
    ul.appendChild(li).style.border="1px solid white";
    ul.appendChild(li).style.borderRadius="10px";
    ul.appendChild(li).style.display="block";
    ul.appendChild(li).style.marginTop= "10px";
  
    
}
const local=JSON.parse(localStorage.getItem("user"));

const user={
    select:selectEl.value,
    description:descriptionEl.value,
    montant:montantEl.value,
}

tabdépense.push(user)


localStorage.setItem("tabdépense",JSON.stringify(tabdépense));





 })



 
//  selectioner la reference du button


var deleteButton = document.getElementById("button_1");

var list = document.querySelector("#revenu_1");
var li = document.getElementsByTagName("li");
        
//add an event listener for the delete button
deleteButton.addEventListener("click", function(){
          
//get the parent of the  (li) 
var listItem = this.parentNode;
//get the parent of the list item (ul)
var selected = listItem.parentNode;
//remove the child from the list         


// list.parentElement.remove(selected)
list.parentNode.removeChild(list)

         
});
    
    

var removeButton = document.getElementById("button_2");

var liste = document.querySelector("#dépense_2");
var li = document.getElementsByTagName("li");
        
//add an event listener for the delete button
removeButton.addEventListener("click", function(){
          
//get the parent of the span (li) 
var listItems = this.parentNode;
//get the parent of the list item (ul)
var select = listItems.parentNode;
//remove the child from the list         


liste.parentNode.removeChild(liste)         
});









