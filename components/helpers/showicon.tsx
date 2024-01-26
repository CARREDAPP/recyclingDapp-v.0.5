import React from 'react';

interface IconProps {
    icon?: React.ReactNode;
    size?: number;
}

interface IconShadowWidgetProps {
    icon: IconProps;
    showShadow?: boolean;
    shadowColor: string;
}

const IconShadowWidget: React.FC<IconShadowWidgetProps> = ({
    icon,
    showShadow = true,
    shadowColor,
}) => {
    const opacity = 0.2;
    const opacity2 = 0.06;
    const opacity3 = 0.01;
    const dimens = 1.0;
    const dimens2 = 2.0;
    const dimens3 = 3.0;

    const shadowStyle = {
        position: 'absolute' as 'absolute',
        width: icon.size,
        height: icon.size,
        color: shadowColor,
        opacity: opacity3,
    };

    const shadowElements = showShadow
        ? [
            <div style={{ ...shadowStyle, bottom: dimens3, right: dimens3 }} key="shadow1">
                {icon.icon}
            </div>,
            // ... (other shadow elements)
        ]
        : [];

    return (
        <div style={{ position: 'relative', width: icon.size, height: icon.size }}>
            {shadowElements}
            <div
                style={{
                    position: 'absolute' as 'absolute',
                    width: icon.size,
                    height: icon.size,
                    filter: 'blur(0.9px)',
                }}
            >
                {icon.icon}
            </div>
            <div style={{ position: 'absolute' as 'absolute', width: icon.size, height: icon.size }}>
                {icon.icon}
            </div>
        </div>
    );
};

export default IconShadowWidget;