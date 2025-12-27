interface Content {
    title: string;
    description: string;
}

export interface Timeline {
    year: number | string;
    content: Content[]
}