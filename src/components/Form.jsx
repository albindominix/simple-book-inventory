import React, { useState } from "react";
import { useBookContext } from "../context/AppContext";

function Form() {
 
  // Initialize form state with empty values
  const init = { author: "", isbn: "", price: "", quantity: "", title: "" };

  const [data, setData] = useState(init);

  // Get addBook function from context
  const { addBook } = useBookContext();

  // Dynamically handle form input change
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  // Handle form submission 
  function handleSubmit(e) {
    e.preventDefault();

    // Validate quantity is number
    if (!/^\d+$/.test(data.quantity)) {
      return alert("Quantities should be a number");
    }

    // Call addBook to pass the values to AppContext and values of form is reset
    addBook(data); 
    setData(init);
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700">
            Add Book
          </h1>
          <p className="text-gray-400">
            Fill up the form below to add your book to the inventory
          </p>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm text-gray-600"
              >
                Book Title
              </label>
              <input
                value={data.title}
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Book Title"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="author"
                className="block mb-2 text-sm text-gray-600"
              >
                Author
              </label>
              <input
                value={data.author}
                onChange={handleChange}
                type="text"
                name="author"
                placeholder="Author Name"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="isbn" className="text-sm text-gray-600">
                ISBN
              </label>
              <input
                value={data.isbn}D
                onChange={handleChange}
                type="text"
                name="isbn"
                placeholder="978-3-16-148410-0"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="price" className="text-sm text-gray-600">
                Price
              </label>
              <input
                value={data.price}
                onChange={handleChange}
                type="text"
                name="price"
                placeholder="$30"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="quantity" className="text-sm text-gray-600">
                Stock Quantity
              </label>
              <input
                value={data.quantity}
                onChange={handleChange}
                type="text"
                name="quantity"
                placeholder="quantity"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
