/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
//|| ChatRTC :: Component
//|| TSX :: Toolbar Chat
//||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import React, { useEffect, useRef, useState }         from 'react';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Import Main
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
      import { FontAwesomeIcon }                            from '@fortawesome/react-fontawesome';
      import { faTimes, faCog }                             from '@fortawesome/free-solid-svg-icons';
      import { faVideoCamera,faMicrophone }                 from  '@fortawesome/free-solid-svg-icons';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| Redux
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/      
      import { useAppDispatch }                             from '../../../../redux/store';
      import { setBroadcasting }                            from '../../../../redux/actions/me.actions';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| CSS
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/      
      import './video.broadcasting.css';
      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| App
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      const VideoBroadcasting: React.FC = () => {
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| States
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
		const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>( [] );
		const [selectedCamera, setSelectedCamera] = useState("");
		const [selectedMicrophone, setSelectedMicrophone] = useState("");
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Get the Video
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		const videoRef = useRef<HTMLVideoElement>(null);
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Selector for Camera/Media
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		useEffect(() => {
			navigator.mediaDevices.enumerateDevices().then((devices) => {
				const videoDevices = devices.filter( (device) => device.kind === "videoinput" );
				const audioDevices = devices.filter( (device) => device.kind === "audioinput" );
				setCameras(videoDevices);
				setMicrophones(audioDevices);
				if (videoDevices.length && !selectedCamera)     setSelectedCamera(videoDevices[0].deviceId);
				if (audioDevices.length && !selectedMicrophone) setSelectedMicrophone(audioDevices[0].deviceId);
			});
		}, [selectedCamera, selectedMicrophone]); // Depend on selected devices to re-fetch when changed
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Get Media
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		useEffect(() => {
			// Function to get and set video stream based on selected devices
			const getVideo = async () => {
				try {
					const constraints = {
						video: {
							deviceId: selectedCamera
								? {exact: selectedCamera}
								: undefined,
						},
						audio: {
							deviceId: selectedMicrophone
								? {exact: selectedMicrophone}
								: undefined,
						},
					};
					const stream =
						await navigator.mediaDevices.getUserMedia(
							constraints
						);
					if (videoRef.current)
						videoRef.current.srcObject = stream;
				} catch (err) {
					console.error(
						"Error accessing the webcam or microphone",
						err
					);
				}
			};

			if (selectedCamera || selectedMicrophone) {
				getVideo();
			}
		}, [selectedCamera, selectedMicrophone]); // Re-fetch video when selected devices change
            /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Dispatch
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
            const dispatch = useAppDispatch();            
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Handlers
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		const handleCameraChange            = ( event: React.ChangeEvent<HTMLSelectElement> ) => { setSelectedCamera(event.target.value); };
		const handleMicrophoneChange        = ( event: React.ChangeEvent<HTMLSelectElement> ) => { setSelectedMicrophone(event.target.value); };
		const closeBroadcasting             = () => { dispatch( setBroadcasting(false) ); };
		/*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
            //|| Component
            //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/
		return (
			<div className="videoBroadcasting">
				<div className="overlay">
					<button className="close" onClick={() => closeBroadcasting()}><FontAwesomeIcon icon={faTimes} /></button>
					<h2><FontAwesomeIcon icon={faCog} /></h2>
                              <div>
                                    <span className="icon"><FontAwesomeIcon icon={faVideoCamera} /></span>
                                    <select
                                          onChange={handleCameraChange}
                                          value={selectedCamera}>
                                          {cameras.map((camera) => (
                                                <option
                                                      key={camera.deviceId}
                                                      value={camera.deviceId}>
                                                      {camera.label ||
                                                            `Camera ${camera.deviceId}`}
                                                </option>
                                          ))}
                                    </select>
                              </div>
                              <div>
                                    <span className="icon"><FontAwesomeIcon icon={faMicrophone} /></span>
                                    <select
                                          onChange={handleMicrophoneChange}
                                          value={selectedMicrophone}>
                                          {microphones.map((microphone) => (
                                                <option
                                                      key={microphone.deviceId}
                                                      value={microphone.deviceId}>
                                                      {microphone.label ||
                                                            `Microphone ${microphone.deviceId}`}
                                                </option>
                                          ))}
                                    </select>
                              </div>
				</div>
				<video ref={videoRef} autoPlay playsInline></video> 
			</div>
		);
	};

      /*||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||
      //|| EOC
      //||=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-||*/

      export default VideoBroadcasting;