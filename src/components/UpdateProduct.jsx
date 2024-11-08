import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";
import Modal from "./Modal";
import { IoMdCloseCircle } from "react-icons/io";
import AddProductForm from "./AddNewProduct";
import { useState } from "react";

export const UpdateProduct = () => {
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
  console.log("shyam", data);
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

            <h1>form opened</h1>
            <AddProductForm />
          </div>
        </Modal>
      ) : null}
    </>
  );
};
