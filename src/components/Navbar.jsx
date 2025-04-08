import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow h-[10vh] flex flex-col items-center">
      <div className="container w-11/12 mx-auto px-4 py-3 flex justify-between items-center h-full">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Feedback Collector
        </Link>
        <div className="space-x-4 font-semibold">
          <Link 
            to="/submit-feedback" 
            className="text-gray-600 hover:text-blue-600"
          >
            Add Feedback
          </Link>
          <Link 
            to="/feedbacks" 
            className="text-gray-600 hover:text-blue-600"
          >
            View Feedbacks
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;