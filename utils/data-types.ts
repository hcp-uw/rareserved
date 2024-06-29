export type RSEvent = { // Change name? event was taken
    id: number | undefined;
    start_date: Date;
    end_date: Date | null;
    title: string;
    address: string;
    description: string;
    full_day: boolean
}

export const makeEvent = (
    id: number | undefined, 
    start_date: Date, 
    end_date: Date | null,
    title: string,
    address: string,
    description: string,
    full_day: boolean
) : RSEvent => {
    return {
        id,
        start_date,
        end_date,
        title,
        address,
        description,
        full_day
    }
}

export type RSOrganization = {
    id: number;
    title: string;
    subtitle: string;
    link: string;
    description: string;
}

export const makeOrg = (
    id: number, 
    title: string,
    subtitle: string,
    link: string,
    description: string
) : RSOrganization => {
    return {
        id,
        title,
        subtitle,
        link,
        description
    }
}

export type RSBlog = {
    id: number;
    title: string;
    subtitle: string;
    picture: string | null;
    author: string;
    text: string;
    date_posted: Date;
}

export const makeBlog = (
    id: number, 
    title: string,
    subtitle: string,
    picture: string | null,
    author: string,
    text: string,
    date_posted: Date
) : RSBlog => {
    return {
        id,
        title,
        subtitle,
        picture,
        author,
        text,
        date_posted
    }
}
