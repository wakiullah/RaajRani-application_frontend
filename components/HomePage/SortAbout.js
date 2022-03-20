import React from "react";
import ButtonGray from "../Sort/ButtonGray";
import ImageLayout from "../Sort/ImageLayout";

export default function SortAbout() {
  return (
    <div className="text-gray-700 body-font bg-gray-50 pt-20 pb-5">
      <div className="text-center text-gray-600 font-bold text-3xl">
        <h2>About Us</h2>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col items-center ">
        <div className="hidden lg:block lg:w-5/12 xl:4/12">
          <ImageLayout img="/rajarani.jpeg" />
        </div>
        <div className="full lg:w-7/12 xl:w-8/12 justify-start lg:pl-12 py-10">
          <h5 className="text-gray-900 text-2xl font-medium mb-2">
            Raaj Rani Technology
          </h5>
          <p className="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            <br />
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is
            a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            <br />
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            <br />
          </p>
          <ButtonGray value="Submit" color={'slate'}/>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="p-6  w-full lg:w-1/2">
  <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
</div>; */
}
