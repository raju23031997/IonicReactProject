import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonRouterLink, IonTitle, IonToolbar } from "@ionic/react"


const FormulaTemplate: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Formula Template</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonRouterLink routerLink="/PageOne" routerDirection="forward">Mathematics</IonRouterLink>
                        </IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Science</IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Geography</IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>General</IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Medical Science</IonCardTitle>
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    </IonCardHeader>
                    <IonCardContent>
                        Here's a small text description for the card content. Nothing more, nothing less.
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}

export default FormulaTemplate