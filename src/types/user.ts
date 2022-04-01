export interface IUser {
    name: string;
    username: string;
    location?: string;
    createdAt: number;
    followingCount: number;
    followersCount: number;
}
