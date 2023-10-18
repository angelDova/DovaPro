"use client";

import { useState } from "react";

const links = [
  "Art of the Triangle",
  "Coach, What Do I Do From 50/50?",
  "All Aspects of the Armbar",
  "Guillotine Mastery",
  "All Access Dojo Membership/Month",
  "All Access Dojo Membership/Year",
];

const Filters = () => {
  const [active, setActive] = useState("");

  const handleFilter = (link: string) => {
    setActive(link);
  };

  console.log({ active });

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          className={`${active === link ? "gradient_blue-purple" : ""}
          whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          onClick={() => handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
