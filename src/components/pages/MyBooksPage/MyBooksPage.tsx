import { Layout } from "@consta/uikit/Layout";
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import BookCard from "../../BookCard/BookCard";
import { Tabs } from '@consta/uikit/Tabs';
import { useState } from "react";
import "./MyBooksPage.scss"




const MyBooksPage = () => {
    const items: string[] = ['Мои книги на обмен', 'Полученные при обмене'];

    const getItemLabel = (label: string) => label;

    const [value, setValue] = useState<string>(items[0]);
    return (
      <Layout direction= "column" style={{flexGrow: 1, height: "90%", width: "100%", paddingLeft: "2%", paddingRight: "1.5%", paddingTop: "2%"}}>
          <Card style={{height: "100%", width: "100%", padding: 25, background: "#FFFBF5", }}>
            <Layout direction="row" style={{paddingLeft: 10, paddingRight: 20}}>
            <Tabs
                value={value}
                onChange={setValue}
                items={items}
                getItemLabel={getItemLabel} 
            ></Tabs>
            </Layout>
            <hr style={{marginBottom: 20, height: 5, background:"#C3ACD0", borderRadius: 25}}></hr>
            {value === "Мои книги на обмен" ? 
            <div style= {{height: "80%  ", width: "100%", overflowY: "auto"}}>
              
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
            </div> 
            :
            <div style= {{height: "80%  ", width: "100%", overflowY: "auto"}}>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
              <BookCard></BookCard>
            </div>}
          </Card>
      </Layout>
    );
  };
  
  export default MyBooksPage;