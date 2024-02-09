//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux / Types
//|| User Types
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import User Type
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import User  from '../../app/interfaces/user';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Types
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const FETCH_USERS_REQUEST          = 'FETCH_USERS_REQUEST';
      export const FETCH_USERS_SUCCESS          = 'FETCH_USERS_SUCCESS';
      export const FETCH_USERS_FAILURE          = 'FETCH_USERS_FAILURE';
      export const ADD_USER                     = 'ADD_USER';
      export const REMOVE_USER                  = 'REMOVE_USER';
      export const SET_USERS                    = 'SET_USERS';
      export const SORT_USERS_BY_ALPHA          = 'SORT_USERS_BY_ALPHA';
      export const SORT_USERS_BY_GENDER         = 'SORT_USERS_BY_GENDER';
      export const SORT_USERS_BY_LEVEL          = 'SORT_USERS_BY_LEVEL';
      export const SORT_USERS_BY_BROADCASTING   = 'SORT_USERS_BY_BROADCASTING';
      export const SORT_USERS_BY_DISTANCE       = 'SORT_USERS_BY_DISTANCE';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interfaces - List Modification Actions
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface SetUsersAction                 { type: typeof SET_USERS; payload: User[]; }    
      interface FetchUsersRequestAction               { type: typeof FETCH_USERS_REQUEST; }
      interface FetchUsersSuccessAction               { type: typeof FETCH_USERS_SUCCESS; payload: User[]; }
      interface FetchUsersFailureAction               { type: typeof FETCH_USERS_FAILURE; payload: string; }
      interface AddUserAction                         { type: typeof ADD_USER; payload: User; }
      interface RemoveUserAction                      { type: typeof REMOVE_USER; payload: number; }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interfaces - List Sorting Actions
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface SortUsersByAlphaAction         { type: typeof SORT_USERS_BY_ALPHA; }       
      export interface SortUsersByGenderAction        { type: typeof SORT_USERS_BY_GENDER; }       
      export interface SortUsersByLevelAction         { type: typeof SORT_USERS_BY_LEVEL; }       
      export interface SortUsersByBroadcastingAction  { type: typeof SORT_USERS_BY_BROADCASTING; }       
      export interface SortUsersByDistanceAction      { type: typeof SORT_USERS_BY_DISTANCE; }       
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interface - User State
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface UsersState                     { loading: boolean; users: User[]; error: string | null; }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Type
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export type UserActionTypes = SetUsersAction
                                    | FetchUsersRequestAction
                                    | FetchUsersSuccessAction
                                    | FetchUsersFailureAction
                                    | AddUserAction
                                    | RemoveUserAction
                                    | SortUsersByAlphaAction
                                    | SortUsersByGenderAction
                                    | SortUsersByLevelAction
                                    | SortUsersByBroadcastingAction
                                    | SortUsersByDistanceAction
      ;