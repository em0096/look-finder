// Sample data for looks
const looks = [
  {
    id: 1,
    title: "Soft Glam Look",
    imageURL: "/images/example1.jpg",
    userName: "evie",
    products: [
      { id: 1, name: "Radiant Creamy Concealer" },
      { id: 2, name: "Charlotte Tilbury Flawless Filter" }
    ]
  },
  {
    id: 2,
    title: "Bronzy Glow",
    imageURL: "/images/example2.jpg",
    userName: "emma",
    products: [
      { id: 3, name: "Rare Beauty Blush" }
    ]
  }
];


function getAllLooks(){
    return looks;
}

module.exports = {getAllLooks}; // Export the function to be used in routes