//Функции получения данных с БД

import {useEffect, useState} from "react";
import {IClient, IServer} from "../types/types";
import jsonData from "../db/db.json";

export function useClients() {
    const [data, setData] = useState<IClient[]>(jsonData.clients);


        useEffect(() => {
            fetch('../db/db.json')
                .then((response) => response.json())
                .then((jsonData) => {
                    setData(jsonData.clients);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }, []);
        return {data}
    }


export function useServer() {

    const [data, setData] = useState<IServer[]>(jsonData.servers);

    useEffect(() => {
        fetch('../db/db.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData.servers);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return {data}
}
