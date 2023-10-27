import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            alias iure, rerum, nisi nulla ea nihil dolores saepe ab expedita ex
            labore exercitationem voluptas ipsam asperiores facere sunt animi
            illo nemo magni voluptates! Id fugit iure possimus dolor ducimus
            quia, omnis voluptatibus debitis expedita distinctio saepe eaque,
            repudiandae tenetur nihil maiores incidunt laudantium. Illo aliquam
            recusandae itaque in totam reprehenderit provident natus neque, amet
            corrupti asperiores labore sapiente repudiandae, voluptatibus
            mollitia. Dolorum culpa exercitationem, eum necessitatibus non et ea
            impedit ipsa qui! Exercitationem enim eos nobis cumque ipsam sequi
            quo quia officia libero! Ab consequuntur quidem ad unde libero vel.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center px-2">
          <button><RiCustomerService2Fill size={50} /></button>
          <div>
            <h3 className="py-2">LEADING SERVICE</h3>
            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center px-2">
          <button><MdOutlineTravelExplore size={50} /></button>
          <div>
            <h3 className="py-2">LEADING SERVICE</h3>
            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div  className="border text-center">
          <p className="uppercase pt-2">get an aditional 10% off</p>
          <p className="uppercase py-4">12 hours left</p>
          <p className="uppercase bg-gray-800 text-gray-200 py-2">book now and save</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigue</option>
              <option>Kay West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date"/>
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
}; 

export default Search;
