import { IonContent, IonToggle, IonGrid, IonSearchbar, IonItem, IonCardContent, IonHeader, IonPage, IonCol, IonRow, IonTitle, IonToolbar, IonListHeader, IonButton, IonLabel, IonCard, IonText } from '@ionic/react';
import React, { useState } from 'react';
import './Search.css';
const Search: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    const [searchText, setSearchText] = useState('');
    
    return (
      <IonPage>
        <IonHeader color="dark">
          <IonGrid>
            <IonRow>
              <IonCol >
                <IonToolbar>
                  <IonTitle>Search</IonTitle>
                </IonToolbar>
              </IonCol>
             
            </IonRow>
          </IonGrid>
          
        </IonHeader>
        <IonContent>
            
            <IonSearchbar color="light" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <IonGrid className="ion-grid-padding-lg">
               
                    <IonCard className="nearby">
                        <IonCardContent className="ion-text-center">
                                <h1>See what's good</h1>
                                <h1>nearby.</h1>
                                <IonButton>Turn on location setting</IonButton>
                        </IonCardContent>
                    </IonCard>

               
            </IonGrid>

            <h3>Destinations travelers love</h3>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard className="newyork">
                            <IonCardContent>
                                    <h2>New York</h2>
                                    <h2>City</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard className="singapore">
                            <IonCardContent>
                                    <h2>Singapore</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard className="rome">
                            <IonCardContent>
                                    <h2>Rome</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard className="paris">
                            <IonCardContent>
                                    <h2>Paris</h2>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
            
        </IonContent>
        
      </IonPage>
    );
  };
export default Search;