import { FaBookmark } from 'react-icons/fa';
import { Placeholder } from './Placeholder';

function PropertyCard({ property, checked, savedProp  }) {

  const { photos, display_address, property_id } = property;

  return (
    <div className="border-2 bg-gray-50">
      <div className="relative h-[calc(100%_-_40px)]">
        {photos.length ? (
          <img
            src={`https://mr0.homeflow.co.uk/${photos[0]}`}
            alt={display_address}
            className="rounded-t-lg object-cover h-full w-full"
          />
        ) : (
          <Placeholder />
        )}

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={() => savedProp(property_id)}
        >
          <FaBookmark className={checked ? "text-red-400" : "text-yellow-400"}  size="40" />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
