import React from "react";
import style from './Future.module.scss';
import Card from "../../components/Card";
import imgPegaso from '../../images/pegaso.jpg';
import imgGoKart from '../../images/gokart.jpg';
import imgSpace from '../../images/space.jpg';


export default function Future(){
    const nomeCurto = "FUTURE";
    const nomeExtenso = "FUTURE PROJECTS";
    const corDoTexto = "#C1C1C1";

    //atributos específicos de cada item
    const srcImagem = [
        imgPegaso,
        imgGoKart,
        imgSpace
        ];
    const titulo = [
        "PEGASO ROBOTICS",
        "ELECTRIC GO-KART",
        "GO TO SPACE"];
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
                    </div>
                </div>
            </div>
        </div>
    )
}