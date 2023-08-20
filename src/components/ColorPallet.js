import React from 'react'
//import { Saturation, Hue, useColor } from "react-color-palette";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function ColorPallet() {  
    //const [color, setColor] = useColor("hsl(120 100% 50% / .5)");
    const [color, setColor] = useColor("rgb(86 30 203)");

    return <ColorPicker color={color} onChange={setColor} />;
    /* return (
        <div className="custom-layout">
            <Saturation height={300} color={color} onChange={setColor} />
            <Hue color={color} onChange={setColor} />

      </div>
    ); */
}

export default ColorPallet
