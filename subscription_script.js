// Array to hold subscription objects
let subscriptions = [];

function updateList() {
    const listElement = document.getElementById('subscriptionList');
    listElement.innerHTML = ''; // Clear existing list
    let totalCost = 0;

    // Loop through all subscriptions to build the list and calculate total
    subscriptions.forEach((sub, index) => {
        // Calculate Total Cost
        totalCost += sub.cost;

        // Create List Item (Core UI Output)
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${sub.name} - <strong>$${sub.cost.toFixed(2)}</strong>
            <button onclick="removeSubscription(${index})">Remove</button>
        `;
        listElement.appendChild(listItem);
    });

    // Update the Total Cost Display (Analysis Engine Output)
    document.getElementById('totalCost').textContent = `$${totalCost.toFixed(2)}`;
}

function addSubscription() {
    const nameInput = document.getElementById('subName');
    const costInput = document.getElementById('subCost');

    const name = nameInput.value.trim();
    // Convert cost to a number and ensure it's not empty
    const cost = parseFloat(costInput.value); 

    if (name && !isNaN(cost) && cost >= 0) {
        // Add new subscription object
        subscriptions.push({ name: name, cost: cost });
        
        // Clear input fields
        nameInput.value = '';
        costInput.value = '';
        
        // Refresh the list and total cost
        updateList();
    } else {
        alert('Please enter a valid Subscription Name and Cost.');
    }
}

function removeSubscription(index) {
    // Remove the subscription at the given index
    subscriptions.splice(index, 1);
    
    // Refresh the list and total cost
    updateList();
}

// Initialize list on load
updateList();