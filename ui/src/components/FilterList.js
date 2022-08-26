import React, { useState, useTransition } from "react";
import ListItem from "./ListItem";



export default function FilterList({ names }) {

    const [query, setQuery] = useState("");
    const [highlight, setHighlight] = useState("");

    const [isPending, startTransition] = useTransition();

    const changeHandler = ({ target: { value } }) => {
        setQuery(value);
        startTransition(() => setHighlight(value));
    };

    return (
        <div>
            <input onChange={changeHandler} value={query} type="text" />
            {names.map((name, i) => (
                <ListItem key={i} name={name} highlight={highlight} />
            ))}
        </div>
    );
}
