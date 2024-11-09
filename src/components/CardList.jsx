import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../api";
import Card from "./Card";

const CardList = () => {
  //Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <h2>loading....</h2>;
  }
  if (error) {
    return <h2>Error:{error.message}</h2>;
  }
  if (!data) {
    return <div>No Data</div>;
  }
  console.log("Fetched Data:", data);

  return (
    <>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-6 md:grid md:grid-cols-4 gap-4">
        {data.map((eachProduct) => {
          return (
            <div key={eachProduct.id}>
              <Card
                id={eachProduct.id}
                image={eachProduct.image}
                title={eachProduct.title}
                price={eachProduct.price}
                count={eachProduct.rating.count}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
