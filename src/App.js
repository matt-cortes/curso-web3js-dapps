import { Route } from "react-router-dom";
import Home from "./views/home";
import Punks from "./views/punks";
import Punk from "./views/punk";
import Wallet from "./views/wallet";
import SendMoney from "./views/wallet/send";
import Order from "./views/wallet/order";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/punks" exact component={Punks} />
      <Route path="/punks/:tokenId" exact component={Punk} />
      <Route path="/wallet" exact component={Wallet} />
      <Route path="/wallet/send" exact component={SendMoney} />
      <Route path="/wallet/order" exact component={Order} />
    </MainLayout>
  );
}

export default App;
