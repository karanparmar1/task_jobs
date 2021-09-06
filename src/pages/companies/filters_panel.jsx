import React, { useState } from 'react';
import Accordion from '../../components/Accordion';
import ClearableItem from '../../components/ClearableItem';
import SearchBar from '../../components/SearchBar';
import { ClearButton, FiltersWrapper, FilterTitle } from './companies.styled';

const FiltersPanel = ({ setLocationList, locations }) => {
  const [location, setLocation] = useState('');

  const handleLocation = (e) => setLocation(e.target.value);

  const removeLocation = (location) => (e) => {
    setLocationList((list) => list.filter((ct) => ct?.toLowerCase() !== location?.toLowerCase()));
  };

  const onSearch = (e) => {
    e.preventDefault();
    setLocationList((list) => list.concat(location));
    setLocation('');
  };

  const resetFilters = () => {
    setLocationList([]);
  };

  return (
    <FiltersWrapper>
      <FilterTitle>
        <h3>Filter</h3>
        <ClearButton onClick={resetFilters}>Clear</ClearButton>
      </FilterTitle>

      <div>
        <Accordion title="Location" defaultExpanded>
          <form onSubmit={onSearch}>
            <SearchBar type="text" placeholder="Location" value={location} onChange={handleLocation} maxLength={100} />
          </form>

          {locations?.length > 0 && (
            <div className="filtered-locations">
              {locations.map((city, i) => (
                <ClearableItem id={i} key={city + i} onClear={removeLocation(city)}>
                  {city}
                </ClearableItem>
              ))}
            </div>
          )}
        </Accordion>

        {['Industry', 'Business Type', 'Company Type', 'Filter By High to Low', 'Sort By', 'Number of Employees'].map((filter, i) => (
          <Accordion title={filter} key={i} />
        ))}
      </div>
    </FiltersWrapper>
  );
};

export default FiltersPanel;
