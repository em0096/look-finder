import LookCard from "../components/LookCard";
import {useEffect, useState} from "react";
import{getLooks, type Look} from "../api/api";


export default function Home(){
    const [looks, setLooks] = useState<Look[]>([]); // State to hold the array of Look objects
    const [loading, setLoading] = useState(true); // State to indicate loading status
    const [error, setError] = useState<string | null>(null); // State to hold error messages

    useEffect(() => {
        // Flag to track if the component is unmounted
        let cancelled = false; // prevents React from updating state after the component has unmounted (removed from the screen).

        (async () => {
            try{
                setLoading(true); // Set loading state to true before fetching data
                setError(null); // Clear any previous errors
                
                const data = await getLooks(); // Fetch looks from the API
                if(!cancelled) setLooks(data); // Update looks state if component is still mounted
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : "Something went wrong."); // Set error state if an error occurs
            }finally {
                if (cancelled) setLoading(false); // Set loading state to false after fetching is complete
            }
        })();

        // cleanup function
        return () => {
            cancelled = true; // Set the cancelled flag to true when the component unmounts
        };

        }, []); // Empty dependency array means this effect runs once on mount

        if (loading) {
            return <div> Loading... </div>; // Display loading message while data is being fetched
        }
        if (error) {
            return <div> Error: {error} </div>; // Display message if an error occurred
        }

    return(
        <div className="flex flex-col justify-center items-center h-full">
            {looks.map(look => (
                <LookCard key={look.id} look={look} />
            ))}
        </div>
    );
}