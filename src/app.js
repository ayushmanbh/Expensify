import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize-css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 400 }))
store.dispatch(addExpense({ description: 'gas bill', amount: 800, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 10050 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))