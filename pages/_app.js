import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Global from '../components/Global';

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
