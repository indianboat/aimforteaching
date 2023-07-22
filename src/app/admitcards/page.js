import React from "react";
import AdmitCardComponent from "../components/AdmitCardComponent";
import getAdmitCards from "../utils/getAdmitCards";
import Breadcrumb from "../components/Breadcrum";

const AdmitCards = async () => {

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Admit Cards", path: "/admitcards" },
  ];

  let admitcards = await getAdmitCards();

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto lg:my-6 md:mt-6 sm:mt-28 mt-24 mb-10 border p-4">
        <div className="border flex items-center">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex items-center">
          <h2 className="text-2xl font-bold flex">Admit Cards</h2>
        </div>
        <div className="border mt-4 overflow-auto h-auto rounded-lg dark:bg-zinc-900 shadow-md p-4">
          {admitcards.data.length <= 0 ? (
            <div className="text-gray-500 dark:text-gray-200">
              No Admit Card Found
            </div>
          ) : (
            <AdmitCardComponent admitcards={admitcards.data} />
          )}
        </div>
      </div>
    </>
  );
};

export default AdmitCards;
