import { Calendar } from 'lucide-react';

const OnboardingScreen = ({ onGetStarted }) => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center p-6">
      <div className="text-center text-white">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-6">
            <Calendar size={64} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Manage What To Do</h1>
          <p className="text-blue-100 text-lg">
            The best way to manage what you have to do,<br />
            don't forget your plans
          </p>
        </div>
        <button
          onClick={onGetStarted}
          className="w-full bg-white text-blue-600 font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
