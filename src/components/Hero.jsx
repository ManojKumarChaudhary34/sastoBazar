import { useState } from "react";
import Modal from "./Modal";
import { IoMdCloseCircle } from "react-icons/io";
import FormUI from "../Forms/FormUI";

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  console.log("Modal...", openModal);
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
            <FormUI />
          </div>
        </Modal>
      ) : null}

      <section className="flex items-center">
        <div>
          <h1>Your One-Stop Shop for Everything You Need</h1>
          <p>Fast Delivery, Exclusive Deals, and Premium Quality Guaranteed!</p>
          <button onClick={() => setOpenModal(true)} className="bg-orange-800">
            Add item
          </button>
        </div>
        <div>
          <img src="banner.jpg" alt="hero section image" />
        </div>
      </section>
    </>
  );
};
