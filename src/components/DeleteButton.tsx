import { DataType } from "../types";

type DeleteButtonProps = {
	deletingId: string | undefined;
	dataType: DataType;
	handleDelete: (deletingId: string | undefined, type: DataType) => void;
};

const DeleteButton = ({
	deletingId,
	dataType,
	handleDelete,
}: DeleteButtonProps) => {
	return (
		<button
			className="delete-button button"
			onClick={() => handleDelete(deletingId, dataType)}
		>
			{" "}
			Delete{" "}
		</button>
	);
};

export default DeleteButton;
