import React from 'react';
import Image from "next/image";

type Employee = {
  role: string;
  _id: string;
  name: string;
  email: string;
  jobTitle?: string;
  isOnline: boolean;
  avatarUrl?: string;
};

interface EmployeeCarousalProps {
  employees: Employee[];
}

const EmployeeCarousal: React.FC<EmployeeCarousalProps> = ({ employees }) => {
  return (
    <div className="container mx-auto px-4 w-4/5 lg:px-8 lg:w-4/5">
      <div className="flex flex-col items-center justify-center h-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Conducive Work Environment
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
          Our workplace is designed to foster creativity, collaboration, and well-being. Join us and experience a vibrant and inclusive environment where your ideas thrive and your career grows.
        </p>
      </div>
      
      <div className="carousel w-full h-[40vh] rounded-lg overflow-hidden mt-6 sm:mt-8">
        <div id="item1" className="carousel-item w-full">
          <Image
            src="/images/Comfortable-Office-Environm.jpg"
            alt="Office"
            className="w-full h-full object-cover"
            width={1200} 
            height={800}
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Image
            src="/images/Office-layoit-with-planters-700x467.jpg"
            alt="Office"
            className="w-full h-full object-cover"
            width={1200} 
            height={800} 
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Image
            src="/images/work-environment.png"
            layout="responsive" 
            width={1200} 
            height={800} 
            alt="Office"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Image
            src="/images/office2.jpg" 
            layout="responsive" 
            width={1200} 
            height={800} 
            alt="Office"
          />
        </div>
      </div>
      
      <div className="flex w-full justify-center gap-2 py-2 mt-4">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default EmployeeCarousal;
