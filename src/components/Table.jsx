import React from "react";
import { useBookContext } from "../context/AppContext";
import Modal from "./Modal";

function Table({ books }) {
  return (
    <div className="flex flex-col scale-125">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="">
          <table className="block h-64 overflow-y-scroll min-w-full text-left text-sm font-light ">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">Title</th>
                <th scope="col" className="px-6 py-4">Author</th>
                <th scope="col" className="px-6 py-4">ISBN</th>
                <th scope="col" className="px-6 py-4">Price</th>
                <th scope="col" className="px-6 py-4">Stock Quantity</th>
              </tr>
            </thead>
            <tbody>
            {books &&
              books.map((item, index) => (
                <tr
                className="border-b  dark:border-neutral-500 dark:hover:bg-neutral-600"
                 key={index}>
                  <td className="whitespace-nowrap px-6 py-4">{item.title}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.author}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.isbn}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.price}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.quantity}</td>
                  <td className=" px-6 py-4">
                   <Modal book={item}/>
                  </td>
                </tr>
              ))}
          </tbody>
          
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Table;



