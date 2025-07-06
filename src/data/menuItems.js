export const menuItems = {
  burgers: [
    {
      id: 'classic-burger',
      name: 'Classic Burger',
      price: 2.99,
      description: 'Beef patty with lettuce, tomato, and special sauce',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:1-3-product-tile-desktop',
      options: [
        { name: 'Extra Cheese', price: 0.50 },
        { name: 'Extra Pickles', price: 0.25 },
        { name: 'Add Bacon', price: 1.00 }
      ]
    },
    {
      id: 'cheese-burger',
      name: 'Cheeseburger',
      price: 3.29,
      description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-3-product-tile-desktop',
      options: [
        { name: 'Extra Cheese', price: 0.50 },
        { name: 'Add Bacon', price: 1.00 }
      ]
    },
    {
      id: 'double-burger',
      name: 'Double Burger',
      price: 3.99,
      description: 'Two beef patties with cheese, lettuce, tomato, and special sauce',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-3-product-tile-desktop',
      options: [
        { name: 'Extra Cheese', price: 0.50 },
        { name: 'Add Bacon', price: 1.00 },
        { name: 'Add Avocado', price: 1.50 }
      ]
    }
  ],
  chicken: [
    {
      id: 'fried-chicken',
      name: 'Fried Chicken',
      price: 3.99,
      description: 'Crispy fried chicken pieces',
      image: 'https://assets.kfcapi.com//fit-in/640x0/api/product/c52abe76-9cf6-4f1e-a93d-6bded7649136.jpg',
      options: [
        { name: 'Extra Sauce', price: 0.50 },
        { name: 'Spicy', price: 0.00 }
      ]
    },
    {
      id: 'chicken-tenders',
      name: 'Chicken Tenders',
      price: 3.99,
      description: 'Breaded chicken tenders with dipping sauce',
      image: 'https://assets.kfcapi.com//fit-in/640x0/api/product/3d976f01-b375-4e53-869d-f9ccefa01410.jpg',
      options: [
        { name: 'Extra Sauce', price: 0.50 },
        { name: 'BBQ Sauce', price: 0.00 },
        { name: 'Ranch Sauce', price: 0.00 }
      ]
    },
    {
      id: 'spicy-wings',
      name: 'Spicy Wings',
      price: 2.99,
      description: 'Spicy chicken wings',
      image: 'https://assets.kfcapi.com//fit-in/640x0/api/product/d95fae26-a309-46a6-95a6-ca96f2423310.jpg',
      options: [
        { name: 'Extra Sauce', price: 0.50 },
        { name: 'Blue Cheese Dip', price: 1.00 }
      ]
    }
  ],
  sides: [
    {
      id: 'french-fries',
      name: 'French Fries',
      price: 2.99,
      description: 'Crispy golden french fries',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-medium:1-3-product-tile-desktop',
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 'onion-rings',
      name: 'Onion Rings',
      price: 3.99,
      description: 'Crispy battered onion rings',
      image: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/1d5041d17bc3cadda2d285e06bbb031ec02ad6d0-590x393.png?w=750&q=40&fit=max&auto=format'
    },
    {
      id: 'apple-slices',
      name: 'Apple Slices',
      price: 1.49,
      description: 'Fresh apple slices',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Apple-Slices:1-3-product-tile-desktop'
    }
  ],
  drinks: [
    {
      id: 'coca-cola',
      name: 'Coca Cola',
      price: 2.29,
      description: 'Refreshing carbonated beverage',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small:1-3-product-tile-desktop',
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 'milkshake',
      name: 'Milkshake',
      price: 3.99,
      description: 'Thick and creamy milkshake',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chocolate-McCafe-Shake-Medium:1-3-product-tile-desktop',
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 'iced-tea',
      name: 'Iced Tea',
      price: 2.49,
      description: 'Refreshing iced tea',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Iced-Tea-Large:1-3-product-tile-desktop',
      sizes: ['Small', 'Medium', 'Large']
    }
  ],
  desserts: [
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      price: 2.99,
      description: 'Creamy vanilla ice cream',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:1-3-product-tile-desktop',
      options: [
        { name: 'Chocolate Sauce', price: 0.50 },
        { name: 'Sprinkles', price: 0.25 }
      ]
    },
    {
      id: 'apple-pie',
      name: 'Apple Pie',
      price: 3.99,
      description: 'Warm apple pie with cinnamon',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Baked-Hot-Apple-Pie:1-3-product-tile-desktop'
    },
    {
      id: 'hot-fudge-sundae',
      name: 'Hot Fudge Sundae',
      price: 3.99,
      description: 'Rich hot fudge sundae',
      image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hot-Fudge-Sundae:1-3-product-tile-desktop'
    }
  ]
};
