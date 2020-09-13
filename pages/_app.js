import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Global } from '../components';
import 'typeface-arvo';
import 'typeface-cabin';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const theme = {
	colors: {
		primary: '#060',
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<Global />
			</ThemeProvider>
		);
	}
}
