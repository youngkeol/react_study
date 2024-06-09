import React from 'react';
import classes from './loading.module.css'

const MealsLodingPage = () => {
    return (
        <p className={classes.loading}>
            Fetching meals...
        </p>
    );
};

export default MealsLodingPage