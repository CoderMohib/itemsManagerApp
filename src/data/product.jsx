export const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      categoryId: 1,
      price: 59.99,
      stock: 120,
      description: "High-quality wireless headphones with noise-cancellation and long battery life.",
      brand: "TechAudio",
      rating: 4.5,
      images: [
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Example headphone image
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      ],
      reviews: [
        {
          user: "John Doe",
          rating: 5,
          comment: "Excellent sound quality and comfortable to wear!"
        },
        {
          user: "Jane Smith",
          rating: 4,
          comment: "Good headphones but slightly overpriced."
        }
      ]
    },
    {
      id: 2,
      name: "Smartphone with AMOLED Display",
      categoryId : 2,
      price: 699.99,
      stock: 50,
      description: "Powerful smartphone with a vibrant AMOLED display and high-performance processor.",
      brand: "SuperPhone",
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1512499617640-c2f999f01f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Example smartphone image
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      ],
      reviews: [
        {
          user: "Alice Johnson",
          rating: 5,
          comment: "Amazing phone with stunning display and great battery life!"
        }
      ]
    },
    {
      id: 3,
      name: "Running Shoes",
      categoryId: 3,
      price: 89.99,
      stock: 200,
      description: "Lightweight and comfortable running shoes for daily workouts.",
      brand: "RunMaster",
      rating: 4.2,
      images: [
        "https://images.unsplash.com/photo-1597636870131-5730a798aabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", // Example running shoes image
        "https://images.unsplash.com/photo-1580910051072-08f29e07f1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      ],
      reviews: [
        {
          user: "Mike Brown",
          rating: 4,
          comment: "Good shoes for running, but they could have more cushioning."
        }
      ]
    }
  ];