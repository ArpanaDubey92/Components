import { h } from 'preact';
import './ImageComponent.css';

/**
 * ImageComponent
 * Displays an image with specified size and alt text.
 *
 * @param {object} props
 * @param {string} props.src - The image source URL.
 * @param {string} props.alt - The alt text for the image.
 * @param {number} props.size - The size of the image.
 */
const ImageComponent = ({ src="example.jpg", alt="Test Image", size = 100 }) => {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    className="image-component"
                    src={src}
                    alt={alt} // Ensure alt is properly passed
                    width={size}
                    height={size}
                />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
                export default ImageComponent;
