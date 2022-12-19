import { Avatar, IconButton, Button } from "@mui/material";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from "email-validator";
import { app, auth, db, docInstance, getDBCollection, getFBDocs, setFBDoc, addNewDoc }  from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, getFirestore } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';



function Sidebar() {

    const [user] = useAuthState(auth);

     const userCollectionList = getDBCollection(db, "chats");
     const userChatRef = query(userCollectionList, where("users","array-contains", user.email));
     //const [chatSnapshot, loadingMessages, error] = useCollectionDatas(userChatRef);
     //alert(error);
    // const [chatSnapshot, loadingMessages, error] = useCollectionData(query(
    //     getDBCollection(db, "chats"),
    //     where("users", "array-contains", user.email)));
    const [value, loading, error] = useCollection(
        //collection(getFirestore(app), "chats"),
        userChatRef,
        {
          snapshotListenOptions: { includeMetadataChanges: true },
          
        }
      );
    
    
    

    const createChat = () => {
            const input = prompt(
                "Please enter an email address to the user you wish to chat with"
            );

            if(!input) return null;

            if(EmailValidator.validate(input) && input !== user.email) {
                //We need to add the chat into the db chats collection
                const chatRef = getDBCollection(db, "chats");
                addNewDoc(chatRef, {
                    users: [user.email, input],
                });
            }
   };

    return (
        <Container>
            <Header>
                <UserAvatar onClick={()=>auth.signOut()} />
                {error && <strong>Error: {error}</strong>}
                {loading && <span>Loading...</span>}
                
                <IconContainer>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </IconContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder="ጨዋታ ክፍል ዉስጥ ፈልግ" />
            </Search>

            <SidebarButton onClick={createChat}>አዲስ ጨዋታ ክፍል ክፈት</SidebarButton>
        </Container>
    );
}


export default Sidebar;

const Container = styled.div``;

const Header  = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover {
    opacity: 0.8;
}
`;

const IconContainer  = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    border: none;
    outline-width: 0;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;
`;
