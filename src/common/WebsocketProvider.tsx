import React, { useEffect } from 'react';

interface Props {
	children: any
}

export const WebsocketContext = React.createContext<any>(42);

const WebsocketProvider: React.FC<Props> = ({
	children
}: Props) => {
	const client = new WebSocket('ws://trainquiz-backend.azurewebsites.net');

	client.onopen = () => console.log('ws open');

	useEffect(() => {
		if (client.readyState === 1) {
			// @ts-ignore
			client.onmessage = (message: string) => console.log(JSON.parse(message));
		}
	}, [client.readyState]);

	client.onclose = () => console.log('ws closed');

	return (
		<WebsocketContext.Provider value={client}>
			{children}
		</WebsocketContext.Provider>
	)
};

export default WebsocketProvider;