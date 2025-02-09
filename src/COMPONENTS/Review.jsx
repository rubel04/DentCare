import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Feedback = () => {
  const [allReview, setallReview] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setallReview(data));
  }, []);
  // console.log(allReview);
  return (
    <div>
      <div className="mt-20 mb-10">
        <h4 className="uppercase flex items-center justify-center text-[#ffb507] font-medium">
          <p className="bg-[#ffb507] w-10 h-0.5 mr-2"></p>
          Review
        </h4>
        <h2 className="text-4xl font-bold text-center">
        What our clients say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            allReview.map(review => <ReviewCard key={review.reviewId} review={review}></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default Feedback;
