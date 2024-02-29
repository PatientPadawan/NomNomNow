const categories = [
    {
      "id": "cktdj60vp0000mxyyza1vkhe5",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Italian Pastas",
      "desc": "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      "color": "white",
      "img": "/temporary/m1.png",
      "slug": "pasta",
    },
    {
      "id": "cktdj60vp0000mxyyza1vkhe6",
      "createdAt": "2024-02-15T12:05:00Z",
      "title": "Juicy Burgers",
      "desc": "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      "color": "black",
      "img": "/temporary/m2.png",
      "slug": "burger",
    },
    {
      "id": "cktdj60vp0000mxyyza1vkhe7",
      "createdAt": "2024-02-15T12:10:00Z",
      "title": "Cheesy Pizzas",
      "desc": "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      "color": "white",
      "img": "/temporary/m3.png",
      "slug": "pizza",
    }
]

const products = [
    {
      "id": "1",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Sicilian",
      "desc": "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      "img": "/temporary/p1.png",
      "price": 24.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "2",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Bacon Deluxe",
      "desc": "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      "img": "/temporary/p2.png",
      "price": 29.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "burger"
    },
    {
      "id": "3",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Bella Napoli",
      "desc": "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      "img": "/temporary/p3.png",
      "price": 24.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "4",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Spicy Arrabbiata",
      "desc": "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
      "img": "/temporary/p4.png",
      "price": 26.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pasta"
    },
    {
      "id": "5",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Jalapeño Fiesta",
      "desc": "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
      "img": "/temporary/p5.png",
      "price": 29.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "burger"
    },
    {
      "id": "6",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Margherita Magic",
      "desc": "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
      "img": "/temporary/p6.png",
      "price": 24.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "7",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Garlic Parmesan Linguine",
      "desc": "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      "img": "/temporary/p7.png",
      "price": 28.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pasta"
    },
    {
      "id": "8",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Mediterranean Delight",
      "desc": "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      "img": "/temporary/p8.png",
      "price": 32.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "9",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Hawaiian Teriyaki",
      "desc": "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      "img": "/temporary/p9.png",
      "price": 29.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "burger"
    },
    {
      "id": "10",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Pesto Primavera",
      "desc": "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      "img": "/temporary/p10.png",
      "price": 28.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "11",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Veggie Supreme",
      "desc": "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      "img": "/temporary/p11.png",
      "price": 24.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    },
    {
      "id": "12",
      "createdAt": "2024-02-15T12:00:00Z",
      "title": "Four Cheese Fantasy",
      "desc": "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      "img": "/temporary/p12.png",
      "price": 22.9,
      "isFeatured": false,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 0
        },
        {
          "title": "Medium",
          "additionalPrice": 4
        },
        {
          "title": "Large",
          "additionalPrice": 6
        }
      ],
      "catSlug": "pizza"
    }
]

module.exports = {
    products,
    categories
}