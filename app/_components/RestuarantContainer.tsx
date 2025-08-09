import {cn} from "@/app/_lib/utils";

export function RestaurantContainer({children, top=true}) {
    return (
        <div className={cn(`container mx-auto px-4 md:px-12`, top && 'py-12')}>
            {children}
        </div>
    )
}