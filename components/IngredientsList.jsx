export default function IngredientsList(props) {

    const ingredientListItems = props.ingredients.map(
        (ingredient) => (
            ingredient && <li key={ingredient}>{ingredient}</li>
        )
   )

    return (
        <section>
            <div className="ingredients-block">
                <h2>Ingredients on Hand:</h2>
                <ul className="ingredient-list" araia-live="polite">
                    {ingredientListItems}
                </ul>
                {props.ingredients.length > 3 && 
                    <div className="get-recipe-container">
                        <div ref={props.ref}>
                            <h3>Ready for a recipe?</h3> 
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </div>
        </section>
    )
}