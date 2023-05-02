import { Redirect, Route } from 'react-router-dom';
import { InputChangeEventDetail, IonPage, IonApp, IonButton, IonButtons, IonMenuButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenu, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, refreshOutline } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useEffect, useState } from 'react';
import PageOne from './pages/PageOne';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FormulaTemplate from './pages/FormulaTemplate';

setupIonicReact();

const App: React.FC = () => {
  return (
    <>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Route exact path="/" render={()=> <Redirect to="/Home" />} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/ftemplate" component={FormulaTemplate} />
        <Route exact path="/PageOne" component={PageOne} />
      </IonRouterOutlet>
    </IonReactRouter>
      {/* <Home /> */}
      {/* <PageOne /> */}
    </>
  )
};

export default App;
