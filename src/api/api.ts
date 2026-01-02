import type { Look } from "../types/looks";
// Base URL for the API, configurable via environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

// Fetches the list of looks from the backend API
// TypeScript (Promise<Look[]>): Promise that resolves to an array of Look objects
export async function getLooks(): Promise<Look[]> {

    const res = await fetch(`${API_BASE_URL}/api/looks`); // Fetch data from the /api/looks endpoint

    // Error handling for failed requests
    if (!res.ok) {
        throw new Error(`Failed to fetch looks: ${res.statusText}`);
    }

    const data = await res.json(); // convert HTTP response to JSON
    return data; // return the array of Look objects

}