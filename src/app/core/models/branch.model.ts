export type Commune = 'santa-cruz' | 'san-fernando' | 'rengo';

export interface Branch {
    name: string;
    address: string;
    phone?: string;
    parking?: boolean,
    hours: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
    mapUrl?: string;
}