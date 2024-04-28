import { Avatar } from "@consta/uikit/Avatar"
import { Layout } from "@consta/uikit/Layout"
import { Text } from "@consta/uikit/Text"
import { useState } from "react"
import StarIcon from "../../assets/starIcon"
import { Button } from "@consta/uikit/Button"

const Comment = ({})=>{
    const [isComplaintButtonShowed, setIsComplaintButtonShowed] = useState(false)
    return(
        <Layout direction="column" style={{width: "100%"}}>
            
            <Layout direction="row" style={{marginBottom: 10}}>
               <Avatar url="https://www.meme-arsenal.com/memes/7f7109497d0f562446e621e8e6073453.jpg"></Avatar> 
               <Text style={{paddingTop: 7, paddingLeft: 10}}> Райан Гослинг</Text>
               <Text className="item-text" style={{paddingLeft: 20}}><StarIcon></StarIcon> 4.3</Text>
               <Layout style={{width: "9.8%"}}></Layout>
               {isComplaintButtonShowed ? 
                <Button 
                    label="Оставить жалобу на отзыв" 
                    size="xs" 
                    onMouseLeave={()=>setIsComplaintButtonShowed(false)} 
                    style={{marginLeft: -7, background: "#674188"}}
                    form="round"/>
                :
               <Button size="xs" label="⋮" view="clear" style={{marginLeft: 145}}
                    onMouseEnter={()=>setIsComplaintButtonShowed(true)}/>
               }        
               
            </Layout>
            Главный герой произведения буквально я.
        </Layout>
    )
}

export default Comment