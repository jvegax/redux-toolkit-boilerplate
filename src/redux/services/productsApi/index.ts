import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

    endpoints: (builder) => ({  
   
        getProducts: builder.query<Product[], null>({
            query: () => '/products',
        }),

        getProductById: builder.query<Product, { id: string }>({
            query: ({ id }) => `/products/${id}`
        }),

        createProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: 'products',
                method: 'POST',
                body: product,
            }),
        }),
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation
} = productsApi;

export default productsApi;