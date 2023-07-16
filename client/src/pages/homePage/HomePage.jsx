/// IMPORTS
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import OrderFilter from "../../components/orderFilter/OrderFilter.jsx";
import CountryCards from "../../components/countryCards/CountryCards.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
// ACTIONS
import { getAllCountries, getAllActivities, } from "../../redux/actions/actions.js";
// STYLES
import style from "./HomePage.module.css";

///HOMEPAGE
export default function HomePage () {
    // GLABAL STATE
    const { searchCountries, allCountries } = useSelector(state => state)
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
    // RETURN
    return (
        <div>
            <OrderFilter/>
            <div>
                { searchCountries.length === 0 ? (
                    <div>
                        <div className={style.cardsContainer}>
                            <CountryCards 
                            countries={currentCountries}/>
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
                    <div className={style.cardsContainer}>
                        <CountryCards 
                        countries={currentCountriesSearch}/>
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
        </div>
    );
}