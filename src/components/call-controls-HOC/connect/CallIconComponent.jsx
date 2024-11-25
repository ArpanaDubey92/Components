import { h } from 'preact';
import Icon from './Icon';
//import Connect from '../../../stories/assets/accessibility.svg';
import Disconnect from '../../../stories/assets/discord.svg';

const App = () => {
    const handleToggle = (newIcon) => {
        console.log('Icon toggled to:', newIcon);
    };

    return (
        <div>
            <h1>Icon Component</h1>
            <Icon
              //  icon1={Connect}
                icon2={Disconnect}
                size={48}
                alt="Phone connection icon"
                onToggle={handleToggle}
            />
        </div>
    );
};

export default App;
