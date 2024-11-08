import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchProducts } from "../api";
import { useState } from "react";
import Modal from "./Modal";
import { IoMdCloseCircle } from "react-icons/io";
import AddProductForm from "./AddNewProduct";
import { UpdateProduct } from "./UpdateProduct";

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();
  //Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: fetchProducts,
  });
  //function to delete product
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (data, id) => {
      console.log(data, id);
      queryClient.setQueryData(["getProducts"], (currProduct) => {
        return currProduct?.filter((productId) => productId.id !== id);
      });
    },
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
  console.log("ram", data);

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
      <div className="grid grid-cols-4 gap-4 bg-slate-500">
        {data.map((eachProduct) => {
          return (
            <div key={eachProduct.id}>
              <div
                className="flex flex-col gap-2 relative group
        max-w-60 h-[270px] rounded-md hover:shadow-md hover:border hover:border-red-500"
              >
                <div className="h-[55%] flex justify-center bg-bg-image rounded-md">
                  <img
                    className="h-[100%]"
                    src={eachProduct.image}
                    alt="image is not downloaded"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-normal line-clamp-2">
                    {eachProduct.title}
                  </h1>
                  <h2>{eachProduct.price}</h2>
                  <p className="font-semibold text-xl text-red-600">
                    {eachProduct.rating.count}
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-1 mr-1 absolute top-0 right-0 ">
                  <img
                    className="h-4 hidden group-hover:block hover:bg-slate-400"
                    onClick={() => <UpdateProduct />}
                    src="update.png"
                    alt="edit image"
                  />
                  <img
                    onClick={() => deleteMutation.mutate(eachProduct.id)}
                    className="h-4 hidden group-hover:block"
                    src="delete.png"
                    alt="delete image"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
