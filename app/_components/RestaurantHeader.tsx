import {RestaurantContainer} from "@/app/_components/RestuarantContainer";
import Image from "next/image";
import Noodles from "@/public/images/noodles-on-header.png"
import squareOverlay from "@/public/images/.png"
import {RestaurantMealSearch} from "@/app/_components/RestaurantMealSearch";

export function RestaurantHeader() {
    return (
        <header className="bg-[#FFB30E] h-[628px] w-[inherit] flex items-center">
            <RestaurantContainer>
                <section className="grid grid-cols-3 w-full">
                    <div className="col-span-2">
                        <h1 className="text-[80px] font-bold">Are you starving?</h1>
                        <p className="text-[22px] font-medium">Within a few clicks, find meals that are accessible near you</p>

                        <div>
                            <RestaurantMealSearch />
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <Image src={Noodles} alt="Noodles in a black bowl" width={497} height={497} className="absolute top-31"/>
                        <div
                            className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-300 via-gray-100 to-blue-300"></div>
                    </div>
                </section>
            </RestaurantContainer>
        </header>
    )
}