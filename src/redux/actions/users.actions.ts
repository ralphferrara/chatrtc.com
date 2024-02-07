/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux Actions
//|| Users Actions
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/            

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/     
      import { Dispatch } from 'redux';
      import { UserActionTypes, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../types/users.types';
      import { SortUsersByAlphaAction,          SORT_USERS_BY_ALPHA }                           from '../types/users.types';      
      import { SortUsersByGenderAction,         SORT_USERS_BY_GENDER }                          from '../types/users.types';      
      import { SortUsersByLevelAction,          SORT_USERS_BY_LEVEL }                           from '../types/users.types';      
      import { SortUsersByBroadcastingAction,   SORT_USERS_BY_BROADCASTING }                    from '../types/users.types';      
      import { SortUsersByDistanceAction,       SORT_USERS_BY_DISTANCE }                        from '../types/users.types';      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Fetch Users
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/     
      export const fetchUsers = async (dispatch: Dispatch<UserActionTypes>) => {
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('');
            console.log('FETCHING USSERS');
            console.log('');
            console.log('');
            console.log('');
            console.log('');

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
      //|| Sort Functions - Alpha
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/     
      export const sortUsersByAlpha             = (): SortUsersByAlphaAction        => ({ type: SORT_USERS_BY_ALPHA, });
      export const sortUsersByGender            = (): SortUsersByGenderAction       => ({ type: SORT_USERS_BY_GENDER });
      export const sortUsersByLevel             = (): SortUsersByLevelAction        => ({ type: SORT_USERS_BY_LEVEL });
      export const sortUsersByBroadcasting      = (): SortUsersByBroadcastingAction => ({ type: SORT_USERS_BY_BROADCASTING });
      export const sortUsersByDistance          = (): SortUsersByDistanceAction     => ({ type: SORT_USERS_BY_DISTANCE });

