function AddBook() {
  return (
    <>
      <div className="px-20 py-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-gray-300 uppercase">Add new book</h2>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <input placeholder="Book title" className="px-7 py-2 border border-#94a3b8 sm:w-1/2" />
          <input placeholder="Author" className="px-7 py-2 border border-#94a3b8 sm:w-1/2" />
          <button type="button" className="sm:w-1/3 bg-blue-800 text-white rounded py-2">ADD BOOK</button>
        </div>
      </div>
    </>
  );
}

export default AddBook;
