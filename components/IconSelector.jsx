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

export default function IconSelector({
    selectedIcon,
    onSelectIcon,
    searchTerm,
    onSearchChange,
}) {
    const filteredIcons = Object.entries(ICONS).filter(([name]) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Icons
            </label>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Search icons..."
            />
            <div className="mt-4 h-48 overflow-y-auto grid grid-cols-5 gap-2 border rounded-md p-2">
                {filteredIcons.map(([name, Icon]) => (
                    <button
                        key={name}
                        onClick={() => onSelectIcon(name)}
                        className={`p-2 rounded hover:bg-gray-100 flex flex-col items-center gap-1 ${selectedIcon === name ? 'bg-blue-100' : ''
                            }`}
                        title={name}
                    >
                        <Icon size={24} />
                        <span className="text-xs text-gray-600">{name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}