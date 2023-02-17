import { CartState } from "../../types/types";
import { getTotalQuantity } from "../../utils/Helpers";
import Link from "next/link";
import { useSelector } from "react-redux";
import React from "react";

const MainHeader = () => {
  const items = useSelector((state: CartState) => state.cart.items);
  return (
    <header className="py-[1rem] flex justify-between items-center md:mx-[5rem] mx-[2rem]">
      <div className="text-3xl">
        <Link href="/">
          Wear<span className="text-purple-500">Me</span>
        </Link>
      </div>
      <nav>
        <Link href="/cart" className="text-xl flex justify-between items-center gap-4">
          <ul>
            <li
              className={`p-2 rounded-md border flex justify-center items-center border-purple-500 gap-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <p className={`px-2 text-purple-500 font-medium `}>{getTotalQuantity(items)}</p>
            </li>
          </ul>
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
