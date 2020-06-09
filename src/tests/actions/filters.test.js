import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('should generate set text filter action object', () => {
  const textFilter = 'something in'
  const action = setTextFilter(textFilter)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    textFilter
  })
})

test('should generate set end date action object without value', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    textFilter: ''
  })
})

test('should generate sort by date action object without value', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE',
  })
})

test('should generate sort by amount action object without value', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})
