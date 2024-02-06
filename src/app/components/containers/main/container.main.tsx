//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| NF :: Application File
//|| Container - Public
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import React                                          from 'react';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { useAppSelector }                             from '../../../../redux/store';
      import { useAppDispatch }                             from '../../../../redux/store';
      import { closeModalSettings, closeModalUpload }       from '../../../../redux/actions/modal.actions';
      import { clearActiveMenu }                            from '../../../../redux/actions/menu.icon.actions';      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Interface
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import User                                           from '../../../interfaces/user';
      import Message                                        from '../../../interfaces/message';
      import Notice                                         from '../../../interfaces/notice';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Components - Custom
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import Modal                                          from '../../modals/modal';
      import ModalSettings                                  from '../../modals/settings/modal.settings';
      import ModalUpload                                    from '../../modals/upload/modal.upload';
      import ToolbarChat                                    from '../../toolbars/chat/toolbar.chat';
      import ToolbarMenu                                    from '../../toolbars/menu/toolbar.menu';
      import ToolbarSearch                                  from '../../toolbars/search/toolbar.search';
      import UserList                                       from '../../users/list/user.list';
      import ChatList                                       from '../../chat/list/chat.list';
      import ChatListItem                                   from '../../chat/listitem/chat.listitem';
      import ChatNotice                                     from '../../chat/notice/chat.notice';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| CSS
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import './container.main.css';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Test Data
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const users: User[] = [
            {
                profile: 'https://picsum.photos/50/50',
                certified : false,
                userId: 'user1',
                username: 'JohnDoe_IsaUsernameThatIsLong',
                gender: 'M',
                age : "51",
                level: 5,
                city: 'New York',
                state: 'NY',
                latitude: 40.7128,
                longitude: -74.0060,
                distance: 10,
                dmsActive: true,
                status: 'active',
                profileLink: 'https://example.com/user/johndoe',
                isBroadcasting: true,
            },
            {
                profile: 'https://picsum.photos/52/52',
                certified : false,
                userId: 'user2',
                username: 'JaneSmith',
                gender: 'MF',
                age : "51/25",
                level: 4,
                city: 'Los Angeles',
                state: 'CA',
                latitude: 34.0522,
                longitude: -118.2437,
                distance: 25,
                dmsActive: false,
                status: 'idle',
                profileLink: 'https://example.com/user/janesmith',
                isBroadcasting: false,
            },
            {
                profile: 'https://picsum.photos/51/51',
                certified : true,
                userId: 'user3',
                username: 'MikeBrown',
                gender: 'F',
                age : "44",
                level: 3,
                city: 'Chicago',
                state: 'IL',
                latitude: 41.8781,
                longitude: -87.6298,
                distance: 5,
                dmsActive: true,
                status: 'away',
                profileLink: 'https://example.com/user/mikebrown',
                isBroadcasting: false,
            }
            // ... add more users as needed
        ];    
      const myMessages: Message[] = [
            {
                  id                : 1,
                  username          : "testUser",
                  profile           : "https://picsum.photos/51/51",
                  message           : "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor. ",
                  reactions         : [],
                  timestamp         : 1234566
            },
            {
                  id                : 2,
                  username          : "testApp",
                  profile           : "https://picsum.photos/50/50",
                  message           : "This is a test message",
                  reactions         : [],
                  timestamp         : 1234566
            }            
      ];
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| App
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const ContainerPublic = () => {
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| U 
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const panelUserIsOpen      = useAppSelector((state) => state.panelUser.isOpen);
            const isOpenModalUpload    = useAppSelector((state) => state.modals.modalUploadOpen);
            const isOpenModalSettings  = useAppSelector((state) => state.modals.modalSettingsOpen);
            const dispatch             = useAppDispatch();
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Close Settings
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const closeModal = (modalName : string) => {
                  switch(modalName) { 
                        case 'settings': dispatch(closeModalSettings()); break;
                        case 'upload'  : dispatch(closeModalUpload()); break;
                  }
            };
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Return
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            return(
                  <main className={`${(panelUserIsOpen) ? 'open' : 'closed'}`}>
                        <Modal header="Settings" onClose={() => {closeModal("settings");} } isOpen={ isOpenModalSettings } className="settings"><ModalSettings /></Modal>
                        <Modal header="Upload" onClose={() => {closeModal("upload");} } isOpen={ isOpenModalUpload  } className="upload"><ModalUpload /></Modal>                        
                        <div className="main" onClick={ () => { dispatch(clearActiveMenu()); } }>
                              <div className="chatOverlay">
                                    <ChatList>
                                          <ChatNotice notice={{ message: "Welcome to the chat room"}} />
                                          <ChatListItem message={ myMessages[0] }/>
                                          <ChatListItem message={ myMessages[1] }/>
                                    </ChatList>
                              </div>
                              <ToolbarChat />
                        </div>
                        <div className="users">
                              <div className="usersOverlay">
                                    <ToolbarSearch />
                                    <UserList users={users} />
                                    <ToolbarMenu />
                              </div>
                        </div>
                  </main>                  
            );
      };

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| EOC
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default ContainerPublic;