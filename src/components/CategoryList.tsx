import React, { useEffect, useState } from 'react';
import axios from 'axios';
//we define an interface for the s  product structure we expect from the api.
interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
}
// we define an interface for the structure we expect from the api for category
interface Category {
  name: string;
  image: string;
}

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');

        const categoryMap: { [key: string]: string } = {};

        response.data.forEach(product => {
          if (!categoryMap[product.category]) {
            categoryMap[product.category] = product.image;
          }
        });
        //this line converts map into array  and takes first 4 categories and makes them in object wtih name and image properties.
        const uniqueCategories = Object.entries(categoryMap).slice(0, 4).map(([name, image]) => ({
          name,
          image,
        }));

        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Došlo je do greške pri učitavanju kategorija:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleButtonClick = async (category: string) => {
    setSelectedCategory(category);

    try {
      const response = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data.slice(0, 5)); 
    } catch (err) {
      console.error('Došlo je do greške pri učitavanju proizvoda:', err);
    }
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setProducts([]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md text-center">
            <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-t" />
            <h2 className="text-lg font-semibold mt-2">{category.name}</h2>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => handleButtonClick(category.name)}
            >
              Enter Here
            </button>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Proizvodi u kategoriji: {selectedCategory}</h3>
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-md text-center">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-t" />
                <h4 className="text-lg font-semibold mt-2">{product.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;


