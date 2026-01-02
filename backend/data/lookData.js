// Sample data for looks
const looks = [
  {
    id: look1,
    title: "Soft Glam Look",
    imageURL: "http://localhost:4000/looks/Look1.jpg",
    user: { 
      id: user1, 
      userName: "evie"
    },
    products: [
      { id: product1, name: "Radiant Creamy Concealer" },
      { id: product2, name: "Charlotte Tilbury Flawless Filter" }
    ]
  },
  {
    id: look2,
    title: "Bronzy Glow",
    imageURL: "http://localhost:4000/looks/Look1.jpg",
    user: { 
      id: user2, 
      userName: "emma" 
    },
    products: [
      { id: product3, name: "Rare Beauty Blush" }
    ]
  }
];

function getAllLooks(){
    return looks;
}

module.exports = {getAllLooks}; // Export the function to be used in routes