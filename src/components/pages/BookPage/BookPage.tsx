import React, { useState } from "react";
import { Avatar } from "@consta/uikit/Avatar";
import { Card } from "@consta/uikit/Card";
import { Button } from "@consta/uikit/Button";
import defaultAvatar from "../../../assets/аватарка_по-умолчанию.png";
import ratingStar from "../../../assets/рейтинг.png";
import './BookPage.scss'
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import StarIcon from "../../../assets/starIcon";
import { Collapse } from '@consta/uikit/Collapse';

const BookPage = ()=>{
    const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);
    const [isBooksOpen, setIsBooksOpen] = useState<boolean>(false);

    return(
        // <Layout direction= "column" style={{flexGrow: 1, height: "90%", width: "100%", paddingLeft: "2%", paddingRight: "1.5%", paddingTop: "2%"}}>
            
        // </Layout>
        <section className="book">
            <div className="background"></div>
            <Card style={{height: "100%"}}
                className="main-container"
                form="round"
                verticalSpace="xl"
            >
                <Layout direction="row" style={{paddingRight: "5%", paddingLeft: "5%"}}>
                    <img src="https://www.colorhexa.com/8a99a6.png" 
                         style={{width: 180, height: 280, borderRadius: "20px 20px 20px 20px"}}></img>
                    <Layout direction="column" style={{paddingLeft: 40}}>
                        <Text className="item-label">Название книги</Text>
                        <Text className="item-text">Название книги</Text>
                        <br/>
                        <br/>
                        <Text className="item-label">Автор</Text>
                        <Text className="item-text">Автор</Text>
                        <br/>
                        <br/>
                        <Text className="item-label">Рейтинг</Text>
                        <Text className="item-text"><StarIcon></StarIcon> 4.3</Text>
                        <br/>
                        <br/>
                        <Text className="item-label">Аннотация</Text>
                        <Text className="item-text">Я в своем познании настолько преисполнился, что я как будто бы уже
                            сто триллионов миллиардов лет проживаю на триллионах и
                            триллионах таких же планет, как эта Земля, мне этот мир абсолютно
                            понятен, и я здесь ищу только одного - покоя, умиротворения и
                            вот этой гармонии, от слияния с бесконечно вечным, от созерцания
                            великого фрактального подобия и от вот этого замечательного всеединства
                            существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно
                            малое, хоть ввысь - бесконечное большое, понимаешь? А ты мне опять со
                            своим вот этим, иди суетись дальше, это твоё распределение, это
                            твой путь и твой горизонт познания и ощущения твоей природы, он
                            несоизмеримо мелок по сравнению с моим, понимаешь? Я как будто бы уже
                            давно глубокий старец, бессмертный, ну или там уже почти бессмертный,
                            который на этой планете от её самого зарождения, ещё когда только Солнце
                            только-только сформировалось как звезда, и вот это газопылевое облако,
                            вот, после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало
                            формировать вот эти коацерваты, планеты, понимаешь, я на этой Земле уже
                            как будто почти пять миллиардов лет живу и знаю её вдоль и поперёк
                            этот весь мир, а ты мне какие-то... мне не важно на твои тачки, на твои
                            яхты, на твои квартиры, там, на твоё благо.
                        </Text>
                        <br/>
                        <br/>
                        <Layout direction="row" style={{display:"flex", width: "100%"}}>
                            <Collapse
                                label={<Text className="collapse-text">Отзывы</Text>}
                                iconPosition="right"  
                                style={{width: 90}}
                                isOpen={isCommentsOpen}
                                onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                                >
                                <Layout style={{paddingLeft: 30}}>
                                    Отзыв
                                </Layout>
                            </Collapse>  
                            <div style={{display:"flex", width: "100%"}}></div>
                            <Button label="Добавить отзыв" style={{background: "#674188", marginTop: 10}} form="round"></Button>
                        </Layout>
                        
                        <Collapse
                            label={<Text className="collapse-text">Доступна для обмена</Text>}
                            iconPosition="right"  
                            style={{width: 250}}
                            isOpen={isBooksOpen}
                            onClick={() => setIsBooksOpen(!isBooksOpen)}
                            >
                            <Layout style={{paddingLeft: 30}}>
                                Доступные для обмена
                            </Layout>
                        </Collapse>
                    </Layout>
                </Layout>
            </Card>
        </section>
    )
}

export default BookPage