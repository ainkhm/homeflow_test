import { useState, useEffect } from 'react';
import Header from './Header';
import PropertyCard from './PropertyCard';

function App() {
  const [properties, setProperties] = useState();
  const [filtered, setFiltered] = useState('');
  const [savedItems, setSavedItems] = useState([]);

  // use this state to keep track of the user's saved/bookmarked properties;

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);


  const filteredData = () => {
    const Items = (item) => 
      item.short_description 
        ? item.short_description.toLowerCase().includes(
            filtered.toLowerCase()
          ) 
        : null;

    return filtered
      ? properties.filter(Items) 
      : properties;
  }


  const savedProp = (id) => {
   return savedItems.includes(id)
      ? setSavedItems(savedItems.filter((item) => item !== id))
      : setSavedItems([...savedItems, id]);
  };

  return (
    <div className="container mx-auto my-5">
      <Header setFiltered={setFiltered} />

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties &&
          filteredData().map((property) => (
            <PropertyCard
              key={property.property_id}
              property={property}
              savedProp={savedProp}
              checked={savedItems.includes(property.property_id)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
