"use client"
import { useState } from "react";

export function RestaurantMealSearch() {
    const [mode, setMode] = useState<"delivery" | "pickup">("delivery");

    return (
        <div className="flex w-[95%] .justify-center py-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[inherit]">
                <div className="flex border-b items-center">
                    <button
                        onClick={() => setMode("delivery")}
                        className={`flex items-center gap-2 px-6 py-3 m-3 text-sm font-medium cursor-pointer w-[148px] h-[38px] rounded-[8px] ${
                            mode === "delivery"
                                ? "text-orange-500 bg-orange-100"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        <span className="icon-[fa--motorcycle]"></span>
                        Delivery
                    </button>
                    <button
                        onClick={() => setMode("pickup")}
                        className={`flex items-center gap-2 px-6 py-3 text-sm font-medium cursor-pointer w-[148px] h-[38px] rounded-[8px] ${
                            mode === "pickup"
                                ? "text-orange-500 bg-orange-100"
                                : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        <span className="icon-[fa7-solid--shopping-bag]"></span>
                        Pickup
                    </button>
                </div>

                <div className="flex p-4 gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md flex-1">
                        <span className="icon-[fa7-solid--search] text-[#F17228]"></span>
                        <input
                            type="text"
                            placeholder="What do you like to eat today?"
                            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                        />
                    </div>
                    <button className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-orange-500 to-red-400 text-white px-5 py-3 rounded-md hover:opacity-90">
                        <span className="icon-[fa7-solid--search] "></span>
                        Find Meal
                    </button>
                </div>
            </div>
        </div>
    );
}
