//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Redux / Types
//|| User Panel Types
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { PANEL_USER_OPEN, PANEL_USER_CLOSE, PanelUserOpenAction, PanelUserCloseAction, UserFilterBroadcasting }                                             from '../types/panel.user.types';
      import { USER_STATUS_ACTIVE, USER_STATUS_INACTIVE, USER_STATUS_AWAY, UserStatusActive, UserStatusInactive, UserStatusAway }         from '../types/panel.user.types';
      import { USER_SORT_ALPHA, USER_SORT_GENDER, USER_SORT_BROADCAST, USER_SORT_LEVEL, USER_SORT_DISTANCE, UserSortAlpha, UserSortGender, UserSortLevel, UserSortDistance, UserSortBroadcast }                        from '../types/panel.user.types';
      import { USER_FILTER_ALL, USER_FILTER_MODS, USER_FILTER_FRIENDS, USER_FILTER_BLOCKED, USER_FILTER_VIEWERS, USER_FILTER_BROADCASTING, UserFilterAll, UserFilterMods, UserFilterBlocked, UserFilterFriends, UserFilterViewers } from '../types/panel.user.types';
      import { USER_SEARCH_TERM, UserSearchTerm }                                                                                         from '../types/panel.user.types';
      import { SETTINGS_MODAL_OPEN, SETTINGS_MODAL_CLOSE, ModalSettingsOpenAction, ModalSettingsCloseAction }                             from '../types/panel.user.types';
      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Panel
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const openPanellUsers        = (): PanelUserOpenAction => ({
            type: PANEL_USER_OPEN
      });
      export const closePanelUsers       = (): PanelUserCloseAction => ({
            type: PANEL_USER_CLOSE
      });
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Status
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setUserStatusActive   = (): UserStatusActive => ({
            type: USER_STATUS_ACTIVE
      });
      export const setUserStatusInactive = (): UserStatusInactive => ({
            type: USER_STATUS_INACTIVE
      });
      export const setUserStatusAway     = (): UserStatusAway => ({
            type: USER_STATUS_AWAY
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
      export const setUserSortBroadcasting  = (): UserSortBroadcast => ({
            type: USER_SORT_BROADCAST
      });
      export const setUserSortDistance   = (): UserSortDistance => ({
            type: USER_SORT_DISTANCE
      });
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Filter
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setUserFilterAll      = (): UserFilterAll => ({
            type: USER_FILTER_ALL
      });
      export const setUserFilterMods     = (): UserFilterMods => ({
            type: USER_FILTER_MODS
      });
      export const setUserFilterFriends  = (): UserFilterFriends => ({
            type: USER_FILTER_FRIENDS
      });
      export const setUserFilterBlocked  = (): UserFilterBlocked => ({
            type: USER_FILTER_BLOCKED
      });
      export const setUserFilterViewers  = (): UserFilterViewers => ({
            type: USER_FILTER_VIEWERS
      });
      export const setUserFilterBroadcasting  = (): UserFilterBroadcasting => ({
            type: USER_FILTER_BROADCASTING
      });
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Search
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setUserSearchTerm = (term: string): UserSearchTerm => ({
            type: USER_SEARCH_TERM,
            payload: term
      });
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Action Creators - Modal Settings
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      export const setModalSettingsOpen   = (): ModalSettingsOpenAction => ({
            type: SETTINGS_MODAL_OPEN
      });
      export const setModalSettingsClose  = (): ModalSettingsCloseAction => ({
            type: SETTINGS_MODAL_CLOSE
      });
