    import React, { useState } from "react";
    import { useBookContext } from "../context/AppContext";

    export default function Modal({ book }) {

  // State for modal and sold quantity
  const [showModal, setShowModal] = useState(false);
  const [sold, setSold] = useState(1);

  // Get sellBook function from context
  const { sellBook } = useBookContext();

  // Handle form to sell
  function handleSelling() {

 //Valuates if the input value is greater than current quantity present in the inventory
    if(Number(book.quantity) < sold) { 
      return alert("Enter number less than available quantities");
    }

  
    sellBook({...book, quantity: sold});  // Call sellBook function from context to pass the book information also the required quantity to be sold
    setShowModal(false); // close modal
    setSold(1);// value is reset to 1
  }

    return (
        <>
        <button
            disabled={book.quantity < 1} //when the book quantity is less than 1 the button is disabled so the user wont be able to sell
            className={`bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
                book.quantity < 1 ? "bg-slate-500" : ""
            }`}
            type="button"
            onClick={() => setShowModal(true)}
        >
            Sell
        </button>
        {showModal ? (
            <>
            <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Sell Your Book</h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Enter the quantity you want to sell
                    </p>
                    <input
                        defaultValue={1}
                        onChange={(e) => setSold(e.target.value)}
                        type="text"
                        name="quatity"
                        placeholder="Book Title"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSelling}
                    >
                        Sell
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>
        ) : null}
        </>
    );
    }
