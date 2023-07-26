import { useAddDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from "react";
import { fetchClients } from "../../redux/clients/ClientsCreators";
import {State} from "../State"

export const SortedClient = () => {
    const dispatch = useAddDispatch();
    const { data } = useAppSelector((state) => state.clientReducer);

    useEffect(() => {
        dispatch(fetchClients());
    }, []);


    const {sortBy, setSortBy, sortDirection, setSortDirection, searchQuery, setSearchQuery} = State()

    //Сортировка данных
    const filteredData = data.filter((row) => {
        // Фильтрацию по каждому столбцу
        return (
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.ipAddressServer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.os.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.timeStart.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.version.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy) {
            const sortOrder = sortDirection === "asc" ? 1 : -1;
            return a[sortBy] > b[sortBy] ? sortOrder : -sortOrder;
        }
        return 0;
    });

    const handleSort = (column: string) => {


        if (column === sortBy) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortDirection("asc");
        }

    };



    //Поиск по столбцам
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };


    return {
        sortBy,
        sortDirection,
        searchQuery,
        sortedData,
        handleSearch,
        handleSort
    };
};
