import { ChevronRight, Edit2, Trash2 } from 'lucide-react';
import { formatWeekRange, formatTime } from '../../utils/dateUtils';

const WeekItem = ({ 
  week, 
  isExpanded, 
  onToggleExpand, 
  onToggleTask, 
  onEditTask, 
  onDeleteTask 
}) => {
  const openTasks = week.tasks.filter(t => t.status !== 'Completed').length;
  const completedTasks = week.tasks.filter(t => t.status === 'Completed').length;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={onToggleExpand}
        className="w-full p-4 flex items-center justify-between"
      >
        <div className="text-left">
          <h3 className="font-semibold text-gray-900 mb-1">
            {formatWeekRange(week.monday)}
          </h3>
          <div className="flex gap-3 text-sm">
            <span className="text-red-600">
              <span className="font-medium">{openTasks}</span> Pending
            </span>
            <span className="text-blue-600">
              <span className="font-medium">{completedTasks}</span> Complete
            </span>
          </div>
        </div>
        <ChevronRight 
          size={20} 
          className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
        />
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <div className="space-y-2">
            {week.tasks
              .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
              .map(task => (
                <div
                  key={task.id}
                  className="bg-white rounded-lg p-3 flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    checked={task.status === 'Completed'}
                    onChange={() => onToggleTask(task.id)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <h4 className={`font-medium text-sm ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                      {task.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {formatTime(task.dateTime)}
                    </p>
                  </div>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="text-gray-300 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    onClick={() => onEditTask(task)}
                    className="text-gray-300 hover:text-blue-500"
                  >
                    <Edit2 size={16} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekItem;
