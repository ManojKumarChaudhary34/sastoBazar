const api = "https://fakestoreapi.com/products";
export const fetchProducts = async () => {
  try {
    const fetchData = await fetch(api);
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
