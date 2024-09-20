interface Task {
    id: number;
    name: string;
    completed: boolean;
}

export const tasks: Task[] = [
    {
        id: 1,
        name: 'Lavar as mãos',
        completed: false,
    },
    {
        id: 2,
        name: 'Fazer um bolo',
        completed: false,
    },
    {
        id: 3,
        name: 'Lavar a louça',
        completed: false,
    },
    {
        id: 4,
        name: 'Levar o lixo para fora',
        completed: true,
    },
]