"use client"
import {useState} from "react";
import Link from "next/link";
import {Spinner} from "@/app/_components/RestaurantSpinner";
import {cn} from "@/app/_lib/utils";

export function IconButtosn({
                               text = "Button",
                               icon = "",
                               variant = "primary",
                               type = "link",
                               href = " ",
                               disabled = false,
                               onClick = undefined,
                               loadingText = 'loading'
                           }) {
    const [pending, setPending] = useState(false);
    const handleClick = () => {
        setPending(true)
        if (onClick) {
            onClick();
        }

    }
    return (
        <Link href={href ? href : undefined}>
            <button type={type === 'submit' && 'submit'} onClick={() => handleClick()} disabled={disabled}
                    className={cn(`${variant === "primary" && disabled ? "bg-[#A8CCD0] text-white" : "bg-primaryColor text-white border border-primaryColor "} transition-all duration-500 ease-in-out  w-[273px] h-[48px] rounded-[40px] flex items-center justify-center gap-2 ${pending && 'w-[fit] h-fit py-4 px-4'}`, variant === 'secondary' && 'bg-white border border-primaryColor text-primaryColor font-semibold')}>{text}
                {pending ? <> <Spinner/></> : <> <span className={icon}></span></>}
            </button>
        </Link>
    )
}

export function DeliveryModeButton() {
    const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
    return (
        <button
            onClick={() => setMode("delivery")}
            className={`flex items-center gap-2 px-6 py-3 m-3 text-sm font-medium cursor-pointer w-[148px] h-[38px] rounded-[8px] ${
                mode === "delivery"
                    ? "text-orange-500 bg-orange-100"
                    : "text-gray-500 hover:text-gray-700"
            }`}
        >
            {/*<FaMotorcycle className="text-lg"/>*/}
            <span className="icon-[fa--motorcycle]"></span>
            Delivery
        </button>
    )
}