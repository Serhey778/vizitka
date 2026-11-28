
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Profile {
    id: string;
    name: string;
    description?: Nullable<string>;
    links?: Nullable<string[]>;
    skills?: Nullable<Skill[]>;
    experience?: Nullable<Experience[]>;
    projects?: Nullable<Project[]>;
}

export class Skill {
    id: string;
    name: string;
}

export class Experience {
    id: string;
    company: string;
    position: string;
}

export class Project {
    id: string;
    name: string;
    link: string;
}

export abstract class IQuery {
    abstract profile(profileId: string): Nullable<Profile> | Promise<Nullable<Profile>>;
}

type Nullable<T> = T | null;
