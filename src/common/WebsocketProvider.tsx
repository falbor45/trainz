import React, { useEffect } from 'react';
import {isJSON} from "./_utils/helpers";

interface Props {
	children: any
}

export const WebsocketContext = React.createContext<any>(42);

const WebsocketProvider: React.FC<Props> = ({
	children
}: Props) => {
	const client = new WebSocket('wss://trainquiz-backend-hackyeah.azurewebsites.net');

	client.onopen = () => console.log('ws open');

	client.onmessage = message => {
		console.log({
			...message,
			data: isJSON(message.data) ? JSON.parse(message.data) : message.data
		});
		return ({
			...message,
			data: isJSON(message.data) ? JSON.parse(message.data) : message.data
		})
	};

	client.onclose = event => console.log(event);

	return (
		<WebsocketContext.Provider value={client}>
			{children}
		</WebsocketContext.Provider>
	)
};

export default WebsocketProvider;