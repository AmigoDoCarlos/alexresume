import React from "react";

interface ImageProps{
    src: string;
    w: string;
    h: string;
    b?: string;
    cornerRadius?: string;
}

export default function Image({src, w, h, b, cornerRadius}: ImageProps){
    if(!cornerRadius){
        cornerRadius = "none";
    }
    if(!b){
        b = "none";
    }
    return <img src={src} style={{borderRadius: cornerRadius, width: w, height: h, border: b, objectFit: "cover"}} />
}