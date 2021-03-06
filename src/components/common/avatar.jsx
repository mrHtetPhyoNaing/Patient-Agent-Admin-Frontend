import React from "react";

const Avatar = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
    >
      <span className="hidden group-hover:table-cell text-white font-bold align-middle">
        KR
      </span>
      <img
        src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
        alt="lovely avatar"
        className="object-cover object-center w-full h-full visible group-hover:hidden"
      />
    </div>
  );
};

export default Avatar;
