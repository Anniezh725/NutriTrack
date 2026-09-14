import { useState } from "react";

function App() {
    const [showForm, setShowForm] = useState(false);

    const [foodName, setFoodName] = useState("");
    const [calories, setCalories] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");

    const [foods, setFoods] = useState([]);

    function addFood(event) {
        event.preventDefault();

        const newFood = {
            name: foodName,
            calories: Number(calories),
            protein: Number(protein),
            carbs: Number(carbs),
            fat: Number(fat)
        };

        setFoods([...foods, newFood]);

        setFoodName("");
        setCalories("");
        setProtein("");
        setCarbs("");
        setFat("");
        setShowForm(false);
    }

    const totalCalories = foods.reduce(
        (total, food) => total + food.calories,
        0
    );

    const totalProtein = foods.reduce(
        (total, food) => total + food.protein,
        0
    );

    const totalCarbs = foods.reduce(
        (total, food) => total + food.carbs,
        0
    );

    const totalFat = foods.reduce(
        (total, food) => total + food.fat,
        0
    );

    return (
        <div>
            <h1>NutriTrack</h1>

            <p>
                Your AI-powered fitness and nutrition tracker
            </p>

            <div>
                <h2>Today's Nutrition</h2>

                <p>
                    Calories: {totalCalories} / 2000 kcal
                </p>

                <p>Protein: {totalProtein} g</p>
                <p>Carbs: {totalCarbs} g</p>
                <p>Fat: {totalFat} g</p>
            </div>

            <button onClick={() => setShowForm(true)}>
                Add Food
            </button>

            {showForm && (
                <form onSubmit={addFood}>
                    <h2>Add Food</h2>

                    <div>
                        <label>Food name</label>
                        <input
                            value={foodName}
                            onChange={(event) =>
                                setFoodName(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Calories (kcal)</label>
                        <input
                            type="number"
                            value={calories}
                            onChange={(event) =>
                                setCalories(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Protein (g)</label>
                        <input
                            type="number"
                            value={protein}
                            onChange={(event) =>
                                setProtein(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Carbohydrates (g)</label>
                        <input
                            type="number"
                            value={carbs}
                            onChange={(event) =>
                                setCarbs(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Fat (g)</label>
                        <input
                            type="number"
                            value={fat}
                            onChange={(event) =>
                                setFat(event.target.value)
                            }
                            required
                        />
                    </div>

                    <button type="submit">
                        Add Food
                    </button>

                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                </form>
            )}

            <div>
                <h2>Today's Foods</h2>

                {foods.map((food, index) => (
                    <div key={index}>
                        <h3>{food.name}</h3>
                        <p>
                            {food.calories} kcal
                        </p>
                        <p>
                            Protein: {food.protein}g |
                            Carbs: {food.carbs}g |
                            Fat: {food.fat}g
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;