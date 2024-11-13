function SearchBar({ title, handleChange, handleClickModal, modal }) {
  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="rounded-lg bg-gray-200 p-5 w-full">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full bg-white pl-2 text-base font-semibold outline-0"
              placeholder="Movie Tiltle"
              value={title}
              onChange={handleChange}
            />
            <button
              className="flex jsutify-between items-center bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              onClick={handleClickModal}
            >
              <i class="fa-solid fa-plus"></i>Add a Movie
            </button>
          </div>
        </div>
      </div>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[60%] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Insert Movie details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClickModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <form>
                    <label for="title" className='text-xl font-medium'>Title: </label>
                    <br />
                    <input
                      type="text"
                      id="title"
                      className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"
                    />
                    <label for="description" className='text-xl font-medium'>Description: </label>
                    <br />
                    <textarea type="text" rows='3' id="description" className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-xl my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"/>
                    <label for="poster" className='text-xl font-medium'>Poster URL: </label>
                    <br />
                    <input type="text" id="poster" className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"/>
                    <label for="rating" className='text-xl font-medium'>Rating: </label>
                    <br />
                    <input type="number" min='0' max='10' defaultValue='5' id="rating" className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto"/>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClickModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClickModal}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default SearchBar;
