import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, docInstance, getDBCollection, getFBDocs, setFBDoc }  from '../firebase';
import Loading from '../components/Loading';
import Login from './login';
import { serverTimestamp } from 'firebase/firestore/lite';
//import { Timestamp} from '@firebase/firestore';
import { useEffect }  from "react"


function App({ Component, pageProps }) {

  const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if(user) {

          const userCollectionRef = docInstance(db, "users", "user.uid");
          
          setFBDoc(userCollectionRef,{
              email: user.email,
              photoURL: user.photoURL,
              lastSeen: serverTimestamp()
          }, { merge: false});

        }
      }, {user});

  if(loading) return <Loading />
  if(!user) return <Login />;

  
  return <Component {...pageProps} />;
}

export default App;
