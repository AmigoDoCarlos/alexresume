import React from "react";
import Image from "../../components/Image";
import style from "./Bio.module.scss";
import imgProfile from "../../images/profile.jpg";
import imgProfile2 from "../../images/profile2.jpg";
import Card from "../../components/Card";

export default function Bio(){
    const nomeCurto= "BIO";
    const nomeExtenso="BIOGRAPHY";
    const corDoTexto = "#C1C1C1";

    //atributos específicos de cada item
    const bordaImagem = "40px";
    const titulo = "ALEX, 25.";
    const texto = 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`;

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
                    <Card
                        imgLoc={"top"}
                        srcImagem={imgProfile}
                        corDoTexto={corDoTexto}
                        bordaImagem={bordaImagem}
                        titulo={titulo}
                        texto={texto}/>
                </div>
                <div className={style.conteudo1024}>
                    <div className={style.perfil}>
                        <Image src={imgProfile} w={"100%"} h={"100%"} cornerRadius={"40px 0 0 40px"}/>
                    </div>
                    <Card
                        imgLoc={"left"}
                        srcImagem={imgProfile2}
                        corDoTexto={corDoTexto}
                        bordaImagem={"0 40px 40px 0"}
                        titulo={titulo}
                        texto={texto}/>
                </div>
            </div>
         </div>
    )
}








{/* <Card
    imgLoc={imgLoc}
    srcImagem={profileImg}
    corDoTexto={corDoTexto}
    bordaImagem={bordaImagem}
    titulo={titulo}
    texto={texto}/> */}













// se precisar:
    //return (
    //     <div className={style.fundo} style={{background: corExterna}}>
    //         <div className={style.card} style={{borderRadius: bordaCard, background: corDoCard}}>
    //             <div className={style.secao} style={{color: corExterna}}>
    //                 <Title size={"20px"}>{nomeDoCard}</Title>
    //             </div>
    //             <div className={style.conteudo}>
    //                 <div className={style.imagem}>
    //                     <Image src={srcImagem} w={"100%"} h={"100%"} cornerRadius={bordaImagem}/>
    //                 </div>
    //                 <p className={style.texto} style={{color: corDoTexto}}>
    //                     <Title size={"30px"}>{titulo}</Title>
    //                     <br></br>
    //                     <Text size={"16px"}>{texto}</Text>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // )