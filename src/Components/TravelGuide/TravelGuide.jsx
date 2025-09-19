import React from 'react';

// Hardcoded data with at least four items for each category
const travelData = {
    "Hotels": [
        {
            "Name": "The Leela Palace",
            "Description": "A 5-star luxury hotel in Chanakyapuri, known for its opulent design and world-class service.",
            "Price": "₹15000/night",
            "link": "https://example.com/leela-palace",
            "photo": "https://media.istockphoto.com/id/2210020912/photo/palace-on-pichola-lake-udaipur.jpg?s=612x612&w=0&k=20&c=fQ7S0QsySfECAwybAVyu3Q9TA7PFuYr0rxo8wYGEHXM="
        },
        {
            "Name": "Hyatt Regency Delhi",
            "Description": "An upscale hotel with a large outdoor pool, fitness center, and multiple dining options near the city center.",
            "Price": "₹9000/night",
            "link": "https://example.com/hyatt-regency-delhi",
            "photo": "https://media.istockphoto.com/id/1352230557/photo/hyatt-regency-new-delhi.jpg?s=612x612&w=0&k=20&c=E_M7bSdcOIwpdzPOzDXjixo76qhbV0w1O668AUf-3VY="
        },
        {
            "Name": "The Lodhi",
            "Description": "A contemporary hotel with an urban resort feel, offering spacious rooms and a tranquil spa.",
            "Price": "₹12000/night",
            "link": "https://example.com/the-lodhi",
            "photo": "https://media.istockphoto.com/id/1327056099/photo/unique-shophouse-with-green-trees-and-clear-sky.jpg?s=612x612&w=0&k=20&c=TzcRaY00X4g5p6lQ1SAhrSubna3tsn2_py3vUWbFKnk="
        },
        {
            "Name": "Mountain View Resort",
            "Description": "Luxury resort with mountain views and spa",
            "Price": "₹4500/night",
            "link": "https://example.com/mountain-view",
            "photo": "https://media.istockphoto.com/id/2222050017/photo/a-sunny-street-in-the-village-of-dobrota-montenegro-lined-with-modern-houses-and-green.jpg?s=612x612&w=0&k=20&c=DeC6LIg_rM5M4tXuy_FYGnYz1gX9AQo8xer6zKy-zjY="
        }
    ],
    "Res/Cafes": [
        {
            "Name": "Indian Accent",
            "Description": "A fine-dining restaurant offering creative Indian cuisine with a contemporary twist.",
            "Price": "₹5000 for two",
            "link": "https://example.com/indian-accent",
            "photo": "https://media.istockphoto.com/id/1312766955/photo/fine-dining-restaurant-interior.jpg?s=612x612&w=0&k=20&c=S29GFytiUmTwzVjR_IJU0Ync7FT_C6y-MTLWzqleEwo="
        },
        {
            "Name": "Hauz Khas Social",
            "Description": "A popular co-working space and cafe with a lively atmosphere, overlooking the Hauz Khas ruins.",
            "Price": "₹1500 for two",
            "link": "https://example.com/hauz-khas-social",
            "photo": "https://media.istockphoto.com/id/2168528609/video/north-indian-restaurant-interior-design-in-bangkok.jpg?s=640x640&k=20&c=FpnLE3RQd_b81DPe1BG3GOp7dRY1RJHRs2neYtb4xS8="
        },
        {
            "Name": "Big Chill Cafe",
            "Description": "An iconic cafe chain known for its retro decor, Italian food, and delicious shakes.",
            "Price": "₹1000 for two",
            "link": "https://example.com/big-chill-cafe",
            "photo": "https://media.istockphoto.com/id/523645719/photo/loris-diner.jpg?s=612x612&w=0&k=20&c=m0M2b16qDt_xl9XaNAvU6VaAhgfbHtdOCQmxyGjJzLs="
        },
        {
            "Name": "The Food Lounge",
            "Description": "Casual dining with multi-cuisine menu",
            "Price": "₹900 for two",
            "link": "https://example.com/food-lounge",
            "photo": "https://media.istockphoto.com/id/523645719/photo/loris-diner.jpg?s=612x612&w=0&k=20&c=m0M2b16qDt_xl9XaNAvU6VaAhgfbHtdOCQmxyGjJzLs="
        }
    ],
    "Things to do": [
        {
            "Name": "Red Fort",
            "Description": "A historic fort complex built by Mughal emperor Shah Jahan, a UNESCO World Heritage Site.",
            "Price": "₹35 per person",
            "link": "https://example.com/red-fort",
            "photo": "https://media.istockphoto.com/id/501905872/photo/red-fort-delhi-india.jpg?s=612x612&w=0&k=20&c=TMHyWfCRBVIrDGOpmOWGJWKerZvu0tC1Z1-yYDe2QwM="
        },
        {
            "Name": "Qutub Minar",
            "Description": "A towering minaret and a UNESCO World Heritage Site, with intricate carvings and a complex of monuments.",
            "Price": "₹30 per person",
            "link": "https://example.com/qutub-minar",
            "photo": "https://media.istockphoto.com/id/1148288618/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=yC7JNn97jo0mtQsknz7gHKu92_gAnHjCY17GiolvVTw="
        },
        {
            "Name": "Humayun's Tomb",
            "Description": "The tomb of the Mughal emperor Humayun, often considered a precursor to the Taj Mahal.",
            "Price": "₹30 per person",
            "link": "https://example.com/humayun-tomb",
            "photo": "https://media.istockphoto.com/id/2227443906/photo/new-delhi-humayun-s-tomb.jpg?s=612x612&w=0&k=20&c=gQzd7i3SzclOZEnQ6TI3kUd9F7eNGyzZPffshAMxOeY="
        },
        {
            "Name": "India Gate",
            "Description": "A war memorial and one of Delhi's most iconic landmarks, located in the heart of the city.",
            "Price": "Free",
            "link": "https://example.com/india-gate",
            "photo": "https://media.istockphoto.com/id/481501921/photo/india-gate-in-new-dehli-at-dusk.jpg?s=612x612&w=0&k=20&c=knfj7osmgBO2DjhquGTMRkNzvGBX3TscPm8675hMYCE="
        }
    ],
    "Shopping": [
        {
            "Name": "Chandni Chowk",
            "Description": "One of Delhi's oldest and busiest markets, known for spices, clothes, and street food.",
            "Price": "Varies",
            "link": "https://example.com/chandni-chowk",
            "photo": "https://media.istockphoto.com/id/487204393/photo/busy-streets-of-the-old-delhi-spice-market-by-night.jpg?s=612x612&w=0&k=20&c=xjbb83IRqXpeYRdBQIPaCiXKP6AscG8DAPczjXUsiRE="
        },
        {
            "Name": "Sarojini Nagar Market",
            "Description": "A famous budget-friendly market for clothes, accessories, and shoes.",
            "Price": "Varies",
            "link": "https://example.com/sarojini-nagar",
            "photo": "https://media.istockphoto.com/id/1424798203/photo/a-hand-of-a-woman-selecting-earrings-on-street-market-shop-in-red-fort-delhi-street-shopping.jpg?s=612x612&w=0&k=20&c=nvJm9FpUAXrA7Pp3d6Gp-B92kBlv4jv7bQVDixCT1Bg="
        },
        {
            "Name": "Dilli Haat",
            "Description": "An open-air market with stalls from different states of India, offering handicrafts, food, and cultural performances.",
            "Price": "₹30 per person (entry)",
            "link": "https://example.com/dilli-haat",
            "photo": "https://media.istockphoto.com/id/2176103349/photo/dilli-haat-logo-outside-the-market.jpg?s=612x612&w=0&k=20&c=4nSaBhEMCFf1RxurNjyWub6ko45Dobyn30AJkPGH-wQ="
        },
        {
            "Name": "Connaught Place",
            "Description": "A colonial-era commercial hub with international brands, restaurants, and a bustling inner circle market.",
            "Price": "Varies",
            "link": "https://example.com/connaught-place",
            "photo": "https://media.istockphoto.com/id/1215951903/photo/coronavirus-quarantine-lockdown-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=nyoroLru0gAFpmjbRzIPw2yZWUoQMJ4f64cH7XiIMQ4="
        }
    ]
};

