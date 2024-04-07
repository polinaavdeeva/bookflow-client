import React, { FC } from "react";
import { Button } from '@consta/uikit/Button';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

const App: FC = (): React.ReactElement => {
  return (
    <Theme preset={presetGpnDefault}>
      <p>
        Платформа для обмена книгами между людьми в определённой местности ,где
        можно оставлять отзывы о прочитанных книгах
      </p>
      <Button label="Войти" view="primary"/>
    </Theme>
    

  );
};

export default App;
