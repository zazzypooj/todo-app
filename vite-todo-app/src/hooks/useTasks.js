import { useState, useMemo } from 'react';
import { getMonday, isToday } from '../utils/dateUtils';

export const useTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finishing Wireframe',
      description: 'Complete the wireframe designs for the mobile app',
      dateTime: '2025-01-15T10:00',
      priority: 'High',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Meeting with team',
      description: 'Weekly sync with the development team',
      dateTime: '2025-01-15T14:00',
      priority: 'Medium',
      status: 'Open'
    },
    {
      id: 3,
      title: 'Buy a cat food',
      description: 'Get cat food from the pet store',
      dateTime: '2025-01-15T16:00',
      priority: 'Low',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Finishing daily commission',
      description: 'Complete daily tasks and reports',
      dateTime: '2025-01-15T18:00',
      priority: 'Medium',
      status: 'Completed'
    }
  ]);

  // Group tasks by week
  const tasksByWeek = useMemo(() => {
    const grouped = {};
    
    tasks.forEach(task => {
      const taskDate = new Date(task.dateTime);
      const monday = getMonday(taskDate);
      const weekKey = monday.toISOString().split('T')[0];
      
      if (!grouped[weekKey]) {
        grouped[weekKey] = {
          monday,
          tasks: []
        };
      }
      
      grouped[weekKey].tasks.push(task);
    });
    
    return Object.entries(grouped)
      .sort(([keyA], [keyB]) => new Date(keyB) - new Date(keyA))
      .map(([key, value]) => ({
        weekKey: key,
        ...value
      }));
  }, [tasks]);

  // Get today's tasks
  const todaysTasks = useMemo(() => {
    return tasks
      .filter(task => isToday(task.dateTime))
      .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
  }, [tasks]);

  // Get weekly statistics
  const weeklyStats = useMemo(() => {
    const today = new Date();
    const monday = getMonday(today);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const thisWeekTasks = tasks.filter(task => {
      const taskDate = new Date(task.dateTime);
      return taskDate >= monday && taskDate <= sunday;
    });

    const completed = thisWeekTasks.filter(t => t.status === 'Completed').length;
    const total = thisWeekTasks.length;

    return { 
      completed, 
      total, 
      percentage: total > 0 ? (completed / total) * 100 : 0 
    };
  }, [tasks]);

  // Add new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      status: 'Open'
    };
    setTasks([...tasks, newTask]);
  };

  // Update task
  const updateTask = (taskId, updates) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Toggle task status
  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId 
        ? { ...task, status: task.status === 'Completed' ? 'Open' : 'Completed' }
        : task
    ));
  };

  // Search tasks
  const searchTasks = (query) => {
    if (!query.trim()) return tasks;
    
    const lowerQuery = query.toLowerCase();
    return tasks.filter(task => 
      task.title.toLowerCase().includes(lowerQuery) ||
      (task.description && task.description.toLowerCase().includes(lowerQuery))
    );
  };

  return {
    tasks,
    tasksByWeek,
    todaysTasks,
    weeklyStats,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    searchTasks
  };
};
