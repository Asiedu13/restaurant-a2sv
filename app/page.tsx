import {RestaurantTopNav} from "@/app/_components/RestaurantTopNav";
import {RestaurantFoodDisplay} from "@/app/_components/RestaurantFoodDisplay";
import {RestaurantHeader} from "@/app/_components/RestaurantHeader";

export default function Home() {
  return (
    <div className="">
      <RestaurantTopNav />
      <RestaurantHeader/>
      <RestaurantFoodDisplay />
    </div>
  );
}
