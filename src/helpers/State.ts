import {useState} from "react";

export const State = () => {
    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [searchQuery, setSearchQuery] = useState<string>("");

    return {
        sortBy,
        sortDirection,
        searchQuery,
        setSortBy,
        setSortDirection,
        setSearchQuery,
    };
}