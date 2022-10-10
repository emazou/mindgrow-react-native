import { configureStore } from '@reduxjs/toolkit'
import usersAPI from './userAPI'
import loggedSlice from './loggedSlice'
import productsAPI from './productsAPI'
import publicationsAPI from './publicationsAPI'
import modalSlice from './modalSlice'
import cartSlice from './cartSlice'
import reloadSlice from './reLoadSlice'
import editSlice from './editSlice'
import questionsAnswersAPI from './questionsAnswersAPI'
const store = configureStore({
    reducer: {
        [usersAPI.reducerPath]: usersAPI.reducer,
        [productsAPI.reducerPath]: productsAPI.reducer,
        [publicationsAPI.reducerPath]: publicationsAPI.reducer,
        [questionsAnswersAPI.reducerPath]: questionsAnswersAPI.reducer,
        logged: loggedSlice,
        modal: modalSlice,
        cart: cartSlice,
        reload: reloadSlice,
        edit: editSlice
    },
    /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware).concat(productsAPI.middleware).concat(publicationsAPI.middleware).concat(questionsAnswersAPI.middleware)
 */})
export default store