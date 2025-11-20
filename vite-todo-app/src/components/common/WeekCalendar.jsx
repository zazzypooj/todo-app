import { getCurrentWeekDates, isToday } from '../../utils/dateUtils';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekCalendar = ({ currentDate }) => {
  const weekDates = getCurrentWeekDates(currentDate);

  return (
    <div className="flex items-center justify-between mb-2">
      {weekDates.map((date, index) => {
        const isTodayDate = isToday(date);
        return (
          <div
            key={index}
            className={`flex flex-col items-center ${
              isTodayDate ? 'bg-blue-600 text-white px-3 py-2 rounded-xl' : 'text-gray-600'
            }`}
          >
            <span className="text-xs mb-1">{dayNames[(date.getDay() + 6) % 7]}</span>
            <span className={`text-sm font-semibold ${isTodayDate ? '' : 'text-gray-800'}`}>
              {date.getDate().toString().padStart(2, '0')}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WeekCalendar;
