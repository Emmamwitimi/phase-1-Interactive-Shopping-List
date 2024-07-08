document.addEventListener("DOMContentLoaded", ()=>{
    //global variables
    const form = document.getElementById("list-form");
    let shoppingList = document.getElementById("items");
    const container = document.getElementById("list");
    //add eventlistener to the form
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const item = document.createElement("li");
        const itemDescription = document.getElementById("new-item-description").value;
        item.textContent = itemDescription;
        shoppingList.appendChild(item);

        //delete and edit  btn
        const del = document.createElement("button");
        const edit = document.createElement("button");
        del.textContent = "X";
        edit.textContent ="edit";
        del.addEventListener("click", ()=>{
            item.remove();
        });
        edit.addEventListener("click", ()=>{
            const newDescription = prompt("Edit item:", item.description);
        });
        item.appendChild(del);
        item.appendChild(edit);
        //empty the textarea after submission
    document.getElementById("new-item-description").value = "";
        
    });
    //save btn
    const save = document.createElement("button");
    save.textContent = "save";
    save.addEventListener("click", ()=>{
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    });
    container.appendChild(save);
    

});