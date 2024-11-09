import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, updateProduct } from "../api";

const Card = ({ id, image, title, price, count }) => {
  const queryClient = useQueryClient();
  //function to delete product
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (data, id) => {
      console.log("deleted data is:", data, id);
      queryClient.setQueryData(["getProducts"], (currProduct) => {
        return currProduct?.filter((productId) => productId.id !== id);
      });
      alert("Product deleted successfully");
    },
  });
  //function to update product
  const updateMutation = useMutation({
    mutationFn: (id) => updateProduct(id),
    onSuccess: (data, id) => {
      console.log("updated data is:", data, id);
      queryClient.setQueryData(["getProducts"], (currProduct) => {
        return currProduct?.map((product) =>
          product.id == id
            ? {
                ...product,
                title: data.title,
                price: data.price,
                image: data.image,
                count: data.count,
              }
            : product
        );
      });
      alert("Product updated successfully");
    },
  });
  return (
    <>
      <div
        className="flex flex-col w-80 h-96 mb-4 sm:md:mb-0 relative group shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        sm:md:w-full rounded-md hover:shadow-md hover:border hover:border-red-500"
      >
        <div className="h-[60%] flex justify-center rounded-md overflow-hidden">
          <img className="h-[100%]" src={image} alt="image is not downloaded" />
        </div>
        <div className="flex flex-col gap-2 pt-3 pl-2">
          <h1 className="font-normal line-clamp-2 text-xl">{title}</h1>
          <h2 className="text-2xl text-primary-clr font-semibold">
            Rs. {price}
          </h2>
          <p className="text-xl">{count} Sold</p>
        </div>
        <div className="flex flex-col gap-1 mt-1 mr-1 absolute top-0 right-0 ">
          <img
            className="h-9 hidden group-hover:block p-2 hover:bg-black rounded-xl"
            onClick={() => updateMutation.mutate(id)}
            src="update.png"
            alt="edit image"
          />
          <img
            onClick={() => deleteMutation.mutate(id)}
            className="h-9 hidden group-hover:block p-2 hover:bg-black rounded-xl"
            src="delete.png"
            alt="delete image"
          />
        </div>
      </div>
    </>
  );
};
export default Card;
