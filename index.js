document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("list-form");
    const shoppingList = document.getElementById("items");
    const container = document.getElementById("list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const item = document.createElement("li");
        const itemDescription = document.getElementById("new-item-description").value;

        // Setting up the item list with flex properties
        item.className = "bg-white p-4 rounded-lg shadow-md flex justify-between items-center "; // Added flex and other classes

        const descriptionSpan = document.createElement("span");
        descriptionSpan.textContent = itemDescription;
        descriptionSpan.className = "text-lg font-medium text-gray-700 flex-grow"; // Allow the description to take available space

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "flex space-x-2"; // Space between buttons

        const del = document.createElement("button");
        const edit = document.createElement("button");
        del.textContent = "X";
        edit.textContent = "Edit";

        del.className = "bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition-colors duration-200";
        edit.className = "bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500 transition-colors duration-200";

        del.addEventListener("click", () => {
            item.remove();
        });

        edit.addEventListener("click", () => {
            const newDescription = prompt("Edit item:", itemDescription);
            if (newDescription) {
                descriptionSpan.textContent = newDescription; // Update the description
            }
        });

        buttonContainer.appendChild(edit);
        buttonContainer.appendChild(del);
        item.appendChild(descriptionSpan);
        item.appendChild(buttonContainer);
        shoppingList.appendChild(item);

        document.getElementById("new-item-description").value = "";
    });

    const save = document.createElement("button");
    save.textContent = "Save List";
    save.id = "save";
    save.className = "mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors duration-200"; // Added save button styles
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
