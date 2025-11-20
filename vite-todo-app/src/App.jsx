import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import OnboardingScreen from './components/Onboarding/OnboardingScreen';
import HomeScreen from './components/Home/HomeScreen';
import NewTaskScreen from './components/NewTask/NewTaskScreen';
import TaskListScreen from './components/TaskList/TaskListScreen';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [currentDate] = useState(new Date());
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dateTime: '',
    priority: 'Medium',
    startTime: '09:00',
    endTime: '10:00'
  });

  const {
    tasksByWeek,
    todaysTasks,
    weeklyStats,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    searchTasks
  } = useTasks();

  const searchResults = searchTasks(searchQuery);

  const handleNewTask = () => {
    setEditingTask(null);
    setFormData({
      title: '',
      description: '',
      dateTime: '',
      priority: 'Medium',
      startTime: '09:00',
      endTime: '10:00'
    });
    setCurrentView('newTask');
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description || '',
      dateTime: task.dateTime,
      priority: task.priority,
      startTime: '09:00',
      endTime: '10:00'
    });
    setCurrentView('newTask');
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  const handleSubmitTask = () => {
    if (!formData.title.trim() || !formData.dateTime) {
      alert('Please fill in the required fields');
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, {
        title: formData.title,
        description: formData.description,
        dateTime: formData.dateTime,
        priority: formData.priority
      });
    } else {
      addTask({
        title: formData.title,
        description: formData.description,
        dateTime: formData.dateTime,
        priority: formData.priority
      });
    }

    setCurrentView('home');
    setEditingTask(null);
  };

  const handleToggleWeek = (weekKey) => {
    setSelectedWeek(selectedWeek === weekKey ? null : weekKey);
  };

  // Render current view
  if (currentView === 'onboarding') {
    return <OnboardingScreen onGetStarted={() => setCurrentView('home')} />;
  }

  if (currentView === 'home') {
    return (
      <HomeScreen
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentDate={currentDate}
        todaysTasks={todaysTasks}
        weeklyStats={weeklyStats}
        searchResults={searchResults}
        onToggleTask={toggleTaskStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onViewAllTasks={() => setCurrentView('taskList')}
        onNewTask={handleNewTask}
      />
    );
  }

  if (currentView === 'newTask') {
    return (
      <NewTaskScreen
        formData={formData}
        onFormChange={setFormData}
        onSubmit={handleSubmitTask}
        onCancel={() => setCurrentView('home')}
        isEditing={!!editingTask}
      />
    );
  }

  if (currentView === 'taskList') {
    return (
      <TaskListScreen
        tasksByWeek={tasksByWeek}
        selectedWeek={selectedWeek}
        onToggleWeek={handleToggleWeek}
        onToggleTask={toggleTaskStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onBack={() => setCurrentView('home')}
        onNewTask={handleNewTask}
      />
    );
  }

  return null;
}

export default App;
