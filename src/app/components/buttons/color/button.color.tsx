// ButtonColor.tsx
import React, { useState } from 'react';

interface ButtonColorProps {
    initialColor?: string;
    onColorChange?: (color: string) => void;
}

const ButtonColor: React.FC<ButtonColorProps> = ({ initialColor = '#ffffff', onColorChange }) => {
    const [color, setColor] = useState<string>(initialColor);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
        if (onColorChange) {
            onColorChange(event.target.value);
        }
    };

    return (
        <div>
            <input type="color" value={color} onChange={handleChange} />
            <p>Selected Color: <span style={{ color }}>{color}</span></p>
        </div>
    );
};

export default ButtonColor;