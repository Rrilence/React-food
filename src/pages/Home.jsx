import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../api";
import {Preloader} from '../components/Preloader';
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setfilteredCatalog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';

    const navigate = useNavigate();

    const handleSearch = (str)  => {
        setSearchParams({search: str});
        setfilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(searchQuery.toLowerCase()))
        )
    }

    const handleArea = (str) => {
        setSearchParams({ search: str });
        navigate(`/area?search=${str}`);
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setfilteredCatalog(data.categories.filter(item => item.strCategory.toLowerCase().includes(searchQuery.toLowerCase())));
        });
    }, [searchQuery])

    return <>
    <Search cb={handleSearch} cbArea={handleArea}/>
    {!catalog.length ? <Preloader/> : (
        <CategoryList catalog={filteredCatalog} />
    )}
    </>
}

export {Home}