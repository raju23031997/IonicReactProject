import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterLink, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { personCircle } from "ionicons/icons"
import { useState } from "react"


const SignUp: React.FC = () => {

    const [Name, SetName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [CPassword, setCPassword] = useState("")

    return (
        <>
            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>SignUp</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <form>
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
                                        <IonLabel position="floating">Name</IonLabel>
                                        <IonInput type="text" required name="name" value={Name}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Phone No.</IonLabel>
                                        <IonInput type="text" required name="phone" value={Phone}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Email</IonLabel>
                                        <IonInput type="email" required name="email" value={Email}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Password</IonLabel>
                                        <IonInput type="password" required name="password" value={Password}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Confirm Password</IonLabel>
                                        <IonInput type="password" required name="cpassword" value={CPassword}></IonInput>
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
                                    <IonButton expand="block" type="submit">
                                        SignUp
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <p style={{ fontSize: "medium" }}>
                                        Already have an account? <IonRouterLink routerLink="/Login">Login!</IonRouterLink>
                                    </p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </form>
                </IonContent>
            </IonApp>
        </>
    )
}

export default SignUp