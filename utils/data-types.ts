export type RSEvent = { // Change name? event was taken
    id: number;
    start_date: Date;
    end_date: Date;
    title: string;
    address: string;
    description: string;
    full_day: boolean
}

export const makeEvent = (
    id: number, 
    start_date: Date, 
    end_date: Date,
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

export type RSOrganizations = {
    id: number;
    title: string;
    subtitle: string;
    link: string;
    description: string;
}

export type RSBlog = {
    id: number;
    order_id: number;
    shipment_date: Date;
}