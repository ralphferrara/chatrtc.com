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
      //|| Redux User Filter
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { USER_FILTER_ALL, USER_FILTER_MODS, USER_FILTER_FRIENDS, USER_FILTER_BLOCKED, USER_FILTER_VIEWERS, USER_FILTER_BROADCASTING }        from '../../../../redux/types/users.types';
      import { USER_SORT_ALPHA, USER_SORT_DISTANCE, USER_SORT_GENDER, USER_SORT_BROADCASTING, USER_SORT_LEVEL }                                    from '../../../../redux/types/users.types';
      import { setUserFilterAll, setUserFilterMods, setUserFilterBlocked, setUserFilterFriends, setUserFilterViewers, setUserFilterBroadcasting }  from '../../../../redux/actions/users.actions';
      import { setUserSortAlpha, setUserSortBroadcasting, setUserSortDistance, setUserSortGender, setUserSortLevel }                               from '../../../../redux/actions/users.actions';
      import { setUserSearchTerm }                                                                                                                 from '../../../../redux/actions/users.actions';
      import { setBroadcasting, setCamera, setMicrophone, setStatus }                                                                              from '../../../../redux/actions/me.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Menu
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { openModalSettings }                          from '../../../../redux/actions/modal.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { useAppDispatch, useAppSelector }             from '../../../../redux/store';
      import { clearActiveMenu }                            from '../../../../redux/actions/menu.active.actions';      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { faArrowsLeftRight, faTimes }                                         from '@fortawesome/free-solid-svg-icons';
      import { faTv, faSortAlphaUp, faVenusMars, faIdBadge, faMap}                        from '@fortawesome/free-solid-svg-icons';
      import { faBroadcastTower, faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';      
      import { faEye,   faUsers, faUserShield, faUserFriends, faPoo }                     from '@fortawesome/free-solid-svg-icons';
      import { faMoon,  faHourglass, faCircle }                                           from '@fortawesome/free-solid-svg-icons';      
      import { faBars,  faCog, faQuestionCircle, faClipboardList, faSignOutAlt }          from '@fortawesome/free-solid-svg-icons';
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
            const panelUserSort    = useAppSelector((state) => state.users.sortBy);            
            const panelUserFilter  = useAppSelector((state) => state.users.filterBy);            
            const isBroadcasting   = useAppSelector((state) => state.me.isBroadcasting);
            const isCameraOn       = useAppSelector((state) => state.me.cameraOn);
            const isMicrophoneOn   = useAppSelector((state) => state.me.microphoneOn);
            const meStatus         = useAppSelector((state) => state.me.status);
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Dispatch
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const dispatch         = useAppDispatch(); 
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Status Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miStatus          : MenuIconItem[] = [
                  { title: 'Active',      icon: faCircle,    value: 'active',   event: () => { dispatch( setStatus("active") ); }  },
                  { title: 'Away',        icon: faMoon,      value: 'away',     event: () => { dispatch( setStatus("away") ); }   }
            ];    
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Sort By Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miSort            : MenuIconItem[] = [
                  { title: 'Alphabetical',      icon: faSortAlphaUp,     value: 'name',    event: () => { dispatch( setUserSortAlpha()        ); }},
                  { title: 'Gender',            icon: faVenusMars,       value: 'status',  event: () => { dispatch( setUserSortGender()       ); }},
                  { title: 'User Level',        icon: faIdBadge,         value: 'level',   event: () => { dispatch( setUserSortLevel()        ); }},
                  { title: 'Broadcasting',      icon: faTv,              value: 'video',   event: () => { dispatch( setUserSortBroadcasting() ); }},
                  { title: 'Distance',          icon: faMap,             value: 'level',   event: () => { dispatch( setUserSortDistance()     ); }}
            ];                
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Broadcasting
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miBroadcast       : MenuIconItem[] = []
            if (isBroadcasting) { 
                  miBroadcast.push({ title: 'Broadcast',         icon: faTimes,       value: 'stopBroadcast',    event: () => { dispatch( setBroadcasting(false) ); } });
                  if (isCameraOn)         miBroadcast.push({ title: 'Camera',         icon: faVideo,             value: 'camOn',   event: () => { dispatch(setCamera(false)); }  });
                  if (!isCameraOn)        miBroadcast.push({ title: 'Camera',         icon: faVideoSlash,        value: 'camOff',  event: () => { dispatch(setCamera(true)); }, className: "active"  });
                  if (isMicrophoneOn)     miBroadcast.push({ title: 'Microphone',     icon: faMicrophone,        value: 'micOn',   event: () => { dispatch(setMicrophone(false));  }  });
                  if (!isMicrophoneOn)    miBroadcast.push({ title: 'Microphone',     icon: faMicrophoneSlash,   value: 'micOff',  event: () => { dispatch(setMicrophone(true)); }, className: "active"  });
            } else {
                  miBroadcast.push({ title: 'Broadcast',         icon: faBroadcastTower,  value: 'name',    event: () => { dispatch( setBroadcasting(true) ); } });
            };
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Filter By Items
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const miFilter           : MenuIconItem[] = [
                  { title: 'All',               icon: faUsers,           value: 'name',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterAll()); }  },
                  { title: 'Mods',              icon: faUserShield,      value: 'name',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterMods()); }  },
                  { title: 'Friends',           icon: faUserFriends,     value: 'name',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterFriends()); }  },
                  { title: 'Blocked',           icon: faPoo,             value: 'name',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterBlocked()); }  },
                  { title: 'Viewers',           icon: faEye,             value: 'date',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterViewers()); }  },
                  { title: 'Broadcasting',      icon: faTv,              value: 'date',    event: () => {  dispatch(setUserSearchTerm("")); dispatch(setUserFilterBroadcasting()); }  },
            ];      
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
            //|| User Status Class
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userStatus = { 'icon' : faMoon, 'class' : 'inactive' };
            switch(meStatus) {
                  case "away"         : userStatus = { 'icon' : faMoon,         'class'     : 'away' };     break;
                  case "idle"         : userStatus = { 'icon' : faHourglass,    'class'     : 'inactive' };   break;
                  case "active"       : userStatus = { 'icon' : faCircle,       'class'     : 'active' };       break;
            }                    
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| User Sort Class
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userSort = { 'icon' : faSortAlphaUp, 'class' : 'inactive' };
            switch(panelUserSort) {
                  case USER_SORT_ALPHA          : userSort = { 'icon' : faSortAlphaUp,    'class'     : 'alpha' };     break;
                  case USER_SORT_GENDER         : userSort = { 'icon' : faVenusMars,      'class'     : 'gender' };    break;
                  case USER_SORT_LEVEL          : userSort = { 'icon' : faIdBadge,        'class'     : 'level' };     break;
                  case USER_SORT_BROADCASTING   : userSort = { 'icon' : faTv,             'class'     : 'broadcast' }; break;
                  case USER_SORT_DISTANCE       : userSort = { 'icon' : faMap,            'class'     : 'distance' };  break;
            }            
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Filter By 
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            let userFilter = { 'icon' : faUsers, 'class' : 'all' };            
            switch(panelUserFilter) {
                  case USER_FILTER_ALL          : userFilter = { 'icon' : faUsers,        'class'     : 'all' };              break;
                  case USER_FILTER_MODS         : userFilter = { 'icon' : faUserShield,   'class'     : 'mods' };             break;
                  case USER_FILTER_FRIENDS      : userFilter = { 'icon' : faUserFriends,  'class'     : 'friends' };          break;
                  case USER_FILTER_BLOCKED      : userFilter = { 'icon' : faPoo,          'class'     : 'blocked' };          break;
                  case USER_FILTER_VIEWERS      : userFilter = { 'icon' : faEye,          'class'     : 'viewers' };          break;
                  case USER_FILTER_BROADCASTING : userFilter = { 'icon' : faTv,           'class'     : 'broadcasting' };     break;
            }   
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Close
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const closeUserPanel = () => {
                  dispatch(clearActiveMenu());
                  dispatch(closePanelUsers());
            }
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Return
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            return(
                  <div className="toolbarMenuWrapper">
                        <MenuIcon target="biStatus"     items={ miStatus }     callback={() => {} } />
                        <MenuIcon target="biSort"       items={ miSort }       callback={() => {} } />                        
                        <MenuIcon target="biBroadcast"  items={ miBroadcast }  callback={() => {} } />                        
                        <MenuIcon target="biFilter"     items={ miFilter }     callback={() => {} } />                        
                        <MenuIcon target="biMenu"       items={ miMenu }       callback={() => {} } />                        
                        <div className="toolbarMenu">                              
                              <ButtonIcon id=""               className={`icon toggle` } icon={faArrowsLeftRight} title="Open"    onClick={() => { dispatch(openPanellUsers()); } } />                  
                              <ButtonIcon id="biMenu"         className={`icon`} icon={faBars}           title="Menu"           />
                              <ButtonIcon id="biStatus"       className={`icon`} icon={userStatus.icon}  title="My Status"      />                              
                              <ButtonIcon id="biSort"         className={`icon`} icon={userSort.icon}    title="Sort By"        />
                              <ButtonIcon id="biBroadcast"    className={`icon { ${isBroadcasting ? "active" : ""}`} icon={(isBroadcasting ? faVideo : faVideoSlash)}     title="Broadcast"      />
                              <ButtonIcon id="biFilter"       className={`icon`} icon={userFilter.icon}  title="Filter Users"   />
                              <ButtonIcon id="biCloseUsers"   className={`icon`} icon={faTimes}          title="Close"    onClick={() => { closeUserPanel(); } } />
                        </div>
                  </div>
            );
      };

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| EOC
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default ToolbarMenu;