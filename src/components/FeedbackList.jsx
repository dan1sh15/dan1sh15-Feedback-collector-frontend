import FeedbackCard from './FeedbackCard';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="space-y-4">
      {feedbacks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No feedback entries found.
        </div>
      ) : (
        feedbacks.map(feedback => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))
      )}
    </div>
  );
};

export default FeedbackList;