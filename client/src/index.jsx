import { Provider } from "./Components/ui/provider"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import '../styled-system/css/index.mjs'
import { UserProvider } from "./Components/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </BrowserRouter>,
)
