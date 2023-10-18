import { FieldLayout } from './field-layout';

export const Field = ({ field, handleCellClick }) => {
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
