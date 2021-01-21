import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { NavigationActions, StackActions } from "react-navigation";

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setData: ['data'],
  selectRestaurant: ['data'],
  selectCandidate: ['data']
});

export const DataTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  restaurants: [],
  selectedRestaurant: '',
  selectedCandidate: null,
  viewed: []
});

/* ------------- Selectors ------------- */

export const Selectors = {
  getData: (state) => state.data,
};

/* ------------- Reducers ------------- */

export const request = (state, data) => {
  const restaurants = [];
  data.data.forEach((element) =>
    restaurants.includes(element.restaurant.label)
      ? null
      : restaurants.push(element.restaurant.label),
  );
  return state.merge({data: data.data, restaurants});
};

export const selectRestaurant = (state, data) => state.merge({selectedRestaurant: data.data})

export const selectCandidate = (state, data) => {
    const viewed = state.viewed.asMutable({deep:true})
    viewed.includes(data.data.id) ? null : viewed.push(data.data.id)
    return state.merge({selectedCandidate: data.data, viewed})}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DATA]: request,
  [Types.SELECT_RESTAURANT]: selectRestaurant,
  [Types.SELECT_CANDIDATE]: selectCandidate,
});
