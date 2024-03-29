import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

type UseFetchDataResult<T> = {
	response: AxiosResponse<T> | null;
	isPending: boolean;
	error: any | null;
};

const useFetchData = <T,>(endpointUrl: string): UseFetchDataResult<T> => {
	const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
	const [isPending, setIsPending] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetch = async () => {
			try {
				const dataResponse: AxiosResponse<T> = await axios.get(endpointUrl);
				setResponse(dataResponse);
				setIsPending(false);
			} catch (error) {
				setError(error as Error);
				setIsPending(false);
			}
		};
		fetch();
	}, [endpointUrl]);

	return { response, isPending, error };
};

export default useFetchData;
