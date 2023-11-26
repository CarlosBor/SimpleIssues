export interface CardInfo {
    id: number;
    title: string;
    url: string;
    state: string;
    created_at: string;
    user: {
        login: string
    };
    body: string;
}
