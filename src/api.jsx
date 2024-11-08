export const fetchProducts = async () => {
  try {
    const fetchData = await fetch("https://fakestoreapi.com/products");
    if (fetchData.ok) {
      const jsonData = await fetchData.json();
      return jsonData;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (newProduct) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
