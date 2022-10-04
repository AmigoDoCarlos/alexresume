import React from "react";
import Image from "../Image";
import style from './Card.module.scss';


interface CardProps {
    imgLoc?: string,
    corDoTexto: string,
    srcImagem: string,
    bordaImagem: string,
    titulo: string,
    texto: string
}


export default function Card({imgLoc, corDoTexto, srcImagem, bordaImagem, titulo, texto}:CardProps){
    if(imgLoc){
        if ((imgLoc === "left")||(imgLoc === "esquerda")){
            return (
                <div className={style.conteudoLateral}>
                    <div className={style.imagemLateral}>
                        <Image src={srcImagem} w={"100%"} h={"100%"} cornerRadius={bordaImagem}/>
                    </div>
                    <div className={style.paragrafo} style={{color: corDoTexto}}>
                        <h2 className={style.titulo}>{titulo}</h2>
                        <h3 className={style.texto}>{texto}</h3>
                        {/* <Title size={"30px"}>{titulo}</Title>
                        <Text size={"16px"}>{texto}</Text> */}
                    </div>
                </div>
            )
        }
        if ((imgLoc === "right")||(imgLoc === "direita")){
            return (
                <div className={style.conteudoLateral}>
                    <div className={style.paragrafo} style={{color: corDoTexto}}>
                        <h2 className={style.titulo}>{titulo}</h2>
                        <h3 className={style.texto}>{texto}</h3>
                        {/* <Title size={"30px"}>{titulo}</Title>
                        <Text size={"16px"}>{texto}</Text> */}
                    </div>
                    <div className={style.imagemLateral}>
                        <Image src={srcImagem} w={"100%"} h={"100%"} cornerRadius={bordaImagem}/>
                    </div>
                </div>
            )
        }
        if ((imgLoc === "down")||(imgLoc === "baixo")){
            return (
                <div className={style.conteudoVertical}>
                    <div className={style.paragrafo} style={{color: corDoTexto}}>
                        <h2 className={style.titulo}>{titulo}</h2>
                        <h3 className={style.texto}>{texto}</h3>
                        {/* <Title size={"30px"}>{titulo}</Title>
                        <Text size={"16px"}>{texto}</Text> */}
                    </div>
                    <div className={style.imagemVertical}>
                        <Image src={srcImagem} w={"100%"} h={"100%"} cornerRadius={bordaImagem}/>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={style.conteudoVertical}>
            <div className={style.imagemVertical}>
                <Image src={srcImagem} w={"100%"} h={"100%"} cornerRadius={bordaImagem}/>
            </div>
            <div className={style.paragrafoCentro} style={{color: corDoTexto}}>
                <h2 className={style.titulo}>{titulo}</h2>
                <h3 className={style.texto}>{texto}</h3>
                {/* <Title size={"30px"}>{titulo}</Title>
                <Text size={"16px"}>{texto}</Text> */}
            </div>
        </div>
    )
}