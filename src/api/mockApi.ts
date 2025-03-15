export const mockUsers = [
  {
    id: 1,
    name: "Abduallah El bialy",
    role: "Admin",
    status: "Active",
    joined: "2025-03-15",
  },
  {
    id: 2,
    name: "Sara Khaled",
    role: "Manager",
    status: "Inactive",
    joined: "2023-11-15",
  },
  {
    id: 3,
    name: "Omar Said",
    role: "Viewer",
    status: "Active",
    joined: "2024-01-20",
  },
  {
    id: 4,
    name: "Layla Mahmoud",
    role: "Editor",
    status: "Active",
    joined: "2024-04-10",
  },
  {
    id: 5,
    name: "Youssef Hassan",
    role: "Viewer",
    status: "Inactive",
    joined: "2024-02-28",
  },
  {
    id: 6,
    name: "Noura Abdullah",
    role: "Viewer",
    status: "Active",
    joined: "2024-05-01",
  },
  {
    id: 7,
    name: "Khalid Samir",
    role: "Viewer",
    status: "Inactive",
    joined: "2023-09-12",
  },
  {
    id: 8,
    name: "Fatima Zahra",
    role: "Viewer",
    status: "Active",
    joined: "2024-04-22",
  },
  {
    id: 9,
    name: "Tariq Nasser",
    role: "Manager",
    status: "Active",
    joined: "2023-12-05",
  },
  {
    id: 10,
    name: "Hana Saleh",
    role: "Manager",
    status: "Inactive",
    joined: "2024-03-18",
  },
  {
    id: 11,
    name: "Rami Faisal",
    role: "Manager",
    status: "Active",
    joined: "2024-01-09",
  },
  {
    id: 12,
    name: "Lina Omar",
    role: "Viewer",
    status: "Active",
    joined: "2024-06-10",
  },
  {
    id: 13,
    name: "Ziad Karim",
    role: "Admin",
    status: "Inactive",
    joined: "2023-08-25",
  },
  {
    id: 14,
    name: "Aisha Mansour",
    role: "Admin",
    status: "Active",
    joined: "2024-02-14",
  },
  {
    id: 15,
    name: "Fahad Ibrahim",
    role: "Viewer",
    status: "Active",
    joined: "2024-07-03",
  },
  {
    id: 16,
    name: "Salma Rashid",
    role: "Manager",
    status: "Inactive",
    joined: "2023-10-30",
  },
  {
    id: 17,
    name: "Bassam Talal",
    role: "Manager",
    status: "Active",
    joined: "2024-05-19",
  },
  {
    id: 18,
    name: "Dalia Waleed",
    role: "Viewer",
    status: "Active",
    joined: "2024-04-07",
  },
  {
    id: 19,
    name: "Majid Hamdi",
    role: "Viewer",
    status: "Inactive",
    joined: "2023-11-21",
  },
  {
    id: 20,
    name: "Saeed Jalal",
    role: "Viewer",
    status: "Active",
    joined: "2024-08-12",
  },
  {
    id: 21,
    name: "Ghada Adnan",
    role: "Viewer",
    status: "Active",
    joined: "2024-03-25",
  },
  {
    id: 22,
    name: "Yara Hisham",
    role: "Manager",
    status: "Inactive",
    joined: "2023-07-14",
  },
  {
    id: 23,
    name: "Waleed Faris",
    role: "Manager",
    status: "Active",
    joined: "2024-09-01",
  },
  {
    id: 24,
    name: "Nadia Tariq",
    role: "Admin",
    status: "Active",
    joined: "2024-10-05",
  },
  {
    id: 25,
    name: "Hassan Qasim",
    role: "Manager",
    status: "Inactive",
    joined: "2023-06-18",
  },
];

export async function getUsers(): Promise<
  Array<{
    id: number;
    name: string;
    role: string;
    status: string;
    joined: string;
  }>
> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers), 500);
  });
};

export const getUserById = (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers.find((user) => user.id === id)), 500);
  });
};
