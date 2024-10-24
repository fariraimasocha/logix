import React from 'react';
import IconSelector from './IconSelector';
import { FONTS, ICON_SIZES } from '../constants/logo';

export default function ControlPanel({
    selectedIcon,
    onSelectIcon,
    searchTerm,
    onSearchChange,
    text,
    onTextChange,
    selectedFont,
    onFontChange,
    iconColor,
    onIconColorChange,
    textColor,
    onTextColorChange,
    iconSize,
    onIconSizeChange,
    fontSize,
    onFontSizeChange,
    rotation,
    onRotationChange,
    onDownload,
}) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
            <IconSelector
                selectedIcon={selectedIcon}
                onSelectIcon={onSelectIcon}
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
            />

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Brand Text
                    </label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => onTextChange(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Font Family
                    </label>
                    <select
                        value={selectedFont}
                        onChange={(e) => onFontChange(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    >
                        {FONTS.map((font) => (
                            <option key={font} value={font}>
                                {font.replace('font-', '').toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Icon Color
                        </label>
                        <input
                            type="color"
                            value={iconColor}
                            onChange={(e) => onIconColorChange(e.target.value)}
                            className="w-full h-10"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Text Color
                        </label>
                        <input
                            type="color"
                            value={textColor}
                            onChange={(e) => onTextColorChange(e.target.value)}
                            className="w-full h-10"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Icon Size: {iconSize}px
                        </label>
                        <select
                            value={iconSize}
                            onChange={(e) => onIconSizeChange(Number(e.target.value))}
                            className="w-full p-2 border rounded-md"
                        >
                            {ICON_SIZES.map((size) => (
                                <option key={size} value={size}>
                                    {size}px
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Font Size: {fontSize}px
                        </label>
                        <input
                            type="range"
                            min="12"
                            max="72"
                            value={fontSize}
                            onChange={(e) => onFontSizeChange(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Icon Rotation: {rotation}°
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={rotation}
                        onChange={(e) => onRotationChange(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
            </div>

            <button
                onClick={onDownload}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Download Logo
            </button>
        </div>
    );
}