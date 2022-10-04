import React from "react";
import Card from "../../components/Card";
import style from './Hobbies.module.scss'

import imgLego from '../../images/porsche.jpg';
import imgRobot from '../../images/robot.jpg';
import img3DPrinting from '../../images/3dprinting.jpg';
import imgPhotography from '../../images/photography.jpg';
import imgLearning from '../../images/learning.jpg';
import imgBike from '../../images/bike.jpg';
import imgTraveling from '../../images/travel.jpg';
import imgCosplay from '../../images/cosplay.jpg';
import imgGames from '../../images/games.jpg';

export default function Hobbies(){
    const nomeCurto = "HOBBIES";
    const nomeExtenso = "HOBBIES & INTERESTS";
    const corDoTexto = "#C1C1C1";

    //atributos específicos de cada item
    const srcImagem = [
        imgLego,
        imgRobot,
        img3DPrinting,
        imgPhotography,
        imgLearning,
        imgBike,
        imgTraveling,
        imgCosplay,
        imgGames
        ];
    const titulo = [
        "LEGO CAR BUILDING",
        "ROBOT CRAFTING",
        "3D PRINTING",
        "PHOTOGRAPHY",
        "LEARNING NEW STUFF",
        "CYCLE RIDING",
        "TRAVELING",
        "COSPLAY MAKING",
        "BOARD & VIDEO GAMING"
        ];
    const texto = [ 
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
                            imgLoc={"up"}
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
                            imgLoc={"up"}
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
                            imgLoc={"up"}
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
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[3]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[3]}
                            texto={texto[3]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[4]}
                            bordaImagem={"0 30px 30px 0"}
                            titulo={titulo[4]}
                            texto={texto[4]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[5]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[5]}
                            texto={texto[5]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[6]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[6]}
                            texto={texto[6]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[7]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[7]}
                            texto={texto[7]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[8]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[8]}
                            texto={texto[8]}/>
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
                            imgLoc={"down"}
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
                    </div>
                    <div className={style.space}></div>
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
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"down"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[4]}
                            bordaImagem={"30px"}
                            titulo={titulo[4]}
                            texto={texto[4]}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[5]}
                            bordaImagem={"30px"}
                            titulo={titulo[5]}
                            texto={texto[5]}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[6]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[6]}
                            texto={texto[6]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"down"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[7]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[7]}
                            texto={texto[7]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                    <div className={style.space}></div>
                    <div className={style.item}>
                        <Card
                            imgLoc={"up"}
                            corDoTexto={corDoTexto}
                            srcImagem={srcImagem[8]}
                            bordaImagem={"30px 0 0 30px"}
                            titulo={titulo[8]}
                            texto={texto[8]}/>
                        <div style={{padding: "1em"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}