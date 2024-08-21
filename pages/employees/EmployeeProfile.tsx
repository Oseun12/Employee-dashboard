import React from 'react';
import Image from 'next/image';

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

const EmployeeProfile: React.FC<EmployeeCarousalProps> = () => {
  return (
    <div className="container mx-auto px-4 lg:w-9/12">
      {/* Heading and Description */}
      <div className="max-w-2xl mb-8 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet Our Leadership
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our leadership team is composed of seasoned professionals with a wealth of experience in their respective fields. Each leader brings a unique set of skills and a passion for innovation, driving our company towards new heights of success. Together, they foster a culture of collaboration, integrity, and excellence, ensuring that we deliver on our commitment to our clients, employees, and community.
        </p>
      </div>

      {/* Employee Profiles Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-2 xl:gap-8">
        {/* Profile cards */}
        <div className="card glass w-full max-w-sm mx-auto">
          <figure className="flex justify-center">
          <Image
            src="/images/IMG_9827.jpg"
            alt="Profile"
            layout="responsive" 
            width={500} 
            height={800} 
            className="object-cover rounded-lg" 
          />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Marilyn Chels</h2>
            <p>CEO & Founder</p>
            <div className="card-actions justify-end">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>

        {/* Repeat for other profiles */}
        <div className="card glass w-full max-w-sm mx-auto">
          <figure className="flex justify-center">
          <Image
            src="/images/IMG_9843.jpg"
            alt="Profile"
            layout="responsive" 
            width={384} 
            height={800} 
            className="object-cover" 
          />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Acher Damisi</h2>
            <p>Data Analyst</p>
            <div className="card-actions justify-end">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>

        <div className="card glass w-full max-w-sm mx-auto">
          <figure className="flex justify-center">
          <Image
            src="/images/IMG_9844.jpg"
            alt="Profile"
            layout="responsive" 
            width={384} 
            height={800}
            className="object-cover"
          />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Christa Ben</h2>
            <p>Senior Developer</p>
            <div className="card-actions justify-end">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>

        <div className="card glass w-full max-w-sm mx-auto">
          <figure className="flex justify-center">
          <Image
            src="/images/IMG_9828.jpg"
            alt="Profile"
            layout="responsive"
            width={384} 
            height={800} 
            className="object-cover" 
          />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ashley Rachael</h2>
            <p>Senior Manager</p>
            <div className="card-actions justify-end">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
