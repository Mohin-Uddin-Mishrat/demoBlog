import React from 'react';

export const Dashboard = ({ setIsModalOpen }) => {
  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const ProfileData = {
    id: 1,
    name: "Full Name",
    username: "username123",
    email: "example@example.com",
    address: {
      street: "Street Name",
      suite: "Suite Number",
      city: "City Name",
      zipcode: "00000-0000",
      geo: {
        lat: "0.0000",
        lng: "0.0000"
      }
    },
    phone: "000-000-0000",
    website: "example.com",
    company: {
      name: "Company Name",
      catchPhrase: "Catchy company slogan",
      bs: "business strategy"
    }
  }
  

  return (
    <div
      className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'
      onClick={handleOutsideClick}
    >
      <div
        className='max-w-[700px]  p-5 bg-white rounded flex  justify-center'
        onClick={handleInsideClick}
      >
        <div className='flex space-x-10'>
          <div>
             <h1 className='font-bold '>User Name :</h1>
             <h1 className='font-bold'>Email :</h1>
             <h1 className='font-bold'> Phone :</h1>
             <h1 className='font-bold'>Address :</h1>
             <h1 className='font-bold'>Wevsite :</h1>
             <h1 className='font-bold'>Company Name :</h1>
          </div>
          <div>
              <h1 className='font-bold text-blue-500'>{ProfileData.username}</h1>
              <h1 className='font-bold text-blue-500'>{ProfileData.email}</h1>
              <h1 className='font-bold text-blue-500'>{ProfileData.phone}</h1>
              <h1 className='font-bold text-blue-500'>{ProfileData.address.city}</h1>
              <h1 className='font-bold text-blue-500'>{ProfileData.website}</h1>
              <h1 className='font-bold text-blue-500'>{ProfileData.company.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
