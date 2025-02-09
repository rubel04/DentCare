const ReviewCard = (props) => {
  const { review: allReviews } = props || {};
  const { name, review, userImg } = allReviews;
  return (
    <div className="card border border-gray-100 rounded-4xl p-4">
      <div className="card-body">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="text-lg text-[#545e62]">{` " ${review} "`}</p>
        <div className="flex gap-4 items-center mt-4">
          <img className="w-10 h-10 object-cover rounded-full" src={userImg} alt="" />
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
