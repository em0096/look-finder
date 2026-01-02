// Type definition for a Look object
export type Look = {
    id: number;
    title: string;
    description?: string;
    imageUrl: string;
    user: User;
    products: Product[];
};

export type User = {
    id: number;
    userName: string;
};

export type Product = {
    id: number;
    name: string;
    brand?: string;
    formula?: string;
    category?: string;
    shade?: string;
};