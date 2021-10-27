import React, { useState } from "react";
import {
  GlobeIcon,
  HeartIcon,
  MailIcon,
  PencilAltIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import { TrashIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

function UserCard({ name, email, phone, website, users, setUsers }) {
  const [like, setLike] = useState(false);

  function deleteUser(element) {
    const filterList = users.filter((user) => user.name !== element);
    setUsers(filterList);
  }
  return (
    <div className="border my-10 shadow-md rounded-md" key={name}>
      <div className="bg-gray-200">
        <img
          src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy"
          alt="profile"
          className="object-contain w-full h-80"
        />
      </div>
      <div className="mx-6 my-3">
        <h1 className="text-xl font-semibold py-1">{name}</h1>
        <h4 className="flex py-2">
          <MailIcon color="grey" className="w-7 mr-1" />
          {email}
        </h4>
        <h4 className="flex py-2">
          <PhoneIcon color="grey" className="w-7 mr-1" />
          {phone}
        </h4>
        <h4 className="flex py-2">
          <GlobeIcon color="grey" className="w-7 mr-1" /> {website}
        </h4>
      </div>
      <div className="mt-3 flex justify-evenly bg-gray-200 py-3">
        {like ? (
          <HeartIconSolid
            className="w-8"
            color="red"
            onClick={() => setLike(!like)}
          />
        ) : (
          <HeartIcon
            className="w-8"
            color="red"
            onClick={() => setLike(!like)}
          />
        )}
        <PencilAltIcon className="w-8" color="grey" />
        <TrashIcon
          className="w-8"
          color="grey"
          onClick={() => deleteUser(name)}
        />
      </div>
    </div>
  );
}

export default UserCard;
