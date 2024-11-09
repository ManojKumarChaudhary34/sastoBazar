import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "./Modal";
import { IoMdCloseCircle } from "react-icons/io";
import AddProductForm from "./AddNewProduct";

import { fetchProducts } from "../api";
import Card from "./Card";

const CardList = () => {
  const [openModal, setOpenModal] = useState(false);

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
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>

            <h1 className="text-4xl">Enter Details</h1>
            <AddProductForm initialValue={data} />
          </div>
        </Modal>
      ) : null}
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
