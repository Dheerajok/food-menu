import React from 'react';

const menuItems = [
    {
        id: 1,
        name: "Paneer Tikka",
        brand: "MenuMagic",
        image: "https://img.freepik.com/premium-photo/starter-snack-paneer-tikka-with-stick-plate-with-green-chutney-isolated-white-indian-cuisine-dish-with-grilled-cottage-cheese-with-vegetables-spices_466689-1192.jpg?semt=ais_hybrid&w=740",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 2,
        name: "Veg Burger",
        brand: "MenuMagic",
        image: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-floor_140725-89599.jpg?ga=GA1.1.1788299029.1749745470&semt=ais_hybrid&w=740",
        price: 129,
        originalPrice: 159,
    },
    {
        id: 3,
        name: "Chole Bhature",
        brand: "MenuMagic",
        image: "https://img.freepik.com/premium-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24971.jpg?ga=GA1.1.1788299029.1749745470&semt=ais_hybrid&w=740",
        price: 179,
        originalPrice: 229,
    },
    {
        id: 4,
        name: "French Fries",
        brand: "MenuMagic",
        image: "https://img.freepik.com/free-photo/top-view-delicious-fries-sauce_23-2149235944.jpg?ga=GA1.1.1788299029.1749745470&semt=ais_hybrid&w=740",
        price: 89,
        originalPrice: 109,
    },
    {
        id: 5,
        name: "Tandoori Platter",
        brand: "MenuMagic",
        image: "https://img.freepik.com/premium-photo/malai-chicken-tikka-murgh-malai-is-mouthwatering-juicy-grilled-chicken-recipe_466689-77055.jpg?ga=GA1.1.1788299029.1749745470&semt=ais_hybrid&w=740",
        price: 299,
        originalPrice: 349,
    },
    {
        id: 6,
        name: "Spring Rolls",
        brand: "MenuMagic",
        image: "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535886.jpg?ga=GA1.1.1788299029.1749745470&semt=ais_hybrid&w=740",
        price: 119,
        originalPrice: 149,
    },
];

const Home = () => {
    return (
        <>
            <div className="text-center p-5">
                <h1 className="font-bold text-4xl">
                    Food <span className="text-amber-300">Menu</span>
                </h1>
            </div>

            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
            >
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <a href="#">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{item.brand}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {item.name}
                                </p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        ₹{item.price}
                                    </p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">₹{item.originalPrice}</p>
                                    </del>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Home;
