import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="flex-1 min-w-0">
            {" "}
            {/* Ensure content can shrink and wrap */}
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <p>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-xs break-words">{item.card.info.description}</p>{" "}
            {/* Wrapping text */}
          </div>
          {item.card.info.imageId ? (
            <div className="relative flex-shrink-0 flex items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg max-w-full max-h-full w-36 h-28"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <button className="bg-slate-300 text-center p-2 shadow-lg w-full rounded-b-md">
                ADD
              </button>
            </div>
          </div>
          
          ) : (
            <div className="flex-shrink-0 flex items-center">
              <p className="rounded-lg w-32 h-28 text-xs">
                {item.card.info.nextAvailableAtMessage}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
