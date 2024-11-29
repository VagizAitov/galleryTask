import classes from "./searchAndFilters.module.scss";
import { IPropsSearchAndFilters } from "../../Interfaces/interface.types";
import { useState } from "react";

export default function SearchAndFilters({
  typeOfScreen,
  setSearchParams,
  setDisp,
}: IPropsSearchAndFilters) {
  // Ввожу state, он понадобится мне, когда нужно будет удалить весь текст из input нажатием на крестик
  const [inpValue, setInpValue] = useState<string>("");
  // Вызывается при нажатии кнопки, когда input в фокусе
  const refetch = (e: any) => {
    // Если происходит нажатие Enter, то мы меняем состояние searchParams, что приведет к refetch() в App.tsx
    if (e.key == "Enter") {
      setSearchParams(e.target.value);
    }
  };
  return (
    <div
      className={classes.wrapper}
      style={{ padding: `0 ${typeOfScreen == 3 ? "100px" : "20px"}` }}
    >
      {/* input с поиском*/}
      <input
        placeholder="Painting title"
        className={classes.input}
        type="text"
        name=""
        id=""
        onChange={(e) => setInpValue(e.target.value)}
        value={inpValue}
        onKeyDown={(e: any) => refetch(e)}
        style={{
          width: `${
            typeOfScreen == 3 ? "256px" : typeOfScreen == 2 ? "216px" : "144px"
          }`,
        }}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateX(${typeOfScreen == 3 ? "-360px" : typeOfScreen == 2 ? "-320px" : "-250px"})`,
        }}
      >
        <path
          d="M8.39891 2C7.38042 2.00015 6.37668 2.24337 5.4711 2.70945C4.56552 3.17554 3.78426 3.85102 3.19224 4.67977C2.60022 5.50852 2.21455 6.46659 2.06727 7.47437C1.91999 8.48215 2.01536 9.51053 2.34546 10.474C2.67555 11.4375 3.23084 12.3084 3.96516 13.0141C4.69949 13.7198 5.59165 14.2401 6.5675 14.5317C7.54335 14.8233 8.5747 14.8778 9.57584 14.6907C10.577 14.5035 11.519 14.0801 12.3236 13.4557L16.6323 17.766C16.7825 17.916 16.9861 18.0002 17.1984 18C17.4107 17.9998 17.6142 17.9154 17.7642 17.7652C17.9142 17.6149 17.9984 17.4113 17.9983 17.199C17.9981 16.9867 17.9137 16.7832 17.7634 16.6332L13.4548 12.3245C14.1892 11.3785 14.6435 10.2454 14.7659 9.05402C14.8883 7.86264 14.674 6.66082 14.1473 5.58522C13.6206 4.50961 12.8026 3.60339 11.7864 2.96959C10.7702 2.3358 9.59655 1.99987 8.39891 2ZM3.59904 8.39982C3.59904 7.12682 4.10474 5.90595 5.00489 5.0058C5.90504 4.10565 7.1259 3.59996 8.39891 3.59996C9.67191 3.59996 10.8928 4.10565 11.7929 5.0058C12.6931 5.90595 13.1988 7.12682 13.1988 8.39982C13.1988 9.67283 12.6931 10.8937 11.7929 11.7938C10.8928 12.694 9.67191 13.1997 8.39891 13.1997C7.1259 13.1997 5.90504 12.694 5.00489 11.7938C4.10474 10.8937 3.59904 9.67283 3.59904 8.39982Z"
          fill="#575757"
        />
      </svg>
      {/* Крестик появляется в том случае, если input value != "" | При нажатии на него input value становится "" */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "translateX(-73px)",
          display: `${inpValue == "" ? "none" : "flex"}`,
        }}
        className={classes.clearInp}
        onClick={() => setInpValue("")}
      >
        <path
          d="M2.96368 2.16834C2.74322 1.94389 2.3858 1.94389 2.16534 2.16834C1.94489 2.39279 1.94489 2.7567 2.16534 2.98116L5.20166 6.07255L2.30785 9.01884C2.0874 9.2433 2.0874 9.60721 2.30785 9.83166C2.52831 10.0561 2.88574 10.0561 3.10619 9.83166L6 6.88537L8.89381 9.83166C9.11426 10.0561 9.47169 10.0561 9.69215 9.83166C9.9126 9.60721 9.9126 9.2433 9.69215 9.01884L6.79834 6.07255L9.83466 2.98116C10.0551 2.7567 10.0551 2.39279 9.83466 2.16834C9.6142 1.94389 9.25678 1.94389 9.03632 2.16834L6 5.25973L2.96368 2.16834Z"
          fill="#575757"
        />
      </svg>

      {/* Кнопка, при нажатии на которую справа выезжает меню фильтрации */}

      <button onClick={() => setDisp(true)} className={classes.button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2 5.5C17.3 5.5 16.7 6 16.5 6.7H4.6C4.2 6.7 4 6.9 4 7.3C4 7.7 4.2 7.9 4.6 7.9H16.4C16.6 8.6 17.4 9.1 18.1 9.1C19.1 9.1 19.9 8.3 19.9 7.3C20 6.3 19.1 5.5 18.2 5.5ZM18.2 7.9C17.8 7.9 17.6 7.7 17.6 7.3C17.6 6.9 17.8 6.7 18.2 6.7C18.6 6.7 18.8 6.9 18.8 7.3C18.8 7.7 18.5 7.9 18.2 7.9Z"
            fill="#575757"
          />
          <path
            d="M18.2 11.4H11.3C11 10.7 10.4 10.2 9.5 10.2C8.6 10.2 8 10.7 7.8 11.4H4.6C4.2 11.4 4 11.6 4 12C4 12.4 4.2 12.6 4.6 12.6H7.8C8 13.3 8.8 13.8 9.5 13.8C10.2 13.8 11 13.3 11.3 12.6H18.2C18.6 12.6 18.8 12.4 18.8 12C18.8 11.6 18.5 11.4 18.2 11.4ZM9.5 12.6C9.2 12.6 8.9 12.4 8.9 12C8.9 11.6 9.1 11.4 9.5 11.4C9.9 11.4 10.1 11.6 10.1 12C10.1 12.4 9.9 12.6 9.5 12.6Z"
            fill="#575757"
          />
          <path
            d="M18.2 16.1H16.2C16 15.4 15.3 14.9 14.5 14.9C13.6 14.9 13 15.4 12.8 16.1H4.6C4.2 16.1 4 16.3 4 16.7C4 17.1 4.2 17.3 4.6 17.3H12.7C12.9 18 13.7 18.5 14.4 18.5C15.1 18.5 15.9 18 16.1 17.3H18.1C18.5 17.3 18.7 17.1 18.7 16.7C18.8 16.4 18.5 16.1 18.2 16.1ZM14.5 17.3C14.1 17.3 13.9 17.1 13.9 16.7C13.9 16.3 14.1 16.1 14.5 16.1C14.9 16.1 15.1 16.3 15.1 16.7C15.1 17.1 14.8 17.3 14.5 17.3Z"
            fill="#575757"
          />
        </svg>
      </button>
    </div>
  );
}
