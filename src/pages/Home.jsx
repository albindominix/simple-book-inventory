import React from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { useBookContext } from "../context/AppContext";

function Home() {
  const { books } = useBookContext();
  return (
    <div>
      <div className="text-center mt-4">
        <h1>Book Inventory Management</h1>
      </div>
      <div className="flex justify-between items-center w-full max-w-[1380px] px-5 md:px-10 mx-auto  ">
        <div>
          <Form />
        </div>
        {books && books.length ? (
          <div>
            <Table books={books} />
          </div>
        ) : (
          <h1> No Books In The Inventory</h1> // if no books are present in the inventory display this messsage
        )}
      </div>
    </div>
  );
}

export default Home;
