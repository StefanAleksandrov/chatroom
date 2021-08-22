export interface IChatroom {
    _id: string;
    name: string;
    description: string;
    image: string;
    owner_id: string[];
    members: string[];
    messages: string[];
    created_at: string;
}