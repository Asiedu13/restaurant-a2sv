import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import {IconButton} from "@/app/_components/RestaurantIconButton";
import {RestaurantContainer} from "@/app/_components/RestuarantContainer";
import {RestaurantHeader} from "@/app/_components/RestaurantHeader";

export function RestaurantTopNav() {
    return (
        <nav className="w-[100vw] h-[74px]">
            <RestaurantContainer top={false}>
                <div className="w-[inherit] flex justify-between py-4">
                    <Image src={Logo} alt={"Restuarant logo"} width={197} height={37} />
                    <button
                        className="bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E] text-white. font-semibold py-2 px-4 rounded-xl h-[42px] w-[150px] cursor-pointer hover:opacity-90">
                        Add Meal
                    </button>
                </div>
            </RestaurantContainer>
        </nav>
    )
}