import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"



export default function App (){
    
    return(
        <section className="App">
        <TwitterFollowCard isFollowing usName="MartinCardozo" name="Martin Cardozo" usTwitter="@Chikapu"/>
        <TwitterFollowCard isFollowing usName="BiancaDeb" name="Bianca Deblinger" usTwitter="@Momantai"/>
        <TwitterFollowCard isFollowing usName="EzeElAmante" name="Ezequiel Amin" usTwitter="@SoyUnFontanero"/>
        <TwitterFollowCard isFollowing usName="FerchuPonce" name="Fer Ponce" usTwitter="@FerChuPonce"/>
        <TwitterFollowCard isFollowing usName="Belen" name="Belen Pinto" usTwitter="@SoyOtaku"/>
        </section>
       
        
    )
}