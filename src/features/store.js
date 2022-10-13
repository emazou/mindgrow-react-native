import { configureStore } from '@reduxjs/toolkit'
import usersAPI from './userAPI'
import loggedSlice from './loggedSlice'
import productsAPI from './productsAPI'
import modalSlice from './modalSlice'
import cartSlice from './cartSlice'
import reloadSlice from './reLoadSlice'
import editSlice from './editSlice'
import questionsAnswersAPI from './questionsAnswersAPI'
const store = configureStore({
    reducer: {
        [usersAPI.reducerPath]: usersAPI.reducer,
        [questionsAnswersAPI.reducerPath]: questionsAnswersAPI.reducer,
        [productsAPI.reducerPath]: productsAPI.reducer,
        logged: loggedSlice,
        modal: modalSlice,
        reload: reloadSlice,
        edit: editSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(usersAPI.middleware).concat(productsAPI.middleware).concat(questionsAnswersAPI.middleware)
})
export default store