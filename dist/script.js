let inventory = [];
let suppliers = [];

document.getElementById("add-item-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let itemName = document.getElementById("item-name").value;
  let quantity = document.getElementById("quantity").value;
  let supplier = document.getElementById("supplier").value;

  if (itemName && quantity && supplier) {
    let item = {
      name: itemName,
      quantity: quantity,
      supplier: supplier
    };
    inventory.push(item);
    suppliers.push(supplier);
    displayInventory();
    document.getElementById("inventory-form").reset();
    document.getElementById("alert-message").innerHTML =
      "Product added successfully!";
    document.getElementById("alert-message").classList.add("alert-success");
    setTimeout(() => {
      document.getElementById("alert-message").innerHTML = "";
      document
        .getElementById("alert-message")
        .classList.remove("alert-success");
    }, 3000);
  } else {
    document.getElementById("alert-message").innerHTML =
      "Please fill in all fields!";
    document.getElementById("alert-message").classList.add("alert-danger");
    setTimeout(() => {
      document.getElementById("alert-message").innerHTML = "";
      document.getElementById("alert-message").classList.remove("alert-danger");
    }, 3000);
  }
});

function displayInventory() {
  let inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  inventory.forEach((item, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.supplier}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editItem(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
    inventoryList.appendChild(row);
  });
}

function editItem(index) {
  let item = inventory[index];
  document.getElementById("item-name").value = item.name;
  document.getElementById("quantity").value = item.quantity;
  document.getElementById("supplier").value = item.supplier;
  document.getElementById("add-item-btn").innerHTML = "Update Product";
  document.getElementById("add-item-btn").addEventListener("click", (e) => {
    e.preventDefault();
    item.name = document.getElementById("item-name").value;
    item.quantity = document.getElementById("quantity").value;
    item.supplier = document.getElementById("supplier").value;
    displayInventory();
    document.getElementById("inventory-form").reset();
    document.getElementById("add-item-btn").innerHTML = "Add Product";
    document.getElementById("alert-message").innerHTML =
      "Product updated successfully!";
    document.getElementById("alert-message").classList.add("alert-success");
    setTimeout(() => {
      document.getElementById("alert-message").innerHTML = "";
      document
        .getElementById("alert-message")
        .classList.remove("alert-success");
    }, 3000);
  });
}

function deleteItem(index) {
  inventory.splice(index, 1);
  suppliers.splice(index, 1);
  displayInventory();
  document.getElementById("alert-message").innerHTML =
    "Product deleted successfully!";
  document.getElementById("alert-message").classList.add("alert-success");
  setTimeout(() => {
    document.getElementById("alert-message").innerHTML = "";
    document.getElementById("alert-message").classList.remove("alert-success");
  }, 3000);
}