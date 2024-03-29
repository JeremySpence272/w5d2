import axios from "axios";

const usePostData = () => {
	const post = async <T,>(endpointUrl: string, data: T): Promise<void> => {
		await axios.post(endpointUrl, data);
	};

	return post;
};

export default usePostData;
