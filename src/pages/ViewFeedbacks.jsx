import { useState, useEffect } from 'react';
import FeedbackList from '../components/FeedbackList';
import api from '../services/api';
import Pagination from '../components/Pagination';

const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    page: 0,
    perPage: 10,
    total: 0,
    totalPages: 1
  });

  const fetchFeedbacks = async (page=0) => {
    try {
      setLoading(true);
      const data = await api.getFeedbacks(page, pagination.perPage);
      setFeedbacks(data.data);
      setPagination({
        page: data.page-1,
        perPage: data.perPage,
        total: data.total,
        totalPages: data.totalPages
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch feedbacks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage <= pagination.totalPages) {
      fetchFeedbacks(newPage);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Feedback Dashboard</h1>
      
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {pagination.total} Feedback Entries
          </h2>
          <div className="text-gray-500">
            Page {pagination.page+1} of {pagination.totalPages}
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <FeedbackList feedbacks={feedbacks} />
            <div className="mt-6">
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewFeedbacks;