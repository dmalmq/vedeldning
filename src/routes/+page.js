import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'ely16rq2',
	dataset: 'production',
	apiVersion: '2023-07-23',
	useCdn: false,
	token: process.env.SVELTE_PUBLIC_SANITY_TOKEN
});

export async function load({ params }) {
	const data = await client.fetch(`*[_type == "product"]`);

	if (data) {
		return {
			product: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
