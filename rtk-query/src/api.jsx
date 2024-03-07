import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos', // Include pagination parameters
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    toggleTodo: builder.mutation({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useToggleTodoMutation } =
  todoApi;
