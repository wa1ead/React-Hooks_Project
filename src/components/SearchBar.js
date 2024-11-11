function SearchBar() {
  return (
    <div className="max-w-sm space-y-3 mx-auto my-4">
      <input
        type="text"
        className="py-3 px-5 block w-full text-lg font-semibold border-gray-200 rounded-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder="Movie Title"
      />
    </div>
  );
}

export default SearchBar;
