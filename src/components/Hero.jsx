import { useState } from "react";
import Modal from "./Modal";
import { IoMdCloseCircle } from "react-icons/io";
import AddProductForm from "./AddNewProduct";

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
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

            <h1 className="text-2xl">Product Form:</h1>
            <AddProductForm />
          </div>
        </Modal>
      ) : null}

      <section className="h-auto flex flex-col items-center gap-5 pb-8 sm:md:flex sm:md:flex-row-reverse">
        <div>
          <img
            className="h-[250px] sm:h-[300px] md:h-[350px] items-center"
            src="banner.jpg"
            alt="hero section image"
          />
        </div>
        <div className="flex flex-col items-center sm:md:flex sm:md:flex-col sm:md:items-start gap-4">
          <h1 className="text-3xl sm:md:text-4xl font-bold">
            Your One-Stop Shop for Everything You Need
          </h1>
          <p className="text-base sm:md:text-xl">
            Fast Delivery, Exclusive Deals, and Premium Quality Guaranteed!
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-black hover:bg-primary-clr text-2xl sm:md:text-3xl px-6 py-2 w-fit rounded-lg text-white"
          >
            Add item
          </button>
        </div>
      </section>
    </>
  );
};
