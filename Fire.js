import firebase from "firebase";

class Fire{
    constructor()
    {
        this.init();
        this.checkAuth();
    }

    init = () =>{
        console.log("Vao day");
        if(!firebase.apps.length)
        {
            const connect=firebase.initializeApp({
                apiKey: "AIzaSyBaCGsD_rNL97xPUs6_PuFkDucigLE2M2E",
                authDomain: "react-native-chat-app-9c1fc.firebaseapp.com",
                projectId: "react-native-chat-app-9c1fc",
                storageBucket: "react-native-chat-app-9c1fc.appspot.com",
                messagingSenderId: "827190282713",
                appId: "1:827190282713:web:10aee5e7d3a34ccc62f1c8",
                measurementId: "G-Z4FY67W7BJ"
            })
            console.log("Check connect:",connect);
            firebase.analytics();
        }
    };

    checkAuth = () =>{
        firebase.auth().onAuthStateChanged(user=>{
            console.log("CHeck user:",user);
            if(!user)
            {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = (messages) =>{
        messages.forEach(item=>{
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }
            this.db.push(message);
        })
    }

    parse=message=>{
        const {user,text,timestamp}=message.val();
        const {key:_id}=message;
        const createdAt=new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get=callback=>{
        this.db.on('child_added',snapshot=>callback(this.parse(snapshot)));

    };

    off(){
        this.db.off();
    }
    get db()
    {
        return firebase.database().ref("messages");
    }

    get uid()
    {
        return (firebase.auth().currentUser || {}).uid;
    }


}

export default new Fire();