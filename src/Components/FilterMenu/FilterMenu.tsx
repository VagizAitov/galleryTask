import classes from "./filterMenu.module.scss";
import {
  IPropsFilterMenu,
  IStates,
  IData,
} from "../../Interfaces/interface.types";
import { useState } from "react";

export default function FilterMenu({
  disp,
  setDisp,
  typeOfScreen,
  setArtist,
  setLocation,
  setYearFrom,
  setYearTo,
  isLittle,
  authors,
  locations,
}: IPropsFilterMenu) {
  const [states, setStates] = useState<IStates>({
    artistOpen: false,
    locationOpen: false,
    yearsOpen: false,
    artistsSelectOpen: false,
    locationsSelectOpen: false,
  });
  const [data, setData] = useState<IData>({
    yearFrom: "",
    yearTo: "",
    location: "",
    artist: "",
  });
  const submit = () => {
    setArtist(data.artist);
    setLocation(data.location);
    setYearFrom(data.yearFrom);
    setYearTo(data.yearTo);
    setDisp(false);
  };
  const [artistSearch, setArtistSearch] = useState<string>("");
  const [locationSearch, setLocationSearch] = useState<string>("");
  return (
    <div
      onClick={(e: any) => {
        if (e.target.className == classes.disp) {
          setDisp(false);
        }
      }}
      className={disp ? classes.disp : classes.notDisp}
    >
      <div
        className={classes.main}
        style={{
          width: `${typeOfScreen == 3 ? "34%" : typeOfScreen == 2 ? "48%" : "87%"}`,
          height: `${states.artistsSelectOpen && states.locationsSelectOpen ? "calc(100% + 300px)" : "100%"}`,
        }}
      >
        <div
          className={classes.wrapper}
          style={{ padding: `${isLittle ? "40px" : "70px"}` }}
        >
          <div className={classes.esc}>
            <button onClick={() => setDisp(false)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.38621 16.8252C2.16552 17.049 2.16552 17.3846 2.38621 17.6084C2.6069 17.8322 2.93793 17.8322 3.15862 17.6084L9.88966 10.8951L16.731 17.8322C16.9517 18.0559 17.2828 18.0559 17.5034 17.8322C17.7241 17.6084 17.7241 17.2727 17.5034 17.049L10.6621 10.1119L17.8345 2.95105C18.0552 2.72727 18.0552 2.39161 17.8345 2.16783C17.6138 1.94406 17.2828 1.94406 17.0621 2.16783L9.88966 9.32867L2.93793 2.27972C2.71724 2.05594 2.38621 2.05594 2.16552 2.27972C1.94483 2.5035 1.94483 2.83916 2.16552 3.06294L9.22759 10.1119L2.38621 16.8252Z"
                  fill="#575757"
                />
              </svg>
            </button>
          </div>

          <div className={classes.filter}>
            <div
              className={classes.open}
              onClick={() =>
                setStates((prev) => ({
                  ...prev,
                  artistOpen: !prev.artistOpen,
                  artistsSelectOpen: false,
                }))
              }
            >
              <p>ARTIST</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: "27px" }}
              >
                <path
                  display={states.artistOpen ? "none" : "0"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2C10.1768 2 10.3464 2.07024 10.4714 2.19526C10.5964 2.32029 10.6667 2.48986 10.6667 2.66667V9.33333H17.3333C17.5101 9.33333 17.6797 9.40357 17.8047 9.5286C17.9298 9.65362 18 9.82319 18 10C18 10.1768 17.9298 10.3464 17.8047 10.4714C17.6797 10.5964 17.5101 10.6667 17.3333 10.6667H10.6667V17.3333C10.6667 17.5101 10.5964 17.6797 10.4714 17.8047C10.3464 17.9298 10.1768 18 10 18C9.82319 18 9.65362 17.9298 9.5286 17.8047C9.40357 17.6797 9.33333 17.5101 9.33333 17.3333V10.6667H2.66667C2.48986 10.6667 2.32029 10.5964 2.19526 10.4714C2.07024 10.3464 2 10.1768 2 10C2 9.82319 2.07024 9.65362 2.19526 9.5286C2.32029 9.40357 2.48986 9.33333 2.66667 9.33333H9.33333V2.66667C9.33333 2.48986 9.40357 2.32029 9.5286 2.19526C9.65362 2.07024 9.82319 2 10 2Z"
                  fill="#575757"
                />
                <path
                  display={states.artistOpen ? "0" : "none"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7 10.7H17.4C17.6 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 9.99999C18 9.79999 17.9 9.69999 17.8 9.49999C17.7 9.39999 17.5 9.29999 17.3 9.29999H10.7H9.3H2.7C2.5 9.29999 2.4 9.39999 2.2 9.49999C2.1 9.69999 2 9.79999 2 9.99999C2 10.2 2.1 10.3 2.2 10.5C2.3 10.6 2.5 10.7 2.7 10.7H9.4H10.7Z"
                  fill="#DEDEDE"
                />
              </svg>
            </div>
            <div
              style={states.artistOpen ? {} : { display: "none" }}
              className={classes.artistInp}
            >
              <div className={classes.inpWrapper}>
                <input
                  placeholder="Select the artist"
                  onChange={(e) => setArtistSearch(e.target.value)}
                  style={
                    states.artistsSelectOpen
                      ? {
                          border: "1px solid var(--border-inp-focus)",
                          borderRadius: "4px",
                        }
                      : {}
                  }
                  className={classes.btnArt}
                  onClick={() =>
                    setStates((prev) => ({
                      ...prev,
                      artistsSelectOpen: !prev.artistsSelectOpen,
                    }))
                  }
                />
                <div style={{ width: "0" }}>
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                      states.artistsSelectOpen
                        ? {
                            transform:
                              "rotate(180deg) translateX(25px) translateY(-5px)",
                          }
                        : {}
                    }
                  >
                    <path
                      d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z"
                      fill="#575757"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={classes.artistList}
                style={states.artistsSelectOpen ? {} : { display: "none" }}
              >
                <button className={classes.artist}></button>
                {authors == undefined ? (
                  <button className={classes.artist}>Loading</button>
                ) : (
                  authors.map((author) =>
                    author.name.includes(artistSearch) ? (
                      <button
                        className={classes.artist}
                        key={author.id}
                        style={
                          data.artist == author.id.toString()
                            ? { background: "var(--list)" }
                            : {}
                        }
                        onClick={() => {
                          if (author.id.toString() == data.artist)
                            setData((prev) => ({ ...prev, artist: "" }));
                          else
                            setData((prev) => ({
                              ...prev,
                              artist: author.id.toString(),
                            }));
                        }}
                      >
                        {author.name}
                      </button>
                    ) : (
                      <></>
                    )
                  )
                )}
              </div>
            </div>
            <div
              className={classes.open}
              onClick={() =>
                setStates((prev) => ({
                  ...prev,
                  locationOpen: !prev.locationOpen,
                  locationsSelectOpen: false,
                }))
              }
            >
              <p>LOCATION</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  display={states.locationOpen ? "none" : "0"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2C10.1768 2 10.3464 2.07024 10.4714 2.19526C10.5964 2.32029 10.6667 2.48986 10.6667 2.66667V9.33333H17.3333C17.5101 9.33333 17.6797 9.40357 17.8047 9.5286C17.9298 9.65362 18 9.82319 18 10C18 10.1768 17.9298 10.3464 17.8047 10.4714C17.6797 10.5964 17.5101 10.6667 17.3333 10.6667H10.6667V17.3333C10.6667 17.5101 10.5964 17.6797 10.4714 17.8047C10.3464 17.9298 10.1768 18 10 18C9.82319 18 9.65362 17.9298 9.5286 17.8047C9.40357 17.6797 9.33333 17.5101 9.33333 17.3333V10.6667H2.66667C2.48986 10.6667 2.32029 10.5964 2.19526 10.4714C2.07024 10.3464 2 10.1768 2 10C2 9.82319 2.07024 9.65362 2.19526 9.5286C2.32029 9.40357 2.48986 9.33333 2.66667 9.33333H9.33333V2.66667C9.33333 2.48986 9.40357 2.32029 9.5286 2.19526C9.65362 2.07024 9.82319 2 10 2Z"
                  fill="#575757"
                />
                <path
                  display={states.locationOpen ? "0" : "none"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7 10.7H17.4C17.6 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 9.99999C18 9.79999 17.9 9.69999 17.8 9.49999C17.7 9.39999 17.5 9.29999 17.3 9.29999H10.7H9.3H2.7C2.5 9.29999 2.4 9.39999 2.2 9.49999C2.1 9.69999 2 9.79999 2 9.99999C2 10.2 2.1 10.3 2.2 10.5C2.3 10.6 2.5 10.7 2.7 10.7H9.4H10.7Z"
                  fill="#DEDEDE"
                />
              </svg>
            </div>
            <div
              style={states.locationOpen ? {} : { display: "none" }}
              className={classes.locationInp}
            >
              <div className={classes.inpWrapper}>
                <input
                  placeholder="Select the location"
                  onChange={(e) => setLocationSearch(e.target.value)}
                  style={
                    states.locationsSelectOpen
                      ? {
                          border: "1px solid var(--border-inp-focus)",
                          borderRadius: "4px",
                        }
                      : {}
                  }
                  onClick={() =>
                    setStates((prev) => ({
                      ...prev,
                      locationsSelectOpen: !prev.locationsSelectOpen,
                    }))
                  }
                  className={classes.btnLoc}
                />
                <div style={{ width: "0" }}>
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z"
                      fill="#575757"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={classes.locationList}
                style={states.locationsSelectOpen ? {} : { display: "none" }}
              >
                <button className={classes.location}></button>
                {locations == undefined ? (
                  <button className={classes.location}>Loading</button>
                ) : (
                  locations.map((loc) =>
                    loc.location.includes(locationSearch) ? (
                      <button
                        className={classes.location}
                        style={
                          data.location == loc.id.toString()
                            ? { background: "var(--list)" }
                            : {}
                        }
                        onClick={() => {
                          if (loc.id.toString() == data.location)
                            setData((prev) => ({ ...prev, location: "" }));
                          else
                            setData((prev) => ({
                              ...prev,
                              location: loc.id.toString(),
                            }));
                        }}
                      >
                        {loc.location}
                      </button>
                    ) : (
                      <></>
                    )
                  )
                )}
              </div>
            </div>

            <div
              className={classes.open}
              onClick={() =>
                setStates((prev) => ({ ...prev, yearsOpen: !prev.yearsOpen }))
              }
            >
              <p>YEARS</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ paddingLeft: "34px" }}
              >
                <path
                  display={states.yearsOpen ? "none" : "0"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2C10.1768 2 10.3464 2.07024 10.4714 2.19526C10.5964 2.32029 10.6667 2.48986 10.6667 2.66667V9.33333H17.3333C17.5101 9.33333 17.6797 9.40357 17.8047 9.5286C17.9298 9.65362 18 9.82319 18 10C18 10.1768 17.9298 10.3464 17.8047 10.4714C17.6797 10.5964 17.5101 10.6667 17.3333 10.6667H10.6667V17.3333C10.6667 17.5101 10.5964 17.6797 10.4714 17.8047C10.3464 17.9298 10.1768 18 10 18C9.82319 18 9.65362 17.9298 9.5286 17.8047C9.40357 17.6797 9.33333 17.5101 9.33333 17.3333V10.6667H2.66667C2.48986 10.6667 2.32029 10.5964 2.19526 10.4714C2.07024 10.3464 2 10.1768 2 10C2 9.82319 2.07024 9.65362 2.19526 9.5286C2.32029 9.40357 2.48986 9.33333 2.66667 9.33333H9.33333V2.66667C9.33333 2.48986 9.40357 2.32029 9.5286 2.19526C9.65362 2.07024 9.82319 2 10 2Z"
                  fill="#575757"
                />
                <path
                  display={states.yearsOpen ? "0" : "none"}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7 10.7H17.4C17.6 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 9.99999C18 9.79999 17.9 9.69999 17.8 9.49999C17.7 9.39999 17.5 9.29999 17.3 9.29999H10.7H9.3H2.7C2.5 9.29999 2.4 9.39999 2.2 9.49999C2.1 9.69999 2 9.79999 2 9.99999C2 10.2 2.1 10.3 2.2 10.5C2.3 10.6 2.5 10.7 2.7 10.7H9.4H10.7Z"
                  fill="#DEDEDE"
                />
              </svg>
            </div>
            <div
              style={states.yearsOpen ? {} : { display: "none" }}
              className={classes.yearsInp}
            >
              <input
                type="text"
                className={classes.inpYear}
                placeholder="From"
                value={data.yearFrom}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, yearFrom: e.target.value }))
                }
              />

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7 10.6998H17.4C17.6 10.6998 17.7 10.5998 17.9 10.4998C17.9 10.2998 18 10.1998 18 9.9998C18 9.7998 17.9 9.6998 17.8 9.4998C17.7 9.3998 17.5 9.2998 17.3 9.2998H10.7H9.3H2.7C2.5 9.2998 2.4 9.3998 2.2 9.4998C2.1 9.6998 2 9.7998 2 9.9998C2 10.1998 2.1 10.2998 2.2 10.4998C2.3 10.5998 2.5 10.6998 2.7 10.6998H9.4H10.7Z"
                  fill="#9C9C9C"
                />
              </svg>

              <input
                type="text"
                className={classes.inpYear}
                placeholder="To"
                value={data.yearTo}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, yearTo: e.target.value }))
                }
              />
            </div>
          </div>
          <div className={classes.submitBtns}>
            <button onClick={submit} className={classes.submit}>
              SHOW THE RESULTS
            </button>
            <button
              className={classes.clear}
              onClick={() => {
                setData({ artist: "", location: "", yearFrom: "", yearTo: "" });
                setArtist("");
                setLocation("");
                setYearFrom("");
                setYearTo("");
                setDisp(false);
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
