import React from "react";


class Container extends React.Component <{
    children: any,
    color: string;
    w: string;
    h: string;
    cornerRadius?: string;
    }> {
    
    render(){
        return (
            <div style={{width: this.props.w, height: this.props.h, borderRadius: this.props.cornerRadius, background: this.props.color}}>
                {this.props.children}
            </div>
        );
    }
}


export default Container;
















// interface ContainerProps{
//     title: string;
//     text: string;
//     color: string;
//     w: string;
//     h: string;
//     cornerRadius?: string;

// }





















// <div style={{width: this.props., height: h, borderRadius: cornerRadius, background: color}}></div>