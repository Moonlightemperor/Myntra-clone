import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/bagslice";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  if (!item) {
    console.error("Item is undefined:", item);
    return <div>Invalid item data: Item is undefined</div>;
  }

  if (!item.rating) {
    console.error("Item rating is undefined:", item.rating);
    return <div>Invalid item data: Rating is undefined</div>;
  }

  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div class="item-container">
      <img class="item-image" src={item.image} alt="item image" />
      <div class="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs {item.current_price}</span>
        <span class="original-price">Rs {item.original_price}</span>
        <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
