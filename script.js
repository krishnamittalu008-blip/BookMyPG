
const properties = [
    {
        name: "Green House PG",
        city: "Jaipur",
        area: "Malviya Nagar",
        gender: "Girls",
        room: "Double",
        price: 8500,
        food: "Food Available",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700"
    },
    {
        name: "Urban Living PG",
        city: "Jaipur",
        area: "Jagatpura",
        gender: "Boys",
        room: "Single",
        price: 12000,
        food: "Food Available",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700"
    },
    {
        name: "Campus Corner",
        city: "Jaipur",
        area: "Tonk Road",
        gender: "Boys",
        room: "Triple",
        price: 6500,
        food: "No Food",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700"
    },
    {
        name: "Olive Stay",
        city: "Delhi",
        area: "Laxmi Nagar",
        gender: "Girls",
        room: "Single",
        price: 14500,
        food: "Food Available",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700"
    }
];

function displayProperties(list) {
    const container = document.getElementById("propertyList");

    container.innerHTML = "";

    list.forEach((pg, index) => {
        container.innerHTML += `
            <div class="property-card">
                <img src="${pg.image}" alt="${pg.name}">
                <div class="property-info">
                    <h3>${pg.name}</h3>
                    <p>📍 ${pg.area}, ${pg.city}</p>
                    <p>🏠 ${pg.gender} PG</p>
                    <p>🛏 ${pg.room} Sharing</p>
                    <p>🍽 ${pg.food}</p>
                    <h3>₹${pg.price.toLocaleString("en-IN")} / Month</h3>
                    <button onclick="openEnquiry(${pg.name ? index : 0})">
                        Enquire Now
                    </button>
                </div>
            </div>
        `;
    });
}

let currentProperties = properties;

function searchPG() {
    const city = document.getElementById("city").value.trim().toLowerCase();
    const area = document.getElementById("area").value.trim().toLowerCase();
    const budget = document.getElementById("budget").value;
    const gender = document.getElementById("gender").value;
    const room = document.getElementById("room").value;
    const sort = document.getElementById("sort").value;

    let result = properties.filter(pg =>
        (!city || pg.city.toLowerCase().includes(city)) &&
        (!area || pg.area.toLowerCase().includes(area)) &&
        (!budget || pg.price < Number(budget)) &&
        (!gender || pg.gender === gender) &&
        (!room || pg.room === room)
    );

    if (sort === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    currentProperties = result;
    displayProperties(result);
}

function openEnquiry(index) {
    const pg = currentProperties[index];
    openModal("Property Enquiry", pg.name + " - " + pg.area);
}

function openModal(title, description) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("success").hidden = true;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showOwnerForm() {
    openModal("List Your Property", "Share your PG details with BookMyPG.");
}

function showContactForm() {
    openModal("Contact Us", "Send your query to BookMyPG.");
}

document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success").hidden = false;
    this.reset();
});

displayProperties(properties);
