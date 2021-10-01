import { IonContent, IonGrid, IonItem, IonToggle, IonHeader, IonCardContent, IonPage, IonCol, IonRow, IonTitle, IonToolbar, IonListHeader, IonButton, IonLabel, IonCard } from '@ionic/react';


const Review: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    return (
      <IonPage>
        <IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol >
                <IonToolbar>
                  <IonTitle>Review</IonTitle>
                </IonToolbar>
              </IonCol>
              
            </IonRow>
          </IonGrid>
          
        </IonHeader>
        <IonContent>
             
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardContent>
                                <IonButton shape="round" expand="block" color="light">Write a review</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardContent>
                                <IonButton shape="round" expand="block" color="light">Upload a photo</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>    
        </IonContent>
        
      </IonPage>
    );
  };
export default Review;