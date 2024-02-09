//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux / Reducer
//|| User Panel Reducer
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { PanelUserActionTypes,PanelUserState }                            from '../types/panel.user.types';    
      import { PANEL_USER_OPEN, PANEL_USER_CLOSE }                              from '../types/panel.user.types';
      import { USER_STATUS_ACTIVE, USER_STATUS_INACTIVE, USER_STATUS_AWAY }     from '../types/panel.user.types';
      import { USER_SORT_ALPHA, USER_SORT_GENDER, USER_SORT_BROADCAST, USER_SORT_LEVEL, USER_SORT_DISTANCE }      from '../types/panel.user.types';
      import { USER_FILTER_ALL, USER_FILTER_MODS, USER_FILTER_FRIENDS, USER_FILTER_BLOCKED, USER_FILTER_VIEWERS, USER_FILTER_BROADCASTING } from '../types/panel.user.types';
      import { USER_SEARCH_TERM }                                               from '../types/panel.user.types';
      import { SETTINGS_MODAL_OPEN, SETTINGS_MODAL_CLOSE }                      from '../types/panel.user.types';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Initial State
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const PanelUserInitial: PanelUserState = {
            isOpen            : true,
            status            : USER_STATUS_ACTIVE,
            sortBy            : 'name',
            filter            : 'all',
            searchTerm        : '',
            searchStatus      : 'off',
            modalSettingsOpen : true
      };
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Reducer
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const PanelUserReducer = (
            state = PanelUserInitial,
            action: PanelUserActionTypes
      ): PanelUserState => {
            switch (action.type) {
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Panel
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case PANEL_USER_OPEN:
                        console.log('User Panel Opened');
                        return { ...state, isOpen: true };
                  case PANEL_USER_CLOSE:
                        console.log('User Panel Closed');
                        return { ...state, isOpen: false };
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Status
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_STATUS_ACTIVE:
                        console.log('User Status: Active');
                        return { ...state, status: USER_STATUS_ACTIVE };
                  case USER_STATUS_INACTIVE:
                        console.log('User Status: Inactive');
                        return { ...state, status: USER_STATUS_INACTIVE };
                  case USER_STATUS_AWAY:
                        console.log('User Status: Away');
                        return { ...state, status: USER_STATUS_AWAY };
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Sort
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_SORT_ALPHA:
                        console.log('User Sort: Alpha');
                        return { ...state, sortBy: USER_SORT_ALPHA };
                  case USER_SORT_GENDER:
                        console.log('User Sort: Gender');
                        return { ...state, sortBy: USER_SORT_GENDER };
                  case USER_SORT_BROADCAST:
                        console.log('User Sort: Broadcast');
                        return { ...state, sortBy: USER_SORT_BROADCAST };
                  case USER_SORT_LEVEL:
                        console.log('User Sort: Level');
                        return { ...state, sortBy: USER_SORT_LEVEL };
                  case USER_SORT_DISTANCE:
                        console.log('User Sort: Distance');
                        return { ...state, sortBy: USER_SORT_DISTANCE };
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Filter
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_FILTER_ALL:
                        console.log('User Filter: All');
                        return { ...state, filter: USER_FILTER_ALL };
                  case USER_FILTER_MODS:
                        console.log('User Filter: Mods');
                        return { ...state, filter: USER_FILTER_MODS };
                  case USER_FILTER_FRIENDS:
                        console.log('User Filter: Friends');
                        return { ...state, filter: USER_FILTER_FRIENDS };
                  case USER_FILTER_BLOCKED:
                        console.log('User Filter: Blocked');
                        return { ...state, filter: USER_FILTER_BLOCKED };
                  case USER_FILTER_VIEWERS:
                        console.log('User Filter: Viewers');
                        return { ...state, filter: USER_FILTER_VIEWERS };                        
                  case USER_FILTER_BROADCASTING:
                        console.log('User Filter: Broadcasting');
                        return { ...state, filter: USER_FILTER_BROADCASTING };                        
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Search
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case USER_SEARCH_TERM:
                        console.log('Search Term Set');
                        return { ...state, searchTerm: action.payload };
                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Panel
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  case SETTINGS_MODAL_OPEN:
                        console.log('Modal Settings Opened');
                        return { ...state, modalSettingsOpen: true };
                  case SETTINGS_MODAL_CLOSE:
                        console.log('Modal Settings Closed');
                        return { ...state, modalSettingsOpen: false };

                  /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
                  //|| Done
                  //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
                  default: return state;
            }
      };
