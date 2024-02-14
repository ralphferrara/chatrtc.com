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
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| User Sort
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const USER_SORT_ALPHA              = 'USER_SORT_ALPHA';
      export const USER_SORT_GENDER             = 'USER_SORT_GENDER';
      export const USER_SORT_LEVEL              = 'USER_SORT_LEVEL';
      export const USER_SORT_BROADCASTING       = 'USER_SORT_BROADCASTING';
      export const USER_SORT_DISTANCE           = 'USER_SORT_DISTANCE';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| User Filter
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const USER_FILTER_ALL              = 'USER_FILTER_ALL';
      export const USER_FILTER_MODS             = 'USER_FILTER_MODS';
      export const USER_FILTER_FRIENDS          = 'USER_FILTER_FRIENDS';
      export const USER_FILTER_BLOCKED          = 'USER_FILTER_BLOCKED'; 
      export const USER_FILTER_VIEWERS          = 'USER_FILTER_VIEWERS';
      export const USER_FILTER_BROADCASTING     = 'USER_FILTER_BROADCASTING';      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Search Toolbar
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const USER_SEARCH_TERM             = 'USER_SEARCH_TERM';       
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interfaces - List Modification Actions
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface SetUsersAction {
		type: typeof SET_USERS;
		payload: User[];
	}
	interface FetchUsersRequestAction {
		type: typeof FETCH_USERS_REQUEST;
	}
	interface FetchUsersSuccessAction {
		type: typeof FETCH_USERS_SUCCESS;
		payload: User[];
	}
	interface FetchUsersFailureAction {
		type: typeof FETCH_USERS_FAILURE;
		payload: string;
	}
	interface AddUserAction {
		type: typeof ADD_USER;
		payload: User;
	}
	interface RemoveUserAction {
		type: typeof REMOVE_USER;
		payload: number;
	}
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| User Sort Action Types
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface UserSortAlpha {
            type: typeof USER_SORT_ALPHA;
      }
      export interface UserSortGender {
            type: typeof USER_SORT_GENDER;
      }
      export interface UserSortLevel {
            type: typeof USER_SORT_LEVEL;
      }
      export interface UserSortBroadcasting {
            type: typeof USER_SORT_BROADCASTING;
      }
      export interface UserSortDistance {
            type: typeof USER_SORT_DISTANCE;
      }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| User Filter Action Types
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface UserFilterAll {
            type: typeof USER_FILTER_ALL;
      }
      export interface UserFilterMods {
            type: typeof USER_FILTER_MODS;
      }
      export interface UserFilterFriends {
            type: typeof USER_FILTER_FRIENDS;
      }
      export interface UserFilterBlocked {
            type: typeof USER_FILTER_BLOCKED;
      }
      export interface UserFilterViewers {
            type: typeof USER_FILTER_VIEWERS;
      }
      export interface UserFilterBroadcasting {
            type: typeof USER_FILTER_BROADCASTING;
      }       
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Search Action Types
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface UserSearchTerm {
            type: typeof USER_SEARCH_TERM;
            payload: string;
      }      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interface - User State
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export interface UsersState                     { 
                  loading :     boolean; 
                  users :       User[]; 
                  error :       string | null; 
                  searchTerm :  string;
                  sortBy :      string;
                  filterBy :    string;      
      }
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Type
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export type UserActionTypes = SetUsersAction
                                    | FetchUsersRequestAction
                                    | FetchUsersSuccessAction
                                    | FetchUsersFailureAction
                                    | AddUserAction
                                    | RemoveUserAction
                                    | UserSortAlpha
                                    | UserSortGender
                                    | UserSortLevel
                                    | UserSortBroadcasting
                                    | UserSortDistance
                                    | UserFilterAll
                                    | UserFilterMods 
                                    | UserFilterFriends
                                    | UserFilterBlocked 
                                    | UserFilterViewers 
                                    | UserFilterBroadcasting   
                                    | UserSearchTerm            
      ;