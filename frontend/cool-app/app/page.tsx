'use client'
import Navbar from "@/components/Navbar/Navbar";
import SearchControls from "@/components/SearchControls";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from '../data.json'
import BuildingCard from "@/components/Building/BuildingCard";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <SearchControls />
      <div className="px-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xl:grid-cols-5 gap-3">
        {
          data.map((b, i) => 
            <BuildingCard key={i} building={b} />
          )
        }
      </div>
    </div>
  );
}
