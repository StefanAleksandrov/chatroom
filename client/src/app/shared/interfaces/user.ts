import { IChatroom } from "./chatroom";

export interface IUser {
    _id: string
    email: string;
    role: string,
    register_date: string,
    chatrooms: IChatroom[],
}