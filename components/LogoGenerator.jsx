"use client"

import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { FONTS } from '../constants/logo';
import ControlPanel from './ControlPanel';
import LogoPreview from './LogoPreview';
import Image from 'next/image'

export default function LogoGenerator() {
    const [selectedIcon, setSelectedIcon] = useState('Activity');
    const [iconColor, setIconColor] = useState('#000000');
    const [textColor, setTextColor] = useState('#000000');
    const [text, setText] = useState('Your Brand');
    const [fontSize, setFontSize] = useState(32);
    const [iconSize, setIconSize] = useState(48);
    const [rotation, setRotation] = useState(0);
    const [selectedFont, setSelectedFont] = useState(FONTS[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const previewRef = useRef(null);

    const downloadLogo = async () => {
        if (previewRef.current) {
            const dataUrl = await toPng(previewRef.current, { quality: 1.0 });
            const link = document.createElement('a');
            link.download = 'logo.png';
            link.href = dataUrl;
            link.click();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ControlPanel
                        selectedIcon={selectedIcon}
                        onSelectIcon={setSelectedIcon}
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        text={text}
                        onTextChange={setText}
                        selectedFont={selectedFont}
                        onFontChange={setSelectedFont}
                        iconColor={iconColor}
                        onIconColorChange={setIconColor}
                        textColor={textColor}
                        onTextColorChange={setTextColor}
                        iconSize={iconSize}
                        onIconSizeChange={setIconSize}
                        fontSize={fontSize}
                        onFontSizeChange={setFontSize}
                        rotation={rotation}
                        onRotationChange={setRotation}
                        onDownload={downloadLogo}
                    />

                    <LogoPreview
                        selectedIcon={selectedIcon}
                        iconColor={iconColor}
                        textColor={textColor}
                        text={text}
                        fontSize={fontSize}
                        iconSize={iconSize}
                        rotation={rotation}
                        selectedFont={selectedFont}
                        previewRef={previewRef}
                    />
                </div>
            </div>
        </div>
    );
}