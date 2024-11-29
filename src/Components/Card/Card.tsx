import classes from "./card.module.scss";
import { IPropsCard as IProps } from "../../Interfaces/interface.types";

export default function Card({
  typeOfScreen,
  url,
  created,
  name,
  author,
  location,
}: IProps) {
  return (
    <div className={classes.wrapper}>
      {/* Создаю картинку, задаю ей пропорции */}
      <img
        style={{
          overflow: "hidden",
          aspectRatio: `${
            typeOfScreen == 1
              ? `280/185`
              : typeOfScreen == 2
                ? `352/220`
                : `392/260`
          }`,
        }}
        src={`https://test-front.framework.team${url}`}
      />
      {/* Здесь отображается вся информация о картине(автор, локация, год, название) */}
      <div
        className={classes.infoBox}
        style={{
          width: `${typeOfScreen == 1 || typeOfScreen == 2 ? `84%` : `76%`}`,
          height: `${
            typeOfScreen == 3 || typeOfScreen == 2 ? `31% ` : `calc(24% - 1px)`
          }`,
        }}
      >
        <div
          className={classes.infoFirstWrapper}
          style={{
            paddingLeft: `${
              typeOfScreen == 3 ? "20px" : typeOfScreen == 2 ? "12px" : "8px"
            }`,
          }}
        >
          {/* Название картины(отображено изначально) */}
          <p
            className={classes.name}
            style={{
              fontSize: `${
                typeOfScreen == 1
                  ? "calc(3vw + 4px)"
                  : typeOfScreen == 2
                    ? "calc(3vw / 2 + 4px)"
                    : "calc(3vw / 3 + 4px)"
              }`,
              height: "33.33%",
              lineHeight: `${typeOfScreen == 1 ? "14.53px" : "19.38px"}`,
            }}
          >
            {name.toUpperCase()}
          </p>
          {/* Автор картины(не отображено изначально) */}
          <p
            className={classes.namePainter}
            style={{
              position: "absolute",

              fontSize: `${
                typeOfScreen == 1
                  ? "calc(3vw + 4px)"
                  : typeOfScreen == 2
                    ? "calc(3vw / 2 + 4px)"
                    : "calc(3vw / 3 + 4px)"
              }`,
              height: "33.33%",
              lineHeight: `${typeOfScreen == 1 ? "14.53px" : "19.38px"}`,
            }}
          >
            {author.toUpperCase()}
          </p>
          {/* Год создания картины(отображено изначально) */}
          <p
            className={classes.year}
            style={{
              paddingTop: `${typeOfScreen == 1 ? "4px" : "7px"}`,
              fontSize: `${
                typeOfScreen == 1
                  ? "3vw"
                  : typeOfScreen == 2
                    ? "calc(3vw / 2)"
                    : "calc(3vw / 3)"
              }`,
              height: "22.22%",
              lineHeight: `${typeOfScreen == 1 ? "9.68px" : "14.52px"}`,
            }}
          >
            {created.toUpperCase()}
          </p>
          {/* локация картины(отображено изначально) */}
          <p
            className={classes.location}
            style={{
              position: "absolute",

              paddingTop: `${typeOfScreen == 1 ? "4px" : "7px"}`,
              fontSize: `${
                typeOfScreen == 1
                  ? "3vw"
                  : typeOfScreen == 2
                    ? "calc(3vw / 2)"
                    : "calc(3vw / 3)"
              }`,
              height: "22.22%",
              lineHeight: `${typeOfScreen == 1 ? "9.68px" : "14.52px"}`,
            }}
          >
            {location.toUpperCase()}
          </p>
        </div>
      </div>
      <div
        className={classes.decorationStick}
        style={
          typeOfScreen == 3
            ? {
                transform: `translateY(calc(-100% - 4px - 40%))`,
              }
            : {
                display: "none",
              }
        }
      ></div>
      <button
        className={classes.btn}
        style={
          typeOfScreen == 3
            ? { display: "none" }
            : {
                height: `${typeOfScreen == 2 ? `31%` : `calc(24% - 1px)`}`,
                width: `${typeOfScreen == 2 ? `7%` : `8%`}`,
                transform: `translateY(calc(-100% - 3px)) translateX(${
                  typeOfScreen == 2 ? `calc(1199% - 1px)` : `calc(1050% - 1px)`
                })`,
              }
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.pointer}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5C0 4.85268 0.0602 4.71139 0.167357 4.60722C0.274514 4.50305 0.41985 4.44452 0.571392 4.44452L14.0482 4.44452L10.4519 0.949457C10.3446 0.845154 10.2843 0.703687 10.2843 0.556179C10.2843 0.408671 10.3446 0.267204 10.4519 0.162901C10.5592 0.0585966 10.7047 0 10.8565 0C11.0082 0 11.1537 0.0585966 11.261 0.162901L15.8321 4.60672C15.8853 4.65832 15.9276 4.71962 15.9564 4.7871C15.9852 4.85459 16 4.92694 16 5C16 5.07306 15.9852 5.14541 15.9564 5.2129C15.9276 5.28038 15.8853 5.34168 15.8321 5.39328L11.261 9.8371C11.1537 9.9414 11.0082 10 10.8565 10C10.7047 10 10.5592 9.9414 10.4519 9.8371C10.3446 9.7328 10.2843 9.59133 10.2843 9.44382C10.2843 9.29631 10.3446 9.15485 10.4519 9.05054L14.0482 5.55548L0.571392 5.55548C0.41985 5.55548 0.274514 5.49695 0.167357 5.39278C0.0602 5.28861 0 5.14732 0 5Z"
            fill="#dedede"
          />
        </svg>
      </button>
    </div>
  );
}
