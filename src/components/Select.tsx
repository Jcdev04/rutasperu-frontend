import React, { useState, useEffect, MouseEventHandler } from 'react';
import Select, { components } from 'react-select';
import type {
    ControlProps,
} from 'react-select';

interface SelectsProps {
    selectedDesde: CiudadOption | null;
    setSelectedDesde: React.Dispatch<React.SetStateAction<CiudadOption | null>>;
    selectedHasta: CiudadOption | null;
    setSelectedHasta: React.Dispatch<React.SetStateAction<CiudadOption | null>>;
}

// 1) Define la forma de tu dato tal como viene del fetch
interface CiudadRaw {
    CODIGO: number;
    NOMBDIST: string;
    // cualquier otro campo que traiga tu API...
}

// 2) Define el tipo que usará react-select (value/label)
type CiudadOption = {
    value: number;
    label: string;
};

// Props extra que usas en tu Control
interface EmojiProps {
    emoji: string;
    onEmojiClick: MouseEventHandler;
}

// 3) Componente Control personalizado
const Control = <OptionType extends CiudadOption>(
    props: ControlProps<OptionType, false> & { selectProps: EmojiProps }
) => {
    const { emoji, onEmojiClick } = props.selectProps;
    return (
        <components.Control {...props}>
            <span
                onMouseDown={onEmojiClick}
                style={{ cursor: 'pointer', marginRight: '0.5rem' }}
            >
                {emoji}
            </span>
            {props.children}
        </components.Control>
    );
};


export default function Selects({
    selectedDesde,
    setSelectedDesde,
    selectedHasta,
    setSelectedHasta
}: SelectsProps) {
    const [options, setOptions] = useState<CiudadOption[]>([]);
    const [emoji, setEmoji] = useState('👍');



    // 4) Traer datos y mapear a { value, label }
    useEffect(() => {
        // Definimos la función async dentro del efecto
        const loadDistricts = async () => {
            try {
                const res = await fetch('https://django-production-6562.up.railway.app/api/districts/');
                if (!res.ok) throw new Error(`Error ${res.status}`);
                const data: CiudadRaw[] = await res.json();
                const opts: CiudadOption[] = data.map(ciudad => ({
                    value: ciudad.CODIGO,
                    label: ciudad.NOMBDIST,
                }));
                setOptions(opts);
            } catch (err) {
                console.error('Fallo al cargar distritos:', err);
            }
        };

        loadDistricts();
    }, []);

    const handleEmojiClick: MouseEventHandler = (e) => {
        e.preventDefault();
        // girar emoji aleatorio
        setEmoji(prev => {
            const lista = ['🚗', '🤙', '👏', '👌', '🙌', '✌️', '🖖', '👐'];
            return lista[Math.floor(Math.random() * lista.length)];
        });
    };

    return (
        <>
            <Select<CiudadOption, false>
                // indicamos nuestro Control customizado
                components={{ Control }}
                // pasamos las props extra
                emoji={emoji}
                onEmojiClick={handleEmojiClick}
                options={options}
                value={selectedDesde}
                onChange={(opt) => setSelectedDesde(opt)}
                placeholder="VIAJA DESDE..."
                isClearable
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: '#ddd',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '4px 8px',
                    })
                }}
            />

            <Select<CiudadOption, false>
                // indicamos nuestro Control customizado
                components={{ Control }}
                // pasamos las props extra
                emoji={emoji}
                onEmojiClick={handleEmojiClick}
                options={options}
                placeholder="VIAJA HASTA..."
                isClearable
                value={selectedHasta}
                onChange={(opt) => setSelectedHasta(opt)}
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: '#ddd',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '4px 8px',
                    })
                }}
            />
        </>
    );
}
