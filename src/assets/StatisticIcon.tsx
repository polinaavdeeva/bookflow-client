const StatisticIcon = ({ dark }: { dark: boolean }) => {
  return dark ? (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.0131836"
        width="24"
        height="24"
        fill="url(#pattern0_355_3035)"
      />
      <defs>
        <pattern
          id="pattern0_355_3035"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_355_3035" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_355_3035"
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nO2ZQUrDUBCGg+jCjbgV0Tu4EryDIEhBvIDHyNK+SdJ0JnSRVZEyL5iNJxAP4iVcu1AxKMSQlzZg06T8H/y7B5M/M38eTDwPAAAA6BEh2zPD9oHY5mUZ0UcSvfOGArF9JbGfLo05u/CGgGH73mSEkux2bcWjKD+mREe/8n1/pysj4Sw7oUSvy/Up0VHAehlF+X674qJX5WJpmu51YWQyWRwR65vrrGF9HoSR77fedNawfvj+y27vjVTrUo1aPQuM1ICOyJpHi3lxQKxh9ab+ua3jOJ4fDqIjhu1945dFNB6IEdXGYmyfYETQkXowWoKMFCAjLpARQUYKkBEXyIggIwXIiAtkRJCR7jMSxPa8us4sq7qUrlt//jk/zU9dq1qqUav17X/utTaK2VYjwVRvlrV8ExqXxnIlI71VsuTfCoxIzzoCANh+vgBsD7mIUV3DOwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.0131836"
        width="24"
        height="24"
        fill="url(#pattern0_481_314)"
      />
      <defs>
        <pattern
          id="pattern0_481_314"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_481_314" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_481_314"
          width="50"
          height="50"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/0lEQVR4nO2YOwrCQBiEl6CFjdiKmDtYCd5BECQguYBHsRE8g4WFNp7Ak3gJaws/CWnisnkVeazMB9MtTGb/HQK/MUIIIUSPABbAGbhZugJ74wvAk2JWxgeAd0mQuEnzGRBlFLQVBJgDW8s/AtbAqK75xjIbthEEmAKvgrMPX4Ikt17EBxj4EMT2dVH9WxTEgSbS9NMCxsDR8adOdAImXkwEOJQYnXwJcikxuisImogbPa0UdQR1JAd1JEUdQR3JQR1JUUdQR3JQR1LUEVruyNKxzszqZymds/7MKixY1UYOBZ3stTqFPw6yqzDyLhTWDdJXYgXpGXFbdRNCmH7yBaNl2Qh+bYK6AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default StatisticIcon;
