export type RSEvent = { // Change name? event was taken
    id: number;
    start_date: Date;
    end_date: Date;
    title: string;
    address: string;
    description: string;
    Duration: Date; // This is probably wrong
}

export type RSOrganizations = {
    id: number;
    title: string;
    link: string;
    description: string;
}

export type RSBlog = {
    id: number;
    order_id: number;
    shipment_date: Date;
}