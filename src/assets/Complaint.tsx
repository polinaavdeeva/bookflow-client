const ComplaintIcon = ({ dark }: { dark: boolean }) => {
  return dark ? (
    <svg
      width="33"
      height="33"
      viewBox="0 0 30 30"
      fill="#8A92A6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="url(#a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#b" transform="scale(.02)" />
        </pattern>
        <image
          id="b"
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO1azY8UVRBvhIMRBBP1pOJNDhI8+V8YElljMIYQbopnA8quk7gIXW+GTNfr9bCJZrPMVM3S3rwaPjyogB9HNN40rJKIERWPuKZ6Zmeqe1mmX/eb2UmcSl7yMt1V71XVe/Xx6wmCKU1pSmOjDzB5MkR+BSyfNpY+MZavgOVvZMjcICfps5hmGg16IpgkajaXHjPIb4Glq4D0r7G8VmT03v0KLB0PF5M9W6uApTNg+c+im990IN0RT4XjVgiQXjeWbm1i6Z8BiQzSKcDOkdC2D8mQefc3InlnE95fwfJrI1egtpDsAqTWhg1Y/s1YDsMFfr6orHq0sh+QwCDf3qgQL9fr53eO7CIbpK9zi/4Flt6usmjPOCcM0t9Z49B1WdO7EoD8fc5qn507lzzla40QW08D0sWsoeiGN2XEYnlPAPLZWq32UOCZkiTZbpBNNhDwtdrip49UFp6/E3KUghGTsXQyZ7glD9Ep64lgTGSQGnrtekSHq+SJW/pOuB6ntbW1bRDzQYjbL5U6ZpYvqcj4S6k8I8lOR6cyFzuM6di6jDDio678jQ87z4Dlu0qZ0yXKDrpT9V6ApaaS0Swp411dATh5RWonFTVuS+TaKkXq9fM7ewl3XZk3XTZwVR2rsMwGfCkipEMyIH8ZFE9+gyrWpewYmSIRH1CGvVeoBZB+QmXWn4IK5EsRIbB0s7+vmGaCYdRtivrVKA1lGJsi3FH3ZH4oQ6+zW2c4NSmKGEtzStaF4Ysjfz7wSOfIpCgSRnxU3ZMrRRb/rs8Q8csTo4htH1In5dv/kSLo8WhJBzgIHDDWo2WQE1XbzFZZvB61XpRaSYbMq8gCpPeUR1aGMkho8xV+haQp8tEYgQq/gPy+U0IUtCOYEAKVEOW+DGWQ9C9lwKChWdkfbDGdtSsv6BLlTLz8eCFGQQB9XFJotvYZy21plxtx57nScizVVdn0hQvjcV3Gl4V7jOUflSV/KCMD4KNHwdLvfcPG/EZhZmleMo0V0gnXDdSWlh7WR1Tm8puzIpZnVRT9w7nd1cWjgGeCO7luQsKkksGu/GGU7M20ukWi1QYhi8kewWKVVy4KIOAiQ97vgg980JW3Vru8Qydng7SK2NodlCEBlDUkI51aKUEVyxsj0RP51WoCkZczylg66W23RQAHm675cWWh3eafrmc9Qw3Xo1L4ONmsJwQ/8AKZ9pF4SzeyVuJLgjt5WUAMttB+Nv08lwOxvX+iSzM+8rWstfhuiPxOWbhokCd41iD9k/fEyL4ziosFUM55Jk2aKWQT8QGXskMytk52Rt0Jb8fpQSSAsmCxGzeQWvJmt1KlubSHiGlGRrefoLn0GdLq/XgN0mrl6ORKvew/ryuAskMytiQ7LJsnfCkktZkggLmSZNi4JwWgQKBb+nn6fiSXM+2tkeYFsgGky+t/GOjO6YI8k3cKl+JTmtKUAh/0H8blwsI3xNgSAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  ) : (
    <svg
      width="33"
      height="33"
      viewBox="0 0 30 30"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="url(#a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#b" transform="scale(.02)" />
        </pattern>
        <image
          id="b"
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADU0lEQVR4nO2aW0tUURTHp+xB1DLIntJ6q4fEnvwWITRGKCHSW5dn0VJ7cKS8gZ9AJMq89BGi1AcvXR8teku0hIzs9li/2LQOrNmNztn77BkHmj8cGM6c9V9rzd573c6kUmWUUUbRABwHLgKDwCNgAXgpl/k8J9+1AnWpUgJwFLgBrAK/iQ/z7ApwHajdbwfuAF9Jjh1ZqdpiO3EZ2NrFqHVgCugFOoC0XB1yb0qeyYWPQHsxHKgB7ucw4BMwBJx14GoEhoHtHHz3gOpCHuQXlsJvQFcSpfLjdAPfLe7nRmchnHhjKXoMnAioox54YulYC+aM/GL2StwFDgZRkK2rAhixdD0DqkKQ22eiK4jVe+vssXROhohOWSsRzNr8uscs3W1J8sSWdSacthNwAGgBzntus6dK/wevPCPJTkcn54MNXFEcnR7yDcAPxTHosxo7Sc8FMK44xj05bimOHadVkdopgklYNfvoSLUk3AjXXIRNARhhyMeAUI4YWCF5OeWQ/HQVG7vsKKAjTYrnV6wWQPqJCO99lYd0xADYUFytqXyQcjrCVF6B4jkyrbgycQRMZxeht4Qc6Vdcs3EEFpVARwk50qm4FuIIvFYCF0rIkbTievVfObIYcGuZDjDCcLG31pwS6EuovFlqJXM1J+S6reyaiSOQCRV+ha8qRGNEdvgdcE2I66kSAdkJMR1HoE7KgAiNRbF0b5vOKXuMbcfiCq6EOKTAGeCBtMunE/CMKnuWXATNGFOX8V7jHuCd4nnryXEY+Kx4rroI11qNVbeHAZXWFjWfKz14+hTHF+d21yoezfCs3sOIGcXx0EP+pNXq5o9Wu6yKmcVGMMOzCo8BQotcrrKHrOS8CRxxdkTI2snGiBdR8vLG4FJSQjNQ1ugJZm28gYPBRAjSahkoa4y5bhWH7TRu6VoNMjJVfbwZKGuY4VlDEAV/dZyS13Maa8Ff0UnGNwNlDRNRbvqOi1SeMCH2Z46VKMx7RikAJ/kX2zKyaXIsO0atZBdhIth2ymNEm8xic2FDKtV+6SFa5eqUe9MSSnNhM3F08swzGasC8IXJ2APeeSKgQ6Y2W7ZKknwwzy6ZEei+vp7eIyCkZaVmgXn1h4F5uZeRZ+KV4mWUUUYqBP4AE5+e67xvy4sAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default ComplaintIcon;
