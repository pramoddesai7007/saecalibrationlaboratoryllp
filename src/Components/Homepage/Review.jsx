/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: "1",
    author: "Pritam Bokadia",
    location: "Mumbai, Maharashtra",
    rating: 4,
    date: "27-January-23",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "P",
  },
  {
    id: "2",
    author: "Dennis Alubiri",
    location: "Kenya",
    rating: 5,
    date: "17-September-24",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "D",
  },
  {
    id: "3",
    author: "Md Saddam Hosen",
    location: "Bongoan, West Bengal",
    rating: 5,
    date: "23-November-24",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "M",
  },
  {
    id: "4",
    author: "Rajesh Bhandari",
    location: "Pune, Maharashtra",
    rating: 4,
    date: "07-January-25",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "P",
  },
  {
    id: "5",
    author: "Om Joshi",
    location: "Kokan",
    rating: 5,
    date: "19-September-22",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "D",
  },
  {
    id: "6",
    author: "Aniket Shah",
    location: "Surat,Gujarat",
    rating: 5,
    date: "23-November-20",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "M",
  },
];

const reviews1 = [
  {
    id: "1",
    author: "Pritam Bokadia",
    location: "Mumbai, Maharashtra",
    rating: 4,
    date: "27-January-23",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "P",
  },
  {
    id: "2",
    author: "Dennis Alubiri",
    location: "Kenya",
    rating: 5,
    date: "17-September-24",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "D",
  },
  {
    id: "3",
    author: "Md Saddam Hosen",
    location: "Bongoan, West Bengal",
    rating: 5,
    date: "23-November-24",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "M",
  },
  {
    id: "4",
    author: "Rajesh Bhandari",
    location: "Pune, Maharashtra",
    rating: 4,
    date: "07-January-25",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "P",
  },
  {
    id: "5",
    author: "Om Joshi",
    location: "Kokan",
    rating: 5,
    date: "19-September-22",
    productName: "Optical Emission Spectrometer",
    hasResponse: true,
    initial: "D",
  },
  {
    id: "6",
    author: "Aniket Shah",
    location: "Surat, Gujarat",
    rating: 5,
    date: "23-November-20",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "M",
  },
  {
    id: "7",
    author: "Nikhil Reddy",
    location: "Hyderabad, Telangana",
    rating: 4,
    date: "05-June-21",
    productName: "Hardness Tester",
    hasResponse: false,
    initial: "N",
  },
  {
    id: "8",
    author: "Aditi Kapoor",
    location: "Jaipur, Rajasthan",
    rating: 3,
    date: "14-March-22",
    productName: "Portable Spectrometer",
    hasResponse: false,
    initial: "A",
  },
  {
    id: "9",
    author: "William Anderson",
    location: "London, UK",
    rating: 5,
    date: "30-August-23",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "W",
  },
  {
    id: "10",
    author: "Sneha Iyer",
    location: "Chennai, Tamil Nadu",
    rating: 4,
    date: "15-February-24",
    productName: "Hardness Tester",
    hasResponse: true,
    initial: "S",
  },
  {
    id: "11",
    author: "Yuvi Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    date: "25-December-22",
    productName: "Dynamic Leeb Hardness Tester",
    hasResponse: true,
    initial: "Y",
  },
  {
    id: "12",
    author: "Alex Brown",
    location: "California, USA",
    rating: 4,
    date: "11-April-23",
    productName: "Optical Emission Spectrometer",
    hasResponse: false,
    initial: "A",
  },
  {
    id: "13",
    author: "Rohit Kumar",
    location: "Delhi, India",
    rating: 5,
    date: "20-October-21",
    productName: "Portable Harness Tester",
    hasResponse: true,
    initial: "R",
  },
  {
    id: "14",
    author: "Emily White",
    location: "Sydney, Australia",
    rating: 4,
    date: "29-July-24",
    productName: "Universal Testing Machine",
    hasResponse: true,
    initial: "E",
  },
  {
    id: "15",
    author: "Sofia Davis",
    location: "Cape Town, South Africa",
    rating: 5,
    date: "08-January-23",
    productName: "Hardness Tester",
    hasResponse: true,
    initial: "S",
  },
];

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={20}
          className={`${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const averageRating = 4.3;
  const totalReviews = 43;
  const ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 7 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 14 },
  ];

  const satisfactionMetrics = [
    { label: "Response", percentage: 100 },
    { label: "Quality", percentage: 100 },
    { label: "Delivery", percentage: 100 },
  ];
  const [view, setView] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Ratings & Reviews
        <div className="h-1 w-16 bg-yellow-400 mx-auto mt-2"></div>
      </h2>

      {/* Rating Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Average Rating */}
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold">
            {averageRating}
            <span className="text-xl text-gray-500">/5</span>
          </div>
          <div className="flex justify-center md:justify-start mt-2">
            <RatingStars rating={Math.round(averageRating)} />
          </div>
          <div className="text-gray-600 mt-2">
            Reviewed by {totalReviews} Users
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center">
              <span className="w-8">{stars}★</span>
              <div className="flex-grow mx-2 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-12 text-right">{percentage}%</span>
            </div>
          ))}
        </div>

        {/* User Satisfaction */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            <ThumbsUp className="inline-block mr-2" size={20} />
            User Satisfaction
          </h3>
          <div className="space-y-4">
            {satisfactionMetrics.map(({ label, percentage }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{label}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Relevant Reviews */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Most Relevant Reviews</h3>
        {view ? (
          <div className="flex gap-9 overflow-x-auto p-4 scrollbar-hide w-full">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                    {review.initial}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{review.author}</h4>
                        <p className="text-sm text-gray-600">
                          {review.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="mt-2">
                      <RatingStars rating={review.rating} />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Product Name: </span>
                        {review.productName}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-gray-600">Response</span>
                        {review.hasResponse && (
                          <ThumbsUp className="text-green-500" size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="lg:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews1.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                    {review.initial}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{review.author}</h4>
                        <p className="text-sm text-gray-600">
                          {review.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="mt-2">
                      {/* Replace this with your RatingStars component */}
                      <RatingStars rating={review.rating} />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Product Name: </span>
                        {review.productName}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-gray-600">Response</span>
                        {review.hasResponse && (
                          <ThumbsUp className="text-green-500" size={16} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center text-gray-900">
          <button
            className=" text-xl  border p-2 rounded-md m-3"
            onClick={() => setView(!view)}
          >
            {view ? "view More Reviews" : "view Less Reviews"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
