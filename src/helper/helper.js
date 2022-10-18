import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toastify = (msj) => {
    toast(msj, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export default Toastify