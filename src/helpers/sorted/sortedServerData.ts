import { useAddDispatch, useAppSelector } from "../../hooks/redux";
import React, { useEffect } from "react";
import {fetchServers} from "../../redux/servers/ServersCreators";
import {State} from "../State"

export const SortedServer = () => {
    const dispatch = useAddDispatch();
    const { data } = useAppSelector((state) => state.serverReducer);

    useEffect(() => {
        dispatch(fetchServers());
    }, []);


    const {sortBy, setSortBy, sortDirection, setSortDirection, searchQuery, setSearchQuery} = State()

    //Сортировка данных
    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
    };

    //Фильтрация
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) => {
        // Фильтрацию по каждому столбцу
        return (
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.ipAddressServer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.regFile.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.os.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.timeStart.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.version.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    //Функция сортировки столбцов
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy) {
            const sortOrder = sortDirection === 'asc' ? 1 : -1;
            return a[sortBy] > b[sortBy] ? sortOrder : -sortOrder;
        }
        return 0;
    });



    return {
        sortBy,
        sortDirection,
        searchQuery,
        sortedData,
        handleSearch,
        handleSort
    };
};
