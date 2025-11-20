import { Check, Clock } from 'lucide-react';

const TaskStats = ({ stats }) => {
  return (
    <div className="flex gap-3 mb-4">
      <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <Check className="text-blue-600" size={16} />
          <span className="text-xs text-blue-700 font-medium">Task Complete</span>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {stats.completed}
        </div>
        <div className="text-xs text-blue-600 mt-0.5">This Week</div>
      </div>
      
      <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="text-red-600" size={16} />
          <span className="text-xs text-red-700 font-medium">Task Pending</span>
        </div>
        <div className="text-2xl font-bold text-red-600">
          {stats.total - stats.completed}
        </div>
        <div className="text-xs text-red-600 mt-0.5">This Week</div>
      </div>
    </div>
  );
};

export default TaskStats;
