import {useEffect, useState} from "react";
import {IClients} from "../models/clients";
import axios, {AxiosError} from "axios";

export function useClients() {
    const [clients, setClients] = useState<IClients[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchClients() {
        try {
            setError('')
            setLoading(true)
            const response =  await axios.get<IClients[]>('../db/db.json')
            setClients(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => {
        fetchClients()
    }, [])
    return { clients, error, loading}
}