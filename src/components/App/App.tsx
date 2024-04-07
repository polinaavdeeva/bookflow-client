import React, { FC } from "react";
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

const App: FC = (): React.ReactElement => {
  return (
    <Theme preset={presetGpnDefault}>
      <p>
        Платформа для обмена книгами между людьми в определённой местности ,где
        можно оставлять отзывы о прочитанных книгах
      </p>
    </Theme>
    

  );
};

export default App;
