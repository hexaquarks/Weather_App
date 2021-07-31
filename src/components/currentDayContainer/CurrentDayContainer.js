
import CurrentDayContainerOverview from "../currentDayContainerOverview/CurrentDayContainerOverview.js"
import CurrentDayContainerDetails from "../currentDayContainerDetails/CurrentDayContainerDetails.js"
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './CurrentDayContainer.module.css'

const CurrentDayContainer = ({ weather }) => {
    // const [unitState, setUnitState] = useState('°C');
    // const  prop1 = {weather ,unitState};
    // const prop2 = {weather , setUnitState};
    return (
        <div className={styles.main_container}>
            {/* the weather box (left) */}
            < CurrentDayContainerOverview weather={weather} />
            {/* the weather information rectangle (right) */}
            < CurrentDayContainerDetails weather={weather} />
        </div>
    )
}

CurrentDayContainer.propTypes = {
    weather: PropTypes.object.isRequired,
};

export default CurrentDayContainer;