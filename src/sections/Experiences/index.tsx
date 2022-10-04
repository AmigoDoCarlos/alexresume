import React from "react";
import Card from "../../components/Card";
import style from './Experiences.module.scss';

import imgRobotics from "../../images/robotics-for-kids.jpg";
import imgMecajun  from "../../images/mecajun.jpg";
import imgRayban from "../../images/rayban.jpg";
import imgChap0lin from '../../images/chap0lin.jpg';

export default function Experiences(){
    const nomeCurto = "XP";
    const nomeExtenso = "EXPERIENCES";
    const corDoTexto = "#C1C1C1";

    //atributos específicos de cada item
    const srcImagem = [
        imgRobotics,
        imgMecajun,
        imgRayban,
        imgChap0lin
        ];
    const titulo = [
        "MS EDUCAÇÃO, Robotics teacher.",
        "MECAJUN, Director of Business.",
        "LUXOTTICA, Factory Process Engineer.",
        "CHAP0LIN SOLUTIONS, Junior React Developer."
        ];
    const texto = 
        [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,

        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,

        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,

        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`
        ];

    return (
        <div className={style.fundo}>
            <div className={style.fundoSecao}>
                <div className={style.secao}>
                    <h1 className={style.nomeCardCurto}>{nomeCurto}</h1>
                    <h1 className={style.nomeCardExtenso}>{nomeExtenso}</h1>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.conteudo}>
                    <div className={style.item}>
                        <Card
                            imgLoc={"left"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[0]}
                            bordaImagem={"0 30px 30px 0"}
                            titulo={titulo[0]}
                            texto={texto[0]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"right"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[1]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[1]}
                            texto={texto[1]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"left"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[2]}
                            bordaImagem={"0 30px 30px 0"}
                            titulo={titulo[2]}
                            texto={texto[2]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"right"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[3]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[3]}
                            texto={texto[3]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                </div>
                <div className={style.conteudo1024}>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[0]}
                            bordaImagem={"30px"}
                            titulo={titulo[0]}
                            texto={texto[0]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[1]}
                            bordaImagem={"30px"}
                            titulo={titulo[1]}
                            texto={texto[1]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div> 
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[2]}
                            bordaImagem={"30px"}
                            titulo={titulo[2]}
                            texto={texto[2]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[3]}
                            bordaImagem={"30px"}
                            titulo={titulo[3]}
                            texto={texto[3]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}