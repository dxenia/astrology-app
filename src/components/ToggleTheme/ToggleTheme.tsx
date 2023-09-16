import './ToggleTheme.css';

export interface ToggleThemeProps {
  handleTheme: () => void;
  theme: string;
}

const ToggleTheme = ({ handleTheme, theme }: ToggleThemeProps) => {
  return (
    <button onClick={handleTheme}>
      {theme === 'dark' ? (
        <span>🌞 Switch to light mode</span>
      ) : (
        <span>🌚 Switch to dark mode</span>
      )}
    </button>
  );
};

export default ToggleTheme;
