import {useEffect, useState} from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

    useEffect(() =>{
      const fetchMeals = async () => {
          const response = await fetch('https://react-http-beb77-default-rtdb.firebaseio.com/meals.json');
          
          if(!response.ok){
              throw new Error('Something were wrong.');
          }
          
          const responseData = await response.json();

          const loadedMeals = [];
          for(const key in responseData){
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              price: responseData[key].price
            })
          }

          setMeals(loadedMeals);
          setIsLoading(false);
      }

      fetchMeals().then().catch((e) => {
        setHttpError(e.message);
        setIsLoading(false);
      });
      
    }, []);

    if(isLoading){
      return <section className={classes.MealsLoading}>
        Loadding...
      </section>
    }

    if(httpError){
      return <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    }

    const mealsList = meals.map(meal => {
        return <MealItem
          id={meal.id}
          key={meal.id}
          description= {meal.description}
          name={meal.name}
          price={meal.price}
        />
    });

    return <section className={classes.meals}>
        <Card>
          <ul>
              {mealsList}
          </ul>
        </Card>
    </section>
};

export default AvailableMeals;