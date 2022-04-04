import React, { useContext, useState } from "react";
import Link from "next/link";
import ContextSetting from "../Context/ContextSetting";
import { server } from "../../config";

interface IProps{
    toggleCalculator:()=>void;
}
const Head:React.FC<IProps> = ({toggleCalculator}) => {
    const [active, setActive] = useState(false);
    const context = useContext(ContextSetting);
    return (
        <header className={"header" + (active ? " active":"")}>
            <div className="header__container">     
                <nav className="nav">
                    <span className="nav__link" onClick={() => setActive(!active)}>
                        <span className="nav__logo-link">
                            <svg viewBox="0 0 900 900" className={"header__menu" + (active ? " menuexpanded" : "")}><g><path className="menu-icon-dash dash-bottom" d="M145 609l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" /><path className="menu-icon-dash dash-middle" d="M146 394c203,0 406,0 609,0 74,0 74,111 0,111 -203,0 -406,0 -609,0 -74,0 -74,-111 0,-111z" /><path className="menu-icon-dash dash-top" d="M146 179l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" /></g></svg>
                        </span>
                        <span className="nav__link-text">Меню</span>
                    </span>
                    <Link href={`${server}/`} >
                        <a className="nav__link">
                            <span className="nav__logo-link">
                                <span className="nav__logo-periodic-table">Md</span>
                            </span>
                            <span className="nav__link-text">Таблица менделеева</span>
                        </a>
                    </Link>
                    <Link href={`${server}/table-solubility`}>
                        <a className="nav__link">
                            <span className="nav__logo-link">
                                <svg version="1.1" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M1506 5101 c-46 -31 -66 -69 -66 -131 0 -62 20 -100 66 -131 24 -16 48 -19 147 -19 l117 0 0 -705 0 -705 -275 -550 -275 -550 450 0 449 0 26 53 c78 158 237 257 414 257 182 0 334 -94 416 -259 l26 -51 450 0 449 0 -275 550 -275 550 0 705 0 705 118 0 c98 0 122 3 146 19 46 31 66 69 66 131 0 62 -20 100 -66 131 -28 18 -67 19 -1054 19 -987 0 -1026 -1 -1054 -19z"/><path d="M2469 2307 c-55 -37 -79 -81 -79 -147 0 -102 68 -170 170 -170 102 0 170 68 170 170 0 102 -68 170 -170 170 -43 0 -65 -6 -91 -23z"/><path d="M722 1303 c-194 -390 -357 -728 -362 -753 -32 -150 14 -310 119 -416 58 -59 104 -88 180 -114 60 -20 76 -20 1901 -20 1816 0 1841 0 1900 20 78 26 114 49 176 110 110 109 157 267 124 420 -5 25 -168 363 -362 753 l-353 707 -522 0 -522 0 -26 -53 c-168 -342 -662 -342 -830 0 l-26 53 -522 0 -522 0 -353 -707z m1368 249 c31 -12 82 -43 115 -69 235 -191 235 -535 0 -726 -81 -65 -148 -89 -265 -95 -79 -3 -106 0 -159 18 -199 67 -321 236 -321 442 1 197 124 371 309 435 87 31 236 28 321 -5z m1027 7 c118 -73 63 -259 -77 -259 -107 0 -175 114 -125 211 35 66 134 90 202 48z m480 -320 c118 -73 63 -259 -77 -259 -107 0 -175 114 -125 211 35 66 134 90 202 48z m-640 -320 c118 -73 63 -259 -77 -259 -107 0 -175 114 -125 211 35 66 134 90 202 48z"/><path d="M1829 1267 c-55 -37 -79 -81 -79 -147 0 -102 68 -170 170 -170 102 0 170 68 170 170 0 66 -24 110 -79 147 -47 32 -135 32 -182 0z"/></g></svg>
                            </span>
                            <span className="nav__link-text">Таблица растворимости</span>
                        </a>
                    </Link>
                    <Link href={`${server}/canvas`}>
                        <a className="nav__link">
                            <span className="nav__logo-link">
                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g transform="rotate(0, 50, 50)"><path fill="none" strokeWidth="2" d="M99,50L74.5,7.6h-49L1,50l24.5,42.4h49L99,50z M92,52L70,89 M27,13h46 M8,50l22,39"/></g><g><path d="M48.2,65.7l44.1-42.5L81.1,11.5L36.9,54.1c-0.2,0.2-0.4,0.4-0.5,0.7l-3.6,12.7c0,0,0,0.1,0,0.1 c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1 c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0 c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0l12.9-3.1C47.7,66.1,48,66,48.2,65.7z M38.1,64.2c-0.3-0.3-0.8-0.5-1.2-0.4 l2.1-7.4l7,7.2l-7.5,1.8C38.5,65,38.4,64.6,38.1,64.2z"/><path d="M94.3,21.3L83.1,9.6l4.5-4.3c0,0,7.7,2.9,11.2,11.6L94.3,21.3z"/></g></svg>
                            </span>
                            <span className="nav__link-text">Редактор химических формул</span>
                        </a>
                    </Link>
                </nav>
                <nav className="nav">
                    <span className="nav__link" onClick={() => {toggleCalculator();setActive(false)}}>
                        <span className="nav__logo-link">
                            <svg version="1.1" x="0px" y="0px" viewBox="0 0 16 16"><g><path strokeWidth="0" d="M12.997,0H3.003C2.449,0,2,0.444,2,1.001v13.998C2,15.552,2.456,16,3.003,16h9.994 C13.551,16,14,15.556,14,14.999V1.001C14,0.448,13.544,0,12.997,0z M6,14H4v-2h2V14z M6,11H4V9h2V11z M6,8H4V6h2V8z M9,14H7v-2h2 V14z M9,11H7V9h2V11z M9,8H7V6h2V8z M12,14h-2v-2h2V14z M12,11h-2V9h2V11z M12,8h-2V6h2V8z M13,4H3V1h10V4z"/></g></svg>
                        </span>
                        <span className="nav__link-text">Калькулятор</span>
                    </span>
                    <span className={"nav__link nav__link-setting " + (context.settingActive.visible ? "active" : "")} onClick={() => {context.setSettingActiveState!({...context.settingActive, active: !context.settingActive.active});setActive(false)}}>
                        <span className="nav__logo-link">
                            <svg viewBox="0 0 512 512"><path d="m499.95 197.7-39.352-8.5547c-3.4219-10.477-7.6602-20.695-12.664-30.539l21.785-33.887c3.8906-6.0547 3.0352-14.004-2.0508-19.09l-61.305-61.305c-5.0859-5.0859-13.035-5.9414-19.09-2.0508l-33.887 21.785c-9.8438-5.0039-20.062-9.2422-30.539-12.664l-8.5547-39.352c-1.5273-7.0312-7.7539-12.047-14.949-12.047h-86.695c-7.1953 0-13.422 5.0156-14.949 12.047l-8.5547 39.352c-10.477 3.4219-20.695 7.6602-30.539 12.664l-33.887-21.785c-6.0547-3.8906-14.004-3.0352-19.09 2.0508l-61.305 61.305c-5.0859 5.0859-5.9414 13.035-2.0508 19.09l21.785 33.887c-5.0039 9.8438-9.2422 20.062-12.664 30.539l-39.352 8.5547c-7.0312 1.5312-12.047 7.7539-12.047 14.949v86.695c0 7.1953 5.0156 13.418 12.047 14.949l39.352 8.5547c3.4219 10.477 7.6602 20.695 12.664 30.539l-21.785 33.887c-3.8906 6.0547-3.0352 14.004 2.0508 19.09l61.305 61.305c5.0859 5.0859 13.035 5.9414 19.09 2.0508l33.887-21.785c9.8438 5.0039 20.062 9.2422 30.539 12.664l8.5547 39.352c1.5273 7.0312 7.7539 12.047 14.949 12.047h86.695c7.1953 0 13.422-5.0156 14.949-12.047l8.5547-39.352c10.477-3.4219 20.695-7.6602 30.539-12.664l33.887 21.785c6.0547 3.8906 14.004 3.0391 19.09-2.0508l61.305-61.305c5.0859-5.0859 5.9414-13.035 2.0508-19.09l-21.785-33.887c5.0039-9.8438 9.2422-20.062 12.664-30.539l39.352-8.5547c7.0312-1.5312 12.047-7.7539 12.047-14.949v-86.695c0-7.1953-5.0156-13.418-12.047-14.949zm-152.16 58.297c0 50.613-41.18 91.793-91.793 91.793s-91.793-41.18-91.793-91.793 41.18-91.793 91.793-91.793 91.793 41.18 91.793 91.793z"/></svg>
                        </span>
                        <span className="nav__link-text">Настройки</span>
                    </span>
                    <Link href={`${server}/help`}>
                        <a className="nav__link">
                            <span className="nav__logo-link">
                                <svg x="0px" y="0px" viewBox="0 0 559.393 559.393"><path d="M324.45,502.477c0-7.752-1.431-15.096-4.284-22.029c-2.856-6.938-6.938-12.954-12.24-18.057 c-5.304-5.1-11.424-9.18-18.36-12.237c-6.936-3.063-14.279-4.593-22.031-4.593s-15.096,1.53-22.032,4.593 c-6.936,3.06-12.954,7.14-18.054,12.237c-5.1,5.103-9.078,11.118-11.934,18.057c-2.856,6.936-4.284,14.277-4.284,22.029 c0,7.753,1.428,15.099,4.284,22.032c2.856,6.938,6.834,12.954,11.934,18.055c5.1,5.102,11.118,9.182,18.054,12.239 c6.936,3.063,14.28,4.59,22.032,4.59s15.096-1.527,22.031-4.59c6.938-3.06,13.059-7.14,18.36-12.239 c5.304-5.101,9.384-11.116,12.24-18.055C323.021,517.573,324.45,510.229,324.45,502.477z M271.818,420.469h-4.896 c-13.056-1.632-23.766-7.548-32.13-17.748c-8.364-10.197-11.934-21.828-10.71-34.884c2.448-22.438,8.058-44.166,16.83-65.178 c8.772-21.013,20.094-39.679,33.966-55.999c4.488-5.712,9.383-10.914,14.687-15.606c5.307-4.692,10.608-9.282,15.912-13.77 c13.464-11.424,23.769-21.624,30.906-30.6s10.71-19.992,10.71-33.048c0-11.424-2.346-20.808-7.038-28.152 c-4.689-7.344-10.403-13.158-17.136-17.442c-6.733-4.284-13.771-7.344-21.114-9.18c-7.344-1.836-13.872-2.754-19.584-2.754h-1.224 c-11.424,0-20.808,1.53-28.152,4.59s-13.566,7.344-18.666,12.852c-5.1,5.508-9.384,12.138-12.852,19.89 s-7.038,16.116-10.71,25.092c-4.896,12.648-10.812,21.522-17.748,26.622s-13.872,8.058-20.808,8.874 c-7.752,1.632-15.708,1.02-23.868-1.836c-8.16-3.264-14.688-7.956-19.584-14.076c-4.488-5.304-7.956-12.138-10.404-20.502 c-2.448-8.364-1.632-18.666,2.448-30.906c2.448-7.752,6.732-18.87,12.852-33.354s15.402-28.662,27.846-42.534 s28.458-25.908,48.042-36.108s44.064-15.096,73.439-14.688c19.584,0.408,38.862,3.978,57.834,10.71s36.006,16.626,51.102,29.682 c15.099,13.056,27.336,29.07,36.723,48.042c9.384,18.972,14.073,40.698,14.073,65.178c0,17.952-2.445,33.864-7.344,47.736 c-4.896,13.872-11.118,26.316-18.666,37.332s-15.708,20.604-24.479,28.764c-8.772,8.16-16.83,15.504-24.174,22.033 c-4.08,3.672-7.956,7.038-11.631,10.098c-3.672,3.063-6.525,6.021-8.565,8.874c-7.344,8.979-13.566,19.482-18.666,31.521 c-5.103,12.036-8.262,24.582-9.486,37.638c-1.224,12.648-6.426,22.95-15.604,30.906 C294.767,416.491,284.058,420.469,271.818,420.469z" /></svg>
                            </span>
                            <span className="nav__link-text">О нас</span>
                        </a>
                    </Link>
                </nav>
            </div> 
        </header>
    )
}

export default Head;