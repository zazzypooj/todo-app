import { Calendar } from 'lucide-react';
import TaskCard from '../common/TaskCard';

const TodaysTasks = ({ tasks, onToggle, onEdit, onDelete, onViewAll }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Tasks Today</h3>
        <button
          onClick={onViewAll}
          className="text-sm text-blue-600 font-medium"
        >
          View All
        </button>
      </div>

      {tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <Calendar size={48} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500 text-sm">No tasks for today</p>
        </div>
      )}
    </>
  );
};

export default TodaysTasks;
