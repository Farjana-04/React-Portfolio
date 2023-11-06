import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//creates a new root by selecting the DOM element with the ID "root." It returns a Root object that we can use to render the app.
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
