
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Character {
    id: string;
    name: string;
    actor: string;
    description: string;
    total_episodes: number;
    photo: string;
    votes: number;
    url: string;
    mobileFriendlyUrl?: Nullable<string>;
}

export interface Vote {
    id: string;
    character: string;
    createdAt: string;
}

export interface IMutation {
    addVote(character: string): Vote | Promise<Vote>;
}

export interface IQuery {
    characters(): Character[] | Promise<Character[]>;
    character(id: string): Nullable<Character> | Promise<Nullable<Character>>;
}

export interface ISubscription {
    newVote(): Character[] | Promise<Character[]>;
}

type Nullable<T> = T | null;
