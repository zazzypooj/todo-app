import { ChevronLeft, Plus, Calendar } from 'lucide-react';
import WeekItem from './WeekItem';

const TaskListScreen = ({
  tasksByWeek,
  selectedWeek,
  onToggleWeek,
  onToggleTask,
  onEditTask,
  onDeleteTask,
  onBack,
  onNewTask
}) => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm flex items-center justify-between">
        <button onClick={onBack} className="p-2">
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <h2 className="font-semibold text-gray-900">All Tasks</h2>
        <button onClick={onNewTask} className="p-2 text-blue-600">
          <Plus size={24} />
        </button>
      </div>

      {/* Week List */}
      <div className="flex-1 overflow-auto px-5 py-4">
        {tasksByWeek.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">No tasks yet</p>
            <p className="text-sm text-gray-500">Tap + to create your first task</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tasksByWeek.map(week => (
              <WeekItem
                key={week.weekKey}
                week={week}
                isExpanded={selectedWeek === week.weekKey}
                onToggleExpand={() => onToggleWeek(week.weekKey)}
                onToggleTask={onToggleTask}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskListScreen;
