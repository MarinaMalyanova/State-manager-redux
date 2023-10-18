import { PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={styles.cell}
				onClick={() => handleCellClick(index)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);
