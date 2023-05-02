import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterLink, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { personCircle } from "ionicons/icons"
import { useState } from "react"


const Login: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        //validate inputs code not shown
        const loginData = {
            email: email,
            password: password,
        };
        // const api = axios.create({
        //   baseURL: `https://reqres.in/api`,
        // });
        //   .catch((error) => {
        //     setMessage("Auth failure! Please create an account");
        //     setIserror(true);
        //   });
    };

    return (
        <>
            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <IonIcon
                                    style={{ fontSize: "75px", color: "#0040ff" }}
                                    icon={personCircle}
                                />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating"> Email</IonLabel>
                                    <IonInput
                                        type="email"
                                        value={email}
                                        onIonChange={(e) => setEmail(e.detail.value!)}
                                    >
                                    </IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput
                                        type="password"
                                        value={password}
                                        onIonChange={(e) => setPassword(e.detail.value!)}
                                    >
                                    </IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ fontSize: "small" }}>
                                    By clicking LOGIN you agree to our <a href="#">Policy</a>
                                </p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" onClick={handleLogin}>
                                    Login
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ fontSize: "medium" }}>
                                    Don't have an account? <IonRouterLink routerLink="/SignUp">Sign up!</IonRouterLink>
                                </p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonApp>
        </>
    )
}

export default Login