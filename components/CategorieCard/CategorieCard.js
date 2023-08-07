import Image from "next/image";
import Link from "next/link";
import React from "react";
const CategorieCard = ({ subCategory, category }) => {
  return (
    <div className=" rounded-md bg-white p-5">
      <h3 className="font-semibold text-xl">{category}</h3>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-3 ">
        {subCategory.map(({ id, name, image }) => {
          return (
            <Link
              key={id}
              href={`${category}-${name}`}
              className="border border-slate-200 rounded-md py-1 px-2  "
            >
              <Image
                alt="image"
                src={image}
                width={150}
                height={80}
                className="w-[120px] h-[100px] object-contain"
              />
              <small>{name}</small>
            </Link>
          );
        })}
      </div>
      <Link href="" className="text-blue-700 mt-5 inline-block">
        See More
      </Link>
    </div>
  );
};

export default CategorieCard;
