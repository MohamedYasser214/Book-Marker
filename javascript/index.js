
siteNameInput= document.getElementById("siteName")
siteUrlInput = document.getElementById("siteUrl");

var elementList=[]

if(localStorage.getItem("productsContainer") !== null){
    elementList = JSON.parse(localStorage.getItem("productsContainer"));

    displayElement();
    
}

function addElement(){
    var sites={
        name:siteNameInput.value,
        Url:siteUrlInput.value
    }
    elementList.push(sites);
    console.log(elementList)
    clearElement();
    displayElement();
    localStorage.setItem("productsContainer", JSON.stringify ( elementList ));
}

function clearElement(){
    siteNameInput.value = null;
    siteUrlInput.value =null;
}


function displayElement(){
    var cartona="";
    for(var i = 0 ; i < elementList.length ; i++){
        cartona+=` <tr>
                <td>${i+1}</td>
                <td><p class="fw-medium">${elementList[i].name}</p></td>
                <td><a id="phone" href="${ elementList[i].Url}" class="btn btn-warning" target="blank" ><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
                <td><button onclick="deletElement(${i})" class="btn btn-danger pe-2" > <i class="fa-solid fa-trash-can"></i> Delet</button></td>
              </tr>`
    }
    document.getElementById("tableContent").innerHTML= cartona;
}

function deletElement(i){
    elementList.splice(i, 1);
    displayElement();
    localStorage.setItem("productsContainer", JSON.stringify ( elementList ));
}