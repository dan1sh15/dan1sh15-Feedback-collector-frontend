const Pagination = ({ currentPage=0, totalPages=0, onPageChange }) => {
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-4 py-2 border rounded disabled:opacity-50 bg-black text-white"
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i+1).map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page-1)}
            className={`px-4 py-2 border rounded ${
              page === (currentPage+1) ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={(currentPage+1) === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50 bg-black text-white"
        >
          Next
        </button>
      </div>
    );
  };
  
export default Pagination;