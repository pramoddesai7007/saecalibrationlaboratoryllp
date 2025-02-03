/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import Interested from "./Interested";
import { Context } from "./ContextApi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InterestedMail from "./InterestedEmail";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
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

const Testimonial = () => {
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
  ;
  const { interest,interestEmail } = useContext(Context);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pt-24 pt-[100px]">
      <h2 className="text-3xl font-bold text-center mb-12">
        Client Testimonial
        <div className="h-1 w-16 bg-yellow-400 mx-auto mt-2"></div>
      </h2>

      {/* Most Relevant Reviews */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Most Relevant Reviews</h3>
        <div className="lg:grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
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
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
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
      </div>
      {interest && <Interested />}
      {interestEmail && <InterestedMail/>}
    </div>
  );
};

export default Testimonial;
