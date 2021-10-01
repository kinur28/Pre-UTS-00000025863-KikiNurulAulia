import { IonContent, IonGrid, IonCardContent, IonAvatar, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent, IonIcon, IonHeader, IonPage, IonImg, IonCol, IonRow, IonTitle, IonToolbar, IonListHeader, IonButton, IonLabel, IonCard, IonSegment, IonSegmentButton, IonItem, IonToggle } from '@ionic/react';
import { personCircleOutline, bedOutline, ticketOutline, restaurantOutline, chatbubbleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
  return (
    <IonPage>
      <IonHeader className="explorer">
        <IonGrid>
          <IonRow>
            <IonCol size="9" className="ion-align-items-start">
              <IonToolbar color="explorer">
                <IonTitle color="light">Explore</IonTitle>
              </IonToolbar>
            </IonCol>
            <IonCol size="3" className="ion-align-self-end">
              
                <IonAvatar>
                  <img src="https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png" />
                </IonAvatar>  
            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonHeader>
      <IonContent>
        <IonItem color="explorer" className="explorer">
          <IonLabel color="light">
            change mode color
          </IonLabel>
          <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} ></IonToggle>
        </IonItem>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent>
            
                <IonGrid className="explorer" fixed>
                    
                        <IonSegment scrollable>
                          <IonSegmentButton value="hotels">
                            <IonButton shape="round" expand="block" color="light"><IonIcon icon={bedOutline} />Hotels</IonButton>
                          </IonSegmentButton>
                          <IonSegmentButton value="thingstodo">
                            <IonButton shape="round" expand="block" color="light"><IonIcon icon={ticketOutline} />Things to do</IonButton>
                          </IonSegmentButton>
                          <IonSegmentButton value="restaurants">
                            <IonButton shape="round" color="light"><IonIcon icon={restaurantOutline} />Restaurants</IonButton>
                          </IonSegmentButton>
                          <IonSegmentButton value="forums">
                            <IonButton shape="round" color="light"><IonIcon icon={chatbubbleOutline} />Forums</IonButton> 
                          </IonSegmentButton>
                        </IonSegment>
                      
                   
                </IonGrid>
                <IonThumbnail>
                      <img src="https://wallpaperaccess.com/full/556861.jpg" />
                </IonThumbnail>
                
                <IonRow>
                  <IonThumbnail className="img1">
                      
                      <h3>Goodbye to</h3>
                      <h3>crushing heat</h3>
                      <h3>and crushing</h3>
                      <h3>crowds</h3>
                      <h5>why fall is the best time to isit our</h5>
                      <h5>national parks</h5>

                      <IonButton shape="round" color="light">Get the intel</IonButton> 
                          
                  </IonThumbnail>
                </IonRow>
                <IonRow>
                  <h1 no-padding>Small batch stays</h1>
                  <h5>Cooll cities, cooler boutique hotels</h5>
                  <IonSegment scrollable>
  
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>Austin</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment">
                              <IonLabel>Nashvile</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>New York City</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>Washington DC</IonLabel>
                          </IonSegmentButton>
                          
                  </IonSegment>
                </IonRow>
                <IonRow>
                  <h1 no-padding>Plan your next escape</h1>
                  <h5>Family-friendly spots to explore</h5>
                  <IonSegment scrollable>
  
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>Fredericksburg</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment">
                              <IonLabel>Palisade</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>Middleburg</IonLabel>
                          </IonSegmentButton>
                          <IonSegmentButton className="slidesegment" >
                              <IonLabel>Traverse City</IonLabel>
                          </IonSegmentButton>
                          
                  </IonSegment>
                </IonRow>
            

          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      
        
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
