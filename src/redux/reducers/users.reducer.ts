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
                  SORT_USERS_BY_ALPHA,
                  SORT_USERS_BY_GENDER,
                  SORT_USERS_BY_LEVEL,
                  SORT_USERS_BY_BROADCASTING,
                  SORT_USERS_BY_DISTANCE
      } from "../types/users.types";
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Initial State
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const initialState: UsersState = {
	      loading           : false,
	      users             : [],
	      error             : null,
      };
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Actual Sort Functions - Alpha
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      function sortFunctionByAlpha(users: User[]): User[] {      
            return [...users].sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()));
      }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Actual Sort Functions - Gender
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      function sortFunctionByGenderBroadcasting(sortBroadcasting:boolean, users: User[]): User[] {
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Map out all possible combinations to make it easier
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const orderMap: { [key: string]: number } = {
                  'FF': 1, 'FT': 2, 'FO': 3, 'FM': 4, 
                  'TF': 5, 'TT': 6, 'TO': 7, 'TM': 8,
                  'OF': 9, 'OT': 10, 'OO': 11, 'OM': 12, 
                  'MF': 13, 'MT': 14, 'MO': 15, 'MM': 16,
                  'F': 17, 'T': 18, 'O': 19, 'M': 20
            };
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Map out all possible combinations to make it easier
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            return users.slice().sort((a, b) => {
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Handle Broadcasting
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  if (sortBroadcasting) {
                        console.log('SORTING BY BROADCASTING');
                        if (a.isBroadcasting && !b.isBroadcasting) return -1;
                        if (!a.isBroadcasting && b.isBroadcasting) return 1;                  
                  }
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Couples Compare
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  const isCoupleA = a.gender.length > 1;
                  const isCoupleB = b.gender.length > 1;
                  if (isCoupleA && !isCoupleB) return -1;
                  if (!isCoupleA && isCoupleB) return 1;
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Order by Gender #
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  const orderA = orderMap[a.gender] || 99; // Defaults to 99 if not found
                  const orderB = orderMap[b.gender] || 99; 
                  if (orderA !== orderB) return orderA - orderB;
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Default to Alpha if Same
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  return a.username.localeCompare(b.username);
            });
	}
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Actual Sort Functions - Level
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      function sortFunctionByDistance(users: User[], currentLatitude: number, currentLongitude: number): User[] {
            const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
                  const R = 6371; // Earth's radius in kilometers
                  const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert from degrees to radians
                  const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert from degrees to radians
                  const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                  return Math.floor(R * c); // Distance in kilometers
                };
          
            // Create a new array with updated distances for immutability
            const updatedUsers = users.map(user => ({
              ...user,
              distance: calculateDistance(currentLatitude, currentLongitude, user.latitude, user.longitude)
            }));
            console.log(updatedUsers);
          
            // Sort the new array by distance in ascending order
            return updatedUsers.sort((a, b) => (a.distance || 0) - (b.distance || 0));
          }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Actual Sort Functions - Level
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      function sortFunctionByLevel(users: User[]): User[] {
            const sortedUsers = [...users];
            sortedUsers.sort((a, b) => {
                  if (b.level !== a.level) return b.level - a.level;
                  return a.username.localeCompare(b.username);
            });
            return sortedUsers;
      }      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Reducer
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export function UsersReducer(
	      state       = initialState, 
            action: UserActionTypes
      ): UsersState {
            switch (action.type) {
                  case SET_USERS                : return {...state, users: action.payload};
                  case FETCH_USERS_REQUEST      : return {...state, loading: true};
                  case FETCH_USERS_SUCCESS      : return {...state, loading: false, users: action.payload};
                  case FETCH_USERS_FAILURE      : return {...state, loading: false, error: action.payload};
                  case ADD_USER                 : return {...state, users: [...state.users, action.payload]};
                  case REMOVE_USER:
                        return { ...state, users: state.users.filter(
                                    (user) => user.userId !== action.payload
                              ),
                        };
                  case SORT_USERS_BY_ALPHA:
                        console.log("sortUsersByAlpha : Actually sorting the list");
                        return { ...state, users: sortFunctionByAlpha(state.users) };                  
                  case SORT_USERS_BY_GENDER:
                        console.log("sortUsersByGender : Actually sorting the list");
                        return { ...state, users: sortFunctionByGenderBroadcasting(false, state.users) };                  
                  case SORT_USERS_BY_LEVEL:
                        console.log("sortUsersByLevel : Actually sorting the list");
                        return { ...state, users: sortFunctionByLevel(state.users) };                  
                  case SORT_USERS_BY_DISTANCE:
                              console.log("sortUsersByDistance : Actually sorting the list");
                              return { ...state, users: sortFunctionByDistance(state.users, 32.7157, -117.1611) };                  
                  case SORT_USERS_BY_BROADCASTING:
                                    console.log("sortUsersByBroadcasting : Actually sorting the list");
                                    return { ...state, users: sortFunctionByGenderBroadcasting(true, state.users) };                                    
                  default: return state;
	}
}
