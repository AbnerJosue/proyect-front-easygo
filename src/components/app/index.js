import {
    BrowserRouter,
    Routes,
    Route,
    
} from "react-router-dom";
import Form from "../form";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "../../store";
import { Provider } from "react-redux";
import Init from "../Init";
import Reports from "../reports"
export const { store, persistor } = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes>
                        <Route path="/" element={<Init />}></Route>
                        <Route path="/formulario-solicitud" element={<Form />} />
                        <Route path="/reportes" element={<Reports />} />
                    </Routes>
                </PersistGate>
            </BrowserRouter>
        </Provider>

    )
}

export default App; 