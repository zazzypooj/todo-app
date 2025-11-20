import TaskCard from '../common/TaskCard';

const SearchResults = ({ tasks, query, onToggle, onEdit, onDelete }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-600 mb-3">
        Search Results ({tasks.length})
      </h3>
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
        <div className="text-center py-8 text-gray-500">
          No tasks found matching "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchResults;
