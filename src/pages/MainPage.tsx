import React from "react";
import { IoSend } from "react-icons/all";

interface props {
  name: string;
}

const MainPage = ({ name }: props) => {
  return (
    <>
      <nav className="flex m-2">
        <div className="shadow-lg w-40 p-2 mx-2 rounded-2xl">Ilość godzin:</div>
        <div className="shadow-lg w-52 p-2 mx-2 rounded-2xl">
          Wynagrodzenie: 2143 zł
        </div>
        <div className="ml-auto w-10 h-10 p-3 mx-4 bg-green-600 rounded-full text-white">
          <IoSend></IoSend>
        </div>
        <div className="shadow-lg w-40 p-2 rounded-2xl text-center">{name}</div>
      </nav>
    </>
  );
};

export default MainPage;
