import { Plus } from 'lucide-react';
import HomeHeader from './HomeHeader';
import TaskStats from '../common/TaskStats';
import WeeklyProgress from '../common/WeeklyProgress';
import TodaysTasks from './TodaysTasks';
import SearchResults from './SearchResults';

const HomeScreen = ({
  searchQuery,
  onSearchChange,
  currentDate,
  todaysTasks,
  weeklyStats,
  searchResults,
  onToggleTask,
  onEditTask,
  onDeleteTask,
  onViewAllTasks,
  onNewTask
}) => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <HomeHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        currentDate={currentDate}
      />

      <div className="flex-1 overflow-auto px-5 py-4">
        {searchQuery ? (
          <SearchResults
            tasks={searchResults}
            query={searchQuery}
            onToggle={onToggleTask}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ) : (
          <>
            <TaskStats stats={weeklyStats} />
            <WeeklyProgress stats={weeklyStats} />
            <TodaysTasks
              tasks={todaysTasks}
              onToggle={onToggleTask}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
              onViewAll={onViewAllTasks}
            />
          </>
        )}
      </div>

      <button
        onClick={onNewTask}
        className="fixed bottom-8 right-5 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <Plus size={28} />
      </button>
    </div>
  );
};

export default HomeScreen;
