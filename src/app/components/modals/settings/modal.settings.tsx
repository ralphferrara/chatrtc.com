/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Modal
//|| Settings Modal
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import React, { useState, useEffect,useCallback }  from 'react';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { useAppDispatch, useAppSelector }          from '../../../../redux/store';
      import { setModalSettingsClose }                   from '../../../../redux/actions/panel.user.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Custom Components
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import ButtonToggle                                from '../../buttons/toggle/button.toggle';
      import ButtonColor                                 from '../../buttons/color/button.color';
      import SliderStepper                               from '../../slider/stepper/slider.stepper';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { FontAwesomeIcon }             from '@fortawesome/react-fontawesome';
      import { IconDefinition }              from '@fortawesome/fontawesome-svg-core';
      import { faCog, faLock, faAnchor, faKey, faBell, faTimes }                                         from '@fortawesome/free-solid-svg-icons';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| CSS
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import './modal.settings.css';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      const ModalSettings = () => {
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| ClickAction
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const modalSettingsOpen  = useAppSelector((state) => state.panelUser.modalSettingsOpen);
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Dispatch
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const dispatch         = useAppDispatch(); 
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Color Change
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const handleColorChange = (color: string) => {
                  console.log('New color:', color);
            };            
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Return
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            return (
                  <div className="modal overlay" style={ (modalSettingsOpen) ? { display: 'flex' } : { display: 'none' } }>
                        <div className="modal settings">
                              <h1>Settings <i onClick={() => { dispatch(setModalSettingsClose()); }}><FontAwesomeIcon icon={ faTimes } /></i></h1>
                              
                              <div className="areaMain">
                                    <ul className="menuSettings">
                                          <li><i><FontAwesomeIcon icon={ faCog } /></i> General</li>
                                          <li><i><FontAwesomeIcon icon={ faAnchor } /></i> Dock</li>
                                          <li><i><FontAwesomeIcon icon={ faBell } /></i> Notifications</li>
                                    </ul>
                                    <div className="areaSettings">
                                          <h2><i><FontAwesomeIcon icon={ faCog } /></i> General</h2>
                                          <div className="subsection">
                                                <div className="settingGroup">
                                                      <span>Select a theme</span>
                                                      <select><option>Light</option><option>Dark</option></select>
                                                </div>

                                                <div className="settingGroup">
                                                      <span>My Font Color</span>
                                                      <ButtonColor initialColor="#00ff00" onColorChange={handleColorChange} />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>My Font Size</span>
                                                      <SliderStepper steps={[0, 25, 50, 75, 100]} />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Room Font Size</span>
                                                      <SliderStepper steps={[0, 25, 50, 75, 100]} />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Disable Other Users Font Settings</span>
                                                      <ButtonToggle id="disableUsersFonts" />
                                                </div>



                                                <div className="settingGroup">
                                                      <span>Hide Offensive Language</span>
                                                      <ButtonToggle id="offensiveLanguage" />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Auto Show Media</span>
                                                      <ButtonToggle id="offensiveLanguage" />
                                                </div>                                                

                                          </div>

                                          <h2><i><FontAwesomeIcon icon={ faAnchor } /></i> Dock</h2>
                                          <div className="subsection">

                                                <div className="settingGroup">
                                                      <span>Dock Camera Size</span>
                                                      <select><option>Small</option><option>Medium</option><option>Large</option></select>
                                                </div>


                                                <div className="settingGroup">
                                                      <span>Video Camer Dock Placement</span>
                                                      <select><option>Top</option><option>Bottom</option></select>
                                                </div>


                                          </div>

                                          <h2><i><FontAwesomeIcon icon={ faBell } /></i> Notifications</h2>
                                          <div className="subsection">
      
                                                <div className="settingGroup">
                                                      <span>Dont show room messages from people I've blocked</span>
                                                      <ButtonToggle id="disableBlockedMessages" />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Show Message when Users enter or leave</span>
                                                      <ButtonToggle id="disableEnterLeaves" />
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Sound : User Enters the room</span>
                                                      <select><option>Default</option><option>Custom</option></select>
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Sound : User Leaves the room</span>
                                                      <select><option>Default</option><option>Custom</option></select>
                                                </div>

                                                <div className="settingGroup">
                                                      <span>Sound : New Message</span>
                                                      <select><option>Default</option><option>Custom</option></select>
                                                </div>


                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      };
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Export
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            
      export default ModalSettings;