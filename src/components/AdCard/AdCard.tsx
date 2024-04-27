import { Layout } from '@consta/uikit/Layout';
import { useState } from 'react';
import { RadioGroup } from "@consta/uikit/RadioGroup";
import './AdCard.scss'

const AdCard = () => {
  type Item = { 
    name: string; 
    disabled?: boolean;
  };

  const items: Item[] = [
  {
      name: "1",
  },
  {
      name: "2",
  },
  {
      name: "3",
  }
];

    const [value, setValue] = useState<Item>(items[0]);

    return (
      <Layout style={{height: 200, width: "100%", background:" #777777", borderRadius: "0px 0px 16px 16px", position: "relative", zIndex: 0}}>
        <Layout style={{width: "100%", height: "100%", position: "absolute"}}>
                {value.name === "1" ? // Первая страница
                <img src="https://chelseablues.ru/images/news12/1xbet-zerkalo-na-segodnya.jpg" style={{width: "100%", height: "100%", borderRadius: "0px 0px 16px 16px"}}></img>
                :   
                value.name === "2" ? // Вторая страница   
                <img src="" style={{width: "100%", height: "100%", borderRadius: "0px 0px 16px 16px"}}></img>
                : 
                value.name === "3" ? // Третья страница
                <img src="" style={{width: "100%", height: "100%", borderRadius: "0px 0px 16px 16px"}}></img>
                : 
                ""}
        </Layout>
        <div style={{display: "flex", justifyContent: "space-between", position: "absolute", width: "100%", paddingTop: 160}}>
            <div style={{display: "flex", width: "0%"}}>
            </div>
            <RadioGroup
                value={value}
                items={items}
                getItemLabel={(item) => {
                    return(item.name)
                }}
                getItemDisabled={(item) => item.disabled}
                onChange={(value) => setValue(value)}
                direction="row"
                style={{width: 57, gap: 6}}
                size="xs"
                className={"Ad_Radio_Button"} 
            />
            <div>
            </div>
        </div>
      </Layout>
    );
  };
  
  export default AdCard;