
import React, { useState } from 'react';

interface PublicationFilterProps {
  onYearSelect: (year: string) => void;
  onTypeSelect: (type: string) => void;
  years: string[];
  types: string[];
}

const PublicationFilter: React.FC<PublicationFilterProps> = ({ 
  onYearSelect, 
  onTypeSelect,
  years,
  types
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    onYearSelect(year);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setSelectedType(type);
    onTypeSelect(type);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="w-full md:w-1/3">
        <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Year
        </label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-professor-navy focus:border-professor-navy"
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-1/3">
        <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Type
        </label>
        <select
          id="type-filter"
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-professor-navy focus:border-professor-navy"
        >
          <option value="all">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-1/3">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search Publications
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by title, author, keyword..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-professor-navy focus:border-professor-navy"
        />
      </div>
    </div>
  );
};

export default PublicationFilter;
