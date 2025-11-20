import { Edit2, Trash2 } from 'lucide-react';
import { formatTime } from '../../utils/dateUtils';

const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.status === 'Completed'}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <div className="flex-1">
        <h4 className={`font-medium ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {task.title}
        </h4>
        <p className="text-xs text-gray-500 mt-1">{formatTime(task.dateTime)}</p>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-300 hover:text-gray-400"
      >
        <Trash2 size={18} />
      </button>
      <button
        onClick={() => onEdit(task)}
        className="text-gray-300 hover:text-gray-400"
      >
        <Edit2 size={18} />
      </button>
    </div>
  );
};

export default TaskCard;
