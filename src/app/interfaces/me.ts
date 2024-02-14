//*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| NF :: Interface
//|| Me Interface
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default interface Me {
            token             : string;
            friends           : number[];            
            blocked           : number[];        
            viewers           : number[];    
            age               : number;
            age2?             : number;
            city              : string;
            certified         : boolean;
            distance          : number;
            dmsActive         : boolean;
            gender            : string;
            isBroadcasting    : boolean;
            cameraOn          : boolean;
            microphoneOn      : boolean;
            latitude          : number;
            level             : number;
            longitude         : number;
            profile           : string;
            profileLink       : string;
            state             : string;
            status            : 'active' | 'idle' | 'away';
            userId            : number;
            username          : string;
      }
      