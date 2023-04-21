import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import AnalyticsPage from "./Screens/AnalyticsPage/AnalyticsPage";
import CreateTicketPage from "./Screens/CreateTicketPage/CreateTicketPage";
import ProfileChooserPage from "./Screens/ProfileChooserPage/ProfileChooserPage";
import TicketInfoPage from "./Screens/TicketInfoPage/TicketInfoPage";
import TicketListPage from './Screens/TicketListPage/TicketListPage';
import PurchasePage from "./Screens/PurchasePage/PurchasePage";

/**
 * One Solution App.
 * @returns JSX da aplicação One Solution.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/createTicket" element={<CreateTicketPage />} />
          <Route path="/purchaseInfo" element={<PurchasePage />} />
          <Route path="/ticketInfo" element={<TicketInfoPage />} />
          <Route path="/ticketList" element={<TicketListPage />} />
          <Route path='/' element={<ProfileChooserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
