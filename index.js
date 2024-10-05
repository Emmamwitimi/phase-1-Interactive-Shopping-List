document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("list-form");
    const shoppingList = document.getElementById("items");
    const container = document.getElementById("list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const item = document.createElement("li");
        const itemDescription = document.getElementById("new-item-description").value;
        item.textContent = itemDescription;

        const del = document.createElement("button");
        const edit = document.createElement("button");
        del.textContent = "X";
        edit.textContent = "Edit";

        del.addEventListener("click", () => {
            item.remove();
        });

        edit.addEventListener("click", () => {
            const newDescription = prompt("Edit item:", item.textContent);
            if (newDescription) item.textContent = newDescription;
            item.appendChild(del);
            item.appendChild(edit);
        });

        item.appendChild(del);
        item.appendChild(edit);
        shoppingList.appendChild(item);

        document.getElementById("new-item-description").value = "";
    });

    const save = document.createElement("button");
    save.textContent = "Save List";
    save.id = "save";
    save.addEventListener("click", () => {
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList.innerHTML));
        alert("Shopping list saved!");
    });

    container.appendChild(save);

    const savedList = localStorage.getItem("shoppingList");
    if (savedList) {
        shoppingList.innerHTML = JSON.parse(savedList);
    }
});
