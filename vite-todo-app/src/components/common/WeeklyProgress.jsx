const WeeklyProgress = ({ stats }) => {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-3">Weekly Progress</h3>
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
          style={{ width: `${stats.percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>{stats.completed} Completed</span>
        <span>{stats.total} Total</span>
      </div>
    </div>
  );
};

export default WeeklyProgress;
