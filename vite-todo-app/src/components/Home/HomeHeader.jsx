import { Settings } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import WeekCalendar from '../common/WeekCalendar';

const HomeHeader = ({ searchQuery, onSearchChange, currentDate }) => {
  return (
    <div className="bg-white px-5 pt-6 pb-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <button className="p-2.5 bg-gray-50 rounded-lg">
          <Settings size={20} className="text-gray-600" />
        </button>
      </div>
      <WeekCalendar currentDate={currentDate} />
    </div>
  );
};

export default HomeHeader;
