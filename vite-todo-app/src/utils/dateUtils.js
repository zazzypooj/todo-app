// Get Monday of the week for a given date
export const getMonday = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

// Format week range (e.g., "Jan 15 - 21")
export const formatWeekRange = (monday) => {
  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);
  
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const startMonth = monthNames[monday.getMonth()];
  const endMonth = monthNames[sunday.getMonth()];
  
  if (monday.getMonth() === sunday.getMonth()) {
    return `${startMonth} ${monday.getDate()} - ${sunday.getDate()}`;
  } else {
    return `${startMonth} ${monday.getDate()} - ${endMonth} ${sunday.getDate()}`;
  }
};

// Format time (e.g., "14:30")
export const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Get current week dates (Monday to Sunday)
export const getCurrentWeekDates = (currentDate) => {
  const curr = new Date(currentDate);
  const monday = new Date(curr);
  monday.setDate(curr.getDate() - curr.getDay() + 1);
  
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    dates.push(date);
  }
  return dates;
};

// Check if date is today
export const isToday = (date) => {
  const today = new Date();
  const checkDate = new Date(date);
  return checkDate.toDateString() === today.toDateString();
};
