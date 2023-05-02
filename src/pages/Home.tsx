import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonNavLink, IonPage, IonRouterLink, IonTitle, IonToolbar } from "@ionic/react"
import { MouseEvent } from "react";
import { useHistory } from "react-router";


const Home: React.FC = () => {

    return (
        <>
            <IonApp>
                <IonContent fullscreen={true} className="ion-padding">
                    <IonCard >
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Here's a small text description for the card content. Nothing more, nothing less.
                        </IonCardContent>
                        
                        <IonButton routerLink="/Login">Login</IonButton>
                    </IonCard>
                    {/* <IonRouterLink routerLink="/Login" routerDirection="forward">Login</IonRouterLink> */}
                </IonContent>
            </IonApp>
        </>
    )
}

export default Home