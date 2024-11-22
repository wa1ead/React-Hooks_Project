function Modal({
  handleClickModal,
  modal,
  handleInputChange,
  handleSaveMovie,
}) {
  return modal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[60%] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Insert Movie details</h3>
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
              <form onSubmit={handleSaveMovie}>
                <label for="title" className="text-xl font-medium">
                  Title:{" "}
                </label>
                <br />
                <input
                  type="text"
                  name="title"
                  className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"
                  onChange={handleInputChange}
                />
                <label for="description" className="text-xl font-medium">
                  Description:{" "}
                </label>
                <br />
                <textarea
                  type="text"
                  rows="3"
                  name="description"
                  className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-xl my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"
                  onChange={handleInputChange}
                />
                <label for="poster" className="text-xl font-medium">
                  Poster URL:{" "}
                </label>
                <br />
                <input
                  type="text"
                  name="poster"
                  className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto mb-4"
                  onChange={handleInputChange}
                />
                <label for="rating" className="text-xl font-medium">
                  Rating:{" "}
                </label>
                <br />
                <input
                  type="number"
                  min="0"
                  max="10"
                  name="rating"
                  className="block p-2 bg-gray-100 w-[80%] border border-blue-500 rounded-full my-2 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-700 focus:border-none m-auto"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClickModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="sumbit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : (
    <button
      className="flex jsutify-between items-center bg-blue-500 p-2 rounded-lg text-white font-semibold hover:bg-blue-800 transition-colors m-5"
      onClick={handleClickModal}
    >
      <i className="fa-solid fa-plus"></i>Add a Movie
    </button>
  );
}

export default Modal;