// CSS for all cards and the main page layout
const travelGuideCss = `
    .travel-guide-container {
        padding: 2rem;
        font-family: sans-serif;
        color: #333;
    }
    .travel-guide-container h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: #1a1a1a;
    }
    .travel-guide-container h2 {
        font-size: 1.8rem;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #ddd;
        padding-bottom: 0.5rem;
        color: #444;
    }
    .hotels-container,
.restaurants-container,
.activities-container,
.shopping-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 1.5rem; 
    justify-content: space-between; /* Change this line */
    align-items: stretch; /* Add this to make all cards the same height */
}
    .card-container {
        flex: 1 1 250px; /* Adjusted flex-basis for better desktop spacing */
        max-width: 250px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
    }
    .card-container:hover {
        transform: translateY(-5px); 
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    .card-container img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .card-container h3 {
        font-size: 1.2rem;
        margin: 1rem 1rem 0.5rem 1rem;
        color: #333;
    }
    .card-container p {
        font-size: 1rem;
        color: #666;
        margin: 0 1rem 0.5rem 1rem;
    }
    .card-container a {
        display: inline-block;
        text-decoration: none;
        background-color: #007bff;
        color: #fff;
        padding: 0.75rem 1rem;
        border-radius: 4px;
        text-align: center;
        margin: 0 1rem 1rem 1rem;
        transition: background-color 0.3s ease;
    }
    .card-container a:hover {
        background-color: #0056b3;
    }
    @media (max-width: 768px) {
        .hotels-container,
        .restaurants-container,
        .activities-container,
        .shopping-container {
            flex-direction: column; 
            align-items: center;
        }
        .card-container {
            width: 90%; 
            max-width: none;
        }
    }
`;

