import { IonContent, IonToggle, IonGrid, IonHeader, IonPage, IonSegment, IonSegmentButton, IonCol, IonRow, IonTitle, IonToolbar, IonListHeader, IonButton, IonLabel, IonCard, IonList, IonItem, IonThumbnail } from '@ionic/react';



const Plan: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    return (
      <IonPage>
        <IonHeader>
          <IonGrid>
            <IonRow>
              <IonCol >
                <IonToolbar>
                  <IonTitle>Plan</IonTitle>
                </IonToolbar>
              </IonCol>
              
            </IonRow>
          </IonGrid>
          
        </IonHeader>
        <IonContent>
        
          <IonRow>
              <IonSegment >
                        <IonSegmentButton  color="light" value="trips">
                            <IonLabel >Trips</IonLabel>
                            
                        </IonSegmentButton>
                        <IonSegmentButton  color="light" value="saves">
                          <IonLabel  >Saves</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton   color="light" value="bookings">
                            <IonLabel>Bookings</IonLabel>
                        </IonSegmentButton>
                          
                </IonSegment>
          </IonRow>
          <IonList>
              <IonItem>
                  <IonThumbnail>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Eo_circle_green_white_heart.svg/2048px-Eo_circle_green_white_heart.svg.png" />
                  </IonThumbnail>
                  <IonLabel> Save places you'd like to visit</IonLabel>
              </IonItem>
              <IonItem>
                  <IonThumbnail>
                      <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/176-512.png" />
                  </IonThumbnail>
                  <IonLabel> See your saes on a map</IonLabel>
              </IonItem>
              <IonItem>
                  <IonThumbnail>
                      <img src="https://www.pngrepo.com/png/256706/512/copy-document.png" />
                  </IonThumbnail>
                  <IonLabel> Keep track of notes, links, and more</IonLabel>
              </IonItem>
              <IonItem>
                  <IonThumbnail>
                      <img src="https://cdn1.iconfinder.com/data/icons/ui-5/502/user-512.png" />
                  </IonThumbnail>
                  <IonLabel> Share and collaborate on your plans</IonLabel>
              </IonItem>
          </IonList>

          <h5>Trip name</h5>
                
                


            
        </IonContent>
        
      </IonPage>
    );
  };
export default Plan;