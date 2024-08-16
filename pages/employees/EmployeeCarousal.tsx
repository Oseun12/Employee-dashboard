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
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-[30vh] text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Conducive Work Environment
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Our workplace is designed to foster creativity, collaboration, and well-being. Join us and experience a vibrant and inclusive environment where your ideas thrive and your career grows.
          </p>
        </div>
        
        <div className="carousel w-full h-[40vh] rounded-lg">
          <div id="item1" className="carousel-item w-full">
            <img
              src="/images/Comfortable-Office-Environm.jpg"
              className="w-full"
              alt="Office"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="/images/Office-layoit-with-planters-700x467.jpg"
              className="w-full"
              alt="Office"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="/images/work-environment.png"
              className="w-full"
            />
          </div>
  
          <div id="item4" className="carousel-item w-full">
            <img
              src="/images/office2.jpg"
              className="w-full"
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
  