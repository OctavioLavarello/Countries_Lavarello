/// IMPORTS
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import CountryCards from "../../components/countryCards/CountryCards.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
// ACTIONS
import { getAllCountries, filterContinent, orderAlph, orderPopulation, reset, resetContinet, getAllActivities, getCountryActivity } from "../../redux/actions/actions.js";
// UTILS FILTER ACTIVITY NAME
import uniqueOptions from "./uniqueOptions.js"
// STYLES
import style from "./HomePage.module.css";

///HOMEPAGE
export default function HomePage () {
    // GLABAL STATE
    const { searchCountries, allCountries, activities } = useSelector(state => state)
    // LOCAL STATES
    const [currentPage, setCurrentPage] = useState(1);
    // PAGINATION
    const itemsPerPage = 10;
    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    let currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
    let currentCountriesSearch = searchCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const dispatch = useDispatch();
    // ALLCOUNTRIES
    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, []);
    // PAGINATE
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // FILTER ACTIVITY OPTIONS
    const activitiesNames = uniqueOptions(activities, "Name")
    const activitiesDifficulty = uniqueOptions(activities, "Difficulty")
    const activitiesDuration = uniqueOptions(activities, "Duration")
    const activitiesSeason = uniqueOptions(activities, "Season")
    const activitiesCountry = uniqueOptions(activities, "Country")
    // HANDLERS
    const handleFilterContinent = (e) => {
        dispatch(resetContinet())
        let value = e.target.value
        dispatch(filterContinent(value)) 
    }
    const handlerReset = () => {
        dispatch(reset())
    }
    const handlerOrderAlph = (e) => {
        let value = e.target.value
        dispatch(orderAlph(value))
    }
    const handlerOrderPopulation = (e) => {
        let value = e.target.value
        dispatch(orderPopulation(value))
    }
    const handlerCountry_Activity = (e) => {
        let value = e.target.value
        dispatch(getCountryActivity(value))
    }
    console.log(activities)
    console.log(allCountries)
    return (
        <div>
            <br />
                <div className={style.container}>
                    <h4>Order</h4>
                    <label>Alphabetically</label>
                    <select placeholder="alphabetically" onChange={handlerOrderAlph}>
                        <option value="A-Z" >A - Z</option>
                        <option value="Z-A" >Z - A</option>
                    </select>
                    <label>by Population</label>
                    <select placeholder="byPopulation" onChange={handlerOrderPopulation}>
                        <option value="major" >Major</option>
                        <option value="minor" >Minor</option>
                    </select>
                <div/>
                <div className={style.container}>
                    <h4>Filter</h4>
                    <label>by Continent</label>
                    <select placeholder="byContinent" onChange={handleFilterContinent}>
                        {["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"]
                        .map((continent) => (
                        <option key={continent} value={continent}>{continent}</option>)
                        )}
                    </select>
                    <h4></h4>
                    <label>by Activity</label>
                    <div>
                        <label>Name</label>
                        <select placeholder="name" onChange={handlerCountry_Activity}>
                            {activitiesNames.map(
                                (activity) => (
                                <option key={activity.ID} value={activity.name}>{activity.name}</option>)
                            )}
                        </select>
                        <label>Difficulty</label>
                        <select placeholder="difficulty">
                            {activitiesDifficulty.map(
                                (activity) => (
                                <option key={activity.ID} value={activity.difficulty}>{activity.difficulty}</option>)
                            )}
                        </select >
                        <label>Duration</label>
                        <select placeholder="name" onChange={handlerCountry_Activity}>
                            {activitiesDuration.map(
                                (activity) => (
                                <option key={activity.ID} value={activity.duration}>{activity.duration}</option>)
                            )}
                        </select>
                        <label>Season</label>
                        <select placeholder="season">
                            {activitiesSeason.map(
                                (activity) => (
                                <option key={activity.ID} value={activity.season}>{activity.season}</option>)
                            )}
                        </select>
                        <label>Country</label>
                        <select placeholder="name" onChange={handlerCountry_Activity}>
                            {activitiesCountry.map(
                                (activity) => (
                                <option key={activity.ID} value={activity.name}>{activity.name}</option>)
                            )}
                        </select>
                    </div>
                </div>
                <button onClick={handlerReset}>Reset</button>
                </div>
                <br />
                { searchCountries.length === 0 ? (
                    <div>
                        <div className={style.cardsContainer}>
                            <CountryCards countries={currentCountries}/>
                        </div>
                        <div>
                            <Pagination
                            itemsPerPage={itemsPerPage}
                            totalItems={allCountries.length}
                            currentPage={currentPage}
                            paginate={paginate}
                            />
                        </div>
                    </div>
                ) : (
                <div>
                    <div>
                        <CountryCards countries={currentCountriesSearch}/>
                    </div>
                    <div>
                        <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={searchCountries.length}
                        currentPage={currentPage}
                        paginate={paginate}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}