

export async function fetchProductsAndCategories() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
  
      const uniqueCategories = [...new Set(products.map((product) => product.category))];
  
      return { products, categories: uniqueCategories };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [], categories: [] }; // Return empty arrays as fallback
    }
  }
  