import { format } from 'date-fns';

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="border border-gray-500 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{feedback.name}</h3>
        <a 
          href={`mailto:${feedback.email}`} 
          className="text-blue-600 hover:underline"
        >
          {feedback.email}
        </a>
      </div>
      <p className="text-gray-700 mb-3">{feedback.feedback}</p>
      <div className="text-sm text-gray-500">
        Submitted on {format(new Date(feedback.createdAt), 'MMM dd, yyyy h:mm a')}
      </div>
    </div>
  );
};

export default FeedbackCard;