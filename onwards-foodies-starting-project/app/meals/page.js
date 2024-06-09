import React, {Suspense} from 'react';
import classes from './page.module.css'
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';

async function Meals (){
    const meals = await getMeals();

    return <MealsGrid meals={meals} />

}

const MealsPage = async function () {
    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, create <span className={classes.highlight}> by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={  <p className={classes.loading}>Fetching meals...</p> } >
                    <MealsGrid 
                        meals ={meals}
                    />
                </Suspense>
            </main>

        </>
    );
};

export default MealsPage;