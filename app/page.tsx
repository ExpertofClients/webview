
import { useEffect, useState } from 'react';
import Image from "next/image";
import Navigation from './komponents/Navigation';
import ListCard from "./komponents/ListCard";
import CardList from "./komponents/CardList";


export default function Home() {
  return (
   <>
   <Navigation/>
    <CardList/>
  </>
  );
}
