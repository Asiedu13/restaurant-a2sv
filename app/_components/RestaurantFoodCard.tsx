"use client";

import { useState } from "react";
export default function RestaurantFoodCard() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-60 font-sourceSans relative">
            <div className="relative">
                <img
                    src="/images/avocado-smoothie.jpg"
                    alt="Mixed Avocado Smoothie"
                    className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                    <span className="icon-[fa7-solid--tag]"></span>
                    $5.99
                </div>
            </div>

            <div className="p-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/pizza-pino-logo.png"
                            alt="Pizza Pino"
                            className="w-10 h-10 rounded-md object-cover"
                        />
                        <div>
                            <h3 className="text-sm font-semibold">Mixed Avocado Sm...</h3>
                            <div className="flex items-center text-yellow-500 text-sm">
                                <span className="icon-[fa7-solid--star] mr-1"></span>
                                4.0
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <button
                            className="p-1 rounded-full hover:bg-gray-100"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <span className="icon-[fa7-solid--ellipsis-v]"></span>
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <button className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-100">
                                    Edit
                                </button>
                                <button className="block w-full text-left px-3 py-1 text-sm text-red-500 hover:bg-gray-100">
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-3">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
            Closed
          </span>
                </div>
            </div>
        </div>
    );
}
