import React from 'react';
import {
    Activity,
    AlertCircle,
    Aperture,
    Award,
    Bookmark,
    Camera,
    Cloud,
    Code,
    Coffee,
    Command,
    Compass,
    Crown,
    Database,
    Flag,
    Heart,
    Home,
    Image,
    Laptop,
    Leaf,
    Zap
} from 'lucide-react';

const ICONS = {
    Activity,
    AlertCircle,
    Aperture,
    Award,
    Bookmark,
    Camera,
    Cloud,
    Code,
    Coffee,
    Command,
    Compass,
    Crown,
    Database,
    Flag,
    Heart,
    Home,
    Image,
    Laptop,
    Leaf,
    Zap
};

export default function LogoPreview({
    selectedIcon,
    iconColor,
    textColor,
    text,
    fontSize,
    iconSize,
    rotation,
    selectedFont,
    previewRef,
}) {
    const Icon = ICONS[selectedIcon];

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="border rounded-lg p-8 flex items-center justify-center min-h-[400px]">
                <div
                    ref={previewRef}
                    className="flex items-center gap-4 p-4"
                    style={{ background: 'transparent' }}
                >
                    <div
                        style={{
                            transform: `rotate(${rotation}deg)`,
                        }}
                    >
                        <Icon size={iconSize} color={iconColor} />
                    </div>
                    <span
                        className={`${selectedFont}`}
                        style={{
                            color: textColor,
                            fontSize: `${fontSize}px`,
                        }}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}