// Individual Card Components
const HotelCard = ({ hotel }) => (
    <div className="card-container">
        <img src={hotel.photo} alt={hotel.Name} />
        <h3>{hotel.Name}</h3>
        <p>{hotel.Description}</p>
        <p>Price: {hotel.Price}</p>
        <a href={hotel.link} target="_blank" rel="noopener noreferrer">Book Now</a>
    </div>
);

const RestaurantCard = ({ restaurant }) => (
    <div className="card-container">
        <img src={restaurant.photo} alt={restaurant.Name} />
        <h3>{restaurant.Name}</h3>
        <p>{restaurant.Description}</p>
        <p>Price: {restaurant.Price}</p>
        <a href={restaurant.link} target="_blank" rel="noopener noreferrer">View Details</a>
    </div>
);

const ActivityCard = ({ activity }) => (
    <div className="card-container">
        <img src={activity.photo} alt={activity.Name} />
        <h3>{activity.Name}</h3>
        <p>{activity.Description}</p>
        <p>Price: {activity.Price}</p>
        <a href={activity.link} target="_blank" rel="noopener noreferrer">View Details</a>
    </div>
);

const ShoppingCard = ({ shopping }) => (
    <div className="card-container">
        <img src={shopping.photo} alt={shopping.Name} />
        <h3>{shopping.Name}</h3>
        <p>{shopping.Description}</p>
        <p>Price: {shopping.Price}</p>
        <a href={shopping.link} target="_blank" rel="noopener noreferrer">View Details</a>
    </div>
);


// Main Travel Guide Component
const TravelGuide = () => {
    React.useEffect(() => {
      const styleSheet = document.createElement("style");
      styleSheet.innerText = travelGuideCss;
      document.head.appendChild(styleSheet);
    }, []);

    return (
        <div className="travel-guide-container">
            <h1>Travel Guide: Delhi</h1>

            <h2>Hotels</h2>
            <div className="hotels-container">
                {travelData.Hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </div>

            <h2>Restaurants & Cafes</h2>
            <div className="restaurants-container">
                {travelData["Res/Cafes"].map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                ))}
            </div>

            <h2>Things to Do</h2>
            <div className="activities-container">
                {travelData["Things to do"].map((activity, index) => (
                    <ActivityCard key={index} activity={activity} />
                ))}
            </div>

            <h2>Shopping</h2>
            <div className="shopping-container">
                {travelData.Shopping.map((shop, index) => (
                    <ShoppingCard key={index} shopping={shop} />
                ))}
            </div>
        </div>
    );
};

export default TravelGuide;