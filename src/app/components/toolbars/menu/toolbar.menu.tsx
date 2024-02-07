//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| NF :: Application File
//|| Toolbar - Menu
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import React                                          from 'react';
      import ButtonIcon                                     from '../../buttons/icon/button.icon';
      import MenuIcon                                       from '../../menus/icon/menu.icon';
      import { MenuIconItem }                               from '../../menus/icon/menu.icon';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux Panel
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { openPanellUsers, closePanelUsers }            from '../../../../redux/actions/panel.user.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux User Status
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { USER_STATUS_ACTIVE, USER_STATUS_INACTIVE, USER_STATUS_AWAY }     from '../../../../redux/types/panel.user.types';
      import { setUserStatusActive, setUserStatusInactive, setUserStatusAway }  from '../../../../redux/actions/panel.user.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux User Sort
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { USER_SORT_ALPHA, USER_SORT_GENDER, USER_SORT_BROADCAST, USER_SORT_LEVEL, USER_SORT_DISTANCE }                  from '../../../../redux/types/panel.user.types';
      import { setUserSortAlpha, setUserSortGender, setUserSortLevel, setUserSortDistance, setUserSortBroadcasting }             from '../../../../redux/actions/panel.user.actions';
      import { sortUsersByAlpha, sortUsersByGender, sortUsersByLevel, sortUsersByDistance, sortUsersByBroadcasting }             from '../../../../redux/actions/users.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux User Filter
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { USER_FILTER_ALL, USER_FILTER_MODS, USER_FILTER_FRIENDS, USER_FILTER_BLOCKED, USER_FILTER_VIEWERS }             from '../../../../redux/types/panel.user.types';
      import { setUserFilterAll, setUserFilterMods, setUserFilterBlocked, setUserFilterFriends, setUserFilterViewers }        from '../../../../redux/actions/panel.user.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Menu
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { openModalSettings }                          from '../../../../redux/actions/modal.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { useAppDispatch, useAppSelector }             from '../../../../redux/store';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { faArrowsLeftRight, faTimes }                                         from '@fortawesome/free-solid-svg-icons';
      import { faTv, faSortAlphaUp, faVenusMars, faIdBadge, faMap}                  from '@fortawesome/free-solid-svg-icons';
      import { faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash }             from '@fortawesome/free-solid-svg-icons';      
      import { faEye,   faUsers, faUserShield, faUserFriends, faPoo }               from '@fortawesome/free-solid-svg-icons';
      import { faMoon,  faHourglass, faCircle }                                     from '@fortawesome/free-solid-svg-icons';      
      import { faBars,  faCog, faQuestionCircle, faClipboardList, faSignOutAlt }    from '@fortawesome/free-solid-svg-icons';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| CSS
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/      
      import './toolbar.menu.css';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Component
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const ToolbarMenu = () => {
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| States
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const panelUserIsOpen  = useAppSelector((state) => state.panelUser.isOpen);
            const panelUserStatus  = useAppSelector((state) => state.panelUser.status);
            const panelUserSort    = useAppSelector((state) => state.panelUser.sortBy);            
            const panelUserFilter  = useAppSelector((state) => state.panelUser.filter);            
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Dispatch
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const dispatch         = useAppDispatch(); 
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Status Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miStatus          : MenuIconItem[] = [
                  { title: 'Active',      icon: faCircle,    value: 'active',   event: () => { dispatch(setUserStatusActive()); }  },
                  { title: 'Inactive',    icon: faHourglass, value: 'inactive', event: () => { dispatch(setUserStatusInactive()); }    },
                  { title: 'Away',        icon: faMoon,      value: 'away',     event: () => { dispatch(setUserStatusAway()); }   }
            ];
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| User Status Class
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userStatus = { 'icon' : faMoon, 'class' : 'inactive' };
            switch(panelUserStatus) {
                  case USER_STATUS_AWAY         : userStatus = { 'icon' : faMoon,         'class'     : 'away' };     break;
                  case USER_STATUS_INACTIVE     : userStatus = { 'icon' : faHourglass,    'class'     : 'inactive' };   break;
                  case USER_STATUS_ACTIVE       : userStatus = { 'icon' : faCircle,       'class'     : 'active' };       break;
            }            
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Sort By Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miSort            : MenuIconItem[] = [
                  { title: 'Alphabetical',      icon: faSortAlphaUp,    value: 'name',    event: () => { dispatch(sortUsersByAlpha());          dispatch(setUserSortAlpha()) }  },
                  { title: 'Gender',            icon: faVenusMars,      value: 'status',  event: () => { dispatch(sortUsersByGender());         dispatch(setUserSortGender()) }  },
                  { title: 'User Level',        icon: faIdBadge,        value: 'level',   event: () => { dispatch(sortUsersByLevel());          dispatch(setUserSortLevel()); }  },
                  { title: 'Broadcasting',      icon: faTv,             value: 'video',   event: () => { dispatch(sortUsersByBroadcasting());   dispatch(setUserSortBroadcasting()); }  },
                  { title: 'Distance',          icon: faMap,            value: 'level',   event: () => { dispatch(sortUsersByDistance());       dispatch(setUserSortDistance()); }  },
            ];                
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| User Sort Class
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userSort = { 'icon' : faSortAlphaUp, 'class' : 'inactive' };
            switch(panelUserSort) {
                  case USER_SORT_ALPHA          : userSort = { 'icon' : faSortAlphaUp,    'class'     : 'alpha' };     break;
                  case USER_SORT_GENDER         : userSort = { 'icon' : faVenusMars,      'class'     : 'gender' };    break;
                  case USER_SORT_LEVEL          : userSort = { 'icon' : faIdBadge,        'class'     : 'level' };     break;
                  case USER_SORT_BROADCAST      : userSort = { 'icon' : faTv,             'class'     : 'broadcast' };    break;
                  case USER_SORT_DISTANCE       : userSort = { 'icon' : faMap,            'class'     : 'distance' };       break;
            }            
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Broadcasting
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miBroadcast       : MenuIconItem[] = [
                  { title: 'Cam On',            icon: faVideo,           value: 'name',    event: () => {  }  },
                  { title: 'Cam Off',           icon: faVideoSlash,      value: 'name',    event: () => {  }  },
                  { title: 'Mic On',            icon: faMicrophone,      value: 'status',  event: () => {  }  },
                  { title: 'Mic Off',           icon: faMicrophoneSlash, value: 'date',    event: () => {  }  } 
            ];
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Filter By Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miFilter           : MenuIconItem[] = [
                  { title: 'All',          icon: faUsers,         value: 'name',    event: () => {  dispatch(setUserFilterAll()); }  },
                  { title: 'Mods',         icon: faUserShield,    value: 'name',    event: () => {  dispatch(setUserFilterMods()); }  },
                  { title: 'Friends',      icon: faUserFriends,   value: 'name',    event: () => {  dispatch(setUserFilterFriends()); }  },
                  { title: 'Blocked',      icon: faPoo,           value: 'name',    event: () => {  dispatch(setUserFilterBlocked()); }  },
                  { title: 'Viewers',      icon: faEye,           value: 'date',    event: () => {  dispatch(setUserFilterViewers()); }  },
            ];      
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Filter By 
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userFilter = { 'icon' : faUsers, 'class' : 'all' };
            switch(panelUserFilter) {
                  case USER_FILTER_ALL          : userFilter = { 'icon' : faUsers,        'class'     : 'all' };        break;
                  case USER_FILTER_MODS         : userFilter = { 'icon' : faUserShield,   'class'     : 'mods' };       break;
                  case USER_FILTER_FRIENDS      : userFilter = { 'icon' : faUserFriends,  'class'     : 'friends' };    break;
                  case USER_FILTER_BLOCKED      : userFilter = { 'icon' : faPoo,          'class'     : 'blocked' };    break;
                  case USER_FILTER_VIEWERS      : userFilter = { 'icon' : faEye,          'class'     : 'viewers' };    break;
            }
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Sort By Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miMenu           : MenuIconItem[] = [
                  { title: 'Settings',    icon: faCog,                  value: 'settings',      event: () => { dispatch(openModalSettings()) }  },
                  { title: 'Help',        icon: faQuestionCircle,       value: 'help',          event: () => {  }  },
                  { title: 'Rules',       icon: faClipboardList,        value: 'rules',         event: () => {  }  },
                  { title: 'Log Out',     icon: faSignOutAlt,           value: 'logout',        event: () => {  }  }
            ];        
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Return
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            return(
                  <div className="toolbarMenuWrapper">
                        <MenuIcon target="biStatus"     items={ miStatus }     forceClose={!panelUserIsOpen} callback={() => {} } />
                        <MenuIcon target="biSort"       items={ miSort }       forceClose={!panelUserIsOpen} callback={() => {} } />                        
                        <MenuIcon target="biBroadcast"  items={ miBroadcast }  forceClose={!panelUserIsOpen} callback={() => {} } />                        
                        <MenuIcon target="biFilter"     items={ miFilter }     forceClose={!panelUserIsOpen} callback={() => {} } />                        
                        <MenuIcon target="biMenu"       items={ miMenu }       forceClose={!panelUserIsOpen} callback={() => {} } />                        
                        <div className="toolbarMenu">                              
                              <ButtonIcon id=""               className={`icon toggle` } icon={faArrowsLeftRight} title="Open"    onClick={() => { dispatch(openPanellUsers()); } } />                  
                              <ButtonIcon id="biMenu"         className={`icon`} icon={faBars}           title="Menu"           />
                              <ButtonIcon id="biStatus"       className={`icon`} icon={userStatus.icon}  title="My Status"      />                              
                              <ButtonIcon id="biSort"         className={`icon`} icon={userSort.icon}    title="Sort By"        />
                              <ButtonIcon id="biBroadcast"    className={`icon`} icon={faVideo}          title="Broadcast"      />
                              <ButtonIcon id="biFilter"       className={`icon`} icon={userFilter.icon}  title="Filter Users"   />
                              <ButtonIcon id=""               className={`icon`} icon={faTimes}                  title="Close"    onClick={() => { dispatch(closePanelUsers()) } } />
                        </div>
                  </div>
            );
      };

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| EOC
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default ToolbarMenu;