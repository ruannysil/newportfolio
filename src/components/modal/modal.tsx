import React from 'react';
import { IoMdClose } from 'react-icons/io'

interface ModalInfo {
  id: number;
  name: string;
  image: string;
  description: string;
  closeModal: () => void; // New prop to close the modal
}

const Modal: React.FC<ModalInfo> = ({ id, name, image, description, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[50] p-5">
    <div className="p-4 rounded shadow-md bg-secundaryDark lg:w-[27rem] md:w-[27rem] gap-6 flex flex-col drop-shadow-md">
      <button
        onClick={closeModal}
        className="relative px-0 py-2 mt-2 ml-[80%] text-white bg-primary hover:bg-secundary rounded items-center justify-center flex w-[50px] "
      >
        <IoMdClose className="text-xl" />
      </button>
      <img key={id} src={image} alt={name} className="w-32 h-10 mx-auto" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-start">{description}</p>
    </div>
  </div>
  
  );
};

export default Modal;
