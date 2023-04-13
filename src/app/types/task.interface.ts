export interface ITask {
    userId?: number;
    id?: number;
    // Параметры id и userId, конечно, обязательные, но тут для корректной работы сделаю так
    title: string;
    completed: boolean;
}