import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import {getRecipeFromMistral} from "../ai";

export default function MainContent() {
    const [ingredients, setIngredients] = useState([])

    const[recipe, setRecipe] = useState("")

    const [loading, setLoading] = useState(false);

    function submitIngredient(formData) {
        const newIngredient = formData.get("ingredient" )
        setIngredients([...ingredients, newIngredient])
     }

    async function getRecipe() {
        setLoading(true)
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
        setLoading(false)
    }

    return (
        <main className="container">
            <form className="add-ingredient-form" action={submitIngredient}>
                <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" required />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList  
                    ingredients={ingredients} 
                    getRecipe={getRecipe} 
                />}
            {loading && <p>Loading...</p>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}