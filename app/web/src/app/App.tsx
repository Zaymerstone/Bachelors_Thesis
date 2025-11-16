import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/components/app-router.comp";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000} // closes in 3 seconds
        hideProgressBar={true}
        closeOnClick={true} // close when clicked
        pauseOnHover={true}
        draggable={true} // can drag
        limit={3}
      />
    </>
  );
}

export default App;
