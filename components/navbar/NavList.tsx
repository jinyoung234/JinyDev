import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NAV_LIST } from "../../constants";
import useChangeMode from "../../hooks/useChangeMode";
import { NavListWrapper } from "./style";

function NavList() {
  const router = useRouter();
  const { isChangeMode, handleChangeMode } = useChangeMode();

  return (
    <NavListWrapper path={router.asPath}>
      <li>
        {isChangeMode ? (
          <svg
            onClick={handleChangeMode}
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            id="icon"
          >
            <title>sunny</title>
            <path
              d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"
              transform="translate(0 0.0049)"
            />
            <rect
              x="6.8536"
              y="5.3745"
              width="1.9998"
              height="4.958"
              transform="translate(-3.253 7.8584) rotate(-45)"
            />
            <rect x="2" y="15.0049" width="5" height="2" />
            <rect
              x="5.3745"
              y="23.1466"
              width="4.958"
              height="1.9998"
              transform="translate(-14.7739 12.6305) rotate(-45)"
            />
            <rect x="15" y="25.0049" width="2" height="5" />
            <rect
              x="23.1466"
              y="21.6675"
              width="1.9998"
              height="4.958"
              transform="translate(-10.0018 24.1514) rotate(-45)"
            />
            <rect x="25" y="15.0049" width="5" height="2" />
            <rect
              x="21.6675"
              y="6.8536"
              width="4.958"
              height="1.9998"
              transform="translate(1.5191 19.3793) rotate(-45)"
            />
            <rect x="15" y="2.0049" width="2" height="5" />
          </svg>
        ) : (
          <svg
            onClick={handleChangeMode}
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="32px"
          >
            <path d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z" />
          </svg>
        )}
      </li>
      {NAV_LIST.map(navElement => (
        <Link key={navElement} href={navElement === NAV_LIST[0] ? "/" : navElement === NAV_LIST[1] ? "/dev" : "/blog"}>
          <li>{navElement}</li>
        </Link>
      ))}
    </NavListWrapper>
  );
}

export default NavList;
