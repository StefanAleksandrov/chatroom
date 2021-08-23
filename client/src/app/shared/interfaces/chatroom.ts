export interface IChatroom {
    _id: string;
    name: string;
    description: string;
    image: string;
    creator: string;
    members: string[];
    messages: string[];
    created_at: string;
}