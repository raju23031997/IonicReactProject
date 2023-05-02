import { Redirect, Route } from 'react-router-dom';
import { InputChangeEventDetail, IonPage, IonApp, IonButton, IonButtons, IonMenuButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenu, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, refreshOutline } from 'ionicons/icons'

import React, { useEffect, useState } from 'react';

// type InputsType = {
//   height:string,
//   weight:string
// }

const PageOne: React.FC = () => {

    const [inputHeight, setInputHeight] = useState<string>("")
    const [inputWeight, setInputWeight] = useState<string>("")
    const [resultVal, setResultVal] = useState<number>()
    // const [inputVal , setInputVal] = useState<InputsType>({
    //   height:"",
    //   weight:""
    // })

    // const handleChange = (e:CustomEvent<InputChangeEventDetail>) =>{
    //     setInputHeight(e.detail.value)
    //     setInputWeight(e.detail.value)
    // }

    const handleCalculate = () => {
        let result = +inputWeight / (+inputHeight * +inputHeight)
        setResultVal(result)
        console.log(result)
    }

    return (
        <>
                <IonMenu contentId='main-content'>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle>Formula List</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">This is the menu content.</IonContent>
                </IonMenu>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonTitle>Mathematics</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position='floating'>Your Height</IonLabel>
                                        <IonInput value={inputHeight} onIonChange={(e: CustomEvent<InputChangeEventDetail>) => {
                                            setInputHeight(e.detail.value!)
                                        }} ></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel position='floating'>Your Weight</IonLabel>
                                        <IonInput value={inputWeight} onIonChange={(e: CustomEvent<InputChangeEventDetail>) => {
                                            setInputWeight(e.detail.value!)
                                        }} ></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow className='ion-margin'>
                                <IonCol className='ion-text-left'>
                                    <IonButton onClick={handleCalculate}>
                                        <IonIcon icon={calculatorOutline}></IonIcon>
                                        Calculate
                                    </IonButton>
                                </IonCol>
                                <IonCol className='ion-text-right'>
                                    <IonButton onClick={() => {
                                        setInputHeight("")
                                        setInputWeight("")
                                        console.log("reset click")
                                    }}>
                                        <IonIcon icon={refreshOutline} ></IonIcon>
                                        Reset
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            {resultVal && <IonRow>
                                <IonCol>
                                    <span>{resultVal}</span>
                                </IonCol>
                            </IonRow>}
                        </IonGrid>

                    </IonContent>
                </IonPage>
                {/* <IonContent className='ion-padding'>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position='floating'>Your Height</IonLabel>
                    <IonInput type='number' onIonChange={(e: CustomEvent<InputChangeEventDetail>) => {
                      setInputHeight(e.detail?.value ?? "")
                    }} ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position='floating'>Your Weight</IonLabel>
                    <IonInput type='number' onIonChange={(e: CustomEvent<InputChangeEventDetail>) => {
                      setInputWeight(e.detail?.value ?? "")
                    }} ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow className='ion-margin'>
                <IonCol className='ion-text-left'>
                  <IonButton onClick={handleCalculate}>
                    <IonIcon icon={calculatorOutline}></IonIcon>
                    Calculate
                  </IonButton>
                </IonCol>
                <IonCol className='ion-text-right'>
                  <IonButton onClick={() => {
                    setInputHeight("")
                    setInputWeight("")
                  }}>
                    <IonIcon icon={refreshOutline} ></IonIcon>
                    Reset
                  </IonButton>
                </IonCol>
              </IonRow>
              {resultVal && <IonRow>
                <IonCol>
                  <span>{resultVal}</span>
                </IonCol>
              </IonRow>}
            </IonGrid>
          </IonContent> */}
        </>
    )
}

export default PageOne