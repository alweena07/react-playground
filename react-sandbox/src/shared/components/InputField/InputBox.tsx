import type { InputBoxProps } from '../../types/types';
import styles from './InputField.module.scss';

export const InputBox = ({ type = 'text', placeholder, onChange, value, style }: InputBoxProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            style={style}
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            className={styles.inputBox}
        />
    );
};
