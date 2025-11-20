import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Search for a task" }) => {
  return (
    <div className="relative flex-1 mr-3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
    </div>
  );
};

export default SearchBar;
