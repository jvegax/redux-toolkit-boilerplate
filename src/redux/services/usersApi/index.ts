import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

    endpoints: (builder) => ({

        getUsers: builder.query<User[], null>({
            query: () => '/users',
        }),

        getUserById: builder.query<User, { id: string }>({
            query: ({ id }) => `/users/${id}`
        }),

        createUser: builder.mutation<User, User>({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user,
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation
} = usersApi;

export default usersApi;
