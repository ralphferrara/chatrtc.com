//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux / Reducer
//|| User Redicer
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import User Type
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import User                         from "../../app/interfaces/user";
      import {
                  UsersState,
                  UserActionTypes,
                  FETCH_USERS_REQUEST,
                  FETCH_USERS_SUCCESS,
                  FETCH_USERS_FAILURE,
                  ADD_USER,
                  SET_USERS,
                  REMOVE_USER,
                  USER_SORT_ALPHA,
                  USER_SORT_GENDER,
                  USER_SORT_LEVEL,
                  USER_SORT_DISTANCE,
                  USER_SORT_BROADCASTING,
                  USER_FILTER_ALL,
                  USER_FILTER_MODS,
                  USER_FILTER_FRIENDS,
                  USER_FILTER_BLOCKED,
                  USER_FILTER_VIEWERS,
                  USER_FILTER_BROADCASTING,
                  USER_SEARCH_TERM       
      } from "../types/users.types";
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Users Sort Class
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import UsersSort from "../../app/classes/users.sort";
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Initial State
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const initialState: UsersState = {
	      loading           : false,
	      users             : [],
	      error             : null,
            sortBy            : USER_SORT_ALPHA,
            filterBy          : USER_FILTER_ALL,
            searchTerm        : ''
      };

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Reducer
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export function UsersReducer(
	      state       = initialState, 
            action      : UserActionTypes
      ): UsersState {
            switch (action.type) {
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Fetch and Set
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case SET_USERS                : return {...state, users: action.payload};
                  case FETCH_USERS_REQUEST      : return {...state, loading: true};
                  case FETCH_USERS_SUCCESS      : return {...state, loading: false, users: action.payload};
                  case FETCH_USERS_FAILURE      : return {...state, loading: false, error: action.payload};
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Incremental Add/Remove
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case ADD_USER                 : return {...state, users: [...state.users, action.payload]};
                  case REMOVE_USER              : 
                        return { ...state, users: state.users.filter(
                                    (user) => user.userId !== action.payload
                        ),
                  };
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Filter
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_FILTER_ALL:
                        console.log('User Filter: All');
                        return { ...state, filterBy: USER_FILTER_ALL };
                  case USER_FILTER_MODS:
                        console.log('User Filter: Mods');
                        return { ...state, filterBy: USER_FILTER_MODS };
                  case USER_FILTER_FRIENDS:
                        console.log('User Filter: Friends');
                        return { ...state, filterBy: USER_FILTER_FRIENDS };
                  case USER_FILTER_BLOCKED:
                        console.log('User Filter: Blocked');
                        return { ...state, filterBy: USER_FILTER_BLOCKED };
                  case USER_FILTER_VIEWERS:
                        console.log('User Filter: Viewers');
                        return { ...state, filterBy: USER_FILTER_VIEWERS };                        
                  case USER_FILTER_BROADCASTING:
                        console.log('User Filter: Broadcasting');
                        return { ...state, filterBy: USER_FILTER_BROADCASTING };                         
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Sort
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_SORT_ALPHA:
                        console.log("User Sort : Alpha");
                        return { ...state, users: UsersSort.byAlpha(state.users), sortBy: USER_SORT_ALPHA };                  
                  case USER_SORT_GENDER:
                        console.log("User Sort : Gender");
                        return { ...state, users: UsersSort.byBroadcastingAndGender(false, state.users), sortBy: USER_SORT_GENDER };                  
                  case USER_SORT_LEVEL:
                        console.log("User Sort : Level");
                        return { ...state, users: UsersSort.byLevel(state.users), sortBy: USER_SORT_LEVEL};                  
                  case USER_SORT_DISTANCE:
                        console.log("User Sort : Distance");
                        return { ...state, users: UsersSort.byDistance(state.users, 32.7157, -117.1611), sortBy: USER_SORT_DISTANCE};                  
                  case USER_SORT_BROADCASTING:
                        console.log("User Sort : Broadcasting");
                        return { ...state, users: UsersSort.byBroadcastingAndGender(true, state.users), sortBy: USER_SORT_BROADCASTING};                                    
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Search
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_SEARCH_TERM:
                        console.log('Search Term Set');
                        return { ...state, searchTerm: action.payload };                        
                  default: return state;
	}
}
