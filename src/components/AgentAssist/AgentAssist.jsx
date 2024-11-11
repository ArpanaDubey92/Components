// src/AgentAssist.jsx
/** @jsx h */
import { h } from 'preact';
import './AgentAssist.css';

const AgentAssist = ({ status = 'Not Ready', phoneNumber = '+1 (330) 440-2829', timer = '00:24 min' }) => {
    return (
        <div className="agent-assist">
            <div className="status">
                <button className="status-button">{status}</button>
            </div>
            <div className="controls">
                <span>{phoneNumber}</span>
                <span className="timer">{timer}</span>
            </div>
        </div>
    );
};

export default AgentAssist;
