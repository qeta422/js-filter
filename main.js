const data = [
    {
        id: 1,
        name: "Smart Watch 5ATM Waterproof",
        img: "img/watch1sport.jpg",
        price: 64,
        cat: "Sport",
    },

    {
        id: 2,
        name: "Samsung Galaxy  Classic 47mm Smartwatch",
        img: "img/watch2casual.jpg",
        price: 120,
        cat: "Casual",
    },

    {
        id: 3,
        name: "Casio Unisex F-108WH-1ACF",
        img: "img/watch3casual.jpg",
        price: 89,
        cat: "Casual",
    },

    {
        id: 4,
        name: "Nine West Women's Crystal Watch",
        img: "img/watch4luxury.jpg",
        price: 369,
        cat: "luxury",
    },

    {
        id: 5,
        name: "Casio Men's A158WA-1DF",
        img: "img/watch5dress.jpg",
        price: 156,
        cat: "Dress",
    },

    {
        id: 6,
        name: "Nine West Women's Strap Watch",
        img: "img/watch6casual.jpg",
        price: 37,
        cat: "Casual",
    },

    {
        id: 7,
        name: "Garmin 010-02427-01 Venu Smartwatch",
        img: "img/watch7dress.jpg",
        price: 130,
        cat: "Dress",
    },

    {
        id: 8,
        name: "Garmin vívoactive 5, Health and Fitness Smartwatch",
        img: "img/watch8sport.jpg",
        price: 299,
        cat: "Sport",
    },

    {
        id: 9,
        name: "Anne Klein Women's Leather Strap Watch",
        img: "img/watch9luxury.jpg",
        price: 259,
        cat: "luxury",
    },

    {
        id: 10,
        name: "Fitbit Charge 6 Fitness Tracker",
        img: "img/watch10sport.jpg",
        price: 136,
        cat: "Sport",
    },

    {
        id: 11,
        name: "Samsung Galaxy Watch 5 Pro",
        img: "img/watch11casual.jpg",
        price: 299,
        cat: "Casual",
    },

    {
        id: 12,
        name: "Amazfit Active Edge Smart Watch",
        img: "img/watch12sport.jpg",
        price: 79,
        cat: "Sport",
    },
    
]

const productsContainer = document.querySelector(".content__products");
const searchInput = document.querySelector(".filter__input--search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".price-range");
const priceValue = document.querySelector(".price-value");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product => 
        `
        <div class="content__products--product">
            <img src="${product.img}" alt="${product.cat}">
            <span class="name">${product.name}</span>
            <span class="price">$${product.price}</span>
        </div>
        `
    ).join("");
};

displayProducts(data);

searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1));
    }
    else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map(item => item.cat)
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i
    }),
];
    categoriesContainer.innerHTML = categories.map(cat =>
        `
        <li class= "cats__cat">${cat}</li>
        `
        ).join("");

        categoriesContainer.addEventListener('click', (e) => {
            const selectedCat = (e.target.textContent);

            selectedCat === "All" 
            ? displayProducts(data) 
            : displayProducts(data.filter((item) => item.cat === selectedCat))
        });
};

setCategories();