let add=document.getElementById("additems")
let lstitem=document.getElementById("listitems")
let itemtodo=document.getElementById("itemstodo")

add.addEventListener("click",()=>{
    let items=document.createElement("ul")
    items.classList.add("styling")
    items.innerText=`>${lstitem.value}`
    itemtodo.appendChild(items)
    lstitem.value=""
    items.addEventListener("click",()=>{
        itemtodo.removeChild(items)
    })
    
})
