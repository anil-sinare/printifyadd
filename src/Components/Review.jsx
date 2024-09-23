import React, { useState } from "react";

const reviews = [
  {
    name: "Robert A. Voltaire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ludwig_Wittgenstein_1929.jpg/800px-Ludwig_Wittgenstein_1929.jpg", // Replace with actual image path
    storeLink: "#",
    rating: 5,
    review:
      "Printify has been an incredible service for us musicians unable to keep large amount of inventory. Now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
  },
  {
    name: "Quinten Barney",
    image:
      "https://bookofmormoncentral.org/sites/default/files/styles/large/public/pictures/picture-51-1448904106.jpg?itok=oR5wqyQh", // Replace with actual image path
    storeLink: "#",
    rating: 5,
    review:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
  },
  {
    name: "Nikki",
    image:
      "https://1883magazine.com/wp-content/uploads/2024/02/UntitledCapture004131copy-scaled-1.jpg", // Replace with actual image path
    storeLink: "#",
    rating: 5,
    review:
      "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) its truly made the whole process a breeze.",
  },
  {
    name: "Spencer, Brett, and Kyle",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuHky2EDPKSVw7r90VD_5X4VTkMRvXtMfZ41Ve_4SxAXG9y5Lab3NGTgMAabi4GbF-t0&usqp=CAU", // Replace with actual image path
    storeLink: "#",
    rating: 5,
    review:
      "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
  },
  {
    name: "April Showers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxwQhlfD8d0vCD5cfvoa_kW0jHQY6unLtGw&s", // Replace with actual image path
    storeLink: "#",
    rating: 5,
    review:
      "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col  justify-center p-6 bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-between p-10 gap-10 max-w-[1000px] mt-20">
        <h2 className="text-4xl font-bold text-gray-700 mb-4 justify-start max-w-[400px]    ">
          Trusted by over 8M around the world
        </h2>
        <p className="text-[17px] text-gray-500  mb-8 w-[400px] text-start">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
        <p></p>
      </div>

      <div className="w-full relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex  items-start">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{reviews[currentIndex].name}</h3>
            <a
              href={reviews[currentIndex].storeLink}
              className="text-green-500 hover:underline"
            >
              Store link
            </a>
            <div className="flex items-center mt-1">
              {Array(reviews[currentIndex].rating)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.39 6.94h7.28l-5.89 4.28 2.39 6.94-5.89-4.28-5.89 4.28 2.39-6.94-5.89-4.28h7.28z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-600 mt-2">{reviews[currentIndex].review}</p>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Review;
