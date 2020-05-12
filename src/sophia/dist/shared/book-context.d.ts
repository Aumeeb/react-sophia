import React, { FC } from 'react';
declare type BookContextType = {
    name: string;
} & typeof api;
declare const api: {
    getTable(): Promise<{
        name: string;
        age: number;
    }[]>;
    getBooks(): Promise<{
        name: string;
        id: number;
        age: number;
    }[]>;
    searchBook(id: number): Promise<{
        name: string;
        id: number;
        age: number;
    }[]>;
};
export declare const BookContext: React.Context<Partial<BookContextType>>;
export declare const BookContextProvider: FC;
export {};
