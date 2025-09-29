import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProductRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      // Handle rating and comment submission
      console.log('Rating:', rating, 'Comment:', comment);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <div className="bg-yellow-100 p-2 rounded-lg mr-3">
          <Star size={20} className="text-yellow-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Rate This Product</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Share your experience to help other consumers
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-1 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="transition-colors"
            >
              <Star
                size={24}
                className={`${
                  star <= (hover || rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        
        <div className="mb-6">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Add a comment (optional)
          </label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us about your experience with this product..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
          />
        </div>
        
        {rating > 0 && (
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
          >
            Submit Rating
          </button>
        )}
      </form>
      
      {rating > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
          <p className="text-green-800 font-medium">
            Thank you for rating this product {rating} star{rating > 1 ? 's' : ''}!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductRating;