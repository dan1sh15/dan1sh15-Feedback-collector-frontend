import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubmitFeedback from './pages/SubmitFeedback';
import ViewFeedbacks from './pages/ViewFeedbacks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/submit-feedback" element={<SubmitFeedback />} />
            <Route path="/feedbacks" element={<ViewFeedbacks />} />
            <Route path="/" element={<SubmitFeedback />} />
          </Routes>
        </main>
        <footer className="bg-white py-4 text-center text-gray-500">
          Feedback Collector © {new Date().getFullYear()} | Created by [Mohammad Danish]
        </footer>
      </div>
    </Router>
  );
}

export default App;