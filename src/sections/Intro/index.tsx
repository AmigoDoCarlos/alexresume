import React from "react";
import style from './Intro.module.scss';
import Image from "../../components/Image";
import astronautIcon from "../../icons/astronaut-icon.png";

export default function Intro(){
    return (
        <div className={style.imgfundo}>
            <div className={style.fundo}>
                <div>
                    <h1 className={style.titulo}>WELCOME</h1>
                    <div className={style.divisor}/>
                    <h2 className={style.subtitulo}>to the awesome resume page of Alexander Paschoaletto</h2>
                </div>
            </div>
        </div>
        )
}


