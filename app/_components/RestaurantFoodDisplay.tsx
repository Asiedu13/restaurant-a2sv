"use client"
import {RestaurantContainer} from "@/app/_components/RestuarantContainer";
import RestaurantFoodCard from "@/app/_components/RestaurantFoodCard";
import {useState, useEffect} from "react";

// async function getMeals() {
//     const response = await fetch('https://6852821e0594059b23cdd834.mockapi.io/Food');
//     const data = await response.json();
//     console.log(data);
// }

export function RestaurantFoodDisplay() {
    const [meals, setMeals] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://6852821e0594059b23cdd834.mockapi.io/Food");
            const data = await res.json();
            console.log(data);
            setMeals(data);
        }
        fetchData()
    }, []);

    return (
        <main className="h-[1266px] w-[100vw]">
            <RestaurantContainer>
                <header className="w-[inherit] flex items-center justify-center">
                    <h2 className="font-bold text-[43px] text-[#212121]">Featured Meals</h2>
                </header>

                <section className="grid md:grid-cols-4 gap-2">
                    {meals && meals.map((meal) => (
                        <RestaurantFoodCard key={meal.id} currentMeal={meal} />
                    ))}
                </section>
            </RestaurantContainer>
        </main>
    )
}