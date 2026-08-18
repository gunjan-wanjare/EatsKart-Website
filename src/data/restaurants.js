const uniqueRestaurants = [
  {
    id: 1,
    name: 'Moksh',
    rating: 4.2,
    priceForTwo: '₹1,800 for two',
    location: 'SG Highway, Ahmedabad',
    distance: '1.5 km',
    image: '/restro/babylon.png',
  },
  {
    id: 2,
    name: 'Saffron',
    rating: 4.5,
    priceForTwo: '₹2,200 for two',
    location: 'Prahlad Nagar, Ahmedabad',
    distance: '2.0 km',
    image: '/restro/zythum.png',
  },
  {
    id: 3,
    name: 'Babylon Brewery & Club',
    rating: 4.5,
    priceForTwo: '₹2,500 for two',
    location: 'Naranpura, Ahmedabad',
    distance: '14.6 km',
    image: '/restro/babylon.png',
  },
  {
    id: 4,
    name: 'Zythum Brewing Co.',
    rating: 4.4,
    priceForTwo: '₹3,500 for two',
    location: 'Science City Rd, Ahmedabad',
    distance: '12.3 km',
    image: '/restro/zythum.png',
  },
  {
    id: 5,
    name: 'Makau',
    rating: 4.3,
    priceForTwo: '₹2,800 for two',
    location: 'Bodakdev, Ahmedabad',
    distance: '3.0 km',
    image: '/restro/makau.png',
  },
  {
    id: 6,
    name: '63 Degrees',
    rating: 4.6,
    priceForTwo: '₹3,200 for two',
    location: 'CG Road, Ahmedabad',
    distance: '1.8 km',
    image: '/restro/63 Degrees.png',
  },
  {
    id: 7,
    name: 'The Spice Route',
    rating: 4.1,
    priceForTwo: '₹1,600 for two',
    location: 'Satellite, Ahmedabad',
    distance: '2.2 km',
    image: '/restro/makau.png',
  },
  {
    id: 8,
    name: 'Urban Tandoor',
    rating: 4.7,
    priceForTwo: '₹2,000 for two',
    location: 'Vastrapur, Ahmedabad',
    distance: '0.9 km',
    image: '/restro/63 Degrees.png',
  },
];

const COLS = 4;
const ROWS = 2;
const PAGE_SIZE = COLS * ROWS;

function toColumnMajorPage(page) {
  const ordered = [];
  for (let col = 0; col < COLS; col += 1) {
    for (let row = 0; row < ROWS; row += 1) {
      const item = page[row * COLS + col];
      if (item) ordered.push(item);
    }
  }
  return ordered;
}

function paginateForGrid(list) {
  const pages = [];
  for (let i = 0; i < list.length; i += PAGE_SIZE) {
    pages.push(...toColumnMajorPage(list.slice(i, i + PAGE_SIZE)));
  }
  return pages;
}

const uniquePage = paginateForGrid(uniqueRestaurants);
const repeatedPage = uniquePage.map((restaurant) => ({
  ...restaurant,
  id: `${restaurant.id}-repeat`,
}));

const restaurants = [...uniquePage, ...repeatedPage];

export default restaurants;
