import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter, Route , Switch} from "react-router-dom";
import Social from "./pages/Social";
import Page404 from "./pages/Page404";
import Club from "./pages/club/Club";

function App() {
  return (
   <BrowserRouter>
      <Route path={"/"} render={()=>{
        return <Layout>
          <Switch>
              <Route path={"/"} component={Home} exact/>
              <Route path={"/social"} component={Social} exact/>
              <Route path={"/club"} component={Club} exact/>
              <Route component={Page404}/>
          </Switch>
        </Layout>
      }}
      />
   </BrowserRouter>
  );
}

export default App;
