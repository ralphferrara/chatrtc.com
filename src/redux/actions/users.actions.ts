/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux Actions
//|| Users Actions
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/            

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/     
      import { Dispatch } from 'redux';
      import { UserActionTypes, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../types/users.types';
      import { USER_SORT_ALPHA, USER_SORT_GENDER, USER_SORT_BROADCASTING, USER_SORT_LEVEL, USER_SORT_DISTANCE, UserSortAlpha, UserSortGender, UserSortLevel, UserSortDistance, UserSortBroadcasting }                        from '../types/users.types';
      import { USER_FILTER_ALL, USER_FILTER_MODS, USER_FILTER_FRIENDS, USER_FILTER_BLOCKED, USER_FILTER_VIEWERS, USER_FILTER_BROADCASTING, UserFilterAll, UserFilterMods, UserFilterBlocked, UserFilterFriends, UserFilterViewers, UserFilterBroadcasting } from '../types/users.types';
      import { USER_SEARCH_TERM, UserSearchTerm } from '../types/users.types';

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Fetch Users
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/     
      export const fetchUsers = async (dispatch: Dispatch<UserActionTypes>) => {
            dispatch({ type: FETCH_USERS_REQUEST });
            try {
                  if (process.env.REACT_APP_ENDPOINT_USERS_LOAD === undefined) {
                        throw new Error('REACT_APP_ENDPOINT_USERS_LOAD is undefined');
                  }
                  const response = await fetch(process.env.REACT_APP_ENDPOINT_USERS_LOAD);
                  if (!response.ok) {
                        throw new Error('Failed to fetch users');
                  }
                  const data = await response.json();
                  dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
            } catch (error) {
                  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
                  dispatch({ type: FETCH_USERS_FAILURE, payload: errorMessage });
            }
      };
	/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Filter
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
	export const setUserFilterAll = (): UserFilterAll => ({
		type: USER_FILTER_ALL,
	});
	export const setUserFilterMods = (): UserFilterMods => ({
		type: USER_FILTER_MODS,
	});
	export const setUserFilterFriends = (): UserFilterFriends => ({
		type: USER_FILTER_FRIENDS,
	});
	export const setUserFilterBlocked = (): UserFilterBlocked => ({
		type: USER_FILTER_BLOCKED,
	});
	export const setUserFilterViewers = (): UserFilterViewers => ({
		type: USER_FILTER_VIEWERS,
	});
	export const setUserFilterBroadcasting = (): UserFilterBroadcasting => ({
		type: USER_FILTER_BROADCASTING,
	});
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Sort
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setUserSortAlpha      = (): UserSortAlpha => ({
            type: USER_SORT_ALPHA
      });      
      export const setUserSortGender     = (): UserSortGender => ({
            type: USER_SORT_GENDER
      });
      export const setUserSortLevel      = (): UserSortLevel => ({
            type: USER_SORT_LEVEL
      });
      export const setUserSortBroadcasting  = (): UserSortBroadcasting => ({
            type: USER_SORT_BROADCASTING
      });
      export const setUserSortDistance   = (): UserSortDistance => ({
            type: USER_SORT_DISTANCE
      });
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Search
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setUserSearchTerm = (term: string): UserSearchTerm => ({
            type: USER_SEARCH_TERM,
            payload: term
      });      