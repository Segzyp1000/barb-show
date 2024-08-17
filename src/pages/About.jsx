import React from "react";
import Sneaker from "../assets/sneakers.png";

function About() {
  return (
    <div className="flex space-x-5 mx-auto mt-20 w-3/4 text-gray-800 pb-12">
      <img src={Sneaker} alt="" className="w-[400px] md:flex hidden" />
      <div className="flex flex-col">
        <div className="w-auto">
          <h1 className="text-3xl font-semibold ">About Us</h1>
          <p className=" md:text-sm text-[17px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            labore ab rerum odit ipsum sequi, voluptatem tempore saepe
            inventore? Magni error voluptatum odio perferendis quia rem. Nulla
            eaque suscipit voluptas sit velit repellendus voluptatem corrupti
            quasi? Fuga impedit nulla eos aperiam repudiandae doloribus
            voluptatem. Quos cumque sit, aliquam suscipit quisquam repellendus
            corrupti at omnis ducimus beatae esse reprehenderit magnam quasi
            alias reiciendis ex vel nesciunt rem. Magni consequuntur dolores vel
            eaque inventore? Et nulla reprehenderit ex deleniti possimus culpa
            tempora! Maiores, suscipit eveniet, corporis repellendus tempora
            magni error quibusdam ipsam aspernatur sed eius molestias iusto non
            rerum.
          </p>
        </div>
        <div className="w-auto mt-10">
          <h1 className="text-3xl font-semibold ">About the CEO</h1>
          <p className=" md:text-sm text-[17px] text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi harum
            corporis iste expedita impedit debitis dolorum nesciunt officia qui?
            Voluptatum ut, neque, cumque magnam rem est alias beatae commodi
            consequuntur minus dolorum atque id perspiciatis consequatur harum
            nemo ad. Cupiditate ratione, atque id dolor debitis temporibus quasi
            aperiam nisi perspiciatis assumenda quis aliquam voluptatum quo
            corporis officia animi! Dolores quis eveniet sit necessitatibus
            totam beatae ipsum provident nemo tempora.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
