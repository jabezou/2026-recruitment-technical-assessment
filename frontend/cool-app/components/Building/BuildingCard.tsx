import React from 'react'

interface Building {
  building_picture: string | undefined;
  building_file?: string;
  rooms_available: number;
  name: string;
}

const BuildingCard: React.FC<{ building: Building }> = ({ building }) => {
  // buildings' image is either referenced through building_file or building_picture
  const imagePath = building.building_file || building.building_picture;
  const normalizedPath = imagePath?.replace('./', '/');

  return (
    <div 
      className='bg-cover bg-center rounded-lg flex sm:flex-col items-center justify-between p-4 min-h-[100px] sm:min-h-[200px] xl:min-h-[330px] md:p-2'
      style={{ 
        backgroundImage: `url(${normalizedPath})`,
      }}
    >
      <div className="flex items-center gap-2 rounded-xl bg-white py-2 px-3 order-2 sm:order-1 sm:self-end">
        <div className="rounded-full h-2 w-2 bg-green-600"></div>
        <p className="font-semibold text-xs">{building.rooms_available}
          <span className='hidden sm:inline'> rooms available</span>
          <span className='sm:hidden'> / {building.rooms_available}</span></p>
      </div>
      <div className="sm:bg-orange-500 font-semibold text-sm rounded-md text-white p-4 order-1 sm:order-2 sm:w-full">
        <p>{building.name}</p>
      </div>
    </div>
  )
}

export default BuildingCard