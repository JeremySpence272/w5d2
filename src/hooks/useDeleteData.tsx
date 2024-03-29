import axios from "axios";

const useDeleteData = () => {
	const deleteData = async (endpointUrl: string, id: string): Promise<void> => {
		await axios.delete(`${endpointUrl}/${id}`);
	};

	return deleteData;
};

export default useDeleteData;
