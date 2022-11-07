import { DarkModeSwitch } from '../../helpers/SvgSwitch';
import useDarkMode from '../../hooks/useDarkMode';
import { useAuth } from '../../context/AuthProvider';
import { useState } from 'react';

export default function Header() {
	const { auth: usuario } = useAuth();

	const [colorTheme, setTheme] = useDarkMode();
	const [darkSite, setDarkSite] = useState(
		colorTheme === 'light' ? true : false
	);

	//TODO: aqui deje un any
	const toggleDarkMode = (checked: any) => {
		setTheme(colorTheme);
		setDarkSite(checked);
	};

	return (
		<header className='px-6 py-4 flex shadow-md dark:bg-[#363636] justify-between items-center'>
			<span className='bg-pink-500 rounded-full aspect-square w-8 flex justify-center items-center text-xl text-white font-bold cursor-pointer hover:scale-105'>
				{usuario.name.slice(0, 1)}
			</span>
			<DarkModeSwitch
				style={{ marginBottom: 'rem' }}
				checked={darkSite}
				onChange={toggleDarkMode}
				size={20}
				sunColor='black'
			/>
		</header>
	);
}
