//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| NF :: Interface
//|| Settings Interface
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default interface Settings {
            dockSize                : "S" | "M" | "L";
            dockAlign               : "TOP" | "BOTTOM";
            theme                   : "DARK" | "LIGHT";
            disableUserFonts        : boolean;
            fontSizeRoom            : number;
            fontSizeMine            : string;
            fontColorMine           : number;
            offensiveFilter         : boolean;
            notifyEnterLeave        : boolean;
            showBlockedMessages     : string;
            autoShowMedia           : string;
            soundOnEnter            : string;
            soundOnLeave            : string;
            soundOnMessage          : string;
      }
      
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Setting Definition
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/      
      
      export interface SettingsListItemInt {
            section         : string;
            name            : string;
            type            : string;
            default         : number | string;
            header          : string;
            description     : string;
            example         : string;
      };      