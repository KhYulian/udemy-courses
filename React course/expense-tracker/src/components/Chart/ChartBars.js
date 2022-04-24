import './ChartBar.css';

function ChartBar(props) {
	let barFillHight = '0%';

	if (props.max > 0)
		barFillHight = Math.round((props.value / props.max) * 100) + '%';

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: barFillHight }}></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
}

export default ChartBar;
