import React from "react";
import { IoSend } from "react-icons/all";
import exportFromJSON from "export-from-json";

interface DataList {
  title: string;
  start: string;
  end: string;
}

interface Props {
  name: string;
  declaredHours: number;
  declaredSalary: number;
  dataList: DataList[];
}

const MainNav = ({ name, declaredHours, declaredSalary, dataList }: Props) => {
  const exportToExcel = () => {
    exportFromJSON({
      data: dataList,
      fileName: "test",
      exportType: "xls",
    });
  };
  return (
    <nav className="flex p-2">
      <div className="shadow-lg w-40 p-2 mx-2 rounded-2xl">
        Ilość godzin: {declaredHours}
      </div>
      <div className="shadow-lg w-52 p-2 mx-2 rounded-2xl">
        Wynagrodzenie: {declaredSalary} zł
      </div>
      <div
        onClick={exportToExcel}
        className="ml-auto w-10 h-10 p-3 mx-4 bg-green-600 rounded-full text-white"
      >
        <IoSend></IoSend>
      </div>
      <div className="shadow-lg w-40 p-2 rounded-2xl text-center">{name}</div>
    </nav>
  );
};

export default MainNav;
