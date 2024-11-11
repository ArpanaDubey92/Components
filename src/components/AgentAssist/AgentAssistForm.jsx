// src/AgentAssistForm.jsx
/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import AgentAssist from './AgentAssist';

const AgentAssistForm = () => {
    const [status, setStatus] = useState('Not Ready');
    const [phoneNumber, setPhoneNumber] = useState('+1 (330) 440-2829');
    const [timer, setTimer] = useState('00:24 min');

    const handleStatusChange = (e) => setStatus(e.target.value);
    const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
    const handleTimerChange = (e) => setTimer(e.target.value);

    return (
        <div>
            <form>
                <label>
                    Status:
                    <input type="text" value={status} onChange={handleStatusChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={handlePhoneChange} />
                </label>
                <label>
                    Timer:
                    <input type="text" value={timer} onChange={handleTimerChange} />
                </label>
            </form>
            <AgentAssist status={status} phoneNumber={phoneNumber} timer={timer} />
        </div>
    );
};

export default AgentAssistForm;
