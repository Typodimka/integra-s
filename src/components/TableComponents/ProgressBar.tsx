import React from 'react';
import getColor from '../../hooks/getColor';

interface ProgressBarProps {
    usage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ usage }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '20px',
                borderRadius: '10px',
                background: 'silver',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${usage}%`,
                    height: '100%',
                    borderRadius: '5px',
                    background: getColor(usage),
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px',
                }}
            >
                {usage}%
            </div>
        </div>
    );
};

export default ProgressBar;
